# Message

### Available Operations

* [GetMessages](#getmessages) - Retrieve Messages
* [GetMessagesSend](#getmessagessend) - Send message by simple GET or POST
* [GetMessagesID](#getmessagesid) - Show Message
* [GetMessagesIDRelatedReceivedMessages](#getmessagesidrelatedreceivedmessages) - List Related Messages
* [PostMessages](#postmessages) - Send Messages

## GetMessages

Retrieve the messages you have sent or received.  

Scheduled messages are available for retrieval only after the delivery date.

All the parameters are optional.  If a value is not supplied for `filter`, the messages are not filtered.

Messages can be filtered by supplying query clauses in the `filter` parameter. Each clause has the form `name=value` where `name` is the name of a filter field and `value` is a valid value for that field.  A value for a field is optional. Include a clause for a field in the filter only when there is a need to fetch messages that match some value for that field.
For a numeric filter field, you can also use the less than operator (`<`).

If present, the filter value must have at least one clause, but it can contain a combination of clauses. Multiple clauses are separated with the `&` symbol.  Semantically, multiple clauses form a [logical conjunction](https://en.wikipedia.org/wiki/Logical_conjunction).

For example, if you want to list all messages that were sent as part of a particular submission, your filter contains two clauses and will look something like this
```
type%3DSENT&submission.id%3D1-00000000000522347562
```
Because `filter` is a request parameter, it is important to note that the value for this parameter must be *URL encoded*. In particular, the `=` encodes to `%3D` and the `&` encodes to `%26`.  Note that you do not have to encode the `<` character.

Using the previous example to illustrate; after encoding and encasing it, the clauses are transformed into a request that looks like this
```
GET /v1/messages?filter=type%3DSENT%26submission.id%3D1-00000000000522347562
```
If the field name or the field value of a clause is not valid, a [bad_request error](errors#bad-request) is returned instead of the usual result.  The `detail` field of this error provides more information about the problem.

The table below lists the fields available for filtering

| Field | Type   | Values | Note and example |
|-------|------|--------------------|------|
| id            | Integer  | Positive integer  | Use the `id` field with `<` (or with `>`) to fetch messages that are older (or newer) than those that are already fetched. <br/>`filter=id<123456` |
| type          | String  | SENT, RECEIVED  | SENT are Mobile Terminating (MT) SMSs; RECEIVED are Mobile Originating (MO) SMSs.<br/>`filter=type%3DSENT` |
| submission.id | String  |  | `filter=submission.id%3D1-00000000000522347562` |
| status.type   | String  | ACCEPTED, SENT, DELIVERED, FAILED  | See the message `status.type` field for more information. <br/>`filter=status.type%3DDELIVERED` |
| status.id| String  |  | See the message `status.id` field for more information. `filter=status.id%3DFAILED.EXPIRED`|
| submission.date | String | Formatted Date | A fully specified date (e.g. 2017-01-01T10:00:00+01:00).  Use this field with `<=`, `<`, `>` or `>=` to limit the values. <br/>`filter=submission.date%3E%3D2017-01-01T10%3A00%3A00%2B01%3A00` |
| userSuppliedId  | String | | Use a string value you specified in the `userSuppliedId` property when you sent the message. Only `SENT` messages will be retrieved. <br/>`filter=userSuppliedId%3Dacc009876` |


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Message.GetMessages(ctx, operations.GetMessagesRequest{
        Filter: sdk.String("quibusdam"),
        Limit: sdk.Float64(6027.63),
        SortOrder: operations.GetMessagesSortOrderEnumAscending.ToPointer(),
    }, operations.GetMessagesSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Messages != nil {
        // handle response
    }
}
```

## GetMessagesSend

A really simple interface for people who require a GET mechanism to submit a single message.

The URI is interpreted as UTF-8. HTTP Basic Auth is used for authentication.

__Note__ BulkSMS recommends that you use the more flexible Send Messages Operation when submitting SMS messages from your application.

Here is an example of a GET
```http
GET /v1/messages/send?to=%2b270000000&body=Hello%20World
```

You can also use the same parameters to POST form encoded fields to `/messages`.
Here is an example of a POST
```http
POST /v1/messages
Content-Type: application/x-www-form-urlencoded

to=%2b27000000000&body=Hello+World
```


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Message.GetMessagesSend(ctx, operations.GetMessagesSendRequest{
        Body: "nulla",
        DeduplicationID: sdk.Int64(544883),
        To: "illum",
    }, operations.GetMessagesSendSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Messages != nil {
        // handle response
    }
}
```

## GetMessagesID

Get a the message by `id`.
```http
GET /v1/messages/4023457654
```


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Message.GetMessagesID(ctx, operations.GetMessagesIDRequest{
        ID: "69a674e0-f467-4cc8-b96e-d151a05dfc2d",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Message != nil {
        // handle response
    }
}
```

## GetMessagesIDRelatedReceivedMessages

Get the messages related to a sent message identified by `id`.

For more information how this work, see the `relatedSentMessageId` field in the message.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Message.GetMessagesIDRelatedReceivedMessages(ctx, operations.GetMessagesIDRelatedReceivedMessagesRequest{
        ID: "df7cc78c-a1ba-4928-bc81-6742cb739205",
    }, operations.GetMessagesIDRelatedReceivedMessagesSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Messages != nil {
        // handle response
    }
}
```

## PostMessages

Send messages to one or more recipients.

You can post up to `30 000` messages in a batch. 
But note that the `deduplication-id` is set per submission, so it is recommended that you use a smaller number, like `4000` per submission in order to make resubmissions on network failures more practical.

#### Repliability

When a sent message is _repliable_,  the BulkSMS system can process an SMS response sent by your recipient.

The message sent by your customer is called a mobile originating (MO) message and would be available under `RECEIVED` messages. 
You can obtain a list of MOs using the [retrieve messages API call](#tag/Message%2Fpaths%2F~1messages%2Fget).
In addition you can also get a list of the MOs that are associated with a specific sent message (see the [list related messages API call](#tag/Message%2Fpaths%2F~1messages~1%7Bid%7D~1relatedReceivedMessages%2Fget)).

If you use a specific _sender id_ in the `from` property of the send message, the message will not be repliable.
If you want a message to be repliable, you need to specify `REPLIABLE` in the `from.type` property.

If you do not set the `from` property, your account settings are considered to determine whether or not the message is repliable.
If the _default repliable_ setting on your account is _yes_ then the message will be repliable. 
If this setting is _no_, the message will not be repliable.


#### Body templates

When sending a message you can use template fields to customise the message text.

*Field based templates* allow you to create a message with place-holders for custom fields.  Fields are identified by a zero based index; the first field is `F0`, the second is `F1` and so on.  

For example, let's say you want to send a daily SMS message to all your clients that tell them what their current balance is.  The `body` of the message could look something like this 

```
Good morning {F0######}, your balance is {F1######}
```

In this message, the first field, `F0`, is the name  of the customer and he second field `F1` is the balance for that customer.  The `#` used to specify the maximum length  of the field.  Note that the maximum length allowed for the value includes the space taken by the braces, template name and hash symbol.  For example, the value `{F0#}` specifies a maximum length of `5`.  If the data is longer than this length, the data will be truncated when the message body is constructed.

The data fields are provided in the property named `fields` in the `to` element.  Here is a complete example of how this might look

```
{
  "body": "Good morning {F0######}, your balance is {F1######}",
  "to":  [
      {"address": "27456789","fields": ["Harry", "$1345.23"] },
      {"address": "27456785","fields": ["Sally", "$2345.58"] }
  ]
}
```

If you are sending to contacts (or to groups) in your phonebook, you can use the *Phonebook based templates*.  These are similar to the templates described above, but they have specific names. The template for the contact's first name is identified by `fn` and the template for the contact's surname is identified by `sn`.  Below in an example that will work if the numbers are registered in your phonebook. 

```
{
  "body": "Hi {fn######} {sn######}, have a great day!",
  "to":  [
      {"address": "27456789" },
      {"address": "27456785" }
  ]
}
```


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Message.PostMessages(ctx, operations.PostMessagesRequest{
        RequestBody: []shared.SubmissionEntry{
            shared.SubmissionEntry{
                Body: "Hi there!",
                DeliveryReports: shared.SubmissionEntryDeliveryReportsEnumAll.ToPointer(),
                Encoding: shared.SubmissionEntryEncodingEnumUnicode.ToPointer(),
                From: &shared.SubmissionEntryFrom{
                    Address: sdk.String("1111111"),
                    Type: shared.SubmissionEntryFromTypeEnumInternational,
                },
                LongMessageMaxParts: sdk.Int(99),
                MessageClass: shared.SubmissionEntryMessageClassEnumSimSpecific.ToPointer(),
                ProtocolID: shared.SubmissionEntryProtocolIDEnumReplaceMessage4.ToPointer(),
                RoutingGroup: shared.SubmissionEntryRoutingGroupEnumPremium.ToPointer(),
                To: []shared.SubmissionEntryTo{
                    shared.SubmissionEntryTo{
                        Address: sdk.String("436 Sterling Ramp"),
                        Fields: []string{
                            "ipsa",
                        },
                        ID: sdk.String("faaa2352-c595-4590-baff-1a3a2fa94677"),
                        Name: sdk.String("Sabrina Cronin MD"),
                        Type: shared.SubmissionEntryToTypeEnumGroup.ToPointer(),
                    },
                    shared.SubmissionEntryTo{
                        Address: sdk.String("17193 Schuster Branch"),
                        Fields: []string{
                            "error",
                        },
                        ID: sdk.String("da1ffe78-f097-4b00-b4f1-5471b5e6e13b"),
                        Name: sdk.String("Andy Streich"),
                        Type: shared.SubmissionEntryToTypeEnumGroup.ToPointer(),
                    },
                    shared.SubmissionEntryTo{
                        Address: sdk.String("095 Tobin Forge"),
                        Fields: []string{
                            "consequatur",
                            "est",
                        },
                        ID: sdk.String("d2abd442-6980-42d5-82a9-4bb4f63c969e"),
                        Name: sdk.String("Luke Fadel"),
                        Type: shared.SubmissionEntryToTypeEnumGroup.ToPointer(),
                    },
                    shared.SubmissionEntryTo{
                        Address: sdk.String("4896 Elfrieda Run"),
                        Fields: []string{
                            "ea",
                            "aliquid",
                            "laborum",
                            "accusamus",
                        },
                        ID: sdk.String("395efb9b-a88f-43a6-a997-074ba4469b6e"),
                        Name: sdk.String("Ms. Julie Gusikowski"),
                        Type: shared.SubmissionEntryToTypeEnumGroup.ToPointer(),
                    },
                },
                UserSuppliedID: sdk.String("submission-12765"),
            },
            shared.SubmissionEntry{
                Body: "Hi there!",
                DeliveryReports: shared.SubmissionEntryDeliveryReportsEnumErrors.ToPointer(),
                Encoding: shared.SubmissionEntryEncodingEnumUnicode.ToPointer(),
                From: &shared.SubmissionEntryFrom{
                    Address: sdk.String("1111111"),
                    Type: shared.SubmissionEntryFromTypeEnumInternational,
                },
                LongMessageMaxParts: sdk.Int(99),
                MessageClass: shared.SubmissionEntryMessageClassEnumSimSpecific.ToPointer(),
                ProtocolID: shared.SubmissionEntryProtocolIDEnumSimDownload.ToPointer(),
                RoutingGroup: shared.SubmissionEntryRoutingGroupEnumStandard.ToPointer(),
                To: []shared.SubmissionEntryTo{
                    shared.SubmissionEntryTo{
                        Address: sdk.String("2813 Hubert Way"),
                        Fields: []string{
                            "eius",
                            "maxime",
                            "deleniti",
                            "facilis",
                        },
                        ID: sdk.String("711e5b7f-d2ed-4028-921c-ddc692601fb5"),
                        Name: sdk.String("Dr. Stacey Reichert"),
                        Type: shared.SubmissionEntryToTypeEnumGroup.ToPointer(),
                    },
                    shared.SubmissionEntryTo{
                        Address: sdk.String("82073 Renner Route"),
                        Fields: []string{
                            "quis",
                        },
                        ID: sdk.String("87053202-c73d-45fe-9b90-c28909b3fe49"),
                        Name: sdk.String("Casey Stracke"),
                        Type: shared.SubmissionEntryToTypeEnumGroup.ToPointer(),
                    },
                },
                UserSuppliedID: sdk.String("submission-12765"),
            },
            shared.SubmissionEntry{
                Body: "Hi there!",
                DeliveryReports: shared.SubmissionEntryDeliveryReportsEnumNone.ToPointer(),
                Encoding: shared.SubmissionEntryEncodingEnumText.ToPointer(),
                From: &shared.SubmissionEntryFrom{
                    Address: sdk.String("1111111"),
                    Type: shared.SubmissionEntryFromTypeEnumShortcode,
                },
                LongMessageMaxParts: sdk.Int(99),
                MessageClass: shared.SubmissionEntryMessageClassEnumMeSpecific.ToPointer(),
                ProtocolID: shared.SubmissionEntryProtocolIDEnumReplaceMessage1.ToPointer(),
                RoutingGroup: shared.SubmissionEntryRoutingGroupEnumEconomy.ToPointer(),
                To: []shared.SubmissionEntryTo{
                    shared.SubmissionEntryTo{
                        Address: sdk.String("29574 Waldo Fall"),
                        Fields: []string{
                            "numquam",
                            "veritatis",
                            "ipsa",
                        },
                        ID: sdk.String("0674ebf6-9280-4d1b-a77a-89ebf737ae42"),
                        Name: sdk.String("Wendy Rosenbaum"),
                        Type: shared.SubmissionEntryToTypeEnumGroup.ToPointer(),
                    },
                },
                UserSuppliedID: sdk.String("submission-12765"),
            },
        },
        AutoUnicode: sdk.Bool(false),
        DeduplicationID: sdk.Int(383464),
        ScheduleDate: types.MustTimeFromString("2021-10-28T12:41:02.358Z"),
        ScheduleDescription: sdk.String("minima"),
    }, operations.PostMessagesSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Messages != nil {
        // handle response
    }
}
```
