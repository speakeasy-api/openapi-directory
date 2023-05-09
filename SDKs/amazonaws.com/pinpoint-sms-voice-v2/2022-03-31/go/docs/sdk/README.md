# SDK

## Overview

<p>Welcome to the <i>Amazon Pinpoint SMS and Voice, version 2 API Reference</i>. This guide provides information about Amazon Pinpoint SMS and Voice, version 2 API resources, including supported HTTP methods, parameters, and schemas.</p> <p>Amazon Pinpoint is an Amazon Web Services service that you can use to engage with your recipients across multiple messaging channels. The Amazon Pinpoint SMS and Voice, version 2 API provides programmatic access to options that are unique to the SMS and voice channels and supplements the resources provided by the Amazon Pinpoint API.</p> <p>If you're new to Amazon Pinpoint, it's also helpful to review the <a href="https://docs.aws.amazon.com/pinpoint/latest/developerguide/welcome.html"> Amazon Pinpoint Developer Guide</a>. The <i>Amazon Pinpoint Developer Guide</i> provides tutorials, code samples, and procedures that demonstrate how to use Amazon Pinpoint features programmatically and how to integrate Amazon Pinpoint functionality into mobile apps and other types of applications. The guide also provides key information, such as Amazon Pinpoint integration with other Amazon Web Services services, and the quotas that apply to use of the service.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/sms-voice/>
### Available Operations

