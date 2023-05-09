# message

### Available Operations

* [getMessages](#getmessages) - Retrieve Messages
* [getMessagesSend](#getmessagessend) - Send message by simple GET or POST
* [getMessagesId](#getmessagesid) - Show Message
* [getMessagesIdRelatedReceivedMessages](#getmessagesidrelatedreceivedmessages) - List Related Messages
* [postMessages](#postmessages) - Send Messages

## getMessages

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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMessagesRequest;
import org.openapis.openapi.models.operations.GetMessagesResponse;
import org.openapis.openapi.models.operations.GetMessagesSecurity;
import org.openapis.openapi.models.operations.GetMessagesSortOrderEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetMessagesRequest req = new GetMessagesRequest() {{
                filter = "magnam";
                limit = 8917.73;
                sortOrder = GetMessagesSortOrderEnum.ASCENDING;
            }};            

            GetMessagesResponse res = sdk.message.getMessages(req, new GetMessagesSecurity("ipsa", "delectus") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.messages != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMessagesSend

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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMessagesSendRequest;
import org.openapis.openapi.models.operations.GetMessagesSendResponse;
import org.openapis.openapi.models.operations.GetMessagesSendSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetMessagesSendRequest req = new GetMessagesSendRequest("tempora", "suscipit") {{
                deduplicationId = 477665L;
            }};            

            GetMessagesSendResponse res = sdk.message.getMessagesSend(req, new GetMessagesSendSecurity("minus", "placeat") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.messages != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMessagesId

Get a the message by `id`.
```http
GET /v1/messages/4023457654
```


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMessagesIdRequest;
import org.openapis.openapi.models.operations.GetMessagesIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatum", "iusto") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetMessagesIdRequest req = new GetMessagesIdRequest("excepturi");            

            GetMessagesIdResponse res = sdk.message.getMessagesId(req);

            if (res.message != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMessagesIdRelatedReceivedMessages

Get the messages related to a sent message identified by `id`.

For more information how this work, see the `relatedSentMessageId` field in the message.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMessagesIdRelatedReceivedMessagesRequest;
import org.openapis.openapi.models.operations.GetMessagesIdRelatedReceivedMessagesResponse;
import org.openapis.openapi.models.operations.GetMessagesIdRelatedReceivedMessagesSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetMessagesIdRelatedReceivedMessagesRequest req = new GetMessagesIdRelatedReceivedMessagesRequest("nisi");            

            GetMessagesIdRelatedReceivedMessagesResponse res = sdk.message.getMessagesIdRelatedReceivedMessages(req, new GetMessagesIdRelatedReceivedMessagesSecurity("recusandae", "temporibus") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.messages != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postMessages

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

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostMessagesRequest;
import org.openapis.openapi.models.operations.PostMessagesResponse;
import org.openapis.openapi.models.operations.PostMessagesSecurity;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SubmissionEntry;
import org.openapis.openapi.models.shared.SubmissionEntryDeliveryReportsEnum;
import org.openapis.openapi.models.shared.SubmissionEntryEncodingEnum;
import org.openapis.openapi.models.shared.SubmissionEntryFrom;
import org.openapis.openapi.models.shared.SubmissionEntryFromTypeEnum;
import org.openapis.openapi.models.shared.SubmissionEntryMessageClassEnum;
import org.openapis.openapi.models.shared.SubmissionEntryProtocolIdEnum;
import org.openapis.openapi.models.shared.SubmissionEntryRoutingGroupEnum;
import org.openapis.openapi.models.shared.SubmissionEntryTo;
import org.openapis.openapi.models.shared.SubmissionEntryToTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostMessagesRequest req = new PostMessagesRequest(                new org.openapis.openapi.models.shared.SubmissionEntry[]{{
                                add(new SubmissionEntry("Hi there!",                 new org.openapis.openapi.models.shared.SubmissionEntryTo[]{{
                                                    add(new SubmissionEntryTo() {{
                                                        address = "3896 Reinger Plains";
                                                        fields = new String[]{{
                                                            add("deleniti"),
                                                            add("sapiente"),
                                                            add("amet"),
                                                        }};
                                                        id = "a6699707-4ba4-4469-b6e2-141959890afa";
                                                        name = "Natalie Ernser";
                                                        type = SubmissionEntryToTypeEnum.INTERNATIONAL;
                                                    }}),
                                                }}) {{
                                    body = "Hi there!";
                                    deliveryReports = SubmissionEntryDeliveryReportsEnum.ERRORS;
                                    encoding = SubmissionEntryEncodingEnum.TEXT;
                                    from = new SubmissionEntryFrom(SubmissionEntryFromTypeEnum.INTERNATIONAL) {{
                                        address = "1111111";
                                        type = SubmissionEntryFromTypeEnum.SHORTCODE;
                                    }};
                                    longMessageMaxParts = 99;
                                    messageClass = SubmissionEntryMessageClassEnum.ME_SPECIFIC;
                                    protocolId = SubmissionEntryProtocolIdEnum.ME_DOWNLOAD;
                                    routingGroup = SubmissionEntryRoutingGroupEnum.PREMIUM;
                                    to = new org.openapis.openapi.models.shared.SubmissionEntryTo[]{{
                                        add(new SubmissionEntryTo() {{
                                            address = "88947 Koepp Manors";
                                            fields = new String[]{{
                                                add("dolorum"),
                                                add("dicta"),
                                                add("nam"),
                                                add("officia"),
                                            }};
                                            id = "928fc816-742c-4b73-9205-929396fea759";
                                            name = "Mr. Kerry Predovic";
                                            type = SubmissionEntryToTypeEnum.GROUP;
                                        }}),
                                        add(new SubmissionEntryTo() {{
                                            address = "6123 Nestor Gardens";
                                            fields = new String[]{{
                                                add("nemo"),
                                                add("minima"),
                                                add("excepturi"),
                                            }};
                                            id = "07aff1a3-a2fa-4946-b739-251aa52c3f5a";
                                            name = "Richard Boyer";
                                            type = SubmissionEntryToTypeEnum.GROUP;
                                        }}),
                                        add(new SubmissionEntryTo() {{
                                            address = "99845 Bednar Parks";
                                            fields = new String[]{{
                                                add("cum"),
                                                add("perferendis"),
                                            }};
                                            id = "074f1547-1b5e-46e1-bb99-d488e1e91e45";
                                            name = "Monique Spinka";
                                            type = SubmissionEntryToTypeEnum.GROUP;
                                        }}),
                                        add(new SubmissionEntryTo() {{
                                            address = "221 Kyler Mission";
                                            fields = new String[]{{
                                                add("magni"),
                                            }};
                                            id = "d502a94b-b4f6-43c9-a9e9-a3efa77dfb14";
                                            name = "Irving Jenkins";
                                            type = SubmissionEntryToTypeEnum.GROUP;
                                        }}),
                                    }};
                                    userSuppliedId = "submission-12765";
                                }}),
                            }}) {{
                autoUnicode = false;
                deduplicationId = 97260;
                scheduleDate = OffsetDateTime.parse("2022-01-06T19:47:24.047Z");
                scheduleDescription = "debitis";
            }};            

            PostMessagesResponse res = sdk.message.postMessages(req, new PostMessagesSecurity("eius", "maxime") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.messages != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
