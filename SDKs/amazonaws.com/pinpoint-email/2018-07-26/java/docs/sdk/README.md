# SDK

## Overview

<fullname>Amazon Pinpoint Email Service</fullname> <p>Welcome to the <i>Amazon Pinpoint Email API Reference</i>. This guide provides information about the Amazon Pinpoint Email API (version 1.0), including supported operations, data types, parameters, and schemas.</p> <p> <a href="https://aws.amazon.com/pinpoint">Amazon Pinpoint</a> is an AWS service that you can use to engage with your customers across multiple messaging channels. You can use Amazon Pinpoint to send email, SMS text messages, voice messages, and push notifications. The Amazon Pinpoint Email API provides programmatic access to options that are unique to the email channel and supplement the options provided by the Amazon Pinpoint API.</p> <p>If you're new to Amazon Pinpoint, you might find it helpful to also review the <a href="https://docs.aws.amazon.com/pinpoint/latest/developerguide/welcome.html">Amazon Pinpoint Developer Guide</a>. The <i>Amazon Pinpoint Developer Guide</i> provides tutorials, code samples, and procedures that demonstrate how to use Amazon Pinpoint features programmatically and how to integrate Amazon Pinpoint functionality into mobile apps and other types of applications. The guide also provides information about key topics such as Amazon Pinpoint integration with other AWS services and the limits that apply to using the service.</p> <p>The Amazon Pinpoint Email API is available in several AWS Regions and it provides an endpoint for each of these Regions. For a list of all the Regions and endpoints where the API is currently available, see <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html#pinpoint_region">AWS Service Endpoints</a> in the <i>Amazon Web Services General Reference</i>. To learn more about AWS Regions, see <a href="https://docs.aws.amazon.com/general/latest/gr/rande-manage.html">Managing AWS Regions</a> in the <i>Amazon Web Services General Reference</i>.</p> <p>In each Region, AWS maintains multiple Availability Zones. These Availability Zones are physically isolated from each other, but are united by private, low-latency, high-throughput, and highly redundant network connections. These Availability Zones enable us to provide very high levels of availability and redundancy, while also minimizing latency. To learn more about the number of Availability Zones that are available in each Region, see <a href="http://aws.amazon.com/about-aws/global-infrastructure/">AWS Global Infrastructure</a>.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/email/>
### Available Operations

