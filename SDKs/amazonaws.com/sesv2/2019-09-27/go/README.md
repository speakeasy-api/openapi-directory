# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/amazonaws.com/sesv2/2019-09-27/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
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
    res, err := s.BatchGetMetricData(ctx, operations.BatchGetMetricDataRequest{
        RequestBody: operations.BatchGetMetricDataRequestBody{
            Queries: []shared.BatchGetMetricDataQuery{
                shared.BatchGetMetricDataQuery{
                    Dimensions: map[string]string{
                        "distinctio": "quibusdam",
                        "unde": "nulla",
                        "corrupti": "illum",
                    },
                    EndDate: types.MustTimeFromString("2022-05-18T09:34:54.894Z"),
                    ID: "a674e0f4-67cc-4879-aed1-51a05dfc2ddf",
                    Metric: shared.MetricEnumOpen,
                    Namespace: shared.MetricNamespaceEnumVdm,
                    StartDate: types.MustTimeFromString("2020-08-07T00:03:55.328Z"),
                },
                shared.BatchGetMetricDataQuery{
                    Dimensions: map[string]string{
                        "totam": "porro",
                        "dolorum": "dicta",
                    },
                    EndDate: types.MustTimeFromString("2021-09-20T20:35:01.256Z"),
                    ID: "928fc816-742c-4b73-9205-929396fea759",
                    Metric: shared.MetricEnumOpen,
                    Namespace: shared.MetricNamespaceEnumVdm,
                    StartDate: types.MustTimeFromString("2020-11-28T02:15:07.561Z"),
                },
                shared.BatchGetMetricDataQuery{
                    Dimensions: map[string]string{
                        "ipsa": "reiciendis",
                    },
                    EndDate: types.MustTimeFromString("2021-09-11T04:59:11.542Z"),
                    ID: "a2352c59-5590-47af-b1a3-a2fa94677392",
                    Metric: shared.MetricEnumTransientBounce,
                    Namespace: shared.MetricNamespaceEnumVdm,
                    StartDate: types.MustTimeFromString("2022-04-29T17:10:10.440Z"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("animi"),
        XAmzContentSha256: sdk.String("enim"),
        XAmzCredential: sdk.String("odit"),
        XAmzDate: sdk.String("quo"),
        XAmzSecurityToken: sdk.String("sequi"),
        XAmzSignature: sdk.String("tenetur"),
        XAmzSignedHeaders: sdk.String("ipsam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchGetMetricDataResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [BatchGetMetricData](docs/sdk/README.md#batchgetmetricdata) - <p>Retrieves batches of metric data collected based on your sending activity.</p> <p>You can execute this operation no more than 16 times per second, and with at most 160 queries from the batches per second (cumulative).</p>
* [CreateConfigurationSet](docs/sdk/README.md#createconfigurationset) - Create a configuration set. <i>Configuration sets</i> are groups of rules that you can apply to the emails that you send. You apply a configuration set to an email by specifying the name of the configuration set when you call the Amazon SES API v2. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email. 
* [CreateConfigurationSetEventDestination](docs/sdk/README.md#createconfigurationseteventdestination) - <p>Create an event destination. <i>Events</i> include message sends, deliveries, opens, clicks, bounces, and complaints. <i>Event destinations</i> are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.</p> <p>A single configuration set can include more than one event destination.</p>
* [CreateContact](docs/sdk/README.md#createcontact) - Creates a contact, which is an end-user who is receiving the email, and adds them to a contact list.
* [CreateContactList](docs/sdk/README.md#createcontactlist) - Creates a contact list.
* [CreateCustomVerificationEmailTemplate](docs/sdk/README.md#createcustomverificationemailtemplate) - <p>Creates a new custom verification email template.</p> <p>For more information about custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/dg/creating-identities.html#send-email-verify-address-custom">Using custom verification email templates</a> in the <i>Amazon SES Developer Guide</i>.</p> <p>You can execute this operation no more than once per second.</p>
* [CreateDedicatedIPPool](docs/sdk/README.md#creatededicatedippool) - Create a new pool of dedicated IP addresses. A pool can include one or more dedicated IP addresses that are associated with your Amazon Web Services account. You can associate a pool with a configuration set. When you send an email that uses that configuration set, the message is sent from one of the addresses in the associated pool.
* [CreateDeliverabilityTestReport](docs/sdk/README.md#createdeliverabilitytestreport) - Create a new predictive inbox placement test. Predictive inbox placement tests can help you predict how your messages will be handled by various email providers around the world. When you perform a predictive inbox placement test, you provide a sample message that contains the content that you plan to send to your customers. Amazon SES then sends that message to special email addresses spread across several major email providers. After about 24 hours, the test is complete, and you can use the <code>GetDeliverabilityTestReport</code> operation to view the results of the test.
* [CreateEmailIdentity](docs/sdk/README.md#createemailidentity) - <p>Starts the process of verifying an email identity. An <i>identity</i> is an email address or domain that you use when you send email. Before you can use an identity to send email, you first have to verify it. By verifying an identity, you demonstrate that you're the owner of the identity, and that you've given Amazon SES API v2 permission to send email from the identity.</p> <p>When you verify an email address, Amazon SES sends an email to the address. Your email address is verified as soon as you follow the link in the verification email. </p> <p>When you verify a domain without specifying the <code>DkimSigningAttributes</code> object, this operation provides a set of DKIM tokens. You can convert these tokens into CNAME records, which you then add to the DNS configuration for your domain. Your domain is verified when Amazon SES detects these records in the DNS configuration for your domain. This verification method is known as <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/easy-dkim.html">Easy DKIM</a>.</p> <p>Alternatively, you can perform the verification process by providing your own public-private key pair. This verification method is known as Bring Your Own DKIM (BYODKIM). To use BYODKIM, your call to the <code>CreateEmailIdentity</code> operation has to include the <code>DkimSigningAttributes</code> object. When you specify this object, you provide a selector (a component of the DNS record name that identifies the public key to use for DKIM authentication) and a private key.</p> <p>When you verify a domain, this operation provides a set of DKIM tokens, which you can convert into CNAME tokens. You add these CNAME tokens to the DNS configuration for your domain. Your domain is verified when Amazon SES detects these records in the DNS configuration for your domain. For some DNS providers, it can take 72 hours or more to complete the domain verification process.</p> <p>Additionally, you can associate an existing configuration set with the email identity that you're verifying.</p>
* [CreateEmailIdentityPolicy](docs/sdk/README.md#createemailidentitypolicy) - <p>Creates the specified sending authorization policy for the given identity (an email address or a domain).</p> <note> <p>This API is for the identity owner only. If you have not verified the identity, this API will return an error.</p> </note> <p>Sending authorization is a feature that enables an identity owner to authorize other senders to use its identities. For information about using sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
* [CreateEmailTemplate](docs/sdk/README.md#createemailtemplate) - <p>Creates an email template. Email templates enable you to send personalized email to one or more destinations in a single API operation. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-personalized-email-api.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
* [CreateImportJob](docs/sdk/README.md#createimportjob) - Creates an import job for a data destination.
* [DeleteConfigurationSet](docs/sdk/README.md#deleteconfigurationset) - <p>Delete an existing configuration set.</p> <p> <i>Configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p>
* [DeleteConfigurationSetEventDestination](docs/sdk/README.md#deleteconfigurationseteventdestination) - <p>Delete an event destination.</p> <p> <i>Events</i> include message sends, deliveries, opens, clicks, bounces, and complaints. <i>Event destinations</i> are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.</p>
* [DeleteContact](docs/sdk/README.md#deletecontact) - Removes a contact from a contact list.
* [DeleteContactList](docs/sdk/README.md#deletecontactlist) - Deletes a contact list and all of the contacts on that list.
* [DeleteCustomVerificationEmailTemplate](docs/sdk/README.md#deletecustomverificationemailtemplate) - <p>Deletes an existing custom verification email template.</p> <p>For more information about custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/dg/creating-identities.html#send-email-verify-address-custom">Using custom verification email templates</a> in the <i>Amazon SES Developer Guide</i>.</p> <p>You can execute this operation no more than once per second.</p>
* [DeleteDedicatedIPPool](docs/sdk/README.md#deletededicatedippool) - Delete a dedicated IP pool.
* [DeleteEmailIdentity](docs/sdk/README.md#deleteemailidentity) - Deletes an email identity. An identity can be either an email address or a domain name.
* [DeleteEmailIdentityPolicy](docs/sdk/README.md#deleteemailidentitypolicy) - <p>Deletes the specified sending authorization policy for the given identity (an email address or a domain). This API returns successfully even if a policy with the specified name does not exist.</p> <note> <p>This API is for the identity owner only. If you have not verified the identity, this API will return an error.</p> </note> <p>Sending authorization is a feature that enables an identity owner to authorize other senders to use its identities. For information about using sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
* [DeleteEmailTemplate](docs/sdk/README.md#deleteemailtemplate) - <p>Deletes an email template.</p> <p>You can execute this operation no more than once per second.</p>
* [DeleteSuppressedDestination](docs/sdk/README.md#deletesuppresseddestination) - Removes an email address from the suppression list for your account.
* [GetAccount](docs/sdk/README.md#getaccount) - Obtain information about the email-sending status and capabilities of your Amazon SES account in the current Amazon Web Services Region.
* [GetBlacklistReports](docs/sdk/README.md#getblacklistreports) - Retrieve a list of the blacklists that your dedicated IP addresses appear on.
* [GetConfigurationSet](docs/sdk/README.md#getconfigurationset) - <p>Get information about an existing configuration set, including the dedicated IP pool that it's associated with, whether or not it's enabled for sending email, and more.</p> <p> <i>Configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p>
* [GetConfigurationSetEventDestinations](docs/sdk/README.md#getconfigurationseteventdestinations) - <p>Retrieve a list of event destinations that are associated with a configuration set.</p> <p> <i>Events</i> include message sends, deliveries, opens, clicks, bounces, and complaints. <i>Event destinations</i> are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.</p>
* [GetContact](docs/sdk/README.md#getcontact) - Returns a contact from a contact list.
* [GetContactList](docs/sdk/README.md#getcontactlist) - Returns contact list metadata. It does not return any information about the contacts present in the list.
* [GetCustomVerificationEmailTemplate](docs/sdk/README.md#getcustomverificationemailtemplate) - <p>Returns the custom email verification template for the template name you specify.</p> <p>For more information about custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/dg/creating-identities.html#send-email-verify-address-custom">Using custom verification email templates</a> in the <i>Amazon SES Developer Guide</i>.</p> <p>You can execute this operation no more than once per second.</p>
* [GetDedicatedIP](docs/sdk/README.md#getdedicatedip) - Get information about a dedicated IP address, including the name of the dedicated IP pool that it's associated with, as well information about the automatic warm-up process for the address.
* [GetDedicatedIPPool](docs/sdk/README.md#getdedicatedippool) - Retrieve information about the dedicated pool.
* [GetDedicatedIps](docs/sdk/README.md#getdedicatedips) - List the dedicated IP addresses that are associated with your Amazon Web Services account.
* [GetDeliverabilityDashboardOptions](docs/sdk/README.md#getdeliverabilitydashboardoptions) - <p>Retrieve information about the status of the Deliverability dashboard for your account. When the Deliverability dashboard is enabled, you gain access to reputation, deliverability, and other metrics for the domains that you use to send email. You also gain the ability to perform predictive inbox placement tests.</p> <p>When you use the Deliverability dashboard, you pay a monthly subscription charge, in addition to any other fees that you accrue by using Amazon SES and other Amazon Web Services services. For more information about the features and cost of a Deliverability dashboard subscription, see <a href="http://aws.amazon.com/ses/pricing/">Amazon SES Pricing</a>.</p>
* [GetDeliverabilityTestReport](docs/sdk/README.md#getdeliverabilitytestreport) - Retrieve the results of a predictive inbox placement test.
* [GetDomainDeliverabilityCampaign](docs/sdk/README.md#getdomaindeliverabilitycampaign) - Retrieve all the deliverability data for a specific campaign. This data is available for a campaign only if the campaign sent email by using a domain that the Deliverability dashboard is enabled for.
* [GetDomainStatisticsReport](docs/sdk/README.md#getdomainstatisticsreport) - Retrieve inbox placement and engagement rates for the domains that you use to send email.
* [GetEmailIdentity](docs/sdk/README.md#getemailidentity) - Provides information about a specific identity, including the identity's verification status, sending authorization policies, its DKIM authentication status, and its custom Mail-From settings.
* [GetEmailIdentityPolicies](docs/sdk/README.md#getemailidentitypolicies) - <p>Returns the requested sending authorization policies for the given identity (an email address or a domain). The policies are returned as a map of policy names to policy contents. You can retrieve a maximum of 20 policies at a time.</p> <note> <p>This API is for the identity owner only. If you have not verified the identity, this API will return an error.</p> </note> <p>Sending authorization is a feature that enables an identity owner to authorize other senders to use its identities. For information about using sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
* [GetEmailTemplate](docs/sdk/README.md#getemailtemplate) - <p>Displays the template object (which includes the subject line, HTML part and text part) for the template you specify.</p> <p>You can execute this operation no more than once per second.</p>
* [GetImportJob](docs/sdk/README.md#getimportjob) - Provides information about an import job.
* [GetSuppressedDestination](docs/sdk/README.md#getsuppresseddestination) - Retrieves information about a specific email address that's on the suppression list for your account.
* [ListConfigurationSets](docs/sdk/README.md#listconfigurationsets) - <p>List all of the configuration sets associated with your account in the current region.</p> <p> <i>Configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p>
* [ListContactLists](docs/sdk/README.md#listcontactlists) - Lists all of the contact lists available.
* [ListContacts](docs/sdk/README.md#listcontacts) - Lists the contacts present in a specific contact list.
* [ListCustomVerificationEmailTemplates](docs/sdk/README.md#listcustomverificationemailtemplates) - <p>Lists the existing custom verification email templates for your account in the current Amazon Web Services Region.</p> <p>For more information about custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/dg/creating-identities.html#send-email-verify-address-custom">Using custom verification email templates</a> in the <i>Amazon SES Developer Guide</i>.</p> <p>You can execute this operation no more than once per second.</p>
* [ListDedicatedIPPools](docs/sdk/README.md#listdedicatedippools) - List all of the dedicated IP pools that exist in your Amazon Web Services account in the current Region.
* [ListDeliverabilityTestReports](docs/sdk/README.md#listdeliverabilitytestreports) - Show a list of the predictive inbox placement tests that you've performed, regardless of their statuses. For predictive inbox placement tests that are complete, you can use the <code>GetDeliverabilityTestReport</code> operation to view the results.
* [ListDomainDeliverabilityCampaigns](docs/sdk/README.md#listdomaindeliverabilitycampaigns) - Retrieve deliverability data for all the campaigns that used a specific domain to send email during a specified time range. This data is available for a domain only if you enabled the Deliverability dashboard for the domain.
* [ListEmailIdentities](docs/sdk/README.md#listemailidentities) - Returns a list of all of the email identities that are associated with your Amazon Web Services account. An identity can be either an email address or a domain. This operation returns identities that are verified as well as those that aren't. This operation returns identities that are associated with Amazon SES and Amazon Pinpoint.
* [ListEmailTemplates](docs/sdk/README.md#listemailtemplates) - <p>Lists the email templates present in your Amazon SES account in the current Amazon Web Services Region.</p> <p>You can execute this operation no more than once per second.</p>
* [ListImportJobs](docs/sdk/README.md#listimportjobs) - Lists all of the import jobs.
* [ListRecommendations](docs/sdk/README.md#listrecommendations) - <p>Lists the recommendations present in your Amazon SES account in the current Amazon Web Services Region.</p> <p>You can execute this operation no more than once per second.</p>
* [ListSuppressedDestinations](docs/sdk/README.md#listsuppresseddestinations) - Retrieves a list of email addresses that are on the suppression list for your account.
* [ListTagsForResource](docs/sdk/README.md#listtagsforresource) - Retrieve a list of the tags (keys and values) that are associated with a specified resource. A <i>tag</i> is a label that you optionally define and associate with a resource. Each tag consists of a required <i>tag key</i> and an optional associated <i>tag value</i>. A tag key is a general label that acts as a category for more specific tag values. A tag value acts as a descriptor within a tag key.
* [PutAccountDedicatedIPWarmupAttributes](docs/sdk/README.md#putaccountdedicatedipwarmupattributes) - Enable or disable the automatic warm-up feature for dedicated IP addresses.
* [PutAccountDetails](docs/sdk/README.md#putaccountdetails) - Update your Amazon SES account details.
* [PutAccountSendingAttributes](docs/sdk/README.md#putaccountsendingattributes) - Enable or disable the ability of your account to send email.
* [PutAccountSuppressionAttributes](docs/sdk/README.md#putaccountsuppressionattributes) - Change the settings for the account-level suppression list.
* [PutAccountVdmAttributes](docs/sdk/README.md#putaccountvdmattributes) - <p>Update your Amazon SES account VDM attributes.</p> <p>You can execute this operation no more than once per second.</p>
* [PutConfigurationSetDeliveryOptions](docs/sdk/README.md#putconfigurationsetdeliveryoptions) - Associate a configuration set with a dedicated IP pool. You can use dedicated IP pools to create groups of dedicated IP addresses for sending specific types of email.
* [PutConfigurationSetReputationOptions](docs/sdk/README.md#putconfigurationsetreputationoptions) - Enable or disable collection of reputation metrics for emails that you send using a particular configuration set in a specific Amazon Web Services Region.
* [PutConfigurationSetSendingOptions](docs/sdk/README.md#putconfigurationsetsendingoptions) - Enable or disable email sending for messages that use a particular configuration set in a specific Amazon Web Services Region.
* [PutConfigurationSetSuppressionOptions](docs/sdk/README.md#putconfigurationsetsuppressionoptions) - Specify the account suppression list preferences for a configuration set.
* [PutConfigurationSetTrackingOptions](docs/sdk/README.md#putconfigurationsettrackingoptions) - Specify a custom domain to use for open and click tracking elements in email that you send.
* [PutConfigurationSetVdmOptions](docs/sdk/README.md#putconfigurationsetvdmoptions) - <p>Specify VDM preferences for email that you send using the configuration set.</p> <p>You can execute this operation no more than once per second.</p>
* [PutDedicatedIPInPool](docs/sdk/README.md#putdedicatedipinpool) - <p>Move a dedicated IP address to an existing dedicated IP pool.</p> <note> <p>The dedicated IP address that you specify must already exist, and must be associated with your Amazon Web Services account. </p> <p>The dedicated IP pool you specify must already exist. You can create a new pool by using the <code>CreateDedicatedIpPool</code> operation.</p> </note>
* [PutDedicatedIPWarmupAttributes](docs/sdk/README.md#putdedicatedipwarmupattributes) - <p/>
* [PutDeliverabilityDashboardOption](docs/sdk/README.md#putdeliverabilitydashboardoption) - <p>Enable or disable the Deliverability dashboard. When you enable the Deliverability dashboard, you gain access to reputation, deliverability, and other metrics for the domains that you use to send email. You also gain the ability to perform predictive inbox placement tests.</p> <p>When you use the Deliverability dashboard, you pay a monthly subscription charge, in addition to any other fees that you accrue by using Amazon SES and other Amazon Web Services services. For more information about the features and cost of a Deliverability dashboard subscription, see <a href="http://aws.amazon.com/ses/pricing/">Amazon SES Pricing</a>.</p>
* [PutEmailIdentityConfigurationSetAttributes](docs/sdk/README.md#putemailidentityconfigurationsetattributes) - Used to associate a configuration set with an email identity.
* [PutEmailIdentityDkimAttributes](docs/sdk/README.md#putemailidentitydkimattributes) - Used to enable or disable DKIM authentication for an email identity.
* [PutEmailIdentityDkimSigningAttributes](docs/sdk/README.md#putemailidentitydkimsigningattributes) - <p>Used to configure or change the DKIM authentication settings for an email domain identity. You can use this operation to do any of the following:</p> <ul> <li> <p>Update the signing attributes for an identity that uses Bring Your Own DKIM (BYODKIM).</p> </li> <li> <p>Update the key length that should be used for Easy DKIM.</p> </li> <li> <p>Change from using no DKIM authentication to using Easy DKIM.</p> </li> <li> <p>Change from using no DKIM authentication to using BYODKIM.</p> </li> <li> <p>Change from using Easy DKIM to using BYODKIM.</p> </li> <li> <p>Change from using BYODKIM to using Easy DKIM.</p> </li> </ul>
* [PutEmailIdentityFeedbackAttributes](docs/sdk/README.md#putemailidentityfeedbackattributes) - <p>Used to enable or disable feedback forwarding for an identity. This setting determines what happens when an identity is used to send an email that results in a bounce or complaint event.</p> <p>If the value is <code>true</code>, you receive email notifications when bounce or complaint events occur. These notifications are sent to the address that you specified in the <code>Return-Path</code> header of the original email.</p> <p>You're required to have a method of tracking bounces and complaints. If you haven't set up another mechanism for receiving bounce or complaint notifications (for example, by setting up an event destination), you receive an email notification when these events occur (even if this setting is disabled).</p>
* [PutEmailIdentityMailFromAttributes](docs/sdk/README.md#putemailidentitymailfromattributes) - Used to enable or disable the custom Mail-From domain configuration for an email identity.
* [PutSuppressedDestination](docs/sdk/README.md#putsuppresseddestination) - Adds an email address to the suppression list for your account.
* [SendBulkEmail](docs/sdk/README.md#sendbulkemail) - Composes an email message to multiple destinations.
* [SendCustomVerificationEmail](docs/sdk/README.md#sendcustomverificationemail) - <p>Adds an email address to the list of identities for your Amazon SES account in the current Amazon Web Services Region and attempts to verify it. As a result of executing this operation, a customized verification email is sent to the specified address.</p> <p>To use this operation, you must first create a custom verification email template. For more information about creating and using custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/dg/creating-identities.html#send-email-verify-address-custom">Using custom verification email templates</a> in the <i>Amazon SES Developer Guide</i>.</p> <p>You can execute this operation no more than once per second.</p>
* [SendEmail](docs/sdk/README.md#sendemail) - <p>Sends an email message. You can use the Amazon SES API v2 to send the following types of messages:</p> <ul> <li> <p> <b>Simple</b> – A standard email message. When you create this type of message, you specify the sender, the recipient, and the message body, and Amazon SES assembles the message for you.</p> </li> <li> <p> <b>Raw</b> – A raw, MIME-formatted email message. When you send this type of email, you have to specify all of the message headers, as well as the message body. You can use this message type to send messages that contain attachments. The message that you specify has to be a valid MIME message.</p> </li> <li> <p> <b>Templated</b> – A message that contains personalization tags. When you send this type of email, Amazon SES API v2 automatically replaces the tags with values that you specify.</p> </li> </ul>
* [TagResource](docs/sdk/README.md#tagresource) - <p>Add one or more tags (keys and values) to a specified resource. A <i>tag</i> is a label that you optionally define and associate with a resource. Tags can help you categorize and manage resources in different ways, such as by purpose, owner, environment, or other criteria. A resource can have as many as 50 tags.</p> <p>Each tag consists of a required <i>tag key</i> and an associated <i>tag value</i>, both of which you define. A tag key is a general label that acts as a category for more specific tag values. A tag value acts as a descriptor within a tag key.</p>
* [TestRenderEmailTemplate](docs/sdk/README.md#testrenderemailtemplate) - <p>Creates a preview of the MIME content of an email when provided with a template and a set of replacement data.</p> <p>You can execute this operation no more than once per second.</p>
* [UntagResource](docs/sdk/README.md#untagresource) - Remove one or more tags (keys and values) from a specified resource.
* [UpdateConfigurationSetEventDestination](docs/sdk/README.md#updateconfigurationseteventdestination) - <p>Update the configuration of an event destination for a configuration set.</p> <p> <i>Events</i> include message sends, deliveries, opens, clicks, bounces, and complaints. <i>Event destinations</i> are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.</p>
* [UpdateContact](docs/sdk/README.md#updatecontact) - Updates a contact's preferences for a list. It is not necessary to specify all existing topic preferences in the TopicPreferences object, just the ones that need updating.
* [UpdateContactList](docs/sdk/README.md#updatecontactlist) - Updates contact list metadata. This operation does a complete replacement.
* [UpdateCustomVerificationEmailTemplate](docs/sdk/README.md#updatecustomverificationemailtemplate) - <p>Updates an existing custom verification email template.</p> <p>For more information about custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/dg/creating-identities.html#send-email-verify-address-custom">Using custom verification email templates</a> in the <i>Amazon SES Developer Guide</i>.</p> <p>You can execute this operation no more than once per second.</p>
* [UpdateEmailIdentityPolicy](docs/sdk/README.md#updateemailidentitypolicy) - <p>Updates the specified sending authorization policy for the given identity (an email address or a domain). This API returns successfully even if a policy with the specified name does not exist.</p> <note> <p>This API is for the identity owner only. If you have not verified the identity, this API will return an error.</p> </note> <p>Sending authorization is a feature that enables an identity owner to authorize other senders to use its identities. For information about using sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
* [UpdateEmailTemplate](docs/sdk/README.md#updateemailtemplate) - <p>Updates an email template. Email templates enable you to send personalized email to one or more destinations in a single API operation. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-personalized-email-api.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
