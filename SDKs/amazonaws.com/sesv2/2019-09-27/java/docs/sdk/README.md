# SDK

## Overview

<fullname>Amazon SES API v2</fullname> <p> <a href="http://aws.amazon.com/ses">Amazon SES</a> is an Amazon Web Services service that you can use to send email messages to your customers.</p> <p>If you're new to Amazon SES API v2, you might find it helpful to review the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/">Amazon Simple Email Service Developer Guide</a>. The <i>Amazon SES Developer Guide</i> provides information and code samples that demonstrate how to use Amazon SES API v2 features programmatically.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/email/>
### Available Operations

* [batchGetMetricData](#batchgetmetricdata) - <p>Retrieves batches of metric data collected based on your sending activity.</p> <p>You can execute this operation no more than 16 times per second, and with at most 160 queries from the batches per second (cumulative).</p>
* [createConfigurationSet](#createconfigurationset) - Create a configuration set. <i>Configuration sets</i> are groups of rules that you can apply to the emails that you send. You apply a configuration set to an email by specifying the name of the configuration set when you call the Amazon SES API v2. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email. 
* [createConfigurationSetEventDestination](#createconfigurationseteventdestination) - <p>Create an event destination. <i>Events</i> include message sends, deliveries, opens, clicks, bounces, and complaints. <i>Event destinations</i> are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.</p> <p>A single configuration set can include more than one event destination.</p>
* [createContact](#createcontact) - Creates a contact, which is an end-user who is receiving the email, and adds them to a contact list.
* [createContactList](#createcontactlist) - Creates a contact list.
* [createCustomVerificationEmailTemplate](#createcustomverificationemailtemplate) - <p>Creates a new custom verification email template.</p> <p>For more information about custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/dg/creating-identities.html#send-email-verify-address-custom">Using custom verification email templates</a> in the <i>Amazon SES Developer Guide</i>.</p> <p>You can execute this operation no more than once per second.</p>
* [createDedicatedIpPool](#creatededicatedippool) - Create a new pool of dedicated IP addresses. A pool can include one or more dedicated IP addresses that are associated with your Amazon Web Services account. You can associate a pool with a configuration set. When you send an email that uses that configuration set, the message is sent from one of the addresses in the associated pool.
* [createDeliverabilityTestReport](#createdeliverabilitytestreport) - Create a new predictive inbox placement test. Predictive inbox placement tests can help you predict how your messages will be handled by various email providers around the world. When you perform a predictive inbox placement test, you provide a sample message that contains the content that you plan to send to your customers. Amazon SES then sends that message to special email addresses spread across several major email providers. After about 24 hours, the test is complete, and you can use the <code>GetDeliverabilityTestReport</code> operation to view the results of the test.
* [createEmailIdentity](#createemailidentity) - <p>Starts the process of verifying an email identity. An <i>identity</i> is an email address or domain that you use when you send email. Before you can use an identity to send email, you first have to verify it. By verifying an identity, you demonstrate that you're the owner of the identity, and that you've given Amazon SES API v2 permission to send email from the identity.</p> <p>When you verify an email address, Amazon SES sends an email to the address. Your email address is verified as soon as you follow the link in the verification email. </p> <p>When you verify a domain without specifying the <code>DkimSigningAttributes</code> object, this operation provides a set of DKIM tokens. You can convert these tokens into CNAME records, which you then add to the DNS configuration for your domain. Your domain is verified when Amazon SES detects these records in the DNS configuration for your domain. This verification method is known as <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/easy-dkim.html">Easy DKIM</a>.</p> <p>Alternatively, you can perform the verification process by providing your own public-private key pair. This verification method is known as Bring Your Own DKIM (BYODKIM). To use BYODKIM, your call to the <code>CreateEmailIdentity</code> operation has to include the <code>DkimSigningAttributes</code> object. When you specify this object, you provide a selector (a component of the DNS record name that identifies the public key to use for DKIM authentication) and a private key.</p> <p>When you verify a domain, this operation provides a set of DKIM tokens, which you can convert into CNAME tokens. You add these CNAME tokens to the DNS configuration for your domain. Your domain is verified when Amazon SES detects these records in the DNS configuration for your domain. For some DNS providers, it can take 72 hours or more to complete the domain verification process.</p> <p>Additionally, you can associate an existing configuration set with the email identity that you're verifying.</p>
* [createEmailIdentityPolicy](#createemailidentitypolicy) - <p>Creates the specified sending authorization policy for the given identity (an email address or a domain).</p> <note> <p>This API is for the identity owner only. If you have not verified the identity, this API will return an error.</p> </note> <p>Sending authorization is a feature that enables an identity owner to authorize other senders to use its identities. For information about using sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
* [createEmailTemplate](#createemailtemplate) - <p>Creates an email template. Email templates enable you to send personalized email to one or more destinations in a single API operation. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-personalized-email-api.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
* [createImportJob](#createimportjob) - Creates an import job for a data destination.
* [deleteConfigurationSet](#deleteconfigurationset) - <p>Delete an existing configuration set.</p> <p> <i>Configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p>
* [deleteConfigurationSetEventDestination](#deleteconfigurationseteventdestination) - <p>Delete an event destination.</p> <p> <i>Events</i> include message sends, deliveries, opens, clicks, bounces, and complaints. <i>Event destinations</i> are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.</p>
* [deleteContact](#deletecontact) - Removes a contact from a contact list.
* [deleteContactList](#deletecontactlist) - Deletes a contact list and all of the contacts on that list.
* [deleteCustomVerificationEmailTemplate](#deletecustomverificationemailtemplate) - <p>Deletes an existing custom verification email template.</p> <p>For more information about custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/dg/creating-identities.html#send-email-verify-address-custom">Using custom verification email templates</a> in the <i>Amazon SES Developer Guide</i>.</p> <p>You can execute this operation no more than once per second.</p>
* [deleteDedicatedIpPool](#deletededicatedippool) - Delete a dedicated IP pool.
* [deleteEmailIdentity](#deleteemailidentity) - Deletes an email identity. An identity can be either an email address or a domain name.
* [deleteEmailIdentityPolicy](#deleteemailidentitypolicy) - <p>Deletes the specified sending authorization policy for the given identity (an email address or a domain). This API returns successfully even if a policy with the specified name does not exist.</p> <note> <p>This API is for the identity owner only. If you have not verified the identity, this API will return an error.</p> </note> <p>Sending authorization is a feature that enables an identity owner to authorize other senders to use its identities. For information about using sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
* [deleteEmailTemplate](#deleteemailtemplate) - <p>Deletes an email template.</p> <p>You can execute this operation no more than once per second.</p>
* [deleteSuppressedDestination](#deletesuppresseddestination) - Removes an email address from the suppression list for your account.
* [getAccount](#getaccount) - Obtain information about the email-sending status and capabilities of your Amazon SES account in the current Amazon Web Services Region.
* [getBlacklistReports](#getblacklistreports) - Retrieve a list of the blacklists that your dedicated IP addresses appear on.
* [getConfigurationSet](#getconfigurationset) - <p>Get information about an existing configuration set, including the dedicated IP pool that it's associated with, whether or not it's enabled for sending email, and more.</p> <p> <i>Configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p>
* [getConfigurationSetEventDestinations](#getconfigurationseteventdestinations) - <p>Retrieve a list of event destinations that are associated with a configuration set.</p> <p> <i>Events</i> include message sends, deliveries, opens, clicks, bounces, and complaints. <i>Event destinations</i> are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.</p>
* [getContact](#getcontact) - Returns a contact from a contact list.
* [getContactList](#getcontactlist) - Returns contact list metadata. It does not return any information about the contacts present in the list.
* [getCustomVerificationEmailTemplate](#getcustomverificationemailtemplate) - <p>Returns the custom email verification template for the template name you specify.</p> <p>For more information about custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/dg/creating-identities.html#send-email-verify-address-custom">Using custom verification email templates</a> in the <i>Amazon SES Developer Guide</i>.</p> <p>You can execute this operation no more than once per second.</p>
* [getDedicatedIp](#getdedicatedip) - Get information about a dedicated IP address, including the name of the dedicated IP pool that it's associated with, as well information about the automatic warm-up process for the address.
* [getDedicatedIpPool](#getdedicatedippool) - Retrieve information about the dedicated pool.
* [getDedicatedIps](#getdedicatedips) - List the dedicated IP addresses that are associated with your Amazon Web Services account.
* [getDeliverabilityDashboardOptions](#getdeliverabilitydashboardoptions) - <p>Retrieve information about the status of the Deliverability dashboard for your account. When the Deliverability dashboard is enabled, you gain access to reputation, deliverability, and other metrics for the domains that you use to send email. You also gain the ability to perform predictive inbox placement tests.</p> <p>When you use the Deliverability dashboard, you pay a monthly subscription charge, in addition to any other fees that you accrue by using Amazon SES and other Amazon Web Services services. For more information about the features and cost of a Deliverability dashboard subscription, see <a href="http://aws.amazon.com/ses/pricing/">Amazon SES Pricing</a>.</p>
* [getDeliverabilityTestReport](#getdeliverabilitytestreport) - Retrieve the results of a predictive inbox placement test.
* [getDomainDeliverabilityCampaign](#getdomaindeliverabilitycampaign) - Retrieve all the deliverability data for a specific campaign. This data is available for a campaign only if the campaign sent email by using a domain that the Deliverability dashboard is enabled for.
* [getDomainStatisticsReport](#getdomainstatisticsreport) - Retrieve inbox placement and engagement rates for the domains that you use to send email.
* [getEmailIdentity](#getemailidentity) - Provides information about a specific identity, including the identity's verification status, sending authorization policies, its DKIM authentication status, and its custom Mail-From settings.
* [getEmailIdentityPolicies](#getemailidentitypolicies) - <p>Returns the requested sending authorization policies for the given identity (an email address or a domain). The policies are returned as a map of policy names to policy contents. You can retrieve a maximum of 20 policies at a time.</p> <note> <p>This API is for the identity owner only. If you have not verified the identity, this API will return an error.</p> </note> <p>Sending authorization is a feature that enables an identity owner to authorize other senders to use its identities. For information about using sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
* [getEmailTemplate](#getemailtemplate) - <p>Displays the template object (which includes the subject line, HTML part and text part) for the template you specify.</p> <p>You can execute this operation no more than once per second.</p>
* [getImportJob](#getimportjob) - Provides information about an import job.
* [getSuppressedDestination](#getsuppresseddestination) - Retrieves information about a specific email address that's on the suppression list for your account.
* [listConfigurationSets](#listconfigurationsets) - <p>List all of the configuration sets associated with your account in the current region.</p> <p> <i>Configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p>
* [listContactLists](#listcontactlists) - Lists all of the contact lists available.
* [listContacts](#listcontacts) - Lists the contacts present in a specific contact list.
* [listCustomVerificationEmailTemplates](#listcustomverificationemailtemplates) - <p>Lists the existing custom verification email templates for your account in the current Amazon Web Services Region.</p> <p>For more information about custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/dg/creating-identities.html#send-email-verify-address-custom">Using custom verification email templates</a> in the <i>Amazon SES Developer Guide</i>.</p> <p>You can execute this operation no more than once per second.</p>
* [listDedicatedIpPools](#listdedicatedippools) - List all of the dedicated IP pools that exist in your Amazon Web Services account in the current Region.
* [listDeliverabilityTestReports](#listdeliverabilitytestreports) - Show a list of the predictive inbox placement tests that you've performed, regardless of their statuses. For predictive inbox placement tests that are complete, you can use the <code>GetDeliverabilityTestReport</code> operation to view the results.
* [listDomainDeliverabilityCampaigns](#listdomaindeliverabilitycampaigns) - Retrieve deliverability data for all the campaigns that used a specific domain to send email during a specified time range. This data is available for a domain only if you enabled the Deliverability dashboard for the domain.
* [listEmailIdentities](#listemailidentities) - Returns a list of all of the email identities that are associated with your Amazon Web Services account. An identity can be either an email address or a domain. This operation returns identities that are verified as well as those that aren't. This operation returns identities that are associated with Amazon SES and Amazon Pinpoint.
* [listEmailTemplates](#listemailtemplates) - <p>Lists the email templates present in your Amazon SES account in the current Amazon Web Services Region.</p> <p>You can execute this operation no more than once per second.</p>
* [listImportJobs](#listimportjobs) - Lists all of the import jobs.
* [listRecommendations](#listrecommendations) - <p>Lists the recommendations present in your Amazon SES account in the current Amazon Web Services Region.</p> <p>You can execute this operation no more than once per second.</p>
* [listSuppressedDestinations](#listsuppresseddestinations) - Retrieves a list of email addresses that are on the suppression list for your account.
* [listTagsForResource](#listtagsforresource) - Retrieve a list of the tags (keys and values) that are associated with a specified resource. A <i>tag</i> is a label that you optionally define and associate with a resource. Each tag consists of a required <i>tag key</i> and an optional associated <i>tag value</i>. A tag key is a general label that acts as a category for more specific tag values. A tag value acts as a descriptor within a tag key.
* [putAccountDedicatedIpWarmupAttributes](#putaccountdedicatedipwarmupattributes) - Enable or disable the automatic warm-up feature for dedicated IP addresses.
* [putAccountDetails](#putaccountdetails) - Update your Amazon SES account details.
* [putAccountSendingAttributes](#putaccountsendingattributes) - Enable or disable the ability of your account to send email.
* [putAccountSuppressionAttributes](#putaccountsuppressionattributes) - Change the settings for the account-level suppression list.
* [putAccountVdmAttributes](#putaccountvdmattributes) - <p>Update your Amazon SES account VDM attributes.</p> <p>You can execute this operation no more than once per second.</p>
* [putConfigurationSetDeliveryOptions](#putconfigurationsetdeliveryoptions) - Associate a configuration set with a dedicated IP pool. You can use dedicated IP pools to create groups of dedicated IP addresses for sending specific types of email.
* [putConfigurationSetReputationOptions](#putconfigurationsetreputationoptions) - Enable or disable collection of reputation metrics for emails that you send using a particular configuration set in a specific Amazon Web Services Region.
* [putConfigurationSetSendingOptions](#putconfigurationsetsendingoptions) - Enable or disable email sending for messages that use a particular configuration set in a specific Amazon Web Services Region.
* [putConfigurationSetSuppressionOptions](#putconfigurationsetsuppressionoptions) - Specify the account suppression list preferences for a configuration set.
* [putConfigurationSetTrackingOptions](#putconfigurationsettrackingoptions) - Specify a custom domain to use for open and click tracking elements in email that you send.
* [putConfigurationSetVdmOptions](#putconfigurationsetvdmoptions) - <p>Specify VDM preferences for email that you send using the configuration set.</p> <p>You can execute this operation no more than once per second.</p>
* [putDedicatedIpInPool](#putdedicatedipinpool) - <p>Move a dedicated IP address to an existing dedicated IP pool.</p> <note> <p>The dedicated IP address that you specify must already exist, and must be associated with your Amazon Web Services account. </p> <p>The dedicated IP pool you specify must already exist. You can create a new pool by using the <code>CreateDedicatedIpPool</code> operation.</p> </note>
* [putDedicatedIpWarmupAttributes](#putdedicatedipwarmupattributes) - <p/>
* [putDeliverabilityDashboardOption](#putdeliverabilitydashboardoption) - <p>Enable or disable the Deliverability dashboard. When you enable the Deliverability dashboard, you gain access to reputation, deliverability, and other metrics for the domains that you use to send email. You also gain the ability to perform predictive inbox placement tests.</p> <p>When you use the Deliverability dashboard, you pay a monthly subscription charge, in addition to any other fees that you accrue by using Amazon SES and other Amazon Web Services services. For more information about the features and cost of a Deliverability dashboard subscription, see <a href="http://aws.amazon.com/ses/pricing/">Amazon SES Pricing</a>.</p>
* [putEmailIdentityConfigurationSetAttributes](#putemailidentityconfigurationsetattributes) - Used to associate a configuration set with an email identity.
* [putEmailIdentityDkimAttributes](#putemailidentitydkimattributes) - Used to enable or disable DKIM authentication for an email identity.
* [putEmailIdentityDkimSigningAttributes](#putemailidentitydkimsigningattributes) - <p>Used to configure or change the DKIM authentication settings for an email domain identity. You can use this operation to do any of the following:</p> <ul> <li> <p>Update the signing attributes for an identity that uses Bring Your Own DKIM (BYODKIM).</p> </li> <li> <p>Update the key length that should be used for Easy DKIM.</p> </li> <li> <p>Change from using no DKIM authentication to using Easy DKIM.</p> </li> <li> <p>Change from using no DKIM authentication to using BYODKIM.</p> </li> <li> <p>Change from using Easy DKIM to using BYODKIM.</p> </li> <li> <p>Change from using BYODKIM to using Easy DKIM.</p> </li> </ul>
* [putEmailIdentityFeedbackAttributes](#putemailidentityfeedbackattributes) - <p>Used to enable or disable feedback forwarding for an identity. This setting determines what happens when an identity is used to send an email that results in a bounce or complaint event.</p> <p>If the value is <code>true</code>, you receive email notifications when bounce or complaint events occur. These notifications are sent to the address that you specified in the <code>Return-Path</code> header of the original email.</p> <p>You're required to have a method of tracking bounces and complaints. If you haven't set up another mechanism for receiving bounce or complaint notifications (for example, by setting up an event destination), you receive an email notification when these events occur (even if this setting is disabled).</p>
* [putEmailIdentityMailFromAttributes](#putemailidentitymailfromattributes) - Used to enable or disable the custom Mail-From domain configuration for an email identity.
* [putSuppressedDestination](#putsuppresseddestination) - Adds an email address to the suppression list for your account.
* [sendBulkEmail](#sendbulkemail) - Composes an email message to multiple destinations.
* [sendCustomVerificationEmail](#sendcustomverificationemail) - <p>Adds an email address to the list of identities for your Amazon SES account in the current Amazon Web Services Region and attempts to verify it. As a result of executing this operation, a customized verification email is sent to the specified address.</p> <p>To use this operation, you must first create a custom verification email template. For more information about creating and using custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/dg/creating-identities.html#send-email-verify-address-custom">Using custom verification email templates</a> in the <i>Amazon SES Developer Guide</i>.</p> <p>You can execute this operation no more than once per second.</p>
* [sendEmail](#sendemail) - <p>Sends an email message. You can use the Amazon SES API v2 to send the following types of messages:</p> <ul> <li> <p> <b>Simple</b> – A standard email message. When you create this type of message, you specify the sender, the recipient, and the message body, and Amazon SES assembles the message for you.</p> </li> <li> <p> <b>Raw</b> – A raw, MIME-formatted email message. When you send this type of email, you have to specify all of the message headers, as well as the message body. You can use this message type to send messages that contain attachments. The message that you specify has to be a valid MIME message.</p> </li> <li> <p> <b>Templated</b> – A message that contains personalization tags. When you send this type of email, Amazon SES API v2 automatically replaces the tags with values that you specify.</p> </li> </ul>
* [tagResource](#tagresource) - <p>Add one or more tags (keys and values) to a specified resource. A <i>tag</i> is a label that you optionally define and associate with a resource. Tags can help you categorize and manage resources in different ways, such as by purpose, owner, environment, or other criteria. A resource can have as many as 50 tags.</p> <p>Each tag consists of a required <i>tag key</i> and an associated <i>tag value</i>, both of which you define. A tag key is a general label that acts as a category for more specific tag values. A tag value acts as a descriptor within a tag key.</p>
* [testRenderEmailTemplate](#testrenderemailtemplate) - <p>Creates a preview of the MIME content of an email when provided with a template and a set of replacement data.</p> <p>You can execute this operation no more than once per second.</p>
* [untagResource](#untagresource) - Remove one or more tags (keys and values) from a specified resource.
* [updateConfigurationSetEventDestination](#updateconfigurationseteventdestination) - <p>Update the configuration of an event destination for a configuration set.</p> <p> <i>Events</i> include message sends, deliveries, opens, clicks, bounces, and complaints. <i>Event destinations</i> are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.</p>
* [updateContact](#updatecontact) - Updates a contact's preferences for a list. It is not necessary to specify all existing topic preferences in the TopicPreferences object, just the ones that need updating.
* [updateContactList](#updatecontactlist) - Updates contact list metadata. This operation does a complete replacement.
* [updateCustomVerificationEmailTemplate](#updatecustomverificationemailtemplate) - <p>Updates an existing custom verification email template.</p> <p>For more information about custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/dg/creating-identities.html#send-email-verify-address-custom">Using custom verification email templates</a> in the <i>Amazon SES Developer Guide</i>.</p> <p>You can execute this operation no more than once per second.</p>
* [updateEmailIdentityPolicy](#updateemailidentitypolicy) - <p>Updates the specified sending authorization policy for the given identity (an email address or a domain). This API returns successfully even if a policy with the specified name does not exist.</p> <note> <p>This API is for the identity owner only. If you have not verified the identity, this API will return an error.</p> </note> <p>Sending authorization is a feature that enables an identity owner to authorize other senders to use its identities. For information about using sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
* [updateEmailTemplate](#updateemailtemplate) - <p>Updates an email template. Email templates enable you to send personalized email to one or more destinations in a single API operation. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-personalized-email-api.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

## batchGetMetricData

<p>Retrieves batches of metric data collected based on your sending activity.</p> <p>You can execute this operation no more than 16 times per second, and with at most 160 queries from the batches per second (cumulative).</p>

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BatchGetMetricDataRequest;
import org.openapis.openapi.models.operations.BatchGetMetricDataRequestBody;
import org.openapis.openapi.models.operations.BatchGetMetricDataResponse;
import org.openapis.openapi.models.shared.BatchGetMetricDataQuery;
import org.openapis.openapi.models.shared.MetricEnum;
import org.openapis.openapi.models.shared.MetricNamespaceEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchGetMetricDataRequest req = new BatchGetMetricDataRequest(                new BatchGetMetricDataRequestBody(                new org.openapis.openapi.models.shared.BatchGetMetricDataQuery[]{{
                                                add(new BatchGetMetricDataQuery(OffsetDateTime.parse("2022-12-30T06:52:02.282Z"), "fugit", MetricEnum.DELIVERY, MetricNamespaceEnum.VDM, OffsetDateTime.parse("2022-06-17T21:27:36.672Z")) {{
                                                    dimensions = new java.util.HashMap<String, String>() {{
                                                        put("harum", "enim");
                                                    }};
                                                    endDate = OffsetDateTime.parse("2021-10-04T09:10:06.610Z");
                                                    id = "e13b99d4-88e1-4e91-a450-ad2abd442698";
                                                    metric = MetricEnum.SEND;
                                                    namespace = MetricNamespaceEnum.VDM;
                                                    startDate = OffsetDateTime.parse("2022-03-04T10:29:07.095Z");
                                                }}),
                                                add(new BatchGetMetricDataQuery(OffsetDateTime.parse("2022-03-18T17:53:23.400Z"), "vel", MetricEnum.DELIVERY, MetricNamespaceEnum.VDM, OffsetDateTime.parse("2022-01-19T08:19:15.156Z")) {{
                                                    dimensions = new java.util.HashMap<String, String>() {{
                                                        put("tempore", "labore");
                                                        put("delectus", "eum");
                                                        put("non", "eligendi");
                                                    }};
                                                    endDate = OffsetDateTime.parse("2022-03-17T20:21:28.792Z");
                                                    id = "9e9a3efa-77df-4b14-8d66-ae395efb9ba8";
                                                    metric = MetricEnum.CLICK;
                                                    namespace = MetricNamespaceEnum.VDM;
                                                    startDate = OffsetDateTime.parse("2022-04-23T13:35:30.978Z");
                                                }}),
                                            }});) {{
                xAmzAlgorithm = "perferendis";
                xAmzContentSha256 = "nihil";
                xAmzCredential = "magnam";
                xAmzDate = "distinctio";
                xAmzSecurityToken = "id";
                xAmzSignature = "labore";
                xAmzSignedHeaders = "labore";
            }};            

            BatchGetMetricDataResponse res = sdk.sdk.batchGetMetricData(req);

            if (res.batchGetMetricDataResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createConfigurationSet

Create a configuration set. <i>Configuration sets</i> are groups of rules that you can apply to the emails that you send. You apply a configuration set to an email by specifying the name of the configuration set when you call the Amazon SES API v2. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email. 

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
import org.openapis.openapi.models.operations.CreateConfigurationSetRequestBodySuppressionOptions;
import org.openapis.openapi.models.operations.CreateConfigurationSetRequestBodyTrackingOptions;
import org.openapis.openapi.models.operations.CreateConfigurationSetRequestBodyVdmOptions;
import org.openapis.openapi.models.operations.CreateConfigurationSetResponse;
import org.openapis.openapi.models.shared.DashboardOptions;
import org.openapis.openapi.models.shared.FeatureStatusEnum;
import org.openapis.openapi.models.shared.GuardianOptions;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SuppressionListReasonEnum;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.TlsPolicyEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("suscipit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateConfigurationSetRequest req = new CreateConfigurationSetRequest(                new CreateConfigurationSetRequestBody("natus") {{
                                deliveryOptions = new CreateConfigurationSetRequestBodyDeliveryOptions() {{
                                    sendingPoolName = "nobis";
                                    tlsPolicy = TlsPolicyEnum.REQUIRE;
                                }};;
                                reputationOptions = new CreateConfigurationSetRequestBodyReputationOptions() {{
                                    lastFreshStart = OffsetDateTime.parse("2022-08-05T15:44:28.456Z");
                                    reputationMetricsEnabled = false;
                                }};;
                                sendingOptions = new CreateConfigurationSetRequestBodySendingOptions() {{
                                    sendingEnabled = false;
                                }};;
                                suppressionOptions = new CreateConfigurationSetRequestBodySuppressionOptions() {{
                                    suppressedReasons = new org.openapis.openapi.models.shared.SuppressionListReasonEnum[]{{
                                        add(SuppressionListReasonEnum.BOUNCE),
                                    }};
                                }};;
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("provident", "quos") {{
                                        key = "excepturi";
                                        value = "ullam";
                                    }}),
                                }};
                                trackingOptions = new CreateConfigurationSetRequestBodyTrackingOptions() {{
                                    customRedirectDomain = "sint";
                                }};;
                                vdmOptions = new CreateConfigurationSetRequestBodyVdmOptions() {{
                                    dashboardOptions = new DashboardOptions() {{
                                        engagementMetrics = FeatureStatusEnum.ENABLED;
                                    }};;
                                    guardianOptions = new GuardianOptions() {{
                                        optimizedSharedDelivery = FeatureStatusEnum.DISABLED;
                                    }};;
                                }};;
                            }};) {{
                xAmzAlgorithm = "reiciendis";
                xAmzContentSha256 = "mollitia";
                xAmzCredential = "ad";
                xAmzDate = "eum";
                xAmzSecurityToken = "dolor";
                xAmzSignature = "necessitatibus";
                xAmzSignedHeaders = "odit";
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

<p>Create an event destination. <i>Events</i> include message sends, deliveries, opens, clicks, bounces, and complaints. <i>Event destinations</i> are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.</p> <p>A single configuration set can include more than one event destination.</p>

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
                .setSecurity(new Security("nemo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateConfigurationSetEventDestinationRequest req = new CreateConfigurationSetEventDestinationRequest("quasi",                 new CreateConfigurationSetEventDestinationRequestBody(                new CreateConfigurationSetEventDestinationRequestBodyEventDestination() {{
                                                cloudWatchDestination = new CloudWatchDestination(                new org.openapis.openapi.models.shared.CloudWatchDimensionConfiguration[]{{
                                                                    add(new CloudWatchDimensionConfiguration("maxime", "deleniti", DimensionValueSourceEnum.LINK_TAG) {{
                                                                        defaultDimensionValue = "doloribus";
                                                                        dimensionName = "debitis";
                                                                        dimensionValueSource = DimensionValueSourceEnum.MESSAGE_TAG;
                                                                    }}),
                                                                    add(new CloudWatchDimensionConfiguration("repudiandae", "ullam", DimensionValueSourceEnum.LINK_TAG) {{
                                                                        defaultDimensionValue = "in";
                                                                        dimensionName = "architecto";
                                                                        dimensionValueSource = DimensionValueSourceEnum.MESSAGE_TAG;
                                                                    }}),
                                                                }});;
                                                enabled = false;
                                                kinesisFirehoseDestination = new KinesisFirehoseDestination("nihil", "repellat");;
                                                matchingEventTypes = new org.openapis.openapi.models.shared.EventTypeEnum[]{{
                                                    add(EventTypeEnum.REJECT),
                                                    add(EventTypeEnum.SUBSCRIPTION),
                                                    add(EventTypeEnum.DELIVERY_DELAY),
                                                    add(EventTypeEnum.SEND),
                                                }};
                                                pinpointDestination = new PinpointDestination() {{
                                                    applicationArn = "consequuntur";
                                                }};;
                                                snsDestination = new SnsDestination("praesentium");;
                                            }};, "natus");) {{
                xAmzAlgorithm = "magni";
                xAmzContentSha256 = "sunt";
                xAmzCredential = "quo";
                xAmzDate = "illum";
                xAmzSecurityToken = "pariatur";
                xAmzSignature = "maxime";
                xAmzSignedHeaders = "ea";
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

## createContact

Creates a contact, which is an end-user who is receiving the email, and adds them to a contact list.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateContactRequest;
import org.openapis.openapi.models.operations.CreateContactRequestBody;
import org.openapis.openapi.models.operations.CreateContactResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SubscriptionStatusEnum;
import org.openapis.openapi.models.shared.TopicPreference;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("excepturi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateContactRequest req = new CreateContactRequest("odit",                 new CreateContactRequestBody("ea") {{
                                attributesData = "accusantium";
                                topicPreferences = new org.openapis.openapi.models.shared.TopicPreference[]{{
                                    add(new TopicPreference(SubscriptionStatusEnum.OPT_IN, "voluptate") {{
                                        subscriptionStatus = SubscriptionStatusEnum.OPT_OUT;
                                        topicName = "quidem";
                                    }}),
                                }};
                                unsubscribeAll = false;
                            }};) {{
                xAmzAlgorithm = "autem";
                xAmzContentSha256 = "nam";
                xAmzCredential = "eaque";
                xAmzDate = "pariatur";
                xAmzSecurityToken = "nemo";
                xAmzSignature = "voluptatibus";
                xAmzSignedHeaders = "perferendis";
            }};            

            CreateContactResponse res = sdk.sdk.createContact(req);

            if (res.createContactResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createContactList

Creates a contact list.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateContactListRequest;
import org.openapis.openapi.models.operations.CreateContactListRequestBody;
import org.openapis.openapi.models.operations.CreateContactListResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SubscriptionStatusEnum;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.Topic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fugiat") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateContactListRequest req = new CreateContactListRequest(                new CreateContactListRequestBody("amet") {{
                                description = "aut";
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("libero", "nobis") {{
                                        key = "corporis";
                                        value = "hic";
                                    }}),
                                    add(new Tag("totam", "dignissimos") {{
                                        key = "dolores";
                                        value = "quis";
                                    }}),
                                    add(new Tag("nesciunt", "eos") {{
                                        key = "eaque";
                                        value = "quis";
                                    }}),
                                    add(new Tag("minus", "quam") {{
                                        key = "perferendis";
                                        value = "dolores";
                                    }}),
                                }};
                                topics = new org.openapis.openapi.models.shared.Topic[]{{
                                    add(new Topic(SubscriptionStatusEnum.OPT_OUT, "facilis", "perspiciatis") {{
                                        defaultSubscriptionStatus = SubscriptionStatusEnum.OPT_OUT;
                                        description = "nostrum";
                                        displayName = "hic";
                                        topicName = "recusandae";
                                    }}),
                                }};
                            }};) {{
                xAmzAlgorithm = "voluptatem";
                xAmzContentSha256 = "porro";
                xAmzCredential = "consequuntur";
                xAmzDate = "blanditiis";
                xAmzSecurityToken = "error";
                xAmzSignature = "eaque";
                xAmzSignedHeaders = "occaecati";
            }};            

            CreateContactListResponse res = sdk.sdk.createContactList(req);

            if (res.createContactListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createCustomVerificationEmailTemplate

<p>Creates a new custom verification email template.</p> <p>For more information about custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/dg/creating-identities.html#send-email-verify-address-custom">Using custom verification email templates</a> in the <i>Amazon SES Developer Guide</i>.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateCustomVerificationEmailTemplateRequest;
import org.openapis.openapi.models.operations.CreateCustomVerificationEmailTemplateRequestBody;
import org.openapis.openapi.models.operations.CreateCustomVerificationEmailTemplateResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("rerum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateCustomVerificationEmailTemplateRequest req = new CreateCustomVerificationEmailTemplateRequest(                new CreateCustomVerificationEmailTemplateRequestBody("adipisci", "asperiores", "earum", "modi", "iste", "dolorum");) {{
                xAmzAlgorithm = "deleniti";
                xAmzContentSha256 = "pariatur";
                xAmzCredential = "provident";
                xAmzDate = "nobis";
                xAmzSecurityToken = "libero";
                xAmzSignature = "delectus";
                xAmzSignedHeaders = "quaerat";
            }};            

            CreateCustomVerificationEmailTemplateResponse res = sdk.sdk.createCustomVerificationEmailTemplate(req);

            if (res.createCustomVerificationEmailTemplateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createDedicatedIpPool

Create a new pool of dedicated IP addresses. A pool can include one or more dedicated IP addresses that are associated with your Amazon Web Services account. You can associate a pool with a configuration set. When you send an email that uses that configuration set, the message is sent from one of the addresses in the associated pool.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateDedicatedIpPoolRequest;
import org.openapis.openapi.models.operations.CreateDedicatedIpPoolRequestBody;
import org.openapis.openapi.models.operations.CreateDedicatedIpPoolRequestBodyScalingModeEnum;
import org.openapis.openapi.models.operations.CreateDedicatedIpPoolResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quos") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateDedicatedIpPoolRequest req = new CreateDedicatedIpPoolRequest(                new CreateDedicatedIpPoolRequestBody("aliquid") {{
                                scalingMode = CreateDedicatedIpPoolRequestBodyScalingModeEnum.STANDARD;
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("ipsum", "hic") {{
                                        key = "dolor";
                                        value = "qui";
                                    }}),
                                }};
                            }};) {{
                xAmzAlgorithm = "excepturi";
                xAmzContentSha256 = "cum";
                xAmzCredential = "voluptate";
                xAmzDate = "dignissimos";
                xAmzSecurityToken = "reiciendis";
                xAmzSignature = "amet";
                xAmzSignedHeaders = "dolorum";
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

Create a new predictive inbox placement test. Predictive inbox placement tests can help you predict how your messages will be handled by various email providers around the world. When you perform a predictive inbox placement test, you provide a sample message that contains the content that you plan to send to your customers. Amazon SES then sends that message to special email addresses spread across several major email providers. After about 24 hours, the test is complete, and you can use the <code>GetDeliverabilityTestReport</code> operation to view the results of the test.

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
                .setSecurity(new Security("numquam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateDeliverabilityTestReportRequest req = new CreateDeliverabilityTestReportRequest(                new CreateDeliverabilityTestReportRequestBody(                new CreateDeliverabilityTestReportRequestBodyContent() {{
                                                raw = new RawMessage("veritatis");;
                                                simple = new Message(                new Body() {{
                                                                    html = new Content("ipsa") {{
                                                                        charset = "ipsa";
                                                                    }};;
                                                                    text = new Content("iure") {{
                                                                        charset = "odio";
                                                                    }};;
                                                                }};,                 new Content("quaerat") {{
                                                                    charset = "accusamus";
                                                                }};);;
                                                template = new Template() {{
                                                    templateArn = "quidem";
                                                    templateData = "voluptatibus";
                                                    templateName = "voluptas";
                                                }};;
                                            }};, "natus") {{
                                reportName = "eos";
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("ab", "soluta") {{
                                        key = "sit";
                                        value = "fugiat";
                                    }}),
                                    add(new Tag("voluptate", "dolorum") {{
                                        key = "dolorum";
                                        value = "iusto";
                                    }}),
                                    add(new Tag("necessitatibus", "distinctio") {{
                                        key = "deleniti";
                                        value = "omnis";
                                    }}),
                                }};
                            }};) {{
                xAmzAlgorithm = "asperiores";
                xAmzContentSha256 = "nihil";
                xAmzCredential = "ipsum";
                xAmzDate = "voluptate";
                xAmzSecurityToken = "id";
                xAmzSignature = "saepe";
                xAmzSignedHeaders = "eius";
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

<p>Starts the process of verifying an email identity. An <i>identity</i> is an email address or domain that you use when you send email. Before you can use an identity to send email, you first have to verify it. By verifying an identity, you demonstrate that you're the owner of the identity, and that you've given Amazon SES API v2 permission to send email from the identity.</p> <p>When you verify an email address, Amazon SES sends an email to the address. Your email address is verified as soon as you follow the link in the verification email. </p> <p>When you verify a domain without specifying the <code>DkimSigningAttributes</code> object, this operation provides a set of DKIM tokens. You can convert these tokens into CNAME records, which you then add to the DNS configuration for your domain. Your domain is verified when Amazon SES detects these records in the DNS configuration for your domain. This verification method is known as <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/easy-dkim.html">Easy DKIM</a>.</p> <p>Alternatively, you can perform the verification process by providing your own public-private key pair. This verification method is known as Bring Your Own DKIM (BYODKIM). To use BYODKIM, your call to the <code>CreateEmailIdentity</code> operation has to include the <code>DkimSigningAttributes</code> object. When you specify this object, you provide a selector (a component of the DNS record name that identifies the public key to use for DKIM authentication) and a private key.</p> <p>When you verify a domain, this operation provides a set of DKIM tokens, which you can convert into CNAME tokens. You add these CNAME tokens to the DNS configuration for your domain. Your domain is verified when Amazon SES detects these records in the DNS configuration for your domain. For some DNS providers, it can take 72 hours or more to complete the domain verification process.</p> <p>Additionally, you can associate an existing configuration set with the email identity that you're verifying.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateEmailIdentityRequest;
import org.openapis.openapi.models.operations.CreateEmailIdentityRequestBody;
import org.openapis.openapi.models.operations.CreateEmailIdentityRequestBodyDkimSigningAttributes;
import org.openapis.openapi.models.operations.CreateEmailIdentityResponse;
import org.openapis.openapi.models.shared.DkimSigningKeyLengthEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aspernatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateEmailIdentityRequest req = new CreateEmailIdentityRequest(                new CreateEmailIdentityRequestBody("perferendis") {{
                                configurationSetName = "amet";
                                dkimSigningAttributes = new CreateEmailIdentityRequestBodyDkimSigningAttributes() {{
                                    domainSigningPrivateKey = "optio";
                                    domainSigningSelector = "accusamus";
                                    nextSigningKeyLength = DkimSigningKeyLengthEnum.RSA1024_BIT;
                                }};;
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("provident", "minima") {{
                                        key = "suscipit";
                                        value = "deserunt";
                                    }}),
                                    add(new Tag("similique", "alias") {{
                                        key = "repellendus";
                                        value = "totam";
                                    }}),
                                    add(new Tag("tempora", "vel") {{
                                        key = "at";
                                        value = "quaerat";
                                    }}),
                                    add(new Tag("qui", "dolorum") {{
                                        key = "quod";
                                        value = "officiis";
                                    }}),
                                }};
                            }};) {{
                xAmzAlgorithm = "a";
                xAmzContentSha256 = "esse";
                xAmzCredential = "harum";
                xAmzDate = "iusto";
                xAmzSecurityToken = "ipsum";
                xAmzSignature = "quisquam";
                xAmzSignedHeaders = "tenetur";
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

## createEmailIdentityPolicy

<p>Creates the specified sending authorization policy for the given identity (an email address or a domain).</p> <note> <p>This API is for the identity owner only. If you have not verified the identity, this API will return an error.</p> </note> <p>Sending authorization is a feature that enables an identity owner to authorize other senders to use its identities. For information about using sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateEmailIdentityPolicyRequest;
import org.openapis.openapi.models.operations.CreateEmailIdentityPolicyRequestBody;
import org.openapis.openapi.models.operations.CreateEmailIdentityPolicyResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("amet") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateEmailIdentityPolicyRequest req = new CreateEmailIdentityPolicyRequest("tempore", "accusamus",                 new CreateEmailIdentityPolicyRequestBody("numquam");) {{
                xAmzAlgorithm = "enim";
                xAmzContentSha256 = "dolorem";
                xAmzCredential = "sapiente";
                xAmzDate = "totam";
                xAmzSecurityToken = "nihil";
                xAmzSignature = "sit";
                xAmzSignedHeaders = "expedita";
            }};            

            CreateEmailIdentityPolicyResponse res = sdk.sdk.createEmailIdentityPolicy(req);

            if (res.createEmailIdentityPolicyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createEmailTemplate

<p>Creates an email template. Email templates enable you to send personalized email to one or more destinations in a single API operation. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-personalized-email-api.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateEmailTemplateRequest;
import org.openapis.openapi.models.operations.CreateEmailTemplateRequestBody;
import org.openapis.openapi.models.operations.CreateEmailTemplateRequestBodyTemplateContent;
import org.openapis.openapi.models.operations.CreateEmailTemplateResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("neque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateEmailTemplateRequest req = new CreateEmailTemplateRequest(                new CreateEmailTemplateRequestBody(                new CreateEmailTemplateRequestBodyTemplateContent() {{
                                                html = "sed";
                                                subject = "vel";
                                                text = "libero";
                                            }};, "voluptas");) {{
                xAmzAlgorithm = "deserunt";
                xAmzContentSha256 = "quam";
                xAmzCredential = "ipsum";
                xAmzDate = "incidunt";
                xAmzSecurityToken = "qui";
                xAmzSignature = "cupiditate";
                xAmzSignedHeaders = "maxime";
            }};            

            CreateEmailTemplateResponse res = sdk.sdk.createEmailTemplate(req);

            if (res.createEmailTemplateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createImportJob

Creates an import job for a data destination.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateImportJobRequest;
import org.openapis.openapi.models.operations.CreateImportJobRequestBody;
import org.openapis.openapi.models.operations.CreateImportJobRequestBodyImportDataSource;
import org.openapis.openapi.models.operations.CreateImportJobRequestBodyImportDestination;
import org.openapis.openapi.models.operations.CreateImportJobResponse;
import org.openapis.openapi.models.shared.ContactListDestination;
import org.openapis.openapi.models.shared.ContactListImportActionEnum;
import org.openapis.openapi.models.shared.DataFormatEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SuppressionListDestination;
import org.openapis.openapi.models.shared.SuppressionListImportActionEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("pariatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateImportJobRequest req = new CreateImportJobRequest(                new CreateImportJobRequestBody(                new CreateImportJobRequestBodyImportDataSource() {{
                                                dataFormat = DataFormatEnum.JSON;
                                                s3Url = "dicta";
                                            }};,                 new CreateImportJobRequestBodyImportDestination() {{
                                                contactListDestination = new ContactListDestination(ContactListImportActionEnum.PUT, "totam");;
                                                suppressionListDestination = new SuppressionListDestination(SuppressionListImportActionEnum.DELETE);;
                                            }};);) {{
                xAmzAlgorithm = "aspernatur";
                xAmzContentSha256 = "dolores";
                xAmzCredential = "distinctio";
                xAmzDate = "facilis";
                xAmzSecurityToken = "aliquid";
                xAmzSignature = "quam";
                xAmzSignedHeaders = "molestias";
            }};            

            CreateImportJobResponse res = sdk.sdk.createImportJob(req);

            if (res.createImportJobResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteConfigurationSet

<p>Delete an existing configuration set.</p> <p> <i>Configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p>

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
                .setSecurity(new Security("temporibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteConfigurationSetRequest req = new DeleteConfigurationSetRequest("qui") {{
                xAmzAlgorithm = "neque";
                xAmzContentSha256 = "fugit";
                xAmzCredential = "magni";
                xAmzDate = "odio";
                xAmzSecurityToken = "sunt";
                xAmzSignature = "ullam";
                xAmzSignedHeaders = "nam";
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

<p>Delete an event destination.</p> <p> <i>Events</i> include message sends, deliveries, opens, clicks, bounces, and complaints. <i>Event destinations</i> are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.</p>

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
                .setSecurity(new Security("hic") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteConfigurationSetEventDestinationRequest req = new DeleteConfigurationSetEventDestinationRequest("voluptatem", "cumque") {{
                xAmzAlgorithm = "soluta";
                xAmzContentSha256 = "nobis";
                xAmzCredential = "et";
                xAmzDate = "saepe";
                xAmzSecurityToken = "ipsum";
                xAmzSignature = "veritatis";
                xAmzSignedHeaders = "nobis";
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

## deleteContact

Removes a contact from a contact list.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteContactRequest;
import org.openapis.openapi.models.operations.DeleteContactResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quos") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteContactRequest req = new DeleteContactRequest("tempore", "cupiditate") {{
                xAmzAlgorithm = "aperiam";
                xAmzContentSha256 = "delectus";
                xAmzCredential = "dolorem";
                xAmzDate = "dolore";
                xAmzSecurityToken = "labore";
                xAmzSignature = "adipisci";
                xAmzSignedHeaders = "dolorum";
            }};            

            DeleteContactResponse res = sdk.sdk.deleteContact(req);

            if (res.deleteContactResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteContactList

Deletes a contact list and all of the contacts on that list.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteContactListRequest;
import org.openapis.openapi.models.operations.DeleteContactListResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("architecto") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteContactListRequest req = new DeleteContactListRequest("quae") {{
                xAmzAlgorithm = "aut";
                xAmzContentSha256 = "quas";
                xAmzCredential = "itaque";
                xAmzDate = "consequatur";
                xAmzSecurityToken = "est";
                xAmzSignature = "repellendus";
                xAmzSignedHeaders = "porro";
            }};            

            DeleteContactListResponse res = sdk.sdk.deleteContactList(req);

            if (res.deleteContactListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteCustomVerificationEmailTemplate

<p>Deletes an existing custom verification email template.</p> <p>For more information about custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/dg/creating-identities.html#send-email-verify-address-custom">Using custom verification email templates</a> in the <i>Amazon SES Developer Guide</i>.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteCustomVerificationEmailTemplateRequest;
import org.openapis.openapi.models.operations.DeleteCustomVerificationEmailTemplateResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("doloribus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteCustomVerificationEmailTemplateRequest req = new DeleteCustomVerificationEmailTemplateRequest("ut") {{
                xAmzAlgorithm = "facilis";
                xAmzContentSha256 = "cupiditate";
                xAmzCredential = "qui";
                xAmzDate = "quae";
                xAmzSecurityToken = "laudantium";
                xAmzSignature = "odio";
                xAmzSignedHeaders = "occaecati";
            }};            

            DeleteCustomVerificationEmailTemplateResponse res = sdk.sdk.deleteCustomVerificationEmailTemplate(req);

            if (res.deleteCustomVerificationEmailTemplateResponse != null) {
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
                .setSecurity(new Security("voluptatibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteDedicatedIpPoolRequest req = new DeleteDedicatedIpPoolRequest("quisquam") {{
                xAmzAlgorithm = "vero";
                xAmzContentSha256 = "omnis";
                xAmzCredential = "quis";
                xAmzDate = "ipsum";
                xAmzSecurityToken = "delectus";
                xAmzSignature = "voluptate";
                xAmzSignedHeaders = "consectetur";
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

Deletes an email identity. An identity can be either an email address or a domain name.

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
                .setSecurity(new Security("vero") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteEmailIdentityRequest req = new DeleteEmailIdentityRequest("tenetur") {{
                xAmzAlgorithm = "dignissimos";
                xAmzContentSha256 = "hic";
                xAmzCredential = "distinctio";
                xAmzDate = "quod";
                xAmzSecurityToken = "odio";
                xAmzSignature = "similique";
                xAmzSignedHeaders = "facilis";
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

## deleteEmailIdentityPolicy

<p>Deletes the specified sending authorization policy for the given identity (an email address or a domain). This API returns successfully even if a policy with the specified name does not exist.</p> <note> <p>This API is for the identity owner only. If you have not verified the identity, this API will return an error.</p> </note> <p>Sending authorization is a feature that enables an identity owner to authorize other senders to use its identities. For information about using sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteEmailIdentityPolicyRequest;
import org.openapis.openapi.models.operations.DeleteEmailIdentityPolicyResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vero") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteEmailIdentityPolicyRequest req = new DeleteEmailIdentityPolicyRequest("ducimus", "dolore") {{
                xAmzAlgorithm = "quibusdam";
                xAmzContentSha256 = "illum";
                xAmzCredential = "sequi";
                xAmzDate = "natus";
                xAmzSecurityToken = "impedit";
                xAmzSignature = "aut";
                xAmzSignedHeaders = "voluptatibus";
            }};            

            DeleteEmailIdentityPolicyResponse res = sdk.sdk.deleteEmailIdentityPolicy(req);

            if (res.deleteEmailIdentityPolicyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteEmailTemplate

<p>Deletes an email template.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteEmailTemplateRequest;
import org.openapis.openapi.models.operations.DeleteEmailTemplateResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("exercitationem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteEmailTemplateRequest req = new DeleteEmailTemplateRequest("nulla") {{
                xAmzAlgorithm = "fugit";
                xAmzContentSha256 = "porro";
                xAmzCredential = "maiores";
                xAmzDate = "doloribus";
                xAmzSecurityToken = "iusto";
                xAmzSignature = "eligendi";
                xAmzSignedHeaders = "ducimus";
            }};            

            DeleteEmailTemplateResponse res = sdk.sdk.deleteEmailTemplate(req);

            if (res.deleteEmailTemplateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteSuppressedDestination

Removes an email address from the suppression list for your account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteSuppressedDestinationRequest;
import org.openapis.openapi.models.operations.DeleteSuppressedDestinationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("alias") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteSuppressedDestinationRequest req = new DeleteSuppressedDestinationRequest("officia") {{
                xAmzAlgorithm = "tempora";
                xAmzContentSha256 = "ipsam";
                xAmzCredential = "ea";
                xAmzDate = "aspernatur";
                xAmzSecurityToken = "vel";
                xAmzSignature = "possimus";
                xAmzSignedHeaders = "magnam";
            }};            

            DeleteSuppressedDestinationResponse res = sdk.sdk.deleteSuppressedDestination(req);

            if (res.deleteSuppressedDestinationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAccount

Obtain information about the email-sending status and capabilities of your Amazon SES account in the current Amazon Web Services Region.

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
                .setSecurity(new Security("ratione") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetAccountRequest req = new GetAccountRequest() {{
                xAmzAlgorithm = "ex";
                xAmzContentSha256 = "laudantium";
                xAmzCredential = "dicta";
                xAmzDate = "dolor";
                xAmzSecurityToken = "maiores";
                xAmzSignature = "quasi";
                xAmzSignedHeaders = "ex";
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
                .setSecurity(new Security("nulla") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetBlacklistReportsRequest req = new GetBlacklistReportsRequest(                new String[]{{
                                add("voluptatibus"),
                                add("nostrum"),
                                add("sapiente"),
                            }}) {{
                xAmzAlgorithm = "quisquam";
                xAmzContentSha256 = "saepe";
                xAmzCredential = "ea";
                xAmzDate = "impedit";
                xAmzSecurityToken = "corporis";
                xAmzSignature = "veniam";
                xAmzSignedHeaders = "aliquid";
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

<p>Get information about an existing configuration set, including the dedicated IP pool that it's associated with, whether or not it's enabled for sending email, and more.</p> <p> <i>Configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p>

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
                .setSecurity(new Security("inventore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetConfigurationSetRequest req = new GetConfigurationSetRequest("magnam") {{
                xAmzAlgorithm = "ea";
                xAmzContentSha256 = "quo";
                xAmzCredential = "consectetur";
                xAmzDate = "recusandae";
                xAmzSecurityToken = "aspernatur";
                xAmzSignature = "minima";
                xAmzSignedHeaders = "eaque";
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

<p>Retrieve a list of event destinations that are associated with a configuration set.</p> <p> <i>Events</i> include message sends, deliveries, opens, clicks, bounces, and complaints. <i>Event destinations</i> are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.</p>

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
                .setSecurity(new Security("a") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetConfigurationSetEventDestinationsRequest req = new GetConfigurationSetEventDestinationsRequest("libero") {{
                xAmzAlgorithm = "aut";
                xAmzContentSha256 = "aut";
                xAmzCredential = "deleniti";
                xAmzDate = "impedit";
                xAmzSecurityToken = "aliquam";
                xAmzSignature = "fugit";
                xAmzSignedHeaders = "accusamus";
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

## getContact

Returns a contact from a contact list.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetContactRequest;
import org.openapis.openapi.models.operations.GetContactResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("inventore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetContactRequest req = new GetContactRequest("non", "et") {{
                xAmzAlgorithm = "dolorum";
                xAmzContentSha256 = "laborum";
                xAmzCredential = "placeat";
                xAmzDate = "velit";
                xAmzSecurityToken = "eum";
                xAmzSignature = "autem";
                xAmzSignedHeaders = "nobis";
            }};            

            GetContactResponse res = sdk.sdk.getContact(req);

            if (res.getContactResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getContactList

Returns contact list metadata. It does not return any information about the contacts present in the list.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetContactListRequest;
import org.openapis.openapi.models.operations.GetContactListResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quas") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetContactListRequest req = new GetContactListRequest("assumenda") {{
                xAmzAlgorithm = "nulla";
                xAmzContentSha256 = "voluptas";
                xAmzCredential = "libero";
                xAmzDate = "quasi";
                xAmzSecurityToken = "tempora";
                xAmzSignature = "numquam";
                xAmzSignedHeaders = "explicabo";
            }};            

            GetContactListResponse res = sdk.sdk.getContactList(req);

            if (res.getContactListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCustomVerificationEmailTemplate

<p>Returns the custom email verification template for the template name you specify.</p> <p>For more information about custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/dg/creating-identities.html#send-email-verify-address-custom">Using custom verification email templates</a> in the <i>Amazon SES Developer Guide</i>.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCustomVerificationEmailTemplateRequest;
import org.openapis.openapi.models.operations.GetCustomVerificationEmailTemplateResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("provident") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetCustomVerificationEmailTemplateRequest req = new GetCustomVerificationEmailTemplateRequest("ipsa") {{
                xAmzAlgorithm = "molestiae";
                xAmzContentSha256 = "magnam";
                xAmzCredential = "odio";
                xAmzDate = "eius";
                xAmzSecurityToken = "esse";
                xAmzSignature = "esse";
                xAmzSignedHeaders = "rem";
            }};            

            GetCustomVerificationEmailTemplateResponse res = sdk.sdk.getCustomVerificationEmailTemplate(req);

            if (res.getCustomVerificationEmailTemplateResponse != null) {
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
                .setSecurity(new Security("fuga") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDedicatedIpRequest req = new GetDedicatedIpRequest("reprehenderit") {{
                xAmzAlgorithm = "quidem";
                xAmzContentSha256 = "fugiat";
                xAmzCredential = "ut";
                xAmzDate = "eum";
                xAmzSecurityToken = "suscipit";
                xAmzSignature = "assumenda";
                xAmzSignedHeaders = "eos";
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

## getDedicatedIpPool

Retrieve information about the dedicated pool.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDedicatedIpPoolRequest;
import org.openapis.openapi.models.operations.GetDedicatedIpPoolResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("praesentium") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDedicatedIpPoolRequest req = new GetDedicatedIpPoolRequest("quisquam") {{
                xAmzAlgorithm = "veritatis";
                xAmzContentSha256 = "ipsa";
                xAmzCredential = "id";
                xAmzDate = "quidem";
                xAmzSecurityToken = "neque";
                xAmzSignature = "quo";
                xAmzSignedHeaders = "illum";
            }};            

            GetDedicatedIpPoolResponse res = sdk.sdk.getDedicatedIpPool(req);

            if (res.getDedicatedIpPoolResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDedicatedIps

List the dedicated IP addresses that are associated with your Amazon Web Services account.

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
                .setSecurity(new Security("quo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDedicatedIpsRequest req = new GetDedicatedIpsRequest() {{
                nextToken = "fuga";
                pageSize = 259422L;
                poolName = "eos";
                xAmzAlgorithm = "voluptas";
                xAmzContentSha256 = "ab";
                xAmzCredential = "cupiditate";
                xAmzDate = "consequatur";
                xAmzSecurityToken = "tempora";
                xAmzSignature = "debitis";
                xAmzSignedHeaders = "ipsam";
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

<p>Retrieve information about the status of the Deliverability dashboard for your account. When the Deliverability dashboard is enabled, you gain access to reputation, deliverability, and other metrics for the domains that you use to send email. You also gain the ability to perform predictive inbox placement tests.</p> <p>When you use the Deliverability dashboard, you pay a monthly subscription charge, in addition to any other fees that you accrue by using Amazon SES and other Amazon Web Services services. For more information about the features and cost of a Deliverability dashboard subscription, see <a href="http://aws.amazon.com/ses/pricing/">Amazon SES Pricing</a>.</p>

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
                .setSecurity(new Security("aspernatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDeliverabilityDashboardOptionsRequest req = new GetDeliverabilityDashboardOptionsRequest() {{
                xAmzAlgorithm = "sequi";
                xAmzContentSha256 = "quo";
                xAmzCredential = "esse";
                xAmzDate = "recusandae";
                xAmzSecurityToken = "aperiam";
                xAmzSignature = "distinctio";
                xAmzSignedHeaders = "quod";
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
                .setSecurity(new Security("dignissimos") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDeliverabilityTestReportRequest req = new GetDeliverabilityTestReportRequest("inventore") {{
                xAmzAlgorithm = "nihil";
                xAmzContentSha256 = "totam";
                xAmzCredential = "accusamus";
                xAmzDate = "aliquam";
                xAmzSecurityToken = "odio";
                xAmzSignature = "occaecati";
                xAmzSignedHeaders = "commodi";
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

Retrieve all the deliverability data for a specific campaign. This data is available for a campaign only if the campaign sent email by using a domain that the Deliverability dashboard is enabled for.

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
                .setSecurity(new Security("sapiente") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDomainDeliverabilityCampaignRequest req = new GetDomainDeliverabilityCampaignRequest("dolores") {{
                xAmzAlgorithm = "deserunt";
                xAmzContentSha256 = "molestiae";
                xAmzCredential = "accusantium";
                xAmzDate = "porro";
                xAmzSecurityToken = "eum";
                xAmzSignature = "quas";
                xAmzSignedHeaders = "praesentium";
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
                .setSecurity(new Security("consequuntur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDomainStatisticsReportRequest req = new GetDomainStatisticsReportRequest("deleniti", OffsetDateTime.parse("2022-04-27T07:00:05.421Z"), OffsetDateTime.parse("2022-06-12T08:30:58.411Z")) {{
                xAmzAlgorithm = "atque";
                xAmzContentSha256 = "explicabo";
                xAmzCredential = "minima";
                xAmzDate = "nisi";
                xAmzSecurityToken = "fugit";
                xAmzSignature = "sapiente";
                xAmzSignedHeaders = "consequuntur";
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

Provides information about a specific identity, including the identity's verification status, sending authorization policies, its DKIM authentication status, and its custom Mail-From settings.

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
                .setSecurity(new Security("ratione") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetEmailIdentityRequest req = new GetEmailIdentityRequest("explicabo") {{
                xAmzAlgorithm = "saepe";
                xAmzContentSha256 = "occaecati";
                xAmzCredential = "atque";
                xAmzDate = "et";
                xAmzSecurityToken = "esse";
                xAmzSignature = "eveniet";
                xAmzSignedHeaders = "accusamus";
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

## getEmailIdentityPolicies

<p>Returns the requested sending authorization policies for the given identity (an email address or a domain). The policies are returned as a map of policy names to policy contents. You can retrieve a maximum of 20 policies at a time.</p> <note> <p>This API is for the identity owner only. If you have not verified the identity, this API will return an error.</p> </note> <p>Sending authorization is a feature that enables an identity owner to authorize other senders to use its identities. For information about using sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEmailIdentityPoliciesRequest;
import org.openapis.openapi.models.operations.GetEmailIdentityPoliciesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("veritatis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetEmailIdentityPoliciesRequest req = new GetEmailIdentityPoliciesRequest("esse") {{
                xAmzAlgorithm = "quod";
                xAmzContentSha256 = "nam";
                xAmzCredential = "vero";
                xAmzDate = "aliquid";
                xAmzSecurityToken = "quasi";
                xAmzSignature = "saepe";
                xAmzSignedHeaders = "vel";
            }};            

            GetEmailIdentityPoliciesResponse res = sdk.sdk.getEmailIdentityPolicies(req);

            if (res.getEmailIdentityPoliciesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getEmailTemplate

<p>Displays the template object (which includes the subject line, HTML part and text part) for the template you specify.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEmailTemplateRequest;
import org.openapis.openapi.models.operations.GetEmailTemplateResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("harum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetEmailTemplateRequest req = new GetEmailTemplateRequest("molestiae") {{
                xAmzAlgorithm = "rerum";
                xAmzContentSha256 = "occaecati";
                xAmzCredential = "minima";
                xAmzDate = "distinctio";
                xAmzSecurityToken = "eligendi";
                xAmzSignature = "sit";
                xAmzSignedHeaders = "culpa";
            }};            

            GetEmailTemplateResponse res = sdk.sdk.getEmailTemplate(req);

            if (res.getEmailTemplateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getImportJob

Provides information about an import job.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetImportJobRequest;
import org.openapis.openapi.models.operations.GetImportJobResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tempore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetImportJobRequest req = new GetImportJobRequest("adipisci") {{
                xAmzAlgorithm = "cumque";
                xAmzContentSha256 = "consequuntur";
                xAmzCredential = "consequatur";
                xAmzDate = "minus";
                xAmzSecurityToken = "quaerat";
                xAmzSignature = "sapiente";
                xAmzSignedHeaders = "consectetur";
            }};            

            GetImportJobResponse res = sdk.sdk.getImportJob(req);

            if (res.getImportJobResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSuppressedDestination

Retrieves information about a specific email address that's on the suppression list for your account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSuppressedDestinationRequest;
import org.openapis.openapi.models.operations.GetSuppressedDestinationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("esse") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetSuppressedDestinationRequest req = new GetSuppressedDestinationRequest("blanditiis") {{
                xAmzAlgorithm = "provident";
                xAmzContentSha256 = "a";
                xAmzCredential = "nulla";
                xAmzDate = "quas";
                xAmzSecurityToken = "esse";
                xAmzSignature = "quasi";
                xAmzSignedHeaders = "a";
            }};            

            GetSuppressedDestinationResponse res = sdk.sdk.getSuppressedDestination(req);

            if (res.getSuppressedDestinationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listConfigurationSets

<p>List all of the configuration sets associated with your account in the current region.</p> <p> <i>Configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p>

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
                .setSecurity(new Security("error") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListConfigurationSetsRequest req = new ListConfigurationSetsRequest() {{
                nextToken = "sint";
                pageSize = 863023L;
                xAmzAlgorithm = "possimus";
                xAmzContentSha256 = "quia";
                xAmzCredential = "eveniet";
                xAmzDate = "asperiores";
                xAmzSecurityToken = "facere";
                xAmzSignature = "veritatis";
                xAmzSignedHeaders = "consequuntur";
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

## listContactLists

Lists all of the contact lists available.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListContactListsRequest;
import org.openapis.openapi.models.operations.ListContactListsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quasi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListContactListsRequest req = new ListContactListsRequest() {{
                nextToken = "similique";
                pageSize = 633608L;
                xAmzAlgorithm = "aliquid";
                xAmzContentSha256 = "tenetur";
                xAmzCredential = "quae";
                xAmzDate = "earum";
                xAmzSecurityToken = "vel";
                xAmzSignature = "in";
                xAmzSignedHeaders = "eius";
            }};            

            ListContactListsResponse res = sdk.sdk.listContactLists(req);

            if (res.listContactListsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listContacts

Lists the contacts present in a specific contact list.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListContactsRequest;
import org.openapis.openapi.models.operations.ListContactsRequestBody;
import org.openapis.openapi.models.operations.ListContactsRequestBodyFilter;
import org.openapis.openapi.models.operations.ListContactsResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SubscriptionStatusEnum;
import org.openapis.openapi.models.shared.TopicFilter;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("libero") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListContactsRequest req = new ListContactsRequest("illum",                 new ListContactsRequestBody() {{
                                filter = new ListContactsRequestBodyFilter() {{
                                    filteredStatus = SubscriptionStatusEnum.OPT_OUT;
                                    topicFilter = new TopicFilter() {{
                                        topicName = "accusantium";
                                        useDefaultIfPreferenceUnavailable = false;
                                    }};;
                                }};;
                            }};) {{
                nextToken = "aliquam";
                pageSize = 958983L;
                xAmzAlgorithm = "dicta";
                xAmzContentSha256 = "ullam";
                xAmzCredential = "reprehenderit";
                xAmzDate = "ullam";
                xAmzSecurityToken = "nisi";
                xAmzSignature = "aut";
                xAmzSignedHeaders = "voluptatum";
            }};            

            ListContactsResponse res = sdk.sdk.listContacts(req);

            if (res.listContactsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listCustomVerificationEmailTemplates

<p>Lists the existing custom verification email templates for your account in the current Amazon Web Services Region.</p> <p>For more information about custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/dg/creating-identities.html#send-email-verify-address-custom">Using custom verification email templates</a> in the <i>Amazon SES Developer Guide</i>.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListCustomVerificationEmailTemplatesRequest;
import org.openapis.openapi.models.operations.ListCustomVerificationEmailTemplatesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("qui") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListCustomVerificationEmailTemplatesRequest req = new ListCustomVerificationEmailTemplatesRequest() {{
                nextToken = "quibusdam";
                pageSize = 401259L;
                xAmzAlgorithm = "deleniti";
                xAmzContentSha256 = "itaque";
                xAmzCredential = "dolorum";
                xAmzDate = "architecto";
                xAmzSecurityToken = "omnis";
                xAmzSignature = "tenetur";
                xAmzSignedHeaders = "quasi";
            }};            

            ListCustomVerificationEmailTemplatesResponse res = sdk.sdk.listCustomVerificationEmailTemplates(req);

            if (res.listCustomVerificationEmailTemplatesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listDedicatedIpPools

List all of the dedicated IP pools that exist in your Amazon Web Services account in the current Region.

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
                .setSecurity(new Security("at") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListDedicatedIpPoolsRequest req = new ListDedicatedIpPoolsRequest() {{
                nextToken = "et";
                pageSize = 454162L;
                xAmzAlgorithm = "ipsa";
                xAmzContentSha256 = "minima";
                xAmzCredential = "veritatis";
                xAmzDate = "consectetur";
                xAmzSecurityToken = "adipisci";
                xAmzSignature = "iste";
                xAmzSignedHeaders = "temporibus";
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
                .setSecurity(new Security("accusantium") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListDeliverabilityTestReportsRequest req = new ListDeliverabilityTestReportsRequest() {{
                nextToken = "rem";
                pageSize = 15606L;
                xAmzAlgorithm = "laudantium";
                xAmzContentSha256 = "eum";
                xAmzCredential = "mollitia";
                xAmzDate = "ab";
                xAmzSecurityToken = "corrupti";
                xAmzSignature = "non";
                xAmzSignedHeaders = "voluptatem";
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

Retrieve deliverability data for all the campaigns that used a specific domain to send email during a specified time range. This data is available for a domain only if you enabled the Deliverability dashboard for the domain.

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
                .setSecurity(new Security("dolor") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListDomainDeliverabilityCampaignsRequest req = new ListDomainDeliverabilityCampaignsRequest(OffsetDateTime.parse("2022-06-30T04:05:24.454Z"), OffsetDateTime.parse("2022-08-10T11:52:05.487Z"), "voluptas") {{
                nextToken = "aut";
                pageSize = 491025L;
                xAmzAlgorithm = "dicta";
                xAmzContentSha256 = "maiores";
                xAmzCredential = "natus";
                xAmzDate = "velit";
                xAmzSecurityToken = "voluptatibus";
                xAmzSignature = "voluptas";
                xAmzSignedHeaders = "asperiores";
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

Returns a list of all of the email identities that are associated with your Amazon Web Services account. An identity can be either an email address or a domain. This operation returns identities that are verified as well as those that aren't. This operation returns identities that are associated with Amazon SES and Amazon Pinpoint.

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
                .setSecurity(new Security("aperiam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListEmailIdentitiesRequest req = new ListEmailIdentitiesRequest() {{
                nextToken = "ea";
                pageSize = 310067L;
                xAmzAlgorithm = "consequuntur";
                xAmzContentSha256 = "repellendus";
                xAmzCredential = "officia";
                xAmzDate = "maxime";
                xAmzSecurityToken = "dignissimos";
                xAmzSignature = "officia";
                xAmzSignedHeaders = "asperiores";
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

## listEmailTemplates

<p>Lists the email templates present in your Amazon SES account in the current Amazon Web Services Region.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListEmailTemplatesRequest;
import org.openapis.openapi.models.operations.ListEmailTemplatesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nemo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListEmailTemplatesRequest req = new ListEmailTemplatesRequest() {{
                nextToken = "quae";
                pageSize = 312753L;
                xAmzAlgorithm = "porro";
                xAmzContentSha256 = "quod";
                xAmzCredential = "labore";
                xAmzDate = "ab";
                xAmzSecurityToken = "adipisci";
                xAmzSignature = "fuga";
                xAmzSignedHeaders = "id";
            }};            

            ListEmailTemplatesResponse res = sdk.sdk.listEmailTemplates(req);

            if (res.listEmailTemplatesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listImportJobs

Lists all of the import jobs.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListImportJobsRequest;
import org.openapis.openapi.models.operations.ListImportJobsRequestBody;
import org.openapis.openapi.models.operations.ListImportJobsRequestBodyImportDestinationTypeEnum;
import org.openapis.openapi.models.operations.ListImportJobsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("suscipit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListImportJobsRequest req = new ListImportJobsRequest(                new ListImportJobsRequestBody() {{
                                importDestinationType = ListImportJobsRequestBodyImportDestinationTypeEnum.SUPPRESSION_LIST;
                            }};) {{
                nextToken = "culpa";
                pageSize = 665859L;
                xAmzAlgorithm = "recusandae";
                xAmzContentSha256 = "totam";
                xAmzCredential = "fugiat";
                xAmzDate = "vel";
                xAmzSecurityToken = "ducimus";
                xAmzSignature = "quos";
                xAmzSignedHeaders = "vel";
            }};            

            ListImportJobsResponse res = sdk.sdk.listImportJobs(req);

            if (res.listImportJobsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listRecommendations

<p>Lists the recommendations present in your Amazon SES account in the current Amazon Web Services Region.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListRecommendationsRequest;
import org.openapis.openapi.models.operations.ListRecommendationsRequestBody;
import org.openapis.openapi.models.operations.ListRecommendationsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("labore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListRecommendationsRequest req = new ListRecommendationsRequest(                new ListRecommendationsRequestBody() {{
                                filter = new java.util.HashMap<String, String>() {{
                                    put("facilis", "cum");
                                    put("commodi", "in");
                                    put("corporis", "reiciendis");
                                    put("assumenda", "nemo");
                                }};
                                nextToken = "recusandae";
                                pageSize = 397533L;
                            }};) {{
                nextToken = "aperiam";
                pageSize = "cum";
                xAmzAlgorithm = "consectetur";
                xAmzContentSha256 = "in";
                xAmzCredential = "exercitationem";
                xAmzDate = "earum";
                xAmzSecurityToken = "facere";
                xAmzSignature = "numquam";
                xAmzSignedHeaders = "doloribus";
            }};            

            ListRecommendationsResponse res = sdk.sdk.listRecommendations(req);

            if (res.listRecommendationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listSuppressedDestinations

Retrieves a list of email addresses that are on the suppression list for your account.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListSuppressedDestinationsRequest;
import org.openapis.openapi.models.operations.ListSuppressedDestinationsResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SuppressionListReasonEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("suscipit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListSuppressedDestinationsRequest req = new ListSuppressedDestinationsRequest() {{
                endDate = OffsetDateTime.parse("2020-11-28T15:07:06.228Z");
                nextToken = "saepe";
                pageSize = 897071L;
                reason = new org.openapis.openapi.models.shared.SuppressionListReasonEnum[]{{
                    add(SuppressionListReasonEnum.BOUNCE),
                    add(SuppressionListReasonEnum.COMPLAINT),
                }};
                startDate = OffsetDateTime.parse("2022-10-01T23:04:48.771Z");
                xAmzAlgorithm = "amet";
                xAmzContentSha256 = "beatae";
                xAmzCredential = "dignissimos";
                xAmzDate = "a";
                xAmzSecurityToken = "debitis";
                xAmzSignature = "consectetur";
                xAmzSignedHeaders = "corporis";
            }};            

            ListSuppressedDestinationsResponse res = sdk.sdk.listSuppressedDestinations(req);

            if (res.listSuppressedDestinationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTagsForResource

Retrieve a list of the tags (keys and values) that are associated with a specified resource. A <i>tag</i> is a label that you optionally define and associate with a resource. Each tag consists of a required <i>tag key</i> and an optional associated <i>tag value</i>. A tag key is a general label that acts as a category for more specific tag values. A tag value acts as a descriptor within a tag key.

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
                .setSecurity(new Security("harum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTagsForResourceRequest req = new ListTagsForResourceRequest("laboriosam") {{
                xAmzAlgorithm = "ipsa";
                xAmzContentSha256 = "voluptates";
                xAmzCredential = "libero";
                xAmzDate = "vitae";
                xAmzSecurityToken = "accusamus";
                xAmzSignature = "similique";
                xAmzSignedHeaders = "tempora";
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
                .setSecurity(new Security("aspernatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutAccountDedicatedIpWarmupAttributesRequest req = new PutAccountDedicatedIpWarmupAttributesRequest(                new PutAccountDedicatedIpWarmupAttributesRequestBody() {{
                                autoWarmupEnabled = false;
                            }};) {{
                xAmzAlgorithm = "voluptas";
                xAmzContentSha256 = "voluptas";
                xAmzCredential = "voluptas";
                xAmzDate = "minima";
                xAmzSecurityToken = "nobis";
                xAmzSignature = "dolorum";
                xAmzSignedHeaders = "adipisci";
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

## putAccountDetails

Update your Amazon SES account details.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutAccountDetailsRequest;
import org.openapis.openapi.models.operations.PutAccountDetailsRequestBody;
import org.openapis.openapi.models.operations.PutAccountDetailsRequestBodyContactLanguageEnum;
import org.openapis.openapi.models.operations.PutAccountDetailsRequestBodyMailTypeEnum;
import org.openapis.openapi.models.operations.PutAccountDetailsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutAccountDetailsRequest req = new PutAccountDetailsRequest(                new PutAccountDetailsRequestBody(PutAccountDetailsRequestBodyMailTypeEnum.MARKETING, "blanditiis", "in") {{
                                additionalContactEmailAddresses = new String[]{{
                                    add("aliquam"),
                                    add("officiis"),
                                }};
                                contactLanguage = PutAccountDetailsRequestBodyContactLanguageEnum.JA;
                                productionAccessEnabled = false;
                            }};) {{
                xAmzAlgorithm = "ullam";
                xAmzContentSha256 = "adipisci";
                xAmzCredential = "cum";
                xAmzDate = "blanditiis";
                xAmzSecurityToken = "quas";
                xAmzSignature = "hic";
                xAmzSignedHeaders = "nesciunt";
            }};            

            PutAccountDetailsResponse res = sdk.sdk.putAccountDetails(req);

            if (res.putAccountDetailsResponse != null) {
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
                .setSecurity(new Security("culpa") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutAccountSendingAttributesRequest req = new PutAccountSendingAttributesRequest(                new PutAccountSendingAttributesRequestBody() {{
                                sendingEnabled = false;
                            }};) {{
                xAmzAlgorithm = "corrupti";
                xAmzContentSha256 = "pariatur";
                xAmzCredential = "totam";
                xAmzDate = "hic";
                xAmzSecurityToken = "exercitationem";
                xAmzSignature = "nobis";
                xAmzSignedHeaders = "sit";
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

## putAccountSuppressionAttributes

Change the settings for the account-level suppression list.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutAccountSuppressionAttributesRequest;
import org.openapis.openapi.models.operations.PutAccountSuppressionAttributesRequestBody;
import org.openapis.openapi.models.operations.PutAccountSuppressionAttributesResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SuppressionListReasonEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("rerum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutAccountSuppressionAttributesRequest req = new PutAccountSuppressionAttributesRequest(                new PutAccountSuppressionAttributesRequestBody() {{
                                suppressedReasons = new org.openapis.openapi.models.shared.SuppressionListReasonEnum[]{{
                                    add(SuppressionListReasonEnum.COMPLAINT),
                                }};
                            }};) {{
                xAmzAlgorithm = "explicabo";
                xAmzContentSha256 = "asperiores";
                xAmzCredential = "facilis";
                xAmzDate = "voluptate";
                xAmzSecurityToken = "expedita";
                xAmzSignature = "ab";
                xAmzSignedHeaders = "iste";
            }};            

            PutAccountSuppressionAttributesResponse res = sdk.sdk.putAccountSuppressionAttributes(req);

            if (res.putAccountSuppressionAttributesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putAccountVdmAttributes

<p>Update your Amazon SES account VDM attributes.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutAccountVdmAttributesRequest;
import org.openapis.openapi.models.operations.PutAccountVdmAttributesRequestBody;
import org.openapis.openapi.models.operations.PutAccountVdmAttributesRequestBodyVdmAttributes;
import org.openapis.openapi.models.operations.PutAccountVdmAttributesResponse;
import org.openapis.openapi.models.shared.DashboardAttributes;
import org.openapis.openapi.models.shared.FeatureStatusEnum;
import org.openapis.openapi.models.shared.GuardianAttributes;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutAccountVdmAttributesRequest req = new PutAccountVdmAttributesRequest(                new PutAccountVdmAttributesRequestBody(                new PutAccountVdmAttributesRequestBodyVdmAttributes() {{
                                                dashboardAttributes = new DashboardAttributes() {{
                                                    engagementMetrics = FeatureStatusEnum.DISABLED;
                                                }};;
                                                guardianAttributes = new GuardianAttributes() {{
                                                    optimizedSharedDelivery = FeatureStatusEnum.ENABLED;
                                                }};;
                                                vdmEnabled = FeatureStatusEnum.ENABLED;
                                            }};);) {{
                xAmzAlgorithm = "commodi";
                xAmzContentSha256 = "quidem";
                xAmzCredential = "explicabo";
                xAmzDate = "voluptas";
                xAmzSecurityToken = "unde";
                xAmzSignature = "architecto";
                xAmzSignedHeaders = "suscipit";
            }};            

            PutAccountVdmAttributesResponse res = sdk.sdk.putAccountVdmAttributes(req);

            if (res.putAccountVdmAttributesResponse != null) {
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
                .setSecurity(new Security("sapiente") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutConfigurationSetDeliveryOptionsRequest req = new PutConfigurationSetDeliveryOptionsRequest("debitis",                 new PutConfigurationSetDeliveryOptionsRequestBody() {{
                                sendingPoolName = "illo";
                                tlsPolicy = PutConfigurationSetDeliveryOptionsRequestBodyTlsPolicyEnum.OPTIONAL;
                            }};) {{
                xAmzAlgorithm = "perferendis";
                xAmzContentSha256 = "corrupti";
                xAmzCredential = "maiores";
                xAmzDate = "incidunt";
                xAmzSecurityToken = "sed";
                xAmzSignature = "provident";
                xAmzSignedHeaders = "eius";
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

Enable or disable collection of reputation metrics for emails that you send using a particular configuration set in a specific Amazon Web Services Region.

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
                .setSecurity(new Security("necessitatibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutConfigurationSetReputationOptionsRequest req = new PutConfigurationSetReputationOptionsRequest("ipsum",                 new PutConfigurationSetReputationOptionsRequestBody() {{
                                reputationMetricsEnabled = false;
                            }};) {{
                xAmzAlgorithm = "ea";
                xAmzContentSha256 = "occaecati";
                xAmzCredential = "quos";
                xAmzDate = "voluptatibus";
                xAmzSecurityToken = "tempora";
                xAmzSignature = "tempora";
                xAmzSignedHeaders = "voluptate";
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

Enable or disable email sending for messages that use a particular configuration set in a specific Amazon Web Services Region.

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
                .setSecurity(new Security("reiciendis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutConfigurationSetSendingOptionsRequest req = new PutConfigurationSetSendingOptionsRequest("ex",                 new PutConfigurationSetSendingOptionsRequestBody() {{
                                sendingEnabled = false;
                            }};) {{
                xAmzAlgorithm = "sit";
                xAmzContentSha256 = "non";
                xAmzCredential = "officiis";
                xAmzDate = "praesentium";
                xAmzSecurityToken = "facilis";
                xAmzSignature = "quaerat";
                xAmzSignedHeaders = "incidunt";
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

## putConfigurationSetSuppressionOptions

Specify the account suppression list preferences for a configuration set.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutConfigurationSetSuppressionOptionsRequest;
import org.openapis.openapi.models.operations.PutConfigurationSetSuppressionOptionsRequestBody;
import org.openapis.openapi.models.operations.PutConfigurationSetSuppressionOptionsResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SuppressionListReasonEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutConfigurationSetSuppressionOptionsRequest req = new PutConfigurationSetSuppressionOptionsRequest("debitis",                 new PutConfigurationSetSuppressionOptionsRequestBody() {{
                                suppressedReasons = new org.openapis.openapi.models.shared.SuppressionListReasonEnum[]{{
                                    add(SuppressionListReasonEnum.BOUNCE),
                                    add(SuppressionListReasonEnum.COMPLAINT),
                                    add(SuppressionListReasonEnum.COMPLAINT),
                                }};
                            }};) {{
                xAmzAlgorithm = "veniam";
                xAmzContentSha256 = "minima";
                xAmzCredential = "recusandae";
                xAmzDate = "reiciendis";
                xAmzSecurityToken = "nulla";
                xAmzSignature = "magni";
                xAmzSignedHeaders = "aperiam";
            }};            

            PutConfigurationSetSuppressionOptionsResponse res = sdk.sdk.putConfigurationSetSuppressionOptions(req);

            if (res.putConfigurationSetSuppressionOptionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putConfigurationSetTrackingOptions

Specify a custom domain to use for open and click tracking elements in email that you send.

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
                .setSecurity(new Security("saepe") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutConfigurationSetTrackingOptionsRequest req = new PutConfigurationSetTrackingOptionsRequest("numquam",                 new PutConfigurationSetTrackingOptionsRequestBody() {{
                                customRedirectDomain = "veniam";
                            }};) {{
                xAmzAlgorithm = "in";
                xAmzContentSha256 = "officiis";
                xAmzCredential = "beatae";
                xAmzDate = "laudantium";
                xAmzSecurityToken = "exercitationem";
                xAmzSignature = "praesentium";
                xAmzSignedHeaders = "cum";
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

## putConfigurationSetVdmOptions

<p>Specify VDM preferences for email that you send using the configuration set.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutConfigurationSetVdmOptionsRequest;
import org.openapis.openapi.models.operations.PutConfigurationSetVdmOptionsRequestBody;
import org.openapis.openapi.models.operations.PutConfigurationSetVdmOptionsRequestBodyVdmOptions;
import org.openapis.openapi.models.operations.PutConfigurationSetVdmOptionsResponse;
import org.openapis.openapi.models.shared.DashboardOptions;
import org.openapis.openapi.models.shared.FeatureStatusEnum;
import org.openapis.openapi.models.shared.GuardianOptions;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laboriosam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutConfigurationSetVdmOptionsRequest req = new PutConfigurationSetVdmOptionsRequest("dolorum",                 new PutConfigurationSetVdmOptionsRequestBody() {{
                                vdmOptions = new PutConfigurationSetVdmOptionsRequestBodyVdmOptions() {{
                                    dashboardOptions = new DashboardOptions() {{
                                        engagementMetrics = FeatureStatusEnum.DISABLED;
                                    }};;
                                    guardianOptions = new GuardianOptions() {{
                                        optimizedSharedDelivery = FeatureStatusEnum.DISABLED;
                                    }};;
                                }};;
                            }};) {{
                xAmzAlgorithm = "hic";
                xAmzContentSha256 = "expedita";
                xAmzCredential = "debitis";
                xAmzDate = "neque";
                xAmzSecurityToken = "dolorum";
                xAmzSignature = "nostrum";
                xAmzSignedHeaders = "officia";
            }};            

            PutConfigurationSetVdmOptionsResponse res = sdk.sdk.putConfigurationSetVdmOptions(req);

            if (res.putConfigurationSetVdmOptionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putDedicatedIpInPool

<p>Move a dedicated IP address to an existing dedicated IP pool.</p> <note> <p>The dedicated IP address that you specify must already exist, and must be associated with your Amazon Web Services account. </p> <p>The dedicated IP pool you specify must already exist. You can create a new pool by using the <code>CreateDedicatedIpPool</code> operation.</p> </note>

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
                .setSecurity(new Security("dolorum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutDedicatedIpInPoolRequest req = new PutDedicatedIpInPoolRequest("corrupti",                 new PutDedicatedIpInPoolRequestBody("accusamus");) {{
                xAmzAlgorithm = "tempora";
                xAmzContentSha256 = "atque";
                xAmzCredential = "fugit";
                xAmzDate = "ut";
                xAmzSecurityToken = "fugiat";
                xAmzSignature = "voluptatem";
                xAmzSignedHeaders = "culpa";
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
                .setSecurity(new Security("expedita") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutDedicatedIpWarmupAttributesRequest req = new PutDedicatedIpWarmupAttributesRequest("magnam",                 new PutDedicatedIpWarmupAttributesRequestBody(7884L);) {{
                xAmzAlgorithm = "esse";
                xAmzContentSha256 = "ipsam";
                xAmzCredential = "sit";
                xAmzDate = "voluptatum";
                xAmzSecurityToken = "quas";
                xAmzSignature = "repudiandae";
                xAmzSignedHeaders = "corporis";
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

<p>Enable or disable the Deliverability dashboard. When you enable the Deliverability dashboard, you gain access to reputation, deliverability, and other metrics for the domains that you use to send email. You also gain the ability to perform predictive inbox placement tests.</p> <p>When you use the Deliverability dashboard, you pay a monthly subscription charge, in addition to any other fees that you accrue by using Amazon SES and other Amazon Web Services services. For more information about the features and cost of a Deliverability dashboard subscription, see <a href="http://aws.amazon.com/ses/pricing/">Amazon SES Pricing</a>.</p>

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
                .setSecurity(new Security("et") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutDeliverabilityDashboardOptionRequest req = new PutDeliverabilityDashboardOptionRequest(                new PutDeliverabilityDashboardOptionRequestBody(false) {{
                                subscribedDomains = new org.openapis.openapi.models.shared.DomainDeliverabilityTrackingOption[]{{
                                    add(new DomainDeliverabilityTrackingOption() {{
                                        domain = "ex";
                                        inboxPlacementTrackingOption = new InboxPlacementTrackingOption() {{
                                            global = false;
                                            trackedIsps = new String[]{{
                                                add("sit"),
                                            }};
                                        }};
                                        subscriptionStartDate = OffsetDateTime.parse("2022-08-28T22:43:39.407Z");
                                    }}),
                                    add(new DomainDeliverabilityTrackingOption() {{
                                        domain = "saepe";
                                        inboxPlacementTrackingOption = new InboxPlacementTrackingOption() {{
                                            global = false;
                                            trackedIsps = new String[]{{
                                                add("consequatur"),
                                                add("incidunt"),
                                                add("reiciendis"),
                                            }};
                                        }};
                                        subscriptionStartDate = OffsetDateTime.parse("2022-04-23T19:46:15.105Z");
                                    }}),
                                    add(new DomainDeliverabilityTrackingOption() {{
                                        domain = "dicta";
                                        inboxPlacementTrackingOption = new InboxPlacementTrackingOption() {{
                                            global = false;
                                            trackedIsps = new String[]{{
                                                add("occaecati"),
                                            }};
                                        }};
                                        subscriptionStartDate = OffsetDateTime.parse("2022-04-22T05:26:04.783Z");
                                    }}),
                                }};
                            }};) {{
                xAmzAlgorithm = "atque";
                xAmzContentSha256 = "laborum";
                xAmzCredential = "nam";
                xAmzDate = "tenetur";
                xAmzSecurityToken = "laboriosam";
                xAmzSignature = "alias";
                xAmzSignedHeaders = "amet";
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

## putEmailIdentityConfigurationSetAttributes

Used to associate a configuration set with an email identity.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutEmailIdentityConfigurationSetAttributesRequest;
import org.openapis.openapi.models.operations.PutEmailIdentityConfigurationSetAttributesRequestBody;
import org.openapis.openapi.models.operations.PutEmailIdentityConfigurationSetAttributesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deserunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutEmailIdentityConfigurationSetAttributesRequest req = new PutEmailIdentityConfigurationSetAttributesRequest("voluptate",                 new PutEmailIdentityConfigurationSetAttributesRequestBody() {{
                                configurationSetName = "unde";
                            }};) {{
                xAmzAlgorithm = "reiciendis";
                xAmzContentSha256 = "provident";
                xAmzCredential = "repellendus";
                xAmzDate = "delectus";
                xAmzSecurityToken = "voluptates";
                xAmzSignature = "perferendis";
                xAmzSignedHeaders = "est";
            }};            

            PutEmailIdentityConfigurationSetAttributesResponse res = sdk.sdk.putEmailIdentityConfigurationSetAttributes(req);

            if (res.putEmailIdentityConfigurationSetAttributesResponse != null) {
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
                .setSecurity(new Security("quidem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutEmailIdentityDkimAttributesRequest req = new PutEmailIdentityDkimAttributesRequest("reprehenderit",                 new PutEmailIdentityDkimAttributesRequestBody() {{
                                signingEnabled = false;
                            }};) {{
                xAmzAlgorithm = "facere";
                xAmzContentSha256 = "fuga";
                xAmzCredential = "praesentium";
                xAmzDate = "mollitia";
                xAmzSecurityToken = "veniam";
                xAmzSignature = "voluptatem";
                xAmzSignedHeaders = "quisquam";
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

## putEmailIdentityDkimSigningAttributes

<p>Used to configure or change the DKIM authentication settings for an email domain identity. You can use this operation to do any of the following:</p> <ul> <li> <p>Update the signing attributes for an identity that uses Bring Your Own DKIM (BYODKIM).</p> </li> <li> <p>Update the key length that should be used for Easy DKIM.</p> </li> <li> <p>Change from using no DKIM authentication to using Easy DKIM.</p> </li> <li> <p>Change from using no DKIM authentication to using BYODKIM.</p> </li> <li> <p>Change from using Easy DKIM to using BYODKIM.</p> </li> <li> <p>Change from using BYODKIM to using Easy DKIM.</p> </li> </ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutEmailIdentityDkimSigningAttributesRequest;
import org.openapis.openapi.models.operations.PutEmailIdentityDkimSigningAttributesRequestBody;
import org.openapis.openapi.models.operations.PutEmailIdentityDkimSigningAttributesRequestBodySigningAttributes;
import org.openapis.openapi.models.operations.PutEmailIdentityDkimSigningAttributesRequestBodySigningAttributesOriginEnum;
import org.openapis.openapi.models.operations.PutEmailIdentityDkimSigningAttributesResponse;
import org.openapis.openapi.models.shared.DkimSigningKeyLengthEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repudiandae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutEmailIdentityDkimSigningAttributesRequest req = new PutEmailIdentityDkimSigningAttributesRequest("quasi",                 new PutEmailIdentityDkimSigningAttributesRequestBody(PutEmailIdentityDkimSigningAttributesRequestBodySigningAttributesOriginEnum.EXTERNAL) {{
                                signingAttributes = new PutEmailIdentityDkimSigningAttributesRequestBodySigningAttributes() {{
                                    domainSigningPrivateKey = "reprehenderit";
                                    domainSigningSelector = "asperiores";
                                    nextSigningKeyLength = DkimSigningKeyLengthEnum.RSA2048_BIT;
                                }};;
                            }};) {{
                xAmzAlgorithm = "suscipit";
                xAmzContentSha256 = "quidem";
                xAmzCredential = "maxime";
                xAmzDate = "et";
                xAmzSecurityToken = "esse";
                xAmzSignature = "amet";
                xAmzSignedHeaders = "assumenda";
            }};            

            PutEmailIdentityDkimSigningAttributesResponse res = sdk.sdk.putEmailIdentityDkimSigningAttributes(req);

            if (res.putEmailIdentityDkimSigningAttributesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putEmailIdentityFeedbackAttributes

<p>Used to enable or disable feedback forwarding for an identity. This setting determines what happens when an identity is used to send an email that results in a bounce or complaint event.</p> <p>If the value is <code>true</code>, you receive email notifications when bounce or complaint events occur. These notifications are sent to the address that you specified in the <code>Return-Path</code> header of the original email.</p> <p>You're required to have a method of tracking bounces and complaints. If you haven't set up another mechanism for receiving bounce or complaint notifications (for example, by setting up an event destination), you receive an email notification when these events occur (even if this setting is disabled).</p>

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
                .setSecurity(new Security("ea") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutEmailIdentityFeedbackAttributesRequest req = new PutEmailIdentityFeedbackAttributesRequest("atque",                 new PutEmailIdentityFeedbackAttributesRequestBody() {{
                                emailForwardingEnabled = false;
                            }};) {{
                xAmzAlgorithm = "error";
                xAmzContentSha256 = "officiis";
                xAmzCredential = "officiis";
                xAmzDate = "accusamus";
                xAmzSecurityToken = "natus";
                xAmzSignature = "minima";
                xAmzSignedHeaders = "aspernatur";
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
                .setSecurity(new Security("ex") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutEmailIdentityMailFromAttributesRequest req = new PutEmailIdentityMailFromAttributesRequest("maiores",                 new PutEmailIdentityMailFromAttributesRequestBody() {{
                                behaviorOnMxFailure = PutEmailIdentityMailFromAttributesRequestBodyBehaviorOnMxFailureEnum.REJECT_MESSAGE;
                                mailFromDomain = "at";
                            }};) {{
                xAmzAlgorithm = "error";
                xAmzContentSha256 = "blanditiis";
                xAmzCredential = "suscipit";
                xAmzDate = "repudiandae";
                xAmzSecurityToken = "atque";
                xAmzSignature = "atque";
                xAmzSignedHeaders = "sunt";
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

## putSuppressedDestination

Adds an email address to the suppression list for your account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutSuppressedDestinationRequest;
import org.openapis.openapi.models.operations.PutSuppressedDestinationRequestBody;
import org.openapis.openapi.models.operations.PutSuppressedDestinationRequestBodyReasonEnum;
import org.openapis.openapi.models.operations.PutSuppressedDestinationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("recusandae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutSuppressedDestinationRequest req = new PutSuppressedDestinationRequest(                new PutSuppressedDestinationRequestBody("dolorum", PutSuppressedDestinationRequestBodyReasonEnum.COMPLAINT);) {{
                xAmzAlgorithm = "labore";
                xAmzContentSha256 = "reiciendis";
                xAmzCredential = "doloremque";
                xAmzDate = "repudiandae";
                xAmzSecurityToken = "dicta";
                xAmzSignature = "accusantium";
                xAmzSignedHeaders = "beatae";
            }};            

            PutSuppressedDestinationResponse res = sdk.sdk.putSuppressedDestination(req);

            if (res.putSuppressedDestinationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## sendBulkEmail

Composes an email message to multiple destinations.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SendBulkEmailRequest;
import org.openapis.openapi.models.operations.SendBulkEmailRequestBody;
import org.openapis.openapi.models.operations.SendBulkEmailRequestBodyDefaultContent;
import org.openapis.openapi.models.operations.SendBulkEmailResponse;
import org.openapis.openapi.models.shared.BulkEmailEntry;
import org.openapis.openapi.models.shared.Destination;
import org.openapis.openapi.models.shared.MessageTag;
import org.openapis.openapi.models.shared.ReplacementEmailContent;
import org.openapis.openapi.models.shared.ReplacementTemplate;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Template;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            SendBulkEmailRequest req = new SendBulkEmailRequest(                new SendBulkEmailRequestBody(                new org.openapis.openapi.models.shared.BulkEmailEntry[]{{
                                                add(new BulkEmailEntry(                new Destination() {{
                                                                    bccAddresses = new String[]{{
                                                                        add("corporis"),
                                                                    }};
                                                                    ccAddresses = new String[]{{
                                                                        add("nihil"),
                                                                        add("mollitia"),
                                                                        add("voluptas"),
                                                                    }};
                                                                    toAddresses = new String[]{{
                                                                        add("maiores"),
                                                                    }};
                                                                }};) {{
                                                    destination = new Destination() {{
                                                        bccAddresses = new String[]{{
                                                            add("velit"),
                                                            add("a"),
                                                        }};
                                                        ccAddresses = new String[]{{
                                                            add("magnam"),
                                                            add("saepe"),
                                                            add("consequuntur"),
                                                        }};
                                                        toAddresses = new String[]{{
                                                            add("officiis"),
                                                            add("perspiciatis"),
                                                            add("in"),
                                                        }};
                                                    }};
                                                    replacementEmailContent = new ReplacementEmailContent() {{
                                                        replacementTemplate = new ReplacementTemplate() {{
                                                            replacementTemplateData = "adipisci";
                                                        }};
                                                    }};
                                                    replacementTags = new org.openapis.openapi.models.shared.MessageTag[]{{
                                                        add(new MessageTag("error", "illo") {{
                                                            name = "Carlos Considine";
                                                            value = "reprehenderit";
                                                        }}),
                                                        add(new MessageTag("iure", "ipsa") {{
                                                            name = "Melody Vandervort";
                                                            value = "doloremque";
                                                        }}),
                                                        add(new MessageTag("iure", "necessitatibus") {{
                                                            name = "Frank Krajcik";
                                                            value = "cum";
                                                        }}),
                                                        add(new MessageTag("ad", "repellat") {{
                                                            name = "Maggie Rau";
                                                            value = "aliquam";
                                                        }}),
                                                    }};
                                                }}),
                                                add(new BulkEmailEntry(                new Destination() {{
                                                                    bccAddresses = new String[]{{
                                                                        add("doloribus"),
                                                                        add("ullam"),
                                                                        add("in"),
                                                                        add("nam"),
                                                                    }};
                                                                    ccAddresses = new String[]{{
                                                                        add("officia"),
                                                                        add("laborum"),
                                                                        add("placeat"),
                                                                        add("modi"),
                                                                    }};
                                                                    toAddresses = new String[]{{
                                                                        add("molestias"),
                                                                        add("officiis"),
                                                                        add("sapiente"),
                                                                        add("cumque"),
                                                                    }};
                                                                }};) {{
                                                    destination = new Destination() {{
                                                        bccAddresses = new String[]{{
                                                            add("dolores"),
                                                            add("id"),
                                                            add("minima"),
                                                            add("dolore"),
                                                        }};
                                                        ccAddresses = new String[]{{
                                                            add("nesciunt"),
                                                            add("quae"),
                                                            add("recusandae"),
                                                        }};
                                                        toAddresses = new String[]{{
                                                            add("quaerat"),
                                                            add("molestiae"),
                                                            add("ex"),
                                                        }};
                                                    }};
                                                    replacementEmailContent = new ReplacementEmailContent() {{
                                                        replacementTemplate = new ReplacementTemplate() {{
                                                            replacementTemplateData = "ut";
                                                        }};
                                                    }};
                                                    replacementTags = new org.openapis.openapi.models.shared.MessageTag[]{{
                                                        add(new MessageTag("esse", "provident") {{
                                                            name = "Raquel Larkin";
                                                            value = "recusandae";
                                                        }}),
                                                        add(new MessageTag("quasi", "animi") {{
                                                            name = "Natalie Witting";
                                                            value = "ullam";
                                                        }}),
                                                        add(new MessageTag("aliquid", "accusantium") {{
                                                            name = "Angie McLaughlin";
                                                            value = "ex";
                                                        }}),
                                                    }};
                                                }}),
                                            }},                 new SendBulkEmailRequestBodyDefaultContent() {{
                                                template = new Template() {{
                                                    templateArn = "vitae";
                                                    templateData = "rerum";
                                                    templateName = "tempora";
                                                }};;
                                            }};) {{
                                configurationSetName = "quis";
                                defaultEmailTags = new org.openapis.openapi.models.shared.MessageTag[]{{
                                    add(new MessageTag("eius", "rem") {{
                                        name = "Mrs. Erma Berge";
                                        value = "eum";
                                    }}),
                                }};
                                feedbackForwardingEmailAddress = "at";
                                feedbackForwardingEmailAddressIdentityArn = "impedit";
                                fromEmailAddress = "eos";
                                fromEmailAddressIdentityArn = "sapiente";
                                replyToAddresses = new String[]{{
                                    add("dicta"),
                                    add("minima"),
                                }};
                            }};) {{
                xAmzAlgorithm = "beatae";
                xAmzContentSha256 = "cupiditate";
                xAmzCredential = "provident";
                xAmzDate = "earum";
                xAmzSecurityToken = "soluta";
                xAmzSignature = "hic";
                xAmzSignedHeaders = "illum";
            }};            

            SendBulkEmailResponse res = sdk.sdk.sendBulkEmail(req);

            if (res.sendBulkEmailResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## sendCustomVerificationEmail

<p>Adds an email address to the list of identities for your Amazon SES account in the current Amazon Web Services Region and attempts to verify it. As a result of executing this operation, a customized verification email is sent to the specified address.</p> <p>To use this operation, you must first create a custom verification email template. For more information about creating and using custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/dg/creating-identities.html#send-email-verify-address-custom">Using custom verification email templates</a> in the <i>Amazon SES Developer Guide</i>.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SendCustomVerificationEmailRequest;
import org.openapis.openapi.models.operations.SendCustomVerificationEmailRequestBody;
import org.openapis.openapi.models.operations.SendCustomVerificationEmailResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eaque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            SendCustomVerificationEmailRequest req = new SendCustomVerificationEmailRequest(                new SendCustomVerificationEmailRequestBody("earum", "perspiciatis") {{
                                configurationSetName = "maiores";
                            }};) {{
                xAmzAlgorithm = "debitis";
                xAmzContentSha256 = "aliquid";
                xAmzCredential = "porro";
                xAmzDate = "suscipit";
                xAmzSecurityToken = "dolorem";
                xAmzSignature = "fugit";
                xAmzSignedHeaders = "cumque";
            }};            

            SendCustomVerificationEmailResponse res = sdk.sdk.sendCustomVerificationEmail(req);

            if (res.sendCustomVerificationEmailResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## sendEmail

<p>Sends an email message. You can use the Amazon SES API v2 to send the following types of messages:</p> <ul> <li> <p> <b>Simple</b> – A standard email message. When you create this type of message, you specify the sender, the recipient, and the message body, and Amazon SES assembles the message for you.</p> </li> <li> <p> <b>Raw</b> – A raw, MIME-formatted email message. When you send this type of email, you have to specify all of the message headers, as well as the message body. You can use this message type to send messages that contain attachments. The message that you specify has to be a valid MIME message.</p> </li> <li> <p> <b>Templated</b> – A message that contains personalization tags. When you send this type of email, Amazon SES API v2 automatically replaces the tags with values that you specify.</p> </li> </ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SendEmailRequest;
import org.openapis.openapi.models.operations.SendEmailRequestBody;
import org.openapis.openapi.models.operations.SendEmailRequestBodyContent;
import org.openapis.openapi.models.operations.SendEmailRequestBodyDestination;
import org.openapis.openapi.models.operations.SendEmailRequestBodyListManagementOptions;
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
                .setSecurity(new Security("fuga") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            SendEmailRequest req = new SendEmailRequest(                new SendEmailRequestBody(                new SendEmailRequestBodyContent() {{
                                                raw = new RawMessage("ratione");;
                                                simple = new Message(                new Body() {{
                                                                    html = new Content("animi") {{
                                                                        charset = "necessitatibus";
                                                                    }};;
                                                                    text = new Content("nulla") {{
                                                                        charset = "consequatur";
                                                                    }};;
                                                                }};,                 new Content("quasi") {{
                                                                    charset = "et";
                                                                }};);;
                                                template = new Template() {{
                                                    templateArn = "ducimus";
                                                    templateData = "natus";
                                                    templateName = "occaecati";
                                                }};;
                                            }};) {{
                                configurationSetName = "suscipit";
                                destination = new SendEmailRequestBodyDestination() {{
                                    bccAddresses = new String[]{{
                                        add("quasi"),
                                    }};
                                    ccAddresses = new String[]{{
                                        add("doloribus"),
                                    }};
                                    toAddresses = new String[]{{
                                        add("necessitatibus"),
                                        add("ipsa"),
                                        add("tempora"),
                                        add("nihil"),
                                    }};
                                }};;
                                emailTags = new org.openapis.openapi.models.shared.MessageTag[]{{
                                    add(new MessageTag("vel", "architecto") {{
                                        name = "Marlene Koch";
                                        value = "reiciendis";
                                    }}),
                                    add(new MessageTag("ex", "consectetur") {{
                                        name = "Brian Carroll";
                                        value = "esse";
                                    }}),
                                }};
                                feedbackForwardingEmailAddress = "aliquid";
                                feedbackForwardingEmailAddressIdentityArn = "ipsa";
                                fromEmailAddress = "laborum";
                                fromEmailAddressIdentityArn = "sunt";
                                listManagementOptions = new SendEmailRequestBodyListManagementOptions() {{
                                    contactListName = "nostrum";
                                    topicName = "fugiat";
                                }};;
                                replyToAddresses = new String[]{{
                                    add("aliquid"),
                                    add("officia"),
                                    add("suscipit"),
                                }};
                            }};) {{
                xAmzAlgorithm = "aliquid";
                xAmzContentSha256 = "perferendis";
                xAmzCredential = "eum";
                xAmzDate = "voluptas";
                xAmzSecurityToken = "iste";
                xAmzSignature = "id";
                xAmzSignedHeaders = "ab";
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

<p>Add one or more tags (keys and values) to a specified resource. A <i>tag</i> is a label that you optionally define and associate with a resource. Tags can help you categorize and manage resources in different ways, such as by purpose, owner, environment, or other criteria. A resource can have as many as 50 tags.</p> <p>Each tag consists of a required <i>tag key</i> and an associated <i>tag value</i>, both of which you define. A tag key is a general label that acts as a category for more specific tag values. A tag value acts as a descriptor within a tag key.</p>

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
                .setSecurity(new Security("error") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagResourceRequest req = new TagResourceRequest(                new TagResourceRequestBody("possimus",                 new org.openapis.openapi.models.shared.Tag[]{{
                                                add(new Tag("libero", "ad") {{
                                                    key = "mollitia";
                                                    value = "laborum";
                                                }}),
                                                add(new Tag("vitae", "repellendus") {{
                                                    key = "deleniti";
                                                    value = "enim";
                                                }}),
                                                add(new Tag("ex", "ut") {{
                                                    key = "ex";
                                                    value = "quo";
                                                }}),
                                                add(new Tag("voluptatem", "molestias") {{
                                                    key = "ad";
                                                    value = "expedita";
                                                }}),
                                            }});) {{
                xAmzAlgorithm = "cum";
                xAmzContentSha256 = "aliquid";
                xAmzCredential = "beatae";
                xAmzDate = "voluptatum";
                xAmzSecurityToken = "omnis";
                xAmzSignature = "veritatis";
                xAmzSignedHeaders = "rerum";
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

## testRenderEmailTemplate

<p>Creates a preview of the MIME content of an email when provided with a template and a set of replacement data.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TestRenderEmailTemplateRequest;
import org.openapis.openapi.models.operations.TestRenderEmailTemplateRequestBody;
import org.openapis.openapi.models.operations.TestRenderEmailTemplateResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("est") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TestRenderEmailTemplateRequest req = new TestRenderEmailTemplateRequest(                new TestRenderEmailTemplateRequestBody("culpa");, "voluptatem") {{
                xAmzAlgorithm = "sapiente";
                xAmzContentSha256 = "officiis";
                xAmzCredential = "architecto";
                xAmzDate = "fuga";
                xAmzSecurityToken = "pariatur";
                xAmzSignature = "debitis";
                xAmzSignedHeaders = "voluptatem";
            }};            

            TestRenderEmailTemplateResponse res = sdk.sdk.testRenderEmailTemplate(req);

            if (res.testRenderEmailTemplateResponse != null) {
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
                .setSecurity(new Security("alias") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UntagResourceRequest req = new UntagResourceRequest("deleniti",                 new String[]{{
                                add("ex"),
                                add("sapiente"),
                                add("rem"),
                                add("minus"),
                            }}) {{
                xAmzAlgorithm = "nemo";
                xAmzContentSha256 = "asperiores";
                xAmzCredential = "ratione";
                xAmzDate = "ullam";
                xAmzSecurityToken = "perferendis";
                xAmzSignature = "illum";
                xAmzSignedHeaders = "totam";
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

<p>Update the configuration of an event destination for a configuration set.</p> <p> <i>Events</i> include message sends, deliveries, opens, clicks, bounces, and complaints. <i>Event destinations</i> are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.</p>

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

            UpdateConfigurationSetEventDestinationRequest req = new UpdateConfigurationSetEventDestinationRequest("quibusdam", "nam",                 new UpdateConfigurationSetEventDestinationRequestBody(                new UpdateConfigurationSetEventDestinationRequestBodyEventDestination() {{
                                                cloudWatchDestination = new CloudWatchDestination(                new org.openapis.openapi.models.shared.CloudWatchDimensionConfiguration[]{{
                                                                    add(new CloudWatchDimensionConfiguration("inventore", "deleniti", DimensionValueSourceEnum.MESSAGE_TAG) {{
                                                                        defaultDimensionValue = "culpa";
                                                                        dimensionName = "dolor";
                                                                        dimensionValueSource = DimensionValueSourceEnum.MESSAGE_TAG;
                                                                    }}),
                                                                    add(new CloudWatchDimensionConfiguration("architecto", "sit", DimensionValueSourceEnum.MESSAGE_TAG) {{
                                                                        defaultDimensionValue = "tempora";
                                                                        dimensionName = "dolor";
                                                                        dimensionValueSource = DimensionValueSourceEnum.MESSAGE_TAG;
                                                                    }}),
                                                                }});;
                                                enabled = false;
                                                kinesisFirehoseDestination = new KinesisFirehoseDestination("fugit", "ab");;
                                                matchingEventTypes = new org.openapis.openapi.models.shared.EventTypeEnum[]{{
                                                    add(EventTypeEnum.SEND),
                                                    add(EventTypeEnum.BOUNCE),
                                                    add(EventTypeEnum.DELIVERY_DELAY),
                                                }};
                                                pinpointDestination = new PinpointDestination() {{
                                                    applicationArn = "ipsam";
                                                }};;
                                                snsDestination = new SnsDestination("consequuntur");;
                                            }};);) {{
                xAmzAlgorithm = "ipsa";
                xAmzContentSha256 = "quas";
                xAmzCredential = "eveniet";
                xAmzDate = "impedit";
                xAmzSecurityToken = "officiis";
                xAmzSignature = "esse";
                xAmzSignedHeaders = "necessitatibus";
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

## updateContact

Updates a contact's preferences for a list. It is not necessary to specify all existing topic preferences in the TopicPreferences object, just the ones that need updating.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateContactRequest;
import org.openapis.openapi.models.operations.UpdateContactRequestBody;
import org.openapis.openapi.models.operations.UpdateContactResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SubscriptionStatusEnum;
import org.openapis.openapi.models.shared.TopicPreference;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sed") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateContactRequest req = new UpdateContactRequest("veniam", "nesciunt",                 new UpdateContactRequestBody() {{
                                attributesData = "expedita";
                                topicPreferences = new org.openapis.openapi.models.shared.TopicPreference[]{{
                                    add(new TopicPreference(SubscriptionStatusEnum.OPT_IN, "exercitationem") {{
                                        subscriptionStatus = SubscriptionStatusEnum.OPT_IN;
                                        topicName = "voluptatum";
                                    }}),
                                    add(new TopicPreference(SubscriptionStatusEnum.OPT_IN, "nobis") {{
                                        subscriptionStatus = SubscriptionStatusEnum.OPT_IN;
                                        topicName = "porro";
                                    }}),
                                }};
                                unsubscribeAll = false;
                            }};) {{
                xAmzAlgorithm = "laboriosam";
                xAmzContentSha256 = "recusandae";
                xAmzCredential = "consequuntur";
                xAmzDate = "voluptatem";
                xAmzSecurityToken = "exercitationem";
                xAmzSignature = "necessitatibus";
                xAmzSignedHeaders = "quasi";
            }};            

            UpdateContactResponse res = sdk.sdk.updateContact(req);

            if (res.updateContactResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateContactList

Updates contact list metadata. This operation does a complete replacement.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateContactListRequest;
import org.openapis.openapi.models.operations.UpdateContactListRequestBody;
import org.openapis.openapi.models.operations.UpdateContactListResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SubscriptionStatusEnum;
import org.openapis.openapi.models.shared.Topic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nisi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateContactListRequest req = new UpdateContactListRequest("at",                 new UpdateContactListRequestBody() {{
                                description = "vero";
                                topics = new org.openapis.openapi.models.shared.Topic[]{{
                                    add(new Topic(SubscriptionStatusEnum.OPT_OUT, "occaecati", "nemo") {{
                                        defaultSubscriptionStatus = SubscriptionStatusEnum.OPT_OUT;
                                        description = "sequi";
                                        displayName = "doloribus";
                                        topicName = "repudiandae";
                                    }}),
                                    add(new Topic(SubscriptionStatusEnum.OPT_IN, "nemo", "quos") {{
                                        defaultSubscriptionStatus = SubscriptionStatusEnum.OPT_IN;
                                        description = "blanditiis";
                                        displayName = "officia";
                                        topicName = "voluptas";
                                    }}),
                                    add(new Topic(SubscriptionStatusEnum.OPT_OUT, "laudantium", "incidunt") {{
                                        defaultSubscriptionStatus = SubscriptionStatusEnum.OPT_IN;
                                        description = "aspernatur";
                                        displayName = "ducimus";
                                        topicName = "nesciunt";
                                    }}),
                                }};
                            }};) {{
                xAmzAlgorithm = "quasi";
                xAmzContentSha256 = "rem";
                xAmzCredential = "fugiat";
                xAmzDate = "dicta";
                xAmzSecurityToken = "nisi";
                xAmzSignature = "consequuntur";
                xAmzSignedHeaders = "consectetur";
            }};            

            UpdateContactListResponse res = sdk.sdk.updateContactList(req);

            if (res.updateContactListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateCustomVerificationEmailTemplate

<p>Updates an existing custom verification email template.</p> <p>For more information about custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/dg/creating-identities.html#send-email-verify-address-custom">Using custom verification email templates</a> in the <i>Amazon SES Developer Guide</i>.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateCustomVerificationEmailTemplateRequest;
import org.openapis.openapi.models.operations.UpdateCustomVerificationEmailTemplateRequestBody;
import org.openapis.openapi.models.operations.UpdateCustomVerificationEmailTemplateResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aperiam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateCustomVerificationEmailTemplateRequest req = new UpdateCustomVerificationEmailTemplateRequest(                new UpdateCustomVerificationEmailTemplateRequestBody("cupiditate", "reiciendis", "soluta", "alias", "omnis");, "eos") {{
                xAmzAlgorithm = "occaecati";
                xAmzContentSha256 = "iste";
                xAmzCredential = "magni";
                xAmzDate = "inventore";
                xAmzSecurityToken = "fuga";
                xAmzSignature = "accusamus";
                xAmzSignedHeaders = "voluptatibus";
            }};            

            UpdateCustomVerificationEmailTemplateResponse res = sdk.sdk.updateCustomVerificationEmailTemplate(req);

            if (res.updateCustomVerificationEmailTemplateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateEmailIdentityPolicy

<p>Updates the specified sending authorization policy for the given identity (an email address or a domain). This API returns successfully even if a policy with the specified name does not exist.</p> <note> <p>This API is for the identity owner only. If you have not verified the identity, this API will return an error.</p> </note> <p>Sending authorization is a feature that enables an identity owner to authorize other senders to use its identities. For information about using sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateEmailIdentityPolicyRequest;
import org.openapis.openapi.models.operations.UpdateEmailIdentityPolicyRequestBody;
import org.openapis.openapi.models.operations.UpdateEmailIdentityPolicyResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("distinctio") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateEmailIdentityPolicyRequest req = new UpdateEmailIdentityPolicyRequest("omnis", "delectus",                 new UpdateEmailIdentityPolicyRequestBody("minima");) {{
                xAmzAlgorithm = "praesentium";
                xAmzContentSha256 = "maxime";
                xAmzCredential = "magnam";
                xAmzDate = "temporibus";
                xAmzSecurityToken = "quos";
                xAmzSignature = "commodi";
                xAmzSignedHeaders = "itaque";
            }};            

            UpdateEmailIdentityPolicyResponse res = sdk.sdk.updateEmailIdentityPolicy(req);

            if (res.updateEmailIdentityPolicyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateEmailTemplate

<p>Updates an email template. Email templates enable you to send personalized email to one or more destinations in a single API operation. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-personalized-email-api.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateEmailTemplateRequest;
import org.openapis.openapi.models.operations.UpdateEmailTemplateRequestBody;
import org.openapis.openapi.models.operations.UpdateEmailTemplateRequestBodyTemplateContent;
import org.openapis.openapi.models.operations.UpdateEmailTemplateResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("commodi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateEmailTemplateRequest req = new UpdateEmailTemplateRequest(                new UpdateEmailTemplateRequestBody(                new UpdateEmailTemplateRequestBodyTemplateContent() {{
                                                html = "totam";
                                                subject = "earum";
                                                text = "modi";
                                            }};);, "nam") {{
                xAmzAlgorithm = "vero";
                xAmzContentSha256 = "voluptatem";
                xAmzCredential = "ipsam";
                xAmzDate = "vel";
                xAmzSecurityToken = "alias";
                xAmzSignature = "quasi";
                xAmzSignedHeaders = "non";
            }};            

            UpdateEmailTemplateResponse res = sdk.sdk.updateEmailTemplate(req);

            if (res.updateEmailTemplateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
