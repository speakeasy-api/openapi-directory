# SDK

## Overview

<p>Welcome to the <i>Amazon Pinpoint SMS and Voice, version 2 API Reference</i>. This guide provides information about Amazon Pinpoint SMS and Voice, version 2 API resources, including supported HTTP methods, parameters, and schemas.</p> <p>Amazon Pinpoint is an Amazon Web Services service that you can use to engage with your recipients across multiple messaging channels. The Amazon Pinpoint SMS and Voice, version 2 API provides programmatic access to options that are unique to the SMS and voice channels and supplements the resources provided by the Amazon Pinpoint API.</p> <p>If you're new to Amazon Pinpoint, it's also helpful to review the <a href="https://docs.aws.amazon.com/pinpoint/latest/developerguide/welcome.html"> Amazon Pinpoint Developer Guide</a>. The <i>Amazon Pinpoint Developer Guide</i> provides tutorials, code samples, and procedures that demonstrate how to use Amazon Pinpoint features programmatically and how to integrate Amazon Pinpoint functionality into mobile apps and other types of applications. The guide also provides key information, such as Amazon Pinpoint integration with other Amazon Web Services services, and the quotas that apply to use of the service.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/sms-voice/>
### Available Operations

* [associateOriginationIdentity](#associateoriginationidentity) - <p>Associates the specified origination identity with a pool.</p> <p>If the origination identity is a phone number and is already associated with another pool, an Error is returned. A sender ID can be associated with multiple pools.</p> <p>If the origination identity configuration doesn't match the pool's configuration, an Error is returned.</p>
* [createConfigurationSet](#createconfigurationset) - <p>Creates a new configuration set. After you create the configuration set, you can add one or more event destinations to it.</p> <p>A configuration set is a set of rules that you apply to the SMS and voice messages that you send.</p> <p>When you send a message, you can optionally specify a single configuration set.</p>
* [createEventDestination](#createeventdestination) - <p>Creates a new event destination in a configuration set.</p> <p>An event destination is a location where you send message events. The event options are Amazon CloudWatch, Amazon Kinesis Data Firehose, or Amazon SNS. For example, when a message is delivered successfully, you can send information about that event to an event destination, or send notifications to endpoints that are subscribed to an Amazon SNS topic.</p> <p>Each configuration set can contain between 0 and 5 event destinations. Each event destination can contain a reference to a single destination, such as a CloudWatch or Kinesis Data Firehose destination.</p>
* [createOptOutList](#createoptoutlist) - <p>Creates a new opt-out list.</p> <p>If the opt-out list name already exists, an Error is returned.</p> <p>An opt-out list is a list of phone numbers that are opted out, meaning you can't send SMS or voice messages to them. If end user replies with the keyword "STOP," an entry for the phone number is added to the opt-out list. In addition to STOP, your recipients can use any supported opt-out keyword, such as CANCEL or OPTOUT. For a list of supported opt-out keywords, see <a href="https://docs.aws.amazon.com/pinpoint/latest/userguide/channels-sms-manage.html#channels-sms-manage-optout"> SMS opt out </a> in the <i>Amazon Pinpoint User Guide</i>.</p>
* [createPool](#createpool) - <p>Creates a new pool and associates the specified origination identity to the pool. A pool can include one or more phone numbers and SenderIds that are associated with your Amazon Web Services account.</p> <p>The new pool inherits its configuration from the specified origination identity. This includes keywords, message type, opt-out list, two-way configuration, and self-managed opt-out configuration. Deletion protection isn't inherited from the origination identity and defaults to false.</p> <p>If the origination identity is a phone number and is already associated with another pool, an Error is returned. A sender ID can be associated with multiple pools.</p>
* [deleteConfigurationSet](#deleteconfigurationset) - <p>Deletes an existing configuration set.</p> <p>A configuration set is a set of rules that you apply to voice and SMS messages that you send. In a configuration set, you can specify a destination for specific types of events related to voice and SMS messages. </p>
* [deleteDefaultMessageType](#deletedefaultmessagetype) - <p>Deletes an existing default message type on a configuration set.</p> <p> A message type is a type of messages that you plan to send. If you send account-related messages or time-sensitive messages such as one-time passcodes, choose <b>Transactional</b>. If you plan to send messages that contain marketing material or other promotional content, choose <b>Promotional</b>. This setting applies to your entire Amazon Web Services account. </p>
* [deleteDefaultSenderId](#deletedefaultsenderid) - <p>Deletes an existing default sender ID on a configuration set.</p> <p>A default sender ID is the identity that appears on recipients' devices when they receive SMS messages. Support for sender ID capabilities varies by country or region.</p>
* [deleteEventDestination](#deleteeventdestination) - <p>Deletes an existing event destination.</p> <p>An event destination is a location where you send response information about the messages that you send. For example, when a message is delivered successfully, you can send information about that event to an Amazon CloudWatch destination, or send notifications to endpoints that are subscribed to an Amazon SNS topic.</p>
* [deleteKeyword](#deletekeyword) - <p>Deletes an existing keyword from an origination phone number or pool.</p> <p>A keyword is a word that you can search for on a particular phone number or pool. It is also a specific word or phrase that an end user can send to your number to elicit a response, such as an informational message or a special offer. When your number receives a message that begins with a keyword, Amazon Pinpoint responds with a customizable message.</p> <p>Keywords "HELP" and "STOP" can't be deleted or modified.</p>
* [deleteOptOutList](#deleteoptoutlist) - <p>Deletes an existing opt-out list. All opted out phone numbers in the opt-out list are deleted.</p> <p>If the specified opt-out list name doesn't exist or is in-use by an origination phone number or pool, an Error is returned.</p>
* [deleteOptedOutNumber](#deleteoptedoutnumber) - <p>Deletes an existing opted out destination phone number from the specified opt-out list.</p> <p>Each destination phone number can only be deleted once every 30 days.</p> <p>If the specified destination phone number doesn't exist or if the opt-out list doesn't exist, an Error is returned.</p>
* [deletePool](#deletepool) - <p>Deletes an existing pool. Deleting a pool disassociates all origination identities from that pool.</p> <p>If the pool status isn't active or if deletion protection is enabled, an Error is returned.</p> <p>A pool is a collection of phone numbers and SenderIds. A pool can include one or more phone numbers and SenderIds that are associated with your Amazon Web Services account.</p>
* [deleteTextMessageSpendLimitOverride](#deletetextmessagespendlimitoverride) - Deletes an account-level monthly spending limit override for sending text messages. Deleting a spend limit override will set the <code>EnforcedLimit</code> to equal the <code>MaxLimit</code>, which is controlled by Amazon Web Services. For more information on spend limits (quotas) see <a href="https://docs.aws.amazon.com/pinpoint/latest/developerguide/quotas.html">Amazon Pinpoint quotas </a> in the <i>Amazon Pinpoint Developer Guide</i>.
* [deleteVoiceMessageSpendLimitOverride](#deletevoicemessagespendlimitoverride) - Deletes an account level monthly spend limit override for sending voice messages. Deleting a spend limit override sets the <code>EnforcedLimit</code> equal to the <code>MaxLimit</code>, which is controlled by Amazon Web Services. For more information on spending limits (quotas) see <a href="https://docs.aws.amazon.com/pinpoint/latest/developerguide/quotas.html">Amazon Pinpoint quotas</a> in the <i>Amazon Pinpoint Developer Guide</i>.
* [describeAccountAttributes](#describeaccountattributes) - <p>Describes attributes of your Amazon Web Services account. The supported account attributes include account tier, which indicates whether your account is in the sandbox or production environment. When you're ready to move your account out of the sandbox, create an Amazon Web Services Support case for a service limit increase request.</p> <p>New Amazon Pinpoint accounts are placed into an SMS or voice sandbox. The sandbox protects both Amazon Web Services end recipients and SMS or voice recipients from fraud and abuse. </p>
* [describeAccountLimits](#describeaccountlimits) - <p>Describes the current Amazon Pinpoint SMS Voice V2 resource quotas for your account. The description for a quota includes the quota name, current usage toward that quota, and the quota's maximum value.</p> <p>When you establish an Amazon Web Services account, the account has initial quotas on the maximum number of configuration sets, opt-out lists, phone numbers, and pools that you can create in a given Region. For more information see <a href="https://docs.aws.amazon.com/pinpoint/latest/developerguide/quotas.html"> Amazon Pinpoint quotas </a> in the <i>Amazon Pinpoint Developer Guide</i>.</p>
* [describeConfigurationSets](#describeconfigurationsets) - <p>Describes the specified configuration sets or all in your account.</p> <p>If you specify configuration set names, the output includes information for only the specified configuration sets. If you specify filters, the output includes information for only those configuration sets that meet the filter criteria. If you don't specify configuration set names or filters, the output includes information for all configuration sets.</p> <p>If you specify a configuration set name that isn't valid, an error is returned.</p>
* [describeKeywords](#describekeywords) - <p>Describes the specified keywords or all keywords on your origination phone number or pool.</p> <p>A keyword is a word that you can search for on a particular phone number or pool. It is also a specific word or phrase that an end user can send to your number to elicit a response, such as an informational message or a special offer. When your number receives a message that begins with a keyword, Amazon Pinpoint responds with a customizable message.</p> <p>If you specify a keyword that isn't valid, an Error is returned.</p>
* [describeOptOutLists](#describeoptoutlists) - <p>Describes the specified opt-out list or all opt-out lists in your account.</p> <p>If you specify opt-out list names, the output includes information for only the specified opt-out lists. Opt-out lists include only those that meet the filter criteria. If you don't specify opt-out list names or filters, the output includes information for all opt-out lists.</p> <p>If you specify an opt-out list name that isn't valid, an Error is returned.</p>
* [describeOptedOutNumbers](#describeoptedoutnumbers) - <p>Describes the specified opted out destination numbers or all opted out destination numbers in an opt-out list.</p> <p>If you specify opted out numbers, the output includes information for only the specified opted out numbers. If you specify filters, the output includes information for only those opted out numbers that meet the filter criteria. If you don't specify opted out numbers or filters, the output includes information for all opted out destination numbers in your opt-out list.</p> <p>If you specify an opted out number that isn't valid, an Error is returned.</p>
* [describePhoneNumbers](#describephonenumbers) - <p>Describes the specified origination phone number, or all the phone numbers in your account.</p> <p>If you specify phone number IDs, the output includes information for only the specified phone numbers. If you specify filters, the output includes information for only those phone numbers that meet the filter criteria. If you don't specify phone number IDs or filters, the output includes information for all phone numbers.</p> <p>If you specify a phone number ID that isn't valid, an Error is returned.</p>
* [describePools](#describepools) - <p>Retrieves the specified pools or all pools associated with your Amazon Web Services account.</p> <p>If you specify pool IDs, the output includes information for only the specified pools. If you specify filters, the output includes information for only those pools that meet the filter criteria. If you don't specify pool IDs or filters, the output includes information for all pools.</p> <p>If you specify a pool ID that isn't valid, an Error is returned.</p> <p>A pool is a collection of phone numbers and SenderIds. A pool can include one or more phone numbers and SenderIds that are associated with your Amazon Web Services account.</p>
* [describeSenderIds](#describesenderids) - <p>Describes the specified SenderIds or all SenderIds associated with your Amazon Web Services account.</p> <p>If you specify SenderIds, the output includes information for only the specified SenderIds. If you specify filters, the output includes information for only those SenderIds that meet the filter criteria. If you don't specify SenderIds or filters, the output includes information for all SenderIds.</p> <p>f you specify a sender ID that isn't valid, an Error is returned.</p>
* [describeSpendLimits](#describespendlimits) - <p>Describes the current Amazon Pinpoint monthly spend limits for sending voice and text messages.</p> <p>When you establish an Amazon Web Services account, the account has initial monthly spend limit in a given Region. For more information on increasing your monthly spend limit, see <a href="https://docs.aws.amazon.com/pinpoint/latest/userguide/channels-sms-awssupport-spend-threshold.html"> Requesting increases to your monthly SMS spending quota for Amazon Pinpoint </a> in the <i>Amazon Pinpoint User Guide</i>.</p>
* [disassociateOriginationIdentity](#disassociateoriginationidentity) - <p>Removes the specified origination identity from an existing pool.</p> <p>If the origination identity isn't associated with the specified pool, an Error is returned.</p>
* [listPoolOriginationIdentities](#listpooloriginationidentities) - <p>Lists all associated origination identities in your pool.</p> <p>If you specify filters, the output includes information for only those origination identities that meet the filter criteria.</p>
* [listTagsForResource](#listtagsforresource) - List all tags associated with a resource.
* [putKeyword](#putkeyword) - <p>Creates or updates a keyword configuration on an origination phone number or pool.</p> <p> A keyword is a word that you can search for on a particular phone number or pool. It is also a specific word or phrase that an end user can send to your number to elicit a response, such as an informational message or a special offer. When your number receives a message that begins with a keyword, Amazon Pinpoint responds with a customizable message.</p> <p>If you specify a keyword that isn't valid, an Error is returned.</p>
* [putOptedOutNumber](#putoptedoutnumber) - <p>Creates an opted out destination phone number in the opt-out list.</p> <p>If the destination phone number isn't valid or if the specified opt-out list doesn't exist, an Error is returned.</p>
* [releasePhoneNumber](#releasephonenumber) - <p>Releases an existing origination phone number in your account. Once released, a phone number is no longer available for sending messages.</p> <p>If the origination phone number has deletion protection enabled or is associated with a pool, an Error is returned.</p>
* [requestPhoneNumber](#requestphonenumber) - Request an origination phone number for use in your account. For more information on phone number request see <a href="https://docs.aws.amazon.com/pinpoint/latest/userguide/settings-sms-request-number.html"> Requesting a number </a> in the <i>Amazon Pinpoint User Guide</i>.
* [sendTextMessage](#sendtextmessage) - <p>Creates a new text message and sends it to a recipient's phone number.</p> <p>SMS throughput limits are measured in Message Parts per Second (MPS). Your MPS limit depends on the destination country of your messages, as well as the type of phone number (origination number) that you use to send the message. For more information, see <a href="https://docs.aws.amazon.com/pinpoint/latest/userguide/channels-sms-limitations-mps.html">Message Parts per Second (MPS) limits</a> in the <i>Amazon Pinpoint User Guide</i>.</p>
* [sendVoiceMessage](#sendvoicemessage) - Allows you to send a request that sends a text message through Amazon Pinpoint. This operation uses <a href="http://aws.amazon.com/polly/">Amazon Polly</a> to convert a text script into a voice message.
* [setDefaultMessageType](#setdefaultmessagetype) - <p>Sets the default message type on a configuration set.</p> <p>Choose the category of SMS messages that you plan to send from this account. If you send account-related messages or time-sensitive messages such as one-time passcodes, choose <b>Transactional</b>. If you plan to send messages that contain marketing material or other promotional content, choose <b>Promotional</b>. This setting applies to your entire Amazon Web Services account.</p>
* [setDefaultSenderId](#setdefaultsenderid) - <p>Sets default sender ID on a configuration set.</p> <p>When sending a text message to a destination country that supports sender IDs, the default sender ID on the configuration set specified will be used if no dedicated origination phone numbers or registered sender IDs are available in your account.</p>
* [setTextMessageSpendLimitOverride](#settextmessagespendlimitoverride) - Sets an account level monthly spend limit override for sending text messages. The requested spend limit must be less than or equal to the <code>MaxLimit</code>, which is set by Amazon Web Services. 
* [setVoiceMessageSpendLimitOverride](#setvoicemessagespendlimitoverride) - Sets an account level monthly spend limit override for sending voice messages. The requested spend limit must be less than or equal to the <code>MaxLimit</code>, which is set by Amazon Web Services. 
* [tagResource](#tagresource) - Adds or overwrites only the specified tags for the specified Amazon Pinpoint SMS Voice, version 2 resource. When you specify an existing tag key, the value is overwritten with the new value. Each resource can have a maximum of 50 tags. Each tag consists of a key and an optional value. Tag keys must be unique per resource. For more information about tags, see <a href="https://docs.aws.amazon.com/pinpoint/latest/developerguide/tagging-resources.html"> Tagging Amazon Pinpoint resources</a> in the <i>Amazon Pinpoint Developer Guide</i>.
* [untagResource](#untagresource) - Removes the association of the specified tags from an Amazon Pinpoint SMS Voice V2 resource. For more information on tags see <a href="https://docs.aws.amazon.com/pinpoint/latest/developerguide/tagging-resources.html"> Tagging Amazon Pinpoint resources</a> in the <i>Amazon Pinpoint Developer Guide</i>. 
* [updateEventDestination](#updateeventdestination) - <p>Updates an existing event destination in a configuration set. You can update the IAM role ARN for CloudWatch Logs and Kinesis Data Firehose. You can also enable or disable the event destination.</p> <p>You may want to update an event destination to change its matching event types or updating the destination resource ARN. You can't change an event destination's type between CloudWatch Logs, Kinesis Data Firehose, and Amazon SNS.</p>
* [updatePhoneNumber](#updatephonenumber) - <p>Updates the configuration of an existing origination phone number. You can update the opt-out list, enable or disable two-way messaging, change the TwoWayChannelArn, enable or disable self-managed opt-outs, and enable or disable deletion protection.</p> <p>If the origination phone number is associated with a pool, an Error is returned.</p>
* [updatePool](#updatepool) - Updates the configuration of an existing pool. You can update the opt-out list, enable or disable two-way messaging, change the <code>TwoWayChannelArn</code>, enable or disable self-managed opt-outs, enable or disable deletion protection, and enable or disable shared routes.

## associateOriginationIdentity

<p>Associates the specified origination identity with a pool.</p> <p>If the origination identity is a phone number and is already associated with another pool, an Error is returned. A sender ID can be associated with multiple pools.</p> <p>If the origination identity configuration doesn't match the pool's configuration, an Error is returned.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AssociateOriginationIdentityRequest;
import org.openapis.openapi.models.operations.AssociateOriginationIdentityResponse;
import org.openapis.openapi.models.operations.AssociateOriginationIdentityXAmzTargetEnum;
import org.openapis.openapi.models.shared.AssociateOriginationIdentityRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iure") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AssociateOriginationIdentityRequest req = new AssociateOriginationIdentityRequest(                new AssociateOriginationIdentityRequest("magnam", "debitis", "ipsa") {{
                                clientToken = "delectus";
                            }};, AssociateOriginationIdentityXAmzTargetEnum.PINPOINT_SMS_VOICE_V2_ASSOCIATE_ORIGINATION_IDENTITY) {{
                xAmzAlgorithm = "tempora";
                xAmzContentSha256 = "suscipit";
                xAmzCredential = "molestiae";
                xAmzDate = "minus";
                xAmzSecurityToken = "placeat";
                xAmzSignature = "voluptatum";
                xAmzSignedHeaders = "iusto";
            }};            

            AssociateOriginationIdentityResponse res = sdk.sdk.associateOriginationIdentity(req);

            if (res.associateOriginationIdentityResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createConfigurationSet

<p>Creates a new configuration set. After you create the configuration set, you can add one or more event destinations to it.</p> <p>A configuration set is a set of rules that you apply to the SMS and voice messages that you send.</p> <p>When you send a message, you can optionally specify a single configuration set.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateConfigurationSetRequest;
import org.openapis.openapi.models.operations.CreateConfigurationSetResponse;
import org.openapis.openapi.models.operations.CreateConfigurationSetXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateConfigurationSetRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("excepturi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateConfigurationSetRequest req = new CreateConfigurationSetRequest(                new CreateConfigurationSetRequest("nisi") {{
                                clientToken = "recusandae";
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("veritatis", "deserunt") {{
                                        key = "ab";
                                        value = "quis";
                                    }}),
                                    add(new Tag("repellendus", "sapiente") {{
                                        key = "perferendis";
                                        value = "ipsam";
                                    }}),
                                    add(new Tag("at", "at") {{
                                        key = "quo";
                                        value = "odit";
                                    }}),
                                    add(new Tag("quod", "quod") {{
                                        key = "maiores";
                                        value = "molestiae";
                                    }}),
                                }};
                            }};, CreateConfigurationSetXAmzTargetEnum.PINPOINT_SMS_VOICE_V2_CREATE_CONFIGURATION_SET) {{
                xAmzAlgorithm = "esse";
                xAmzContentSha256 = "totam";
                xAmzCredential = "porro";
                xAmzDate = "dolorum";
                xAmzSecurityToken = "dicta";
                xAmzSignature = "nam";
                xAmzSignedHeaders = "officia";
            }};            

            CreateConfigurationSetResponse res = sdk.sdk.createConfigurationSet(req);

            if (res.createConfigurationSetResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createEventDestination

<p>Creates a new event destination in a configuration set.</p> <p>An event destination is a location where you send message events. The event options are Amazon CloudWatch, Amazon Kinesis Data Firehose, or Amazon SNS. For example, when a message is delivered successfully, you can send information about that event to an event destination, or send notifications to endpoints that are subscribed to an Amazon SNS topic.</p> <p>Each configuration set can contain between 0 and 5 event destinations. Each event destination can contain a reference to a single destination, such as a CloudWatch or Kinesis Data Firehose destination.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateEventDestinationRequest;
import org.openapis.openapi.models.operations.CreateEventDestinationResponse;
import org.openapis.openapi.models.operations.CreateEventDestinationXAmzTargetEnum;
import org.openapis.openapi.models.shared.CloudWatchLogsDestination;
import org.openapis.openapi.models.shared.CreateEventDestinationRequest;
import org.openapis.openapi.models.shared.EventTypeEnum;
import org.openapis.openapi.models.shared.KinesisFirehoseDestination;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SnsDestination;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("occaecati") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateEventDestinationRequest req = new CreateEventDestinationRequest(                new CreateEventDestinationRequest("fugit", "deleniti",                 new org.openapis.openapi.models.shared.EventTypeEnum[]{{
                                                add(EventTypeEnum.VOICE_RINGING),
                                                add(EventTypeEnum.TEXT_SPAM),
                                                add(EventTypeEnum.TEXT_SENT),
                                                add(EventTypeEnum.TEXT_CARRIER_UNREACHABLE),
                                            }}) {{
                                clientToken = "molestiae";
                                cloudWatchLogsDestination = new CloudWatchLogsDestination("modi", "qui");;
                                kinesisFirehoseDestination = new KinesisFirehoseDestination("impedit", "cum");;
                                snsDestination = new SnsDestination("esse");;
                            }};, CreateEventDestinationXAmzTargetEnum.PINPOINT_SMS_VOICE_V2_CREATE_EVENT_DESTINATION) {{
                xAmzAlgorithm = "ipsum";
                xAmzContentSha256 = "excepturi";
                xAmzCredential = "aspernatur";
                xAmzDate = "perferendis";
                xAmzSecurityToken = "ad";
                xAmzSignature = "natus";
                xAmzSignedHeaders = "sed";
            }};            

            CreateEventDestinationResponse res = sdk.sdk.createEventDestination(req);

            if (res.createEventDestinationResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createOptOutList

<p>Creates a new opt-out list.</p> <p>If the opt-out list name already exists, an Error is returned.</p> <p>An opt-out list is a list of phone numbers that are opted out, meaning you can't send SMS or voice messages to them. If end user replies with the keyword "STOP," an entry for the phone number is added to the opt-out list. In addition to STOP, your recipients can use any supported opt-out keyword, such as CANCEL or OPTOUT. For a list of supported opt-out keywords, see <a href="https://docs.aws.amazon.com/pinpoint/latest/userguide/channels-sms-manage.html#channels-sms-manage-optout"> SMS opt out </a> in the <i>Amazon Pinpoint User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateOptOutListRequest;
import org.openapis.openapi.models.operations.CreateOptOutListResponse;
import org.openapis.openapi.models.operations.CreateOptOutListXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateOptOutListRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iste") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateOptOutListRequest req = new CreateOptOutListRequest(                new CreateOptOutListRequest("dolor") {{
                                clientToken = "natus";
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("fuga", "in") {{
                                        key = "hic";
                                        value = "saepe";
                                    }}),
                                    add(new Tag("iure", "saepe") {{
                                        key = "corporis";
                                        value = "iste";
                                    }}),
                                }};
                            }};, CreateOptOutListXAmzTargetEnum.PINPOINT_SMS_VOICE_V2_CREATE_OPT_OUT_LIST) {{
                xAmzAlgorithm = "quidem";
                xAmzContentSha256 = "architecto";
                xAmzCredential = "ipsa";
                xAmzDate = "reiciendis";
                xAmzSecurityToken = "est";
                xAmzSignature = "mollitia";
                xAmzSignedHeaders = "laborum";
            }};            

            CreateOptOutListResponse res = sdk.sdk.createOptOutList(req);

            if (res.createOptOutListResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createPool

<p>Creates a new pool and associates the specified origination identity to the pool. A pool can include one or more phone numbers and SenderIds that are associated with your Amazon Web Services account.</p> <p>The new pool inherits its configuration from the specified origination identity. This includes keywords, message type, opt-out list, two-way configuration, and self-managed opt-out configuration. Deletion protection isn't inherited from the origination identity and defaults to false.</p> <p>If the origination identity is a phone number and is already associated with another pool, an Error is returned. A sender ID can be associated with multiple pools.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreatePoolRequest;
import org.openapis.openapi.models.operations.CreatePoolResponse;
import org.openapis.openapi.models.operations.CreatePoolXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreatePoolRequest;
import org.openapis.openapi.models.shared.MessageTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreatePoolRequest req = new CreatePoolRequest(                new CreatePoolRequest("dolorem", MessageTypeEnum.TRANSACTIONAL, "explicabo") {{
                                clientToken = "nobis";
                                deletionProtectionEnabled = false;
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("minima", "excepturi") {{
                                        key = "omnis";
                                        value = "nemo";
                                    }}),
                                    add(new Tag("culpa", "doloribus") {{
                                        key = "accusantium";
                                        value = "iure";
                                    }}),
                                }};
                            }};, CreatePoolXAmzTargetEnum.PINPOINT_SMS_VOICE_V2_CREATE_POOL) {{
                xAmzAlgorithm = "sapiente";
                xAmzContentSha256 = "architecto";
                xAmzCredential = "mollitia";
                xAmzDate = "dolorem";
                xAmzSecurityToken = "culpa";
                xAmzSignature = "consequuntur";
                xAmzSignedHeaders = "repellat";
            }};            

            CreatePoolResponse res = sdk.sdk.createPool(req);

            if (res.createPoolResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteConfigurationSet

<p>Deletes an existing configuration set.</p> <p>A configuration set is a set of rules that you apply to voice and SMS messages that you send. In a configuration set, you can specify a destination for specific types of events related to voice and SMS messages. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteConfigurationSetRequest;
import org.openapis.openapi.models.operations.DeleteConfigurationSetResponse;
import org.openapis.openapi.models.operations.DeleteConfigurationSetXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteConfigurationSetRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("mollitia") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteConfigurationSetRequest req = new DeleteConfigurationSetRequest(                new DeleteConfigurationSetRequest("occaecati");, DeleteConfigurationSetXAmzTargetEnum.PINPOINT_SMS_VOICE_V2_DELETE_CONFIGURATION_SET) {{
                xAmzAlgorithm = "numquam";
                xAmzContentSha256 = "commodi";
                xAmzCredential = "quam";
                xAmzDate = "molestiae";
                xAmzSecurityToken = "velit";
                xAmzSignature = "error";
                xAmzSignedHeaders = "quia";
            }};            

            DeleteConfigurationSetResponse res = sdk.sdk.deleteConfigurationSet(req);

            if (res.deleteConfigurationSetResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteDefaultMessageType

<p>Deletes an existing default message type on a configuration set.</p> <p> A message type is a type of messages that you plan to send. If you send account-related messages or time-sensitive messages such as one-time passcodes, choose <b>Transactional</b>. If you plan to send messages that contain marketing material or other promotional content, choose <b>Promotional</b>. This setting applies to your entire Amazon Web Services account. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteDefaultMessageTypeRequest;
import org.openapis.openapi.models.operations.DeleteDefaultMessageTypeResponse;
import org.openapis.openapi.models.operations.DeleteDefaultMessageTypeXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteDefaultMessageTypeRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteDefaultMessageTypeRequest req = new DeleteDefaultMessageTypeRequest(                new DeleteDefaultMessageTypeRequest("vitae");, DeleteDefaultMessageTypeXAmzTargetEnum.PINPOINT_SMS_VOICE_V2_DELETE_DEFAULT_MESSAGE_TYPE) {{
                xAmzAlgorithm = "laborum";
                xAmzContentSha256 = "animi";
                xAmzCredential = "enim";
                xAmzDate = "odit";
                xAmzSecurityToken = "quo";
                xAmzSignature = "sequi";
                xAmzSignedHeaders = "tenetur";
            }};            

            DeleteDefaultMessageTypeResponse res = sdk.sdk.deleteDefaultMessageType(req);

            if (res.deleteDefaultMessageTypeResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteDefaultSenderId

<p>Deletes an existing default sender ID on a configuration set.</p> <p>A default sender ID is the identity that appears on recipients' devices when they receive SMS messages. Support for sender ID capabilities varies by country or region.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteDefaultSenderIdRequest;
import org.openapis.openapi.models.operations.DeleteDefaultSenderIdResponse;
import org.openapis.openapi.models.operations.DeleteDefaultSenderIdXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteDefaultSenderIdRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteDefaultSenderIdRequest req = new DeleteDefaultSenderIdRequest(                new DeleteDefaultSenderIdRequest("id");, DeleteDefaultSenderIdXAmzTargetEnum.PINPOINT_SMS_VOICE_V2_DELETE_DEFAULT_SENDER_ID) {{
                xAmzAlgorithm = "possimus";
                xAmzContentSha256 = "aut";
                xAmzCredential = "quasi";
                xAmzDate = "error";
                xAmzSecurityToken = "temporibus";
                xAmzSignature = "laborum";
                xAmzSignedHeaders = "quasi";
            }};            

            DeleteDefaultSenderIdResponse res = sdk.sdk.deleteDefaultSenderId(req);

            if (res.deleteDefaultSenderIdResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteEventDestination

<p>Deletes an existing event destination.</p> <p>An event destination is a location where you send response information about the messages that you send. For example, when a message is delivered successfully, you can send information about that event to an Amazon CloudWatch destination, or send notifications to endpoints that are subscribed to an Amazon SNS topic.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteEventDestinationRequest;
import org.openapis.openapi.models.operations.DeleteEventDestinationResponse;
import org.openapis.openapi.models.operations.DeleteEventDestinationXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteEventDestinationRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("reiciendis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteEventDestinationRequest req = new DeleteEventDestinationRequest(                new DeleteEventDestinationRequest("voluptatibus", "vero");, DeleteEventDestinationXAmzTargetEnum.PINPOINT_SMS_VOICE_V2_DELETE_EVENT_DESTINATION) {{
                xAmzAlgorithm = "nihil";
                xAmzContentSha256 = "praesentium";
                xAmzCredential = "voluptatibus";
                xAmzDate = "ipsa";
                xAmzSecurityToken = "omnis";
                xAmzSignature = "voluptate";
                xAmzSignedHeaders = "cum";
            }};            

            DeleteEventDestinationResponse res = sdk.sdk.deleteEventDestination(req);

            if (res.deleteEventDestinationResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteKeyword

<p>Deletes an existing keyword from an origination phone number or pool.</p> <p>A keyword is a word that you can search for on a particular phone number or pool. It is also a specific word or phrase that an end user can send to your number to elicit a response, such as an informational message or a special offer. When your number receives a message that begins with a keyword, Amazon Pinpoint responds with a customizable message.</p> <p>Keywords "HELP" and "STOP" can't be deleted or modified.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteKeywordRequest;
import org.openapis.openapi.models.operations.DeleteKeywordResponse;
import org.openapis.openapi.models.operations.DeleteKeywordXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteKeywordRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("perferendis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteKeywordRequest req = new DeleteKeywordRequest(                new DeleteKeywordRequest("doloremque", "reprehenderit");, DeleteKeywordXAmzTargetEnum.PINPOINT_SMS_VOICE_V2_DELETE_KEYWORD) {{
                xAmzAlgorithm = "ut";
                xAmzContentSha256 = "maiores";
                xAmzCredential = "dicta";
                xAmzDate = "corporis";
                xAmzSecurityToken = "dolore";
                xAmzSignature = "iusto";
                xAmzSignedHeaders = "dicta";
            }};            

            DeleteKeywordResponse res = sdk.sdk.deleteKeyword(req);

            if (res.deleteKeywordResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteOptOutList

<p>Deletes an existing opt-out list. All opted out phone numbers in the opt-out list are deleted.</p> <p>If the specified opt-out list name doesn't exist or is in-use by an origination phone number or pool, an Error is returned.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteOptOutListRequest;
import org.openapis.openapi.models.operations.DeleteOptOutListResponse;
import org.openapis.openapi.models.operations.DeleteOptOutListXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteOptOutListRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("harum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteOptOutListRequest req = new DeleteOptOutListRequest(                new DeleteOptOutListRequest("enim");, DeleteOptOutListXAmzTargetEnum.PINPOINT_SMS_VOICE_V2_DELETE_OPT_OUT_LIST) {{
                xAmzAlgorithm = "accusamus";
                xAmzContentSha256 = "commodi";
                xAmzCredential = "repudiandae";
                xAmzDate = "quae";
                xAmzSecurityToken = "ipsum";
                xAmzSignature = "quidem";
                xAmzSignedHeaders = "molestias";
            }};            

            DeleteOptOutListResponse res = sdk.sdk.deleteOptOutList(req);

            if (res.deleteOptOutListResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteOptedOutNumber

<p>Deletes an existing opted out destination phone number from the specified opt-out list.</p> <p>Each destination phone number can only be deleted once every 30 days.</p> <p>If the specified destination phone number doesn't exist or if the opt-out list doesn't exist, an Error is returned.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteOptedOutNumberRequest;
import org.openapis.openapi.models.operations.DeleteOptedOutNumberResponse;
import org.openapis.openapi.models.operations.DeleteOptedOutNumberXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteOptedOutNumberRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("excepturi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteOptedOutNumberRequest req = new DeleteOptedOutNumberRequest(                new DeleteOptedOutNumberRequest("pariatur", "modi");, DeleteOptedOutNumberXAmzTargetEnum.PINPOINT_SMS_VOICE_V2_DELETE_OPTED_OUT_NUMBER) {{
                xAmzAlgorithm = "praesentium";
                xAmzContentSha256 = "rem";
                xAmzCredential = "voluptates";
                xAmzDate = "quasi";
                xAmzSecurityToken = "repudiandae";
                xAmzSignature = "sint";
                xAmzSignedHeaders = "veritatis";
            }};            

            DeleteOptedOutNumberResponse res = sdk.sdk.deleteOptedOutNumber(req);

            if (res.deleteOptedOutNumberResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deletePool

<p>Deletes an existing pool. Deleting a pool disassociates all origination identities from that pool.</p> <p>If the pool status isn't active or if deletion protection is enabled, an Error is returned.</p> <p>A pool is a collection of phone numbers and SenderIds. A pool can include one or more phone numbers and SenderIds that are associated with your Amazon Web Services account.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeletePoolRequest;
import org.openapis.openapi.models.operations.DeletePoolResponse;
import org.openapis.openapi.models.operations.DeletePoolXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeletePoolRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("itaque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeletePoolRequest req = new DeletePoolRequest(                new DeletePoolRequest("incidunt");, DeletePoolXAmzTargetEnum.PINPOINT_SMS_VOICE_V2_DELETE_POOL) {{
                xAmzAlgorithm = "enim";
                xAmzContentSha256 = "consequatur";
                xAmzCredential = "est";
                xAmzDate = "quibusdam";
                xAmzSecurityToken = "explicabo";
                xAmzSignature = "deserunt";
                xAmzSignedHeaders = "distinctio";
            }};            

            DeletePoolResponse res = sdk.sdk.deletePool(req);

            if (res.deletePoolResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteTextMessageSpendLimitOverride

Deletes an account-level monthly spending limit override for sending text messages. Deleting a spend limit override will set the <code>EnforcedLimit</code> to equal the <code>MaxLimit</code>, which is controlled by Amazon Web Services. For more information on spend limits (quotas) see <a href="https://docs.aws.amazon.com/pinpoint/latest/developerguide/quotas.html">Amazon Pinpoint quotas </a> in the <i>Amazon Pinpoint Developer Guide</i>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteTextMessageSpendLimitOverrideRequest;
import org.openapis.openapi.models.operations.DeleteTextMessageSpendLimitOverrideResponse;
import org.openapis.openapi.models.operations.DeleteTextMessageSpendLimitOverrideXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quibusdam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteTextMessageSpendLimitOverrideRequest req = new DeleteTextMessageSpendLimitOverrideRequest(                new java.util.HashMap<String, Object>() {{
                                put("modi", "qui");
                                put("aliquid", "cupiditate");
                            }}, DeleteTextMessageSpendLimitOverrideXAmzTargetEnum.PINPOINT_SMS_VOICE_V2_DELETE_TEXT_MESSAGE_SPEND_LIMIT_OVERRIDE) {{
                xAmzAlgorithm = "quos";
                xAmzContentSha256 = "perferendis";
                xAmzCredential = "magni";
                xAmzDate = "assumenda";
                xAmzSecurityToken = "ipsam";
                xAmzSignature = "alias";
                xAmzSignedHeaders = "fugit";
            }};            

            DeleteTextMessageSpendLimitOverrideResponse res = sdk.sdk.deleteTextMessageSpendLimitOverride(req);

            if (res.deleteTextMessageSpendLimitOverrideResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteVoiceMessageSpendLimitOverride

Deletes an account level monthly spend limit override for sending voice messages. Deleting a spend limit override sets the <code>EnforcedLimit</code> equal to the <code>MaxLimit</code>, which is controlled by Amazon Web Services. For more information on spending limits (quotas) see <a href="https://docs.aws.amazon.com/pinpoint/latest/developerguide/quotas.html">Amazon Pinpoint quotas</a> in the <i>Amazon Pinpoint Developer Guide</i>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteVoiceMessageSpendLimitOverrideRequest;
import org.openapis.openapi.models.operations.DeleteVoiceMessageSpendLimitOverrideResponse;
import org.openapis.openapi.models.operations.DeleteVoiceMessageSpendLimitOverrideXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteVoiceMessageSpendLimitOverrideRequest req = new DeleteVoiceMessageSpendLimitOverrideRequest(                new java.util.HashMap<String, Object>() {{
                                put("tempora", "facilis");
                                put("tempore", "labore");
                                put("delectus", "eum");
                            }}, DeleteVoiceMessageSpendLimitOverrideXAmzTargetEnum.PINPOINT_SMS_VOICE_V2_DELETE_VOICE_MESSAGE_SPEND_LIMIT_OVERRIDE) {{
                xAmzAlgorithm = "non";
                xAmzContentSha256 = "eligendi";
                xAmzCredential = "sint";
                xAmzDate = "aliquid";
                xAmzSecurityToken = "provident";
                xAmzSignature = "necessitatibus";
                xAmzSignedHeaders = "sint";
            }};            

            DeleteVoiceMessageSpendLimitOverrideResponse res = sdk.sdk.deleteVoiceMessageSpendLimitOverride(req);

            if (res.deleteVoiceMessageSpendLimitOverrideResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeAccountAttributes

<p>Describes attributes of your Amazon Web Services account. The supported account attributes include account tier, which indicates whether your account is in the sandbox or production environment. When you're ready to move your account out of the sandbox, create an Amazon Web Services Support case for a service limit increase request.</p> <p>New Amazon Pinpoint accounts are placed into an SMS or voice sandbox. The sandbox protects both Amazon Web Services end recipients and SMS or voice recipients from fraud and abuse. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeAccountAttributesRequest;
import org.openapis.openapi.models.operations.DescribeAccountAttributesResponse;
import org.openapis.openapi.models.operations.DescribeAccountAttributesXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeAccountAttributesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("officia") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeAccountAttributesRequest req = new DescribeAccountAttributesRequest(                new DescribeAccountAttributesRequest() {{
                                maxResults = 223081L;
                                nextToken = "debitis";
                            }};, DescribeAccountAttributesXAmzTargetEnum.PINPOINT_SMS_VOICE_V2_DESCRIBE_ACCOUNT_ATTRIBUTES) {{
                maxResults = "a";
                nextToken = "dolorum";
                xAmzAlgorithm = "in";
                xAmzContentSha256 = "in";
                xAmzCredential = "illum";
                xAmzDate = "maiores";
                xAmzSecurityToken = "rerum";
                xAmzSignature = "dicta";
                xAmzSignedHeaders = "magnam";
            }};            

            DescribeAccountAttributesResponse res = sdk.sdk.describeAccountAttributes(req);

            if (res.describeAccountAttributesResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeAccountLimits

<p>Describes the current Amazon Pinpoint SMS Voice V2 resource quotas for your account. The description for a quota includes the quota name, current usage toward that quota, and the quota's maximum value.</p> <p>When you establish an Amazon Web Services account, the account has initial quotas on the maximum number of configuration sets, opt-out lists, phone numbers, and pools that you can create in a given Region. For more information see <a href="https://docs.aws.amazon.com/pinpoint/latest/developerguide/quotas.html"> Amazon Pinpoint quotas </a> in the <i>Amazon Pinpoint Developer Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeAccountLimitsRequest;
import org.openapis.openapi.models.operations.DescribeAccountLimitsResponse;
import org.openapis.openapi.models.operations.DescribeAccountLimitsXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeAccountLimitsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cumque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeAccountLimitsRequest req = new DescribeAccountLimitsRequest(                new DescribeAccountLimitsRequest() {{
                                maxResults = 813798L;
                                nextToken = "ea";
                            }};, DescribeAccountLimitsXAmzTargetEnum.PINPOINT_SMS_VOICE_V2_DESCRIBE_ACCOUNT_LIMITS) {{
                maxResults = "aliquid";
                nextToken = "laborum";
                xAmzAlgorithm = "accusamus";
                xAmzContentSha256 = "non";
                xAmzCredential = "occaecati";
                xAmzDate = "enim";
                xAmzSecurityToken = "accusamus";
                xAmzSignature = "delectus";
                xAmzSignedHeaders = "quidem";
            }};            

            DescribeAccountLimitsResponse res = sdk.sdk.describeAccountLimits(req);

            if (res.describeAccountLimitsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeConfigurationSets

<p>Describes the specified configuration sets or all in your account.</p> <p>If you specify configuration set names, the output includes information for only the specified configuration sets. If you specify filters, the output includes information for only those configuration sets that meet the filter criteria. If you don't specify configuration set names or filters, the output includes information for all configuration sets.</p> <p>If you specify a configuration set name that isn't valid, an error is returned.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeConfigurationSetsRequest;
import org.openapis.openapi.models.operations.DescribeConfigurationSetsResponse;
import org.openapis.openapi.models.operations.DescribeConfigurationSetsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ConfigurationSetFilter;
import org.openapis.openapi.models.shared.ConfigurationSetFilterNameEnum;
import org.openapis.openapi.models.shared.DescribeConfigurationSetsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("provident") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeConfigurationSetsRequest req = new DescribeConfigurationSetsRequest(                new DescribeConfigurationSetsRequest() {{
                                configurationSetNames = new String[]{{
                                    add("id"),
                                    add("blanditiis"),
                                    add("deleniti"),
                                }};
                                filters = new org.openapis.openapi.models.shared.ConfigurationSetFilter[]{{
                                    add(new ConfigurationSetFilter(ConfigurationSetFilterNameEnum.DEFAULT_MESSAGE_TYPE,                 new String[]{{
                                                        add("perferendis"),
                                                        add("nihil"),
                                                    }}) {{
                                        name = ConfigurationSetFilterNameEnum.EVENT_DESTINATION_NAME;
                                        values = new String[]{{
                                            add("nisi"),
                                            add("vel"),
                                            add("natus"),
                                        }};
                                    }}),
                                    add(new ConfigurationSetFilter(ConfigurationSetFilterNameEnum.MATCHING_EVENT_TYPES,                 new String[]{{
                                                        add("nobis"),
                                                        add("eum"),
                                                        add("vero"),
                                                    }}) {{
                                        name = ConfigurationSetFilterNameEnum.MATCHING_EVENT_TYPES;
                                        values = new String[]{{
                                            add("id"),
                                            add("labore"),
                                            add("labore"),
                                        }};
                                    }}),
                                    add(new ConfigurationSetFilter(ConfigurationSetFilterNameEnum.EVENT_DESTINATION_NAME,                 new String[]{{
                                                        add("ullam"),
                                                        add("provident"),
                                                        add("quos"),
                                                    }}) {{
                                        name = ConfigurationSetFilterNameEnum.EVENT_DESTINATION_NAME;
                                        values = new String[]{{
                                            add("magnam"),
                                        }};
                                    }}),
                                    add(new ConfigurationSetFilter(ConfigurationSetFilterNameEnum.DEFAULT_SENDER_ID,                 new String[]{{
                                                        add("ad"),
                                                        add("eum"),
                                                        add("dolor"),
                                                    }}) {{
                                        name = ConfigurationSetFilterNameEnum.DEFAULT_MESSAGE_TYPE;
                                        values = new String[]{{
                                            add("mollitia"),
                                        }};
                                    }}),
                                }};
                                maxResults = 896547L;
                                nextToken = "odit";
                            }};, DescribeConfigurationSetsXAmzTargetEnum.PINPOINT_SMS_VOICE_V2_DESCRIBE_CONFIGURATION_SETS) {{
                maxResults = "nemo";
                nextToken = "quasi";
                xAmzAlgorithm = "iure";
                xAmzContentSha256 = "doloribus";
                xAmzCredential = "debitis";
                xAmzDate = "eius";
                xAmzSecurityToken = "maxime";
                xAmzSignature = "deleniti";
                xAmzSignedHeaders = "facilis";
            }};            

            DescribeConfigurationSetsResponse res = sdk.sdk.describeConfigurationSets(req);

            if (res.describeConfigurationSetsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeKeywords

<p>Describes the specified keywords or all keywords on your origination phone number or pool.</p> <p>A keyword is a word that you can search for on a particular phone number or pool. It is also a specific word or phrase that an end user can send to your number to elicit a response, such as an informational message or a special offer. When your number receives a message that begins with a keyword, Amazon Pinpoint responds with a customizable message.</p> <p>If you specify a keyword that isn't valid, an Error is returned.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeKeywordsRequest;
import org.openapis.openapi.models.operations.DescribeKeywordsResponse;
import org.openapis.openapi.models.operations.DescribeKeywordsXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeKeywordsRequest;
import org.openapis.openapi.models.shared.KeywordFilter;
import org.openapis.openapi.models.shared.KeywordFilterNameEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("in") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeKeywordsRequest req = new DescribeKeywordsRequest(                new DescribeKeywordsRequest("architecto") {{
                                filters = new org.openapis.openapi.models.shared.KeywordFilter[]{{
                                    add(new KeywordFilter(KeywordFilterNameEnum.KEYWORD_ACTION,                 new String[]{{
                                                        add("sed"),
                                                        add("saepe"),
                                                        add("pariatur"),
                                                        add("accusantium"),
                                                    }}) {{
                                        name = KeywordFilterNameEnum.KEYWORD_ACTION;
                                        values = new String[]{{
                                            add("ullam"),
                                            add("expedita"),
                                            add("nihil"),
                                            add("repellat"),
                                        }};
                                    }}),
                                }};
                                keywords = new String[]{{
                                    add("praesentium"),
                                }};
                                maxResults = 615560L;
                                nextToken = "magni";
                            }};, DescribeKeywordsXAmzTargetEnum.PINPOINT_SMS_VOICE_V2_DESCRIBE_KEYWORDS) {{
                maxResults = "sunt";
                nextToken = "quo";
                xAmzAlgorithm = "illum";
                xAmzContentSha256 = "pariatur";
                xAmzCredential = "maxime";
                xAmzDate = "ea";
                xAmzSecurityToken = "excepturi";
                xAmzSignature = "odit";
                xAmzSignedHeaders = "ea";
            }};            

            DescribeKeywordsResponse res = sdk.sdk.describeKeywords(req);

            if (res.describeKeywordsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeOptOutLists

<p>Describes the specified opt-out list or all opt-out lists in your account.</p> <p>If you specify opt-out list names, the output includes information for only the specified opt-out lists. Opt-out lists include only those that meet the filter criteria. If you don't specify opt-out list names or filters, the output includes information for all opt-out lists.</p> <p>If you specify an opt-out list name that isn't valid, an Error is returned.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeOptOutListsRequest;
import org.openapis.openapi.models.operations.DescribeOptOutListsResponse;
import org.openapis.openapi.models.operations.DescribeOptOutListsXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeOptOutListsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusantium") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeOptOutListsRequest req = new DescribeOptOutListsRequest(                new DescribeOptOutListsRequest() {{
                                maxResults = 69167L;
                                nextToken = "maiores";
                                optOutListNames = new String[]{{
                                    add("ipsam"),
                                    add("voluptate"),
                                    add("autem"),
                                }};
                            }};, DescribeOptOutListsXAmzTargetEnum.PINPOINT_SMS_VOICE_V2_DESCRIBE_OPT_OUT_LISTS) {{
                maxResults = "nam";
                nextToken = "eaque";
                xAmzAlgorithm = "pariatur";
                xAmzContentSha256 = "nemo";
                xAmzCredential = "voluptatibus";
                xAmzDate = "perferendis";
                xAmzSecurityToken = "fugiat";
                xAmzSignature = "amet";
                xAmzSignedHeaders = "aut";
            }};            

            DescribeOptOutListsResponse res = sdk.sdk.describeOptOutLists(req);

            if (res.describeOptOutListsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeOptedOutNumbers

<p>Describes the specified opted out destination numbers or all opted out destination numbers in an opt-out list.</p> <p>If you specify opted out numbers, the output includes information for only the specified opted out numbers. If you specify filters, the output includes information for only those opted out numbers that meet the filter criteria. If you don't specify opted out numbers or filters, the output includes information for all opted out destination numbers in your opt-out list.</p> <p>If you specify an opted out number that isn't valid, an Error is returned.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeOptedOutNumbersRequest;
import org.openapis.openapi.models.operations.DescribeOptedOutNumbersResponse;
import org.openapis.openapi.models.operations.DescribeOptedOutNumbersXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeOptedOutNumbersRequest;
import org.openapis.openapi.models.shared.OptedOutFilter;
import org.openapis.openapi.models.shared.OptedOutFilterNameEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cumque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeOptedOutNumbersRequest req = new DescribeOptedOutNumbersRequest(                new DescribeOptedOutNumbersRequest("corporis") {{
                                filters = new org.openapis.openapi.models.shared.OptedOutFilter[]{{
                                    add(new OptedOutFilter(OptedOutFilterNameEnum.END_USER_OPTED_OUT,                 new String[]{{
                                                        add("dignissimos"),
                                                        add("eaque"),
                                                        add("quis"),
                                                    }}) {{
                                        name = OptedOutFilterNameEnum.END_USER_OPTED_OUT;
                                        values = new String[]{{
                                            add("nobis"),
                                            add("dolores"),
                                            add("quis"),
                                        }};
                                    }}),
                                    add(new OptedOutFilter(OptedOutFilterNameEnum.END_USER_OPTED_OUT,                 new String[]{{
                                                        add("dolores"),
                                                    }}) {{
                                        name = OptedOutFilterNameEnum.END_USER_OPTED_OUT;
                                        values = new String[]{{
                                            add("eos"),
                                        }};
                                    }}),
                                    add(new OptedOutFilter(OptedOutFilterNameEnum.END_USER_OPTED_OUT,                 new String[]{{
                                                        add("recusandae"),
                                                        add("omnis"),
                                                        add("facilis"),
                                                        add("perspiciatis"),
                                                    }}) {{
                                        name = OptedOutFilterNameEnum.END_USER_OPTED_OUT;
                                        values = new String[]{{
                                            add("quam"),
                                            add("dolor"),
                                            add("vero"),
                                            add("nostrum"),
                                        }};
                                    }}),
                                    add(new OptedOutFilter(OptedOutFilterNameEnum.END_USER_OPTED_OUT,                 new String[]{{
                                                        add("blanditiis"),
                                                    }}) {{
                                        name = OptedOutFilterNameEnum.END_USER_OPTED_OUT;
                                        values = new String[]{{
                                            add("porro"),
                                        }};
                                    }}),
                                }};
                                maxResults = 621479L;
                                nextToken = "eaque";
                                optedOutNumbers = new String[]{{
                                    add("rerum"),
                                    add("adipisci"),
                                    add("asperiores"),
                                }};
                            }};, DescribeOptedOutNumbersXAmzTargetEnum.PINPOINT_SMS_VOICE_V2_DESCRIBE_OPTED_OUT_NUMBERS) {{
                maxResults = "earum";
                nextToken = "modi";
                xAmzAlgorithm = "iste";
                xAmzContentSha256 = "dolorum";
                xAmzCredential = "deleniti";
                xAmzDate = "pariatur";
                xAmzSecurityToken = "provident";
                xAmzSignature = "nobis";
                xAmzSignedHeaders = "libero";
            }};            

            DescribeOptedOutNumbersResponse res = sdk.sdk.describeOptedOutNumbers(req);

            if (res.describeOptedOutNumbersResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describePhoneNumbers

<p>Describes the specified origination phone number, or all the phone numbers in your account.</p> <p>If you specify phone number IDs, the output includes information for only the specified phone numbers. If you specify filters, the output includes information for only those phone numbers that meet the filter criteria. If you don't specify phone number IDs or filters, the output includes information for all phone numbers.</p> <p>If you specify a phone number ID that isn't valid, an Error is returned.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribePhoneNumbersRequest;
import org.openapis.openapi.models.operations.DescribePhoneNumbersResponse;
import org.openapis.openapi.models.operations.DescribePhoneNumbersXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribePhoneNumbersRequest;
import org.openapis.openapi.models.shared.PhoneNumberFilter;
import org.openapis.openapi.models.shared.PhoneNumberFilterNameEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("delectus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribePhoneNumbersRequest req = new DescribePhoneNumbersRequest(                new DescribePhoneNumbersRequest() {{
                                filters = new org.openapis.openapi.models.shared.PhoneNumberFilter[]{{
                                    add(new PhoneNumberFilter(PhoneNumberFilterNameEnum.MESSAGE_TYPE,                 new String[]{{
                                                        add("ipsum"),
                                                    }}) {{
                                        name = PhoneNumberFilterNameEnum.NUMBER_TYPE;
                                        values = new String[]{{
                                            add("dolorem"),
                                            add("dolorem"),
                                        }};
                                    }}),
                                    add(new PhoneNumberFilter(PhoneNumberFilterNameEnum.DELETION_PROTECTION_ENABLED,                 new String[]{{
                                                        add("dolorum"),
                                                    }}) {{
                                        name = PhoneNumberFilterNameEnum.DELETION_PROTECTION_ENABLED;
                                        values = new String[]{{
                                            add("cum"),
                                            add("voluptate"),
                                            add("dignissimos"),
                                        }};
                                    }}),
                                }};
                                maxResults = 254356L;
                                nextToken = "veritatis";
                                phoneNumberIds = new String[]{{
                                    add("ipsa"),
                                }};
                            }};, DescribePhoneNumbersXAmzTargetEnum.PINPOINT_SMS_VOICE_V2_DESCRIBE_PHONE_NUMBERS) {{
                maxResults = "iure";
                nextToken = "odio";
                xAmzAlgorithm = "quaerat";
                xAmzContentSha256 = "accusamus";
                xAmzCredential = "quidem";
                xAmzDate = "voluptatibus";
                xAmzSecurityToken = "voluptas";
                xAmzSignature = "natus";
                xAmzSignedHeaders = "eos";
            }};            

            DescribePhoneNumbersResponse res = sdk.sdk.describePhoneNumbers(req);

            if (res.describePhoneNumbersResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describePools

<p>Retrieves the specified pools or all pools associated with your Amazon Web Services account.</p> <p>If you specify pool IDs, the output includes information for only the specified pools. If you specify filters, the output includes information for only those pools that meet the filter criteria. If you don't specify pool IDs or filters, the output includes information for all pools.</p> <p>If you specify a pool ID that isn't valid, an Error is returned.</p> <p>A pool is a collection of phone numbers and SenderIds. A pool can include one or more phone numbers and SenderIds that are associated with your Amazon Web Services account.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribePoolsRequest;
import org.openapis.openapi.models.operations.DescribePoolsResponse;
import org.openapis.openapi.models.operations.DescribePoolsXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribePoolsRequest;
import org.openapis.openapi.models.shared.PoolFilter;
import org.openapis.openapi.models.shared.PoolFilterNameEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("atque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribePoolsRequest req = new DescribePoolsRequest(                new DescribePoolsRequest() {{
                                filters = new org.openapis.openapi.models.shared.PoolFilter[]{{
                                    add(new PoolFilter(PoolFilterNameEnum.OPT_OUT_LIST_NAME,                 new String[]{{
                                                        add("voluptate"),
                                                        add("dolorum"),
                                                    }}) {{
                                        name = PoolFilterNameEnum.SHARED_ROUTES_ENABLED;
                                        values = new String[]{{
                                            add("soluta"),
                                        }};
                                    }}),
                                }};
                                maxResults = 536579L;
                                nextToken = "omnis";
                                poolIds = new String[]{{
                                    add("distinctio"),
                                    add("asperiores"),
                                    add("nihil"),
                                    add("ipsum"),
                                }};
                            }};, DescribePoolsXAmzTargetEnum.PINPOINT_SMS_VOICE_V2_DESCRIBE_POOLS) {{
                maxResults = "voluptate";
                nextToken = "id";
                xAmzAlgorithm = "saepe";
                xAmzContentSha256 = "eius";
                xAmzCredential = "aspernatur";
                xAmzDate = "perferendis";
                xAmzSecurityToken = "amet";
                xAmzSignature = "optio";
                xAmzSignedHeaders = "accusamus";
            }};            

            DescribePoolsResponse res = sdk.sdk.describePools(req);

            if (res.describePoolsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeSenderIds

<p>Describes the specified SenderIds or all SenderIds associated with your Amazon Web Services account.</p> <p>If you specify SenderIds, the output includes information for only the specified SenderIds. If you specify filters, the output includes information for only those SenderIds that meet the filter criteria. If you don't specify SenderIds or filters, the output includes information for all SenderIds.</p> <p>f you specify a sender ID that isn't valid, an Error is returned.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeSenderIdsRequest;
import org.openapis.openapi.models.operations.DescribeSenderIdsResponse;
import org.openapis.openapi.models.operations.DescribeSenderIdsXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeSenderIdsRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SenderIdAndCountry;
import org.openapis.openapi.models.shared.SenderIdFilter;
import org.openapis.openapi.models.shared.SenderIdFilterNameEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ad") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeSenderIdsRequest req = new DescribeSenderIdsRequest(                new DescribeSenderIdsRequest() {{
                                filters = new org.openapis.openapi.models.shared.SenderIdFilter[]{{
                                    add(new SenderIdFilter(SenderIdFilterNameEnum.ISO_COUNTRY_CODE,                 new String[]{{
                                                        add("alias"),
                                                        add("at"),
                                                        add("quaerat"),
                                                    }}) {{
                                        name = SenderIdFilterNameEnum.ISO_COUNTRY_CODE;
                                        values = new String[]{{
                                            add("provident"),
                                            add("minima"),
                                            add("repellendus"),
                                        }};
                                    }}),
                                    add(new SenderIdFilter(SenderIdFilterNameEnum.SENDER_ID,                 new String[]{{
                                                        add("a"),
                                                        add("esse"),
                                                        add("harum"),
                                                    }}) {{
                                        name = SenderIdFilterNameEnum.SENDER_ID;
                                        values = new String[]{{
                                            add("quod"),
                                            add("officiis"),
                                        }};
                                    }}),
                                    add(new SenderIdFilter(SenderIdFilterNameEnum.MESSAGE_TYPE,                 new String[]{{
                                                        add("tempore"),
                                                    }}) {{
                                        name = SenderIdFilterNameEnum.ISO_COUNTRY_CODE;
                                        values = new String[]{{
                                            add("quisquam"),
                                        }};
                                    }}),
                                    add(new SenderIdFilter(SenderIdFilterNameEnum.MESSAGE_TYPE,                 new String[]{{
                                                        add("nihil"),
                                                        add("sit"),
                                                        add("expedita"),
                                                    }}) {{
                                        name = SenderIdFilterNameEnum.MESSAGE_TYPE;
                                        values = new String[]{{
                                            add("enim"),
                                            add("dolorem"),
                                        }};
                                    }}),
                                }};
                                maxResults = 207470L;
                                nextToken = "sed";
                                senderIds = new org.openapis.openapi.models.shared.SenderIdAndCountry[]{{
                                    add(new SenderIdAndCountry("deserunt", "quam") {{
                                        isoCountryCode = "libero";
                                        senderId = "voluptas";
                                    }}),
                                    add(new SenderIdAndCountry("qui", "cupiditate") {{
                                        isoCountryCode = "ipsum";
                                        senderId = "incidunt";
                                    }}),
                                }};
                            }};, DescribeSenderIdsXAmzTargetEnum.PINPOINT_SMS_VOICE_V2_DESCRIBE_SENDER_IDS) {{
                maxResults = "maxime";
                nextToken = "pariatur";
                xAmzAlgorithm = "soluta";
                xAmzContentSha256 = "dicta";
                xAmzCredential = "laborum";
                xAmzDate = "totam";
                xAmzSecurityToken = "incidunt";
                xAmzSignature = "aspernatur";
                xAmzSignedHeaders = "dolores";
            }};            

            DescribeSenderIdsResponse res = sdk.sdk.describeSenderIds(req);

            if (res.describeSenderIdsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeSpendLimits

<p>Describes the current Amazon Pinpoint monthly spend limits for sending voice and text messages.</p> <p>When you establish an Amazon Web Services account, the account has initial monthly spend limit in a given Region. For more information on increasing your monthly spend limit, see <a href="https://docs.aws.amazon.com/pinpoint/latest/userguide/channels-sms-awssupport-spend-threshold.html"> Requesting increases to your monthly SMS spending quota for Amazon Pinpoint </a> in the <i>Amazon Pinpoint User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeSpendLimitsRequest;
import org.openapis.openapi.models.operations.DescribeSpendLimitsResponse;
import org.openapis.openapi.models.operations.DescribeSpendLimitsXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeSpendLimitsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("distinctio") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeSpendLimitsRequest req = new DescribeSpendLimitsRequest(                new DescribeSpendLimitsRequest() {{
                                maxResults = 704474L;
                                nextToken = "aliquid";
                            }};, DescribeSpendLimitsXAmzTargetEnum.PINPOINT_SMS_VOICE_V2_DESCRIBE_SPEND_LIMITS) {{
                maxResults = "quam";
                nextToken = "molestias";
                xAmzAlgorithm = "temporibus";
                xAmzContentSha256 = "qui";
                xAmzCredential = "neque";
                xAmzDate = "fugit";
                xAmzSecurityToken = "magni";
                xAmzSignature = "odio";
                xAmzSignedHeaders = "sunt";
            }};            

            DescribeSpendLimitsResponse res = sdk.sdk.describeSpendLimits(req);

            if (res.describeSpendLimitsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## disassociateOriginationIdentity

<p>Removes the specified origination identity from an existing pool.</p> <p>If the origination identity isn't associated with the specified pool, an Error is returned.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisassociateOriginationIdentityRequest;
import org.openapis.openapi.models.operations.DisassociateOriginationIdentityResponse;
import org.openapis.openapi.models.operations.DisassociateOriginationIdentityXAmzTargetEnum;
import org.openapis.openapi.models.shared.DisassociateOriginationIdentityRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ullam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DisassociateOriginationIdentityRequest req = new DisassociateOriginationIdentityRequest(                new DisassociateOriginationIdentityRequest("nam", "hic", "voluptatem") {{
                                clientToken = "cumque";
                            }};, DisassociateOriginationIdentityXAmzTargetEnum.PINPOINT_SMS_VOICE_V2_DISASSOCIATE_ORIGINATION_IDENTITY) {{
                xAmzAlgorithm = "soluta";
                xAmzContentSha256 = "nobis";
                xAmzCredential = "et";
                xAmzDate = "saepe";
                xAmzSecurityToken = "ipsum";
                xAmzSignature = "veritatis";
                xAmzSignedHeaders = "nobis";
            }};            

            DisassociateOriginationIdentityResponse res = sdk.sdk.disassociateOriginationIdentity(req);

            if (res.disassociateOriginationIdentityResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listPoolOriginationIdentities

<p>Lists all associated origination identities in your pool.</p> <p>If you specify filters, the output includes information for only those origination identities that meet the filter criteria.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListPoolOriginationIdentitiesRequest;
import org.openapis.openapi.models.operations.ListPoolOriginationIdentitiesResponse;
import org.openapis.openapi.models.operations.ListPoolOriginationIdentitiesXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListPoolOriginationIdentitiesRequest;
import org.openapis.openapi.models.shared.PoolOriginationIdentitiesFilter;
import org.openapis.openapi.models.shared.PoolOriginationIdentitiesFilterNameEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quos") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListPoolOriginationIdentitiesRequest req = new ListPoolOriginationIdentitiesRequest(                new ListPoolOriginationIdentitiesRequest("tempore") {{
                                filters = new org.openapis.openapi.models.shared.PoolOriginationIdentitiesFilter[]{{
                                    add(new PoolOriginationIdentitiesFilter(PoolOriginationIdentitiesFilterNameEnum.NUMBER_CAPABILITY,                 new String[]{{
                                                        add("quae"),
                                                    }}) {{
                                        name = PoolOriginationIdentitiesFilterNameEnum.ISO_COUNTRY_CODE;
                                        values = new String[]{{
                                            add("dolorem"),
                                            add("dolore"),
                                            add("labore"),
                                            add("adipisci"),
                                        }};
                                    }}),
                                    add(new PoolOriginationIdentitiesFilter(PoolOriginationIdentitiesFilterNameEnum.NUMBER_CAPABILITY,                 new String[]{{
                                                        add("doloribus"),
                                                        add("ut"),
                                                        add("facilis"),
                                                        add("cupiditate"),
                                                    }}) {{
                                        name = PoolOriginationIdentitiesFilterNameEnum.ISO_COUNTRY_CODE;
                                        values = new String[]{{
                                            add("itaque"),
                                            add("consequatur"),
                                            add("est"),
                                        }};
                                    }}),
                                    add(new PoolOriginationIdentitiesFilter(PoolOriginationIdentitiesFilterNameEnum.ISO_COUNTRY_CODE,                 new String[]{{
                                                        add("voluptatibus"),
                                                        add("quisquam"),
                                                        add("vero"),
                                                    }}) {{
                                        name = PoolOriginationIdentitiesFilterNameEnum.ISO_COUNTRY_CODE;
                                        values = new String[]{{
                                            add("laudantium"),
                                        }};
                                    }}),
                                }};
                                maxResults = 606476L;
                                nextToken = "quis";
                            }};, ListPoolOriginationIdentitiesXAmzTargetEnum.PINPOINT_SMS_VOICE_V2_LIST_POOL_ORIGINATION_IDENTITIES) {{
                maxResults = "ipsum";
                nextToken = "delectus";
                xAmzAlgorithm = "voluptate";
                xAmzContentSha256 = "consectetur";
                xAmzCredential = "vero";
                xAmzDate = "tenetur";
                xAmzSecurityToken = "dignissimos";
                xAmzSignature = "hic";
                xAmzSignedHeaders = "distinctio";
            }};            

            ListPoolOriginationIdentitiesResponse res = sdk.sdk.listPoolOriginationIdentities(req);

            if (res.listPoolOriginationIdentitiesResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTagsForResource

List all tags associated with a resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTagsForResourceRequest;
import org.openapis.openapi.models.operations.ListTagsForResourceResponse;
import org.openapis.openapi.models.operations.ListTagsForResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListTagsForResourceRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quod") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTagsForResourceRequest req = new ListTagsForResourceRequest(                new ListTagsForResourceRequest("odio");, ListTagsForResourceXAmzTargetEnum.PINPOINT_SMS_VOICE_V2_LIST_TAGS_FOR_RESOURCE) {{
                xAmzAlgorithm = "similique";
                xAmzContentSha256 = "facilis";
                xAmzCredential = "vero";
                xAmzDate = "ducimus";
                xAmzSecurityToken = "dolore";
                xAmzSignature = "quibusdam";
                xAmzSignedHeaders = "illum";
            }};            

            ListTagsForResourceResponse res = sdk.sdk.listTagsForResource(req);

            if (res.listTagsForResourceResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putKeyword

<p>Creates or updates a keyword configuration on an origination phone number or pool.</p> <p> A keyword is a word that you can search for on a particular phone number or pool. It is also a specific word or phrase that an end user can send to your number to elicit a response, such as an informational message or a special offer. When your number receives a message that begins with a keyword, Amazon Pinpoint responds with a customizable message.</p> <p>If you specify a keyword that isn't valid, an Error is returned.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutKeywordRequest;
import org.openapis.openapi.models.operations.PutKeywordResponse;
import org.openapis.openapi.models.operations.PutKeywordXAmzTargetEnum;
import org.openapis.openapi.models.shared.KeywordActionEnum;
import org.openapis.openapi.models.shared.PutKeywordRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sequi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutKeywordRequest req = new PutKeywordRequest(                new PutKeywordRequest("natus", "impedit", "aut") {{
                                keywordAction = KeywordActionEnum.OPT_IN;
                            }};, PutKeywordXAmzTargetEnum.PINPOINT_SMS_VOICE_V2_PUT_KEYWORD) {{
                xAmzAlgorithm = "exercitationem";
                xAmzContentSha256 = "nulla";
                xAmzCredential = "fugit";
                xAmzDate = "porro";
                xAmzSecurityToken = "maiores";
                xAmzSignature = "doloribus";
                xAmzSignedHeaders = "iusto";
            }};            

            PutKeywordResponse res = sdk.sdk.putKeyword(req);

            if (res.putKeywordResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putOptedOutNumber

<p>Creates an opted out destination phone number in the opt-out list.</p> <p>If the destination phone number isn't valid or if the specified opt-out list doesn't exist, an Error is returned.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutOptedOutNumberRequest;
import org.openapis.openapi.models.operations.PutOptedOutNumberResponse;
import org.openapis.openapi.models.operations.PutOptedOutNumberXAmzTargetEnum;
import org.openapis.openapi.models.shared.PutOptedOutNumberRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eligendi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutOptedOutNumberRequest req = new PutOptedOutNumberRequest(                new PutOptedOutNumberRequest("ducimus", "alias");, PutOptedOutNumberXAmzTargetEnum.PINPOINT_SMS_VOICE_V2_PUT_OPTED_OUT_NUMBER) {{
                xAmzAlgorithm = "officia";
                xAmzContentSha256 = "tempora";
                xAmzCredential = "ipsam";
                xAmzDate = "ea";
                xAmzSecurityToken = "aspernatur";
                xAmzSignature = "vel";
                xAmzSignedHeaders = "possimus";
            }};            

            PutOptedOutNumberResponse res = sdk.sdk.putOptedOutNumber(req);

            if (res.putOptedOutNumberResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## releasePhoneNumber

<p>Releases an existing origination phone number in your account. Once released, a phone number is no longer available for sending messages.</p> <p>If the origination phone number has deletion protection enabled or is associated with a pool, an Error is returned.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReleasePhoneNumberRequest;
import org.openapis.openapi.models.operations.ReleasePhoneNumberResponse;
import org.openapis.openapi.models.operations.ReleasePhoneNumberXAmzTargetEnum;
import org.openapis.openapi.models.shared.ReleasePhoneNumberRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("magnam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ReleasePhoneNumberRequest req = new ReleasePhoneNumberRequest(                new ReleasePhoneNumberRequest("ratione");, ReleasePhoneNumberXAmzTargetEnum.PINPOINT_SMS_VOICE_V2_RELEASE_PHONE_NUMBER) {{
                xAmzAlgorithm = "ex";
                xAmzContentSha256 = "laudantium";
                xAmzCredential = "dicta";
                xAmzDate = "dolor";
                xAmzSecurityToken = "maiores";
                xAmzSignature = "quasi";
                xAmzSignedHeaders = "ex";
            }};            

            ReleasePhoneNumberResponse res = sdk.sdk.releasePhoneNumber(req);

            if (res.releasePhoneNumberResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## requestPhoneNumber

Request an origination phone number for use in your account. For more information on phone number request see <a href="https://docs.aws.amazon.com/pinpoint/latest/userguide/settings-sms-request-number.html"> Requesting a number </a> in the <i>Amazon Pinpoint User Guide</i>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RequestPhoneNumberRequest;
import org.openapis.openapi.models.operations.RequestPhoneNumberResponse;
import org.openapis.openapi.models.operations.RequestPhoneNumberXAmzTargetEnum;
import org.openapis.openapi.models.shared.MessageTypeEnum;
import org.openapis.openapi.models.shared.NumberCapabilityEnum;
import org.openapis.openapi.models.shared.RequestPhoneNumberRequest;
import org.openapis.openapi.models.shared.RequestableNumberTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nulla") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            RequestPhoneNumberRequest req = new RequestPhoneNumberRequest(                new RequestPhoneNumberRequest("excepturi", MessageTypeEnum.PROMOTIONAL,                 new org.openapis.openapi.models.shared.NumberCapabilityEnum[]{{
                                                add(NumberCapabilityEnum.VOICE),
                                                add(NumberCapabilityEnum.VOICE),
                                            }}, RequestableNumberTypeEnum.TEN_DLC) {{
                                clientToken = "ea";
                                deletionProtectionEnabled = false;
                                optOutListName = "impedit";
                                poolId = "corporis";
                                registrationId = "veniam";
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("ea", "quo") {{
                                        key = "inventore";
                                        value = "magnam";
                                    }}),
                                    add(new Tag("aspernatur", "minima") {{
                                        key = "consectetur";
                                        value = "recusandae";
                                    }}),
                                }};
                            }};, RequestPhoneNumberXAmzTargetEnum.PINPOINT_SMS_VOICE_V2_REQUEST_PHONE_NUMBER) {{
                xAmzAlgorithm = "eaque";
                xAmzContentSha256 = "a";
                xAmzCredential = "libero";
                xAmzDate = "aut";
                xAmzSecurityToken = "aut";
                xAmzSignature = "deleniti";
                xAmzSignedHeaders = "impedit";
            }};            

            RequestPhoneNumberResponse res = sdk.sdk.requestPhoneNumber(req);

            if (res.requestPhoneNumberResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## sendTextMessage

<p>Creates a new text message and sends it to a recipient's phone number.</p> <p>SMS throughput limits are measured in Message Parts per Second (MPS). Your MPS limit depends on the destination country of your messages, as well as the type of phone number (origination number) that you use to send the message. For more information, see <a href="https://docs.aws.amazon.com/pinpoint/latest/userguide/channels-sms-limitations-mps.html">Message Parts per Second (MPS) limits</a> in the <i>Amazon Pinpoint User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SendTextMessageRequest;
import org.openapis.openapi.models.operations.SendTextMessageResponse;
import org.openapis.openapi.models.operations.SendTextMessageXAmzTargetEnum;
import org.openapis.openapi.models.shared.MessageTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SendTextMessageRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aliquam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            SendTextMessageRequest req = new SendTextMessageRequest(                new SendTextMessageRequest("fugit") {{
                                configurationSetName = "accusamus";
                                context = new java.util.HashMap<String, String>() {{
                                    put("non", "et");
                                }};
                                destinationCountryParameters = new java.util.HashMap<String, String>() {{
                                    put("laborum", "placeat");
                                    put("velit", "eum");
                                    put("autem", "nobis");
                                }};
                                dryRun = false;
                                keyword = "quas";
                                maxPrice = "assumenda";
                                messageBody = "nulla";
                                messageType = MessageTypeEnum.TRANSACTIONAL;
                                originationIdentity = "libero";
                                timeToLive = 96549L;
                            }};, SendTextMessageXAmzTargetEnum.PINPOINT_SMS_VOICE_V2_SEND_TEXT_MESSAGE) {{
                xAmzAlgorithm = "tempora";
                xAmzContentSha256 = "numquam";
                xAmzCredential = "explicabo";
                xAmzDate = "provident";
                xAmzSecurityToken = "ipsa";
                xAmzSignature = "molestiae";
                xAmzSignedHeaders = "magnam";
            }};            

            SendTextMessageResponse res = sdk.sdk.sendTextMessage(req);

            if (res.sendTextMessageResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## sendVoiceMessage

Allows you to send a request that sends a text message through Amazon Pinpoint. This operation uses <a href="http://aws.amazon.com/polly/">Amazon Polly</a> to convert a text script into a voice message.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SendVoiceMessageRequest;
import org.openapis.openapi.models.operations.SendVoiceMessageResponse;
import org.openapis.openapi.models.operations.SendVoiceMessageXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SendVoiceMessageRequest;
import org.openapis.openapi.models.shared.VoiceIdEnum;
import org.openapis.openapi.models.shared.VoiceMessageBodyTextTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("odio") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            SendVoiceMessageRequest req = new SendVoiceMessageRequest(                new SendVoiceMessageRequest("eius", "esse") {{
                                configurationSetName = "esse";
                                context = new java.util.HashMap<String, String>() {{
                                    put("fuga", "reprehenderit");
                                    put("quidem", "fugiat");
                                    put("ut", "eum");
                                }};
                                dryRun = false;
                                maxPricePerMinute = "suscipit";
                                messageBody = "assumenda";
                                messageBodyTextType = VoiceMessageBodyTextTypeEnum.TEXT;
                                timeToLive = 509342L;
                                voiceId = VoiceIdEnum.PENELOPE;
                            }};, SendVoiceMessageXAmzTargetEnum.PINPOINT_SMS_VOICE_V2_SEND_VOICE_MESSAGE) {{
                xAmzAlgorithm = "veritatis";
                xAmzContentSha256 = "ipsa";
                xAmzCredential = "id";
                xAmzDate = "quidem";
                xAmzSecurityToken = "neque";
                xAmzSignature = "quo";
                xAmzSignedHeaders = "illum";
            }};            

            SendVoiceMessageResponse res = sdk.sdk.sendVoiceMessage(req);

            if (res.sendVoiceMessageResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## setDefaultMessageType

<p>Sets the default message type on a configuration set.</p> <p>Choose the category of SMS messages that you plan to send from this account. If you send account-related messages or time-sensitive messages such as one-time passcodes, choose <b>Transactional</b>. If you plan to send messages that contain marketing material or other promotional content, choose <b>Promotional</b>. This setting applies to your entire Amazon Web Services account.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SetDefaultMessageTypeRequest;
import org.openapis.openapi.models.operations.SetDefaultMessageTypeResponse;
import org.openapis.openapi.models.operations.SetDefaultMessageTypeXAmzTargetEnum;
import org.openapis.openapi.models.shared.MessageTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SetDefaultMessageTypeRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            SetDefaultMessageTypeRequest req = new SetDefaultMessageTypeRequest(                new SetDefaultMessageTypeRequest("fuga", MessageTypeEnum.TRANSACTIONAL);, SetDefaultMessageTypeXAmzTargetEnum.PINPOINT_SMS_VOICE_V2_SET_DEFAULT_MESSAGE_TYPE) {{
                xAmzAlgorithm = "eos";
                xAmzContentSha256 = "voluptas";
                xAmzCredential = "ab";
                xAmzDate = "cupiditate";
                xAmzSecurityToken = "consequatur";
                xAmzSignature = "tempora";
                xAmzSignedHeaders = "debitis";
            }};            

            SetDefaultMessageTypeResponse res = sdk.sdk.setDefaultMessageType(req);

            if (res.setDefaultMessageTypeResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## setDefaultSenderId

<p>Sets default sender ID on a configuration set.</p> <p>When sending a text message to a destination country that supports sender IDs, the default sender ID on the configuration set specified will be used if no dedicated origination phone numbers or registered sender IDs are available in your account.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SetDefaultSenderIdRequest;
import org.openapis.openapi.models.operations.SetDefaultSenderIdResponse;
import org.openapis.openapi.models.operations.SetDefaultSenderIdXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SetDefaultSenderIdRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            SetDefaultSenderIdRequest req = new SetDefaultSenderIdRequest(                new SetDefaultSenderIdRequest("aspernatur", "sequi");, SetDefaultSenderIdXAmzTargetEnum.PINPOINT_SMS_VOICE_V2_SET_DEFAULT_SENDER_ID) {{
                xAmzAlgorithm = "quo";
                xAmzContentSha256 = "esse";
                xAmzCredential = "recusandae";
                xAmzDate = "aperiam";
                xAmzSecurityToken = "distinctio";
                xAmzSignature = "quod";
                xAmzSignedHeaders = "dignissimos";
            }};            

            SetDefaultSenderIdResponse res = sdk.sdk.setDefaultSenderId(req);

            if (res.setDefaultSenderIdResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## setTextMessageSpendLimitOverride

Sets an account level monthly spend limit override for sending text messages. The requested spend limit must be less than or equal to the <code>MaxLimit</code>, which is set by Amazon Web Services. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SetTextMessageSpendLimitOverrideRequest;
import org.openapis.openapi.models.operations.SetTextMessageSpendLimitOverrideResponse;
import org.openapis.openapi.models.operations.SetTextMessageSpendLimitOverrideXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SetTextMessageSpendLimitOverrideRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("inventore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            SetTextMessageSpendLimitOverrideRequest req = new SetTextMessageSpendLimitOverrideRequest(                new SetTextMessageSpendLimitOverrideRequest(469498L);, SetTextMessageSpendLimitOverrideXAmzTargetEnum.PINPOINT_SMS_VOICE_V2_SET_TEXT_MESSAGE_SPEND_LIMIT_OVERRIDE) {{
                xAmzAlgorithm = "totam";
                xAmzContentSha256 = "accusamus";
                xAmzCredential = "aliquam";
                xAmzDate = "odio";
                xAmzSecurityToken = "occaecati";
                xAmzSignature = "commodi";
                xAmzSignedHeaders = "sapiente";
            }};            

            SetTextMessageSpendLimitOverrideResponse res = sdk.sdk.setTextMessageSpendLimitOverride(req);

            if (res.setTextMessageSpendLimitOverrideResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## setVoiceMessageSpendLimitOverride

Sets an account level monthly spend limit override for sending voice messages. The requested spend limit must be less than or equal to the <code>MaxLimit</code>, which is set by Amazon Web Services. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SetVoiceMessageSpendLimitOverrideRequest;
import org.openapis.openapi.models.operations.SetVoiceMessageSpendLimitOverrideResponse;
import org.openapis.openapi.models.operations.SetVoiceMessageSpendLimitOverrideXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SetVoiceMessageSpendLimitOverrideRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            SetVoiceMessageSpendLimitOverrideRequest req = new SetVoiceMessageSpendLimitOverrideRequest(                new SetVoiceMessageSpendLimitOverrideRequest(645570L);, SetVoiceMessageSpendLimitOverrideXAmzTargetEnum.PINPOINT_SMS_VOICE_V2_SET_VOICE_MESSAGE_SPEND_LIMIT_OVERRIDE) {{
                xAmzAlgorithm = "molestiae";
                xAmzContentSha256 = "accusantium";
                xAmzCredential = "porro";
                xAmzDate = "eum";
                xAmzSecurityToken = "quas";
                xAmzSignature = "praesentium";
                xAmzSignedHeaders = "consequuntur";
            }};            

            SetVoiceMessageSpendLimitOverrideResponse res = sdk.sdk.setVoiceMessageSpendLimitOverride(req);

            if (res.setVoiceMessageSpendLimitOverrideResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagResource

Adds or overwrites only the specified tags for the specified Amazon Pinpoint SMS Voice, version 2 resource. When you specify an existing tag key, the value is overwritten with the new value. Each resource can have a maximum of 50 tags. Each tag consists of a key and an optional value. Tag keys must be unique per resource. For more information about tags, see <a href="https://docs.aws.amazon.com/pinpoint/latest/developerguide/tagging-resources.html"> Tagging Amazon Pinpoint resources</a> in the <i>Amazon Pinpoint Developer Guide</i>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagResourceRequest;
import org.openapis.openapi.models.operations.TagResourceResponse;
import org.openapis.openapi.models.operations.TagResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.TagResourceRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deleniti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagResourceRequest req = new TagResourceRequest(                new TagResourceRequest("fugit",                 new org.openapis.openapi.models.shared.Tag[]{{
                                                add(new Tag("atque", "explicabo") {{
                                                    key = "mollitia";
                                                    value = "incidunt";
                                                }}),
                                                add(new Tag("fugit", "sapiente") {{
                                                    key = "minima";
                                                    value = "nisi";
                                                }}),
                                                add(new Tag("explicabo", "saepe") {{
                                                    key = "consequuntur";
                                                    value = "ratione";
                                                }}),
                                            }});, TagResourceXAmzTargetEnum.PINPOINT_SMS_VOICE_V2_TAG_RESOURCE) {{
                xAmzAlgorithm = "occaecati";
                xAmzContentSha256 = "atque";
                xAmzCredential = "et";
                xAmzDate = "esse";
                xAmzSecurityToken = "eveniet";
                xAmzSignature = "accusamus";
                xAmzSignedHeaders = "veritatis";
            }};            

            TagResourceResponse res = sdk.sdk.tagResource(req);

            if (res.tagResourceResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## untagResource

Removes the association of the specified tags from an Amazon Pinpoint SMS Voice V2 resource. For more information on tags see <a href="https://docs.aws.amazon.com/pinpoint/latest/developerguide/tagging-resources.html"> Tagging Amazon Pinpoint resources</a> in the <i>Amazon Pinpoint Developer Guide</i>. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UntagResourceRequest;
import org.openapis.openapi.models.operations.UntagResourceResponse;
import org.openapis.openapi.models.operations.UntagResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UntagResourceRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("esse") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UntagResourceRequest req = new UntagResourceRequest(                new UntagResourceRequest("quod",                 new String[]{{
                                                add("vero"),
                                                add("aliquid"),
                                                add("quasi"),
                                            }});, UntagResourceXAmzTargetEnum.PINPOINT_SMS_VOICE_V2_UNTAG_RESOURCE) {{
                xAmzAlgorithm = "saepe";
                xAmzContentSha256 = "vel";
                xAmzCredential = "harum";
                xAmzDate = "molestiae";
                xAmzSecurityToken = "rerum";
                xAmzSignature = "occaecati";
                xAmzSignedHeaders = "minima";
            }};            

            UntagResourceResponse res = sdk.sdk.untagResource(req);

            if (res.untagResourceResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateEventDestination

<p>Updates an existing event destination in a configuration set. You can update the IAM role ARN for CloudWatch Logs and Kinesis Data Firehose. You can also enable or disable the event destination.</p> <p>You may want to update an event destination to change its matching event types or updating the destination resource ARN. You can't change an event destination's type between CloudWatch Logs, Kinesis Data Firehose, and Amazon SNS.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateEventDestinationRequest;
import org.openapis.openapi.models.operations.UpdateEventDestinationResponse;
import org.openapis.openapi.models.operations.UpdateEventDestinationXAmzTargetEnum;
import org.openapis.openapi.models.shared.CloudWatchLogsDestination;
import org.openapis.openapi.models.shared.EventTypeEnum;
import org.openapis.openapi.models.shared.KinesisFirehoseDestination;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SnsDestination;
import org.openapis.openapi.models.shared.UpdateEventDestinationRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("distinctio") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateEventDestinationRequest req = new UpdateEventDestinationRequest(                new UpdateEventDestinationRequest("eligendi", "sit") {{
                                cloudWatchLogsDestination = new CloudWatchLogsDestination("culpa", "tempore");;
                                enabled = false;
                                kinesisFirehoseDestination = new KinesisFirehoseDestination("adipisci", "cumque");;
                                matchingEventTypes = new org.openapis.openapi.models.shared.EventTypeEnum[]{{
                                    add(EventTypeEnum.ALL),
                                }};
                                snsDestination = new SnsDestination("minus");;
                            }};, UpdateEventDestinationXAmzTargetEnum.PINPOINT_SMS_VOICE_V2_UPDATE_EVENT_DESTINATION) {{
                xAmzAlgorithm = "quaerat";
                xAmzContentSha256 = "sapiente";
                xAmzCredential = "consectetur";
                xAmzDate = "esse";
                xAmzSecurityToken = "blanditiis";
                xAmzSignature = "provident";
                xAmzSignedHeaders = "a";
            }};            

            UpdateEventDestinationResponse res = sdk.sdk.updateEventDestination(req);

            if (res.updateEventDestinationResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updatePhoneNumber

<p>Updates the configuration of an existing origination phone number. You can update the opt-out list, enable or disable two-way messaging, change the TwoWayChannelArn, enable or disable self-managed opt-outs, and enable or disable deletion protection.</p> <p>If the origination phone number is associated with a pool, an Error is returned.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdatePhoneNumberRequest;
import org.openapis.openapi.models.operations.UpdatePhoneNumberResponse;
import org.openapis.openapi.models.operations.UpdatePhoneNumberXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdatePhoneNumberRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nulla") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdatePhoneNumberRequest req = new UpdatePhoneNumberRequest(                new UpdatePhoneNumberRequest("quas") {{
                                deletionProtectionEnabled = false;
                                optOutListName = "esse";
                                selfManagedOptOutsEnabled = false;
                                twoWayChannelArn = "quasi";
                                twoWayEnabled = false;
                            }};, UpdatePhoneNumberXAmzTargetEnum.PINPOINT_SMS_VOICE_V2_UPDATE_PHONE_NUMBER) {{
                xAmzAlgorithm = "a";
                xAmzContentSha256 = "error";
                xAmzCredential = "sint";
                xAmzDate = "pariatur";
                xAmzSecurityToken = "possimus";
                xAmzSignature = "quia";
                xAmzSignedHeaders = "eveniet";
            }};            

            UpdatePhoneNumberResponse res = sdk.sdk.updatePhoneNumber(req);

            if (res.updatePhoneNumberResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updatePool

Updates the configuration of an existing pool. You can update the opt-out list, enable or disable two-way messaging, change the <code>TwoWayChannelArn</code>, enable or disable self-managed opt-outs, enable or disable deletion protection, and enable or disable shared routes.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdatePoolRequest;
import org.openapis.openapi.models.operations.UpdatePoolResponse;
import org.openapis.openapi.models.operations.UpdatePoolXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdatePoolRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("asperiores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdatePoolRequest req = new UpdatePoolRequest(                new UpdatePoolRequest("facere") {{
                                deletionProtectionEnabled = false;
                                optOutListName = "veritatis";
                                selfManagedOptOutsEnabled = false;
                                sharedRoutesEnabled = false;
                                twoWayChannelArn = "consequuntur";
                                twoWayEnabled = false;
                            }};, UpdatePoolXAmzTargetEnum.PINPOINT_SMS_VOICE_V2_UPDATE_POOL) {{
                xAmzAlgorithm = "quasi";
                xAmzContentSha256 = "similique";
                xAmzCredential = "culpa";
                xAmzDate = "aliquid";
                xAmzSecurityToken = "tenetur";
                xAmzSignature = "quae";
                xAmzSignedHeaders = "earum";
            }};            

            UpdatePoolResponse res = sdk.sdk.updatePool(req);

            if (res.updatePoolResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
