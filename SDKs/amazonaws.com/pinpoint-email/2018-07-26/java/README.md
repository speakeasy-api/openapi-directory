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

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateConfigurationSetRequest;
import org.openapis.openapi.models.operations.CreateConfigurationSetRequestBody;
import org.openapis.openapi.models.operations.CreateConfigurationSetRequestBodyDeliveryOptions;
import org.openapis.openapi.models.operations.CreateConfigurationSetRequestBodyReputationOptions;
import org.openapis.openapi.models.operations.CreateConfigurationSetRequestBodySendingOptions;
import org.openapis.openapi.models.operations.CreateConfigurationSetRequestBodyTrackingOptions;
import org.openapis.openapi.models.operations.CreateConfigurationSetResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.TlsPolicyEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateConfigurationSetRequest req = new CreateConfigurationSetRequest(                new CreateConfigurationSetRequestBody("provident") {{
                                deliveryOptions = new CreateConfigurationSetRequestBodyDeliveryOptions() {{
                                    sendingPoolName = "distinctio";
                                    tlsPolicy = TlsPolicyEnum.OPTIONAL;
                                }};;
                                reputationOptions = new CreateConfigurationSetRequestBodyReputationOptions() {{
                                    lastFreshStart = OffsetDateTime.parse("2021-04-14T16:47:33.722Z");
                                    reputationMetricsEnabled = false;
                                }};;
                                sendingOptions = new CreateConfigurationSetRequestBodySendingOptions() {{
                                    sendingEnabled = false;
                                }};;
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("error", "deserunt") {{
                                        key = "illum";
                                        value = "vel";
                                    }}),
                                    add(new Tag("magnam", "debitis") {{
                                        key = "suscipit";
                                        value = "iure";
                                    }}),
                                    add(new Tag("tempora", "suscipit") {{
                                        key = "ipsa";
                                        value = "delectus";
                                    }}),
                                }};
                                trackingOptions = new CreateConfigurationSetRequestBodyTrackingOptions() {{
                                    customRedirectDomain = "molestiae";
                                }};;
                            }};) {{
                xAmzAlgorithm = "minus";
                xAmzContentSha256 = "placeat";
                xAmzCredential = "voluptatum";
                xAmzDate = "iusto";
                xAmzSecurityToken = "excepturi";
                xAmzSignature = "nisi";
                xAmzSignedHeaders = "recusandae";
            }};            

            CreateConfigurationSetResponse res = sdk.createConfigurationSet(req);

            if (res.createConfigurationSetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [createConfigurationSet](docs/sdk/README.md#createconfigurationset) - Create a configuration set. <i>Configuration sets</i> are groups of rules that you can apply to the emails you send using Amazon Pinpoint. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email. 
* [createConfigurationSetEventDestination](docs/sdk/README.md#createconfigurationseteventdestination) - <p>Create an event destination. In Amazon Pinpoint, <i>events</i> include message sends, deliveries, opens, clicks, bounces, and complaints. <i>Event destinations</i> are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.</p> <p>A single configuration set can include more than one event destination.</p>
* [createDedicatedIpPool](docs/sdk/README.md#creatededicatedippool) - Create a new pool of dedicated IP addresses. A pool can include one or more dedicated IP addresses that are associated with your Amazon Pinpoint account. You can associate a pool with a configuration set. When you send an email that uses that configuration set, Amazon Pinpoint sends it using only the IP addresses in the associated pool.
* [createDeliverabilityTestReport](docs/sdk/README.md#createdeliverabilitytestreport) - Create a new predictive inbox placement test. Predictive inbox placement tests can help you predict how your messages will be handled by various email providers around the world. When you perform a predictive inbox placement test, you provide a sample message that contains the content that you plan to send to your customers. Amazon Pinpoint then sends that message to special email addresses spread across several major email providers. After about 24 hours, the test is complete, and you can use the <code>GetDeliverabilityTestReport</code> operation to view the results of the test.
* [createEmailIdentity](docs/sdk/README.md#createemailidentity) - <p>Verifies an email identity for use with Amazon Pinpoint. In Amazon Pinpoint, an identity is an email address or domain that you use when you send email. Before you can use an identity to send email with Amazon Pinpoint, you first have to verify it. By verifying an address, you demonstrate that you're the owner of the address, and that you've given Amazon Pinpoint permission to send email from the address.</p> <p>When you verify an email address, Amazon Pinpoint sends an email to the address. Your email address is verified as soon as you follow the link in the verification email. </p> <p>When you verify a domain, this operation provides a set of DKIM tokens, which you can convert into CNAME tokens. You add these CNAME tokens to the DNS configuration for your domain. Your domain is verified when Amazon Pinpoint detects these records in the DNS configuration for your domain. It usually takes around 72 hours to complete the domain verification process.</p>
* [deleteConfigurationSet](docs/sdk/README.md#deleteconfigurationset) - <p>Delete an existing configuration set.</p> <p>In Amazon Pinpoint, <i>configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p>
* [deleteConfigurationSetEventDestination](docs/sdk/README.md#deleteconfigurationseteventdestination) - <p>Delete an event destination.</p> <p>In Amazon Pinpoint, <i>events</i> include message sends, deliveries, opens, clicks, bounces, and complaints. <i>Event destinations</i> are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.</p>
* [deleteDedicatedIpPool](docs/sdk/README.md#deletededicatedippool) - Delete a dedicated IP pool.
* [deleteEmailIdentity](docs/sdk/README.md#deleteemailidentity) - Deletes an email identity that you previously verified for use with Amazon Pinpoint. An identity can be either an email address or a domain name.
* [getAccount](docs/sdk/README.md#getaccount) - Obtain information about the email-sending status and capabilities of your Amazon Pinpoint account in the current AWS Region.
* [getBlacklistReports](docs/sdk/README.md#getblacklistreports) - Retrieve a list of the blacklists that your dedicated IP addresses appear on.
* [getConfigurationSet](docs/sdk/README.md#getconfigurationset) - <p>Get information about an existing configuration set, including the dedicated IP pool that it's associated with, whether or not it's enabled for sending email, and more.</p> <p>In Amazon Pinpoint, <i>configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p>
* [getConfigurationSetEventDestinations](docs/sdk/README.md#getconfigurationseteventdestinations) - <p>Retrieve a list of event destinations that are associated with a configuration set.</p> <p>In Amazon Pinpoint, <i>events</i> include message sends, deliveries, opens, clicks, bounces, and complaints. <i>Event destinations</i> are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.</p>
* [getDedicatedIp](docs/sdk/README.md#getdedicatedip) - Get information about a dedicated IP address, including the name of the dedicated IP pool that it's associated with, as well information about the automatic warm-up process for the address.
* [getDedicatedIps](docs/sdk/README.md#getdedicatedips) - List the dedicated IP addresses that are associated with your Amazon Pinpoint account.
* [getDeliverabilityDashboardOptions](docs/sdk/README.md#getdeliverabilitydashboardoptions) - <p>Retrieve information about the status of the Deliverability dashboard for your Amazon Pinpoint account. When the Deliverability dashboard is enabled, you gain access to reputation, deliverability, and other metrics for the domains that you use to send email using Amazon Pinpoint. You also gain the ability to perform predictive inbox placement tests.</p> <p>When you use the Deliverability dashboard, you pay a monthly subscription charge, in addition to any other fees that you accrue by using Amazon Pinpoint. For more information about the features and cost of a Deliverability dashboard subscription, see <a href="http://aws.amazon.com/pinpoint/pricing/">Amazon Pinpoint Pricing</a>.</p>
* [getDeliverabilityTestReport](docs/sdk/README.md#getdeliverabilitytestreport) - Retrieve the results of a predictive inbox placement test.
* [getDomainDeliverabilityCampaign](docs/sdk/README.md#getdomaindeliverabilitycampaign) - Retrieve all the deliverability data for a specific campaign. This data is available for a campaign only if the campaign sent email by using a domain that the Deliverability dashboard is enabled for (<code>PutDeliverabilityDashboardOption</code> operation).
* [getDomainStatisticsReport](docs/sdk/README.md#getdomainstatisticsreport) - Retrieve inbox placement and engagement rates for the domains that you use to send email.
* [getEmailIdentity](docs/sdk/README.md#getemailidentity) - Provides information about a specific identity associated with your Amazon Pinpoint account, including the identity's verification status, its DKIM authentication status, and its custom Mail-From settings.
* [listConfigurationSets](docs/sdk/README.md#listconfigurationsets) - <p>List all of the configuration sets associated with your Amazon Pinpoint account in the current region.</p> <p>In Amazon Pinpoint, <i>configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p>
* [listDedicatedIpPools](docs/sdk/README.md#listdedicatedippools) - List all of the dedicated IP pools that exist in your Amazon Pinpoint account in the current AWS Region.
* [listDeliverabilityTestReports](docs/sdk/README.md#listdeliverabilitytestreports) - Show a list of the predictive inbox placement tests that you've performed, regardless of their statuses. For predictive inbox placement tests that are complete, you can use the <code>GetDeliverabilityTestReport</code> operation to view the results.
* [listDomainDeliverabilityCampaigns](docs/sdk/README.md#listdomaindeliverabilitycampaigns) - Retrieve deliverability data for all the campaigns that used a specific domain to send email during a specified time range. This data is available for a domain only if you enabled the Deliverability dashboard (<code>PutDeliverabilityDashboardOption</code> operation) for the domain.
* [listEmailIdentities](docs/sdk/README.md#listemailidentities) - Returns a list of all of the email identities that are associated with your Amazon Pinpoint account. An identity can be either an email address or a domain. This operation returns identities that are verified as well as those that aren't.
* [listTagsForResource](docs/sdk/README.md#listtagsforresource) - Retrieve a list of the tags (keys and values) that are associated with a specified resource. A <i>tag</i> is a label that you optionally define and associate with a resource in Amazon Pinpoint. Each tag consists of a required <i>tag key</i> and an optional associated <i>tag value</i>. A tag key is a general label that acts as a category for more specific tag values. A tag value acts as a descriptor within a tag key.
* [putAccountDedicatedIpWarmupAttributes](docs/sdk/README.md#putaccountdedicatedipwarmupattributes) - Enable or disable the automatic warm-up feature for dedicated IP addresses.
* [putAccountSendingAttributes](docs/sdk/README.md#putaccountsendingattributes) - Enable or disable the ability of your account to send email.
* [putConfigurationSetDeliveryOptions](docs/sdk/README.md#putconfigurationsetdeliveryoptions) - Associate a configuration set with a dedicated IP pool. You can use dedicated IP pools to create groups of dedicated IP addresses for sending specific types of email.
* [putConfigurationSetReputationOptions](docs/sdk/README.md#putconfigurationsetreputationoptions) - Enable or disable collection of reputation metrics for emails that you send using a particular configuration set in a specific AWS Region.
* [putConfigurationSetSendingOptions](docs/sdk/README.md#putconfigurationsetsendingoptions) - Enable or disable email sending for messages that use a particular configuration set in a specific AWS Region.
* [putConfigurationSetTrackingOptions](docs/sdk/README.md#putconfigurationsettrackingoptions) - Specify a custom domain to use for open and click tracking elements in email that you send using Amazon Pinpoint.
* [putDedicatedIpInPool](docs/sdk/README.md#putdedicatedipinpool) - <p>Move a dedicated IP address to an existing dedicated IP pool.</p> <note> <p>The dedicated IP address that you specify must already exist, and must be associated with your Amazon Pinpoint account. </p> <p>The dedicated IP pool you specify must already exist. You can create a new pool by using the <code>CreateDedicatedIpPool</code> operation.</p> </note>
* [putDedicatedIpWarmupAttributes](docs/sdk/README.md#putdedicatedipwarmupattributes) - <p/>
* [putDeliverabilityDashboardOption](docs/sdk/README.md#putdeliverabilitydashboardoption) - <p>Enable or disable the Deliverability dashboard for your Amazon Pinpoint account. When you enable the Deliverability dashboard, you gain access to reputation, deliverability, and other metrics for the domains that you use to send email using Amazon Pinpoint. You also gain the ability to perform predictive inbox placement tests.</p> <p>When you use the Deliverability dashboard, you pay a monthly subscription charge, in addition to any other fees that you accrue by using Amazon Pinpoint. For more information about the features and cost of a Deliverability dashboard subscription, see <a href="http://aws.amazon.com/pinpoint/pricing/">Amazon Pinpoint Pricing</a>.</p>
* [putEmailIdentityDkimAttributes](docs/sdk/README.md#putemailidentitydkimattributes) - Used to enable or disable DKIM authentication for an email identity.
* [putEmailIdentityFeedbackAttributes](docs/sdk/README.md#putemailidentityfeedbackattributes) - <p>Used to enable or disable feedback forwarding for an identity. This setting determines what happens when an identity is used to send an email that results in a bounce or complaint event.</p> <p>When you enable feedback forwarding, Amazon Pinpoint sends you email notifications when bounce or complaint events occur. Amazon Pinpoint sends this notification to the address that you specified in the Return-Path header of the original email.</p> <p>When you disable feedback forwarding, Amazon Pinpoint sends notifications through other mechanisms, such as by notifying an Amazon SNS topic. You're required to have a method of tracking bounces and complaints. If you haven't set up another mechanism for receiving bounce or complaint notifications, Amazon Pinpoint sends an email notification when these events occur (even if this setting is disabled).</p>
* [putEmailIdentityMailFromAttributes](docs/sdk/README.md#putemailidentitymailfromattributes) - Used to enable or disable the custom Mail-From domain configuration for an email identity.
* [sendEmail](docs/sdk/README.md#sendemail) - <p>Sends an email message. You can use the Amazon Pinpoint Email API to send two types of messages:</p> <ul> <li> <p> <b>Simple</b> – A standard email message. When you create this type of message, you specify the sender, the recipient, and the message body, and Amazon Pinpoint assembles the message for you.</p> </li> <li> <p> <b>Raw</b> – A raw, MIME-formatted email message. When you send this type of email, you have to specify all of the message headers, as well as the message body. You can use this message type to send messages that contain attachments. The message that you specify has to be a valid MIME message.</p> </li> </ul>
* [tagResource](docs/sdk/README.md#tagresource) - <p>Add one or more tags (keys and values) to a specified resource. A <i>tag</i> is a label that you optionally define and associate with a resource in Amazon Pinpoint. Tags can help you categorize and manage resources in different ways, such as by purpose, owner, environment, or other criteria. A resource can have as many as 50 tags.</p> <p>Each tag consists of a required <i>tag key</i> and an associated <i>tag value</i>, both of which you define. A tag key is a general label that acts as a category for more specific tag values. A tag value acts as a descriptor within a tag key.</p>
* [untagResource](docs/sdk/README.md#untagresource) - Remove one or more tags (keys and values) from a specified resource.
* [updateConfigurationSetEventDestination](docs/sdk/README.md#updateconfigurationseteventdestination) - <p>Update the configuration of an event destination for a configuration set.</p> <p>In Amazon Pinpoint, <i>events</i> include message sends, deliveries, opens, clicks, bounces, and complaints. <i>Event destinations</i> are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.</p>
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