* [createConfigurationSet](#createconfigurationset) - Create a configuration set. <i>Configuration sets</i> are groups of rules that you can apply to the emails you send using Amazon Pinpoint. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email. 
* [createConfigurationSetEventDestination](#createconfigurationseteventdestination) - <p>Create an event destination. In Amazon Pinpoint, <i>events</i> include message sends, deliveries, opens, clicks, bounces, and complaints. <i>Event destinations</i> are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.</p> <p>A single configuration set can include more than one event destination.</p>
* [createDedicatedIpPool](#creatededicatedippool) - Create a new pool of dedicated IP addresses. A pool can include one or more dedicated IP addresses that are associated with your Amazon Pinpoint account. You can associate a pool with a configuration set. When you send an email that uses that configuration set, Amazon Pinpoint sends it using only the IP addresses in the associated pool.
* [createDeliverabilityTestReport](#createdeliverabilitytestreport) - Create a new predictive inbox placement test. Predictive inbox placement tests can help you predict how your messages will be handled by various email providers around the world. When you perform a predictive inbox placement test, you provide a sample message that contains the content that you plan to send to your customers. Amazon Pinpoint then sends that message to special email addresses spread across several major email providers. After about 24 hours, the test is complete, and you can use the <code>GetDeliverabilityTestReport</code> operation to view the results of the test.
* [createEmailIdentity](#createemailidentity) - <p>Verifies an email identity for use with Amazon Pinpoint. In Amazon Pinpoint, an identity is an email address or domain that you use when you send email. Before you can use an identity to send email with Amazon Pinpoint, you first have to verify it. By verifying an address, you demonstrate that you're the owner of the address, and that you've given Amazon Pinpoint permission to send email from the address.</p> <p>When you verify an email address, Amazon Pinpoint sends an email to the address. Your email address is verified as soon as you follow the link in the verification email. </p> <p>When you verify a domain, this operation provides a set of DKIM tokens, which you can convert into CNAME tokens. You add these CNAME tokens to the DNS configuration for your domain. Your domain is verified when Amazon Pinpoint detects these records in the DNS configuration for your domain. It usually takes around 72 hours to complete the domain verification process.</p>
* [deleteConfigurationSet](#deleteconfigurationset) - <p>Delete an existing configuration set.</p> <p>In Amazon Pinpoint, <i>configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p>
* [deleteConfigurationSetEventDestination](#deleteconfigurationseteventdestination) - <p>Delete an event destination.</p> <p>In Amazon Pinpoint, <i>events</i> include message sends, deliveries, opens, clicks, bounces, and complaints. <i>Event destinations</i> are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.</p>
* [deleteDedicatedIpPool](#deletededicatedippool) - Delete a dedicated IP pool.
* [deleteEmailIdentity](#deleteemailidentity) - Deletes an email identity that you previously verified for use with Amazon Pinpoint. An identity can be either an email address or a domain name.
* [getAccount](#getaccount) - Obtain information about the email-sending status and capabilities of your Amazon Pinpoint account in the current AWS Region.
* [getBlacklistReports](#getblacklistreports) - Retrieve a list of the blacklists that your dedicated IP addresses appear on.
* [getConfigurationSet](#getconfigurationset) - <p>Get information about an existing configuration set, including the dedicated IP pool that it's associated with, whether or not it's enabled for sending email, and more.</p> <p>In Amazon Pinpoint, <i>configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p>
* [getConfigurationSetEventDestinations](#getconfigurationseteventdestinations) - <p>Retrieve a list of event destinations that are associated with a configuration set.</p> <p>In Amazon Pinpoint, <i>events</i> include message sends, deliveries, opens, clicks, bounces, and complaints. <i>Event destinations</i> are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.</p>
* [getDedicatedIp](#getdedicatedip) - Get information about a dedicated IP address, including the name of the dedicated IP pool that it's associated with, as well information about the automatic warm-up process for the address.
* [getDedicatedIps](#getdedicatedips) - List the dedicated IP addresses that are associated with your Amazon Pinpoint account.
* [getDeliverabilityDashboardOptions](#getdeliverabilitydashboardoptions) - <p>Retrieve information about the status of the Deliverability dashboard for your Amazon Pinpoint account. When the Deliverability dashboard is enabled, you gain access to reputation, deliverability, and other metrics for the domains that you use to send email using Amazon Pinpoint. You also gain the ability to perform predictive inbox placement tests.</p> <p>When you use the Deliverability dashboard, you pay a monthly subscription charge, in addition to any other fees that you accrue by using Amazon Pinpoint. For more information about the features and cost of a Deliverability dashboard subscription, see <a href="http://aws.amazon.com/pinpoint/pricing/">Amazon Pinpoint Pricing</a>.</p>
* [getDeliverabilityTestReport](#getdeliverabilitytestreport) - Retrieve the results of a predictive inbox placement test.
* [getDomainDeliverabilityCampaign](#getdomaindeliverabilitycampaign) - Retrieve all the deliverability data for a specific campaign. This data is available for a campaign only if the campaign sent email by using a domain that the Deliverability dashboard is enabled for (<code>PutDeliverabilityDashboardOption</code> operation).
* [getDomainStatisticsReport](#getdomainstatisticsreport) - Retrieve inbox placement and engagement rates for the domains that you use to send email.
* [getEmailIdentity](#getemailidentity) - Provides information about a specific identity associated with your Amazon Pinpoint account, including the identity's verification status, its DKIM authentication status, and its custom Mail-From settings.
* [listConfigurationSets](#listconfigurationsets) - <p>List all of the configuration sets associated with your Amazon Pinpoint account in the current region.</p> <p>In Amazon Pinpoint, <i>configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p>
* [listDedicatedIpPools](#listdedicatedippools) - List all of the dedicated IP pools that exist in your Amazon Pinpoint account in the current AWS Region.
* [listDeliverabilityTestReports](#listdeliverabilitytestreports) - Show a list of the predictive inbox placement tests that you've performed, regardless of their statuses. For predictive inbox placement tests that are complete, you can use the <code>GetDeliverabilityTestReport</code> operation to view the results.
* [listDomainDeliverabilityCampaigns](#listdomaindeliverabilitycampaigns) - Retrieve deliverability data for all the campaigns that used a specific domain to send email during a specified time range. This data is available for a domain only if you enabled the Deliverability dashboard (<code>PutDeliverabilityDashboardOption</code> operation) for the domain.
* [listEmailIdentities](#listemailidentities) - Returns a list of all of the email identities that are associated with your Amazon Pinpoint account. An identity can be either an email address or a domain. This operation returns identities that are verified as well as those that aren't.
* [listTagsForResource](#listtagsforresource) - Retrieve a list of the tags (keys and values) that are associated with a specified resource. A <i>tag</i> is a label that you optionally define and associate with a resource in Amazon Pinpoint. Each tag consists of a required <i>tag key</i> and an optional associated <i>tag value</i>. A tag key is a general label that acts as a category for more specific tag values. A tag value acts as a descriptor within a tag key.
* [putAccountDedicatedIpWarmupAttributes](#putaccountdedicatedipwarmupattributes) - Enable or disable the automatic warm-up feature for dedicated IP addresses.
* [putAccountSendingAttributes](#putaccountsendingattributes) - Enable or disable the ability of your account to send email.
* [putConfigurationSetDeliveryOptions](#putconfigurationsetdeliveryoptions) - Associate a configuration set with a dedicated IP pool. You can use dedicated IP pools to create groups of dedicated IP addresses for sending specific types of email.
* [putConfigurationSetReputationOptions](#putconfigurationsetreputationoptions) - Enable or disable collection of reputation metrics for emails that you send using a particular configuration set in a specific AWS Region.
* [putConfigurationSetSendingOptions](#putconfigurationsetsendingoptions) - Enable or disable email sending for messages that use a particular configuration set in a specific AWS Region.
* [putConfigurationSetTrackingOptions](#putconfigurationsettrackingoptions) - Specify a custom domain to use for open and click tracking elements in email that you send using Amazon Pinpoint.
* [putDedicatedIpInPool](#putdedicatedipinpool) - <p>Move a dedicated IP address to an existing dedicated IP pool.</p> <note> <p>The dedicated IP address that you specify must already exist, and must be associated with your Amazon Pinpoint account. </p> <p>The dedicated IP pool you specify must already exist. You can create a new pool by using the <code>CreateDedicatedIpPool</code> operation.</p> </note>
* [putDedicatedIpWarmupAttributes](#putdedicatedipwarmupattributes) - <p/>
* [putDeliverabilityDashboardOption](#putdeliverabilitydashboardoption) - <p>Enable or disable the Deliverability dashboard for your Amazon Pinpoint account. When you enable the Deliverability dashboard, you gain access to reputation, deliverability, and other metrics for the domains that you use to send email using Amazon Pinpoint. You also gain the ability to perform predictive inbox placement tests.</p> <p>When you use the Deliverability dashboard, you pay a monthly subscription charge, in addition to any other fees that you accrue by using Amazon Pinpoint. For more information about the features and cost of a Deliverability dashboard subscription, see <a href="http://aws.amazon.com/pinpoint/pricing/">Amazon Pinpoint Pricing</a>.</p>
* [putEmailIdentityDkimAttributes](#putemailidentitydkimattributes) - Used to enable or disable DKIM authentication for an email identity.
* [putEmailIdentityFeedbackAttributes](#putemailidentityfeedbackattributes) - <p>Used to enable or disable feedback forwarding for an identity. This setting determines what happens when an identity is used to send an email that results in a bounce or complaint event.</p> <p>When you enable feedback forwarding, Amazon Pinpoint sends you email notifications when bounce or complaint events occur. Amazon Pinpoint sends this notification to the address that you specified in the Return-Path header of the original email.</p> <p>When you disable feedback forwarding, Amazon Pinpoint sends notifications through other mechanisms, such as by notifying an Amazon SNS topic. You're required to have a method of tracking bounces and complaints. If you haven't set up another mechanism for receiving bounce or complaint notifications, Amazon Pinpoint sends an email notification when these events occur (even if this setting is disabled).</p>
* [putEmailIdentityMailFromAttributes](#putemailidentitymailfromattributes) - Used to enable or disable the custom Mail-From domain configuration for an email identity.
* [sendEmail](#sendemail) - <p>Sends an email message. You can use the Amazon Pinpoint Email API to send two types of messages:</p> <ul> <li> <p> <b>Simple</b> – A standard email message. When you create this type of message, you specify the sender, the recipient, and the message body, and Amazon Pinpoint assembles the message for you.</p> </li> <li> <p> <b>Raw</b> – A raw, MIME-formatted email message. When you send this type of email, you have to specify all of the message headers, as well as the message body. You can use this message type to send messages that contain attachments. The message that you specify has to be a valid MIME message.</p> </li> </ul>
* [tagResource](#tagresource) - <p>Add one or more tags (keys and values) to a specified resource. A <i>tag</i> is a label that you optionally define and associate with a resource in Amazon Pinpoint. Tags can help you categorize and manage resources in different ways, such as by purpose, owner, environment, or other criteria. A resource can have as many as 50 tags.</p> <p>Each tag consists of a required <i>tag key</i> and an associated <i>tag value</i>, both of which you define. A tag key is a general label that acts as a category for more specific tag values. A tag value acts as a descriptor within a tag key.</p>
* [untagResource](#untagresource) - Remove one or more tags (keys and values) from a specified resource.
* [updateConfigurationSetEventDestination](#updateconfigurationseteventdestination) - <p>Update the configuration of an event destination for a configuration set.</p> <p>In Amazon Pinpoint, <i>events</i> include message sends, deliveries, opens, clicks, bounces, and complaints. <i>Event destinations</i> are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.</p>

## createConfigurationSet

Create a configuration set. <i>Configuration sets</i> are groups of rules that you can apply to the emails you send using Amazon Pinpoint. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email. 

### Example Usage

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
                .setSecurity(new Security("temporibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateConfigurationSetRequest req = new CreateConfigurationSetRequest(                new CreateConfigurationSetRequestBody("ab") {{
                                deliveryOptions = new CreateConfigurationSetRequestBodyDeliveryOptions() {{
                                    sendingPoolName = "quis";
                                    tlsPolicy = TlsPolicyEnum.REQUIRE;
                                }};;
                                reputationOptions = new CreateConfigurationSetRequestBodyReputationOptions() {{
                                    lastFreshStart = OffsetDateTime.parse("2022-12-17T05:46:24.151Z");
                                    reputationMetricsEnabled = false;
                                }};;
                                sendingOptions = new CreateConfigurationSetRequestBodySendingOptions() {{
                                    sendingEnabled = false;
                                }};;
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("quo", "odit") {{
                                        key = "repellendus";
                                        value = "sapiente";
                                    }}),
                                    add(new Tag("maiores", "molestiae") {{
                                        key = "at";
                                        value = "at";
                                    }}),
                                }};
                                trackingOptions = new CreateConfigurationSetRequestBodyTrackingOptions() {{
                                    customRedirectDomain = "quod";
                                }};;
                            }};) {{
                xAmzAlgorithm = "quod";
                xAmzContentSha256 = "esse";
                xAmzCredential = "totam";
                xAmzDate = "porro";
                xAmzSecurityToken = "dolorum";
                xAmzSignature = "dicta";
                xAmzSignedHeaders = "nam";
            }};            

            CreateConfigurationSetResponse res = sdk.sdk.createConfigurationSet(req);

            if (res.createConfigurationSetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createConfigurationSetEventDestination

<p>Create an event destination. In Amazon Pinpoint, <i>events</i> include message sends, deliveries, opens, clicks, bounces, and complaints. <i>Event destinations</i> are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.</p> <p>A single configuration set can include more than one event destination.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateConfigurationSetEventDestinationRequest;
import org.openapis.openapi.models.operations.CreateConfigurationSetEventDestinationRequestBody;
import org.openapis.openapi.models.operations.CreateConfigurationSetEventDestinationRequestBodyEventDestination;
import org.openapis.openapi.models.operations.CreateConfigurationSetEventDestinationResponse;
import org.openapis.openapi.models.shared.CloudWatchDestination;
import org.openapis.openapi.models.shared.CloudWatchDimensionConfiguration;
import org.openapis.openapi.models.shared.DimensionValueSourceEnum;
import org.openapis.openapi.models.shared.EventTypeEnum;
import org.openapis.openapi.models.shared.KinesisFirehoseDestination;
import org.openapis.openapi.models.shared.PinpointDestination;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SnsDestination;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("officia") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateConfigurationSetEventDestinationRequest req = new CreateConfigurationSetEventDestinationRequest("occaecati",                 new CreateConfigurationSetEventDestinationRequestBody(                new CreateConfigurationSetEventDestinationRequestBodyEventDestination() {{
                                                cloudWatchDestination = new CloudWatchDestination(                new org.openapis.openapi.models.shared.CloudWatchDimensionConfiguration[]{{
                                                                    add(new CloudWatchDimensionConfiguration("totam", "beatae", DimensionValueSourceEnum.EMAIL_HEADER) {{
                                                                        defaultDimensionValue = "deleniti";
                                                                        dimensionName = "hic";
                                                                        dimensionValueSource = DimensionValueSourceEnum.LINK_TAG;
                                                                    }}),
                                                                }});;
                                                enabled = false;
                                                kinesisFirehoseDestination = new KinesisFirehoseDestination("molestiae", "modi");;
                                                matchingEventTypes = new org.openapis.openapi.models.shared.EventTypeEnum[]{{
                                                    add(EventTypeEnum.CLICK),
                                                }};
                                                pinpointDestination = new PinpointDestination() {{
                                                    applicationArn = "cum";
                                                }};;
                                                snsDestination = new SnsDestination("esse");;
                                            }};, "ipsum");) {{
                xAmzAlgorithm = "excepturi";
                xAmzContentSha256 = "aspernatur";
                xAmzCredential = "perferendis";
                xAmzDate = "ad";
                xAmzSecurityToken = "natus";
                xAmzSignature = "sed";
                xAmzSignedHeaders = "iste";
            }};            

            CreateConfigurationSetEventDestinationResponse res = sdk.sdk.createConfigurationSetEventDestination(req);

            if (res.createConfigurationSetEventDestinationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createDedicatedIpPool

Create a new pool of dedicated IP addresses. A pool can include one or more dedicated IP addresses that are associated with your Amazon Pinpoint account. You can associate a pool with a configuration set. When you send an email that uses that configuration set, Amazon Pinpoint sends it using only the IP addresses in the associated pool.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateDedicatedIpPoolRequest;
import org.openapis.openapi.models.operations.CreateDedicatedIpPoolRequestBody;
import org.openapis.openapi.models.operations.CreateDedicatedIpPoolResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolor") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateDedicatedIpPoolRequest req = new CreateDedicatedIpPoolRequest(                new CreateDedicatedIpPoolRequestBody("natus") {{
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
                            }};) {{
                xAmzAlgorithm = "quidem";
                xAmzContentSha256 = "architecto";
                xAmzCredential = "ipsa";
                xAmzDate = "reiciendis";
                xAmzSecurityToken = "est";
                xAmzSignature = "mollitia";
                xAmzSignedHeaders = "laborum";
            }};            

            CreateDedicatedIpPoolResponse res = sdk.sdk.createDedicatedIpPool(req);

            if (res.createDedicatedIpPoolResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createDeliverabilityTestReport

Create a new predictive inbox placement test. Predictive inbox placement tests can help you predict how your messages will be handled by various email providers around the world. When you perform a predictive inbox placement test, you provide a sample message that contains the content that you plan to send to your customers. Amazon Pinpoint then sends that message to special email addresses spread across several major email providers. After about 24 hours, the test is complete, and you can use the <code>GetDeliverabilityTestReport</code> operation to view the results of the test.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateDeliverabilityTestReportRequest;
import org.openapis.openapi.models.operations.CreateDeliverabilityTestReportRequestBody;
import org.openapis.openapi.models.operations.CreateDeliverabilityTestReportRequestBodyContent;
import org.openapis.openapi.models.operations.CreateDeliverabilityTestReportResponse;
import org.openapis.openapi.models.shared.Body;
import org.openapis.openapi.models.shared.Content;
import org.openapis.openapi.models.shared.Message;
import org.openapis.openapi.models.shared.RawMessage;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.Template;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateDeliverabilityTestReportRequest req = new CreateDeliverabilityTestReportRequest(                new CreateDeliverabilityTestReportRequestBody(                new CreateDeliverabilityTestReportRequestBodyContent() {{
                                                raw = new RawMessage("dolorem");;
                                                simple = new Message(                new Body() {{
                                                                    html = new Content("corporis") {{
                                                                        charset = "explicabo";
                                                                    }};;
                                                                    text = new Content("nobis") {{
                                                                        charset = "enim";
                                                                    }};;
                                                                }};,                 new Content("omnis") {{
                                                                    charset = "nemo";
                                                                }};);;
                                                template = new Template() {{
                                                    templateArn = "minima";
                                                    templateData = "excepturi";
                                                }};;
                                            }};, "accusantium") {{
                                reportName = "iure";
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("architecto", "mollitia") {{
                                        key = "doloribus";
                                        value = "sapiente";
                                    }}),
                                    add(new Tag("consequuntur", "repellat") {{
                                        key = "dolorem";
                                        value = "culpa";
                                    }}),
                                    add(new Tag("numquam", "commodi") {{
                                        key = "mollitia";
                                        value = "occaecati";
                                    }}),
                                }};
                            }};) {{
                xAmzAlgorithm = "quam";
                xAmzContentSha256 = "molestiae";
                xAmzCredential = "velit";
                xAmzDate = "error";
                xAmzSecurityToken = "quia";
                xAmzSignature = "quis";
                xAmzSignedHeaders = "vitae";
            }};            

            CreateDeliverabilityTestReportResponse res = sdk.sdk.createDeliverabilityTestReport(req);

            if (res.createDeliverabilityTestReportResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createEmailIdentity

<p>Verifies an email identity for use with Amazon Pinpoint. In Amazon Pinpoint, an identity is an email address or domain that you use when you send email. Before you can use an identity to send email with Amazon Pinpoint, you first have to verify it. By verifying an address, you demonstrate that you're the owner of the address, and that you've given Amazon Pinpoint permission to send email from the address.</p> <p>When you verify an email address, Amazon Pinpoint sends an email to the address. Your email address is verified as soon as you follow the link in the verification email. </p> <p>When you verify a domain, this operation provides a set of DKIM tokens, which you can convert into CNAME tokens. You add these CNAME tokens to the DNS configuration for your domain. Your domain is verified when Amazon Pinpoint detects these records in the DNS configuration for your domain. It usually takes around 72 hours to complete the domain verification process.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateEmailIdentityRequest;
import org.openapis.openapi.models.operations.CreateEmailIdentityRequestBody;
import org.openapis.openapi.models.operations.CreateEmailIdentityResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laborum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateEmailIdentityRequest req = new CreateEmailIdentityRequest(                new CreateEmailIdentityRequestBody("animi") {{
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("sequi", "tenetur") {{
                                        key = "odit";
                                        value = "quo";
                                    }}),
                                    add(new Tag("possimus", "aut") {{
                                        key = "ipsam";
                                        value = "id";
                                    }}),
                                }};
                            }};) {{
                xAmzAlgorithm = "quasi";
                xAmzContentSha256 = "error";
                xAmzCredential = "temporibus";
                xAmzDate = "laborum";
                xAmzSecurityToken = "quasi";
                xAmzSignature = "reiciendis";
                xAmzSignedHeaders = "voluptatibus";
            }};            

            CreateEmailIdentityResponse res = sdk.sdk.createEmailIdentity(req);

            if (res.createEmailIdentityResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteConfigurationSet

<p>Delete an existing configuration set.</p> <p>In Amazon Pinpoint, <i>configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteConfigurationSetRequest;
import org.openapis.openapi.models.operations.DeleteConfigurationSetResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vero") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteConfigurationSetRequest req = new DeleteConfigurationSetRequest("nihil") {{
                xAmzAlgorithm = "praesentium";
                xAmzContentSha256 = "voluptatibus";
                xAmzCredential = "ipsa";
                xAmzDate = "omnis";
                xAmzSecurityToken = "voluptate";
                xAmzSignature = "cum";
                xAmzSignedHeaders = "perferendis";
            }};            

            DeleteConfigurationSetResponse res = sdk.sdk.deleteConfigurationSet(req);

            if (res.deleteConfigurationSetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteConfigurationSetEventDestination

<p>Delete an event destination.</p> <p>In Amazon Pinpoint, <i>events</i> include message sends, deliveries, opens, clicks, bounces, and complaints. <i>Event destinations</i> are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteConfigurationSetEventDestinationRequest;
import org.openapis.openapi.models.operations.DeleteConfigurationSetEventDestinationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("doloremque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteConfigurationSetEventDestinationRequest req = new DeleteConfigurationSetEventDestinationRequest("reprehenderit", "ut") {{
                xAmzAlgorithm = "maiores";
                xAmzContentSha256 = "dicta";
                xAmzCredential = "corporis";
                xAmzDate = "dolore";
                xAmzSecurityToken = "iusto";
                xAmzSignature = "dicta";
                xAmzSignedHeaders = "harum";
            }};            

            DeleteConfigurationSetEventDestinationResponse res = sdk.sdk.deleteConfigurationSetEventDestination(req);

            if (res.deleteConfigurationSetEventDestinationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteDedicatedIpPool

Delete a dedicated IP pool.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteDedicatedIpPoolRequest;
import org.openapis.openapi.models.operations.DeleteDedicatedIpPoolResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("enim") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteDedicatedIpPoolRequest req = new DeleteDedicatedIpPoolRequest("accusamus") {{
                xAmzAlgorithm = "commodi";
                xAmzContentSha256 = "repudiandae";
                xAmzCredential = "quae";
                xAmzDate = "ipsum";
                xAmzSecurityToken = "quidem";
                xAmzSignature = "molestias";
                xAmzSignedHeaders = "excepturi";
            }};            

            DeleteDedicatedIpPoolResponse res = sdk.sdk.deleteDedicatedIpPool(req);

            if (res.deleteDedicatedIpPoolResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteEmailIdentity

Deletes an email identity that you previously verified for use with Amazon Pinpoint. An identity can be either an email address or a domain name.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteEmailIdentityRequest;
import org.openapis.openapi.models.operations.DeleteEmailIdentityResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("pariatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteEmailIdentityRequest req = new DeleteEmailIdentityRequest("modi") {{
                xAmzAlgorithm = "praesentium";
                xAmzContentSha256 = "rem";
                xAmzCredential = "voluptates";
                xAmzDate = "quasi";
                xAmzSecurityToken = "repudiandae";
                xAmzSignature = "sint";
                xAmzSignedHeaders = "veritatis";
            }};            

            DeleteEmailIdentityResponse res = sdk.sdk.deleteEmailIdentity(req);

            if (res.deleteEmailIdentityResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAccount

Obtain information about the email-sending status and capabilities of your Amazon Pinpoint account in the current AWS Region.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAccountRequest;
import org.openapis.openapi.models.operations.GetAccountResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("itaque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetAccountRequest req = new GetAccountRequest() {{
                xAmzAlgorithm = "incidunt";
                xAmzContentSha256 = "enim";
                xAmzCredential = "consequatur";
                xAmzDate = "est";
                xAmzSecurityToken = "quibusdam";
                xAmzSignature = "explicabo";
                xAmzSignedHeaders = "deserunt";
            }};            

            GetAccountResponse res = sdk.sdk.getAccount(req);

            if (res.getAccountResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getBlacklistReports

Retrieve a list of the blacklists that your dedicated IP addresses appear on.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetBlacklistReportsRequest;
import org.openapis.openapi.models.operations.GetBlacklistReportsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("distinctio") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetBlacklistReportsRequest req = new GetBlacklistReportsRequest(                new String[]{{
                                add("labore"),
                                add("modi"),
                                add("qui"),
                                add("aliquid"),
                            }}) {{
                xAmzAlgorithm = "cupiditate";
                xAmzContentSha256 = "quos";
                xAmzCredential = "perferendis";
                xAmzDate = "magni";
                xAmzSecurityToken = "assumenda";
                xAmzSignature = "ipsam";
                xAmzSignedHeaders = "alias";
            }};            

            GetBlacklistReportsResponse res = sdk.sdk.getBlacklistReports(req);

            if (res.getBlacklistReportsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getConfigurationSet

<p>Get information about an existing configuration set, including the dedicated IP pool that it's associated with, whether or not it's enabled for sending email, and more.</p> <p>In Amazon Pinpoint, <i>configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetConfigurationSetRequest;
import org.openapis.openapi.models.operations.GetConfigurationSetResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fugit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetConfigurationSetRequest req = new GetConfigurationSetRequest("dolorum") {{
                xAmzAlgorithm = "excepturi";
                xAmzContentSha256 = "tempora";
                xAmzCredential = "facilis";
                xAmzDate = "tempore";
                xAmzSecurityToken = "labore";
                xAmzSignature = "delectus";
                xAmzSignedHeaders = "eum";
            }};            

            GetConfigurationSetResponse res = sdk.sdk.getConfigurationSet(req);

            if (res.getConfigurationSetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getConfigurationSetEventDestinations

<p>Retrieve a list of event destinations that are associated with a configuration set.</p> <p>In Amazon Pinpoint, <i>events</i> include message sends, deliveries, opens, clicks, bounces, and complaints. <i>Event destinations</i> are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetConfigurationSetEventDestinationsRequest;
import org.openapis.openapi.models.operations.GetConfigurationSetEventDestinationsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("non") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetConfigurationSetEventDestinationsRequest req = new GetConfigurationSetEventDestinationsRequest("eligendi") {{
                xAmzAlgorithm = "sint";
                xAmzContentSha256 = "aliquid";
                xAmzCredential = "provident";
                xAmzDate = "necessitatibus";
                xAmzSecurityToken = "sint";
                xAmzSignature = "officia";
                xAmzSignedHeaders = "dolor";
            }};            

            GetConfigurationSetEventDestinationsResponse res = sdk.sdk.getConfigurationSetEventDestinations(req);

            if (res.getConfigurationSetEventDestinationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDedicatedIp

Get information about a dedicated IP address, including the name of the dedicated IP pool that it's associated with, as well information about the automatic warm-up process for the address.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDedicatedIpRequest;
import org.openapis.openapi.models.operations.GetDedicatedIpResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("debitis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDedicatedIpRequest req = new GetDedicatedIpRequest("a") {{
                xAmzAlgorithm = "dolorum";
                xAmzContentSha256 = "in";
                xAmzCredential = "in";
                xAmzDate = "illum";
                xAmzSecurityToken = "maiores";
                xAmzSignature = "rerum";
                xAmzSignedHeaders = "dicta";
            }};            

            GetDedicatedIpResponse res = sdk.sdk.getDedicatedIp(req);

            if (res.getDedicatedIpResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDedicatedIps

List the dedicated IP addresses that are associated with your Amazon Pinpoint account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDedicatedIpsRequest;
import org.openapis.openapi.models.operations.GetDedicatedIpsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("magnam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDedicatedIpsRequest req = new GetDedicatedIpsRequest() {{
                nextToken = "cumque";
                pageSize = 813798L;
                poolName = "ea";
                xAmzAlgorithm = "aliquid";
                xAmzContentSha256 = "laborum";
                xAmzCredential = "accusamus";
                xAmzDate = "non";
                xAmzSecurityToken = "occaecati";
                xAmzSignature = "enim";
                xAmzSignedHeaders = "accusamus";
            }};            

            GetDedicatedIpsResponse res = sdk.sdk.getDedicatedIps(req);

            if (res.getDedicatedIpsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeliverabilityDashboardOptions

<p>Retrieve information about the status of the Deliverability dashboard for your Amazon Pinpoint account. When the Deliverability dashboard is enabled, you gain access to reputation, deliverability, and other metrics for the domains that you use to send email using Amazon Pinpoint. You also gain the ability to perform predictive inbox placement tests.</p> <p>When you use the Deliverability dashboard, you pay a monthly subscription charge, in addition to any other fees that you accrue by using Amazon Pinpoint. For more information about the features and cost of a Deliverability dashboard subscription, see <a href="http://aws.amazon.com/pinpoint/pricing/">Amazon Pinpoint Pricing</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDeliverabilityDashboardOptionsRequest;
import org.openapis.openapi.models.operations.GetDeliverabilityDashboardOptionsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("delectus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDeliverabilityDashboardOptionsRequest req = new GetDeliverabilityDashboardOptionsRequest() {{
                xAmzAlgorithm = "quidem";
                xAmzContentSha256 = "provident";
                xAmzCredential = "nam";
                xAmzDate = "id";
                xAmzSecurityToken = "blanditiis";
                xAmzSignature = "deleniti";
                xAmzSignedHeaders = "sapiente";
            }};            

            GetDeliverabilityDashboardOptionsResponse res = sdk.sdk.getDeliverabilityDashboardOptions(req);

            if (res.getDeliverabilityDashboardOptionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeliverabilityTestReport

Retrieve the results of a predictive inbox placement test.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDeliverabilityTestReportRequest;
import org.openapis.openapi.models.operations.GetDeliverabilityTestReportResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("amet") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDeliverabilityTestReportRequest req = new GetDeliverabilityTestReportRequest("deserunt") {{
                xAmzAlgorithm = "nisi";
                xAmzContentSha256 = "vel";
                xAmzCredential = "natus";
                xAmzDate = "omnis";
                xAmzSecurityToken = "molestiae";
                xAmzSignature = "perferendis";
                xAmzSignedHeaders = "nihil";
            }};            

            GetDeliverabilityTestReportResponse res = sdk.sdk.getDeliverabilityTestReport(req);

            if (res.getDeliverabilityTestReportResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDomainDeliverabilityCampaign

Retrieve all the deliverability data for a specific campaign. This data is available for a campaign only if the campaign sent email by using a domain that the Deliverability dashboard is enabled for (<code>PutDeliverabilityDashboardOption</code> operation).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDomainDeliverabilityCampaignRequest;
import org.openapis.openapi.models.operations.GetDomainDeliverabilityCampaignResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("magnam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDomainDeliverabilityCampaignRequest req = new GetDomainDeliverabilityCampaignRequest("distinctio") {{
                xAmzAlgorithm = "id";
                xAmzContentSha256 = "labore";
                xAmzCredential = "labore";
                xAmzDate = "suscipit";
                xAmzSecurityToken = "natus";
                xAmzSignature = "nobis";
                xAmzSignedHeaders = "eum";
            }};            

            GetDomainDeliverabilityCampaignResponse res = sdk.sdk.getDomainDeliverabilityCampaign(req);

            if (res.getDomainDeliverabilityCampaignResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDomainStatisticsReport

Retrieve inbox placement and engagement rates for the domains that you use to send email.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDomainStatisticsReportRequest;
import org.openapis.openapi.models.operations.GetDomainStatisticsReportResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vero") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDomainStatisticsReportRequest req = new GetDomainStatisticsReportRequest("aspernatur", OffsetDateTime.parse("2022-09-14T03:02:47.808Z"), OffsetDateTime.parse("2022-06-06T23:06:26.119Z")) {{
                xAmzAlgorithm = "ullam";
                xAmzContentSha256 = "provident";
                xAmzCredential = "quos";
                xAmzDate = "sint";
                xAmzSecurityToken = "accusantium";
                xAmzSignature = "mollitia";
                xAmzSignedHeaders = "reiciendis";
            }};            

            GetDomainStatisticsReportResponse res = sdk.sdk.getDomainStatisticsReport(req);

            if (res.getDomainStatisticsReportResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getEmailIdentity

Provides information about a specific identity associated with your Amazon Pinpoint account, including the identity's verification status, its DKIM authentication status, and its custom Mail-From settings.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEmailIdentityRequest;
import org.openapis.openapi.models.operations.GetEmailIdentityResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("mollitia") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetEmailIdentityRequest req = new GetEmailIdentityRequest("ad") {{
                xAmzAlgorithm = "eum";
                xAmzContentSha256 = "dolor";
                xAmzCredential = "necessitatibus";
                xAmzDate = "odit";
                xAmzSecurityToken = "nemo";
                xAmzSignature = "quasi";
                xAmzSignedHeaders = "iure";
            }};            

            GetEmailIdentityResponse res = sdk.sdk.getEmailIdentity(req);

            if (res.getEmailIdentityResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listConfigurationSets

<p>List all of the configuration sets associated with your Amazon Pinpoint account in the current region.</p> <p>In Amazon Pinpoint, <i>configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListConfigurationSetsRequest;
import org.openapis.openapi.models.operations.ListConfigurationSetsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("doloribus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListConfigurationSetsRequest req = new ListConfigurationSetsRequest() {{
                nextToken = "debitis";
                pageSize = 260341L;
                xAmzAlgorithm = "maxime";
                xAmzContentSha256 = "deleniti";
                xAmzCredential = "facilis";
                xAmzDate = "in";
                xAmzSecurityToken = "architecto";
                xAmzSignature = "architecto";
                xAmzSignedHeaders = "repudiandae";
            }};            

            ListConfigurationSetsResponse res = sdk.sdk.listConfigurationSets(req);

            if (res.listConfigurationSetsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listDedicatedIpPools

List all of the dedicated IP pools that exist in your Amazon Pinpoint account in the current AWS Region.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListDedicatedIpPoolsRequest;
import org.openapis.openapi.models.operations.ListDedicatedIpPoolsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ullam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListDedicatedIpPoolsRequest req = new ListDedicatedIpPoolsRequest() {{
                nextToken = "expedita";
                pageSize = 469249L;
                xAmzAlgorithm = "repellat";
                xAmzContentSha256 = "quibusdam";
                xAmzCredential = "sed";
                xAmzDate = "saepe";
                xAmzSecurityToken = "pariatur";
                xAmzSignature = "accusantium";
                xAmzSignedHeaders = "consequuntur";
            }};            

            ListDedicatedIpPoolsResponse res = sdk.sdk.listDedicatedIpPools(req);

            if (res.listDedicatedIpPoolsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listDeliverabilityTestReports

Show a list of the predictive inbox placement tests that you've performed, regardless of their statuses. For predictive inbox placement tests that are complete, you can use the <code>GetDeliverabilityTestReport</code> operation to view the results.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListDeliverabilityTestReportsRequest;
import org.openapis.openapi.models.operations.ListDeliverabilityTestReportsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("praesentium") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListDeliverabilityTestReportsRequest req = new ListDeliverabilityTestReportsRequest() {{
                nextToken = "natus";
                pageSize = 166847L;
                xAmzAlgorithm = "sunt";
                xAmzContentSha256 = "quo";
                xAmzCredential = "illum";
                xAmzDate = "pariatur";
                xAmzSecurityToken = "maxime";
                xAmzSignature = "ea";
                xAmzSignedHeaders = "excepturi";
            }};            

            ListDeliverabilityTestReportsResponse res = sdk.sdk.listDeliverabilityTestReports(req);

            if (res.listDeliverabilityTestReportsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listDomainDeliverabilityCampaigns

Retrieve deliverability data for all the campaigns that used a specific domain to send email during a specified time range. This data is available for a domain only if you enabled the Deliverability dashboard (<code>PutDeliverabilityDashboardOption</code> operation) for the domain.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListDomainDeliverabilityCampaignsRequest;
import org.openapis.openapi.models.operations.ListDomainDeliverabilityCampaignsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("odit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListDomainDeliverabilityCampaignsRequest req = new ListDomainDeliverabilityCampaignsRequest(OffsetDateTime.parse("2022-12-19T20:58:17.857Z"), OffsetDateTime.parse("2022-01-07T08:38:36.147Z"), "quidem") {{
                nextToken = "ipsam";
                pageSize = 453543L;
                xAmzAlgorithm = "autem";
                xAmzContentSha256 = "nam";
                xAmzCredential = "eaque";
                xAmzDate = "pariatur";
                xAmzSecurityToken = "nemo";
                xAmzSignature = "voluptatibus";
                xAmzSignedHeaders = "perferendis";
            }};            

            ListDomainDeliverabilityCampaignsResponse res = sdk.sdk.listDomainDeliverabilityCampaigns(req);

            if (res.listDomainDeliverabilityCampaignsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listEmailIdentities

Returns a list of all of the email identities that are associated with your Amazon Pinpoint account. An identity can be either an email address or a domain. This operation returns identities that are verified as well as those that aren't.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListEmailIdentitiesRequest;
import org.openapis.openapi.models.operations.ListEmailIdentitiesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fugiat") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListEmailIdentitiesRequest req = new ListEmailIdentitiesRequest() {{
                nextToken = "amet";
                pageSize = 11714L;
                xAmzAlgorithm = "cumque";
                xAmzContentSha256 = "corporis";
                xAmzCredential = "hic";
                xAmzDate = "libero";
                xAmzSecurityToken = "nobis";
                xAmzSignature = "dolores";
                xAmzSignedHeaders = "quis";
            }};            

            ListEmailIdentitiesResponse res = sdk.sdk.listEmailIdentities(req);

            if (res.listEmailIdentitiesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTagsForResource

Retrieve a list of the tags (keys and values) that are associated with a specified resource. A <i>tag</i> is a label that you optionally define and associate with a resource in Amazon Pinpoint. Each tag consists of a required <i>tag key</i> and an optional associated <i>tag value</i>. A tag key is a general label that acts as a category for more specific tag values. A tag value acts as a descriptor within a tag key.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTagsForResourceRequest;
import org.openapis.openapi.models.operations.ListTagsForResourceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("totam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTagsForResourceRequest req = new ListTagsForResourceRequest("dignissimos") {{
                xAmzAlgorithm = "eaque";
                xAmzContentSha256 = "quis";
                xAmzCredential = "nesciunt";
                xAmzDate = "eos";
                xAmzSecurityToken = "perferendis";
                xAmzSignature = "dolores";
                xAmzSignedHeaders = "minus";
            }};            

            ListTagsForResourceResponse res = sdk.sdk.listTagsForResource(req);

            if (res.listTagsForResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putAccountDedicatedIpWarmupAttributes

Enable or disable the automatic warm-up feature for dedicated IP addresses.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutAccountDedicatedIpWarmupAttributesRequest;
import org.openapis.openapi.models.operations.PutAccountDedicatedIpWarmupAttributesRequestBody;
import org.openapis.openapi.models.operations.PutAccountDedicatedIpWarmupAttributesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutAccountDedicatedIpWarmupAttributesRequest req = new PutAccountDedicatedIpWarmupAttributesRequest(                new PutAccountDedicatedIpWarmupAttributesRequestBody() {{
                                autoWarmupEnabled = false;
                            }};) {{
                xAmzAlgorithm = "dolor";
                xAmzContentSha256 = "vero";
                xAmzCredential = "nostrum";
                xAmzDate = "hic";
                xAmzSecurityToken = "recusandae";
                xAmzSignature = "omnis";
                xAmzSignedHeaders = "facilis";
            }};            

            PutAccountDedicatedIpWarmupAttributesResponse res = sdk.sdk.putAccountDedicatedIpWarmupAttributes(req);

            if (res.putAccountDedicatedIpWarmupAttributesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putAccountSendingAttributes

Enable or disable the ability of your account to send email.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutAccountSendingAttributesRequest;
import org.openapis.openapi.models.operations.PutAccountSendingAttributesRequestBody;
import org.openapis.openapi.models.operations.PutAccountSendingAttributesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("perspiciatis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutAccountSendingAttributesRequest req = new PutAccountSendingAttributesRequest(                new PutAccountSendingAttributesRequestBody() {{
                                sendingEnabled = false;
                            }};) {{
                xAmzAlgorithm = "voluptatem";
                xAmzContentSha256 = "porro";
                xAmzCredential = "consequuntur";
                xAmzDate = "blanditiis";
                xAmzSecurityToken = "error";
                xAmzSignature = "eaque";
                xAmzSignedHeaders = "occaecati";
            }};            

            PutAccountSendingAttributesResponse res = sdk.sdk.putAccountSendingAttributes(req);

            if (res.putAccountSendingAttributesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putConfigurationSetDeliveryOptions

Associate a configuration set with a dedicated IP pool. You can use dedicated IP pools to create groups of dedicated IP addresses for sending specific types of email.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutConfigurationSetDeliveryOptionsRequest;
import org.openapis.openapi.models.operations.PutConfigurationSetDeliveryOptionsRequestBody;
import org.openapis.openapi.models.operations.PutConfigurationSetDeliveryOptionsRequestBodyTlsPolicyEnum;
import org.openapis.openapi.models.operations.PutConfigurationSetDeliveryOptionsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("rerum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutConfigurationSetDeliveryOptionsRequest req = new PutConfigurationSetDeliveryOptionsRequest("adipisci",                 new PutConfigurationSetDeliveryOptionsRequestBody() {{
                                sendingPoolName = "asperiores";
                                tlsPolicy = PutConfigurationSetDeliveryOptionsRequestBodyTlsPolicyEnum.OPTIONAL;
                            }};) {{
                xAmzAlgorithm = "modi";
                xAmzContentSha256 = "iste";
                xAmzCredential = "dolorum";
                xAmzDate = "deleniti";
                xAmzSecurityToken = "pariatur";
                xAmzSignature = "provident";
                xAmzSignedHeaders = "nobis";
            }};            

            PutConfigurationSetDeliveryOptionsResponse res = sdk.sdk.putConfigurationSetDeliveryOptions(req);

            if (res.putConfigurationSetDeliveryOptionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putConfigurationSetReputationOptions

Enable or disable collection of reputation metrics for emails that you send using a particular configuration set in a specific AWS Region.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutConfigurationSetReputationOptionsRequest;
import org.openapis.openapi.models.operations.PutConfigurationSetReputationOptionsRequestBody;
import org.openapis.openapi.models.operations.PutConfigurationSetReputationOptionsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("libero") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutConfigurationSetReputationOptionsRequest req = new PutConfigurationSetReputationOptionsRequest("delectus",                 new PutConfigurationSetReputationOptionsRequestBody() {{
                                reputationMetricsEnabled = false;
                            }};) {{
                xAmzAlgorithm = "quaerat";
                xAmzContentSha256 = "quos";
                xAmzCredential = "aliquid";
                xAmzDate = "dolorem";
                xAmzSecurityToken = "dolorem";
                xAmzSignature = "dolor";
                xAmzSignedHeaders = "qui";
            }};            

            PutConfigurationSetReputationOptionsResponse res = sdk.sdk.putConfigurationSetReputationOptions(req);

            if (res.putConfigurationSetReputationOptionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putConfigurationSetSendingOptions

Enable or disable email sending for messages that use a particular configuration set in a specific AWS Region.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutConfigurationSetSendingOptionsRequest;
import org.openapis.openapi.models.operations.PutConfigurationSetSendingOptionsRequestBody;
import org.openapis.openapi.models.operations.PutConfigurationSetSendingOptionsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutConfigurationSetSendingOptionsRequest req = new PutConfigurationSetSendingOptionsRequest("hic",                 new PutConfigurationSetSendingOptionsRequestBody() {{
                                sendingEnabled = false;
                            }};) {{
                xAmzAlgorithm = "excepturi";
                xAmzContentSha256 = "cum";
                xAmzCredential = "voluptate";
                xAmzDate = "dignissimos";
                xAmzSecurityToken = "reiciendis";
                xAmzSignature = "amet";
                xAmzSignedHeaders = "dolorum";
            }};            

            PutConfigurationSetSendingOptionsResponse res = sdk.sdk.putConfigurationSetSendingOptions(req);

            if (res.putConfigurationSetSendingOptionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putConfigurationSetTrackingOptions

Specify a custom domain to use for open and click tracking elements in email that you send using Amazon Pinpoint.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutConfigurationSetTrackingOptionsRequest;
import org.openapis.openapi.models.operations.PutConfigurationSetTrackingOptionsRequestBody;
import org.openapis.openapi.models.operations.PutConfigurationSetTrackingOptionsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("numquam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutConfigurationSetTrackingOptionsRequest req = new PutConfigurationSetTrackingOptionsRequest("veritatis",                 new PutConfigurationSetTrackingOptionsRequestBody() {{
                                customRedirectDomain = "ipsa";
                            }};) {{
                xAmzAlgorithm = "ipsa";
                xAmzContentSha256 = "iure";
                xAmzCredential = "odio";
                xAmzDate = "quaerat";
                xAmzSecurityToken = "accusamus";
                xAmzSignature = "quidem";
                xAmzSignedHeaders = "voluptatibus";
            }};            

            PutConfigurationSetTrackingOptionsResponse res = sdk.sdk.putConfigurationSetTrackingOptions(req);

            if (res.putConfigurationSetTrackingOptionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putDedicatedIpInPool

<p>Move a dedicated IP address to an existing dedicated IP pool.</p> <note> <p>The dedicated IP address that you specify must already exist, and must be associated with your Amazon Pinpoint account. </p> <p>The dedicated IP pool you specify must already exist. You can create a new pool by using the <code>CreateDedicatedIpPool</code> operation.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutDedicatedIpInPoolRequest;
import org.openapis.openapi.models.operations.PutDedicatedIpInPoolRequestBody;
import org.openapis.openapi.models.operations.PutDedicatedIpInPoolResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptas") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutDedicatedIpInPoolRequest req = new PutDedicatedIpInPoolRequest("natus",                 new PutDedicatedIpInPoolRequestBody("eos");) {{
                xAmzAlgorithm = "atque";
                xAmzContentSha256 = "sit";
                xAmzCredential = "fugiat";
                xAmzDate = "ab";
                xAmzSecurityToken = "soluta";
                xAmzSignature = "dolorum";
                xAmzSignedHeaders = "iusto";
            }};            

            PutDedicatedIpInPoolResponse res = sdk.sdk.putDedicatedIpInPool(req);

            if (res.putDedicatedIpInPoolResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putDedicatedIpWarmupAttributes

<p/>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutDedicatedIpWarmupAttributesRequest;
import org.openapis.openapi.models.operations.PutDedicatedIpWarmupAttributesRequestBody;
import org.openapis.openapi.models.operations.PutDedicatedIpWarmupAttributesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptate") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutDedicatedIpWarmupAttributesRequest req = new PutDedicatedIpWarmupAttributesRequest("dolorum",                 new PutDedicatedIpWarmupAttributesRequestBody(536579L);) {{
                xAmzAlgorithm = "omnis";
                xAmzContentSha256 = "necessitatibus";
                xAmzCredential = "distinctio";
                xAmzDate = "asperiores";
                xAmzSecurityToken = "nihil";
                xAmzSignature = "ipsum";
                xAmzSignedHeaders = "voluptate";
            }};            

            PutDedicatedIpWarmupAttributesResponse res = sdk.sdk.putDedicatedIpWarmupAttributes(req);

            if (res.putDedicatedIpWarmupAttributesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putDeliverabilityDashboardOption

<p>Enable or disable the Deliverability dashboard for your Amazon Pinpoint account. When you enable the Deliverability dashboard, you gain access to reputation, deliverability, and other metrics for the domains that you use to send email using Amazon Pinpoint. You also gain the ability to perform predictive inbox placement tests.</p> <p>When you use the Deliverability dashboard, you pay a monthly subscription charge, in addition to any other fees that you accrue by using Amazon Pinpoint. For more information about the features and cost of a Deliverability dashboard subscription, see <a href="http://aws.amazon.com/pinpoint/pricing/">Amazon Pinpoint Pricing</a>.</p>

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutDeliverabilityDashboardOptionRequest;
import org.openapis.openapi.models.operations.PutDeliverabilityDashboardOptionRequestBody;
import org.openapis.openapi.models.operations.PutDeliverabilityDashboardOptionResponse;
import org.openapis.openapi.models.shared.DomainDeliverabilityTrackingOption;
import org.openapis.openapi.models.shared.InboxPlacementTrackingOption;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("id") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutDeliverabilityDashboardOptionRequest req = new PutDeliverabilityDashboardOptionRequest(                new PutDeliverabilityDashboardOptionRequestBody(false) {{
                                subscribedDomains = new org.openapis.openapi.models.shared.DomainDeliverabilityTrackingOption[]{{
                                    add(new DomainDeliverabilityTrackingOption() {{
                                        domain = "eius";
                                        inboxPlacementTrackingOption = new InboxPlacementTrackingOption() {{
                                            global = false;
                                            trackedIsps = new String[]{{
                                                add("perferendis"),
                                            }};
                                        }};
                                        subscriptionStartDate = OffsetDateTime.parse("2022-03-30T04:36:10.591Z");
                                    }}),
                                    add(new DomainDeliverabilityTrackingOption() {{
                                        domain = "accusamus";
                                        inboxPlacementTrackingOption = new InboxPlacementTrackingOption() {{
                                            global = false;
                                            trackedIsps = new String[]{{
                                                add("saepe"),
                                                add("suscipit"),
                                            }};
                                        }};
                                        subscriptionStartDate = OffsetDateTime.parse("2021-10-28T12:41:02.358Z");
                                    }}),
                                    add(new DomainDeliverabilityTrackingOption() {{
                                        domain = "minima";
                                        inboxPlacementTrackingOption = new InboxPlacementTrackingOption() {{
                                            global = false;
                                            trackedIsps = new String[]{{
                                                add("totam"),
                                                add("similique"),
                                                add("alias"),
                                                add("at"),
                                            }};
                                        }};
                                        subscriptionStartDate = OffsetDateTime.parse("2022-09-23T03:46:17.712Z");
                                    }}),
                                    add(new DomainDeliverabilityTrackingOption() {{
                                        domain = "vel";
                                        inboxPlacementTrackingOption = new InboxPlacementTrackingOption() {{
                                            global = false;
                                            trackedIsps = new String[]{{
                                                add("officiis"),
                                                add("qui"),
                                                add("dolorum"),
                                                add("a"),
                                            }};
                                        }};
                                        subscriptionStartDate = OffsetDateTime.parse("2022-04-25T01:36:09.517Z");
                                    }}),
                                }};
                            }};) {{
                xAmzAlgorithm = "iusto";
                xAmzContentSha256 = "ipsum";
                xAmzCredential = "quisquam";
                xAmzDate = "tenetur";
                xAmzSecurityToken = "amet";
                xAmzSignature = "tempore";
                xAmzSignedHeaders = "accusamus";
            }};            

            PutDeliverabilityDashboardOptionResponse res = sdk.sdk.putDeliverabilityDashboardOption(req);

            if (res.putDeliverabilityDashboardOptionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putEmailIdentityDkimAttributes

Used to enable or disable DKIM authentication for an email identity.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutEmailIdentityDkimAttributesRequest;
import org.openapis.openapi.models.operations.PutEmailIdentityDkimAttributesRequestBody;
import org.openapis.openapi.models.operations.PutEmailIdentityDkimAttributesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("numquam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutEmailIdentityDkimAttributesRequest req = new PutEmailIdentityDkimAttributesRequest("enim",                 new PutEmailIdentityDkimAttributesRequestBody() {{
                                signingEnabled = false;
                            }};) {{
                xAmzAlgorithm = "dolorem";
                xAmzContentSha256 = "sapiente";
                xAmzCredential = "totam";
                xAmzDate = "nihil";
                xAmzSecurityToken = "sit";
                xAmzSignature = "expedita";
                xAmzSignedHeaders = "neque";
            }};            

            PutEmailIdentityDkimAttributesResponse res = sdk.sdk.putEmailIdentityDkimAttributes(req);

            if (res.putEmailIdentityDkimAttributesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putEmailIdentityFeedbackAttributes

<p>Used to enable or disable feedback forwarding for an identity. This setting determines what happens when an identity is used to send an email that results in a bounce or complaint event.</p> <p>When you enable feedback forwarding, Amazon Pinpoint sends you email notifications when bounce or complaint events occur. Amazon Pinpoint sends this notification to the address that you specified in the Return-Path header of the original email.</p> <p>When you disable feedback forwarding, Amazon Pinpoint sends notifications through other mechanisms, such as by notifying an Amazon SNS topic. You're required to have a method of tracking bounces and complaints. If you haven't set up another mechanism for receiving bounce or complaint notifications, Amazon Pinpoint sends an email notification when these events occur (even if this setting is disabled).</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutEmailIdentityFeedbackAttributesRequest;
import org.openapis.openapi.models.operations.PutEmailIdentityFeedbackAttributesRequestBody;
import org.openapis.openapi.models.operations.PutEmailIdentityFeedbackAttributesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sed") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutEmailIdentityFeedbackAttributesRequest req = new PutEmailIdentityFeedbackAttributesRequest("vel",                 new PutEmailIdentityFeedbackAttributesRequestBody() {{
                                emailForwardingEnabled = false;
                            }};) {{
                xAmzAlgorithm = "libero";
                xAmzContentSha256 = "voluptas";
                xAmzCredential = "deserunt";
                xAmzDate = "quam";
                xAmzSecurityToken = "ipsum";
                xAmzSignature = "incidunt";
                xAmzSignedHeaders = "qui";
            }};            

            PutEmailIdentityFeedbackAttributesResponse res = sdk.sdk.putEmailIdentityFeedbackAttributes(req);

            if (res.putEmailIdentityFeedbackAttributesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putEmailIdentityMailFromAttributes

Used to enable or disable the custom Mail-From domain configuration for an email identity.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutEmailIdentityMailFromAttributesRequest;
import org.openapis.openapi.models.operations.PutEmailIdentityMailFromAttributesRequestBody;
import org.openapis.openapi.models.operations.PutEmailIdentityMailFromAttributesRequestBodyBehaviorOnMxFailureEnum;
import org.openapis.openapi.models.operations.PutEmailIdentityMailFromAttributesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cupiditate") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutEmailIdentityMailFromAttributesRequest req = new PutEmailIdentityMailFromAttributesRequest("maxime",                 new PutEmailIdentityMailFromAttributesRequestBody() {{
                                behaviorOnMxFailure = PutEmailIdentityMailFromAttributesRequestBodyBehaviorOnMxFailureEnum.REJECT_MESSAGE;
                                mailFromDomain = "soluta";
                            }};) {{
                xAmzAlgorithm = "dicta";
                xAmzContentSha256 = "laborum";
                xAmzCredential = "totam";
                xAmzDate = "incidunt";
                xAmzSecurityToken = "aspernatur";
                xAmzSignature = "dolores";
                xAmzSignedHeaders = "distinctio";
            }};            

            PutEmailIdentityMailFromAttributesResponse res = sdk.sdk.putEmailIdentityMailFromAttributes(req);

            if (res.putEmailIdentityMailFromAttributesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## sendEmail

<p>Sends an email message. You can use the Amazon Pinpoint Email API to send two types of messages:</p> <ul> <li> <p> <b>Simple</b> – A standard email message. When you create this type of message, you specify the sender, the recipient, and the message body, and Amazon Pinpoint assembles the message for you.</p> </li> <li> <p> <b>Raw</b> – A raw, MIME-formatted email message. When you send this type of email, you have to specify all of the message headers, as well as the message body. You can use this message type to send messages that contain attachments. The message that you specify has to be a valid MIME message.</p> </li> </ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SendEmailRequest;
import org.openapis.openapi.models.operations.SendEmailRequestBody;
import org.openapis.openapi.models.operations.SendEmailRequestBodyContent;
import org.openapis.openapi.models.operations.SendEmailRequestBodyDestination;
import org.openapis.openapi.models.operations.SendEmailResponse;
import org.openapis.openapi.models.shared.Body;
import org.openapis.openapi.models.shared.Content;
import org.openapis.openapi.models.shared.Message;
import org.openapis.openapi.models.shared.MessageTag;
import org.openapis.openapi.models.shared.RawMessage;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Template;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("facilis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            SendEmailRequest req = new SendEmailRequest(                new SendEmailRequestBody(                new SendEmailRequestBodyContent() {{
                                                raw = new RawMessage("aliquid");;
                                                simple = new Message(                new Body() {{
                                                                    html = new Content("quam") {{
                                                                        charset = "molestias";
                                                                    }};;
                                                                    text = new Content("temporibus") {{
                                                                        charset = "qui";
                                                                    }};;
                                                                }};,                 new Content("neque") {{
                                                                    charset = "fugit";
                                                                }};);;
                                                template = new Template() {{
                                                    templateArn = "magni";
                                                    templateData = "odio";
                                                }};;
                                            }};,                 new SendEmailRequestBodyDestination() {{
                                                bccAddresses = new String[]{{
                                                    add("ullam"),
                                                }};
                                                ccAddresses = new String[]{{
                                                    add("hic"),
                                                    add("voluptatem"),
                                                    add("cumque"),
                                                }};
                                                toAddresses = new String[]{{
                                                    add("nobis"),
                                                    add("et"),
                                                    add("saepe"),
                                                }};
                                            }};) {{
                                configurationSetName = "ipsum";
                                emailTags = new org.openapis.openapi.models.shared.MessageTag[]{{
                                    add(new MessageTag("dolore", "labore") {{
                                        name = "Isaac Reynolds DVM";
                                        value = "dolorem";
                                    }}),
                                }};
                                feedbackForwardingEmailAddress = "adipisci";
                                fromEmailAddress = "dolorum";
                                replyToAddresses = new String[]{{
                                    add("quae"),
                                }};
                            }};) {{
                xAmzAlgorithm = "aut";
                xAmzContentSha256 = "quas";
                xAmzCredential = "itaque";
                xAmzDate = "consequatur";
                xAmzSecurityToken = "est";
                xAmzSignature = "repellendus";
                xAmzSignedHeaders = "porro";
            }};            

            SendEmailResponse res = sdk.sdk.sendEmail(req);

            if (res.sendEmailResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagResource

<p>Add one or more tags (keys and values) to a specified resource. A <i>tag</i> is a label that you optionally define and associate with a resource in Amazon Pinpoint. Tags can help you categorize and manage resources in different ways, such as by purpose, owner, environment, or other criteria. A resource can have as many as 50 tags.</p> <p>Each tag consists of a required <i>tag key</i> and an associated <i>tag value</i>, both of which you define. A tag key is a general label that acts as a category for more specific tag values. A tag value acts as a descriptor within a tag key.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagResourceRequest;
import org.openapis.openapi.models.operations.TagResourceRequestBody;
import org.openapis.openapi.models.operations.TagResourceResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("doloribus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagResourceRequest req = new TagResourceRequest(                new TagResourceRequestBody("ut",                 new org.openapis.openapi.models.shared.Tag[]{{
                                                add(new Tag("quae", "laudantium") {{
                                                    key = "cupiditate";
                                                    value = "qui";
                                                }}),
                                                add(new Tag("voluptatibus", "quisquam") {{
                                                    key = "odio";
                                                    value = "occaecati";
                                                }}),
                                                add(new Tag("quis", "ipsum") {{
                                                    key = "vero";
                                                    value = "omnis";
                                                }}),
                                            }});) {{
                xAmzAlgorithm = "delectus";
                xAmzContentSha256 = "voluptate";
                xAmzCredential = "consectetur";
                xAmzDate = "vero";
                xAmzSecurityToken = "tenetur";
                xAmzSignature = "dignissimos";
                xAmzSignedHeaders = "hic";
            }};            

            TagResourceResponse res = sdk.sdk.tagResource(req);

            if (res.tagResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## untagResource

Remove one or more tags (keys and values) from a specified resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UntagResourceRequest;
import org.openapis.openapi.models.operations.UntagResourceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("distinctio") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UntagResourceRequest req = new UntagResourceRequest("quod",                 new String[]{{
                                add("similique"),
                                add("facilis"),
                            }}) {{
                xAmzAlgorithm = "vero";
                xAmzContentSha256 = "ducimus";
                xAmzCredential = "dolore";
                xAmzDate = "quibusdam";
                xAmzSecurityToken = "illum";
                xAmzSignature = "sequi";
                xAmzSignedHeaders = "natus";
            }};            

            UntagResourceResponse res = sdk.sdk.untagResource(req);

            if (res.untagResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateConfigurationSetEventDestination

<p>Update the configuration of an event destination for a configuration set.</p> <p>In Amazon Pinpoint, <i>events</i> include message sends, deliveries, opens, clicks, bounces, and complaints. <i>Event destinations</i> are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateConfigurationSetEventDestinationRequest;
import org.openapis.openapi.models.operations.UpdateConfigurationSetEventDestinationRequestBody;
import org.openapis.openapi.models.operations.UpdateConfigurationSetEventDestinationRequestBodyEventDestination;
import org.openapis.openapi.models.operations.UpdateConfigurationSetEventDestinationResponse;
import org.openapis.openapi.models.shared.CloudWatchDestination;
import org.openapis.openapi.models.shared.CloudWatchDimensionConfiguration;
import org.openapis.openapi.models.shared.DimensionValueSourceEnum;
import org.openapis.openapi.models.shared.EventTypeEnum;
import org.openapis.openapi.models.shared.KinesisFirehoseDestination;
import org.openapis.openapi.models.shared.PinpointDestination;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SnsDestination;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("impedit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateConfigurationSetEventDestinationRequest req = new UpdateConfigurationSetEventDestinationRequest("aut", "voluptatibus",                 new UpdateConfigurationSetEventDestinationRequestBody(                new UpdateConfigurationSetEventDestinationRequestBodyEventDestination() {{
                                                cloudWatchDestination = new CloudWatchDestination(                new org.openapis.openapi.models.shared.CloudWatchDimensionConfiguration[]{{
                                                                    add(new CloudWatchDimensionConfiguration("maiores", "doloribus", DimensionValueSourceEnum.EMAIL_HEADER) {{
                                                                        defaultDimensionValue = "nulla";
                                                                        dimensionName = "fugit";
                                                                        dimensionValueSource = DimensionValueSourceEnum.LINK_TAG;
                                                                    }}),
                                                                    add(new CloudWatchDimensionConfiguration("officia", "tempora", DimensionValueSourceEnum.EMAIL_HEADER) {{
                                                                        defaultDimensionValue = "eligendi";
                                                                        dimensionName = "ducimus";
                                                                        dimensionValueSource = DimensionValueSourceEnum.MESSAGE_TAG;
                                                                    }}),
                                                                }});;
                                                enabled = false;
                                                kinesisFirehoseDestination = new KinesisFirehoseDestination("ea", "aspernatur");;
                                                matchingEventTypes = new org.openapis.openapi.models.shared.EventTypeEnum[]{{
                                                    add(EventTypeEnum.CLICK),
                                                    add(EventTypeEnum.BOUNCE),
                                                }};
                                                pinpointDestination = new PinpointDestination() {{
                                                    applicationArn = "ratione";
                                                }};;
                                                snsDestination = new SnsDestination("ex");;
                                            }};);) {{
                xAmzAlgorithm = "laudantium";
                xAmzContentSha256 = "dicta";
                xAmzCredential = "dolor";
                xAmzDate = "maiores";
                xAmzSecurityToken = "quasi";
                xAmzSignature = "ex";
                xAmzSignedHeaders = "nulla";
            }};            

            UpdateConfigurationSetEventDestinationResponse res = sdk.sdk.updateConfigurationSetEventDestination(req);

            if (res.updateConfigurationSetEventDestinationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
