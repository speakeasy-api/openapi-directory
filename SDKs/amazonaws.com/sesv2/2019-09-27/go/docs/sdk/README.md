# SDK

## Overview

<fullname>Amazon SES API v2</fullname> <p> <a href="http://aws.amazon.com/ses">Amazon SES</a> is an Amazon Web Services service that you can use to send email messages to your customers.</p> <p>If you're new to Amazon SES API v2, you might find it helpful to review the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/">Amazon Simple Email Service Developer Guide</a>. The <i>Amazon SES Developer Guide</i> provides information and code samples that demonstrate how to use Amazon SES API v2 features programmatically.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/email/>
### Available Operations

* [BatchGetMetricData](#batchgetmetricdata) - <p>Retrieves batches of metric data collected based on your sending activity.</p> <p>You can execute this operation no more than 16 times per second, and with at most 160 queries from the batches per second (cumulative).</p>
* [CreateConfigurationSet](#createconfigurationset) - Create a configuration set. <i>Configuration sets</i> are groups of rules that you can apply to the emails that you send. You apply a configuration set to an email by specifying the name of the configuration set when you call the Amazon SES API v2. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email. 
* [CreateConfigurationSetEventDestination](#createconfigurationseteventdestination) - <p>Create an event destination. <i>Events</i> include message sends, deliveries, opens, clicks, bounces, and complaints. <i>Event destinations</i> are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.</p> <p>A single configuration set can include more than one event destination.</p>
* [CreateContact](#createcontact) - Creates a contact, which is an end-user who is receiving the email, and adds them to a contact list.
* [CreateContactList](#createcontactlist) - Creates a contact list.
* [CreateCustomVerificationEmailTemplate](#createcustomverificationemailtemplate) - <p>Creates a new custom verification email template.</p> <p>For more information about custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/dg/creating-identities.html#send-email-verify-address-custom">Using custom verification email templates</a> in the <i>Amazon SES Developer Guide</i>.</p> <p>You can execute this operation no more than once per second.</p>
* [CreateDedicatedIPPool](#creatededicatedippool) - Create a new pool of dedicated IP addresses. A pool can include one or more dedicated IP addresses that are associated with your Amazon Web Services account. You can associate a pool with a configuration set. When you send an email that uses that configuration set, the message is sent from one of the addresses in the associated pool.
* [CreateDeliverabilityTestReport](#createdeliverabilitytestreport) - Create a new predictive inbox placement test. Predictive inbox placement tests can help you predict how your messages will be handled by various email providers around the world. When you perform a predictive inbox placement test, you provide a sample message that contains the content that you plan to send to your customers. Amazon SES then sends that message to special email addresses spread across several major email providers. After about 24 hours, the test is complete, and you can use the <code>GetDeliverabilityTestReport</code> operation to view the results of the test.
* [CreateEmailIdentity](#createemailidentity) - <p>Starts the process of verifying an email identity. An <i>identity</i> is an email address or domain that you use when you send email. Before you can use an identity to send email, you first have to verify it. By verifying an identity, you demonstrate that you're the owner of the identity, and that you've given Amazon SES API v2 permission to send email from the identity.</p> <p>When you verify an email address, Amazon SES sends an email to the address. Your email address is verified as soon as you follow the link in the verification email. </p> <p>When you verify a domain without specifying the <code>DkimSigningAttributes</code> object, this operation provides a set of DKIM tokens. You can convert these tokens into CNAME records, which you then add to the DNS configuration for your domain. Your domain is verified when Amazon SES detects these records in the DNS configuration for your domain. This verification method is known as <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/easy-dkim.html">Easy DKIM</a>.</p> <p>Alternatively, you can perform the verification process by providing your own public-private key pair. This verification method is known as Bring Your Own DKIM (BYODKIM). To use BYODKIM, your call to the <code>CreateEmailIdentity</code> operation has to include the <code>DkimSigningAttributes</code> object. When you specify this object, you provide a selector (a component of the DNS record name that identifies the public key to use for DKIM authentication) and a private key.</p> <p>When you verify a domain, this operation provides a set of DKIM tokens, which you can convert into CNAME tokens. You add these CNAME tokens to the DNS configuration for your domain. Your domain is verified when Amazon SES detects these records in the DNS configuration for your domain. For some DNS providers, it can take 72 hours or more to complete the domain verification process.</p> <p>Additionally, you can associate an existing configuration set with the email identity that you're verifying.</p>
* [CreateEmailIdentityPolicy](#createemailidentitypolicy) - <p>Creates the specified sending authorization policy for the given identity (an email address or a domain).</p> <note> <p>This API is for the identity owner only. If you have not verified the identity, this API will return an error.</p> </note> <p>Sending authorization is a feature that enables an identity owner to authorize other senders to use its identities. For information about using sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
* [CreateEmailTemplate](#createemailtemplate) - <p>Creates an email template. Email templates enable you to send personalized email to one or more destinations in a single API operation. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-personalized-email-api.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
* [CreateImportJob](#createimportjob) - Creates an import job for a data destination.
* [DeleteConfigurationSet](#deleteconfigurationset) - <p>Delete an existing configuration set.</p> <p> <i>Configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p>
* [DeleteConfigurationSetEventDestination](#deleteconfigurationseteventdestination) - <p>Delete an event destination.</p> <p> <i>Events</i> include message sends, deliveries, opens, clicks, bounces, and complaints. <i>Event destinations</i> are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.</p>
* [DeleteContact](#deletecontact) - Removes a contact from a contact list.
* [DeleteContactList](#deletecontactlist) - Deletes a contact list and all of the contacts on that list.
* [DeleteCustomVerificationEmailTemplate](#deletecustomverificationemailtemplate) - <p>Deletes an existing custom verification email template.</p> <p>For more information about custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/dg/creating-identities.html#send-email-verify-address-custom">Using custom verification email templates</a> in the <i>Amazon SES Developer Guide</i>.</p> <p>You can execute this operation no more than once per second.</p>
* [DeleteDedicatedIPPool](#deletededicatedippool) - Delete a dedicated IP pool.
* [DeleteEmailIdentity](#deleteemailidentity) - Deletes an email identity. An identity can be either an email address or a domain name.
* [DeleteEmailIdentityPolicy](#deleteemailidentitypolicy) - <p>Deletes the specified sending authorization policy for the given identity (an email address or a domain). This API returns successfully even if a policy with the specified name does not exist.</p> <note> <p>This API is for the identity owner only. If you have not verified the identity, this API will return an error.</p> </note> <p>Sending authorization is a feature that enables an identity owner to authorize other senders to use its identities. For information about using sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
* [DeleteEmailTemplate](#deleteemailtemplate) - <p>Deletes an email template.</p> <p>You can execute this operation no more than once per second.</p>
* [DeleteSuppressedDestination](#deletesuppresseddestination) - Removes an email address from the suppression list for your account.
* [GetAccount](#getaccount) - Obtain information about the email-sending status and capabilities of your Amazon SES account in the current Amazon Web Services Region.
* [GetBlacklistReports](#getblacklistreports) - Retrieve a list of the blacklists that your dedicated IP addresses appear on.
* [GetConfigurationSet](#getconfigurationset) - <p>Get information about an existing configuration set, including the dedicated IP pool that it's associated with, whether or not it's enabled for sending email, and more.</p> <p> <i>Configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p>
* [GetConfigurationSetEventDestinations](#getconfigurationseteventdestinations) - <p>Retrieve a list of event destinations that are associated with a configuration set.</p> <p> <i>Events</i> include message sends, deliveries, opens, clicks, bounces, and complaints. <i>Event destinations</i> are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.</p>
* [GetContact](#getcontact) - Returns a contact from a contact list.
* [GetContactList](#getcontactlist) - Returns contact list metadata. It does not return any information about the contacts present in the list.
* [GetCustomVerificationEmailTemplate](#getcustomverificationemailtemplate) - <p>Returns the custom email verification template for the template name you specify.</p> <p>For more information about custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/dg/creating-identities.html#send-email-verify-address-custom">Using custom verification email templates</a> in the <i>Amazon SES Developer Guide</i>.</p> <p>You can execute this operation no more than once per second.</p>
* [GetDedicatedIP](#getdedicatedip) - Get information about a dedicated IP address, including the name of the dedicated IP pool that it's associated with, as well information about the automatic warm-up process for the address.
* [GetDedicatedIPPool](#getdedicatedippool) - Retrieve information about the dedicated pool.
* [GetDedicatedIps](#getdedicatedips) - List the dedicated IP addresses that are associated with your Amazon Web Services account.
* [GetDeliverabilityDashboardOptions](#getdeliverabilitydashboardoptions) - <p>Retrieve information about the status of the Deliverability dashboard for your account. When the Deliverability dashboard is enabled, you gain access to reputation, deliverability, and other metrics for the domains that you use to send email. You also gain the ability to perform predictive inbox placement tests.</p> <p>When you use the Deliverability dashboard, you pay a monthly subscription charge, in addition to any other fees that you accrue by using Amazon SES and other Amazon Web Services services. For more information about the features and cost of a Deliverability dashboard subscription, see <a href="http://aws.amazon.com/ses/pricing/">Amazon SES Pricing</a>.</p>
* [GetDeliverabilityTestReport](#getdeliverabilitytestreport) - Retrieve the results of a predictive inbox placement test.
* [GetDomainDeliverabilityCampaign](#getdomaindeliverabilitycampaign) - Retrieve all the deliverability data for a specific campaign. This data is available for a campaign only if the campaign sent email by using a domain that the Deliverability dashboard is enabled for.
* [GetDomainStatisticsReport](#getdomainstatisticsreport) - Retrieve inbox placement and engagement rates for the domains that you use to send email.
* [GetEmailIdentity](#getemailidentity) - Provides information about a specific identity, including the identity's verification status, sending authorization policies, its DKIM authentication status, and its custom Mail-From settings.
* [GetEmailIdentityPolicies](#getemailidentitypolicies) - <p>Returns the requested sending authorization policies for the given identity (an email address or a domain). The policies are returned as a map of policy names to policy contents. You can retrieve a maximum of 20 policies at a time.</p> <note> <p>This API is for the identity owner only. If you have not verified the identity, this API will return an error.</p> </note> <p>Sending authorization is a feature that enables an identity owner to authorize other senders to use its identities. For information about using sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
* [GetEmailTemplate](#getemailtemplate) - <p>Displays the template object (which includes the subject line, HTML part and text part) for the template you specify.</p> <p>You can execute this operation no more than once per second.</p>
* [GetImportJob](#getimportjob) - Provides information about an import job.
* [GetSuppressedDestination](#getsuppresseddestination) - Retrieves information about a specific email address that's on the suppression list for your account.
* [ListConfigurationSets](#listconfigurationsets) - <p>List all of the configuration sets associated with your account in the current region.</p> <p> <i>Configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p>
* [ListContactLists](#listcontactlists) - Lists all of the contact lists available.
* [ListContacts](#listcontacts) - Lists the contacts present in a specific contact list.
* [ListCustomVerificationEmailTemplates](#listcustomverificationemailtemplates) - <p>Lists the existing custom verification email templates for your account in the current Amazon Web Services Region.</p> <p>For more information about custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/dg/creating-identities.html#send-email-verify-address-custom">Using custom verification email templates</a> in the <i>Amazon SES Developer Guide</i>.</p> <p>You can execute this operation no more than once per second.</p>
* [ListDedicatedIPPools](#listdedicatedippools) - List all of the dedicated IP pools that exist in your Amazon Web Services account in the current Region.
* [ListDeliverabilityTestReports](#listdeliverabilitytestreports) - Show a list of the predictive inbox placement tests that you've performed, regardless of their statuses. For predictive inbox placement tests that are complete, you can use the <code>GetDeliverabilityTestReport</code> operation to view the results.
* [ListDomainDeliverabilityCampaigns](#listdomaindeliverabilitycampaigns) - Retrieve deliverability data for all the campaigns that used a specific domain to send email during a specified time range. This data is available for a domain only if you enabled the Deliverability dashboard for the domain.
* [ListEmailIdentities](#listemailidentities) - Returns a list of all of the email identities that are associated with your Amazon Web Services account. An identity can be either an email address or a domain. This operation returns identities that are verified as well as those that aren't. This operation returns identities that are associated with Amazon SES and Amazon Pinpoint.
* [ListEmailTemplates](#listemailtemplates) - <p>Lists the email templates present in your Amazon SES account in the current Amazon Web Services Region.</p> <p>You can execute this operation no more than once per second.</p>
* [ListImportJobs](#listimportjobs) - Lists all of the import jobs.
* [ListRecommendations](#listrecommendations) - <p>Lists the recommendations present in your Amazon SES account in the current Amazon Web Services Region.</p> <p>You can execute this operation no more than once per second.</p>
* [ListSuppressedDestinations](#listsuppresseddestinations) - Retrieves a list of email addresses that are on the suppression list for your account.
* [ListTagsForResource](#listtagsforresource) - Retrieve a list of the tags (keys and values) that are associated with a specified resource. A <i>tag</i> is a label that you optionally define and associate with a resource. Each tag consists of a required <i>tag key</i> and an optional associated <i>tag value</i>. A tag key is a general label that acts as a category for more specific tag values. A tag value acts as a descriptor within a tag key.
* [PutAccountDedicatedIPWarmupAttributes](#putaccountdedicatedipwarmupattributes) - Enable or disable the automatic warm-up feature for dedicated IP addresses.
* [PutAccountDetails](#putaccountdetails) - Update your Amazon SES account details.
* [PutAccountSendingAttributes](#putaccountsendingattributes) - Enable or disable the ability of your account to send email.
* [PutAccountSuppressionAttributes](#putaccountsuppressionattributes) - Change the settings for the account-level suppression list.
* [PutAccountVdmAttributes](#putaccountvdmattributes) - <p>Update your Amazon SES account VDM attributes.</p> <p>You can execute this operation no more than once per second.</p>
* [PutConfigurationSetDeliveryOptions](#putconfigurationsetdeliveryoptions) - Associate a configuration set with a dedicated IP pool. You can use dedicated IP pools to create groups of dedicated IP addresses for sending specific types of email.
* [PutConfigurationSetReputationOptions](#putconfigurationsetreputationoptions) - Enable or disable collection of reputation metrics for emails that you send using a particular configuration set in a specific Amazon Web Services Region.
* [PutConfigurationSetSendingOptions](#putconfigurationsetsendingoptions) - Enable or disable email sending for messages that use a particular configuration set in a specific Amazon Web Services Region.
* [PutConfigurationSetSuppressionOptions](#putconfigurationsetsuppressionoptions) - Specify the account suppression list preferences for a configuration set.
* [PutConfigurationSetTrackingOptions](#putconfigurationsettrackingoptions) - Specify a custom domain to use for open and click tracking elements in email that you send.
* [PutConfigurationSetVdmOptions](#putconfigurationsetvdmoptions) - <p>Specify VDM preferences for email that you send using the configuration set.</p> <p>You can execute this operation no more than once per second.</p>
* [PutDedicatedIPInPool](#putdedicatedipinpool) - <p>Move a dedicated IP address to an existing dedicated IP pool.</p> <note> <p>The dedicated IP address that you specify must already exist, and must be associated with your Amazon Web Services account. </p> <p>The dedicated IP pool you specify must already exist. You can create a new pool by using the <code>CreateDedicatedIpPool</code> operation.</p> </note>
* [PutDedicatedIPWarmupAttributes](#putdedicatedipwarmupattributes) - <p/>
* [PutDeliverabilityDashboardOption](#putdeliverabilitydashboardoption) - <p>Enable or disable the Deliverability dashboard. When you enable the Deliverability dashboard, you gain access to reputation, deliverability, and other metrics for the domains that you use to send email. You also gain the ability to perform predictive inbox placement tests.</p> <p>When you use the Deliverability dashboard, you pay a monthly subscription charge, in addition to any other fees that you accrue by using Amazon SES and other Amazon Web Services services. For more information about the features and cost of a Deliverability dashboard subscription, see <a href="http://aws.amazon.com/ses/pricing/">Amazon SES Pricing</a>.</p>
* [PutEmailIdentityConfigurationSetAttributes](#putemailidentityconfigurationsetattributes) - Used to associate a configuration set with an email identity.
* [PutEmailIdentityDkimAttributes](#putemailidentitydkimattributes) - Used to enable or disable DKIM authentication for an email identity.
* [PutEmailIdentityDkimSigningAttributes](#putemailidentitydkimsigningattributes) - <p>Used to configure or change the DKIM authentication settings for an email domain identity. You can use this operation to do any of the following:</p> <ul> <li> <p>Update the signing attributes for an identity that uses Bring Your Own DKIM (BYODKIM).</p> </li> <li> <p>Update the key length that should be used for Easy DKIM.</p> </li> <li> <p>Change from using no DKIM authentication to using Easy DKIM.</p> </li> <li> <p>Change from using no DKIM authentication to using BYODKIM.</p> </li> <li> <p>Change from using Easy DKIM to using BYODKIM.</p> </li> <li> <p>Change from using BYODKIM to using Easy DKIM.</p> </li> </ul>
* [PutEmailIdentityFeedbackAttributes](#putemailidentityfeedbackattributes) - <p>Used to enable or disable feedback forwarding for an identity. This setting determines what happens when an identity is used to send an email that results in a bounce or complaint event.</p> <p>If the value is <code>true</code>, you receive email notifications when bounce or complaint events occur. These notifications are sent to the address that you specified in the <code>Return-Path</code> header of the original email.</p> <p>You're required to have a method of tracking bounces and complaints. If you haven't set up another mechanism for receiving bounce or complaint notifications (for example, by setting up an event destination), you receive an email notification when these events occur (even if this setting is disabled).</p>
* [PutEmailIdentityMailFromAttributes](#putemailidentitymailfromattributes) - Used to enable or disable the custom Mail-From domain configuration for an email identity.
* [PutSuppressedDestination](#putsuppresseddestination) - Adds an email address to the suppression list for your account.
* [SendBulkEmail](#sendbulkemail) - Composes an email message to multiple destinations.
* [SendCustomVerificationEmail](#sendcustomverificationemail) - <p>Adds an email address to the list of identities for your Amazon SES account in the current Amazon Web Services Region and attempts to verify it. As a result of executing this operation, a customized verification email is sent to the specified address.</p> <p>To use this operation, you must first create a custom verification email template. For more information about creating and using custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/dg/creating-identities.html#send-email-verify-address-custom">Using custom verification email templates</a> in the <i>Amazon SES Developer Guide</i>.</p> <p>You can execute this operation no more than once per second.</p>
* [SendEmail](#sendemail) - <p>Sends an email message. You can use the Amazon SES API v2 to send the following types of messages:</p> <ul> <li> <p> <b>Simple</b> – A standard email message. When you create this type of message, you specify the sender, the recipient, and the message body, and Amazon SES assembles the message for you.</p> </li> <li> <p> <b>Raw</b> – A raw, MIME-formatted email message. When you send this type of email, you have to specify all of the message headers, as well as the message body. You can use this message type to send messages that contain attachments. The message that you specify has to be a valid MIME message.</p> </li> <li> <p> <b>Templated</b> – A message that contains personalization tags. When you send this type of email, Amazon SES API v2 automatically replaces the tags with values that you specify.</p> </li> </ul>
* [TagResource](#tagresource) - <p>Add one or more tags (keys and values) to a specified resource. A <i>tag</i> is a label that you optionally define and associate with a resource. Tags can help you categorize and manage resources in different ways, such as by purpose, owner, environment, or other criteria. A resource can have as many as 50 tags.</p> <p>Each tag consists of a required <i>tag key</i> and an associated <i>tag value</i>, both of which you define. A tag key is a general label that acts as a category for more specific tag values. A tag value acts as a descriptor within a tag key.</p>
* [TestRenderEmailTemplate](#testrenderemailtemplate) - <p>Creates a preview of the MIME content of an email when provided with a template and a set of replacement data.</p> <p>You can execute this operation no more than once per second.</p>
* [UntagResource](#untagresource) - Remove one or more tags (keys and values) from a specified resource.
* [UpdateConfigurationSetEventDestination](#updateconfigurationseteventdestination) - <p>Update the configuration of an event destination for a configuration set.</p> <p> <i>Events</i> include message sends, deliveries, opens, clicks, bounces, and complaints. <i>Event destinations</i> are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.</p>
* [UpdateContact](#updatecontact) - Updates a contact's preferences for a list. It is not necessary to specify all existing topic preferences in the TopicPreferences object, just the ones that need updating.
* [UpdateContactList](#updatecontactlist) - Updates contact list metadata. This operation does a complete replacement.
* [UpdateCustomVerificationEmailTemplate](#updatecustomverificationemailtemplate) - <p>Updates an existing custom verification email template.</p> <p>For more information about custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/dg/creating-identities.html#send-email-verify-address-custom">Using custom verification email templates</a> in the <i>Amazon SES Developer Guide</i>.</p> <p>You can execute this operation no more than once per second.</p>
* [UpdateEmailIdentityPolicy](#updateemailidentitypolicy) - <p>Updates the specified sending authorization policy for the given identity (an email address or a domain). This API returns successfully even if a policy with the specified name does not exist.</p> <note> <p>This API is for the identity owner only. If you have not verified the identity, this API will return an error.</p> </note> <p>Sending authorization is a feature that enables an identity owner to authorize other senders to use its identities. For information about using sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
* [UpdateEmailTemplate](#updateemailtemplate) - <p>Updates an email template. Email templates enable you to send personalized email to one or more destinations in a single API operation. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-personalized-email-api.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

## BatchGetMetricData

<p>Retrieves batches of metric data collected based on your sending activity.</p> <p>You can execute this operation no more than 16 times per second, and with at most 160 queries from the batches per second (cumulative).</p>

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.BatchGetMetricData(ctx, operations.BatchGetMetricDataRequest{
        RequestBody: operations.BatchGetMetricDataRequestBody{
            Queries: []shared.BatchGetMetricDataQuery{
                shared.BatchGetMetricDataQuery{
                    Dimensions: map[string]string{
                        "aut": "quasi",
                        "error": "temporibus",
                        "laborum": "quasi",
                        "reiciendis": "voluptatibus",
                    },
                    EndDate: types.MustTimeFromString("2021-08-05T19:50:46.898Z"),
                    ID: "8f097b00-74f1-4547-9b5e-6e13b99d488e",
                    Metric: shared.MetricEnumSend,
                    Namespace: shared.MetricNamespaceEnumVdm,
                    StartDate: types.MustTimeFromString("2021-04-10T08:07:33.561Z"),
                },
                shared.BatchGetMetricDataQuery{
                    Dimensions: map[string]string{
                        "itaque": "incidunt",
                    },
                    EndDate: types.MustTimeFromString("2022-12-28T14:02:06.064Z"),
                    ID: "ad2abd44-2698-402d-902a-94bb4f63c969",
                    Metric: shared.MetricEnumDeliveryClick,
                    Namespace: shared.MetricNamespaceEnumVdm,
                    StartDate: types.MustTimeFromString("2021-09-21T14:06:09.271Z"),
                },
                shared.BatchGetMetricDataQuery{
                    Dimensions: map[string]string{
                        "debitis": "a",
                    },
                    EndDate: types.MustTimeFromString("2022-02-08T14:21:47.573Z"),
                    ID: "7dfb14cd-66ae-4395-afb9-ba88f3a66997",
                    Metric: shared.MetricEnumSend,
                    Namespace: shared.MetricNamespaceEnumVdm,
                    StartDate: types.MustTimeFromString("2022-09-12T22:12:15.897Z"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("distinctio"),
        XAmzContentSha256: sdk.String("id"),
        XAmzCredential: sdk.String("labore"),
        XAmzDate: sdk.String("labore"),
        XAmzSecurityToken: sdk.String("suscipit"),
        XAmzSignature: sdk.String("natus"),
        XAmzSignedHeaders: sdk.String("nobis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchGetMetricDataResponse != nil {
        // handle response
    }
}
```

## CreateConfigurationSet

Create a configuration set. <i>Configuration sets</i> are groups of rules that you can apply to the emails that you send. You apply a configuration set to an email by specifying the name of the configuration set when you call the Amazon SES API v2. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email. 

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateConfigurationSet(ctx, operations.CreateConfigurationSetRequest{
        RequestBody: operations.CreateConfigurationSetRequestBody{
            ConfigurationSetName: "eum",
            DeliveryOptions: &operations.CreateConfigurationSetRequestBodyDeliveryOptions{
                SendingPoolName: sdk.String("vero"),
                TLSPolicy: shared.TLSPolicyEnumRequire.ToPointer(),
            },
            ReputationOptions: &operations.CreateConfigurationSetRequestBodyReputationOptions{
                LastFreshStart: types.MustTimeFromString("2022-09-14T03:02:47.808Z"),
                ReputationMetricsEnabled: sdk.Bool(false),
            },
            SendingOptions: &operations.CreateConfigurationSetRequestBodySendingOptions{
                SendingEnabled: sdk.Bool(false),
            },
            SuppressionOptions: &operations.CreateConfigurationSetRequestBodySuppressionOptions{
                SuppressedReasons: []shared.SuppressionListReasonEnum{
                    shared.SuppressionListReasonEnumComplaint,
                },
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "provident",
                    Value: "quos",
                },
                shared.Tag{
                    Key: "sint",
                    Value: "accusantium",
                },
            },
            TrackingOptions: &operations.CreateConfigurationSetRequestBodyTrackingOptions{
                CustomRedirectDomain: sdk.String("mollitia"),
            },
            VdmOptions: &operations.CreateConfigurationSetRequestBodyVdmOptions{
                DashboardOptions: &shared.DashboardOptions{
                    EngagementMetrics: shared.FeatureStatusEnumDisabled.ToPointer(),
                },
                GuardianOptions: &shared.GuardianOptions{
                    OptimizedSharedDelivery: shared.FeatureStatusEnumDisabled.ToPointer(),
                },
            },
        },
        XAmzAlgorithm: sdk.String("ad"),
        XAmzContentSha256: sdk.String("eum"),
        XAmzCredential: sdk.String("dolor"),
        XAmzDate: sdk.String("necessitatibus"),
        XAmzSecurityToken: sdk.String("odit"),
        XAmzSignature: sdk.String("nemo"),
        XAmzSignedHeaders: sdk.String("quasi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateConfigurationSetResponse != nil {
        // handle response
    }
}
```

## CreateConfigurationSetEventDestination

<p>Create an event destination. <i>Events</i> include message sends, deliveries, opens, clicks, bounces, and complaints. <i>Event destinations</i> are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.</p> <p>A single configuration set can include more than one event destination.</p>

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
    res, err := s.SDK.CreateConfigurationSetEventDestination(ctx, operations.CreateConfigurationSetEventDestinationRequest{
        ConfigurationSetName: "iure",
        RequestBody: operations.CreateConfigurationSetEventDestinationRequestBody{
            EventDestination: operations.CreateConfigurationSetEventDestinationRequestBodyEventDestination{
                CloudWatchDestination: &shared.CloudWatchDestination{
                    DimensionConfigurations: []shared.CloudWatchDimensionConfiguration{
                        shared.CloudWatchDimensionConfiguration{
                            DefaultDimensionValue: "debitis",
                            DimensionName: "eius",
                            DimensionValueSource: shared.DimensionValueSourceEnumLinkTag,
                        },
                        shared.CloudWatchDimensionConfiguration{
                            DefaultDimensionValue: "deleniti",
                            DimensionName: "facilis",
                            DimensionValueSource: shared.DimensionValueSourceEnumEmailHeader,
                        },
                        shared.CloudWatchDimensionConfiguration{
                            DefaultDimensionValue: "architecto",
                            DimensionName: "architecto",
                            DimensionValueSource: shared.DimensionValueSourceEnumLinkTag,
                        },
                        shared.CloudWatchDimensionConfiguration{
                            DefaultDimensionValue: "ullam",
                            DimensionName: "expedita",
                            DimensionValueSource: shared.DimensionValueSourceEnumEmailHeader,
                        },
                    },
                },
                Enabled: sdk.Bool(false),
                KinesisFirehoseDestination: &shared.KinesisFirehoseDestination{
                    DeliveryStreamArn: "repellat",
                    IamRoleArn: "quibusdam",
                },
                MatchingEventTypes: []shared.EventTypeEnum{
                    shared.EventTypeEnumSubscription,
                },
                PinpointDestination: &shared.PinpointDestination{
                    ApplicationArn: sdk.String("pariatur"),
                },
                SnsDestination: &shared.SnsDestination{
                    TopicArn: "accusantium",
                },
            },
            EventDestinationName: "consequuntur",
        },
        XAmzAlgorithm: sdk.String("praesentium"),
        XAmzContentSha256: sdk.String("natus"),
        XAmzCredential: sdk.String("magni"),
        XAmzDate: sdk.String("sunt"),
        XAmzSecurityToken: sdk.String("quo"),
        XAmzSignature: sdk.String("illum"),
        XAmzSignedHeaders: sdk.String("pariatur"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateConfigurationSetEventDestinationResponse != nil {
        // handle response
    }
}
```

## CreateContact

Creates a contact, which is an end-user who is receiving the email, and adds them to a contact list.

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
    res, err := s.SDK.CreateContact(ctx, operations.CreateContactRequest{
        ContactListName: "maxime",
        RequestBody: operations.CreateContactRequestBody{
            AttributesData: sdk.String("ea"),
            EmailAddress: "excepturi",
            TopicPreferences: []shared.TopicPreference{
                shared.TopicPreference{
                    SubscriptionStatus: shared.SubscriptionStatusEnumOptIn,
                    TopicName: "accusantium",
                },
            },
            UnsubscribeAll: sdk.Bool(false),
        },
        XAmzAlgorithm: sdk.String("ab"),
        XAmzContentSha256: sdk.String("maiores"),
        XAmzCredential: sdk.String("quidem"),
        XAmzDate: sdk.String("ipsam"),
        XAmzSecurityToken: sdk.String("voluptate"),
        XAmzSignature: sdk.String("autem"),
        XAmzSignedHeaders: sdk.String("nam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateContactResponse != nil {
        // handle response
    }
}
```

## CreateContactList

Creates a contact list.

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
    res, err := s.SDK.CreateContactList(ctx, operations.CreateContactListRequest{
        RequestBody: operations.CreateContactListRequestBody{
            ContactListName: "eaque",
            Description: sdk.String("pariatur"),
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "voluptatibus",
                    Value: "perferendis",
                },
                shared.Tag{
                    Key: "fugiat",
                    Value: "amet",
                },
            },
            Topics: []shared.Topic{
                shared.Topic{
                    DefaultSubscriptionStatus: shared.SubscriptionStatusEnumOptOut,
                    Description: sdk.String("corporis"),
                    DisplayName: "hic",
                    TopicName: "libero",
                },
            },
        },
        XAmzAlgorithm: sdk.String("nobis"),
        XAmzContentSha256: sdk.String("dolores"),
        XAmzCredential: sdk.String("quis"),
        XAmzDate: sdk.String("totam"),
        XAmzSecurityToken: sdk.String("dignissimos"),
        XAmzSignature: sdk.String("eaque"),
        XAmzSignedHeaders: sdk.String("quis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateContactListResponse != nil {
        // handle response
    }
}
```

## CreateCustomVerificationEmailTemplate

<p>Creates a new custom verification email template.</p> <p>For more information about custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/dg/creating-identities.html#send-email-verify-address-custom">Using custom verification email templates</a> in the <i>Amazon SES Developer Guide</i>.</p> <p>You can execute this operation no more than once per second.</p>

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
    res, err := s.SDK.CreateCustomVerificationEmailTemplate(ctx, operations.CreateCustomVerificationEmailTemplateRequest{
        RequestBody: operations.CreateCustomVerificationEmailTemplateRequestBody{
            FailureRedirectionURL: "nesciunt",
            FromEmailAddress: "eos",
            SuccessRedirectionURL: "perferendis",
            TemplateContent: "dolores",
            TemplateName: "minus",
            TemplateSubject: "quam",
        },
        XAmzAlgorithm: sdk.String("dolor"),
        XAmzContentSha256: sdk.String("vero"),
        XAmzCredential: sdk.String("nostrum"),
        XAmzDate: sdk.String("hic"),
        XAmzSecurityToken: sdk.String("recusandae"),
        XAmzSignature: sdk.String("omnis"),
        XAmzSignedHeaders: sdk.String("facilis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateCustomVerificationEmailTemplateResponse != nil {
        // handle response
    }
}
```

## CreateDedicatedIPPool

Create a new pool of dedicated IP addresses. A pool can include one or more dedicated IP addresses that are associated with your Amazon Web Services account. You can associate a pool with a configuration set. When you send an email that uses that configuration set, the message is sent from one of the addresses in the associated pool.

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
    res, err := s.SDK.CreateDedicatedIPPool(ctx, operations.CreateDedicatedIPPoolRequest{
        RequestBody: operations.CreateDedicatedIPPoolRequestBody{
            PoolName: "perspiciatis",
            ScalingMode: operations.CreateDedicatedIPPoolRequestBodyScalingModeEnumStandard.ToPointer(),
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "consequuntur",
                    Value: "blanditiis",
                },
                shared.Tag{
                    Key: "error",
                    Value: "eaque",
                },
                shared.Tag{
                    Key: "occaecati",
                    Value: "rerum",
                },
                shared.Tag{
                    Key: "adipisci",
                    Value: "asperiores",
                },
            },
        },
        XAmzAlgorithm: sdk.String("earum"),
        XAmzContentSha256: sdk.String("modi"),
        XAmzCredential: sdk.String("iste"),
        XAmzDate: sdk.String("dolorum"),
        XAmzSecurityToken: sdk.String("deleniti"),
        XAmzSignature: sdk.String("pariatur"),
        XAmzSignedHeaders: sdk.String("provident"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateDedicatedIPPoolResponse != nil {
        // handle response
    }
}
```

## CreateDeliverabilityTestReport

Create a new predictive inbox placement test. Predictive inbox placement tests can help you predict how your messages will be handled by various email providers around the world. When you perform a predictive inbox placement test, you provide a sample message that contains the content that you plan to send to your customers. Amazon SES then sends that message to special email addresses spread across several major email providers. After about 24 hours, the test is complete, and you can use the <code>GetDeliverabilityTestReport</code> operation to view the results of the test.

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
    res, err := s.SDK.CreateDeliverabilityTestReport(ctx, operations.CreateDeliverabilityTestReportRequest{
        RequestBody: operations.CreateDeliverabilityTestReportRequestBody{
            Content: operations.CreateDeliverabilityTestReportRequestBodyContent{
                Raw: &shared.RawMessage{
                    Data: "nobis",
                },
                Simple: &shared.Message{
                    Body: shared.Body{
                        HTML: &shared.Content{
                            Charset: sdk.String("libero"),
                            Data: "delectus",
                        },
                        Text: &shared.Content{
                            Charset: sdk.String("quaerat"),
                            Data: "quos",
                        },
                    },
                    Subject: shared.Content{
                        Charset: sdk.String("aliquid"),
                        Data: "dolorem",
                    },
                },
                Template: &shared.Template{
                    TemplateArn: sdk.String("dolorem"),
                    TemplateData: sdk.String("dolor"),
                    TemplateName: sdk.String("qui"),
                },
            },
            FromEmailAddress: "ipsum",
            ReportName: sdk.String("hic"),
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "cum",
                    Value: "voluptate",
                },
                shared.Tag{
                    Key: "dignissimos",
                    Value: "reiciendis",
                },
                shared.Tag{
                    Key: "amet",
                    Value: "dolorum",
                },
            },
        },
        XAmzAlgorithm: sdk.String("numquam"),
        XAmzContentSha256: sdk.String("veritatis"),
        XAmzCredential: sdk.String("ipsa"),
        XAmzDate: sdk.String("ipsa"),
        XAmzSecurityToken: sdk.String("iure"),
        XAmzSignature: sdk.String("odio"),
        XAmzSignedHeaders: sdk.String("quaerat"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateDeliverabilityTestReportResponse != nil {
        // handle response
    }
}
```

## CreateEmailIdentity

<p>Starts the process of verifying an email identity. An <i>identity</i> is an email address or domain that you use when you send email. Before you can use an identity to send email, you first have to verify it. By verifying an identity, you demonstrate that you're the owner of the identity, and that you've given Amazon SES API v2 permission to send email from the identity.</p> <p>When you verify an email address, Amazon SES sends an email to the address. Your email address is verified as soon as you follow the link in the verification email. </p> <p>When you verify a domain without specifying the <code>DkimSigningAttributes</code> object, this operation provides a set of DKIM tokens. You can convert these tokens into CNAME records, which you then add to the DNS configuration for your domain. Your domain is verified when Amazon SES detects these records in the DNS configuration for your domain. This verification method is known as <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/easy-dkim.html">Easy DKIM</a>.</p> <p>Alternatively, you can perform the verification process by providing your own public-private key pair. This verification method is known as Bring Your Own DKIM (BYODKIM). To use BYODKIM, your call to the <code>CreateEmailIdentity</code> operation has to include the <code>DkimSigningAttributes</code> object. When you specify this object, you provide a selector (a component of the DNS record name that identifies the public key to use for DKIM authentication) and a private key.</p> <p>When you verify a domain, this operation provides a set of DKIM tokens, which you can convert into CNAME tokens. You add these CNAME tokens to the DNS configuration for your domain. Your domain is verified when Amazon SES detects these records in the DNS configuration for your domain. For some DNS providers, it can take 72 hours or more to complete the domain verification process.</p> <p>Additionally, you can associate an existing configuration set with the email identity that you're verifying.</p>

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
    res, err := s.SDK.CreateEmailIdentity(ctx, operations.CreateEmailIdentityRequest{
        RequestBody: operations.CreateEmailIdentityRequestBody{
            ConfigurationSetName: sdk.String("accusamus"),
            DkimSigningAttributes: &operations.CreateEmailIdentityRequestBodyDkimSigningAttributes{
                DomainSigningPrivateKey: sdk.String("quidem"),
                DomainSigningSelector: sdk.String("voluptatibus"),
                NextSigningKeyLength: shared.DkimSigningKeyLengthEnumRsa1024Bit.ToPointer(),
            },
            EmailIdentity: "natus",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "atque",
                    Value: "sit",
                },
            },
        },
        XAmzAlgorithm: sdk.String("fugiat"),
        XAmzContentSha256: sdk.String("ab"),
        XAmzCredential: sdk.String("soluta"),
        XAmzDate: sdk.String("dolorum"),
        XAmzSecurityToken: sdk.String("iusto"),
        XAmzSignature: sdk.String("voluptate"),
        XAmzSignedHeaders: sdk.String("dolorum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateEmailIdentityResponse != nil {
        // handle response
    }
}
```

## CreateEmailIdentityPolicy

<p>Creates the specified sending authorization policy for the given identity (an email address or a domain).</p> <note> <p>This API is for the identity owner only. If you have not verified the identity, this API will return an error.</p> </note> <p>Sending authorization is a feature that enables an identity owner to authorize other senders to use its identities. For information about using sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

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
    res, err := s.SDK.CreateEmailIdentityPolicy(ctx, operations.CreateEmailIdentityPolicyRequest{
        EmailIdentity: "deleniti",
        PolicyName: "omnis",
        RequestBody: operations.CreateEmailIdentityPolicyRequestBody{
            Policy: "necessitatibus",
        },
        XAmzAlgorithm: sdk.String("distinctio"),
        XAmzContentSha256: sdk.String("asperiores"),
        XAmzCredential: sdk.String("nihil"),
        XAmzDate: sdk.String("ipsum"),
        XAmzSecurityToken: sdk.String("voluptate"),
        XAmzSignature: sdk.String("id"),
        XAmzSignedHeaders: sdk.String("saepe"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateEmailIdentityPolicyResponse != nil {
        // handle response
    }
}
```

## CreateEmailTemplate

<p>Creates an email template. Email templates enable you to send personalized email to one or more destinations in a single API operation. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-personalized-email-api.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

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
    res, err := s.SDK.CreateEmailTemplate(ctx, operations.CreateEmailTemplateRequest{
        RequestBody: operations.CreateEmailTemplateRequestBody{
            TemplateContent: operations.CreateEmailTemplateRequestBodyTemplateContent{
                HTML: sdk.String("eius"),
                Subject: sdk.String("aspernatur"),
                Text: sdk.String("perferendis"),
            },
            TemplateName: "amet",
        },
        XAmzAlgorithm: sdk.String("optio"),
        XAmzContentSha256: sdk.String("accusamus"),
        XAmzCredential: sdk.String("ad"),
        XAmzDate: sdk.String("saepe"),
        XAmzSecurityToken: sdk.String("suscipit"),
        XAmzSignature: sdk.String("deserunt"),
        XAmzSignedHeaders: sdk.String("provident"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateEmailTemplateResponse != nil {
        // handle response
    }
}
```

## CreateImportJob

Creates an import job for a data destination.

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
    res, err := s.SDK.CreateImportJob(ctx, operations.CreateImportJobRequest{
        RequestBody: operations.CreateImportJobRequestBody{
            ImportDataSource: operations.CreateImportJobRequestBodyImportDataSource{
                DataFormat: shared.DataFormatEnumCsv.ToPointer(),
                S3URL: sdk.String("repellendus"),
            },
            ImportDestination: operations.CreateImportJobRequestBodyImportDestination{
                ContactListDestination: &shared.ContactListDestination{
                    ContactListImportAction: shared.ContactListImportActionEnumPut,
                    ContactListName: "similique",
                },
                SuppressionListDestination: &shared.SuppressionListDestination{
                    SuppressionListImportAction: shared.SuppressionListImportActionEnumDelete,
                },
            },
        },
        XAmzAlgorithm: sdk.String("at"),
        XAmzContentSha256: sdk.String("quaerat"),
        XAmzCredential: sdk.String("tempora"),
        XAmzDate: sdk.String("vel"),
        XAmzSecurityToken: sdk.String("quod"),
        XAmzSignature: sdk.String("officiis"),
        XAmzSignedHeaders: sdk.String("qui"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateImportJobResponse != nil {
        // handle response
    }
}
```

## DeleteConfigurationSet

<p>Delete an existing configuration set.</p> <p> <i>Configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p>

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
    res, err := s.SDK.DeleteConfigurationSet(ctx, operations.DeleteConfigurationSetRequest{
        ConfigurationSetName: "dolorum",
        XAmzAlgorithm: sdk.String("a"),
        XAmzContentSha256: sdk.String("esse"),
        XAmzCredential: sdk.String("harum"),
        XAmzDate: sdk.String("iusto"),
        XAmzSecurityToken: sdk.String("ipsum"),
        XAmzSignature: sdk.String("quisquam"),
        XAmzSignedHeaders: sdk.String("tenetur"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteConfigurationSetResponse != nil {
        // handle response
    }
}
```

## DeleteConfigurationSetEventDestination

<p>Delete an event destination.</p> <p> <i>Events</i> include message sends, deliveries, opens, clicks, bounces, and complaints. <i>Event destinations</i> are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.</p>

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
    res, err := s.SDK.DeleteConfigurationSetEventDestination(ctx, operations.DeleteConfigurationSetEventDestinationRequest{
        ConfigurationSetName: "amet",
        EventDestinationName: "tempore",
        XAmzAlgorithm: sdk.String("accusamus"),
        XAmzContentSha256: sdk.String("numquam"),
        XAmzCredential: sdk.String("enim"),
        XAmzDate: sdk.String("dolorem"),
        XAmzSecurityToken: sdk.String("sapiente"),
        XAmzSignature: sdk.String("totam"),
        XAmzSignedHeaders: sdk.String("nihil"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteConfigurationSetEventDestinationResponse != nil {
        // handle response
    }
}
```

## DeleteContact

Removes a contact from a contact list.

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
    res, err := s.SDK.DeleteContact(ctx, operations.DeleteContactRequest{
        ContactListName: "sit",
        EmailAddress: "expedita",
        XAmzAlgorithm: sdk.String("neque"),
        XAmzContentSha256: sdk.String("sed"),
        XAmzCredential: sdk.String("vel"),
        XAmzDate: sdk.String("libero"),
        XAmzSecurityToken: sdk.String("voluptas"),
        XAmzSignature: sdk.String("deserunt"),
        XAmzSignedHeaders: sdk.String("quam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteContactResponse != nil {
        // handle response
    }
}
```

## DeleteContactList

Deletes a contact list and all of the contacts on that list.

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
    res, err := s.SDK.DeleteContactList(ctx, operations.DeleteContactListRequest{
        ContactListName: "ipsum",
        XAmzAlgorithm: sdk.String("incidunt"),
        XAmzContentSha256: sdk.String("qui"),
        XAmzCredential: sdk.String("cupiditate"),
        XAmzDate: sdk.String("maxime"),
        XAmzSecurityToken: sdk.String("pariatur"),
        XAmzSignature: sdk.String("soluta"),
        XAmzSignedHeaders: sdk.String("dicta"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteContactListResponse != nil {
        // handle response
    }
}
```

## DeleteCustomVerificationEmailTemplate

<p>Deletes an existing custom verification email template.</p> <p>For more information about custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/dg/creating-identities.html#send-email-verify-address-custom">Using custom verification email templates</a> in the <i>Amazon SES Developer Guide</i>.</p> <p>You can execute this operation no more than once per second.</p>

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
    res, err := s.SDK.DeleteCustomVerificationEmailTemplate(ctx, operations.DeleteCustomVerificationEmailTemplateRequest{
        TemplateName: "laborum",
        XAmzAlgorithm: sdk.String("totam"),
        XAmzContentSha256: sdk.String("incidunt"),
        XAmzCredential: sdk.String("aspernatur"),
        XAmzDate: sdk.String("dolores"),
        XAmzSecurityToken: sdk.String("distinctio"),
        XAmzSignature: sdk.String("facilis"),
        XAmzSignedHeaders: sdk.String("aliquid"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteCustomVerificationEmailTemplateResponse != nil {
        // handle response
    }
}
```

## DeleteDedicatedIPPool

Delete a dedicated IP pool.

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
    res, err := s.SDK.DeleteDedicatedIPPool(ctx, operations.DeleteDedicatedIPPoolRequest{
        PoolName: "quam",
        XAmzAlgorithm: sdk.String("molestias"),
        XAmzContentSha256: sdk.String("temporibus"),
        XAmzCredential: sdk.String("qui"),
        XAmzDate: sdk.String("neque"),
        XAmzSecurityToken: sdk.String("fugit"),
        XAmzSignature: sdk.String("magni"),
        XAmzSignedHeaders: sdk.String("odio"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteDedicatedIPPoolResponse != nil {
        // handle response
    }
}
```

## DeleteEmailIdentity

Deletes an email identity. An identity can be either an email address or a domain name.

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
    res, err := s.SDK.DeleteEmailIdentity(ctx, operations.DeleteEmailIdentityRequest{
        EmailIdentity: "sunt",
        XAmzAlgorithm: sdk.String("ullam"),
        XAmzContentSha256: sdk.String("nam"),
        XAmzCredential: sdk.String("hic"),
        XAmzDate: sdk.String("voluptatem"),
        XAmzSecurityToken: sdk.String("cumque"),
        XAmzSignature: sdk.String("soluta"),
        XAmzSignedHeaders: sdk.String("nobis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteEmailIdentityResponse != nil {
        // handle response
    }
}
```

## DeleteEmailIdentityPolicy

<p>Deletes the specified sending authorization policy for the given identity (an email address or a domain). This API returns successfully even if a policy with the specified name does not exist.</p> <note> <p>This API is for the identity owner only. If you have not verified the identity, this API will return an error.</p> </note> <p>Sending authorization is a feature that enables an identity owner to authorize other senders to use its identities. For information about using sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

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
    res, err := s.SDK.DeleteEmailIdentityPolicy(ctx, operations.DeleteEmailIdentityPolicyRequest{
        EmailIdentity: "et",
        PolicyName: "saepe",
        XAmzAlgorithm: sdk.String("ipsum"),
        XAmzContentSha256: sdk.String("veritatis"),
        XAmzCredential: sdk.String("nobis"),
        XAmzDate: sdk.String("quos"),
        XAmzSecurityToken: sdk.String("tempore"),
        XAmzSignature: sdk.String("cupiditate"),
        XAmzSignedHeaders: sdk.String("aperiam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteEmailIdentityPolicyResponse != nil {
        // handle response
    }
}
```

## DeleteEmailTemplate

<p>Deletes an email template.</p> <p>You can execute this operation no more than once per second.</p>

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
    res, err := s.SDK.DeleteEmailTemplate(ctx, operations.DeleteEmailTemplateRequest{
        TemplateName: "delectus",
        XAmzAlgorithm: sdk.String("dolorem"),
        XAmzContentSha256: sdk.String("dolore"),
        XAmzCredential: sdk.String("labore"),
        XAmzDate: sdk.String("adipisci"),
        XAmzSecurityToken: sdk.String("dolorum"),
        XAmzSignature: sdk.String("architecto"),
        XAmzSignedHeaders: sdk.String("quae"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteEmailTemplateResponse != nil {
        // handle response
    }
}
```

## DeleteSuppressedDestination

Removes an email address from the suppression list for your account.

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
    res, err := s.SDK.DeleteSuppressedDestination(ctx, operations.DeleteSuppressedDestinationRequest{
        EmailAddress: "aut",
        XAmzAlgorithm: sdk.String("quas"),
        XAmzContentSha256: sdk.String("itaque"),
        XAmzCredential: sdk.String("consequatur"),
        XAmzDate: sdk.String("est"),
        XAmzSecurityToken: sdk.String("repellendus"),
        XAmzSignature: sdk.String("porro"),
        XAmzSignedHeaders: sdk.String("doloribus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteSuppressedDestinationResponse != nil {
        // handle response
    }
}
```

## GetAccount

Obtain information about the email-sending status and capabilities of your Amazon SES account in the current Amazon Web Services Region.

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
    res, err := s.SDK.GetAccount(ctx, operations.GetAccountRequest{
        XAmzAlgorithm: sdk.String("ut"),
        XAmzContentSha256: sdk.String("facilis"),
        XAmzCredential: sdk.String("cupiditate"),
        XAmzDate: sdk.String("qui"),
        XAmzSecurityToken: sdk.String("quae"),
        XAmzSignature: sdk.String("laudantium"),
        XAmzSignedHeaders: sdk.String("odio"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAccountResponse != nil {
        // handle response
    }
}
```

## GetBlacklistReports

Retrieve a list of the blacklists that your dedicated IP addresses appear on.

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
    res, err := s.SDK.GetBlacklistReports(ctx, operations.GetBlacklistReportsRequest{
        BlacklistItemNames: []string{
            "voluptatibus",
            "quisquam",
            "vero",
        },
        XAmzAlgorithm: sdk.String("omnis"),
        XAmzContentSha256: sdk.String("quis"),
        XAmzCredential: sdk.String("ipsum"),
        XAmzDate: sdk.String("delectus"),
        XAmzSecurityToken: sdk.String("voluptate"),
        XAmzSignature: sdk.String("consectetur"),
        XAmzSignedHeaders: sdk.String("vero"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetBlacklistReportsResponse != nil {
        // handle response
    }
}
```

## GetConfigurationSet

<p>Get information about an existing configuration set, including the dedicated IP pool that it's associated with, whether or not it's enabled for sending email, and more.</p> <p> <i>Configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p>

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
    res, err := s.SDK.GetConfigurationSet(ctx, operations.GetConfigurationSetRequest{
        ConfigurationSetName: "tenetur",
        XAmzAlgorithm: sdk.String("dignissimos"),
        XAmzContentSha256: sdk.String("hic"),
        XAmzCredential: sdk.String("distinctio"),
        XAmzDate: sdk.String("quod"),
        XAmzSecurityToken: sdk.String("odio"),
        XAmzSignature: sdk.String("similique"),
        XAmzSignedHeaders: sdk.String("facilis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetConfigurationSetResponse != nil {
        // handle response
    }
}
```

## GetConfigurationSetEventDestinations

<p>Retrieve a list of event destinations that are associated with a configuration set.</p> <p> <i>Events</i> include message sends, deliveries, opens, clicks, bounces, and complaints. <i>Event destinations</i> are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.</p>

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
    res, err := s.SDK.GetConfigurationSetEventDestinations(ctx, operations.GetConfigurationSetEventDestinationsRequest{
        ConfigurationSetName: "vero",
        XAmzAlgorithm: sdk.String("ducimus"),
        XAmzContentSha256: sdk.String("dolore"),
        XAmzCredential: sdk.String("quibusdam"),
        XAmzDate: sdk.String("illum"),
        XAmzSecurityToken: sdk.String("sequi"),
        XAmzSignature: sdk.String("natus"),
        XAmzSignedHeaders: sdk.String("impedit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetConfigurationSetEventDestinationsResponse != nil {
        // handle response
    }
}
```

## GetContact

Returns a contact from a contact list.

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
    res, err := s.SDK.GetContact(ctx, operations.GetContactRequest{
        ContactListName: "aut",
        EmailAddress: "voluptatibus",
        XAmzAlgorithm: sdk.String("exercitationem"),
        XAmzContentSha256: sdk.String("nulla"),
        XAmzCredential: sdk.String("fugit"),
        XAmzDate: sdk.String("porro"),
        XAmzSecurityToken: sdk.String("maiores"),
        XAmzSignature: sdk.String("doloribus"),
        XAmzSignedHeaders: sdk.String("iusto"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetContactResponse != nil {
        // handle response
    }
}
```

## GetContactList

Returns contact list metadata. It does not return any information about the contacts present in the list.

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
    res, err := s.SDK.GetContactList(ctx, operations.GetContactListRequest{
        ContactListName: "eligendi",
        XAmzAlgorithm: sdk.String("ducimus"),
        XAmzContentSha256: sdk.String("alias"),
        XAmzCredential: sdk.String("officia"),
        XAmzDate: sdk.String("tempora"),
        XAmzSecurityToken: sdk.String("ipsam"),
        XAmzSignature: sdk.String("ea"),
        XAmzSignedHeaders: sdk.String("aspernatur"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetContactListResponse != nil {
        // handle response
    }
}
```

## GetCustomVerificationEmailTemplate

<p>Returns the custom email verification template for the template name you specify.</p> <p>For more information about custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/dg/creating-identities.html#send-email-verify-address-custom">Using custom verification email templates</a> in the <i>Amazon SES Developer Guide</i>.</p> <p>You can execute this operation no more than once per second.</p>

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
    res, err := s.SDK.GetCustomVerificationEmailTemplate(ctx, operations.GetCustomVerificationEmailTemplateRequest{
        TemplateName: "vel",
        XAmzAlgorithm: sdk.String("possimus"),
        XAmzContentSha256: sdk.String("magnam"),
        XAmzCredential: sdk.String("ratione"),
        XAmzDate: sdk.String("ex"),
        XAmzSecurityToken: sdk.String("laudantium"),
        XAmzSignature: sdk.String("dicta"),
        XAmzSignedHeaders: sdk.String("dolor"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetCustomVerificationEmailTemplateResponse != nil {
        // handle response
    }
}
```

## GetDedicatedIP

Get information about a dedicated IP address, including the name of the dedicated IP pool that it's associated with, as well information about the automatic warm-up process for the address.

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
    res, err := s.SDK.GetDedicatedIP(ctx, operations.GetDedicatedIPRequest{
        IP: "maiores",
        XAmzAlgorithm: sdk.String("quasi"),
        XAmzContentSha256: sdk.String("ex"),
        XAmzCredential: sdk.String("nulla"),
        XAmzDate: sdk.String("excepturi"),
        XAmzSecurityToken: sdk.String("voluptatibus"),
        XAmzSignature: sdk.String("nostrum"),
        XAmzSignedHeaders: sdk.String("sapiente"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDedicatedIPResponse != nil {
        // handle response
    }
}
```

## GetDedicatedIPPool

Retrieve information about the dedicated pool.

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
    res, err := s.SDK.GetDedicatedIPPool(ctx, operations.GetDedicatedIPPoolRequest{
        PoolName: "quisquam",
        XAmzAlgorithm: sdk.String("saepe"),
        XAmzContentSha256: sdk.String("ea"),
        XAmzCredential: sdk.String("impedit"),
        XAmzDate: sdk.String("corporis"),
        XAmzSecurityToken: sdk.String("veniam"),
        XAmzSignature: sdk.String("aliquid"),
        XAmzSignedHeaders: sdk.String("inventore"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDedicatedIPPoolResponse != nil {
        // handle response
    }
}
```

## GetDedicatedIps

List the dedicated IP addresses that are associated with your Amazon Web Services account.

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
    res, err := s.SDK.GetDedicatedIps(ctx, operations.GetDedicatedIpsRequest{
        NextToken: sdk.String("magnam"),
        PageSize: sdk.Int64(407241),
        PoolName: sdk.String("quo"),
        XAmzAlgorithm: sdk.String("consectetur"),
        XAmzContentSha256: sdk.String("recusandae"),
        XAmzCredential: sdk.String("aspernatur"),
        XAmzDate: sdk.String("minima"),
        XAmzSecurityToken: sdk.String("eaque"),
        XAmzSignature: sdk.String("a"),
        XAmzSignedHeaders: sdk.String("libero"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDedicatedIpsResponse != nil {
        // handle response
    }
}
```

## GetDeliverabilityDashboardOptions

<p>Retrieve information about the status of the Deliverability dashboard for your account. When the Deliverability dashboard is enabled, you gain access to reputation, deliverability, and other metrics for the domains that you use to send email. You also gain the ability to perform predictive inbox placement tests.</p> <p>When you use the Deliverability dashboard, you pay a monthly subscription charge, in addition to any other fees that you accrue by using Amazon SES and other Amazon Web Services services. For more information about the features and cost of a Deliverability dashboard subscription, see <a href="http://aws.amazon.com/ses/pricing/">Amazon SES Pricing</a>.</p>

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
    res, err := s.SDK.GetDeliverabilityDashboardOptions(ctx, operations.GetDeliverabilityDashboardOptionsRequest{
        XAmzAlgorithm: sdk.String("aut"),
        XAmzContentSha256: sdk.String("aut"),
        XAmzCredential: sdk.String("deleniti"),
        XAmzDate: sdk.String("impedit"),
        XAmzSecurityToken: sdk.String("aliquam"),
        XAmzSignature: sdk.String("fugit"),
        XAmzSignedHeaders: sdk.String("accusamus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeliverabilityDashboardOptionsResponse != nil {
        // handle response
    }
}
```

## GetDeliverabilityTestReport

Retrieve the results of a predictive inbox placement test.

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
    res, err := s.SDK.GetDeliverabilityTestReport(ctx, operations.GetDeliverabilityTestReportRequest{
        ReportID: "inventore",
        XAmzAlgorithm: sdk.String("non"),
        XAmzContentSha256: sdk.String("et"),
        XAmzCredential: sdk.String("dolorum"),
        XAmzDate: sdk.String("laborum"),
        XAmzSecurityToken: sdk.String("placeat"),
        XAmzSignature: sdk.String("velit"),
        XAmzSignedHeaders: sdk.String("eum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeliverabilityTestReportResponse != nil {
        // handle response
    }
}
```

## GetDomainDeliverabilityCampaign

Retrieve all the deliverability data for a specific campaign. This data is available for a campaign only if the campaign sent email by using a domain that the Deliverability dashboard is enabled for.

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
    res, err := s.SDK.GetDomainDeliverabilityCampaign(ctx, operations.GetDomainDeliverabilityCampaignRequest{
        CampaignID: "autem",
        XAmzAlgorithm: sdk.String("nobis"),
        XAmzContentSha256: sdk.String("quas"),
        XAmzCredential: sdk.String("assumenda"),
        XAmzDate: sdk.String("nulla"),
        XAmzSecurityToken: sdk.String("voluptas"),
        XAmzSignature: sdk.String("libero"),
        XAmzSignedHeaders: sdk.String("quasi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDomainDeliverabilityCampaignResponse != nil {
        // handle response
    }
}
```

## GetDomainStatisticsReport

Retrieve inbox placement and engagement rates for the domains that you use to send email.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetDomainStatisticsReport(ctx, operations.GetDomainStatisticsReportRequest{
        Domain: "tempora",
        EndDate: types.MustTimeFromString("2022-11-14T00:12:37.683Z"),
        StartDate: types.MustTimeFromString("2022-11-21T13:50:30.142Z"),
        XAmzAlgorithm: sdk.String("molestiae"),
        XAmzContentSha256: sdk.String("magnam"),
        XAmzCredential: sdk.String("odio"),
        XAmzDate: sdk.String("eius"),
        XAmzSecurityToken: sdk.String("esse"),
        XAmzSignature: sdk.String("esse"),
        XAmzSignedHeaders: sdk.String("rem"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDomainStatisticsReportResponse != nil {
        // handle response
    }
}
```

## GetEmailIdentity

Provides information about a specific identity, including the identity's verification status, sending authorization policies, its DKIM authentication status, and its custom Mail-From settings.

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
    res, err := s.SDK.GetEmailIdentity(ctx, operations.GetEmailIdentityRequest{
        EmailIdentity: "fuga",
        XAmzAlgorithm: sdk.String("reprehenderit"),
        XAmzContentSha256: sdk.String("quidem"),
        XAmzCredential: sdk.String("fugiat"),
        XAmzDate: sdk.String("ut"),
        XAmzSecurityToken: sdk.String("eum"),
        XAmzSignature: sdk.String("suscipit"),
        XAmzSignedHeaders: sdk.String("assumenda"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetEmailIdentityResponse != nil {
        // handle response
    }
}
```

## GetEmailIdentityPolicies

<p>Returns the requested sending authorization policies for the given identity (an email address or a domain). The policies are returned as a map of policy names to policy contents. You can retrieve a maximum of 20 policies at a time.</p> <note> <p>This API is for the identity owner only. If you have not verified the identity, this API will return an error.</p> </note> <p>Sending authorization is a feature that enables an identity owner to authorize other senders to use its identities. For information about using sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

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
    res, err := s.SDK.GetEmailIdentityPolicies(ctx, operations.GetEmailIdentityPoliciesRequest{
        EmailIdentity: "eos",
        XAmzAlgorithm: sdk.String("praesentium"),
        XAmzContentSha256: sdk.String("quisquam"),
        XAmzCredential: sdk.String("veritatis"),
        XAmzDate: sdk.String("ipsa"),
        XAmzSecurityToken: sdk.String("id"),
        XAmzSignature: sdk.String("quidem"),
        XAmzSignedHeaders: sdk.String("neque"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetEmailIdentityPoliciesResponse != nil {
        // handle response
    }
}
```

## GetEmailTemplate

<p>Displays the template object (which includes the subject line, HTML part and text part) for the template you specify.</p> <p>You can execute this operation no more than once per second.</p>

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
    res, err := s.SDK.GetEmailTemplate(ctx, operations.GetEmailTemplateRequest{
        TemplateName: "quo",
        XAmzAlgorithm: sdk.String("illum"),
        XAmzContentSha256: sdk.String("quo"),
        XAmzCredential: sdk.String("fuga"),
        XAmzDate: sdk.String("eius"),
        XAmzSecurityToken: sdk.String("eos"),
        XAmzSignature: sdk.String("voluptas"),
        XAmzSignedHeaders: sdk.String("ab"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetEmailTemplateResponse != nil {
        // handle response
    }
}
```

## GetImportJob

Provides information about an import job.

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
    res, err := s.SDK.GetImportJob(ctx, operations.GetImportJobRequest{
        JobID: "cupiditate",
        XAmzAlgorithm: sdk.String("consequatur"),
        XAmzContentSha256: sdk.String("tempora"),
        XAmzCredential: sdk.String("debitis"),
        XAmzDate: sdk.String("ipsam"),
        XAmzSecurityToken: sdk.String("aspernatur"),
        XAmzSignature: sdk.String("sequi"),
        XAmzSignedHeaders: sdk.String("quo"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetImportJobResponse != nil {
        // handle response
    }
}
```

## GetSuppressedDestination

Retrieves information about a specific email address that's on the suppression list for your account.

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
    res, err := s.SDK.GetSuppressedDestination(ctx, operations.GetSuppressedDestinationRequest{
        EmailAddress: "esse",
        XAmzAlgorithm: sdk.String("recusandae"),
        XAmzContentSha256: sdk.String("aperiam"),
        XAmzCredential: sdk.String("distinctio"),
        XAmzDate: sdk.String("quod"),
        XAmzSecurityToken: sdk.String("dignissimos"),
        XAmzSignature: sdk.String("inventore"),
        XAmzSignedHeaders: sdk.String("nihil"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSuppressedDestinationResponse != nil {
        // handle response
    }
}
```

## ListConfigurationSets

<p>List all of the configuration sets associated with your account in the current region.</p> <p> <i>Configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p>

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
    res, err := s.SDK.ListConfigurationSets(ctx, operations.ListConfigurationSetsRequest{
        NextToken: sdk.String("totam"),
        PageSize: sdk.Int64(882710),
        XAmzAlgorithm: sdk.String("aliquam"),
        XAmzContentSha256: sdk.String("odio"),
        XAmzCredential: sdk.String("occaecati"),
        XAmzDate: sdk.String("commodi"),
        XAmzSecurityToken: sdk.String("sapiente"),
        XAmzSignature: sdk.String("dolores"),
        XAmzSignedHeaders: sdk.String("deserunt"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListConfigurationSetsResponse != nil {
        // handle response
    }
}
```

## ListContactLists

Lists all of the contact lists available.

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
    res, err := s.SDK.ListContactLists(ctx, operations.ListContactListsRequest{
        NextToken: sdk.String("molestiae"),
        PageSize: sdk.Int64(35362),
        XAmzAlgorithm: sdk.String("porro"),
        XAmzContentSha256: sdk.String("eum"),
        XAmzCredential: sdk.String("quas"),
        XAmzDate: sdk.String("praesentium"),
        XAmzSecurityToken: sdk.String("consequuntur"),
        XAmzSignature: sdk.String("deleniti"),
        XAmzSignedHeaders: sdk.String("fugit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListContactListsResponse != nil {
        // handle response
    }
}
```

## ListContacts

Lists the contacts present in a specific contact list.

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
    res, err := s.SDK.ListContacts(ctx, operations.ListContactsRequest{
        ContactListName: "fuga",
        NextToken: sdk.String("mollitia"),
        PageSize: sdk.Int64(277596),
        RequestBody: operations.ListContactsRequestBody{
            Filter: &operations.ListContactsRequestBodyFilter{
                FilteredStatus: shared.SubscriptionStatusEnumOptOut.ToPointer(),
                TopicFilter: &shared.TopicFilter{
                    TopicName: sdk.String("explicabo"),
                    UseDefaultIfPreferenceUnavailable: sdk.Bool(false),
                },
            },
        },
        XAmzAlgorithm: sdk.String("minima"),
        XAmzContentSha256: sdk.String("nisi"),
        XAmzCredential: sdk.String("fugit"),
        XAmzDate: sdk.String("sapiente"),
        XAmzSecurityToken: sdk.String("consequuntur"),
        XAmzSignature: sdk.String("ratione"),
        XAmzSignedHeaders: sdk.String("explicabo"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListContactsResponse != nil {
        // handle response
    }
}
```

## ListCustomVerificationEmailTemplates

<p>Lists the existing custom verification email templates for your account in the current Amazon Web Services Region.</p> <p>For more information about custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/dg/creating-identities.html#send-email-verify-address-custom">Using custom verification email templates</a> in the <i>Amazon SES Developer Guide</i>.</p> <p>You can execute this operation no more than once per second.</p>

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
    res, err := s.SDK.ListCustomVerificationEmailTemplates(ctx, operations.ListCustomVerificationEmailTemplatesRequest{
        NextToken: sdk.String("saepe"),
        PageSize: sdk.Int64(578922),
        XAmzAlgorithm: sdk.String("atque"),
        XAmzContentSha256: sdk.String("et"),
        XAmzCredential: sdk.String("esse"),
        XAmzDate: sdk.String("eveniet"),
        XAmzSecurityToken: sdk.String("accusamus"),
        XAmzSignature: sdk.String("veritatis"),
        XAmzSignedHeaders: sdk.String("esse"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListCustomVerificationEmailTemplatesResponse != nil {
        // handle response
    }
}
```

## ListDedicatedIPPools

List all of the dedicated IP pools that exist in your Amazon Web Services account in the current Region.

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
    res, err := s.SDK.ListDedicatedIPPools(ctx, operations.ListDedicatedIPPoolsRequest{
        NextToken: sdk.String("quod"),
        PageSize: sdk.Int64(724168),
        XAmzAlgorithm: sdk.String("vero"),
        XAmzContentSha256: sdk.String("aliquid"),
        XAmzCredential: sdk.String("quasi"),
        XAmzDate: sdk.String("saepe"),
        XAmzSecurityToken: sdk.String("vel"),
        XAmzSignature: sdk.String("harum"),
        XAmzSignedHeaders: sdk.String("molestiae"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListDedicatedIPPoolsResponse != nil {
        // handle response
    }
}
```

## ListDeliverabilityTestReports

Show a list of the predictive inbox placement tests that you've performed, regardless of their statuses. For predictive inbox placement tests that are complete, you can use the <code>GetDeliverabilityTestReport</code> operation to view the results.

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
    res, err := s.SDK.ListDeliverabilityTestReports(ctx, operations.ListDeliverabilityTestReportsRequest{
        NextToken: sdk.String("rerum"),
        PageSize: sdk.Int64(580197),
        XAmzAlgorithm: sdk.String("minima"),
        XAmzContentSha256: sdk.String("distinctio"),
        XAmzCredential: sdk.String("eligendi"),
        XAmzDate: sdk.String("sit"),
        XAmzSecurityToken: sdk.String("culpa"),
        XAmzSignature: sdk.String("tempore"),
        XAmzSignedHeaders: sdk.String("adipisci"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListDeliverabilityTestReportsResponse != nil {
        // handle response
    }
}
```

## ListDomainDeliverabilityCampaigns

Retrieve deliverability data for all the campaigns that used a specific domain to send email during a specified time range. This data is available for a domain only if you enabled the Deliverability dashboard for the domain.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListDomainDeliverabilityCampaigns(ctx, operations.ListDomainDeliverabilityCampaignsRequest{
        EndDate: types.MustTimeFromString("2022-07-09T05:02:22.250Z"),
        NextToken: sdk.String("consequatur"),
        PageSize: sdk.Int64(796392),
        StartDate: types.MustTimeFromString("2022-01-15T21:42:01.969Z"),
        SubscribedDomain: "consectetur",
        XAmzAlgorithm: sdk.String("esse"),
        XAmzContentSha256: sdk.String("blanditiis"),
        XAmzCredential: sdk.String("provident"),
        XAmzDate: sdk.String("a"),
        XAmzSecurityToken: sdk.String("nulla"),
        XAmzSignature: sdk.String("quas"),
        XAmzSignedHeaders: sdk.String("esse"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListDomainDeliverabilityCampaignsResponse != nil {
        // handle response
    }
}
```

## ListEmailIdentities

Returns a list of all of the email identities that are associated with your Amazon Web Services account. An identity can be either an email address or a domain. This operation returns identities that are verified as well as those that aren't. This operation returns identities that are associated with Amazon SES and Amazon Pinpoint.

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
    res, err := s.SDK.ListEmailIdentities(ctx, operations.ListEmailIdentitiesRequest{
        NextToken: sdk.String("quasi"),
        PageSize: sdk.Int64(951875),
        XAmzAlgorithm: sdk.String("error"),
        XAmzContentSha256: sdk.String("sint"),
        XAmzCredential: sdk.String("pariatur"),
        XAmzDate: sdk.String("possimus"),
        XAmzSecurityToken: sdk.String("quia"),
        XAmzSignature: sdk.String("eveniet"),
        XAmzSignedHeaders: sdk.String("asperiores"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListEmailIdentitiesResponse != nil {
        // handle response
    }
}
```

## ListEmailTemplates

<p>Lists the email templates present in your Amazon SES account in the current Amazon Web Services Region.</p> <p>You can execute this operation no more than once per second.</p>

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
    res, err := s.SDK.ListEmailTemplates(ctx, operations.ListEmailTemplatesRequest{
        NextToken: sdk.String("facere"),
        PageSize: sdk.Int64(85001),
        XAmzAlgorithm: sdk.String("consequuntur"),
        XAmzContentSha256: sdk.String("quasi"),
        XAmzCredential: sdk.String("similique"),
        XAmzDate: sdk.String("culpa"),
        XAmzSecurityToken: sdk.String("aliquid"),
        XAmzSignature: sdk.String("tenetur"),
        XAmzSignedHeaders: sdk.String("quae"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListEmailTemplatesResponse != nil {
        // handle response
    }
}
```

## ListImportJobs

Lists all of the import jobs.

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
    res, err := s.SDK.ListImportJobs(ctx, operations.ListImportJobsRequest{
        NextToken: sdk.String("earum"),
        PageSize: sdk.Int64(424032),
        RequestBody: operations.ListImportJobsRequestBody{
            ImportDestinationType: operations.ListImportJobsRequestBodyImportDestinationTypeEnumSuppressionList.ToPointer(),
        },
        XAmzAlgorithm: sdk.String("eius"),
        XAmzContentSha256: sdk.String("libero"),
        XAmzCredential: sdk.String("illum"),
        XAmzDate: sdk.String("soluta"),
        XAmzSecurityToken: sdk.String("accusantium"),
        XAmzSignature: sdk.String("aliquam"),
        XAmzSignedHeaders: sdk.String("sapiente"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListImportJobsResponse != nil {
        // handle response
    }
}
```

## ListRecommendations

<p>Lists the recommendations present in your Amazon SES account in the current Amazon Web Services Region.</p> <p>You can execute this operation no more than once per second.</p>

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
    res, err := s.SDK.ListRecommendations(ctx, operations.ListRecommendationsRequest{
        NextToken: sdk.String("dicta"),
        PageSize: sdk.String("ullam"),
        RequestBody: operations.ListRecommendationsRequestBody{
            Filter: map[string]string{
                "ullam": "nisi",
                "aut": "voluptatum",
            },
            NextToken: sdk.String("qui"),
            PageSize: sdk.Int64(845358),
        },
        XAmzAlgorithm: sdk.String("ex"),
        XAmzContentSha256: sdk.String("deleniti"),
        XAmzCredential: sdk.String("itaque"),
        XAmzDate: sdk.String("dolorum"),
        XAmzSecurityToken: sdk.String("architecto"),
        XAmzSignature: sdk.String("omnis"),
        XAmzSignedHeaders: sdk.String("tenetur"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListRecommendationsResponse != nil {
        // handle response
    }
}
```

## ListSuppressedDestinations

Retrieves a list of email addresses that are on the suppression list for your account.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListSuppressedDestinations(ctx, operations.ListSuppressedDestinationsRequest{
        EndDate: types.MustTimeFromString("2022-02-17T15:16:49.489Z"),
        NextToken: sdk.String("et"),
        PageSize: sdk.Int64(454162),
        Reason: []shared.SuppressionListReasonEnum{
            shared.SuppressionListReasonEnumBounce,
        },
        StartDate: types.MustTimeFromString("2022-10-08T01:09:40.281Z"),
        XAmzAlgorithm: sdk.String("adipisci"),
        XAmzContentSha256: sdk.String("iste"),
        XAmzCredential: sdk.String("temporibus"),
        XAmzDate: sdk.String("accusantium"),
        XAmzSecurityToken: sdk.String("rem"),
        XAmzSignature: sdk.String("aut"),
        XAmzSignedHeaders: sdk.String("laudantium"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListSuppressedDestinationsResponse != nil {
        // handle response
    }
}
```

## ListTagsForResource

Retrieve a list of the tags (keys and values) that are associated with a specified resource. A <i>tag</i> is a label that you optionally define and associate with a resource. Each tag consists of a required <i>tag key</i> and an optional associated <i>tag value</i>. A tag key is a general label that acts as a category for more specific tag values. A tag value acts as a descriptor within a tag key.

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
    res, err := s.SDK.ListTagsForResource(ctx, operations.ListTagsForResourceRequest{
        ResourceArn: "eum",
        XAmzAlgorithm: sdk.String("mollitia"),
        XAmzContentSha256: sdk.String("ab"),
        XAmzCredential: sdk.String("corrupti"),
        XAmzDate: sdk.String("non"),
        XAmzSecurityToken: sdk.String("voluptatem"),
        XAmzSignature: sdk.String("dolor"),
        XAmzSignedHeaders: sdk.String("occaecati"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTagsForResourceResponse != nil {
        // handle response
    }
}
```

## PutAccountDedicatedIPWarmupAttributes

Enable or disable the automatic warm-up feature for dedicated IP addresses.

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
    res, err := s.SDK.PutAccountDedicatedIPWarmupAttributes(ctx, operations.PutAccountDedicatedIPWarmupAttributesRequest{
        RequestBody: operations.PutAccountDedicatedIPWarmupAttributesRequestBody{
            AutoWarmupEnabled: sdk.Bool(false),
        },
        XAmzAlgorithm: sdk.String("numquam"),
        XAmzContentSha256: sdk.String("impedit"),
        XAmzCredential: sdk.String("explicabo"),
        XAmzDate: sdk.String("voluptas"),
        XAmzSecurityToken: sdk.String("aut"),
        XAmzSignature: sdk.String("dignissimos"),
        XAmzSignedHeaders: sdk.String("dicta"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutAccountDedicatedIPWarmupAttributesResponse != nil {
        // handle response
    }
}
```

## PutAccountDetails

Update your Amazon SES account details.

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
    res, err := s.SDK.PutAccountDetails(ctx, operations.PutAccountDetailsRequest{
        RequestBody: operations.PutAccountDetailsRequestBody{
            AdditionalContactEmailAddresses: []string{
                "natus",
                "velit",
                "voluptatibus",
                "voluptas",
            },
            ContactLanguage: operations.PutAccountDetailsRequestBodyContactLanguageEnumJa.ToPointer(),
            MailType: operations.PutAccountDetailsRequestBodyMailTypeEnumMarketing,
            ProductionAccessEnabled: sdk.Bool(false),
            UseCaseDescription: "ea",
            WebsiteURL: "quaerat",
        },
        XAmzAlgorithm: sdk.String("consequuntur"),
        XAmzContentSha256: sdk.String("repellendus"),
        XAmzCredential: sdk.String("officia"),
        XAmzDate: sdk.String("maxime"),
        XAmzSecurityToken: sdk.String("dignissimos"),
        XAmzSignature: sdk.String("officia"),
        XAmzSignedHeaders: sdk.String("asperiores"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutAccountDetailsResponse != nil {
        // handle response
    }
}
```

## PutAccountSendingAttributes

Enable or disable the ability of your account to send email.

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
    res, err := s.SDK.PutAccountSendingAttributes(ctx, operations.PutAccountSendingAttributesRequest{
        RequestBody: operations.PutAccountSendingAttributesRequestBody{
            SendingEnabled: sdk.Bool(false),
        },
        XAmzAlgorithm: sdk.String("nemo"),
        XAmzContentSha256: sdk.String("quae"),
        XAmzCredential: sdk.String("quaerat"),
        XAmzDate: sdk.String("porro"),
        XAmzSecurityToken: sdk.String("quod"),
        XAmzSignature: sdk.String("labore"),
        XAmzSignedHeaders: sdk.String("ab"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutAccountSendingAttributesResponse != nil {
        // handle response
    }
}
```

## PutAccountSuppressionAttributes

Change the settings for the account-level suppression list.

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
    res, err := s.SDK.PutAccountSuppressionAttributes(ctx, operations.PutAccountSuppressionAttributesRequest{
        RequestBody: operations.PutAccountSuppressionAttributesRequestBody{
            SuppressedReasons: []shared.SuppressionListReasonEnum{
                shared.SuppressionListReasonEnumComplaint,
            },
        },
        XAmzAlgorithm: sdk.String("id"),
        XAmzContentSha256: sdk.String("suscipit"),
        XAmzCredential: sdk.String("velit"),
        XAmzDate: sdk.String("culpa"),
        XAmzSecurityToken: sdk.String("est"),
        XAmzSignature: sdk.String("recusandae"),
        XAmzSignedHeaders: sdk.String("totam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutAccountSuppressionAttributesResponse != nil {
        // handle response
    }
}
```

## PutAccountVdmAttributes

<p>Update your Amazon SES account VDM attributes.</p> <p>You can execute this operation no more than once per second.</p>

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
    res, err := s.SDK.PutAccountVdmAttributes(ctx, operations.PutAccountVdmAttributesRequest{
        RequestBody: operations.PutAccountVdmAttributesRequestBody{
            VdmAttributes: operations.PutAccountVdmAttributesRequestBodyVdmAttributes{
                DashboardAttributes: &shared.DashboardAttributes{
                    EngagementMetrics: shared.FeatureStatusEnumDisabled.ToPointer(),
                },
                GuardianAttributes: &shared.GuardianAttributes{
                    OptimizedSharedDelivery: shared.FeatureStatusEnumEnabled.ToPointer(),
                },
                VdmEnabled: shared.FeatureStatusEnumEnabled.ToPointer(),
            },
        },
        XAmzAlgorithm: sdk.String("quos"),
        XAmzContentSha256: sdk.String("vel"),
        XAmzCredential: sdk.String("labore"),
        XAmzDate: sdk.String("possimus"),
        XAmzSecurityToken: sdk.String("facilis"),
        XAmzSignature: sdk.String("cum"),
        XAmzSignedHeaders: sdk.String("commodi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutAccountVdmAttributesResponse != nil {
        // handle response
    }
}
```

## PutConfigurationSetDeliveryOptions

Associate a configuration set with a dedicated IP pool. You can use dedicated IP pools to create groups of dedicated IP addresses for sending specific types of email.

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
    res, err := s.SDK.PutConfigurationSetDeliveryOptions(ctx, operations.PutConfigurationSetDeliveryOptionsRequest{
        ConfigurationSetName: "in",
        RequestBody: operations.PutConfigurationSetDeliveryOptionsRequestBody{
            SendingPoolName: sdk.String("corporis"),
            TLSPolicy: operations.PutConfigurationSetDeliveryOptionsRequestBodyTLSPolicyEnumOptional.ToPointer(),
        },
        XAmzAlgorithm: sdk.String("assumenda"),
        XAmzContentSha256: sdk.String("nemo"),
        XAmzCredential: sdk.String("recusandae"),
        XAmzDate: sdk.String("aliquid"),
        XAmzSecurityToken: sdk.String("aperiam"),
        XAmzSignature: sdk.String("cum"),
        XAmzSignedHeaders: sdk.String("consectetur"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutConfigurationSetDeliveryOptionsResponse != nil {
        // handle response
    }
}
```

## PutConfigurationSetReputationOptions

Enable or disable collection of reputation metrics for emails that you send using a particular configuration set in a specific Amazon Web Services Region.

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
    res, err := s.SDK.PutConfigurationSetReputationOptions(ctx, operations.PutConfigurationSetReputationOptionsRequest{
        ConfigurationSetName: "in",
        RequestBody: operations.PutConfigurationSetReputationOptionsRequestBody{
            ReputationMetricsEnabled: sdk.Bool(false),
        },
        XAmzAlgorithm: sdk.String("exercitationem"),
        XAmzContentSha256: sdk.String("earum"),
        XAmzCredential: sdk.String("facere"),
        XAmzDate: sdk.String("numquam"),
        XAmzSecurityToken: sdk.String("doloribus"),
        XAmzSignature: sdk.String("suscipit"),
        XAmzSignedHeaders: sdk.String("reiciendis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutConfigurationSetReputationOptionsResponse != nil {
        // handle response
    }
}
```

## PutConfigurationSetSendingOptions

Enable or disable email sending for messages that use a particular configuration set in a specific Amazon Web Services Region.

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
    res, err := s.SDK.PutConfigurationSetSendingOptions(ctx, operations.PutConfigurationSetSendingOptionsRequest{
        ConfigurationSetName: "quidem",
        RequestBody: operations.PutConfigurationSetSendingOptionsRequestBody{
            SendingEnabled: sdk.Bool(false),
        },
        XAmzAlgorithm: sdk.String("saepe"),
        XAmzContentSha256: sdk.String("necessitatibus"),
        XAmzCredential: sdk.String("dolore"),
        XAmzDate: sdk.String("sunt"),
        XAmzSecurityToken: sdk.String("asperiores"),
        XAmzSignature: sdk.String("adipisci"),
        XAmzSignedHeaders: sdk.String("non"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutConfigurationSetSendingOptionsResponse != nil {
        // handle response
    }
}
```

## PutConfigurationSetSuppressionOptions

Specify the account suppression list preferences for a configuration set.

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
    res, err := s.SDK.PutConfigurationSetSuppressionOptions(ctx, operations.PutConfigurationSetSuppressionOptionsRequest{
        ConfigurationSetName: "amet",
        RequestBody: operations.PutConfigurationSetSuppressionOptionsRequestBody{
            SuppressedReasons: []shared.SuppressionListReasonEnum{
                shared.SuppressionListReasonEnumBounce,
            },
        },
        XAmzAlgorithm: sdk.String("a"),
        XAmzContentSha256: sdk.String("debitis"),
        XAmzCredential: sdk.String("consectetur"),
        XAmzDate: sdk.String("corporis"),
        XAmzSecurityToken: sdk.String("harum"),
        XAmzSignature: sdk.String("laboriosam"),
        XAmzSignedHeaders: sdk.String("ipsa"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutConfigurationSetSuppressionOptionsResponse != nil {
        // handle response
    }
}
```

## PutConfigurationSetTrackingOptions

Specify a custom domain to use for open and click tracking elements in email that you send.

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
    res, err := s.SDK.PutConfigurationSetTrackingOptions(ctx, operations.PutConfigurationSetTrackingOptionsRequest{
        ConfigurationSetName: "voluptates",
        RequestBody: operations.PutConfigurationSetTrackingOptionsRequestBody{
            CustomRedirectDomain: sdk.String("libero"),
        },
        XAmzAlgorithm: sdk.String("vitae"),
        XAmzContentSha256: sdk.String("accusamus"),
        XAmzCredential: sdk.String("similique"),
        XAmzDate: sdk.String("tempora"),
        XAmzSecurityToken: sdk.String("aspernatur"),
        XAmzSignature: sdk.String("voluptas"),
        XAmzSignedHeaders: sdk.String("voluptas"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutConfigurationSetTrackingOptionsResponse != nil {
        // handle response
    }
}
```

## PutConfigurationSetVdmOptions

<p>Specify VDM preferences for email that you send using the configuration set.</p> <p>You can execute this operation no more than once per second.</p>

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
    res, err := s.SDK.PutConfigurationSetVdmOptions(ctx, operations.PutConfigurationSetVdmOptionsRequest{
        ConfigurationSetName: "voluptas",
        RequestBody: operations.PutConfigurationSetVdmOptionsRequestBody{
            VdmOptions: &operations.PutConfigurationSetVdmOptionsRequestBodyVdmOptions{
                DashboardOptions: &shared.DashboardOptions{
                    EngagementMetrics: shared.FeatureStatusEnumEnabled.ToPointer(),
                },
                GuardianOptions: &shared.GuardianOptions{
                    OptimizedSharedDelivery: shared.FeatureStatusEnumDisabled.ToPointer(),
                },
            },
        },
        XAmzAlgorithm: sdk.String("dolorum"),
        XAmzContentSha256: sdk.String("adipisci"),
        XAmzCredential: sdk.String("minus"),
        XAmzDate: sdk.String("dolores"),
        XAmzSecurityToken: sdk.String("blanditiis"),
        XAmzSignature: sdk.String("in"),
        XAmzSignedHeaders: sdk.String("dolore"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutConfigurationSetVdmOptionsResponse != nil {
        // handle response
    }
}
```

## PutDedicatedIPInPool

<p>Move a dedicated IP address to an existing dedicated IP pool.</p> <note> <p>The dedicated IP address that you specify must already exist, and must be associated with your Amazon Web Services account. </p> <p>The dedicated IP pool you specify must already exist. You can create a new pool by using the <code>CreateDedicatedIpPool</code> operation.</p> </note>

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
    res, err := s.SDK.PutDedicatedIPInPool(ctx, operations.PutDedicatedIPInPoolRequest{
        IP: "aliquam",
        RequestBody: operations.PutDedicatedIPInPoolRequestBody{
            DestinationPoolName: "officiis",
        },
        XAmzAlgorithm: sdk.String("temporibus"),
        XAmzContentSha256: sdk.String("ullam"),
        XAmzCredential: sdk.String("adipisci"),
        XAmzDate: sdk.String("cum"),
        XAmzSecurityToken: sdk.String("blanditiis"),
        XAmzSignature: sdk.String("quas"),
        XAmzSignedHeaders: sdk.String("hic"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutDedicatedIPInPoolResponse != nil {
        // handle response
    }
}
```

## PutDedicatedIPWarmupAttributes

<p/>

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
    res, err := s.SDK.PutDedicatedIPWarmupAttributes(ctx, operations.PutDedicatedIPWarmupAttributesRequest{
        IP: "nesciunt",
        RequestBody: operations.PutDedicatedIPWarmupAttributesRequestBody{
            WarmupPercentage: 633998,
        },
        XAmzAlgorithm: sdk.String("corrupti"),
        XAmzContentSha256: sdk.String("pariatur"),
        XAmzCredential: sdk.String("totam"),
        XAmzDate: sdk.String("hic"),
        XAmzSecurityToken: sdk.String("exercitationem"),
        XAmzSignature: sdk.String("nobis"),
        XAmzSignedHeaders: sdk.String("sit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutDedicatedIPWarmupAttributesResponse != nil {
        // handle response
    }
}
```

## PutDeliverabilityDashboardOption

<p>Enable or disable the Deliverability dashboard. When you enable the Deliverability dashboard, you gain access to reputation, deliverability, and other metrics for the domains that you use to send email. You also gain the ability to perform predictive inbox placement tests.</p> <p>When you use the Deliverability dashboard, you pay a monthly subscription charge, in addition to any other fees that you accrue by using Amazon SES and other Amazon Web Services services. For more information about the features and cost of a Deliverability dashboard subscription, see <a href="http://aws.amazon.com/ses/pricing/">Amazon SES Pricing</a>.</p>

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.PutDeliverabilityDashboardOption(ctx, operations.PutDeliverabilityDashboardOptionRequest{
        RequestBody: operations.PutDeliverabilityDashboardOptionRequestBody{
            DashboardEnabled: false,
            SubscribedDomains: []shared.DomainDeliverabilityTrackingOption{
                shared.DomainDeliverabilityTrackingOption{
                    Domain: sdk.String("sed"),
                    InboxPlacementTrackingOption: &shared.InboxPlacementTrackingOption{
                        Global: sdk.Bool(false),
                        TrackedIsps: []string{
                            "explicabo",
                            "asperiores",
                            "facilis",
                            "voluptate",
                        },
                    },
                    SubscriptionStartDate: types.MustTimeFromString("2022-11-10T06:21:40.327Z"),
                },
                shared.DomainDeliverabilityTrackingOption{
                    Domain: sdk.String("iste"),
                    InboxPlacementTrackingOption: &shared.InboxPlacementTrackingOption{
                        Global: sdk.Bool(false),
                        TrackedIsps: []string{
                            "laborum",
                            "sed",
                        },
                    },
                    SubscriptionStartDate: types.MustTimeFromString("2022-08-01T14:49:09.199Z"),
                },
                shared.DomainDeliverabilityTrackingOption{
                    Domain: sdk.String("quidem"),
                    InboxPlacementTrackingOption: &shared.InboxPlacementTrackingOption{
                        Global: sdk.Bool(false),
                        TrackedIsps: []string{
                            "voluptas",
                        },
                    },
                    SubscriptionStartDate: types.MustTimeFromString("2022-10-19T23:26:17.500Z"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("suscipit"),
        XAmzContentSha256: sdk.String("sapiente"),
        XAmzCredential: sdk.String("debitis"),
        XAmzDate: sdk.String("illo"),
        XAmzSecurityToken: sdk.String("reiciendis"),
        XAmzSignature: sdk.String("perferendis"),
        XAmzSignedHeaders: sdk.String("corrupti"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutDeliverabilityDashboardOptionResponse != nil {
        // handle response
    }
}
```

## PutEmailIdentityConfigurationSetAttributes

Used to associate a configuration set with an email identity.

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
    res, err := s.SDK.PutEmailIdentityConfigurationSetAttributes(ctx, operations.PutEmailIdentityConfigurationSetAttributesRequest{
        EmailIdentity: "maiores",
        RequestBody: operations.PutEmailIdentityConfigurationSetAttributesRequestBody{
            ConfigurationSetName: sdk.String("incidunt"),
        },
        XAmzAlgorithm: sdk.String("sed"),
        XAmzContentSha256: sdk.String("provident"),
        XAmzCredential: sdk.String("eius"),
        XAmzDate: sdk.String("necessitatibus"),
        XAmzSecurityToken: sdk.String("ipsum"),
        XAmzSignature: sdk.String("ea"),
        XAmzSignedHeaders: sdk.String("occaecati"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutEmailIdentityConfigurationSetAttributesResponse != nil {
        // handle response
    }
}
```

## PutEmailIdentityDkimAttributes

Used to enable or disable DKIM authentication for an email identity.

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
    res, err := s.SDK.PutEmailIdentityDkimAttributes(ctx, operations.PutEmailIdentityDkimAttributesRequest{
        EmailIdentity: "quos",
        RequestBody: operations.PutEmailIdentityDkimAttributesRequestBody{
            SigningEnabled: sdk.Bool(false),
        },
        XAmzAlgorithm: sdk.String("voluptatibus"),
        XAmzContentSha256: sdk.String("tempora"),
        XAmzCredential: sdk.String("tempora"),
        XAmzDate: sdk.String("voluptate"),
        XAmzSecurityToken: sdk.String("reiciendis"),
        XAmzSignature: sdk.String("ex"),
        XAmzSignedHeaders: sdk.String("sit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutEmailIdentityDkimAttributesResponse != nil {
        // handle response
    }
}
```

## PutEmailIdentityDkimSigningAttributes

<p>Used to configure or change the DKIM authentication settings for an email domain identity. You can use this operation to do any of the following:</p> <ul> <li> <p>Update the signing attributes for an identity that uses Bring Your Own DKIM (BYODKIM).</p> </li> <li> <p>Update the key length that should be used for Easy DKIM.</p> </li> <li> <p>Change from using no DKIM authentication to using Easy DKIM.</p> </li> <li> <p>Change from using no DKIM authentication to using BYODKIM.</p> </li> <li> <p>Change from using Easy DKIM to using BYODKIM.</p> </li> <li> <p>Change from using BYODKIM to using Easy DKIM.</p> </li> </ul>

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
    res, err := s.SDK.PutEmailIdentityDkimSigningAttributes(ctx, operations.PutEmailIdentityDkimSigningAttributesRequest{
        EmailIdentity: "non",
        RequestBody: operations.PutEmailIdentityDkimSigningAttributesRequestBody{
            SigningAttributes: &operations.PutEmailIdentityDkimSigningAttributesRequestBodySigningAttributes{
                DomainSigningPrivateKey: sdk.String("officiis"),
                DomainSigningSelector: sdk.String("praesentium"),
                NextSigningKeyLength: shared.DkimSigningKeyLengthEnumRsa2048Bit.ToPointer(),
            },
            SigningAttributesOrigin: operations.PutEmailIdentityDkimSigningAttributesRequestBodySigningAttributesOriginEnumAwsSes,
        },
        XAmzAlgorithm: sdk.String("incidunt"),
        XAmzContentSha256: sdk.String("ipsam"),
        XAmzCredential: sdk.String("debitis"),
        XAmzDate: sdk.String("rem"),
        XAmzSecurityToken: sdk.String("sit"),
        XAmzSignature: sdk.String("nobis"),
        XAmzSignedHeaders: sdk.String("error"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutEmailIdentityDkimSigningAttributesResponse != nil {
        // handle response
    }
}
```

## PutEmailIdentityFeedbackAttributes

<p>Used to enable or disable feedback forwarding for an identity. This setting determines what happens when an identity is used to send an email that results in a bounce or complaint event.</p> <p>If the value is <code>true</code>, you receive email notifications when bounce or complaint events occur. These notifications are sent to the address that you specified in the <code>Return-Path</code> header of the original email.</p> <p>You're required to have a method of tracking bounces and complaints. If you haven't set up another mechanism for receiving bounce or complaint notifications (for example, by setting up an event destination), you receive an email notification when these events occur (even if this setting is disabled).</p>

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
    res, err := s.SDK.PutEmailIdentityFeedbackAttributes(ctx, operations.PutEmailIdentityFeedbackAttributesRequest{
        EmailIdentity: "veniam",
        RequestBody: operations.PutEmailIdentityFeedbackAttributesRequestBody{
            EmailForwardingEnabled: sdk.Bool(false),
        },
        XAmzAlgorithm: sdk.String("minima"),
        XAmzContentSha256: sdk.String("recusandae"),
        XAmzCredential: sdk.String("reiciendis"),
        XAmzDate: sdk.String("nulla"),
        XAmzSecurityToken: sdk.String("magni"),
        XAmzSignature: sdk.String("aperiam"),
        XAmzSignedHeaders: sdk.String("saepe"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutEmailIdentityFeedbackAttributesResponse != nil {
        // handle response
    }
}
```

## PutEmailIdentityMailFromAttributes

Used to enable or disable the custom Mail-From domain configuration for an email identity.

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
    res, err := s.SDK.PutEmailIdentityMailFromAttributes(ctx, operations.PutEmailIdentityMailFromAttributesRequest{
        EmailIdentity: "numquam",
        RequestBody: operations.PutEmailIdentityMailFromAttributesRequestBody{
            BehaviorOnMxFailure: operations.PutEmailIdentityMailFromAttributesRequestBodyBehaviorOnMxFailureEnumUseDefaultValue.ToPointer(),
            MailFromDomain: sdk.String("in"),
        },
        XAmzAlgorithm: sdk.String("officiis"),
        XAmzContentSha256: sdk.String("beatae"),
        XAmzCredential: sdk.String("laudantium"),
        XAmzDate: sdk.String("exercitationem"),
        XAmzSecurityToken: sdk.String("praesentium"),
        XAmzSignature: sdk.String("cum"),
        XAmzSignedHeaders: sdk.String("laboriosam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutEmailIdentityMailFromAttributesResponse != nil {
        // handle response
    }
}
```

## PutSuppressedDestination

Adds an email address to the suppression list for your account.

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
    res, err := s.SDK.PutSuppressedDestination(ctx, operations.PutSuppressedDestinationRequest{
        RequestBody: operations.PutSuppressedDestinationRequestBody{
            EmailAddress: "dolorum",
            Reason: operations.PutSuppressedDestinationRequestBodyReasonEnumComplaint,
        },
        XAmzAlgorithm: sdk.String("error"),
        XAmzContentSha256: sdk.String("hic"),
        XAmzCredential: sdk.String("expedita"),
        XAmzDate: sdk.String("debitis"),
        XAmzSecurityToken: sdk.String("neque"),
        XAmzSignature: sdk.String("dolorum"),
        XAmzSignedHeaders: sdk.String("nostrum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutSuppressedDestinationResponse != nil {
        // handle response
    }
}
```

## SendBulkEmail

Composes an email message to multiple destinations.

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
    res, err := s.SDK.SendBulkEmail(ctx, operations.SendBulkEmailRequest{
        RequestBody: operations.SendBulkEmailRequestBody{
            BulkEmailEntries: []shared.BulkEmailEntry{
                shared.BulkEmailEntry{
                    Destination: shared.Destination{
                        BccAddresses: []string{
                            "corrupti",
                            "accusamus",
                            "tempora",
                        },
                        CcAddresses: []string{
                            "fugit",
                            "ut",
                            "fugiat",
                        },
                        ToAddresses: []string{
                            "culpa",
                        },
                    },
                    ReplacementEmailContent: &shared.ReplacementEmailContent{
                        ReplacementTemplate: &shared.ReplacementTemplate{
                            ReplacementTemplateData: sdk.String("expedita"),
                        },
                    },
                    ReplacementTags: []shared.MessageTag{
                        shared.MessageTag{
                            Name: "Ms. Georgia Hintz",
                            Value: "repudiandae",
                        },
                        shared.MessageTag{
                            Name: "Janet Kuvalis",
                            Value: "sit",
                        },
                    },
                },
                shared.BulkEmailEntry{
                    Destination: shared.Destination{
                        BccAddresses: []string{
                            "nostrum",
                            "saepe",
                        },
                        CcAddresses: []string{
                            "consequatur",
                            "incidunt",
                            "reiciendis",
                        },
                        ToAddresses: []string{
                            "harum",
                        },
                    },
                    ReplacementEmailContent: &shared.ReplacementEmailContent{
                        ReplacementTemplate: &shared.ReplacementTemplate{
                            ReplacementTemplateData: sdk.String("dicta"),
                        },
                    },
                    ReplacementTags: []shared.MessageTag{
                        shared.MessageTag{
                            Name: "Francisco Powlowski",
                            Value: "nam",
                        },
                    },
                },
                shared.BulkEmailEntry{
                    Destination: shared.Destination{
                        BccAddresses: []string{
                            "laboriosam",
                            "alias",
                            "amet",
                            "deserunt",
                        },
                        CcAddresses: []string{
                            "unde",
                            "reiciendis",
                        },
                        ToAddresses: []string{
                            "repellendus",
                            "delectus",
                            "voluptates",
                        },
                    },
                    ReplacementEmailContent: &shared.ReplacementEmailContent{
                        ReplacementTemplate: &shared.ReplacementTemplate{
                            ReplacementTemplateData: sdk.String("perferendis"),
                        },
                    },
                    ReplacementTags: []shared.MessageTag{
                        shared.MessageTag{
                            Name: "Ron Schulist",
                            Value: "mollitia",
                        },
                        shared.MessageTag{
                            Name: "Helen Schiller IV",
                            Value: "reprehenderit",
                        },
                        shared.MessageTag{
                            Name: "Jimmie Hoppe",
                            Value: "et",
                        },
                    },
                },
            },
            ConfigurationSetName: sdk.String("esse"),
            DefaultContent: operations.SendBulkEmailRequestBodyDefaultContent{
                Template: &shared.Template{
                    TemplateArn: sdk.String("amet"),
                    TemplateData: sdk.String("assumenda"),
                    TemplateName: sdk.String("ea"),
                },
            },
            DefaultEmailTags: []shared.MessageTag{
                shared.MessageTag{
                    Name: "Frankie Torphy",
                    Value: "minima",
                },
                shared.MessageTag{
                    Name: "Tara Wuckert",
                    Value: "error",
                },
                shared.MessageTag{
                    Name: "Shane Walker",
                    Value: "sunt",
                },
            },
            FeedbackForwardingEmailAddress: sdk.String("recusandae"),
            FeedbackForwardingEmailAddressIdentityArn: sdk.String("dolorum"),
            FromEmailAddress: sdk.String("repellendus"),
            FromEmailAddressIdentityArn: sdk.String("labore"),
            ReplyToAddresses: []string{
                "doloremque",
                "repudiandae",
                "dicta",
                "accusantium",
            },
        },
        XAmzAlgorithm: sdk.String("beatae"),
        XAmzContentSha256: sdk.String("dolores"),
        XAmzCredential: sdk.String("enim"),
        XAmzDate: sdk.String("laboriosam"),
        XAmzSecurityToken: sdk.String("velit"),
        XAmzSignature: sdk.String("a"),
        XAmzSignedHeaders: sdk.String("molestias"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SendBulkEmailResponse != nil {
        // handle response
    }
}
```

## SendCustomVerificationEmail

<p>Adds an email address to the list of identities for your Amazon SES account in the current Amazon Web Services Region and attempts to verify it. As a result of executing this operation, a customized verification email is sent to the specified address.</p> <p>To use this operation, you must first create a custom verification email template. For more information about creating and using custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/dg/creating-identities.html#send-email-verify-address-custom">Using custom verification email templates</a> in the <i>Amazon SES Developer Guide</i>.</p> <p>You can execute this operation no more than once per second.</p>

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
    res, err := s.SDK.SendCustomVerificationEmail(ctx, operations.SendCustomVerificationEmailRequest{
        RequestBody: operations.SendCustomVerificationEmailRequestBody{
            ConfigurationSetName: sdk.String("magnam"),
            EmailAddress: "saepe",
            TemplateName: "consequuntur",
        },
        XAmzAlgorithm: sdk.String("occaecati"),
        XAmzContentSha256: sdk.String("officiis"),
        XAmzCredential: sdk.String("perspiciatis"),
        XAmzDate: sdk.String("in"),
        XAmzSecurityToken: sdk.String("adipisci"),
        XAmzSignature: sdk.String("eveniet"),
        XAmzSignedHeaders: sdk.String("occaecati"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SendCustomVerificationEmailResponse != nil {
        // handle response
    }
}
```

## SendEmail

<p>Sends an email message. You can use the Amazon SES API v2 to send the following types of messages:</p> <ul> <li> <p> <b>Simple</b> – A standard email message. When you create this type of message, you specify the sender, the recipient, and the message body, and Amazon SES assembles the message for you.</p> </li> <li> <p> <b>Raw</b> – A raw, MIME-formatted email message. When you send this type of email, you have to specify all of the message headers, as well as the message body. You can use this message type to send messages that contain attachments. The message that you specify has to be a valid MIME message.</p> </li> <li> <p> <b>Templated</b> – A message that contains personalization tags. When you send this type of email, Amazon SES API v2 automatically replaces the tags with values that you specify.</p> </li> </ul>

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
    res, err := s.SDK.SendEmail(ctx, operations.SendEmailRequest{
        RequestBody: operations.SendEmailRequestBody{
            ConfigurationSetName: sdk.String("consequuntur"),
            Content: operations.SendEmailRequestBodyContent{
                Raw: &shared.RawMessage{
                    Data: "fugit",
                },
                Simple: &shared.Message{
                    Body: shared.Body{
                        HTML: &shared.Content{
                            Charset: sdk.String("id"),
                            Data: "quis",
                        },
                        Text: &shared.Content{
                            Charset: sdk.String("reprehenderit"),
                            Data: "error",
                        },
                    },
                    Subject: shared.Content{
                        Charset: sdk.String("illo"),
                        Data: "corporis",
                    },
                },
                Template: &shared.Template{
                    TemplateArn: sdk.String("quidem"),
                    TemplateData: sdk.String("eveniet"),
                    TemplateName: sdk.String("non"),
                },
            },
            Destination: &operations.SendEmailRequestBodyDestination{
                BccAddresses: []string{
                    "doloremque",
                    "iure",
                    "ipsa",
                    "totam",
                },
                CcAddresses: []string{
                    "molestiae",
                },
                ToAddresses: []string{
                    "qui",
                    "cum",
                    "iure",
                    "necessitatibus",
                },
            },
            EmailTags: []shared.MessageTag{
                shared.MessageTag{
                    Name: "Kelvin Lehner",
                    Value: "ad",
                },
            },
            FeedbackForwardingEmailAddress: sdk.String("repellat"),
            FeedbackForwardingEmailAddressIdentityArn: sdk.String("alias"),
            FromEmailAddress: sdk.String("corporis"),
            FromEmailAddressIdentityArn: sdk.String("perspiciatis"),
            ListManagementOptions: &operations.SendEmailRequestBodyListManagementOptions{
                ContactListName: sdk.String("nihil"),
                TopicName: sdk.String("mollitia"),
            },
            ReplyToAddresses: []string{
                "alias",
                "maiores",
            },
        },
        XAmzAlgorithm: sdk.String("reiciendis"),
        XAmzContentSha256: sdk.String("dolores"),
        XAmzCredential: sdk.String("id"),
        XAmzDate: sdk.String("minima"),
        XAmzSecurityToken: sdk.String("dolore"),
        XAmzSignature: sdk.String("dolorum"),
        XAmzSignedHeaders: sdk.String("nesciunt"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SendEmailResponse != nil {
        // handle response
    }
}
```

## TagResource

<p>Add one or more tags (keys and values) to a specified resource. A <i>tag</i> is a label that you optionally define and associate with a resource. Tags can help you categorize and manage resources in different ways, such as by purpose, owner, environment, or other criteria. A resource can have as many as 50 tags.</p> <p>Each tag consists of a required <i>tag key</i> and an associated <i>tag value</i>, both of which you define. A tag key is a general label that acts as a category for more specific tag values. A tag value acts as a descriptor within a tag key.</p>

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
        RequestBody: operations.TagResourceRequestBody{
            ResourceArn: "quae",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "omnis",
                    Value: "quaerat",
                },
                shared.Tag{
                    Key: "molestiae",
                    Value: "ex",
                },
                shared.Tag{
                    Key: "ut",
                    Value: "culpa",
                },
                shared.Tag{
                    Key: "adipisci",
                    Value: "debitis",
                },
            },
        },
        XAmzAlgorithm: sdk.String("laudantium"),
        XAmzContentSha256: sdk.String("eum"),
        XAmzCredential: sdk.String("nemo"),
        XAmzDate: sdk.String("recusandae"),
        XAmzSecurityToken: sdk.String("esse"),
        XAmzSignature: sdk.String("provident"),
        XAmzSignedHeaders: sdk.String("quis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TagResourceResponse != nil {
        // handle response
    }
}
```

## TestRenderEmailTemplate

<p>Creates a preview of the MIME content of an email when provided with a template and a set of replacement data.</p> <p>You can execute this operation no more than once per second.</p>

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
    res, err := s.SDK.TestRenderEmailTemplate(ctx, operations.TestRenderEmailTemplateRequest{
        RequestBody: operations.TestRenderEmailTemplateRequestBody{
            TemplateData: "eum",
        },
        TemplateName: "reiciendis",
        XAmzAlgorithm: sdk.String("provident"),
        XAmzContentSha256: sdk.String("aspernatur"),
        XAmzCredential: sdk.String("ullam"),
        XAmzDate: sdk.String("quasi"),
        XAmzSecurityToken: sdk.String("animi"),
        XAmzSignature: sdk.String("nostrum"),
        XAmzSignedHeaders: sdk.String("mollitia"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TestRenderEmailTemplateResponse != nil {
        // handle response
    }
}
```

## UntagResource

Remove one or more tags (keys and values) from a specified resource.

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
    res, err := s.SDK.UntagResource(ctx, operations.UntagResourceRequest{
        ResourceArn: "provident",
        TagKeys: []string{
            "animi",
            "ex",
            "aliquid",
            "accusantium",
        },
        XAmzAlgorithm: sdk.String("repellat"),
        XAmzContentSha256: sdk.String("doloribus"),
        XAmzCredential: sdk.String("ullam"),
        XAmzDate: sdk.String("in"),
        XAmzSecurityToken: sdk.String("nam"),
        XAmzSignature: sdk.String("earum"),
        XAmzSignedHeaders: sdk.String("officia"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UntagResourceResponse != nil {
        // handle response
    }
}
```

## UpdateConfigurationSetEventDestination

<p>Update the configuration of an event destination for a configuration set.</p> <p> <i>Events</i> include message sends, deliveries, opens, clicks, bounces, and complaints. <i>Event destinations</i> are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.</p>

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
    res, err := s.SDK.UpdateConfigurationSetEventDestination(ctx, operations.UpdateConfigurationSetEventDestinationRequest{
        ConfigurationSetName: "laborum",
        EventDestinationName: "placeat",
        RequestBody: operations.UpdateConfigurationSetEventDestinationRequestBody{
            EventDestination: operations.UpdateConfigurationSetEventDestinationRequestBodyEventDestination{
                CloudWatchDestination: &shared.CloudWatchDestination{
                    DimensionConfigurations: []shared.CloudWatchDimensionConfiguration{
                        shared.CloudWatchDimensionConfiguration{
                            DefaultDimensionValue: "voluptatibus",
                            DimensionName: "molestias",
                            DimensionValueSource: shared.DimensionValueSourceEnumLinkTag,
                        },
                        shared.CloudWatchDimensionConfiguration{
                            DefaultDimensionValue: "sapiente",
                            DimensionName: "cumque",
                            DimensionValueSource: shared.DimensionValueSourceEnumMessageTag,
                        },
                    },
                },
                Enabled: sdk.Bool(false),
                KinesisFirehoseDestination: &shared.KinesisFirehoseDestination{
                    DeliveryStreamArn: "rerum",
                    IamRoleArn: "tempora",
                },
                MatchingEventTypes: []shared.EventTypeEnum{
                    shared.EventTypeEnumSend,
                    shared.EventTypeEnumReject,
                },
                PinpointDestination: &shared.PinpointDestination{
                    ApplicationArn: sdk.String("cumque"),
                },
                SnsDestination: &shared.SnsDestination{
                    TopicArn: "quae",
                },
            },
        },
        XAmzAlgorithm: sdk.String("perferendis"),
        XAmzContentSha256: sdk.String("velit"),
        XAmzCredential: sdk.String("aspernatur"),
        XAmzDate: sdk.String("eum"),
        XAmzSecurityToken: sdk.String("eius"),
        XAmzSignature: sdk.String("rem"),
        XAmzSignedHeaders: sdk.String("at"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateConfigurationSetEventDestinationResponse != nil {
        // handle response
    }
}
```

## UpdateContact

Updates a contact's preferences for a list. It is not necessary to specify all existing topic preferences in the TopicPreferences object, just the ones that need updating.

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
    res, err := s.SDK.UpdateContact(ctx, operations.UpdateContactRequest{
        ContactListName: "impedit",
        EmailAddress: "eos",
        RequestBody: operations.UpdateContactRequestBody{
            AttributesData: sdk.String("sapiente"),
            TopicPreferences: []shared.TopicPreference{
                shared.TopicPreference{
                    SubscriptionStatus: shared.SubscriptionStatusEnumOptIn,
                    TopicName: "minima",
                },
                shared.TopicPreference{
                    SubscriptionStatus: shared.SubscriptionStatusEnumOptIn,
                    TopicName: "cupiditate",
                },
            },
            UnsubscribeAll: sdk.Bool(false),
        },
        XAmzAlgorithm: sdk.String("provident"),
        XAmzContentSha256: sdk.String("earum"),
        XAmzCredential: sdk.String("soluta"),
        XAmzDate: sdk.String("hic"),
        XAmzSecurityToken: sdk.String("illum"),
        XAmzSignature: sdk.String("eaque"),
        XAmzSignedHeaders: sdk.String("earum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateContactResponse != nil {
        // handle response
    }
}
```

## UpdateContactList

Updates contact list metadata. This operation does a complete replacement.

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
    res, err := s.SDK.UpdateContactList(ctx, operations.UpdateContactListRequest{
        ContactListName: "perspiciatis",
        RequestBody: operations.UpdateContactListRequestBody{
            Description: sdk.String("maiores"),
            Topics: []shared.Topic{
                shared.Topic{
                    DefaultSubscriptionStatus: shared.SubscriptionStatusEnumOptIn,
                    Description: sdk.String("porro"),
                    DisplayName: "suscipit",
                    TopicName: "dolorem",
                },
                shared.Topic{
                    DefaultSubscriptionStatus: shared.SubscriptionStatusEnumOptIn,
                    Description: sdk.String("cumque"),
                    DisplayName: "fuga",
                    TopicName: "ratione",
                },
                shared.Topic{
                    DefaultSubscriptionStatus: shared.SubscriptionStatusEnumOptOut,
                    Description: sdk.String("necessitatibus"),
                    DisplayName: "nulla",
                    TopicName: "consequatur",
                },
                shared.Topic{
                    DefaultSubscriptionStatus: shared.SubscriptionStatusEnumOptIn,
                    Description: sdk.String("et"),
                    DisplayName: "ducimus",
                    TopicName: "natus",
                },
            },
        },
        XAmzAlgorithm: sdk.String("occaecati"),
        XAmzContentSha256: sdk.String("suscipit"),
        XAmzCredential: sdk.String("adipisci"),
        XAmzDate: sdk.String("quasi"),
        XAmzSecurityToken: sdk.String("magni"),
        XAmzSignature: sdk.String("doloribus"),
        XAmzSignedHeaders: sdk.String("nulla"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateContactListResponse != nil {
        // handle response
    }
}
```

## UpdateCustomVerificationEmailTemplate

<p>Updates an existing custom verification email template.</p> <p>For more information about custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/dg/creating-identities.html#send-email-verify-address-custom">Using custom verification email templates</a> in the <i>Amazon SES Developer Guide</i>.</p> <p>You can execute this operation no more than once per second.</p>

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
    res, err := s.SDK.UpdateCustomVerificationEmailTemplate(ctx, operations.UpdateCustomVerificationEmailTemplateRequest{
        RequestBody: operations.UpdateCustomVerificationEmailTemplateRequestBody{
            FailureRedirectionURL: "necessitatibus",
            FromEmailAddress: "ipsa",
            SuccessRedirectionURL: "tempora",
            TemplateContent: "nihil",
            TemplateSubject: "molestiae",
        },
        TemplateName: "dicta",
        XAmzAlgorithm: sdk.String("iusto"),
        XAmzContentSha256: sdk.String("esse"),
        XAmzCredential: sdk.String("praesentium"),
        XAmzDate: sdk.String("maiores"),
        XAmzSecurityToken: sdk.String("reiciendis"),
        XAmzSignature: sdk.String("vel"),
        XAmzSignedHeaders: sdk.String("architecto"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateCustomVerificationEmailTemplateResponse != nil {
        // handle response
    }
}
```

## UpdateEmailIdentityPolicy

<p>Updates the specified sending authorization policy for the given identity (an email address or a domain). This API returns successfully even if a policy with the specified name does not exist.</p> <note> <p>This API is for the identity owner only. If you have not verified the identity, this API will return an error.</p> </note> <p>Sending authorization is a feature that enables an identity owner to authorize other senders to use its identities. For information about using sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

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
    res, err := s.SDK.UpdateEmailIdentityPolicy(ctx, operations.UpdateEmailIdentityPolicyRequest{
        EmailIdentity: "fugiat",
        PolicyName: "doloremque",
        RequestBody: operations.UpdateEmailIdentityPolicyRequestBody{
            Policy: "dicta",
        },
        XAmzAlgorithm: sdk.String("odio"),
        XAmzContentSha256: sdk.String("tempora"),
        XAmzCredential: sdk.String("esse"),
        XAmzDate: sdk.String("ex"),
        XAmzSecurityToken: sdk.String("consectetur"),
        XAmzSignature: sdk.String("aliquid"),
        XAmzSignedHeaders: sdk.String("ipsa"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateEmailIdentityPolicyResponse != nil {
        // handle response
    }
}
```

## UpdateEmailTemplate

<p>Updates an email template. Email templates enable you to send personalized email to one or more destinations in a single API operation. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-personalized-email-api.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

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
    res, err := s.SDK.UpdateEmailTemplate(ctx, operations.UpdateEmailTemplateRequest{
        RequestBody: operations.UpdateEmailTemplateRequestBody{
            TemplateContent: operations.UpdateEmailTemplateRequestBodyTemplateContent{
                HTML: sdk.String("laborum"),
                Subject: sdk.String("sunt"),
                Text: sdk.String("nostrum"),
            },
        },
        TemplateName: "fugiat",
        XAmzAlgorithm: sdk.String("expedita"),
        XAmzContentSha256: sdk.String("aliquid"),
        XAmzCredential: sdk.String("officia"),
        XAmzDate: sdk.String("suscipit"),
        XAmzSecurityToken: sdk.String("aliquid"),
        XAmzSignature: sdk.String("perferendis"),
        XAmzSignedHeaders: sdk.String("eum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateEmailTemplateResponse != nil {
        // handle response
    }
}
```
