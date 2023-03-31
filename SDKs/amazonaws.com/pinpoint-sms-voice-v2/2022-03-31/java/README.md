# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AssociateOriginationIdentityXAmzTargetEnum;
import org.openapis.openapi.models.operations.AssociateOriginationIdentityHeaders;
import org.openapis.openapi.models.operations.AssociateOriginationIdentityRequest;
import org.openapis.openapi.models.operations.AssociateOriginationIdentityResponse;
import org.openapis.openapi.models.shared.AssociateOriginationIdentityRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = new SchemeHmac() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            AssociateOriginationIdentityRequest req = new AssociateOriginationIdentityRequest() {{
                headers = new AssociateOriginationIdentityHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                    xAmzTarget = "PinpointSMSVoiceV2.AssociateOriginationIdentity";
                }};
                request = new AssociateOriginationIdentityRequest() {{
                    clientToken = "illum";
                    isoCountryCode = "vel";
                    originationIdentity = "error";
                    poolId = "deserunt";
                }};
            }};            

            AssociateOriginationIdentityResponse res = sdk.associateOriginationIdentity(req);

            if (res.associateOriginationIdentityResult.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `associateOriginationIdentity` - <p>Associates the specified origination identity with a pool.</p> <p>If the origination identity is a phone number and is already associated with another pool, an Error is returned. A sender ID can be associated with multiple pools.</p> <p>If the origination identity configuration doesn't match the pool's configuration, an Error is returned.</p>
* `createConfigurationSet` - <p>Creates a new configuration set. After you create the configuration set, you can add one or more event destinations to it.</p> <p>A configuration set is a set of rules that you apply to the SMS and voice messages that you send.</p> <p>When you send a message, you can optionally specify a single configuration set.</p>
* `createEventDestination` - <p>Creates a new event destination in a configuration set.</p> <p>An event destination is a location where you send message events. The event options are Amazon CloudWatch, Amazon Kinesis Data Firehose, or Amazon SNS. For example, when a message is delivered successfully, you can send information about that event to an event destination, or send notifications to endpoints that are subscribed to an Amazon SNS topic.</p> <p>Each configuration set can contain between 0 and 5 event destinations. Each event destination can contain a reference to a single destination, such as a CloudWatch or Kinesis Data Firehose destination.</p>
* `createOptOutList` - <p>Creates a new opt-out list.</p> <p>If the opt-out list name already exists, an Error is returned.</p> <p>An opt-out list is a list of phone numbers that are opted out, meaning you can't send SMS or voice messages to them. If end user replies with the keyword "STOP," an entry for the phone number is added to the opt-out list. In addition to STOP, your recipients can use any supported opt-out keyword, such as CANCEL or OPTOUT. For a list of supported opt-out keywords, see <a href="https://docs.aws.amazon.com/pinpoint/latest/userguide/channels-sms-manage.html#channels-sms-manage-optout"> SMS opt out </a> in the <i>Amazon Pinpoint User Guide</i>.</p>
* `createPool` - <p>Creates a new pool and associates the specified origination identity to the pool. A pool can include one or more phone numbers and SenderIds that are associated with your Amazon Web Services account.</p> <p>The new pool inherits its configuration from the specified origination identity. This includes keywords, message type, opt-out list, two-way configuration, and self-managed opt-out configuration. Deletion protection isn't inherited from the origination identity and defaults to false.</p> <p>If the origination identity is a phone number and is already associated with another pool, an Error is returned. A sender ID can be associated with multiple pools.</p>
* `deleteConfigurationSet` - <p>Deletes an existing configuration set.</p> <p>A configuration set is a set of rules that you apply to voice and SMS messages that you send. In a configuration set, you can specify a destination for specific types of events related to voice and SMS messages. </p>
* `deleteDefaultMessageType` - <p>Deletes an existing default message type on a configuration set.</p> <p> A message type is a type of messages that you plan to send. If you send account-related messages or time-sensitive messages such as one-time passcodes, choose <b>Transactional</b>. If you plan to send messages that contain marketing material or other promotional content, choose <b>Promotional</b>. This setting applies to your entire Amazon Web Services account. </p>
* `deleteDefaultSenderId` - <p>Deletes an existing default sender ID on a configuration set.</p> <p>A default sender ID is the identity that appears on recipients' devices when they receive SMS messages. Support for sender ID capabilities varies by country or region.</p>
* `deleteEventDestination` - <p>Deletes an existing event destination.</p> <p>An event destination is a location where you send response information about the messages that you send. For example, when a message is delivered successfully, you can send information about that event to an Amazon CloudWatch destination, or send notifications to endpoints that are subscribed to an Amazon SNS topic.</p>
* `deleteKeyword` - <p>Deletes an existing keyword from an origination phone number or pool.</p> <p>A keyword is a word that you can search for on a particular phone number or pool. It is also a specific word or phrase that an end user can send to your number to elicit a response, such as an informational message or a special offer. When your number receives a message that begins with a keyword, Amazon Pinpoint responds with a customizable message.</p> <p>Keywords "HELP" and "STOP" can't be deleted or modified.</p>
* `deleteOptOutList` - <p>Deletes an existing opt-out list. All opted out phone numbers in the opt-out list are deleted.</p> <p>If the specified opt-out list name doesn't exist or is in-use by an origination phone number or pool, an Error is returned.</p>
* `deleteOptedOutNumber` - <p>Deletes an existing opted out destination phone number from the specified opt-out list.</p> <p>Each destination phone number can only be deleted once every 30 days.</p> <p>If the specified destination phone number doesn't exist or if the opt-out list doesn't exist, an Error is returned.</p>
* `deletePool` - <p>Deletes an existing pool. Deleting a pool disassociates all origination identities from that pool.</p> <p>If the pool status isn't active or if deletion protection is enabled, an Error is returned.</p> <p>A pool is a collection of phone numbers and SenderIds. A pool can include one or more phone numbers and SenderIds that are associated with your Amazon Web Services account.</p>
* `deleteTextMessageSpendLimitOverride` - Deletes an account-level monthly spending limit override for sending text messages. Deleting a spend limit override will set the <code>EnforcedLimit</code> to equal the <code>MaxLimit</code>, which is controlled by Amazon Web Services. For more information on spend limits (quotas) see <a href="https://docs.aws.amazon.com/pinpoint/latest/developerguide/quotas.html">Amazon Pinpoint quotas </a> in the <i>Amazon Pinpoint Developer Guide</i>.
* `deleteVoiceMessageSpendLimitOverride` - Deletes an account level monthly spend limit override for sending voice messages. Deleting a spend limit override sets the <code>EnforcedLimit</code> equal to the <code>MaxLimit</code>, which is controlled by Amazon Web Services. For more information on spending limits (quotas) see <a href="https://docs.aws.amazon.com/pinpoint/latest/developerguide/quotas.html">Amazon Pinpoint quotas</a> in the <i>Amazon Pinpoint Developer Guide</i>.
* `describeAccountAttributes` - <p>Describes attributes of your Amazon Web Services account. The supported account attributes include account tier, which indicates whether your account is in the sandbox or production environment. When you're ready to move your account out of the sandbox, create an Amazon Web Services Support case for a service limit increase request.</p> <p>New Amazon Pinpoint accounts are placed into an SMS or voice sandbox. The sandbox protects both Amazon Web Services end recipients and SMS or voice recipients from fraud and abuse. </p>
* `describeAccountLimits` - <p>Describes the current Amazon Pinpoint SMS Voice V2 resource quotas for your account. The description for a quota includes the quota name, current usage toward that quota, and the quota's maximum value.</p> <p>When you establish an Amazon Web Services account, the account has initial quotas on the maximum number of configuration sets, opt-out lists, phone numbers, and pools that you can create in a given Region. For more information see <a href="https://docs.aws.amazon.com/pinpoint/latest/developerguide/quotas.html"> Amazon Pinpoint quotas </a> in the <i>Amazon Pinpoint Developer Guide</i>.</p>
* `describeConfigurationSets` - <p>Describes the specified configuration sets or all in your account.</p> <p>If you specify configuration set names, the output includes information for only the specified configuration sets. If you specify filters, the output includes information for only those configuration sets that meet the filter criteria. If you don't specify configuration set names or filters, the output includes information for all configuration sets.</p> <p>If you specify a configuration set name that isn't valid, an error is returned.</p>
* `describeKeywords` - <p>Describes the specified keywords or all keywords on your origination phone number or pool.</p> <p>A keyword is a word that you can search for on a particular phone number or pool. It is also a specific word or phrase that an end user can send to your number to elicit a response, such as an informational message or a special offer. When your number receives a message that begins with a keyword, Amazon Pinpoint responds with a customizable message.</p> <p>If you specify a keyword that isn't valid, an Error is returned.</p>
* `describeOptOutLists` - <p>Describes the specified opt-out list or all opt-out lists in your account.</p> <p>If you specify opt-out list names, the output includes information for only the specified opt-out lists. Opt-out lists include only those that meet the filter criteria. If you don't specify opt-out list names or filters, the output includes information for all opt-out lists.</p> <p>If you specify an opt-out list name that isn't valid, an Error is returned.</p>
* `describeOptedOutNumbers` - <p>Describes the specified opted out destination numbers or all opted out destination numbers in an opt-out list.</p> <p>If you specify opted out numbers, the output includes information for only the specified opted out numbers. If you specify filters, the output includes information for only those opted out numbers that meet the filter criteria. If you don't specify opted out numbers or filters, the output includes information for all opted out destination numbers in your opt-out list.</p> <p>If you specify an opted out number that isn't valid, an Error is returned.</p>
* `describePhoneNumbers` - <p>Describes the specified origination phone number, or all the phone numbers in your account.</p> <p>If you specify phone number IDs, the output includes information for only the specified phone numbers. If you specify filters, the output includes information for only those phone numbers that meet the filter criteria. If you don't specify phone number IDs or filters, the output includes information for all phone numbers.</p> <p>If you specify a phone number ID that isn't valid, an Error is returned.</p>
* `describePools` - <p>Retrieves the specified pools or all pools associated with your Amazon Web Services account.</p> <p>If you specify pool IDs, the output includes information for only the specified pools. If you specify filters, the output includes information for only those pools that meet the filter criteria. If you don't specify pool IDs or filters, the output includes information for all pools.</p> <p>If you specify a pool ID that isn't valid, an Error is returned.</p> <p>A pool is a collection of phone numbers and SenderIds. A pool can include one or more phone numbers and SenderIds that are associated with your Amazon Web Services account.</p>
* `describeSenderIds` - <p>Describes the specified SenderIds or all SenderIds associated with your Amazon Web Services account.</p> <p>If you specify SenderIds, the output includes information for only the specified SenderIds. If you specify filters, the output includes information for only those SenderIds that meet the filter criteria. If you don't specify SenderIds or filters, the output includes information for all SenderIds.</p> <p>f you specify a sender ID that isn't valid, an Error is returned.</p>
* `describeSpendLimits` - <p>Describes the current Amazon Pinpoint monthly spend limits for sending voice and text messages.</p> <p>When you establish an Amazon Web Services account, the account has initial monthly spend limit in a given Region. For more information on increasing your monthly spend limit, see <a href="https://docs.aws.amazon.com/pinpoint/latest/userguide/channels-sms-awssupport-spend-threshold.html"> Requesting increases to your monthly SMS spending quota for Amazon Pinpoint </a> in the <i>Amazon Pinpoint User Guide</i>.</p>
* `disassociateOriginationIdentity` - <p>Removes the specified origination identity from an existing pool.</p> <p>If the origination identity isn't associated with the specified pool, an Error is returned.</p>
* `listPoolOriginationIdentities` - <p>Lists all associated origination identities in your pool.</p> <p>If you specify filters, the output includes information for only those origination identities that meet the filter criteria.</p>
* `listTagsForResource` - List all tags associated with a resource.
* `putKeyword` - <p>Creates or updates a keyword configuration on an origination phone number or pool.</p> <p> A keyword is a word that you can search for on a particular phone number or pool. It is also a specific word or phrase that an end user can send to your number to elicit a response, such as an informational message or a special offer. When your number receives a message that begins with a keyword, Amazon Pinpoint responds with a customizable message.</p> <p>If you specify a keyword that isn't valid, an Error is returned.</p>
* `putOptedOutNumber` - <p>Creates an opted out destination phone number in the opt-out list.</p> <p>If the destination phone number isn't valid or if the specified opt-out list doesn't exist, an Error is returned.</p>
* `releasePhoneNumber` - <p>Releases an existing origination phone number in your account. Once released, a phone number is no longer available for sending messages.</p> <p>If the origination phone number has deletion protection enabled or is associated with a pool, an Error is returned.</p>
* `requestPhoneNumber` - Request an origination phone number for use in your account. For more information on phone number request see <a href="https://docs.aws.amazon.com/pinpoint/latest/userguide/settings-sms-request-number.html"> Requesting a number </a> in the <i>Amazon Pinpoint User Guide</i>.
* `sendTextMessage` - <p>Creates a new text message and sends it to a recipient's phone number.</p> <p>SMS throughput limits are measured in Message Parts per Second (MPS). Your MPS limit depends on the destination country of your messages, as well as the type of phone number (origination number) that you use to send the message. For more information, see <a href="https://docs.aws.amazon.com/pinpoint/latest/userguide/channels-sms-limitations-mps.html">Message Parts per Second (MPS) limits</a> in the <i>Amazon Pinpoint User Guide</i>.</p>
* `sendVoiceMessage` - Allows you to send a request that sends a text message through Amazon Pinpoint. This operation uses <a href="http://aws.amazon.com/polly/">Amazon Polly</a> to convert a text script into a voice message.
* `setDefaultMessageType` - <p>Sets the default message type on a configuration set.</p> <p>Choose the category of SMS messages that you plan to send from this account. If you send account-related messages or time-sensitive messages such as one-time passcodes, choose <b>Transactional</b>. If you plan to send messages that contain marketing material or other promotional content, choose <b>Promotional</b>. This setting applies to your entire Amazon Web Services account.</p>
* `setDefaultSenderId` - <p>Sets default sender ID on a configuration set.</p> <p>When sending a text message to a destination country that supports sender IDs, the default sender ID on the configuration set specified will be used if no dedicated origination phone numbers or registered sender IDs are available in your account.</p>
* `setTextMessageSpendLimitOverride` - Sets an account level monthly spend limit override for sending text messages. The requested spend limit must be less than or equal to the <code>MaxLimit</code>, which is set by Amazon Web Services. 
* `setVoiceMessageSpendLimitOverride` - Sets an account level monthly spend limit override for sending voice messages. The requested spend limit must be less than or equal to the <code>MaxLimit</code>, which is set by Amazon Web Services. 
* `tagResource` - Adds or overwrites only the specified tags for the specified Amazon Pinpoint SMS Voice, version 2 resource. When you specify an existing tag key, the value is overwritten with the new value. Each resource can have a maximum of 50 tags. Each tag consists of a key and an optional value. Tag keys must be unique per resource. For more information about tags, see <a href="https://docs.aws.amazon.com/pinpoint/latest/developerguide/tagging-resources.html"> Tagging Amazon Pinpoint resources</a> in the <i>Amazon Pinpoint Developer Guide</i>.
* `untagResource` - Removes the association of the specified tags from an Amazon Pinpoint SMS Voice V2 resource. For more information on tags see <a href="https://docs.aws.amazon.com/pinpoint/latest/developerguide/tagging-resources.html"> Tagging Amazon Pinpoint resources</a> in the <i>Amazon Pinpoint Developer Guide</i>. 
* `updateEventDestination` - <p>Updates an existing event destination in a configuration set. You can update the IAM role ARN for CloudWatch Logs and Kinesis Data Firehose. You can also enable or disable the event destination.</p> <p>You may want to update an event destination to change its matching event types or updating the destination resource ARN. You can't change an event destination's type between CloudWatch Logs, Kinesis Data Firehose, and Amazon SNS.</p>
* `updatePhoneNumber` - <p>Updates the configuration of an existing origination phone number. You can update the opt-out list, enable or disable two-way messaging, change the TwoWayChannelArn, enable or disable self-managed opt-outs, and enable or disable deletion protection.</p> <p>If the origination phone number is associated with a pool, an Error is returned.</p>
* `updatePool` - Updates the configuration of an existing pool. You can update the opt-out list, enable or disable two-way messaging, change the <code>TwoWayChannelArn</code>, enable or disable self-managed opt-outs, enable or disable deletion protection, and enable or disable shared routes.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
