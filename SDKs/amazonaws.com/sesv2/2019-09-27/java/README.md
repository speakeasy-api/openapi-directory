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
import org.openapis.openapi.models.operations.BatchGetMetricDataRequestBody;
import org.openapis.openapi.models.operations.BatchGetMetricDataRequest;
import org.openapis.openapi.models.operations.BatchGetMetricDataResponse;
import org.openapis.openapi.models.shared.BatchGetMetricDataQuery;
import org.openapis.openapi.models.shared.MetricNamespaceEnum;
import org.openapis.openapi.models.shared.MetricEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchGetMetricDataRequest req = new BatchGetMetricDataRequest() {{
                requestBody = new BatchGetMetricDataRequestBody() {{
                    queries = new org.openapis.openapi.models.shared.BatchGetMetricDataQuery[]{{
                        add(new BatchGetMetricDataQuery() {{
                            dimensions = new java.util.HashMap<String, String>() {{
                                put("distinctio", "quibusdam");
                                put("unde", "nulla");
                                put("corrupti", "illum");
                            }};
                            endDate = "2022-05-18T09:34:54.894Z";
                            id = "deserunt";
                            metric = "TRANSIENT_BOUNCE";
                            namespace = "VDM";
                            startDate = "2022-09-14T09:35:47.986Z";
                        }}),
                        add(new BatchGetMetricDataQuery() {{
                            dimensions = new java.util.HashMap<String, String>() {{
                                put("ipsa", "delectus");
                                put("tempora", "suscipit");
                                put("molestiae", "minus");
                                put("placeat", "voluptatum");
                            }};
                            endDate = "2022-06-07T15:55:46.205Z";
                            id = "nisi";
                            metric = "DELIVERY_COMPLAINT";
                            namespace = "VDM";
                            startDate = "2022-10-15T05:10:19.629Z";
                        }}),
                        add(new BatchGetMetricDataQuery() {{
                            dimensions = new java.util.HashMap<String, String>() {{
                                put("veritatis", "deserunt");
                                put("perferendis", "ipsam");
                            }};
                            endDate = "2020-02-17T21:57:45.117Z";
                            id = "quo";
                            metric = "COMPLAINT";
                            namespace = "VDM";
                            startDate = "2020-05-23T06:06:25.221Z";
                        }}),
                    }};
                }};
                xAmzAlgorithm = "maiores";
                xAmzContentSha256 = "molestiae";
                xAmzCredential = "quod";
                xAmzDate = "quod";
                xAmzSecurityToken = "esse";
                xAmzSignature = "totam";
                xAmzSignedHeaders = "porro";
            }}            

            BatchGetMetricDataResponse res = sdk.batchGetMetricData(req);

            if (res.batchGetMetricDataResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `batchGetMetricData` - <p>Retrieves batches of metric data collected based on your sending activity.</p> <p>You can execute this operation no more than 16 times per second, and with at most 160 queries from the batches per second (cumulative).</p>
* `createConfigurationSet` - Create a configuration set. <i>Configuration sets</i> are groups of rules that you can apply to the emails that you send. You apply a configuration set to an email by specifying the name of the configuration set when you call the Amazon SES API v2. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email. 
* `createConfigurationSetEventDestination` - <p>Create an event destination. <i>Events</i> include message sends, deliveries, opens, clicks, bounces, and complaints. <i>Event destinations</i> are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.</p> <p>A single configuration set can include more than one event destination.</p>
* `createContact` - Creates a contact, which is an end-user who is receiving the email, and adds them to a contact list.
* `createContactList` - Creates a contact list.
* `createCustomVerificationEmailTemplate` - <p>Creates a new custom verification email template.</p> <p>For more information about custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/dg/creating-identities.html#send-email-verify-address-custom">Using custom verification email templates</a> in the <i>Amazon SES Developer Guide</i>.</p> <p>You can execute this operation no more than once per second.</p>
* `createDedicatedIpPool` - Create a new pool of dedicated IP addresses. A pool can include one or more dedicated IP addresses that are associated with your Amazon Web Services account. You can associate a pool with a configuration set. When you send an email that uses that configuration set, the message is sent from one of the addresses in the associated pool.
* `createDeliverabilityTestReport` - Create a new predictive inbox placement test. Predictive inbox placement tests can help you predict how your messages will be handled by various email providers around the world. When you perform a predictive inbox placement test, you provide a sample message that contains the content that you plan to send to your customers. Amazon SES then sends that message to special email addresses spread across several major email providers. After about 24 hours, the test is complete, and you can use the <code>GetDeliverabilityTestReport</code> operation to view the results of the test.
* `createEmailIdentity` - <p>Starts the process of verifying an email identity. An <i>identity</i> is an email address or domain that you use when you send email. Before you can use an identity to send email, you first have to verify it. By verifying an identity, you demonstrate that you're the owner of the identity, and that you've given Amazon SES API v2 permission to send email from the identity.</p> <p>When you verify an email address, Amazon SES sends an email to the address. Your email address is verified as soon as you follow the link in the verification email. </p> <p>When you verify a domain without specifying the <code>DkimSigningAttributes</code> object, this operation provides a set of DKIM tokens. You can convert these tokens into CNAME records, which you then add to the DNS configuration for your domain. Your domain is verified when Amazon SES detects these records in the DNS configuration for your domain. This verification method is known as <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/easy-dkim.html">Easy DKIM</a>.</p> <p>Alternatively, you can perform the verification process by providing your own public-private key pair. This verification method is known as Bring Your Own DKIM (BYODKIM). To use BYODKIM, your call to the <code>CreateEmailIdentity</code> operation has to include the <code>DkimSigningAttributes</code> object. When you specify this object, you provide a selector (a component of the DNS record name that identifies the public key to use for DKIM authentication) and a private key.</p> <p>When you verify a domain, this operation provides a set of DKIM tokens, which you can convert into CNAME tokens. You add these CNAME tokens to the DNS configuration for your domain. Your domain is verified when Amazon SES detects these records in the DNS configuration for your domain. For some DNS providers, it can take 72 hours or more to complete the domain verification process.</p> <p>Additionally, you can associate an existing configuration set with the email identity that you're verifying.</p>
* `createEmailIdentityPolicy` - <p>Creates the specified sending authorization policy for the given identity (an email address or a domain).</p> <note> <p>This API is for the identity owner only. If you have not verified the identity, this API will return an error.</p> </note> <p>Sending authorization is a feature that enables an identity owner to authorize other senders to use its identities. For information about using sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
* `createEmailTemplate` - <p>Creates an email template. Email templates enable you to send personalized email to one or more destinations in a single API operation. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-personalized-email-api.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
* `createImportJob` - Creates an import job for a data destination.
* `deleteConfigurationSet` - <p>Delete an existing configuration set.</p> <p> <i>Configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p>
* `deleteConfigurationSetEventDestination` - <p>Delete an event destination.</p> <p> <i>Events</i> include message sends, deliveries, opens, clicks, bounces, and complaints. <i>Event destinations</i> are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.</p>
* `deleteContact` - Removes a contact from a contact list.
* `deleteContactList` - Deletes a contact list and all of the contacts on that list.
* `deleteCustomVerificationEmailTemplate` - <p>Deletes an existing custom verification email template.</p> <p>For more information about custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/dg/creating-identities.html#send-email-verify-address-custom">Using custom verification email templates</a> in the <i>Amazon SES Developer Guide</i>.</p> <p>You can execute this operation no more than once per second.</p>
* `deleteDedicatedIpPool` - Delete a dedicated IP pool.
* `deleteEmailIdentity` - Deletes an email identity. An identity can be either an email address or a domain name.
* `deleteEmailIdentityPolicy` - <p>Deletes the specified sending authorization policy for the given identity (an email address or a domain). This API returns successfully even if a policy with the specified name does not exist.</p> <note> <p>This API is for the identity owner only. If you have not verified the identity, this API will return an error.</p> </note> <p>Sending authorization is a feature that enables an identity owner to authorize other senders to use its identities. For information about using sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
* `deleteEmailTemplate` - <p>Deletes an email template.</p> <p>You can execute this operation no more than once per second.</p>
* `deleteSuppressedDestination` - Removes an email address from the suppression list for your account.
* `getAccount` - Obtain information about the email-sending status and capabilities of your Amazon SES account in the current Amazon Web Services Region.
* `getBlacklistReports` - Retrieve a list of the blacklists that your dedicated IP addresses appear on.
* `getConfigurationSet` - <p>Get information about an existing configuration set, including the dedicated IP pool that it's associated with, whether or not it's enabled for sending email, and more.</p> <p> <i>Configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p>
* `getConfigurationSetEventDestinations` - <p>Retrieve a list of event destinations that are associated with a configuration set.</p> <p> <i>Events</i> include message sends, deliveries, opens, clicks, bounces, and complaints. <i>Event destinations</i> are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.</p>
* `getContact` - Returns a contact from a contact list.
* `getContactList` - Returns contact list metadata. It does not return any information about the contacts present in the list.
* `getCustomVerificationEmailTemplate` - <p>Returns the custom email verification template for the template name you specify.</p> <p>For more information about custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/dg/creating-identities.html#send-email-verify-address-custom">Using custom verification email templates</a> in the <i>Amazon SES Developer Guide</i>.</p> <p>You can execute this operation no more than once per second.</p>
* `getDedicatedIp` - Get information about a dedicated IP address, including the name of the dedicated IP pool that it's associated with, as well information about the automatic warm-up process for the address.
* `getDedicatedIpPool` - Retrieve information about the dedicated pool.
* `getDedicatedIps` - List the dedicated IP addresses that are associated with your Amazon Web Services account.
* `getDeliverabilityDashboardOptions` - <p>Retrieve information about the status of the Deliverability dashboard for your account. When the Deliverability dashboard is enabled, you gain access to reputation, deliverability, and other metrics for the domains that you use to send email. You also gain the ability to perform predictive inbox placement tests.</p> <p>When you use the Deliverability dashboard, you pay a monthly subscription charge, in addition to any other fees that you accrue by using Amazon SES and other Amazon Web Services services. For more information about the features and cost of a Deliverability dashboard subscription, see <a href="http://aws.amazon.com/ses/pricing/">Amazon SES Pricing</a>.</p>
* `getDeliverabilityTestReport` - Retrieve the results of a predictive inbox placement test.
* `getDomainDeliverabilityCampaign` - Retrieve all the deliverability data for a specific campaign. This data is available for a campaign only if the campaign sent email by using a domain that the Deliverability dashboard is enabled for.
* `getDomainStatisticsReport` - Retrieve inbox placement and engagement rates for the domains that you use to send email.
* `getEmailIdentity` - Provides information about a specific identity, including the identity's verification status, sending authorization policies, its DKIM authentication status, and its custom Mail-From settings.
* `getEmailIdentityPolicies` - <p>Returns the requested sending authorization policies for the given identity (an email address or a domain). The policies are returned as a map of policy names to policy contents. You can retrieve a maximum of 20 policies at a time.</p> <note> <p>This API is for the identity owner only. If you have not verified the identity, this API will return an error.</p> </note> <p>Sending authorization is a feature that enables an identity owner to authorize other senders to use its identities. For information about using sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
* `getEmailTemplate` - <p>Displays the template object (which includes the subject line, HTML part and text part) for the template you specify.</p> <p>You can execute this operation no more than once per second.</p>
* `getImportJob` - Provides information about an import job.
* `getSuppressedDestination` - Retrieves information about a specific email address that's on the suppression list for your account.
* `listConfigurationSets` - <p>List all of the configuration sets associated with your account in the current region.</p> <p> <i>Configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p>
* `listContactLists` - Lists all of the contact lists available.
* `listContacts` - Lists the contacts present in a specific contact list.
* `listCustomVerificationEmailTemplates` - <p>Lists the existing custom verification email templates for your account in the current Amazon Web Services Region.</p> <p>For more information about custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/dg/creating-identities.html#send-email-verify-address-custom">Using custom verification email templates</a> in the <i>Amazon SES Developer Guide</i>.</p> <p>You can execute this operation no more than once per second.</p>
* `listDedicatedIpPools` - List all of the dedicated IP pools that exist in your Amazon Web Services account in the current Region.
* `listDeliverabilityTestReports` - Show a list of the predictive inbox placement tests that you've performed, regardless of their statuses. For predictive inbox placement tests that are complete, you can use the <code>GetDeliverabilityTestReport</code> operation to view the results.
* `listDomainDeliverabilityCampaigns` - Retrieve deliverability data for all the campaigns that used a specific domain to send email during a specified time range. This data is available for a domain only if you enabled the Deliverability dashboard for the domain.
* `listEmailIdentities` - Returns a list of all of the email identities that are associated with your Amazon Web Services account. An identity can be either an email address or a domain. This operation returns identities that are verified as well as those that aren't. This operation returns identities that are associated with Amazon SES and Amazon Pinpoint.
* `listEmailTemplates` - <p>Lists the email templates present in your Amazon SES account in the current Amazon Web Services Region.</p> <p>You can execute this operation no more than once per second.</p>
* `listImportJobs` - Lists all of the import jobs.
* `listRecommendations` - <p>Lists the recommendations present in your Amazon SES account in the current Amazon Web Services Region.</p> <p>You can execute this operation no more than once per second.</p>
* `listSuppressedDestinations` - Retrieves a list of email addresses that are on the suppression list for your account.
* `listTagsForResource` - Retrieve a list of the tags (keys and values) that are associated with a specified resource. A <i>tag</i> is a label that you optionally define and associate with a resource. Each tag consists of a required <i>tag key</i> and an optional associated <i>tag value</i>. A tag key is a general label that acts as a category for more specific tag values. A tag value acts as a descriptor within a tag key.
* `putAccountDedicatedIpWarmupAttributes` - Enable or disable the automatic warm-up feature for dedicated IP addresses.
* `putAccountDetails` - Update your Amazon SES account details.
* `putAccountSendingAttributes` - Enable or disable the ability of your account to send email.
* `putAccountSuppressionAttributes` - Change the settings for the account-level suppression list.
* `putAccountVdmAttributes` - <p>Update your Amazon SES account VDM attributes.</p> <p>You can execute this operation no more than once per second.</p>
* `putConfigurationSetDeliveryOptions` - Associate a configuration set with a dedicated IP pool. You can use dedicated IP pools to create groups of dedicated IP addresses for sending specific types of email.
* `putConfigurationSetReputationOptions` - Enable or disable collection of reputation metrics for emails that you send using a particular configuration set in a specific Amazon Web Services Region.
* `putConfigurationSetSendingOptions` - Enable or disable email sending for messages that use a particular configuration set in a specific Amazon Web Services Region.
* `putConfigurationSetSuppressionOptions` - Specify the account suppression list preferences for a configuration set.
* `putConfigurationSetTrackingOptions` - Specify a custom domain to use for open and click tracking elements in email that you send.
* `putConfigurationSetVdmOptions` - <p>Specify VDM preferences for email that you send using the configuration set.</p> <p>You can execute this operation no more than once per second.</p>
* `putDedicatedIpInPool` - <p>Move a dedicated IP address to an existing dedicated IP pool.</p> <note> <p>The dedicated IP address that you specify must already exist, and must be associated with your Amazon Web Services account. </p> <p>The dedicated IP pool you specify must already exist. You can create a new pool by using the <code>CreateDedicatedIpPool</code> operation.</p> </note>
* `putDedicatedIpWarmupAttributes` - <p/>
* `putDeliverabilityDashboardOption` - <p>Enable or disable the Deliverability dashboard. When you enable the Deliverability dashboard, you gain access to reputation, deliverability, and other metrics for the domains that you use to send email. You also gain the ability to perform predictive inbox placement tests.</p> <p>When you use the Deliverability dashboard, you pay a monthly subscription charge, in addition to any other fees that you accrue by using Amazon SES and other Amazon Web Services services. For more information about the features and cost of a Deliverability dashboard subscription, see <a href="http://aws.amazon.com/ses/pricing/">Amazon SES Pricing</a>.</p>
* `putEmailIdentityConfigurationSetAttributes` - Used to associate a configuration set with an email identity.
* `putEmailIdentityDkimAttributes` - Used to enable or disable DKIM authentication for an email identity.
* `putEmailIdentityDkimSigningAttributes` - <p>Used to configure or change the DKIM authentication settings for an email domain identity. You can use this operation to do any of the following:</p> <ul> <li> <p>Update the signing attributes for an identity that uses Bring Your Own DKIM (BYODKIM).</p> </li> <li> <p>Update the key length that should be used for Easy DKIM.</p> </li> <li> <p>Change from using no DKIM authentication to using Easy DKIM.</p> </li> <li> <p>Change from using no DKIM authentication to using BYODKIM.</p> </li> <li> <p>Change from using Easy DKIM to using BYODKIM.</p> </li> <li> <p>Change from using BYODKIM to using Easy DKIM.</p> </li> </ul>
* `putEmailIdentityFeedbackAttributes` - <p>Used to enable or disable feedback forwarding for an identity. This setting determines what happens when an identity is used to send an email that results in a bounce or complaint event.</p> <p>If the value is <code>true</code>, you receive email notifications when bounce or complaint events occur. These notifications are sent to the address that you specified in the <code>Return-Path</code> header of the original email.</p> <p>You're required to have a method of tracking bounces and complaints. If you haven't set up another mechanism for receiving bounce or complaint notifications (for example, by setting up an event destination), you receive an email notification when these events occur (even if this setting is disabled).</p>
* `putEmailIdentityMailFromAttributes` - Used to enable or disable the custom Mail-From domain configuration for an email identity.
* `putSuppressedDestination` - Adds an email address to the suppression list for your account.
* `sendBulkEmail` - Composes an email message to multiple destinations.
* `sendCustomVerificationEmail` - <p>Adds an email address to the list of identities for your Amazon SES account in the current Amazon Web Services Region and attempts to verify it. As a result of executing this operation, a customized verification email is sent to the specified address.</p> <p>To use this operation, you must first create a custom verification email template. For more information about creating and using custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/dg/creating-identities.html#send-email-verify-address-custom">Using custom verification email templates</a> in the <i>Amazon SES Developer Guide</i>.</p> <p>You can execute this operation no more than once per second.</p>
* `sendEmail` - <p>Sends an email message. You can use the Amazon SES API v2 to send the following types of messages:</p> <ul> <li> <p> <b>Simple</b> – A standard email message. When you create this type of message, you specify the sender, the recipient, and the message body, and Amazon SES assembles the message for you.</p> </li> <li> <p> <b>Raw</b> – A raw, MIME-formatted email message. When you send this type of email, you have to specify all of the message headers, as well as the message body. You can use this message type to send messages that contain attachments. The message that you specify has to be a valid MIME message.</p> </li> <li> <p> <b>Templated</b> – A message that contains personalization tags. When you send this type of email, Amazon SES API v2 automatically replaces the tags with values that you specify.</p> </li> </ul>
* `tagResource` - <p>Add one or more tags (keys and values) to a specified resource. A <i>tag</i> is a label that you optionally define and associate with a resource. Tags can help you categorize and manage resources in different ways, such as by purpose, owner, environment, or other criteria. A resource can have as many as 50 tags.</p> <p>Each tag consists of a required <i>tag key</i> and an associated <i>tag value</i>, both of which you define. A tag key is a general label that acts as a category for more specific tag values. A tag value acts as a descriptor within a tag key.</p>
* `testRenderEmailTemplate` - <p>Creates a preview of the MIME content of an email when provided with a template and a set of replacement data.</p> <p>You can execute this operation no more than once per second.</p>
* `untagResource` - Remove one or more tags (keys and values) from a specified resource.
* `updateConfigurationSetEventDestination` - <p>Update the configuration of an event destination for a configuration set.</p> <p> <i>Events</i> include message sends, deliveries, opens, clicks, bounces, and complaints. <i>Event destinations</i> are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.</p>
* `updateContact` - Updates a contact's preferences for a list. It is not necessary to specify all existing topic preferences in the TopicPreferences object, just the ones that need updating.
* `updateContactList` - Updates contact list metadata. This operation does a complete replacement.
* `updateCustomVerificationEmailTemplate` - <p>Updates an existing custom verification email template.</p> <p>For more information about custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/dg/creating-identities.html#send-email-verify-address-custom">Using custom verification email templates</a> in the <i>Amazon SES Developer Guide</i>.</p> <p>You can execute this operation no more than once per second.</p>
* `updateEmailIdentityPolicy` - <p>Updates the specified sending authorization policy for the given identity (an email address or a domain). This API returns successfully even if a policy with the specified name does not exist.</p> <note> <p>This API is for the identity owner only. If you have not verified the identity, this API will return an error.</p> </note> <p>Sending authorization is a feature that enables an identity owner to authorize other senders to use its identities. For information about using sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
* `updateEmailTemplate` - <p>Updates an email template. Email templates enable you to send personalized email to one or more destinations in a single API operation. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-personalized-email-api.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