* [AssociateOriginationIdentity](#associateoriginationidentity) - <p>Associates the specified origination identity with a pool.</p> <p>If the origination identity is a phone number and is already associated with another pool, an Error is returned. A sender ID can be associated with multiple pools.</p> <p>If the origination identity configuration doesn't match the pool's configuration, an Error is returned.</p>
* [CreateConfigurationSet](#createconfigurationset) - <p>Creates a new configuration set. After you create the configuration set, you can add one or more event destinations to it.</p> <p>A configuration set is a set of rules that you apply to the SMS and voice messages that you send.</p> <p>When you send a message, you can optionally specify a single configuration set.</p>
* [CreateEventDestination](#createeventdestination) - <p>Creates a new event destination in a configuration set.</p> <p>An event destination is a location where you send message events. The event options are Amazon CloudWatch, Amazon Kinesis Data Firehose, or Amazon SNS. For example, when a message is delivered successfully, you can send information about that event to an event destination, or send notifications to endpoints that are subscribed to an Amazon SNS topic.</p> <p>Each configuration set can contain between 0 and 5 event destinations. Each event destination can contain a reference to a single destination, such as a CloudWatch or Kinesis Data Firehose destination.</p>
* [CreateOptOutList](#createoptoutlist) - <p>Creates a new opt-out list.</p> <p>If the opt-out list name already exists, an Error is returned.</p> <p>An opt-out list is a list of phone numbers that are opted out, meaning you can't send SMS or voice messages to them. If end user replies with the keyword "STOP," an entry for the phone number is added to the opt-out list. In addition to STOP, your recipients can use any supported opt-out keyword, such as CANCEL or OPTOUT. For a list of supported opt-out keywords, see <a href="https://docs.aws.amazon.com/pinpoint/latest/userguide/channels-sms-manage.html#channels-sms-manage-optout"> SMS opt out </a> in the <i>Amazon Pinpoint User Guide</i>.</p>
* [CreatePool](#createpool) - <p>Creates a new pool and associates the specified origination identity to the pool. A pool can include one or more phone numbers and SenderIds that are associated with your Amazon Web Services account.</p> <p>The new pool inherits its configuration from the specified origination identity. This includes keywords, message type, opt-out list, two-way configuration, and self-managed opt-out configuration. Deletion protection isn't inherited from the origination identity and defaults to false.</p> <p>If the origination identity is a phone number and is already associated with another pool, an Error is returned. A sender ID can be associated with multiple pools.</p>
* [DeleteConfigurationSet](#deleteconfigurationset) - <p>Deletes an existing configuration set.</p> <p>A configuration set is a set of rules that you apply to voice and SMS messages that you send. In a configuration set, you can specify a destination for specific types of events related to voice and SMS messages. </p>
* [DeleteDefaultMessageType](#deletedefaultmessagetype) - <p>Deletes an existing default message type on a configuration set.</p> <p> A message type is a type of messages that you plan to send. If you send account-related messages or time-sensitive messages such as one-time passcodes, choose <b>Transactional</b>. If you plan to send messages that contain marketing material or other promotional content, choose <b>Promotional</b>. This setting applies to your entire Amazon Web Services account. </p>
* [DeleteDefaultSenderID](#deletedefaultsenderid) - <p>Deletes an existing default sender ID on a configuration set.</p> <p>A default sender ID is the identity that appears on recipients' devices when they receive SMS messages. Support for sender ID capabilities varies by country or region.</p>
* [DeleteEventDestination](#deleteeventdestination) - <p>Deletes an existing event destination.</p> <p>An event destination is a location where you send response information about the messages that you send. For example, when a message is delivered successfully, you can send information about that event to an Amazon CloudWatch destination, or send notifications to endpoints that are subscribed to an Amazon SNS topic.</p>
* [DeleteKeyword](#deletekeyword) - <p>Deletes an existing keyword from an origination phone number or pool.</p> <p>A keyword is a word that you can search for on a particular phone number or pool. It is also a specific word or phrase that an end user can send to your number to elicit a response, such as an informational message or a special offer. When your number receives a message that begins with a keyword, Amazon Pinpoint responds with a customizable message.</p> <p>Keywords "HELP" and "STOP" can't be deleted or modified.</p>
* [DeleteOptOutList](#deleteoptoutlist) - <p>Deletes an existing opt-out list. All opted out phone numbers in the opt-out list are deleted.</p> <p>If the specified opt-out list name doesn't exist or is in-use by an origination phone number or pool, an Error is returned.</p>
* [DeleteOptedOutNumber](#deleteoptedoutnumber) - <p>Deletes an existing opted out destination phone number from the specified opt-out list.</p> <p>Each destination phone number can only be deleted once every 30 days.</p> <p>If the specified destination phone number doesn't exist or if the opt-out list doesn't exist, an Error is returned.</p>
* [DeletePool](#deletepool) - <p>Deletes an existing pool. Deleting a pool disassociates all origination identities from that pool.</p> <p>If the pool status isn't active or if deletion protection is enabled, an Error is returned.</p> <p>A pool is a collection of phone numbers and SenderIds. A pool can include one or more phone numbers and SenderIds that are associated with your Amazon Web Services account.</p>
* [DeleteTextMessageSpendLimitOverride](#deletetextmessagespendlimitoverride) - Deletes an account-level monthly spending limit override for sending text messages. Deleting a spend limit override will set the <code>EnforcedLimit</code> to equal the <code>MaxLimit</code>, which is controlled by Amazon Web Services. For more information on spend limits (quotas) see <a href="https://docs.aws.amazon.com/pinpoint/latest/developerguide/quotas.html">Amazon Pinpoint quotas </a> in the <i>Amazon Pinpoint Developer Guide</i>.
* [DeleteVoiceMessageSpendLimitOverride](#deletevoicemessagespendlimitoverride) - Deletes an account level monthly spend limit override for sending voice messages. Deleting a spend limit override sets the <code>EnforcedLimit</code> equal to the <code>MaxLimit</code>, which is controlled by Amazon Web Services. For more information on spending limits (quotas) see <a href="https://docs.aws.amazon.com/pinpoint/latest/developerguide/quotas.html">Amazon Pinpoint quotas</a> in the <i>Amazon Pinpoint Developer Guide</i>.
* [DescribeAccountAttributes](#describeaccountattributes) - <p>Describes attributes of your Amazon Web Services account. The supported account attributes include account tier, which indicates whether your account is in the sandbox or production environment. When you're ready to move your account out of the sandbox, create an Amazon Web Services Support case for a service limit increase request.</p> <p>New Amazon Pinpoint accounts are placed into an SMS or voice sandbox. The sandbox protects both Amazon Web Services end recipients and SMS or voice recipients from fraud and abuse. </p>
* [DescribeAccountLimits](#describeaccountlimits) - <p>Describes the current Amazon Pinpoint SMS Voice V2 resource quotas for your account. The description for a quota includes the quota name, current usage toward that quota, and the quota's maximum value.</p> <p>When you establish an Amazon Web Services account, the account has initial quotas on the maximum number of configuration sets, opt-out lists, phone numbers, and pools that you can create in a given Region. For more information see <a href="https://docs.aws.amazon.com/pinpoint/latest/developerguide/quotas.html"> Amazon Pinpoint quotas </a> in the <i>Amazon Pinpoint Developer Guide</i>.</p>
* [DescribeConfigurationSets](#describeconfigurationsets) - <p>Describes the specified configuration sets or all in your account.</p> <p>If you specify configuration set names, the output includes information for only the specified configuration sets. If you specify filters, the output includes information for only those configuration sets that meet the filter criteria. If you don't specify configuration set names or filters, the output includes information for all configuration sets.</p> <p>If you specify a configuration set name that isn't valid, an error is returned.</p>
* [DescribeKeywords](#describekeywords) - <p>Describes the specified keywords or all keywords on your origination phone number or pool.</p> <p>A keyword is a word that you can search for on a particular phone number or pool. It is also a specific word or phrase that an end user can send to your number to elicit a response, such as an informational message or a special offer. When your number receives a message that begins with a keyword, Amazon Pinpoint responds with a customizable message.</p> <p>If you specify a keyword that isn't valid, an Error is returned.</p>
* [DescribeOptOutLists](#describeoptoutlists) - <p>Describes the specified opt-out list or all opt-out lists in your account.</p> <p>If you specify opt-out list names, the output includes information for only the specified opt-out lists. Opt-out lists include only those that meet the filter criteria. If you don't specify opt-out list names or filters, the output includes information for all opt-out lists.</p> <p>If you specify an opt-out list name that isn't valid, an Error is returned.</p>
* [DescribeOptedOutNumbers](#describeoptedoutnumbers) - <p>Describes the specified opted out destination numbers or all opted out destination numbers in an opt-out list.</p> <p>If you specify opted out numbers, the output includes information for only the specified opted out numbers. If you specify filters, the output includes information for only those opted out numbers that meet the filter criteria. If you don't specify opted out numbers or filters, the output includes information for all opted out destination numbers in your opt-out list.</p> <p>If you specify an opted out number that isn't valid, an Error is returned.</p>
* [DescribePhoneNumbers](#describephonenumbers) - <p>Describes the specified origination phone number, or all the phone numbers in your account.</p> <p>If you specify phone number IDs, the output includes information for only the specified phone numbers. If you specify filters, the output includes information for only those phone numbers that meet the filter criteria. If you don't specify phone number IDs or filters, the output includes information for all phone numbers.</p> <p>If you specify a phone number ID that isn't valid, an Error is returned.</p>
* [DescribePools](#describepools) - <p>Retrieves the specified pools or all pools associated with your Amazon Web Services account.</p> <p>If you specify pool IDs, the output includes information for only the specified pools. If you specify filters, the output includes information for only those pools that meet the filter criteria. If you don't specify pool IDs or filters, the output includes information for all pools.</p> <p>If you specify a pool ID that isn't valid, an Error is returned.</p> <p>A pool is a collection of phone numbers and SenderIds. A pool can include one or more phone numbers and SenderIds that are associated with your Amazon Web Services account.</p>
* [DescribeSenderIds](#describesenderids) - <p>Describes the specified SenderIds or all SenderIds associated with your Amazon Web Services account.</p> <p>If you specify SenderIds, the output includes information for only the specified SenderIds. If you specify filters, the output includes information for only those SenderIds that meet the filter criteria. If you don't specify SenderIds or filters, the output includes information for all SenderIds.</p> <p>f you specify a sender ID that isn't valid, an Error is returned.</p>
* [DescribeSpendLimits](#describespendlimits) - <p>Describes the current Amazon Pinpoint monthly spend limits for sending voice and text messages.</p> <p>When you establish an Amazon Web Services account, the account has initial monthly spend limit in a given Region. For more information on increasing your monthly spend limit, see <a href="https://docs.aws.amazon.com/pinpoint/latest/userguide/channels-sms-awssupport-spend-threshold.html"> Requesting increases to your monthly SMS spending quota for Amazon Pinpoint </a> in the <i>Amazon Pinpoint User Guide</i>.</p>
* [DisassociateOriginationIdentity](#disassociateoriginationidentity) - <p>Removes the specified origination identity from an existing pool.</p> <p>If the origination identity isn't associated with the specified pool, an Error is returned.</p>
* [ListPoolOriginationIdentities](#listpooloriginationidentities) - <p>Lists all associated origination identities in your pool.</p> <p>If you specify filters, the output includes information for only those origination identities that meet the filter criteria.</p>
* [ListTagsForResource](#listtagsforresource) - List all tags associated with a resource.
* [PutKeyword](#putkeyword) - <p>Creates or updates a keyword configuration on an origination phone number or pool.</p> <p> A keyword is a word that you can search for on a particular phone number or pool. It is also a specific word or phrase that an end user can send to your number to elicit a response, such as an informational message or a special offer. When your number receives a message that begins with a keyword, Amazon Pinpoint responds with a customizable message.</p> <p>If you specify a keyword that isn't valid, an Error is returned.</p>
* [PutOptedOutNumber](#putoptedoutnumber) - <p>Creates an opted out destination phone number in the opt-out list.</p> <p>If the destination phone number isn't valid or if the specified opt-out list doesn't exist, an Error is returned.</p>
* [ReleasePhoneNumber](#releasephonenumber) - <p>Releases an existing origination phone number in your account. Once released, a phone number is no longer available for sending messages.</p> <p>If the origination phone number has deletion protection enabled or is associated with a pool, an Error is returned.</p>
* [RequestPhoneNumber](#requestphonenumber) - Request an origination phone number for use in your account. For more information on phone number request see <a href="https://docs.aws.amazon.com/pinpoint/latest/userguide/settings-sms-request-number.html"> Requesting a number </a> in the <i>Amazon Pinpoint User Guide</i>.
* [SendTextMessage](#sendtextmessage) - <p>Creates a new text message and sends it to a recipient's phone number.</p> <p>SMS throughput limits are measured in Message Parts per Second (MPS). Your MPS limit depends on the destination country of your messages, as well as the type of phone number (origination number) that you use to send the message. For more information, see <a href="https://docs.aws.amazon.com/pinpoint/latest/userguide/channels-sms-limitations-mps.html">Message Parts per Second (MPS) limits</a> in the <i>Amazon Pinpoint User Guide</i>.</p>
* [SendVoiceMessage](#sendvoicemessage) - Allows you to send a request that sends a text message through Amazon Pinpoint. This operation uses <a href="http://aws.amazon.com/polly/">Amazon Polly</a> to convert a text script into a voice message.
* [SetDefaultMessageType](#setdefaultmessagetype) - <p>Sets the default message type on a configuration set.</p> <p>Choose the category of SMS messages that you plan to send from this account. If you send account-related messages or time-sensitive messages such as one-time passcodes, choose <b>Transactional</b>. If you plan to send messages that contain marketing material or other promotional content, choose <b>Promotional</b>. This setting applies to your entire Amazon Web Services account.</p>
* [SetDefaultSenderID](#setdefaultsenderid) - <p>Sets default sender ID on a configuration set.</p> <p>When sending a text message to a destination country that supports sender IDs, the default sender ID on the configuration set specified will be used if no dedicated origination phone numbers or registered sender IDs are available in your account.</p>
* [SetTextMessageSpendLimitOverride](#settextmessagespendlimitoverride) - Sets an account level monthly spend limit override for sending text messages. The requested spend limit must be less than or equal to the <code>MaxLimit</code>, which is set by Amazon Web Services. 
* [SetVoiceMessageSpendLimitOverride](#setvoicemessagespendlimitoverride) - Sets an account level monthly spend limit override for sending voice messages. The requested spend limit must be less than or equal to the <code>MaxLimit</code>, which is set by Amazon Web Services. 
* [TagResource](#tagresource) - Adds or overwrites only the specified tags for the specified Amazon Pinpoint SMS Voice, version 2 resource. When you specify an existing tag key, the value is overwritten with the new value. Each resource can have a maximum of 50 tags. Each tag consists of a key and an optional value. Tag keys must be unique per resource. For more information about tags, see <a href="https://docs.aws.amazon.com/pinpoint/latest/developerguide/tagging-resources.html"> Tagging Amazon Pinpoint resources</a> in the <i>Amazon Pinpoint Developer Guide</i>.
* [UntagResource](#untagresource) - Removes the association of the specified tags from an Amazon Pinpoint SMS Voice V2 resource. For more information on tags see <a href="https://docs.aws.amazon.com/pinpoint/latest/developerguide/tagging-resources.html"> Tagging Amazon Pinpoint resources</a> in the <i>Amazon Pinpoint Developer Guide</i>. 
* [UpdateEventDestination](#updateeventdestination) - <p>Updates an existing event destination in a configuration set. You can update the IAM role ARN for CloudWatch Logs and Kinesis Data Firehose. You can also enable or disable the event destination.</p> <p>You may want to update an event destination to change its matching event types or updating the destination resource ARN. You can't change an event destination's type between CloudWatch Logs, Kinesis Data Firehose, and Amazon SNS.</p>
* [UpdatePhoneNumber](#updatephonenumber) - <p>Updates the configuration of an existing origination phone number. You can update the opt-out list, enable or disable two-way messaging, change the TwoWayChannelArn, enable or disable self-managed opt-outs, and enable or disable deletion protection.</p> <p>If the origination phone number is associated with a pool, an Error is returned.</p>
* [UpdatePool](#updatepool) - Updates the configuration of an existing pool. You can update the opt-out list, enable or disable two-way messaging, change the <code>TwoWayChannelArn</code>, enable or disable self-managed opt-outs, enable or disable deletion protection, and enable or disable shared routes.

## AssociateOriginationIdentity

<p>Associates the specified origination identity with a pool.</p> <p>If the origination identity is a phone number and is already associated with another pool, an Error is returned. A sender ID can be associated with multiple pools.</p> <p>If the origination identity configuration doesn't match the pool's configuration, an Error is returned.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.AssociateOriginationIdentity(ctx, operations.AssociateOriginationIdentityRequest{
        AssociateOriginationIdentityRequest: shared.AssociateOriginationIdentityRequest{
            ClientToken: sdk.String("suscipit"),
            IsoCountryCode: "iure",
            OriginationIdentity: "magnam",
            PoolID: "debitis",
        },
        XAmzAlgorithm: sdk.String("ipsa"),
        XAmzContentSha256: sdk.String("delectus"),
        XAmzCredential: sdk.String("tempora"),
        XAmzDate: sdk.String("suscipit"),
        XAmzSecurityToken: sdk.String("molestiae"),
        XAmzSignature: sdk.String("minus"),
        XAmzSignedHeaders: sdk.String("placeat"),
        XAmzTarget: operations.AssociateOriginationIdentityXAmzTargetEnumPinpointSmsVoiceV2AssociateOriginationIdentity,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociateOriginationIdentityResult != nil {
        // handle response
    }
}
```

## CreateConfigurationSet

<p>Creates a new configuration set. After you create the configuration set, you can add one or more event destinations to it.</p> <p>A configuration set is a set of rules that you apply to the SMS and voice messages that you send.</p> <p>When you send a message, you can optionally specify a single configuration set.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateConfigurationSet(ctx, operations.CreateConfigurationSetRequest{
        CreateConfigurationSetRequest: shared.CreateConfigurationSetRequest{
            ClientToken: sdk.String("voluptatum"),
            ConfigurationSetName: "iusto",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "nisi",
                    Value: "recusandae",
                },
                shared.Tag{
                    Key: "temporibus",
                    Value: "ab",
                },
                shared.Tag{
                    Key: "quis",
                    Value: "veritatis",
                },
            },
        },
        XAmzAlgorithm: sdk.String("deserunt"),
        XAmzContentSha256: sdk.String("perferendis"),
        XAmzCredential: sdk.String("ipsam"),
        XAmzDate: sdk.String("repellendus"),
        XAmzSecurityToken: sdk.String("sapiente"),
        XAmzSignature: sdk.String("quo"),
        XAmzSignedHeaders: sdk.String("odit"),
        XAmzTarget: operations.CreateConfigurationSetXAmzTargetEnumPinpointSmsVoiceV2CreateConfigurationSet,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateConfigurationSetResult != nil {
        // handle response
    }
}
```

## CreateEventDestination

<p>Creates a new event destination in a configuration set.</p> <p>An event destination is a location where you send message events. The event options are Amazon CloudWatch, Amazon Kinesis Data Firehose, or Amazon SNS. For example, when a message is delivered successfully, you can send information about that event to an event destination, or send notifications to endpoints that are subscribed to an Amazon SNS topic.</p> <p>Each configuration set can contain between 0 and 5 event destinations. Each event destination can contain a reference to a single destination, such as a CloudWatch or Kinesis Data Firehose destination.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateEventDestination(ctx, operations.CreateEventDestinationRequest{
        CreateEventDestinationRequest: shared.CreateEventDestinationRequest{
            ClientToken: sdk.String("at"),
            CloudWatchLogsDestination: &shared.CloudWatchLogsDestination{
                IamRoleArn: "at",
                LogGroupArn: "maiores",
            },
            ConfigurationSetName: "molestiae",
            EventDestinationName: "quod",
            KinesisFirehoseDestination: &shared.KinesisFirehoseDestination{
                DeliveryStreamArn: "quod",
                IamRoleArn: "esse",
            },
            MatchingEventTypes: []shared.EventTypeEnum{
                shared.EventTypeEnumVoiceAnswered,
                shared.EventTypeEnumVoiceAll,
                shared.EventTypeEnumTextSent,
            },
            SnsDestination: &shared.SnsDestination{
                TopicArn: "nam",
            },
        },
        XAmzAlgorithm: sdk.String("officia"),
        XAmzContentSha256: sdk.String("occaecati"),
        XAmzCredential: sdk.String("fugit"),
        XAmzDate: sdk.String("deleniti"),
        XAmzSecurityToken: sdk.String("hic"),
        XAmzSignature: sdk.String("optio"),
        XAmzSignedHeaders: sdk.String("totam"),
        XAmzTarget: operations.CreateEventDestinationXAmzTargetEnumPinpointSmsVoiceV2CreateEventDestination,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateEventDestinationResult != nil {
        // handle response
    }
}
```

## CreateOptOutList

<p>Creates a new opt-out list.</p> <p>If the opt-out list name already exists, an Error is returned.</p> <p>An opt-out list is a list of phone numbers that are opted out, meaning you can't send SMS or voice messages to them. If end user replies with the keyword "STOP," an entry for the phone number is added to the opt-out list. In addition to STOP, your recipients can use any supported opt-out keyword, such as CANCEL or OPTOUT. For a list of supported opt-out keywords, see <a href="https://docs.aws.amazon.com/pinpoint/latest/userguide/channels-sms-manage.html#channels-sms-manage-optout"> SMS opt out </a> in the <i>Amazon Pinpoint User Guide</i>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateOptOutList(ctx, operations.CreateOptOutListRequest{
        CreateOptOutListRequest: shared.CreateOptOutListRequest{
            ClientToken: sdk.String("beatae"),
            OptOutListName: "commodi",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "modi",
                    Value: "qui",
                },
                shared.Tag{
                    Key: "impedit",
                    Value: "cum",
                },
            },
        },
        XAmzAlgorithm: sdk.String("esse"),
        XAmzContentSha256: sdk.String("ipsum"),
        XAmzCredential: sdk.String("excepturi"),
        XAmzDate: sdk.String("aspernatur"),
        XAmzSecurityToken: sdk.String("perferendis"),
        XAmzSignature: sdk.String("ad"),
        XAmzSignedHeaders: sdk.String("natus"),
        XAmzTarget: operations.CreateOptOutListXAmzTargetEnumPinpointSmsVoiceV2CreateOptOutList,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateOptOutListResult != nil {
        // handle response
    }
}
```

## CreatePool

<p>Creates a new pool and associates the specified origination identity to the pool. A pool can include one or more phone numbers and SenderIds that are associated with your Amazon Web Services account.</p> <p>The new pool inherits its configuration from the specified origination identity. This includes keywords, message type, opt-out list, two-way configuration, and self-managed opt-out configuration. Deletion protection isn't inherited from the origination identity and defaults to false.</p> <p>If the origination identity is a phone number and is already associated with another pool, an Error is returned. A sender ID can be associated with multiple pools.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreatePool(ctx, operations.CreatePoolRequest{
        CreatePoolRequest: shared.CreatePoolRequest{
            ClientToken: sdk.String("sed"),
            DeletionProtectionEnabled: sdk.Bool(false),
            IsoCountryCode: "iste",
            MessageType: shared.MessageTypeEnumTransactional,
            OriginationIdentity: "natus",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "hic",
                    Value: "saepe",
                },
                shared.Tag{
                    Key: "fuga",
                    Value: "in",
                },
            },
        },
        XAmzAlgorithm: sdk.String("corporis"),
        XAmzContentSha256: sdk.String("iste"),
        XAmzCredential: sdk.String("iure"),
        XAmzDate: sdk.String("saepe"),
        XAmzSecurityToken: sdk.String("quidem"),
        XAmzSignature: sdk.String("architecto"),
        XAmzSignedHeaders: sdk.String("ipsa"),
        XAmzTarget: operations.CreatePoolXAmzTargetEnumPinpointSmsVoiceV2CreatePool,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreatePoolResult != nil {
        // handle response
    }
}
```

## DeleteConfigurationSet

<p>Deletes an existing configuration set.</p> <p>A configuration set is a set of rules that you apply to voice and SMS messages that you send. In a configuration set, you can specify a destination for specific types of events related to voice and SMS messages. </p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteConfigurationSet(ctx, operations.DeleteConfigurationSetRequest{
        DeleteConfigurationSetRequest: shared.DeleteConfigurationSetRequest{
            ConfigurationSetName: "reiciendis",
        },
        XAmzAlgorithm: sdk.String("est"),
        XAmzContentSha256: sdk.String("mollitia"),
        XAmzCredential: sdk.String("laborum"),
        XAmzDate: sdk.String("dolores"),
        XAmzSecurityToken: sdk.String("dolorem"),
        XAmzSignature: sdk.String("corporis"),
        XAmzSignedHeaders: sdk.String("explicabo"),
        XAmzTarget: operations.DeleteConfigurationSetXAmzTargetEnumPinpointSmsVoiceV2DeleteConfigurationSet,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteConfigurationSetResult != nil {
        // handle response
    }
}
```

## DeleteDefaultMessageType

<p>Deletes an existing default message type on a configuration set.</p> <p> A message type is a type of messages that you plan to send. If you send account-related messages or time-sensitive messages such as one-time passcodes, choose <b>Transactional</b>. If you plan to send messages that contain marketing material or other promotional content, choose <b>Promotional</b>. This setting applies to your entire Amazon Web Services account. </p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteDefaultMessageType(ctx, operations.DeleteDefaultMessageTypeRequest{
        DeleteDefaultMessageTypeRequest: shared.DeleteDefaultMessageTypeRequest{
            ConfigurationSetName: "nobis",
        },
        XAmzAlgorithm: sdk.String("enim"),
        XAmzContentSha256: sdk.String("omnis"),
        XAmzCredential: sdk.String("nemo"),
        XAmzDate: sdk.String("minima"),
        XAmzSecurityToken: sdk.String("excepturi"),
        XAmzSignature: sdk.String("accusantium"),
        XAmzSignedHeaders: sdk.String("iure"),
        XAmzTarget: operations.DeleteDefaultMessageTypeXAmzTargetEnumPinpointSmsVoiceV2DeleteDefaultMessageType,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteDefaultMessageTypeResult != nil {
        // handle response
    }
}
```

## DeleteDefaultSenderID

<p>Deletes an existing default sender ID on a configuration set.</p> <p>A default sender ID is the identity that appears on recipients' devices when they receive SMS messages. Support for sender ID capabilities varies by country or region.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteDefaultSenderID(ctx, operations.DeleteDefaultSenderIDRequest{
        DeleteDefaultSenderIDRequest: shared.DeleteDefaultSenderIDRequest{
            ConfigurationSetName: "culpa",
        },
        XAmzAlgorithm: sdk.String("doloribus"),
        XAmzContentSha256: sdk.String("sapiente"),
        XAmzCredential: sdk.String("architecto"),
        XAmzDate: sdk.String("mollitia"),
        XAmzSecurityToken: sdk.String("dolorem"),
        XAmzSignature: sdk.String("culpa"),
        XAmzSignedHeaders: sdk.String("consequuntur"),
        XAmzTarget: operations.DeleteDefaultSenderIDXAmzTargetEnumPinpointSmsVoiceV2DeleteDefaultSenderID,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteDefaultSenderIDResult != nil {
        // handle response
    }
}
```

## DeleteEventDestination

<p>Deletes an existing event destination.</p> <p>An event destination is a location where you send response information about the messages that you send. For example, when a message is delivered successfully, you can send information about that event to an Amazon CloudWatch destination, or send notifications to endpoints that are subscribed to an Amazon SNS topic.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteEventDestination(ctx, operations.DeleteEventDestinationRequest{
        DeleteEventDestinationRequest: shared.DeleteEventDestinationRequest{
            ConfigurationSetName: "repellat",
            EventDestinationName: "mollitia",
        },
        XAmzAlgorithm: sdk.String("occaecati"),
        XAmzContentSha256: sdk.String("numquam"),
        XAmzCredential: sdk.String("commodi"),
        XAmzDate: sdk.String("quam"),
        XAmzSecurityToken: sdk.String("molestiae"),
        XAmzSignature: sdk.String("velit"),
        XAmzSignedHeaders: sdk.String("error"),
        XAmzTarget: operations.DeleteEventDestinationXAmzTargetEnumPinpointSmsVoiceV2DeleteEventDestination,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteEventDestinationResult != nil {
        // handle response
    }
}
```

## DeleteKeyword

<p>Deletes an existing keyword from an origination phone number or pool.</p> <p>A keyword is a word that you can search for on a particular phone number or pool. It is also a specific word or phrase that an end user can send to your number to elicit a response, such as an informational message or a special offer. When your number receives a message that begins with a keyword, Amazon Pinpoint responds with a customizable message.</p> <p>Keywords "HELP" and "STOP" can't be deleted or modified.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteKeyword(ctx, operations.DeleteKeywordRequest{
        DeleteKeywordRequest: shared.DeleteKeywordRequest{
            Keyword: "quia",
            OriginationIdentity: "quis",
        },
        XAmzAlgorithm: sdk.String("vitae"),
        XAmzContentSha256: sdk.String("laborum"),
        XAmzCredential: sdk.String("animi"),
        XAmzDate: sdk.String("enim"),
        XAmzSecurityToken: sdk.String("odit"),
        XAmzSignature: sdk.String("quo"),
        XAmzSignedHeaders: sdk.String("sequi"),
        XAmzTarget: operations.DeleteKeywordXAmzTargetEnumPinpointSmsVoiceV2DeleteKeyword,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteKeywordResult != nil {
        // handle response
    }
}
```

## DeleteOptOutList

<p>Deletes an existing opt-out list. All opted out phone numbers in the opt-out list are deleted.</p> <p>If the specified opt-out list name doesn't exist or is in-use by an origination phone number or pool, an Error is returned.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteOptOutList(ctx, operations.DeleteOptOutListRequest{
        DeleteOptOutListRequest: shared.DeleteOptOutListRequest{
            OptOutListName: "tenetur",
        },
        XAmzAlgorithm: sdk.String("ipsam"),
        XAmzContentSha256: sdk.String("id"),
        XAmzCredential: sdk.String("possimus"),
        XAmzDate: sdk.String("aut"),
        XAmzSecurityToken: sdk.String("quasi"),
        XAmzSignature: sdk.String("error"),
        XAmzSignedHeaders: sdk.String("temporibus"),
        XAmzTarget: operations.DeleteOptOutListXAmzTargetEnumPinpointSmsVoiceV2DeleteOptOutList,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteOptOutListResult != nil {
        // handle response
    }
}
```

## DeleteOptedOutNumber

<p>Deletes an existing opted out destination phone number from the specified opt-out list.</p> <p>Each destination phone number can only be deleted once every 30 days.</p> <p>If the specified destination phone number doesn't exist or if the opt-out list doesn't exist, an Error is returned.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteOptedOutNumber(ctx, operations.DeleteOptedOutNumberRequest{
        DeleteOptedOutNumberRequest: shared.DeleteOptedOutNumberRequest{
            OptOutListName: "laborum",
            OptedOutNumber: "quasi",
        },
        XAmzAlgorithm: sdk.String("reiciendis"),
        XAmzContentSha256: sdk.String("voluptatibus"),
        XAmzCredential: sdk.String("vero"),
        XAmzDate: sdk.String("nihil"),
        XAmzSecurityToken: sdk.String("praesentium"),
        XAmzSignature: sdk.String("voluptatibus"),
        XAmzSignedHeaders: sdk.String("ipsa"),
        XAmzTarget: operations.DeleteOptedOutNumberXAmzTargetEnumPinpointSmsVoiceV2DeleteOptedOutNumber,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteOptedOutNumberResult != nil {
        // handle response
    }
}
```

## DeletePool

<p>Deletes an existing pool. Deleting a pool disassociates all origination identities from that pool.</p> <p>If the pool status isn't active or if deletion protection is enabled, an Error is returned.</p> <p>A pool is a collection of phone numbers and SenderIds. A pool can include one or more phone numbers and SenderIds that are associated with your Amazon Web Services account.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeletePool(ctx, operations.DeletePoolRequest{
        DeletePoolRequest: shared.DeletePoolRequest{
            PoolID: "omnis",
        },
        XAmzAlgorithm: sdk.String("voluptate"),
        XAmzContentSha256: sdk.String("cum"),
        XAmzCredential: sdk.String("perferendis"),
        XAmzDate: sdk.String("doloremque"),
        XAmzSecurityToken: sdk.String("reprehenderit"),
        XAmzSignature: sdk.String("ut"),
        XAmzSignedHeaders: sdk.String("maiores"),
        XAmzTarget: operations.DeletePoolXAmzTargetEnumPinpointSmsVoiceV2DeletePool,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeletePoolResult != nil {
        // handle response
    }
}
```

## DeleteTextMessageSpendLimitOverride

Deletes an account-level monthly spending limit override for sending text messages. Deleting a spend limit override will set the <code>EnforcedLimit</code> to equal the <code>MaxLimit</code>, which is controlled by Amazon Web Services. For more information on spend limits (quotas) see <a href="https://docs.aws.amazon.com/pinpoint/latest/developerguide/quotas.html">Amazon Pinpoint quotas </a> in the <i>Amazon Pinpoint Developer Guide</i>.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteTextMessageSpendLimitOverride(ctx, operations.DeleteTextMessageSpendLimitOverrideRequest{
        RequestBody: map[string]interface{}{
            "corporis": "dolore",
        },
        XAmzAlgorithm: sdk.String("iusto"),
        XAmzContentSha256: sdk.String("dicta"),
        XAmzCredential: sdk.String("harum"),
        XAmzDate: sdk.String("enim"),
        XAmzSecurityToken: sdk.String("accusamus"),
        XAmzSignature: sdk.String("commodi"),
        XAmzSignedHeaders: sdk.String("repudiandae"),
        XAmzTarget: operations.DeleteTextMessageSpendLimitOverrideXAmzTargetEnumPinpointSmsVoiceV2DeleteTextMessageSpendLimitOverride,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteTextMessageSpendLimitOverrideResult != nil {
        // handle response
    }
}
```

## DeleteVoiceMessageSpendLimitOverride

Deletes an account level monthly spend limit override for sending voice messages. Deleting a spend limit override sets the <code>EnforcedLimit</code> equal to the <code>MaxLimit</code>, which is controlled by Amazon Web Services. For more information on spending limits (quotas) see <a href="https://docs.aws.amazon.com/pinpoint/latest/developerguide/quotas.html">Amazon Pinpoint quotas</a> in the <i>Amazon Pinpoint Developer Guide</i>.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteVoiceMessageSpendLimitOverride(ctx, operations.DeleteVoiceMessageSpendLimitOverrideRequest{
        RequestBody: map[string]interface{}{
            "ipsum": "quidem",
        },
        XAmzAlgorithm: sdk.String("molestias"),
        XAmzContentSha256: sdk.String("excepturi"),
        XAmzCredential: sdk.String("pariatur"),
        XAmzDate: sdk.String("modi"),
        XAmzSecurityToken: sdk.String("praesentium"),
        XAmzSignature: sdk.String("rem"),
        XAmzSignedHeaders: sdk.String("voluptates"),
        XAmzTarget: operations.DeleteVoiceMessageSpendLimitOverrideXAmzTargetEnumPinpointSmsVoiceV2DeleteVoiceMessageSpendLimitOverride,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteVoiceMessageSpendLimitOverrideResult != nil {
        // handle response
    }
}
```

## DescribeAccountAttributes

<p>Describes attributes of your Amazon Web Services account. The supported account attributes include account tier, which indicates whether your account is in the sandbox or production environment. When you're ready to move your account out of the sandbox, create an Amazon Web Services Support case for a service limit increase request.</p> <p>New Amazon Pinpoint accounts are placed into an SMS or voice sandbox. The sandbox protects both Amazon Web Services end recipients and SMS or voice recipients from fraud and abuse. </p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeAccountAttributes(ctx, operations.DescribeAccountAttributesRequest{
        DescribeAccountAttributesRequest: shared.DescribeAccountAttributesRequest{
            MaxResults: sdk.Int64(93940),
            NextToken: sdk.String("repudiandae"),
        },
        MaxResults: sdk.String("sint"),
        NextToken: sdk.String("veritatis"),
        XAmzAlgorithm: sdk.String("itaque"),
        XAmzContentSha256: sdk.String("incidunt"),
        XAmzCredential: sdk.String("enim"),
        XAmzDate: sdk.String("consequatur"),
        XAmzSecurityToken: sdk.String("est"),
        XAmzSignature: sdk.String("quibusdam"),
        XAmzSignedHeaders: sdk.String("explicabo"),
        XAmzTarget: operations.DescribeAccountAttributesXAmzTargetEnumPinpointSmsVoiceV2DescribeAccountAttributes,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeAccountAttributesResult != nil {
        // handle response
    }
}
```

## DescribeAccountLimits

<p>Describes the current Amazon Pinpoint SMS Voice V2 resource quotas for your account. The description for a quota includes the quota name, current usage toward that quota, and the quota's maximum value.</p> <p>When you establish an Amazon Web Services account, the account has initial quotas on the maximum number of configuration sets, opt-out lists, phone numbers, and pools that you can create in a given Region. For more information see <a href="https://docs.aws.amazon.com/pinpoint/latest/developerguide/quotas.html"> Amazon Pinpoint quotas </a> in the <i>Amazon Pinpoint Developer Guide</i>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeAccountLimits(ctx, operations.DescribeAccountLimitsRequest{
        DescribeAccountLimitsRequest: shared.DescribeAccountLimitsRequest{
            MaxResults: sdk.Int64(647174),
            NextToken: sdk.String("distinctio"),
        },
        MaxResults: sdk.String("quibusdam"),
        NextToken: sdk.String("labore"),
        XAmzAlgorithm: sdk.String("modi"),
        XAmzContentSha256: sdk.String("qui"),
        XAmzCredential: sdk.String("aliquid"),
        XAmzDate: sdk.String("cupiditate"),
        XAmzSecurityToken: sdk.String("quos"),
        XAmzSignature: sdk.String("perferendis"),
        XAmzSignedHeaders: sdk.String("magni"),
        XAmzTarget: operations.DescribeAccountLimitsXAmzTargetEnumPinpointSmsVoiceV2DescribeAccountLimits,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeAccountLimitsResult != nil {
        // handle response
    }
}
```

## DescribeConfigurationSets

<p>Describes the specified configuration sets or all in your account.</p> <p>If you specify configuration set names, the output includes information for only the specified configuration sets. If you specify filters, the output includes information for only those configuration sets that meet the filter criteria. If you don't specify configuration set names or filters, the output includes information for all configuration sets.</p> <p>If you specify a configuration set name that isn't valid, an error is returned.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeConfigurationSets(ctx, operations.DescribeConfigurationSetsRequest{
        DescribeConfigurationSetsRequest: shared.DescribeConfigurationSetsRequest{
            ConfigurationSetNames: []string{
                "ipsam",
                "alias",
                "fugit",
                "dolorum",
            },
            Filters: []shared.ConfigurationSetFilter{
                shared.ConfigurationSetFilter{
                    Name: shared.ConfigurationSetFilterNameEnumMatchingEventTypes,
                    Values: []string{
                        "tempore",
                        "labore",
                        "delectus",
                    },
                },
                shared.ConfigurationSetFilter{
                    Name: shared.ConfigurationSetFilterNameEnumMatchingEventTypes,
                    Values: []string{
                        "eligendi",
                    },
                },
                shared.ConfigurationSetFilter{
                    Name: shared.ConfigurationSetFilterNameEnumDefaultMessageType,
                    Values: []string{
                        "provident",
                        "necessitatibus",
                    },
                },
            },
            MaxResults: sdk.Int64(572252),
            NextToken: sdk.String("officia"),
        },
        MaxResults: sdk.String("dolor"),
        NextToken: sdk.String("debitis"),
        XAmzAlgorithm: sdk.String("a"),
        XAmzContentSha256: sdk.String("dolorum"),
        XAmzCredential: sdk.String("in"),
        XAmzDate: sdk.String("in"),
        XAmzSecurityToken: sdk.String("illum"),
        XAmzSignature: sdk.String("maiores"),
        XAmzSignedHeaders: sdk.String("rerum"),
        XAmzTarget: operations.DescribeConfigurationSetsXAmzTargetEnumPinpointSmsVoiceV2DescribeConfigurationSets,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeConfigurationSetsResult != nil {
        // handle response
    }
}
```

## DescribeKeywords

<p>Describes the specified keywords or all keywords on your origination phone number or pool.</p> <p>A keyword is a word that you can search for on a particular phone number or pool. It is also a specific word or phrase that an end user can send to your number to elicit a response, such as an informational message or a special offer. When your number receives a message that begins with a keyword, Amazon Pinpoint responds with a customizable message.</p> <p>If you specify a keyword that isn't valid, an Error is returned.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeKeywords(ctx, operations.DescribeKeywordsRequest{
        DescribeKeywordsRequest: shared.DescribeKeywordsRequest{
            Filters: []shared.KeywordFilter{
                shared.KeywordFilter{
                    Name: shared.KeywordFilterNameEnumKeywordAction,
                    Values: []string{
                        "cumque",
                        "facere",
                    },
                },
            },
            Keywords: []string{
                "aliquid",
                "laborum",
            },
            MaxResults: sdk.Int64(881104),
            NextToken: sdk.String("non"),
            OriginationIdentity: "occaecati",
        },
        MaxResults: sdk.String("enim"),
        NextToken: sdk.String("accusamus"),
        XAmzAlgorithm: sdk.String("delectus"),
        XAmzContentSha256: sdk.String("quidem"),
        XAmzCredential: sdk.String("provident"),
        XAmzDate: sdk.String("nam"),
        XAmzSecurityToken: sdk.String("id"),
        XAmzSignature: sdk.String("blanditiis"),
        XAmzSignedHeaders: sdk.String("deleniti"),
        XAmzTarget: operations.DescribeKeywordsXAmzTargetEnumPinpointSmsVoiceV2DescribeKeywords,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeKeywordsResult != nil {
        // handle response
    }
}
```

## DescribeOptOutLists

<p>Describes the specified opt-out list or all opt-out lists in your account.</p> <p>If you specify opt-out list names, the output includes information for only the specified opt-out lists. Opt-out lists include only those that meet the filter criteria. If you don't specify opt-out list names or filters, the output includes information for all opt-out lists.</p> <p>If you specify an opt-out list name that isn't valid, an Error is returned.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeOptOutLists(ctx, operations.DescribeOptOutListsRequest{
        DescribeOptOutListsRequest: shared.DescribeOptOutListsRequest{
            MaxResults: sdk.Int64(956084),
            NextToken: sdk.String("amet"),
            OptOutListNames: []string{
                "nisi",
                "vel",
                "natus",
            },
        },
        MaxResults: sdk.String("omnis"),
        NextToken: sdk.String("molestiae"),
        XAmzAlgorithm: sdk.String("perferendis"),
        XAmzContentSha256: sdk.String("nihil"),
        XAmzCredential: sdk.String("magnam"),
        XAmzDate: sdk.String("distinctio"),
        XAmzSecurityToken: sdk.String("id"),
        XAmzSignature: sdk.String("labore"),
        XAmzSignedHeaders: sdk.String("labore"),
        XAmzTarget: operations.DescribeOptOutListsXAmzTargetEnumPinpointSmsVoiceV2DescribeOptOutLists,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeOptOutListsResult != nil {
        // handle response
    }
}
```

## DescribeOptedOutNumbers

<p>Describes the specified opted out destination numbers or all opted out destination numbers in an opt-out list.</p> <p>If you specify opted out numbers, the output includes information for only the specified opted out numbers. If you specify filters, the output includes information for only those opted out numbers that meet the filter criteria. If you don't specify opted out numbers or filters, the output includes information for all opted out destination numbers in your opt-out list.</p> <p>If you specify an opted out number that isn't valid, an Error is returned.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeOptedOutNumbers(ctx, operations.DescribeOptedOutNumbersRequest{
        DescribeOptedOutNumbersRequest: shared.DescribeOptedOutNumbersRequest{
            Filters: []shared.OptedOutFilter{
                shared.OptedOutFilter{
                    Name: shared.OptedOutFilterNameEnumEndUserOptedOut,
                    Values: []string{
                        "nobis",
                        "eum",
                        "vero",
                    },
                },
                shared.OptedOutFilter{
                    Name: shared.OptedOutFilterNameEnumEndUserOptedOut,
                    Values: []string{
                        "architecto",
                    },
                },
            },
            MaxResults: sdk.Int64(298282),
            NextToken: sdk.String("et"),
            OptOutListName: "excepturi",
            OptedOutNumbers: []string{
                "provident",
                "quos",
            },
        },
        MaxResults: sdk.String("sint"),
        NextToken: sdk.String("accusantium"),
        XAmzAlgorithm: sdk.String("mollitia"),
        XAmzContentSha256: sdk.String("reiciendis"),
        XAmzCredential: sdk.String("mollitia"),
        XAmzDate: sdk.String("ad"),
        XAmzSecurityToken: sdk.String("eum"),
        XAmzSignature: sdk.String("dolor"),
        XAmzSignedHeaders: sdk.String("necessitatibus"),
        XAmzTarget: operations.DescribeOptedOutNumbersXAmzTargetEnumPinpointSmsVoiceV2DescribeOptedOutNumbers,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeOptedOutNumbersResult != nil {
        // handle response
    }
}
```

## DescribePhoneNumbers

<p>Describes the specified origination phone number, or all the phone numbers in your account.</p> <p>If you specify phone number IDs, the output includes information for only the specified phone numbers. If you specify filters, the output includes information for only those phone numbers that meet the filter criteria. If you don't specify phone number IDs or filters, the output includes information for all phone numbers.</p> <p>If you specify a phone number ID that isn't valid, an Error is returned.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribePhoneNumbers(ctx, operations.DescribePhoneNumbersRequest{
        DescribePhoneNumbersRequest: shared.DescribePhoneNumbersRequest{
            Filters: []shared.PhoneNumberFilter{
                shared.PhoneNumberFilter{
                    Name: shared.PhoneNumberFilterNameEnumNumberCapability,
                    Values: []string{
                        "iure",
                    },
                },
            },
            MaxResults: sdk.Int64(984043),
            NextToken: sdk.String("debitis"),
            PhoneNumberIds: []string{
                "maxime",
                "deleniti",
            },
        },
        MaxResults: sdk.String("facilis"),
        NextToken: sdk.String("in"),
        XAmzAlgorithm: sdk.String("architecto"),
        XAmzContentSha256: sdk.String("architecto"),
        XAmzCredential: sdk.String("repudiandae"),
        XAmzDate: sdk.String("ullam"),
        XAmzSecurityToken: sdk.String("expedita"),
        XAmzSignature: sdk.String("nihil"),
        XAmzSignedHeaders: sdk.String("repellat"),
        XAmzTarget: operations.DescribePhoneNumbersXAmzTargetEnumPinpointSmsVoiceV2DescribePhoneNumbers,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribePhoneNumbersResult != nil {
        // handle response
    }
}
```

## DescribePools

<p>Retrieves the specified pools or all pools associated with your Amazon Web Services account.</p> <p>If you specify pool IDs, the output includes information for only the specified pools. If you specify filters, the output includes information for only those pools that meet the filter criteria. If you don't specify pool IDs or filters, the output includes information for all pools.</p> <p>If you specify a pool ID that isn't valid, an Error is returned.</p> <p>A pool is a collection of phone numbers and SenderIds. A pool can include one or more phone numbers and SenderIds that are associated with your Amazon Web Services account.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribePools(ctx, operations.DescribePoolsRequest{
        DescribePoolsRequest: shared.DescribePoolsRequest{
            Filters: []shared.PoolFilter{
                shared.PoolFilter{
                    Name: shared.PoolFilterNameEnumMessageType,
                    Values: []string{
                        "pariatur",
                        "accusantium",
                        "consequuntur",
                        "praesentium",
                    },
                },
                shared.PoolFilter{
                    Name: shared.PoolFilterNameEnumOptOutListName,
                    Values: []string{
                        "sunt",
                    },
                },
                shared.PoolFilter{
                    Name: shared.PoolFilterNameEnumSharedRoutesEnabled,
                    Values: []string{
                        "pariatur",
                        "maxime",
                        "ea",
                        "excepturi",
                    },
                },
                shared.PoolFilter{
                    Name: shared.PoolFilterNameEnumStatus,
                    Values: []string{
                        "accusantium",
                        "ab",
                    },
                },
            },
            MaxResults: sdk.Int64(982575),
            NextToken: sdk.String("quidem"),
            PoolIds: []string{
                "voluptate",
                "autem",
            },
        },
        MaxResults: sdk.String("nam"),
        NextToken: sdk.String("eaque"),
        XAmzAlgorithm: sdk.String("pariatur"),
        XAmzContentSha256: sdk.String("nemo"),
        XAmzCredential: sdk.String("voluptatibus"),
        XAmzDate: sdk.String("perferendis"),
        XAmzSecurityToken: sdk.String("fugiat"),
        XAmzSignature: sdk.String("amet"),
        XAmzSignedHeaders: sdk.String("aut"),
        XAmzTarget: operations.DescribePoolsXAmzTargetEnumPinpointSmsVoiceV2DescribePools,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribePoolsResult != nil {
        // handle response
    }
}
```

## DescribeSenderIds

<p>Describes the specified SenderIds or all SenderIds associated with your Amazon Web Services account.</p> <p>If you specify SenderIds, the output includes information for only the specified SenderIds. If you specify filters, the output includes information for only those SenderIds that meet the filter criteria. If you don't specify SenderIds or filters, the output includes information for all SenderIds.</p> <p>f you specify a sender ID that isn't valid, an Error is returned.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeSenderIds(ctx, operations.DescribeSenderIdsRequest{
        DescribeSenderIdsRequest: shared.DescribeSenderIdsRequest{
            Filters: []shared.SenderIDFilter{
                shared.SenderIDFilter{
                    Name: shared.SenderIDFilterNameEnumIsoCountryCode,
                    Values: []string{
                        "libero",
                        "nobis",
                        "dolores",
                        "quis",
                    },
                },
                shared.SenderIDFilter{
                    Name: shared.SenderIDFilterNameEnumIsoCountryCode,
                    Values: []string{
                        "eaque",
                        "quis",
                    },
                },
                shared.SenderIDFilter{
                    Name: shared.SenderIDFilterNameEnumSenderID,
                    Values: []string{
                        "perferendis",
                    },
                },
                shared.SenderIDFilter{
                    Name: shared.SenderIDFilterNameEnumSenderID,
                    Values: []string{
                        "quam",
                        "dolor",
                        "vero",
                        "nostrum",
                    },
                },
            },
            MaxResults: sdk.Int64(944120),
            NextToken: sdk.String("recusandae"),
            SenderIds: []shared.SenderIDAndCountry{
                shared.SenderIDAndCountry{
                    IsoCountryCode: "facilis",
                    SenderID: "perspiciatis",
                },
                shared.SenderIDAndCountry{
                    IsoCountryCode: "voluptatem",
                    SenderID: "porro",
                },
                shared.SenderIDAndCountry{
                    IsoCountryCode: "consequuntur",
                    SenderID: "blanditiis",
                },
            },
        },
        MaxResults: sdk.String("error"),
        NextToken: sdk.String("eaque"),
        XAmzAlgorithm: sdk.String("occaecati"),
        XAmzContentSha256: sdk.String("rerum"),
        XAmzCredential: sdk.String("adipisci"),
        XAmzDate: sdk.String("asperiores"),
        XAmzSecurityToken: sdk.String("earum"),
        XAmzSignature: sdk.String("modi"),
        XAmzSignedHeaders: sdk.String("iste"),
        XAmzTarget: operations.DescribeSenderIdsXAmzTargetEnumPinpointSmsVoiceV2DescribeSenderIds,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeSenderIdsResult != nil {
        // handle response
    }
}
```

## DescribeSpendLimits

<p>Describes the current Amazon Pinpoint monthly spend limits for sending voice and text messages.</p> <p>When you establish an Amazon Web Services account, the account has initial monthly spend limit in a given Region. For more information on increasing your monthly spend limit, see <a href="https://docs.aws.amazon.com/pinpoint/latest/userguide/channels-sms-awssupport-spend-threshold.html"> Requesting increases to your monthly SMS spending quota for Amazon Pinpoint </a> in the <i>Amazon Pinpoint User Guide</i>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeSpendLimits(ctx, operations.DescribeSpendLimitsRequest{
        DescribeSpendLimitsRequest: shared.DescribeSpendLimitsRequest{
            MaxResults: sdk.Int64(679091),
            NextToken: sdk.String("deleniti"),
        },
        MaxResults: sdk.String("pariatur"),
        NextToken: sdk.String("provident"),
        XAmzAlgorithm: sdk.String("nobis"),
        XAmzContentSha256: sdk.String("libero"),
        XAmzCredential: sdk.String("delectus"),
        XAmzDate: sdk.String("quaerat"),
        XAmzSecurityToken: sdk.String("quos"),
        XAmzSignature: sdk.String("aliquid"),
        XAmzSignedHeaders: sdk.String("dolorem"),
        XAmzTarget: operations.DescribeSpendLimitsXAmzTargetEnumPinpointSmsVoiceV2DescribeSpendLimits,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeSpendLimitsResult != nil {
        // handle response
    }
}
```

## DisassociateOriginationIdentity

<p>Removes the specified origination identity from an existing pool.</p> <p>If the origination identity isn't associated with the specified pool, an Error is returned.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DisassociateOriginationIdentity(ctx, operations.DisassociateOriginationIdentityRequest{
        DisassociateOriginationIdentityRequest: shared.DisassociateOriginationIdentityRequest{
            ClientToken: sdk.String("dolorem"),
            IsoCountryCode: "dolor",
            OriginationIdentity: "qui",
            PoolID: "ipsum",
        },
        XAmzAlgorithm: sdk.String("hic"),
        XAmzContentSha256: sdk.String("excepturi"),
        XAmzCredential: sdk.String("cum"),
        XAmzDate: sdk.String("voluptate"),
        XAmzSecurityToken: sdk.String("dignissimos"),
        XAmzSignature: sdk.String("reiciendis"),
        XAmzSignedHeaders: sdk.String("amet"),
        XAmzTarget: operations.DisassociateOriginationIdentityXAmzTargetEnumPinpointSmsVoiceV2DisassociateOriginationIdentity,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DisassociateOriginationIdentityResult != nil {
        // handle response
    }
}
```

## ListPoolOriginationIdentities

<p>Lists all associated origination identities in your pool.</p> <p>If you specify filters, the output includes information for only those origination identities that meet the filter criteria.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListPoolOriginationIdentities(ctx, operations.ListPoolOriginationIdentitiesRequest{
        ListPoolOriginationIdentitiesRequest: shared.ListPoolOriginationIdentitiesRequest{
            Filters: []shared.PoolOriginationIdentitiesFilter{
                shared.PoolOriginationIdentitiesFilter{
                    Name: shared.PoolOriginationIdentitiesFilterNameEnumIsoCountryCode,
                    Values: []string{
                        "ipsa",
                    },
                },
                shared.PoolOriginationIdentitiesFilter{
                    Name: shared.PoolOriginationIdentitiesFilterNameEnumIsoCountryCode,
                    Values: []string{
                        "odio",
                        "quaerat",
                    },
                },
                shared.PoolOriginationIdentitiesFilter{
                    Name: shared.PoolOriginationIdentitiesFilterNameEnumNumberCapability,
                    Values: []string{
                        "voluptatibus",
                        "voluptas",
                        "natus",
                    },
                },
            },
            MaxResults: sdk.Int64(179603),
            NextToken: sdk.String("atque"),
            PoolID: "sit",
        },
        MaxResults: sdk.String("fugiat"),
        NextToken: sdk.String("ab"),
        XAmzAlgorithm: sdk.String("soluta"),
        XAmzContentSha256: sdk.String("dolorum"),
        XAmzCredential: sdk.String("iusto"),
        XAmzDate: sdk.String("voluptate"),
        XAmzSecurityToken: sdk.String("dolorum"),
        XAmzSignature: sdk.String("deleniti"),
        XAmzSignedHeaders: sdk.String("omnis"),
        XAmzTarget: operations.ListPoolOriginationIdentitiesXAmzTargetEnumPinpointSmsVoiceV2ListPoolOriginationIdentities,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListPoolOriginationIdentitiesResult != nil {
        // handle response
    }
}
```

## ListTagsForResource

List all tags associated with a resource.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListTagsForResource(ctx, operations.ListTagsForResourceRequest{
        ListTagsForResourceRequest: shared.ListTagsForResourceRequest{
            ResourceArn: "necessitatibus",
        },
        XAmzAlgorithm: sdk.String("distinctio"),
        XAmzContentSha256: sdk.String("asperiores"),
        XAmzCredential: sdk.String("nihil"),
        XAmzDate: sdk.String("ipsum"),
        XAmzSecurityToken: sdk.String("voluptate"),
        XAmzSignature: sdk.String("id"),
        XAmzSignedHeaders: sdk.String("saepe"),
        XAmzTarget: operations.ListTagsForResourceXAmzTargetEnumPinpointSmsVoiceV2ListTagsForResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTagsForResourceResult != nil {
        // handle response
    }
}
```

## PutKeyword

<p>Creates or updates a keyword configuration on an origination phone number or pool.</p> <p> A keyword is a word that you can search for on a particular phone number or pool. It is also a specific word or phrase that an end user can send to your number to elicit a response, such as an informational message or a special offer. When your number receives a message that begins with a keyword, Amazon Pinpoint responds with a customizable message.</p> <p>If you specify a keyword that isn't valid, an Error is returned.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.PutKeyword(ctx, operations.PutKeywordRequest{
        PutKeywordRequest: shared.PutKeywordRequest{
            Keyword: "eius",
            KeywordAction: shared.KeywordActionEnumAutomaticResponse.ToPointer(),
            KeywordMessage: "perferendis",
            OriginationIdentity: "amet",
        },
        XAmzAlgorithm: sdk.String("optio"),
        XAmzContentSha256: sdk.String("accusamus"),
        XAmzCredential: sdk.String("ad"),
        XAmzDate: sdk.String("saepe"),
        XAmzSecurityToken: sdk.String("suscipit"),
        XAmzSignature: sdk.String("deserunt"),
        XAmzSignedHeaders: sdk.String("provident"),
        XAmzTarget: operations.PutKeywordXAmzTargetEnumPinpointSmsVoiceV2PutKeyword,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutKeywordResult != nil {
        // handle response
    }
}
```

## PutOptedOutNumber

<p>Creates an opted out destination phone number in the opt-out list.</p> <p>If the destination phone number isn't valid or if the specified opt-out list doesn't exist, an Error is returned.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.PutOptedOutNumber(ctx, operations.PutOptedOutNumberRequest{
        PutOptedOutNumberRequest: shared.PutOptedOutNumberRequest{
            OptOutListName: "minima",
            OptedOutNumber: "repellendus",
        },
        XAmzAlgorithm: sdk.String("totam"),
        XAmzContentSha256: sdk.String("similique"),
        XAmzCredential: sdk.String("alias"),
        XAmzDate: sdk.String("at"),
        XAmzSecurityToken: sdk.String("quaerat"),
        XAmzSignature: sdk.String("tempora"),
        XAmzSignedHeaders: sdk.String("vel"),
        XAmzTarget: operations.PutOptedOutNumberXAmzTargetEnumPinpointSmsVoiceV2PutOptedOutNumber,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutOptedOutNumberResult != nil {
        // handle response
    }
}
```

## ReleasePhoneNumber

<p>Releases an existing origination phone number in your account. Once released, a phone number is no longer available for sending messages.</p> <p>If the origination phone number has deletion protection enabled or is associated with a pool, an Error is returned.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ReleasePhoneNumber(ctx, operations.ReleasePhoneNumberRequest{
        ReleasePhoneNumberRequest: shared.ReleasePhoneNumberRequest{
            PhoneNumberID: "quod",
        },
        XAmzAlgorithm: sdk.String("officiis"),
        XAmzContentSha256: sdk.String("qui"),
        XAmzCredential: sdk.String("dolorum"),
        XAmzDate: sdk.String("a"),
        XAmzSecurityToken: sdk.String("esse"),
        XAmzSignature: sdk.String("harum"),
        XAmzSignedHeaders: sdk.String("iusto"),
        XAmzTarget: operations.ReleasePhoneNumberXAmzTargetEnumPinpointSmsVoiceV2ReleasePhoneNumber,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ReleasePhoneNumberResult != nil {
        // handle response
    }
}
```

## RequestPhoneNumber

Request an origination phone number for use in your account. For more information on phone number request see <a href="https://docs.aws.amazon.com/pinpoint/latest/userguide/settings-sms-request-number.html"> Requesting a number </a> in the <i>Amazon Pinpoint User Guide</i>.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.RequestPhoneNumber(ctx, operations.RequestPhoneNumberRequest{
        RequestPhoneNumberRequest: shared.RequestPhoneNumberRequest{
            ClientToken: sdk.String("ipsum"),
            DeletionProtectionEnabled: sdk.Bool(false),
            IsoCountryCode: "quisquam",
            MessageType: shared.MessageTypeEnumPromotional,
            NumberCapabilities: []shared.NumberCapabilityEnum{
                shared.NumberCapabilityEnumVoice,
            },
            NumberType: shared.RequestableNumberTypeEnumTenDlc,
            OptOutListName: sdk.String("numquam"),
            PoolID: sdk.String("enim"),
            RegistrationID: sdk.String("dolorem"),
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "totam",
                    Value: "nihil",
                },
                shared.Tag{
                    Key: "sit",
                    Value: "expedita",
                },
                shared.Tag{
                    Key: "neque",
                    Value: "sed",
                },
                shared.Tag{
                    Key: "vel",
                    Value: "libero",
                },
            },
        },
        XAmzAlgorithm: sdk.String("voluptas"),
        XAmzContentSha256: sdk.String("deserunt"),
        XAmzCredential: sdk.String("quam"),
        XAmzDate: sdk.String("ipsum"),
        XAmzSecurityToken: sdk.String("incidunt"),
        XAmzSignature: sdk.String("qui"),
        XAmzSignedHeaders: sdk.String("cupiditate"),
        XAmzTarget: operations.RequestPhoneNumberXAmzTargetEnumPinpointSmsVoiceV2RequestPhoneNumber,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RequestPhoneNumberResult != nil {
        // handle response
    }
}
```

## SendTextMessage

<p>Creates a new text message and sends it to a recipient's phone number.</p> <p>SMS throughput limits are measured in Message Parts per Second (MPS). Your MPS limit depends on the destination country of your messages, as well as the type of phone number (origination number) that you use to send the message. For more information, see <a href="https://docs.aws.amazon.com/pinpoint/latest/userguide/channels-sms-limitations-mps.html">Message Parts per Second (MPS) limits</a> in the <i>Amazon Pinpoint User Guide</i>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.SendTextMessage(ctx, operations.SendTextMessageRequest{
        SendTextMessageRequest: shared.SendTextMessageRequest{
            ConfigurationSetName: sdk.String("maxime"),
            Context: map[string]string{
                "soluta": "dicta",
                "laborum": "totam",
                "incidunt": "aspernatur",
                "dolores": "distinctio",
            },
            DestinationCountryParameters: map[string]string{
                "aliquid": "quam",
                "molestias": "temporibus",
                "qui": "neque",
            },
            DestinationPhoneNumber: "fugit",
            DryRun: sdk.Bool(false),
            Keyword: sdk.String("magni"),
            MaxPrice: sdk.String("odio"),
            MessageBody: sdk.String("sunt"),
            MessageType: shared.MessageTypeEnumTransactional.ToPointer(),
            OriginationIdentity: sdk.String("nam"),
            TimeToLive: sdk.Int64(940432),
        },
        XAmzAlgorithm: sdk.String("voluptatem"),
        XAmzContentSha256: sdk.String("cumque"),
        XAmzCredential: sdk.String("soluta"),
        XAmzDate: sdk.String("nobis"),
        XAmzSecurityToken: sdk.String("et"),
        XAmzSignature: sdk.String("saepe"),
        XAmzSignedHeaders: sdk.String("ipsum"),
        XAmzTarget: operations.SendTextMessageXAmzTargetEnumPinpointSmsVoiceV2SendTextMessage,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SendTextMessageResult != nil {
        // handle response
    }
}
```

## SendVoiceMessage

Allows you to send a request that sends a text message through Amazon Pinpoint. This operation uses <a href="http://aws.amazon.com/polly/">Amazon Polly</a> to convert a text script into a voice message.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.SendVoiceMessage(ctx, operations.SendVoiceMessageRequest{
        SendVoiceMessageRequest: shared.SendVoiceMessageRequest{
            ConfigurationSetName: sdk.String("veritatis"),
            Context: map[string]string{
                "quos": "tempore",
                "cupiditate": "aperiam",
                "delectus": "dolorem",
            },
            DestinationPhoneNumber: "dolore",
            DryRun: sdk.Bool(false),
            MaxPricePerMinute: sdk.String("labore"),
            MessageBody: sdk.String("adipisci"),
            MessageBodyTextType: shared.VoiceMessageBodyTextTypeEnumSsml.ToPointer(),
            OriginationIdentity: "architecto",
            TimeToLive: sdk.Int64(63038),
            VoiceID: shared.VoiceIDEnumAmy.ToPointer(),
        },
        XAmzAlgorithm: sdk.String("quas"),
        XAmzContentSha256: sdk.String("itaque"),
        XAmzCredential: sdk.String("consequatur"),
        XAmzDate: sdk.String("est"),
        XAmzSecurityToken: sdk.String("repellendus"),
        XAmzSignature: sdk.String("porro"),
        XAmzSignedHeaders: sdk.String("doloribus"),
        XAmzTarget: operations.SendVoiceMessageXAmzTargetEnumPinpointSmsVoiceV2SendVoiceMessage,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SendVoiceMessageResult != nil {
        // handle response
    }
}
```

## SetDefaultMessageType

<p>Sets the default message type on a configuration set.</p> <p>Choose the category of SMS messages that you plan to send from this account. If you send account-related messages or time-sensitive messages such as one-time passcodes, choose <b>Transactional</b>. If you plan to send messages that contain marketing material or other promotional content, choose <b>Promotional</b>. This setting applies to your entire Amazon Web Services account.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.SetDefaultMessageType(ctx, operations.SetDefaultMessageTypeRequest{
        SetDefaultMessageTypeRequest: shared.SetDefaultMessageTypeRequest{
            ConfigurationSetName: "ut",
            MessageType: shared.MessageTypeEnumPromotional,
        },
        XAmzAlgorithm: sdk.String("cupiditate"),
        XAmzContentSha256: sdk.String("qui"),
        XAmzCredential: sdk.String("quae"),
        XAmzDate: sdk.String("laudantium"),
        XAmzSecurityToken: sdk.String("odio"),
        XAmzSignature: sdk.String("occaecati"),
        XAmzSignedHeaders: sdk.String("voluptatibus"),
        XAmzTarget: operations.SetDefaultMessageTypeXAmzTargetEnumPinpointSmsVoiceV2SetDefaultMessageType,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SetDefaultMessageTypeResult != nil {
        // handle response
    }
}
```

## SetDefaultSenderID

<p>Sets default sender ID on a configuration set.</p> <p>When sending a text message to a destination country that supports sender IDs, the default sender ID on the configuration set specified will be used if no dedicated origination phone numbers or registered sender IDs are available in your account.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.SetDefaultSenderID(ctx, operations.SetDefaultSenderIDRequest{
        SetDefaultSenderIDRequest: shared.SetDefaultSenderIDRequest{
            ConfigurationSetName: "quisquam",
            SenderID: "vero",
        },
        XAmzAlgorithm: sdk.String("omnis"),
        XAmzContentSha256: sdk.String("quis"),
        XAmzCredential: sdk.String("ipsum"),
        XAmzDate: sdk.String("delectus"),
        XAmzSecurityToken: sdk.String("voluptate"),
        XAmzSignature: sdk.String("consectetur"),
        XAmzSignedHeaders: sdk.String("vero"),
        XAmzTarget: operations.SetDefaultSenderIDXAmzTargetEnumPinpointSmsVoiceV2SetDefaultSenderID,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SetDefaultSenderIDResult != nil {
        // handle response
    }
}
```

## SetTextMessageSpendLimitOverride

Sets an account level monthly spend limit override for sending text messages. The requested spend limit must be less than or equal to the <code>MaxLimit</code>, which is set by Amazon Web Services. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.SetTextMessageSpendLimitOverride(ctx, operations.SetTextMessageSpendLimitOverrideRequest{
        SetTextMessageSpendLimitOverrideRequest: shared.SetTextMessageSpendLimitOverrideRequest{
            MonthlyLimit: 949319,
        },
        XAmzAlgorithm: sdk.String("dignissimos"),
        XAmzContentSha256: sdk.String("hic"),
        XAmzCredential: sdk.String("distinctio"),
        XAmzDate: sdk.String("quod"),
        XAmzSecurityToken: sdk.String("odio"),
        XAmzSignature: sdk.String("similique"),
        XAmzSignedHeaders: sdk.String("facilis"),
        XAmzTarget: operations.SetTextMessageSpendLimitOverrideXAmzTargetEnumPinpointSmsVoiceV2SetTextMessageSpendLimitOverride,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SetTextMessageSpendLimitOverrideResult != nil {
        // handle response
    }
}
```

## SetVoiceMessageSpendLimitOverride

Sets an account level monthly spend limit override for sending voice messages. The requested spend limit must be less than or equal to the <code>MaxLimit</code>, which is set by Amazon Web Services. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.SetVoiceMessageSpendLimitOverride(ctx, operations.SetVoiceMessageSpendLimitOverrideRequest{
        SetVoiceMessageSpendLimitOverrideRequest: shared.SetVoiceMessageSpendLimitOverrideRequest{
            MonthlyLimit: 874288,
        },
        XAmzAlgorithm: sdk.String("ducimus"),
        XAmzContentSha256: sdk.String("dolore"),
        XAmzCredential: sdk.String("quibusdam"),
        XAmzDate: sdk.String("illum"),
        XAmzSecurityToken: sdk.String("sequi"),
        XAmzSignature: sdk.String("natus"),
        XAmzSignedHeaders: sdk.String("impedit"),
        XAmzTarget: operations.SetVoiceMessageSpendLimitOverrideXAmzTargetEnumPinpointSmsVoiceV2SetVoiceMessageSpendLimitOverride,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SetVoiceMessageSpendLimitOverrideResult != nil {
        // handle response
    }
}
```

## TagResource

Adds or overwrites only the specified tags for the specified Amazon Pinpoint SMS Voice, version 2 resource. When you specify an existing tag key, the value is overwritten with the new value. Each resource can have a maximum of 50 tags. Each tag consists of a key and an optional value. Tag keys must be unique per resource. For more information about tags, see <a href="https://docs.aws.amazon.com/pinpoint/latest/developerguide/tagging-resources.html"> Tagging Amazon Pinpoint resources</a> in the <i>Amazon Pinpoint Developer Guide</i>.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.TagResource(ctx, operations.TagResourceRequest{
        TagResourceRequest: shared.TagResourceRequest{
            ResourceArn: "aut",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "exercitationem",
                    Value: "nulla",
                },
                shared.Tag{
                    Key: "fugit",
                    Value: "porro",
                },
                shared.Tag{
                    Key: "maiores",
                    Value: "doloribus",
                },
                shared.Tag{
                    Key: "iusto",
                    Value: "eligendi",
                },
            },
        },
        XAmzAlgorithm: sdk.String("ducimus"),
        XAmzContentSha256: sdk.String("alias"),
        XAmzCredential: sdk.String("officia"),
        XAmzDate: sdk.String("tempora"),
        XAmzSecurityToken: sdk.String("ipsam"),
        XAmzSignature: sdk.String("ea"),
        XAmzSignedHeaders: sdk.String("aspernatur"),
        XAmzTarget: operations.TagResourceXAmzTargetEnumPinpointSmsVoiceV2TagResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TagResourceResult != nil {
        // handle response
    }
}
```

## UntagResource

Removes the association of the specified tags from an Amazon Pinpoint SMS Voice V2 resource. For more information on tags see <a href="https://docs.aws.amazon.com/pinpoint/latest/developerguide/tagging-resources.html"> Tagging Amazon Pinpoint resources</a> in the <i>Amazon Pinpoint Developer Guide</i>. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UntagResource(ctx, operations.UntagResourceRequest{
        UntagResourceRequest: shared.UntagResourceRequest{
            ResourceArn: "vel",
            TagKeys: []string{
                "magnam",
                "ratione",
                "ex",
                "laudantium",
            },
        },
        XAmzAlgorithm: sdk.String("dicta"),
        XAmzContentSha256: sdk.String("dolor"),
        XAmzCredential: sdk.String("maiores"),
        XAmzDate: sdk.String("quasi"),
        XAmzSecurityToken: sdk.String("ex"),
        XAmzSignature: sdk.String("nulla"),
        XAmzSignedHeaders: sdk.String("excepturi"),
        XAmzTarget: operations.UntagResourceXAmzTargetEnumPinpointSmsVoiceV2UntagResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UntagResourceResult != nil {
        // handle response
    }
}
```

## UpdateEventDestination

<p>Updates an existing event destination in a configuration set. You can update the IAM role ARN for CloudWatch Logs and Kinesis Data Firehose. You can also enable or disable the event destination.</p> <p>You may want to update an event destination to change its matching event types or updating the destination resource ARN. You can't change an event destination's type between CloudWatch Logs, Kinesis Data Firehose, and Amazon SNS.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateEventDestination(ctx, operations.UpdateEventDestinationRequest{
        UpdateEventDestinationRequest: shared.UpdateEventDestinationRequest{
            CloudWatchLogsDestination: &shared.CloudWatchLogsDestination{
                IamRoleArn: "voluptatibus",
                LogGroupArn: "nostrum",
            },
            ConfigurationSetName: "sapiente",
            Enabled: sdk.Bool(false),
            EventDestinationName: "quisquam",
            KinesisFirehoseDestination: &shared.KinesisFirehoseDestination{
                DeliveryStreamArn: "saepe",
                IamRoleArn: "ea",
            },
            MatchingEventTypes: []shared.EventTypeEnum{
                shared.EventTypeEnumTextInvalidMessage,
                shared.EventTypeEnumTextInvalidMessage,
                shared.EventTypeEnumTextUnreachable,
                shared.EventTypeEnumTextSent,
            },
            SnsDestination: &shared.SnsDestination{
                TopicArn: "magnam",
            },
        },
        XAmzAlgorithm: sdk.String("ea"),
        XAmzContentSha256: sdk.String("quo"),
        XAmzCredential: sdk.String("consectetur"),
        XAmzDate: sdk.String("recusandae"),
        XAmzSecurityToken: sdk.String("aspernatur"),
        XAmzSignature: sdk.String("minima"),
        XAmzSignedHeaders: sdk.String("eaque"),
        XAmzTarget: operations.UpdateEventDestinationXAmzTargetEnumPinpointSmsVoiceV2UpdateEventDestination,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateEventDestinationResult != nil {
        // handle response
    }
}
```

## UpdatePhoneNumber

<p>Updates the configuration of an existing origination phone number. You can update the opt-out list, enable or disable two-way messaging, change the TwoWayChannelArn, enable or disable self-managed opt-outs, and enable or disable deletion protection.</p> <p>If the origination phone number is associated with a pool, an Error is returned.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdatePhoneNumber(ctx, operations.UpdatePhoneNumberRequest{
        UpdatePhoneNumberRequest: shared.UpdatePhoneNumberRequest{
            DeletionProtectionEnabled: sdk.Bool(false),
            OptOutListName: sdk.String("a"),
            PhoneNumberID: "libero",
            SelfManagedOptOutsEnabled: sdk.Bool(false),
            TwoWayChannelArn: sdk.String("aut"),
            TwoWayEnabled: sdk.Bool(false),
        },
        XAmzAlgorithm: sdk.String("aut"),
        XAmzContentSha256: sdk.String("deleniti"),
        XAmzCredential: sdk.String("impedit"),
        XAmzDate: sdk.String("aliquam"),
        XAmzSecurityToken: sdk.String("fugit"),
        XAmzSignature: sdk.String("accusamus"),
        XAmzSignedHeaders: sdk.String("inventore"),
        XAmzTarget: operations.UpdatePhoneNumberXAmzTargetEnumPinpointSmsVoiceV2UpdatePhoneNumber,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdatePhoneNumberResult != nil {
        // handle response
    }
}
```

## UpdatePool

Updates the configuration of an existing pool. You can update the opt-out list, enable or disable two-way messaging, change the <code>TwoWayChannelArn</code>, enable or disable self-managed opt-outs, enable or disable deletion protection, and enable or disable shared routes.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdatePool(ctx, operations.UpdatePoolRequest{
        UpdatePoolRequest: shared.UpdatePoolRequest{
            DeletionProtectionEnabled: sdk.Bool(false),
            OptOutListName: sdk.String("non"),
            PoolID: "et",
            SelfManagedOptOutsEnabled: sdk.Bool(false),
            SharedRoutesEnabled: sdk.Bool(false),
            TwoWayChannelArn: sdk.String("dolorum"),
            TwoWayEnabled: sdk.Bool(false),
        },
        XAmzAlgorithm: sdk.String("laborum"),
        XAmzContentSha256: sdk.String("placeat"),
        XAmzCredential: sdk.String("velit"),
        XAmzDate: sdk.String("eum"),
        XAmzSecurityToken: sdk.String("autem"),
        XAmzSignature: sdk.String("nobis"),
        XAmzSignedHeaders: sdk.String("quas"),
        XAmzTarget: operations.UpdatePoolXAmzTargetEnumPinpointSmsVoiceV2UpdatePool,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdatePoolResult != nil {
        // handle response
    }
}
```
