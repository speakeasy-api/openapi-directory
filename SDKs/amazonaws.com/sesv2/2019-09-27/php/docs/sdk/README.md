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

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BatchGetMetricDataRequest;
use \OpenAPI\OpenAPI\Models\Operations\BatchGetMetricDataRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\BatchGetMetricDataQuery;
use \OpenAPI\OpenAPI\Models\Shared\MetricEnum;
use \OpenAPI\OpenAPI\Models\Shared\MetricNamespaceEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchGetMetricDataRequest();
    $request->requestBody = new BatchGetMetricDataRequestBody();
    $request->requestBody->queries = [
        new BatchGetMetricDataQuery(),
        new BatchGetMetricDataQuery(),
    ];
    $request->xAmzAlgorithm = 'error';
    $request->xAmzContentSha256 = 'deserunt';
    $request->xAmzCredential = 'suscipit';
    $request->xAmzDate = 'iure';
    $request->xAmzSecurityToken = 'magnam';
    $request->xAmzSignature = 'debitis';
    $request->xAmzSignedHeaders = 'ipsa';

    $response = $sdk->sdk->batchGetMetricData($request);

    if ($response->batchGetMetricDataResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createConfigurationSet

Create a configuration set. <i>Configuration sets</i> are groups of rules that you can apply to the emails that you send. You apply a configuration set to an email by specifying the name of the configuration set when you call the Amazon SES API v2. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateConfigurationSetRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateConfigurationSetRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateConfigurationSetRequestBodyDeliveryOptions;
use \OpenAPI\OpenAPI\Models\Shared\TlsPolicyEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateConfigurationSetRequestBodyReputationOptions;
use \OpenAPI\OpenAPI\Models\Operations\CreateConfigurationSetRequestBodySendingOptions;
use \OpenAPI\OpenAPI\Models\Operations\CreateConfigurationSetRequestBodySuppressionOptions;
use \OpenAPI\OpenAPI\Models\Shared\SuppressionListReasonEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateConfigurationSetRequestBodyTrackingOptions;
use \OpenAPI\OpenAPI\Models\Operations\CreateConfigurationSetRequestBodyVdmOptions;
use \OpenAPI\OpenAPI\Models\Shared\DashboardOptions;
use \OpenAPI\OpenAPI\Models\Shared\FeatureStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\GuardianOptions;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateConfigurationSetRequest();
    $request->requestBody = new CreateConfigurationSetRequestBody();
    $request->requestBody->configurationSetName = 'delectus';
    $request->requestBody->deliveryOptions = new CreateConfigurationSetRequestBodyDeliveryOptions();
    $request->requestBody->deliveryOptions->sendingPoolName = 'tempora';
    $request->requestBody->deliveryOptions->tlsPolicy = TlsPolicyEnum::REQUIRE;
    $request->requestBody->reputationOptions = new CreateConfigurationSetRequestBodyReputationOptions();
    $request->requestBody->reputationOptions->lastFreshStart = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-18T00:29:19.137Z');
    $request->requestBody->reputationOptions->reputationMetricsEnabled = false;
    $request->requestBody->sendingOptions = new CreateConfigurationSetRequestBodySendingOptions();
    $request->requestBody->sendingOptions->sendingEnabled = false;
    $request->requestBody->suppressionOptions = new CreateConfigurationSetRequestBodySuppressionOptions();
    $request->requestBody->suppressionOptions->suppressedReasons = [
        SuppressionListReasonEnum::COMPLAINT,
        SuppressionListReasonEnum::BOUNCE,
        SuppressionListReasonEnum::COMPLAINT,
        SuppressionListReasonEnum::BOUNCE,
    ];
    $request->requestBody->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->requestBody->trackingOptions = new CreateConfigurationSetRequestBodyTrackingOptions();
    $request->requestBody->trackingOptions->customRedirectDomain = 'temporibus';
    $request->requestBody->vdmOptions = new CreateConfigurationSetRequestBodyVdmOptions();
    $request->requestBody->vdmOptions->dashboardOptions = new DashboardOptions();
    $request->requestBody->vdmOptions->dashboardOptions->engagementMetrics = FeatureStatusEnum::ENABLED;
    $request->requestBody->vdmOptions->guardianOptions = new GuardianOptions();
    $request->requestBody->vdmOptions->guardianOptions->optimizedSharedDelivery = FeatureStatusEnum::ENABLED;
    $request->xAmzAlgorithm = 'veritatis';
    $request->xAmzContentSha256 = 'deserunt';
    $request->xAmzCredential = 'perferendis';
    $request->xAmzDate = 'ipsam';
    $request->xAmzSecurityToken = 'repellendus';
    $request->xAmzSignature = 'sapiente';
    $request->xAmzSignedHeaders = 'quo';

    $response = $sdk->sdk->createConfigurationSet($request);

    if ($response->createConfigurationSetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createConfigurationSetEventDestination

<p>Create an event destination. <i>Events</i> include message sends, deliveries, opens, clicks, bounces, and complaints. <i>Event destinations</i> are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.</p> <p>A single configuration set can include more than one event destination.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateConfigurationSetEventDestinationRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateConfigurationSetEventDestinationRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateConfigurationSetEventDestinationRequestBodyEventDestination;
use \OpenAPI\OpenAPI\Models\Shared\CloudWatchDestination;
use \OpenAPI\OpenAPI\Models\Shared\CloudWatchDimensionConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\DimensionValueSourceEnum;
use \OpenAPI\OpenAPI\Models\Shared\KinesisFirehoseDestination;
use \OpenAPI\OpenAPI\Models\Shared\EventTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PinpointDestination;
use \OpenAPI\OpenAPI\Models\Shared\SnsDestination;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateConfigurationSetEventDestinationRequest();
    $request->configurationSetName = 'odit';
    $request->requestBody = new CreateConfigurationSetEventDestinationRequestBody();
    $request->requestBody->eventDestination = new CreateConfigurationSetEventDestinationRequestBodyEventDestination();
    $request->requestBody->eventDestination->cloudWatchDestination = new CloudWatchDestination();
    $request->requestBody->eventDestination->cloudWatchDestination->dimensionConfigurations = [
        new CloudWatchDimensionConfiguration(),
        new CloudWatchDimensionConfiguration(),
        new CloudWatchDimensionConfiguration(),
        new CloudWatchDimensionConfiguration(),
    ];
    $request->requestBody->eventDestination->enabled = false;
    $request->requestBody->eventDestination->kinesisFirehoseDestination = new KinesisFirehoseDestination();
    $request->requestBody->eventDestination->kinesisFirehoseDestination->deliveryStreamArn = 'at';
    $request->requestBody->eventDestination->kinesisFirehoseDestination->iamRoleArn = 'maiores';
    $request->requestBody->eventDestination->matchingEventTypes = [
        EventTypeEnum::RENDERING_FAILURE,
        EventTypeEnum::DELIVERY_DELAY,
    ];
    $request->requestBody->eventDestination->pinpointDestination = new PinpointDestination();
    $request->requestBody->eventDestination->pinpointDestination->applicationArn = 'esse';
    $request->requestBody->eventDestination->snsDestination = new SnsDestination();
    $request->requestBody->eventDestination->snsDestination->topicArn = 'totam';
    $request->requestBody->eventDestinationName = 'porro';
    $request->xAmzAlgorithm = 'dolorum';
    $request->xAmzContentSha256 = 'dicta';
    $request->xAmzCredential = 'nam';
    $request->xAmzDate = 'officia';
    $request->xAmzSecurityToken = 'occaecati';
    $request->xAmzSignature = 'fugit';
    $request->xAmzSignedHeaders = 'deleniti';

    $response = $sdk->sdk->createConfigurationSetEventDestination($request);

    if ($response->createConfigurationSetEventDestinationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createContact

Creates a contact, which is an end-user who is receiving the email, and adds them to a contact list.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateContactRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateContactRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\TopicPreference;
use \OpenAPI\OpenAPI\Models\Shared\SubscriptionStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateContactRequest();
    $request->contactListName = 'hic';
    $request->requestBody = new CreateContactRequestBody();
    $request->requestBody->attributesData = 'optio';
    $request->requestBody->emailAddress = 'totam';
    $request->requestBody->topicPreferences = [
        new TopicPreference(),
    ];
    $request->requestBody->unsubscribeAll = false;
    $request->xAmzAlgorithm = 'commodi';
    $request->xAmzContentSha256 = 'molestiae';
    $request->xAmzCredential = 'modi';
    $request->xAmzDate = 'qui';
    $request->xAmzSecurityToken = 'impedit';
    $request->xAmzSignature = 'cum';
    $request->xAmzSignedHeaders = 'esse';

    $response = $sdk->sdk->createContact($request);

    if ($response->createContactResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createContactList

Creates a contact list.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateContactListRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateContactListRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Shared\Topic;
use \OpenAPI\OpenAPI\Models\Shared\SubscriptionStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateContactListRequest();
    $request->requestBody = new CreateContactListRequestBody();
    $request->requestBody->contactListName = 'ipsum';
    $request->requestBody->description = 'excepturi';
    $request->requestBody->tags = [
        new Tag(),
    ];
    $request->requestBody->topics = [
        new Topic(),
    ];
    $request->xAmzAlgorithm = 'ad';
    $request->xAmzContentSha256 = 'natus';
    $request->xAmzCredential = 'sed';
    $request->xAmzDate = 'iste';
    $request->xAmzSecurityToken = 'dolor';
    $request->xAmzSignature = 'natus';
    $request->xAmzSignedHeaders = 'laboriosam';

    $response = $sdk->sdk->createContactList($request);

    if ($response->createContactListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createCustomVerificationEmailTemplate

<p>Creates a new custom verification email template.</p> <p>For more information about custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/dg/creating-identities.html#send-email-verify-address-custom">Using custom verification email templates</a> in the <i>Amazon SES Developer Guide</i>.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateCustomVerificationEmailTemplateRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateCustomVerificationEmailTemplateRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateCustomVerificationEmailTemplateRequest();
    $request->requestBody = new CreateCustomVerificationEmailTemplateRequestBody();
    $request->requestBody->failureRedirectionURL = 'hic';
    $request->requestBody->fromEmailAddress = 'saepe';
    $request->requestBody->successRedirectionURL = 'fuga';
    $request->requestBody->templateContent = 'in';
    $request->requestBody->templateName = 'corporis';
    $request->requestBody->templateSubject = 'iste';
    $request->xAmzAlgorithm = 'iure';
    $request->xAmzContentSha256 = 'saepe';
    $request->xAmzCredential = 'quidem';
    $request->xAmzDate = 'architecto';
    $request->xAmzSecurityToken = 'ipsa';
    $request->xAmzSignature = 'reiciendis';
    $request->xAmzSignedHeaders = 'est';

    $response = $sdk->sdk->createCustomVerificationEmailTemplate($request);

    if ($response->createCustomVerificationEmailTemplateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createDedicatedIpPool

Create a new pool of dedicated IP addresses. A pool can include one or more dedicated IP addresses that are associated with your Amazon Web Services account. You can associate a pool with a configuration set. When you send an email that uses that configuration set, the message is sent from one of the addresses in the associated pool.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateDedicatedIpPoolRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateDedicatedIpPoolRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateDedicatedIpPoolRequestBodyScalingModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tag;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateDedicatedIpPoolRequest();
    $request->requestBody = new CreateDedicatedIpPoolRequestBody();
    $request->requestBody->poolName = 'mollitia';
    $request->requestBody->scalingMode = CreateDedicatedIpPoolRequestBodyScalingModeEnum::MANAGED;
    $request->requestBody->tags = [
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'dolorem';
    $request->xAmzContentSha256 = 'corporis';
    $request->xAmzCredential = 'explicabo';
    $request->xAmzDate = 'nobis';
    $request->xAmzSecurityToken = 'enim';
    $request->xAmzSignature = 'omnis';
    $request->xAmzSignedHeaders = 'nemo';

    $response = $sdk->sdk->createDedicatedIpPool($request);

    if ($response->createDedicatedIpPoolResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createDeliverabilityTestReport

Create a new predictive inbox placement test. Predictive inbox placement tests can help you predict how your messages will be handled by various email providers around the world. When you perform a predictive inbox placement test, you provide a sample message that contains the content that you plan to send to your customers. Amazon SES then sends that message to special email addresses spread across several major email providers. After about 24 hours, the test is complete, and you can use the <code>GetDeliverabilityTestReport</code> operation to view the results of the test.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateDeliverabilityTestReportRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateDeliverabilityTestReportRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateDeliverabilityTestReportRequestBodyContent;
use \OpenAPI\OpenAPI\Models\Shared\RawMessage;
use \OpenAPI\OpenAPI\Models\Shared\Message;
use \OpenAPI\OpenAPI\Models\Shared\Body;
use \OpenAPI\OpenAPI\Models\Shared\Content;
use \OpenAPI\OpenAPI\Models\Shared\Template;
use \OpenAPI\OpenAPI\Models\Shared\Tag;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateDeliverabilityTestReportRequest();
    $request->requestBody = new CreateDeliverabilityTestReportRequestBody();
    $request->requestBody->content = new CreateDeliverabilityTestReportRequestBodyContent();
    $request->requestBody->content->raw = new RawMessage();
    $request->requestBody->content->raw->data = 'minima';
    $request->requestBody->content->simple = new Message();
    $request->requestBody->content->simple->body = new Body();
    $request->requestBody->content->simple->body->html = new Content();
    $request->requestBody->content->simple->body->html->charset = 'excepturi';
    $request->requestBody->content->simple->body->html->data = 'accusantium';
    $request->requestBody->content->simple->body->text = new Content();
    $request->requestBody->content->simple->body->text->charset = 'iure';
    $request->requestBody->content->simple->body->text->data = 'culpa';
    $request->requestBody->content->simple->subject = new Content();
    $request->requestBody->content->simple->subject->charset = 'doloribus';
    $request->requestBody->content->simple->subject->data = 'sapiente';
    $request->requestBody->content->template = new Template();
    $request->requestBody->content->template->templateArn = 'architecto';
    $request->requestBody->content->template->templateData = 'mollitia';
    $request->requestBody->content->template->templateName = 'dolorem';
    $request->requestBody->fromEmailAddress = 'culpa';
    $request->requestBody->reportName = 'consequuntur';
    $request->requestBody->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'mollitia';
    $request->xAmzContentSha256 = 'occaecati';
    $request->xAmzCredential = 'numquam';
    $request->xAmzDate = 'commodi';
    $request->xAmzSecurityToken = 'quam';
    $request->xAmzSignature = 'molestiae';
    $request->xAmzSignedHeaders = 'velit';

    $response = $sdk->sdk->createDeliverabilityTestReport($request);

    if ($response->createDeliverabilityTestReportResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createEmailIdentity

<p>Starts the process of verifying an email identity. An <i>identity</i> is an email address or domain that you use when you send email. Before you can use an identity to send email, you first have to verify it. By verifying an identity, you demonstrate that you're the owner of the identity, and that you've given Amazon SES API v2 permission to send email from the identity.</p> <p>When you verify an email address, Amazon SES sends an email to the address. Your email address is verified as soon as you follow the link in the verification email. </p> <p>When you verify a domain without specifying the <code>DkimSigningAttributes</code> object, this operation provides a set of DKIM tokens. You can convert these tokens into CNAME records, which you then add to the DNS configuration for your domain. Your domain is verified when Amazon SES detects these records in the DNS configuration for your domain. This verification method is known as <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/easy-dkim.html">Easy DKIM</a>.</p> <p>Alternatively, you can perform the verification process by providing your own public-private key pair. This verification method is known as Bring Your Own DKIM (BYODKIM). To use BYODKIM, your call to the <code>CreateEmailIdentity</code> operation has to include the <code>DkimSigningAttributes</code> object. When you specify this object, you provide a selector (a component of the DNS record name that identifies the public key to use for DKIM authentication) and a private key.</p> <p>When you verify a domain, this operation provides a set of DKIM tokens, which you can convert into CNAME tokens. You add these CNAME tokens to the DNS configuration for your domain. Your domain is verified when Amazon SES detects these records in the DNS configuration for your domain. For some DNS providers, it can take 72 hours or more to complete the domain verification process.</p> <p>Additionally, you can associate an existing configuration set with the email identity that you're verifying.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateEmailIdentityRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateEmailIdentityRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateEmailIdentityRequestBodyDkimSigningAttributes;
use \OpenAPI\OpenAPI\Models\Shared\DkimSigningKeyLengthEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tag;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateEmailIdentityRequest();
    $request->requestBody = new CreateEmailIdentityRequestBody();
    $request->requestBody->configurationSetName = 'error';
    $request->requestBody->dkimSigningAttributes = new CreateEmailIdentityRequestBodyDkimSigningAttributes();
    $request->requestBody->dkimSigningAttributes->domainSigningPrivateKey = 'quia';
    $request->requestBody->dkimSigningAttributes->domainSigningSelector = 'quis';
    $request->requestBody->dkimSigningAttributes->nextSigningKeyLength = DkimSigningKeyLengthEnum::RSA1024_BIT;
    $request->requestBody->emailIdentity = 'laborum';
    $request->requestBody->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'enim';
    $request->xAmzContentSha256 = 'odit';
    $request->xAmzCredential = 'quo';
    $request->xAmzDate = 'sequi';
    $request->xAmzSecurityToken = 'tenetur';
    $request->xAmzSignature = 'ipsam';
    $request->xAmzSignedHeaders = 'id';

    $response = $sdk->sdk->createEmailIdentity($request);

    if ($response->createEmailIdentityResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createEmailIdentityPolicy

<p>Creates the specified sending authorization policy for the given identity (an email address or a domain).</p> <note> <p>This API is for the identity owner only. If you have not verified the identity, this API will return an error.</p> </note> <p>Sending authorization is a feature that enables an identity owner to authorize other senders to use its identities. For information about using sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateEmailIdentityPolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateEmailIdentityPolicyRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateEmailIdentityPolicyRequest();
    $request->emailIdentity = 'possimus';
    $request->policyName = 'aut';
    $request->requestBody = new CreateEmailIdentityPolicyRequestBody();
    $request->requestBody->policy = 'quasi';
    $request->xAmzAlgorithm = 'error';
    $request->xAmzContentSha256 = 'temporibus';
    $request->xAmzCredential = 'laborum';
    $request->xAmzDate = 'quasi';
    $request->xAmzSecurityToken = 'reiciendis';
    $request->xAmzSignature = 'voluptatibus';
    $request->xAmzSignedHeaders = 'vero';

    $response = $sdk->sdk->createEmailIdentityPolicy($request);

    if ($response->createEmailIdentityPolicyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createEmailTemplate

<p>Creates an email template. Email templates enable you to send personalized email to one or more destinations in a single API operation. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-personalized-email-api.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateEmailTemplateRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateEmailTemplateRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateEmailTemplateRequestBodyTemplateContent;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateEmailTemplateRequest();
    $request->requestBody = new CreateEmailTemplateRequestBody();
    $request->requestBody->templateContent = new CreateEmailTemplateRequestBodyTemplateContent();
    $request->requestBody->templateContent->html = 'nihil';
    $request->requestBody->templateContent->subject = 'praesentium';
    $request->requestBody->templateContent->text = 'voluptatibus';
    $request->requestBody->templateName = 'ipsa';
    $request->xAmzAlgorithm = 'omnis';
    $request->xAmzContentSha256 = 'voluptate';
    $request->xAmzCredential = 'cum';
    $request->xAmzDate = 'perferendis';
    $request->xAmzSecurityToken = 'doloremque';
    $request->xAmzSignature = 'reprehenderit';
    $request->xAmzSignedHeaders = 'ut';

    $response = $sdk->sdk->createEmailTemplate($request);

    if ($response->createEmailTemplateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createImportJob

Creates an import job for a data destination.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateImportJobRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateImportJobRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateImportJobRequestBodyImportDataSource;
use \OpenAPI\OpenAPI\Models\Shared\DataFormatEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateImportJobRequestBodyImportDestination;
use \OpenAPI\OpenAPI\Models\Shared\ContactListDestination;
use \OpenAPI\OpenAPI\Models\Shared\ContactListImportActionEnum;
use \OpenAPI\OpenAPI\Models\Shared\SuppressionListDestination;
use \OpenAPI\OpenAPI\Models\Shared\SuppressionListImportActionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateImportJobRequest();
    $request->requestBody = new CreateImportJobRequestBody();
    $request->requestBody->importDataSource = new CreateImportJobRequestBodyImportDataSource();
    $request->requestBody->importDataSource->dataFormat = DataFormatEnum::JSON;
    $request->requestBody->importDataSource->s3Url = 'dicta';
    $request->requestBody->importDestination = new CreateImportJobRequestBodyImportDestination();
    $request->requestBody->importDestination->contactListDestination = new ContactListDestination();
    $request->requestBody->importDestination->contactListDestination->contactListImportAction = ContactListImportActionEnum::DELETE;
    $request->requestBody->importDestination->contactListDestination->contactListName = 'dolore';
    $request->requestBody->importDestination->suppressionListDestination = new SuppressionListDestination();
    $request->requestBody->importDestination->suppressionListDestination->suppressionListImportAction = SuppressionListImportActionEnum::DELETE;
    $request->xAmzAlgorithm = 'dicta';
    $request->xAmzContentSha256 = 'harum';
    $request->xAmzCredential = 'enim';
    $request->xAmzDate = 'accusamus';
    $request->xAmzSecurityToken = 'commodi';
    $request->xAmzSignature = 'repudiandae';
    $request->xAmzSignedHeaders = 'quae';

    $response = $sdk->sdk->createImportJob($request);

    if ($response->createImportJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteConfigurationSet

<p>Delete an existing configuration set.</p> <p> <i>Configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteConfigurationSetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteConfigurationSetRequest();
    $request->configurationSetName = 'ipsum';
    $request->xAmzAlgorithm = 'quidem';
    $request->xAmzContentSha256 = 'molestias';
    $request->xAmzCredential = 'excepturi';
    $request->xAmzDate = 'pariatur';
    $request->xAmzSecurityToken = 'modi';
    $request->xAmzSignature = 'praesentium';
    $request->xAmzSignedHeaders = 'rem';

    $response = $sdk->sdk->deleteConfigurationSet($request);

    if ($response->deleteConfigurationSetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteConfigurationSetEventDestination

<p>Delete an event destination.</p> <p> <i>Events</i> include message sends, deliveries, opens, clicks, bounces, and complaints. <i>Event destinations</i> are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteConfigurationSetEventDestinationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteConfigurationSetEventDestinationRequest();
    $request->configurationSetName = 'voluptates';
    $request->eventDestinationName = 'quasi';
    $request->xAmzAlgorithm = 'repudiandae';
    $request->xAmzContentSha256 = 'sint';
    $request->xAmzCredential = 'veritatis';
    $request->xAmzDate = 'itaque';
    $request->xAmzSecurityToken = 'incidunt';
    $request->xAmzSignature = 'enim';
    $request->xAmzSignedHeaders = 'consequatur';

    $response = $sdk->sdk->deleteConfigurationSetEventDestination($request);

    if ($response->deleteConfigurationSetEventDestinationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteContact

Removes a contact from a contact list.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteContactRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteContactRequest();
    $request->contactListName = 'est';
    $request->emailAddress = 'quibusdam';
    $request->xAmzAlgorithm = 'explicabo';
    $request->xAmzContentSha256 = 'deserunt';
    $request->xAmzCredential = 'distinctio';
    $request->xAmzDate = 'quibusdam';
    $request->xAmzSecurityToken = 'labore';
    $request->xAmzSignature = 'modi';
    $request->xAmzSignedHeaders = 'qui';

    $response = $sdk->sdk->deleteContact($request);

    if ($response->deleteContactResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteContactList

Deletes a contact list and all of the contacts on that list.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteContactListRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteContactListRequest();
    $request->contactListName = 'aliquid';
    $request->xAmzAlgorithm = 'cupiditate';
    $request->xAmzContentSha256 = 'quos';
    $request->xAmzCredential = 'perferendis';
    $request->xAmzDate = 'magni';
    $request->xAmzSecurityToken = 'assumenda';
    $request->xAmzSignature = 'ipsam';
    $request->xAmzSignedHeaders = 'alias';

    $response = $sdk->sdk->deleteContactList($request);

    if ($response->deleteContactListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteCustomVerificationEmailTemplate

<p>Deletes an existing custom verification email template.</p> <p>For more information about custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/dg/creating-identities.html#send-email-verify-address-custom">Using custom verification email templates</a> in the <i>Amazon SES Developer Guide</i>.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteCustomVerificationEmailTemplateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteCustomVerificationEmailTemplateRequest();
    $request->templateName = 'fugit';
    $request->xAmzAlgorithm = 'dolorum';
    $request->xAmzContentSha256 = 'excepturi';
    $request->xAmzCredential = 'tempora';
    $request->xAmzDate = 'facilis';
    $request->xAmzSecurityToken = 'tempore';
    $request->xAmzSignature = 'labore';
    $request->xAmzSignedHeaders = 'delectus';

    $response = $sdk->sdk->deleteCustomVerificationEmailTemplate($request);

    if ($response->deleteCustomVerificationEmailTemplateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteDedicatedIpPool

Delete a dedicated IP pool.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDedicatedIpPoolRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteDedicatedIpPoolRequest();
    $request->poolName = 'eum';
    $request->xAmzAlgorithm = 'non';
    $request->xAmzContentSha256 = 'eligendi';
    $request->xAmzCredential = 'sint';
    $request->xAmzDate = 'aliquid';
    $request->xAmzSecurityToken = 'provident';
    $request->xAmzSignature = 'necessitatibus';
    $request->xAmzSignedHeaders = 'sint';

    $response = $sdk->sdk->deleteDedicatedIpPool($request);

    if ($response->deleteDedicatedIpPoolResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteEmailIdentity

Deletes an email identity. An identity can be either an email address or a domain name.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteEmailIdentityRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteEmailIdentityRequest();
    $request->emailIdentity = 'officia';
    $request->xAmzAlgorithm = 'dolor';
    $request->xAmzContentSha256 = 'debitis';
    $request->xAmzCredential = 'a';
    $request->xAmzDate = 'dolorum';
    $request->xAmzSecurityToken = 'in';
    $request->xAmzSignature = 'in';
    $request->xAmzSignedHeaders = 'illum';

    $response = $sdk->sdk->deleteEmailIdentity($request);

    if ($response->deleteEmailIdentityResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteEmailIdentityPolicy

<p>Deletes the specified sending authorization policy for the given identity (an email address or a domain). This API returns successfully even if a policy with the specified name does not exist.</p> <note> <p>This API is for the identity owner only. If you have not verified the identity, this API will return an error.</p> </note> <p>Sending authorization is a feature that enables an identity owner to authorize other senders to use its identities. For information about using sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteEmailIdentityPolicyRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteEmailIdentityPolicyRequest();
    $request->emailIdentity = 'maiores';
    $request->policyName = 'rerum';
    $request->xAmzAlgorithm = 'dicta';
    $request->xAmzContentSha256 = 'magnam';
    $request->xAmzCredential = 'cumque';
    $request->xAmzDate = 'facere';
    $request->xAmzSecurityToken = 'ea';
    $request->xAmzSignature = 'aliquid';
    $request->xAmzSignedHeaders = 'laborum';

    $response = $sdk->sdk->deleteEmailIdentityPolicy($request);

    if ($response->deleteEmailIdentityPolicyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteEmailTemplate

<p>Deletes an email template.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteEmailTemplateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteEmailTemplateRequest();
    $request->templateName = 'accusamus';
    $request->xAmzAlgorithm = 'non';
    $request->xAmzContentSha256 = 'occaecati';
    $request->xAmzCredential = 'enim';
    $request->xAmzDate = 'accusamus';
    $request->xAmzSecurityToken = 'delectus';
    $request->xAmzSignature = 'quidem';
    $request->xAmzSignedHeaders = 'provident';

    $response = $sdk->sdk->deleteEmailTemplate($request);

    if ($response->deleteEmailTemplateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteSuppressedDestination

Removes an email address from the suppression list for your account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSuppressedDestinationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteSuppressedDestinationRequest();
    $request->emailAddress = 'nam';
    $request->xAmzAlgorithm = 'id';
    $request->xAmzContentSha256 = 'blanditiis';
    $request->xAmzCredential = 'deleniti';
    $request->xAmzDate = 'sapiente';
    $request->xAmzSecurityToken = 'amet';
    $request->xAmzSignature = 'deserunt';
    $request->xAmzSignedHeaders = 'nisi';

    $response = $sdk->sdk->deleteSuppressedDestination($request);

    if ($response->deleteSuppressedDestinationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAccount

Obtain information about the email-sending status and capabilities of your Amazon SES account in the current Amazon Web Services Region.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetAccountRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAccountRequest();
    $request->xAmzAlgorithm = 'vel';
    $request->xAmzContentSha256 = 'natus';
    $request->xAmzCredential = 'omnis';
    $request->xAmzDate = 'molestiae';
    $request->xAmzSecurityToken = 'perferendis';
    $request->xAmzSignature = 'nihil';
    $request->xAmzSignedHeaders = 'magnam';

    $response = $sdk->sdk->getAccount($request);

    if ($response->getAccountResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getBlacklistReports

Retrieve a list of the blacklists that your dedicated IP addresses appear on.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetBlacklistReportsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetBlacklistReportsRequest();
    $request->blacklistItemNames = [
        'id',
        'labore',
        'labore',
    ];
    $request->xAmzAlgorithm = 'suscipit';
    $request->xAmzContentSha256 = 'natus';
    $request->xAmzCredential = 'nobis';
    $request->xAmzDate = 'eum';
    $request->xAmzSecurityToken = 'vero';
    $request->xAmzSignature = 'aspernatur';
    $request->xAmzSignedHeaders = 'architecto';

    $response = $sdk->sdk->getBlacklistReports($request);

    if ($response->getBlacklistReportsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getConfigurationSet

<p>Get information about an existing configuration set, including the dedicated IP pool that it's associated with, whether or not it's enabled for sending email, and more.</p> <p> <i>Configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetConfigurationSetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetConfigurationSetRequest();
    $request->configurationSetName = 'magnam';
    $request->xAmzAlgorithm = 'et';
    $request->xAmzContentSha256 = 'excepturi';
    $request->xAmzCredential = 'ullam';
    $request->xAmzDate = 'provident';
    $request->xAmzSecurityToken = 'quos';
    $request->xAmzSignature = 'sint';
    $request->xAmzSignedHeaders = 'accusantium';

    $response = $sdk->sdk->getConfigurationSet($request);

    if ($response->getConfigurationSetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getConfigurationSetEventDestinations

<p>Retrieve a list of event destinations that are associated with a configuration set.</p> <p> <i>Events</i> include message sends, deliveries, opens, clicks, bounces, and complaints. <i>Event destinations</i> are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetConfigurationSetEventDestinationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetConfigurationSetEventDestinationsRequest();
    $request->configurationSetName = 'mollitia';
    $request->xAmzAlgorithm = 'reiciendis';
    $request->xAmzContentSha256 = 'mollitia';
    $request->xAmzCredential = 'ad';
    $request->xAmzDate = 'eum';
    $request->xAmzSecurityToken = 'dolor';
    $request->xAmzSignature = 'necessitatibus';
    $request->xAmzSignedHeaders = 'odit';

    $response = $sdk->sdk->getConfigurationSetEventDestinations($request);

    if ($response->getConfigurationSetEventDestinationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getContact

Returns a contact from a contact list.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetContactRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetContactRequest();
    $request->contactListName = 'nemo';
    $request->emailAddress = 'quasi';
    $request->xAmzAlgorithm = 'iure';
    $request->xAmzContentSha256 = 'doloribus';
    $request->xAmzCredential = 'debitis';
    $request->xAmzDate = 'eius';
    $request->xAmzSecurityToken = 'maxime';
    $request->xAmzSignature = 'deleniti';
    $request->xAmzSignedHeaders = 'facilis';

    $response = $sdk->sdk->getContact($request);

    if ($response->getContactResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getContactList

Returns contact list metadata. It does not return any information about the contacts present in the list.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetContactListRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetContactListRequest();
    $request->contactListName = 'in';
    $request->xAmzAlgorithm = 'architecto';
    $request->xAmzContentSha256 = 'architecto';
    $request->xAmzCredential = 'repudiandae';
    $request->xAmzDate = 'ullam';
    $request->xAmzSecurityToken = 'expedita';
    $request->xAmzSignature = 'nihil';
    $request->xAmzSignedHeaders = 'repellat';

    $response = $sdk->sdk->getContactList($request);

    if ($response->getContactListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCustomVerificationEmailTemplate

<p>Returns the custom email verification template for the template name you specify.</p> <p>For more information about custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/dg/creating-identities.html#send-email-verify-address-custom">Using custom verification email templates</a> in the <i>Amazon SES Developer Guide</i>.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetCustomVerificationEmailTemplateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCustomVerificationEmailTemplateRequest();
    $request->templateName = 'quibusdam';
    $request->xAmzAlgorithm = 'sed';
    $request->xAmzContentSha256 = 'saepe';
    $request->xAmzCredential = 'pariatur';
    $request->xAmzDate = 'accusantium';
    $request->xAmzSecurityToken = 'consequuntur';
    $request->xAmzSignature = 'praesentium';
    $request->xAmzSignedHeaders = 'natus';

    $response = $sdk->sdk->getCustomVerificationEmailTemplate($request);

    if ($response->getCustomVerificationEmailTemplateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDedicatedIp

Get information about a dedicated IP address, including the name of the dedicated IP pool that it's associated with, as well information about the automatic warm-up process for the address.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDedicatedIpRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDedicatedIpRequest();
    $request->ip = 'magni';
    $request->xAmzAlgorithm = 'sunt';
    $request->xAmzContentSha256 = 'quo';
    $request->xAmzCredential = 'illum';
    $request->xAmzDate = 'pariatur';
    $request->xAmzSecurityToken = 'maxime';
    $request->xAmzSignature = 'ea';
    $request->xAmzSignedHeaders = 'excepturi';

    $response = $sdk->sdk->getDedicatedIp($request);

    if ($response->getDedicatedIpResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDedicatedIpPool

Retrieve information about the dedicated pool.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDedicatedIpPoolRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDedicatedIpPoolRequest();
    $request->poolName = 'odit';
    $request->xAmzAlgorithm = 'ea';
    $request->xAmzContentSha256 = 'accusantium';
    $request->xAmzCredential = 'ab';
    $request->xAmzDate = 'maiores';
    $request->xAmzSecurityToken = 'quidem';
    $request->xAmzSignature = 'ipsam';
    $request->xAmzSignedHeaders = 'voluptate';

    $response = $sdk->sdk->getDedicatedIpPool($request);

    if ($response->getDedicatedIpPoolResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDedicatedIps

List the dedicated IP addresses that are associated with your Amazon Web Services account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDedicatedIpsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDedicatedIpsRequest();
    $request->nextToken = 'autem';
    $request->pageSize = 722056;
    $request->poolName = 'eaque';
    $request->xAmzAlgorithm = 'pariatur';
    $request->xAmzContentSha256 = 'nemo';
    $request->xAmzCredential = 'voluptatibus';
    $request->xAmzDate = 'perferendis';
    $request->xAmzSecurityToken = 'fugiat';
    $request->xAmzSignature = 'amet';
    $request->xAmzSignedHeaders = 'aut';

    $response = $sdk->sdk->getDedicatedIps($request);

    if ($response->getDedicatedIpsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeliverabilityDashboardOptions

<p>Retrieve information about the status of the Deliverability dashboard for your account. When the Deliverability dashboard is enabled, you gain access to reputation, deliverability, and other metrics for the domains that you use to send email. You also gain the ability to perform predictive inbox placement tests.</p> <p>When you use the Deliverability dashboard, you pay a monthly subscription charge, in addition to any other fees that you accrue by using Amazon SES and other Amazon Web Services services. For more information about the features and cost of a Deliverability dashboard subscription, see <a href="http://aws.amazon.com/ses/pricing/">Amazon SES Pricing</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDeliverabilityDashboardOptionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeliverabilityDashboardOptionsRequest();
    $request->xAmzAlgorithm = 'cumque';
    $request->xAmzContentSha256 = 'corporis';
    $request->xAmzCredential = 'hic';
    $request->xAmzDate = 'libero';
    $request->xAmzSecurityToken = 'nobis';
    $request->xAmzSignature = 'dolores';
    $request->xAmzSignedHeaders = 'quis';

    $response = $sdk->sdk->getDeliverabilityDashboardOptions($request);

    if ($response->getDeliverabilityDashboardOptionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeliverabilityTestReport

Retrieve the results of a predictive inbox placement test.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDeliverabilityTestReportRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeliverabilityTestReportRequest();
    $request->reportId = 'totam';
    $request->xAmzAlgorithm = 'dignissimos';
    $request->xAmzContentSha256 = 'eaque';
    $request->xAmzCredential = 'quis';
    $request->xAmzDate = 'nesciunt';
    $request->xAmzSecurityToken = 'eos';
    $request->xAmzSignature = 'perferendis';
    $request->xAmzSignedHeaders = 'dolores';

    $response = $sdk->sdk->getDeliverabilityTestReport($request);

    if ($response->getDeliverabilityTestReportResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDomainDeliverabilityCampaign

Retrieve all the deliverability data for a specific campaign. This data is available for a campaign only if the campaign sent email by using a domain that the Deliverability dashboard is enabled for.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDomainDeliverabilityCampaignRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDomainDeliverabilityCampaignRequest();
    $request->campaignId = 'minus';
    $request->xAmzAlgorithm = 'quam';
    $request->xAmzContentSha256 = 'dolor';
    $request->xAmzCredential = 'vero';
    $request->xAmzDate = 'nostrum';
    $request->xAmzSecurityToken = 'hic';
    $request->xAmzSignature = 'recusandae';
    $request->xAmzSignedHeaders = 'omnis';

    $response = $sdk->sdk->getDomainDeliverabilityCampaign($request);

    if ($response->getDomainDeliverabilityCampaignResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDomainStatisticsReport

Retrieve inbox placement and engagement rates for the domains that you use to send email.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDomainStatisticsReportRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDomainStatisticsReportRequest();
    $request->domain = 'facilis';
    $request->endDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-08T18:10:54.422Z');
    $request->startDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-04T15:50:14.407Z');
    $request->xAmzAlgorithm = 'blanditiis';
    $request->xAmzContentSha256 = 'error';
    $request->xAmzCredential = 'eaque';
    $request->xAmzDate = 'occaecati';
    $request->xAmzSecurityToken = 'rerum';
    $request->xAmzSignature = 'adipisci';
    $request->xAmzSignedHeaders = 'asperiores';

    $response = $sdk->sdk->getDomainStatisticsReport($request);

    if ($response->getDomainStatisticsReportResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEmailIdentity

Provides information about a specific identity, including the identity's verification status, sending authorization policies, its DKIM authentication status, and its custom Mail-From settings.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetEmailIdentityRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEmailIdentityRequest();
    $request->emailIdentity = 'earum';
    $request->xAmzAlgorithm = 'modi';
    $request->xAmzContentSha256 = 'iste';
    $request->xAmzCredential = 'dolorum';
    $request->xAmzDate = 'deleniti';
    $request->xAmzSecurityToken = 'pariatur';
    $request->xAmzSignature = 'provident';
    $request->xAmzSignedHeaders = 'nobis';

    $response = $sdk->sdk->getEmailIdentity($request);

    if ($response->getEmailIdentityResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEmailIdentityPolicies

<p>Returns the requested sending authorization policies for the given identity (an email address or a domain). The policies are returned as a map of policy names to policy contents. You can retrieve a maximum of 20 policies at a time.</p> <note> <p>This API is for the identity owner only. If you have not verified the identity, this API will return an error.</p> </note> <p>Sending authorization is a feature that enables an identity owner to authorize other senders to use its identities. For information about using sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetEmailIdentityPoliciesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEmailIdentityPoliciesRequest();
    $request->emailIdentity = 'libero';
    $request->xAmzAlgorithm = 'delectus';
    $request->xAmzContentSha256 = 'quaerat';
    $request->xAmzCredential = 'quos';
    $request->xAmzDate = 'aliquid';
    $request->xAmzSecurityToken = 'dolorem';
    $request->xAmzSignature = 'dolorem';
    $request->xAmzSignedHeaders = 'dolor';

    $response = $sdk->sdk->getEmailIdentityPolicies($request);

    if ($response->getEmailIdentityPoliciesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEmailTemplate

<p>Displays the template object (which includes the subject line, HTML part and text part) for the template you specify.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetEmailTemplateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEmailTemplateRequest();
    $request->templateName = 'qui';
    $request->xAmzAlgorithm = 'ipsum';
    $request->xAmzContentSha256 = 'hic';
    $request->xAmzCredential = 'excepturi';
    $request->xAmzDate = 'cum';
    $request->xAmzSecurityToken = 'voluptate';
    $request->xAmzSignature = 'dignissimos';
    $request->xAmzSignedHeaders = 'reiciendis';

    $response = $sdk->sdk->getEmailTemplate($request);

    if ($response->getEmailTemplateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getImportJob

Provides information about an import job.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetImportJobRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetImportJobRequest();
    $request->jobId = 'amet';
    $request->xAmzAlgorithm = 'dolorum';
    $request->xAmzContentSha256 = 'numquam';
    $request->xAmzCredential = 'veritatis';
    $request->xAmzDate = 'ipsa';
    $request->xAmzSecurityToken = 'ipsa';
    $request->xAmzSignature = 'iure';
    $request->xAmzSignedHeaders = 'odio';

    $response = $sdk->sdk->getImportJob($request);

    if ($response->getImportJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSuppressedDestination

Retrieves information about a specific email address that's on the suppression list for your account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSuppressedDestinationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSuppressedDestinationRequest();
    $request->emailAddress = 'quaerat';
    $request->xAmzAlgorithm = 'accusamus';
    $request->xAmzContentSha256 = 'quidem';
    $request->xAmzCredential = 'voluptatibus';
    $request->xAmzDate = 'voluptas';
    $request->xAmzSecurityToken = 'natus';
    $request->xAmzSignature = 'eos';
    $request->xAmzSignedHeaders = 'atque';

    $response = $sdk->sdk->getSuppressedDestination($request);

    if ($response->getSuppressedDestinationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listConfigurationSets

<p>List all of the configuration sets associated with your account in the current region.</p> <p> <i>Configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListConfigurationSetsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListConfigurationSetsRequest();
    $request->nextToken = 'sit';
    $request->pageSize = 854614;
    $request->xAmzAlgorithm = 'ab';
    $request->xAmzContentSha256 = 'soluta';
    $request->xAmzCredential = 'dolorum';
    $request->xAmzDate = 'iusto';
    $request->xAmzSecurityToken = 'voluptate';
    $request->xAmzSignature = 'dolorum';
    $request->xAmzSignedHeaders = 'deleniti';

    $response = $sdk->sdk->listConfigurationSets($request);

    if ($response->listConfigurationSetsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listContactLists

Lists all of the contact lists available.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListContactListsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListContactListsRequest();
    $request->nextToken = 'omnis';
    $request->pageSize = 896672;
    $request->xAmzAlgorithm = 'distinctio';
    $request->xAmzContentSha256 = 'asperiores';
    $request->xAmzCredential = 'nihil';
    $request->xAmzDate = 'ipsum';
    $request->xAmzSecurityToken = 'voluptate';
    $request->xAmzSignature = 'id';
    $request->xAmzSignedHeaders = 'saepe';

    $response = $sdk->sdk->listContactLists($request);

    if ($response->listContactListsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listContacts

Lists the contacts present in a specific contact list.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListContactsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListContactsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ListContactsRequestBodyFilter;
use \OpenAPI\OpenAPI\Models\Shared\SubscriptionStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\TopicFilter;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListContactsRequest();
    $request->contactListName = 'eius';
    $request->nextToken = 'aspernatur';
    $request->pageSize = 20651;
    $request->requestBody = new ListContactsRequestBody();
    $request->requestBody->filter = new ListContactsRequestBodyFilter();
    $request->requestBody->filter->filteredStatus = SubscriptionStatusEnum::OPT_IN;
    $request->requestBody->filter->topicFilter = new TopicFilter();
    $request->requestBody->filter->topicFilter->topicName = 'optio';
    $request->requestBody->filter->topicFilter->useDefaultIfPreferenceUnavailable = false;
    $request->xAmzAlgorithm = 'accusamus';
    $request->xAmzContentSha256 = 'ad';
    $request->xAmzCredential = 'saepe';
    $request->xAmzDate = 'suscipit';
    $request->xAmzSecurityToken = 'deserunt';
    $request->xAmzSignature = 'provident';
    $request->xAmzSignedHeaders = 'minima';

    $response = $sdk->sdk->listContacts($request);

    if ($response->listContactsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listCustomVerificationEmailTemplates

<p>Lists the existing custom verification email templates for your account in the current Amazon Web Services Region.</p> <p>For more information about custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/dg/creating-identities.html#send-email-verify-address-custom">Using custom verification email templates</a> in the <i>Amazon SES Developer Guide</i>.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListCustomVerificationEmailTemplatesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListCustomVerificationEmailTemplatesRequest();
    $request->nextToken = 'repellendus';
    $request->pageSize = 519711;
    $request->xAmzAlgorithm = 'similique';
    $request->xAmzContentSha256 = 'alias';
    $request->xAmzCredential = 'at';
    $request->xAmzDate = 'quaerat';
    $request->xAmzSecurityToken = 'tempora';
    $request->xAmzSignature = 'vel';
    $request->xAmzSignedHeaders = 'quod';

    $response = $sdk->sdk->listCustomVerificationEmailTemplates($request);

    if ($response->listCustomVerificationEmailTemplatesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listDedicatedIpPools

List all of the dedicated IP pools that exist in your Amazon Web Services account in the current Region.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListDedicatedIpPoolsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListDedicatedIpPoolsRequest();
    $request->nextToken = 'officiis';
    $request->pageSize = 185636;
    $request->xAmzAlgorithm = 'dolorum';
    $request->xAmzContentSha256 = 'a';
    $request->xAmzCredential = 'esse';
    $request->xAmzDate = 'harum';
    $request->xAmzSecurityToken = 'iusto';
    $request->xAmzSignature = 'ipsum';
    $request->xAmzSignedHeaders = 'quisquam';

    $response = $sdk->sdk->listDedicatedIpPools($request);

    if ($response->listDedicatedIpPoolsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listDeliverabilityTestReports

Show a list of the predictive inbox placement tests that you've performed, regardless of their statuses. For predictive inbox placement tests that are complete, you can use the <code>GetDeliverabilityTestReport</code> operation to view the results.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListDeliverabilityTestReportsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListDeliverabilityTestReportsRequest();
    $request->nextToken = 'tenetur';
    $request->pageSize = 229442;
    $request->xAmzAlgorithm = 'tempore';
    $request->xAmzContentSha256 = 'accusamus';
    $request->xAmzCredential = 'numquam';
    $request->xAmzDate = 'enim';
    $request->xAmzSecurityToken = 'dolorem';
    $request->xAmzSignature = 'sapiente';
    $request->xAmzSignedHeaders = 'totam';

    $response = $sdk->sdk->listDeliverabilityTestReports($request);

    if ($response->listDeliverabilityTestReportsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listDomainDeliverabilityCampaigns

Retrieve deliverability data for all the campaigns that used a specific domain to send email during a specified time range. This data is available for a domain only if you enabled the Deliverability dashboard for the domain.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListDomainDeliverabilityCampaignsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListDomainDeliverabilityCampaignsRequest();
    $request->endDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-22T15:11:39.695Z');
    $request->nextToken = 'expedita';
    $request->pageSize = 207470;
    $request->startDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-29T23:45:18.595Z');
    $request->subscribedDomain = 'libero';
    $request->xAmzAlgorithm = 'voluptas';
    $request->xAmzContentSha256 = 'deserunt';
    $request->xAmzCredential = 'quam';
    $request->xAmzDate = 'ipsum';
    $request->xAmzSecurityToken = 'incidunt';
    $request->xAmzSignature = 'qui';
    $request->xAmzSignedHeaders = 'cupiditate';

    $response = $sdk->sdk->listDomainDeliverabilityCampaigns($request);

    if ($response->listDomainDeliverabilityCampaignsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listEmailIdentities

Returns a list of all of the email identities that are associated with your Amazon Web Services account. An identity can be either an email address or a domain. This operation returns identities that are verified as well as those that aren't. This operation returns identities that are associated with Amazon SES and Amazon Pinpoint.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListEmailIdentitiesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListEmailIdentitiesRequest();
    $request->nextToken = 'maxime';
    $request->pageSize = 863856;
    $request->xAmzAlgorithm = 'soluta';
    $request->xAmzContentSha256 = 'dicta';
    $request->xAmzCredential = 'laborum';
    $request->xAmzDate = 'totam';
    $request->xAmzSecurityToken = 'incidunt';
    $request->xAmzSignature = 'aspernatur';
    $request->xAmzSignedHeaders = 'dolores';

    $response = $sdk->sdk->listEmailIdentities($request);

    if ($response->listEmailIdentitiesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listEmailTemplates

<p>Lists the email templates present in your Amazon SES account in the current Amazon Web Services Region.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListEmailTemplatesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListEmailTemplatesRequest();
    $request->nextToken = 'distinctio';
    $request->pageSize = 704474;
    $request->xAmzAlgorithm = 'aliquid';
    $request->xAmzContentSha256 = 'quam';
    $request->xAmzCredential = 'molestias';
    $request->xAmzDate = 'temporibus';
    $request->xAmzSecurityToken = 'qui';
    $request->xAmzSignature = 'neque';
    $request->xAmzSignedHeaders = 'fugit';

    $response = $sdk->sdk->listEmailTemplates($request);

    if ($response->listEmailTemplatesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listImportJobs

Lists all of the import jobs.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListImportJobsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListImportJobsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ListImportJobsRequestBodyImportDestinationTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListImportJobsRequest();
    $request->nextToken = 'magni';
    $request->pageSize = 488056;
    $request->requestBody = new ListImportJobsRequestBody();
    $request->requestBody->importDestinationType = ListImportJobsRequestBodyImportDestinationTypeEnum::SUPPRESSION_LIST;
    $request->xAmzAlgorithm = 'ullam';
    $request->xAmzContentSha256 = 'nam';
    $request->xAmzCredential = 'hic';
    $request->xAmzDate = 'voluptatem';
    $request->xAmzSecurityToken = 'cumque';
    $request->xAmzSignature = 'soluta';
    $request->xAmzSignedHeaders = 'nobis';

    $response = $sdk->sdk->listImportJobs($request);

    if ($response->listImportJobsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listRecommendations

<p>Lists the recommendations present in your Amazon SES account in the current Amazon Web Services Region.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListRecommendationsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListRecommendationsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListRecommendationsRequest();
    $request->nextToken = 'et';
    $request->pageSize = 'saepe';
    $request->requestBody = new ListRecommendationsRequestBody();
    $request->requestBody->filter = [
        'veritatis' => 'nobis',
    ];
    $request->requestBody->nextToken = 'quos';
    $request->requestBody->pageSize = 731694;
    $request->xAmzAlgorithm = 'cupiditate';
    $request->xAmzContentSha256 = 'aperiam';
    $request->xAmzCredential = 'delectus';
    $request->xAmzDate = 'dolorem';
    $request->xAmzSecurityToken = 'dolore';
    $request->xAmzSignature = 'labore';
    $request->xAmzSignedHeaders = 'adipisci';

    $response = $sdk->sdk->listRecommendations($request);

    if ($response->listRecommendationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listSuppressedDestinations

Retrieves a list of email addresses that are on the suppression list for your account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListSuppressedDestinationsRequest;
use \OpenAPI\OpenAPI\Models\Shared\SuppressionListReasonEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListSuppressedDestinationsRequest();
    $request->endDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-19T18:50:59.428Z');
    $request->nextToken = 'quae';
    $request->pageSize = 16429;
    $request->reason = [
        SuppressionListReasonEnum::COMPLAINT,
        SuppressionListReasonEnum::BOUNCE,
        SuppressionListReasonEnum::COMPLAINT,
    ];
    $request->startDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-08-24T06:10:53.249Z');
    $request->xAmzAlgorithm = 'doloribus';
    $request->xAmzContentSha256 = 'ut';
    $request->xAmzCredential = 'facilis';
    $request->xAmzDate = 'cupiditate';
    $request->xAmzSecurityToken = 'qui';
    $request->xAmzSignature = 'quae';
    $request->xAmzSignedHeaders = 'laudantium';

    $response = $sdk->sdk->listSuppressedDestinations($request);

    if ($response->listSuppressedDestinationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTagsForResource

Retrieve a list of the tags (keys and values) that are associated with a specified resource. A <i>tag</i> is a label that you optionally define and associate with a resource. Each tag consists of a required <i>tag key</i> and an optional associated <i>tag value</i>. A tag key is a general label that acts as a category for more specific tag values. A tag value acts as a descriptor within a tag key.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTagsForResourceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTagsForResourceRequest();
    $request->resourceArn = 'odio';
    $request->xAmzAlgorithm = 'occaecati';
    $request->xAmzContentSha256 = 'voluptatibus';
    $request->xAmzCredential = 'quisquam';
    $request->xAmzDate = 'vero';
    $request->xAmzSecurityToken = 'omnis';
    $request->xAmzSignature = 'quis';
    $request->xAmzSignedHeaders = 'ipsum';

    $response = $sdk->sdk->listTagsForResource($request);

    if ($response->listTagsForResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putAccountDedicatedIpWarmupAttributes

Enable or disable the automatic warm-up feature for dedicated IP addresses.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutAccountDedicatedIpWarmupAttributesRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutAccountDedicatedIpWarmupAttributesRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutAccountDedicatedIpWarmupAttributesRequest();
    $request->requestBody = new PutAccountDedicatedIpWarmupAttributesRequestBody();
    $request->requestBody->autoWarmupEnabled = false;
    $request->xAmzAlgorithm = 'delectus';
    $request->xAmzContentSha256 = 'voluptate';
    $request->xAmzCredential = 'consectetur';
    $request->xAmzDate = 'vero';
    $request->xAmzSecurityToken = 'tenetur';
    $request->xAmzSignature = 'dignissimos';
    $request->xAmzSignedHeaders = 'hic';

    $response = $sdk->sdk->putAccountDedicatedIpWarmupAttributes($request);

    if ($response->putAccountDedicatedIpWarmupAttributesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putAccountDetails

Update your Amazon SES account details.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutAccountDetailsRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutAccountDetailsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PutAccountDetailsRequestBodyContactLanguageEnum;
use \OpenAPI\OpenAPI\Models\Operations\PutAccountDetailsRequestBodyMailTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutAccountDetailsRequest();
    $request->requestBody = new PutAccountDetailsRequestBody();
    $request->requestBody->additionalContactEmailAddresses = [
        'quod',
        'odio',
        'similique',
    ];
    $request->requestBody->contactLanguage = PutAccountDetailsRequestBodyContactLanguageEnum::JA;
    $request->requestBody->mailType = PutAccountDetailsRequestBodyMailTypeEnum::TRANSACTIONAL;
    $request->requestBody->productionAccessEnabled = false;
    $request->requestBody->useCaseDescription = 'ducimus';
    $request->requestBody->websiteURL = 'dolore';
    $request->xAmzAlgorithm = 'quibusdam';
    $request->xAmzContentSha256 = 'illum';
    $request->xAmzCredential = 'sequi';
    $request->xAmzDate = 'natus';
    $request->xAmzSecurityToken = 'impedit';
    $request->xAmzSignature = 'aut';
    $request->xAmzSignedHeaders = 'voluptatibus';

    $response = $sdk->sdk->putAccountDetails($request);

    if ($response->putAccountDetailsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putAccountSendingAttributes

Enable or disable the ability of your account to send email.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutAccountSendingAttributesRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutAccountSendingAttributesRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutAccountSendingAttributesRequest();
    $request->requestBody = new PutAccountSendingAttributesRequestBody();
    $request->requestBody->sendingEnabled = false;
    $request->xAmzAlgorithm = 'exercitationem';
    $request->xAmzContentSha256 = 'nulla';
    $request->xAmzCredential = 'fugit';
    $request->xAmzDate = 'porro';
    $request->xAmzSecurityToken = 'maiores';
    $request->xAmzSignature = 'doloribus';
    $request->xAmzSignedHeaders = 'iusto';

    $response = $sdk->sdk->putAccountSendingAttributes($request);

    if ($response->putAccountSendingAttributesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putAccountSuppressionAttributes

Change the settings for the account-level suppression list.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutAccountSuppressionAttributesRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutAccountSuppressionAttributesRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\SuppressionListReasonEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutAccountSuppressionAttributesRequest();
    $request->requestBody = new PutAccountSuppressionAttributesRequestBody();
    $request->requestBody->suppressedReasons = [
        SuppressionListReasonEnum::BOUNCE,
        SuppressionListReasonEnum::BOUNCE,
        SuppressionListReasonEnum::COMPLAINT,
        SuppressionListReasonEnum::BOUNCE,
    ];
    $request->xAmzAlgorithm = 'ipsam';
    $request->xAmzContentSha256 = 'ea';
    $request->xAmzCredential = 'aspernatur';
    $request->xAmzDate = 'vel';
    $request->xAmzSecurityToken = 'possimus';
    $request->xAmzSignature = 'magnam';
    $request->xAmzSignedHeaders = 'ratione';

    $response = $sdk->sdk->putAccountSuppressionAttributes($request);

    if ($response->putAccountSuppressionAttributesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putAccountVdmAttributes

<p>Update your Amazon SES account VDM attributes.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutAccountVdmAttributesRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutAccountVdmAttributesRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PutAccountVdmAttributesRequestBodyVdmAttributes;
use \OpenAPI\OpenAPI\Models\Shared\DashboardAttributes;
use \OpenAPI\OpenAPI\Models\Shared\FeatureStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\GuardianAttributes;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutAccountVdmAttributesRequest();
    $request->requestBody = new PutAccountVdmAttributesRequestBody();
    $request->requestBody->vdmAttributes = new PutAccountVdmAttributesRequestBodyVdmAttributes();
    $request->requestBody->vdmAttributes->dashboardAttributes = new DashboardAttributes();
    $request->requestBody->vdmAttributes->dashboardAttributes->engagementMetrics = FeatureStatusEnum::ENABLED;
    $request->requestBody->vdmAttributes->guardianAttributes = new GuardianAttributes();
    $request->requestBody->vdmAttributes->guardianAttributes->optimizedSharedDelivery = FeatureStatusEnum::DISABLED;
    $request->requestBody->vdmAttributes->vdmEnabled = FeatureStatusEnum::ENABLED;
    $request->xAmzAlgorithm = 'dolor';
    $request->xAmzContentSha256 = 'maiores';
    $request->xAmzCredential = 'quasi';
    $request->xAmzDate = 'ex';
    $request->xAmzSecurityToken = 'nulla';
    $request->xAmzSignature = 'excepturi';
    $request->xAmzSignedHeaders = 'voluptatibus';

    $response = $sdk->sdk->putAccountVdmAttributes($request);

    if ($response->putAccountVdmAttributesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putConfigurationSetDeliveryOptions

Associate a configuration set with a dedicated IP pool. You can use dedicated IP pools to create groups of dedicated IP addresses for sending specific types of email.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutConfigurationSetDeliveryOptionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutConfigurationSetDeliveryOptionsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PutConfigurationSetDeliveryOptionsRequestBodyTlsPolicyEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutConfigurationSetDeliveryOptionsRequest();
    $request->configurationSetName = 'nostrum';
    $request->requestBody = new PutConfigurationSetDeliveryOptionsRequestBody();
    $request->requestBody->sendingPoolName = 'sapiente';
    $request->requestBody->tlsPolicy = PutConfigurationSetDeliveryOptionsRequestBodyTlsPolicyEnum::OPTIONAL;
    $request->xAmzAlgorithm = 'saepe';
    $request->xAmzContentSha256 = 'ea';
    $request->xAmzCredential = 'impedit';
    $request->xAmzDate = 'corporis';
    $request->xAmzSecurityToken = 'veniam';
    $request->xAmzSignature = 'aliquid';
    $request->xAmzSignedHeaders = 'inventore';

    $response = $sdk->sdk->putConfigurationSetDeliveryOptions($request);

    if ($response->putConfigurationSetDeliveryOptionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putConfigurationSetReputationOptions

Enable or disable collection of reputation metrics for emails that you send using a particular configuration set in a specific Amazon Web Services Region.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutConfigurationSetReputationOptionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutConfigurationSetReputationOptionsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutConfigurationSetReputationOptionsRequest();
    $request->configurationSetName = 'magnam';
    $request->requestBody = new PutConfigurationSetReputationOptionsRequestBody();
    $request->requestBody->reputationMetricsEnabled = false;
    $request->xAmzAlgorithm = 'ea';
    $request->xAmzContentSha256 = 'quo';
    $request->xAmzCredential = 'consectetur';
    $request->xAmzDate = 'recusandae';
    $request->xAmzSecurityToken = 'aspernatur';
    $request->xAmzSignature = 'minima';
    $request->xAmzSignedHeaders = 'eaque';

    $response = $sdk->sdk->putConfigurationSetReputationOptions($request);

    if ($response->putConfigurationSetReputationOptionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putConfigurationSetSendingOptions

Enable or disable email sending for messages that use a particular configuration set in a specific Amazon Web Services Region.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutConfigurationSetSendingOptionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutConfigurationSetSendingOptionsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutConfigurationSetSendingOptionsRequest();
    $request->configurationSetName = 'a';
    $request->requestBody = new PutConfigurationSetSendingOptionsRequestBody();
    $request->requestBody->sendingEnabled = false;
    $request->xAmzAlgorithm = 'libero';
    $request->xAmzContentSha256 = 'aut';
    $request->xAmzCredential = 'aut';
    $request->xAmzDate = 'deleniti';
    $request->xAmzSecurityToken = 'impedit';
    $request->xAmzSignature = 'aliquam';
    $request->xAmzSignedHeaders = 'fugit';

    $response = $sdk->sdk->putConfigurationSetSendingOptions($request);

    if ($response->putConfigurationSetSendingOptionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putConfigurationSetSuppressionOptions

Specify the account suppression list preferences for a configuration set.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutConfigurationSetSuppressionOptionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutConfigurationSetSuppressionOptionsRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\SuppressionListReasonEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutConfigurationSetSuppressionOptionsRequest();
    $request->configurationSetName = 'accusamus';
    $request->requestBody = new PutConfigurationSetSuppressionOptionsRequestBody();
    $request->requestBody->suppressedReasons = [
        SuppressionListReasonEnum::BOUNCE,
    ];
    $request->xAmzAlgorithm = 'et';
    $request->xAmzContentSha256 = 'dolorum';
    $request->xAmzCredential = 'laborum';
    $request->xAmzDate = 'placeat';
    $request->xAmzSecurityToken = 'velit';
    $request->xAmzSignature = 'eum';
    $request->xAmzSignedHeaders = 'autem';

    $response = $sdk->sdk->putConfigurationSetSuppressionOptions($request);

    if ($response->putConfigurationSetSuppressionOptionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putConfigurationSetTrackingOptions

Specify a custom domain to use for open and click tracking elements in email that you send.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutConfigurationSetTrackingOptionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutConfigurationSetTrackingOptionsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutConfigurationSetTrackingOptionsRequest();
    $request->configurationSetName = 'nobis';
    $request->requestBody = new PutConfigurationSetTrackingOptionsRequestBody();
    $request->requestBody->customRedirectDomain = 'quas';
    $request->xAmzAlgorithm = 'assumenda';
    $request->xAmzContentSha256 = 'nulla';
    $request->xAmzCredential = 'voluptas';
    $request->xAmzDate = 'libero';
    $request->xAmzSecurityToken = 'quasi';
    $request->xAmzSignature = 'tempora';
    $request->xAmzSignedHeaders = 'numquam';

    $response = $sdk->sdk->putConfigurationSetTrackingOptions($request);

    if ($response->putConfigurationSetTrackingOptionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putConfigurationSetVdmOptions

<p>Specify VDM preferences for email that you send using the configuration set.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutConfigurationSetVdmOptionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutConfigurationSetVdmOptionsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PutConfigurationSetVdmOptionsRequestBodyVdmOptions;
use \OpenAPI\OpenAPI\Models\Shared\DashboardOptions;
use \OpenAPI\OpenAPI\Models\Shared\FeatureStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\GuardianOptions;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutConfigurationSetVdmOptionsRequest();
    $request->configurationSetName = 'explicabo';
    $request->requestBody = new PutConfigurationSetVdmOptionsRequestBody();
    $request->requestBody->vdmOptions = new PutConfigurationSetVdmOptionsRequestBodyVdmOptions();
    $request->requestBody->vdmOptions->dashboardOptions = new DashboardOptions();
    $request->requestBody->vdmOptions->dashboardOptions->engagementMetrics = FeatureStatusEnum::DISABLED;
    $request->requestBody->vdmOptions->guardianOptions = new GuardianOptions();
    $request->requestBody->vdmOptions->guardianOptions->optimizedSharedDelivery = FeatureStatusEnum::ENABLED;
    $request->xAmzAlgorithm = 'molestiae';
    $request->xAmzContentSha256 = 'magnam';
    $request->xAmzCredential = 'odio';
    $request->xAmzDate = 'eius';
    $request->xAmzSecurityToken = 'esse';
    $request->xAmzSignature = 'esse';
    $request->xAmzSignedHeaders = 'rem';

    $response = $sdk->sdk->putConfigurationSetVdmOptions($request);

    if ($response->putConfigurationSetVdmOptionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putDedicatedIpInPool

<p>Move a dedicated IP address to an existing dedicated IP pool.</p> <note> <p>The dedicated IP address that you specify must already exist, and must be associated with your Amazon Web Services account. </p> <p>The dedicated IP pool you specify must already exist. You can create a new pool by using the <code>CreateDedicatedIpPool</code> operation.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutDedicatedIpInPoolRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutDedicatedIpInPoolRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutDedicatedIpInPoolRequest();
    $request->ip = 'fuga';
    $request->requestBody = new PutDedicatedIpInPoolRequestBody();
    $request->requestBody->destinationPoolName = 'reprehenderit';
    $request->xAmzAlgorithm = 'quidem';
    $request->xAmzContentSha256 = 'fugiat';
    $request->xAmzCredential = 'ut';
    $request->xAmzDate = 'eum';
    $request->xAmzSecurityToken = 'suscipit';
    $request->xAmzSignature = 'assumenda';
    $request->xAmzSignedHeaders = 'eos';

    $response = $sdk->sdk->putDedicatedIpInPool($request);

    if ($response->putDedicatedIpInPoolResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putDedicatedIpWarmupAttributes

<p/>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutDedicatedIpWarmupAttributesRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutDedicatedIpWarmupAttributesRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutDedicatedIpWarmupAttributesRequest();
    $request->ip = 'praesentium';
    $request->requestBody = new PutDedicatedIpWarmupAttributesRequestBody();
    $request->requestBody->warmupPercentage = 788546;
    $request->xAmzAlgorithm = 'veritatis';
    $request->xAmzContentSha256 = 'ipsa';
    $request->xAmzCredential = 'id';
    $request->xAmzDate = 'quidem';
    $request->xAmzSecurityToken = 'neque';
    $request->xAmzSignature = 'quo';
    $request->xAmzSignedHeaders = 'illum';

    $response = $sdk->sdk->putDedicatedIpWarmupAttributes($request);

    if ($response->putDedicatedIpWarmupAttributesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putDeliverabilityDashboardOption

<p>Enable or disable the Deliverability dashboard. When you enable the Deliverability dashboard, you gain access to reputation, deliverability, and other metrics for the domains that you use to send email. You also gain the ability to perform predictive inbox placement tests.</p> <p>When you use the Deliverability dashboard, you pay a monthly subscription charge, in addition to any other fees that you accrue by using Amazon SES and other Amazon Web Services services. For more information about the features and cost of a Deliverability dashboard subscription, see <a href="http://aws.amazon.com/ses/pricing/">Amazon SES Pricing</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutDeliverabilityDashboardOptionRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutDeliverabilityDashboardOptionRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\DomainDeliverabilityTrackingOption;
use \OpenAPI\OpenAPI\Models\Shared\InboxPlacementTrackingOption;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutDeliverabilityDashboardOptionRequest();
    $request->requestBody = new PutDeliverabilityDashboardOptionRequestBody();
    $request->requestBody->dashboardEnabled = false;
    $request->requestBody->subscribedDomains = [
        new DomainDeliverabilityTrackingOption(),
        new DomainDeliverabilityTrackingOption(),
        new DomainDeliverabilityTrackingOption(),
        new DomainDeliverabilityTrackingOption(),
    ];
    $request->xAmzAlgorithm = 'fuga';
    $request->xAmzContentSha256 = 'eius';
    $request->xAmzCredential = 'eos';
    $request->xAmzDate = 'voluptas';
    $request->xAmzSecurityToken = 'ab';
    $request->xAmzSignature = 'cupiditate';
    $request->xAmzSignedHeaders = 'consequatur';

    $response = $sdk->sdk->putDeliverabilityDashboardOption($request);

    if ($response->putDeliverabilityDashboardOptionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putEmailIdentityConfigurationSetAttributes

Used to associate a configuration set with an email identity.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutEmailIdentityConfigurationSetAttributesRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutEmailIdentityConfigurationSetAttributesRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutEmailIdentityConfigurationSetAttributesRequest();
    $request->emailIdentity = 'tempora';
    $request->requestBody = new PutEmailIdentityConfigurationSetAttributesRequestBody();
    $request->requestBody->configurationSetName = 'debitis';
    $request->xAmzAlgorithm = 'ipsam';
    $request->xAmzContentSha256 = 'aspernatur';
    $request->xAmzCredential = 'sequi';
    $request->xAmzDate = 'quo';
    $request->xAmzSecurityToken = 'esse';
    $request->xAmzSignature = 'recusandae';
    $request->xAmzSignedHeaders = 'aperiam';

    $response = $sdk->sdk->putEmailIdentityConfigurationSetAttributes($request);

    if ($response->putEmailIdentityConfigurationSetAttributesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putEmailIdentityDkimAttributes

Used to enable or disable DKIM authentication for an email identity.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutEmailIdentityDkimAttributesRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutEmailIdentityDkimAttributesRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutEmailIdentityDkimAttributesRequest();
    $request->emailIdentity = 'distinctio';
    $request->requestBody = new PutEmailIdentityDkimAttributesRequestBody();
    $request->requestBody->signingEnabled = false;
    $request->xAmzAlgorithm = 'quod';
    $request->xAmzContentSha256 = 'dignissimos';
    $request->xAmzCredential = 'inventore';
    $request->xAmzDate = 'nihil';
    $request->xAmzSecurityToken = 'totam';
    $request->xAmzSignature = 'accusamus';
    $request->xAmzSignedHeaders = 'aliquam';

    $response = $sdk->sdk->putEmailIdentityDkimAttributes($request);

    if ($response->putEmailIdentityDkimAttributesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putEmailIdentityDkimSigningAttributes

<p>Used to configure or change the DKIM authentication settings for an email domain identity. You can use this operation to do any of the following:</p> <ul> <li> <p>Update the signing attributes for an identity that uses Bring Your Own DKIM (BYODKIM).</p> </li> <li> <p>Update the key length that should be used for Easy DKIM.</p> </li> <li> <p>Change from using no DKIM authentication to using Easy DKIM.</p> </li> <li> <p>Change from using no DKIM authentication to using BYODKIM.</p> </li> <li> <p>Change from using Easy DKIM to using BYODKIM.</p> </li> <li> <p>Change from using BYODKIM to using Easy DKIM.</p> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutEmailIdentityDkimSigningAttributesRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutEmailIdentityDkimSigningAttributesRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PutEmailIdentityDkimSigningAttributesRequestBodySigningAttributes;
use \OpenAPI\OpenAPI\Models\Shared\DkimSigningKeyLengthEnum;
use \OpenAPI\OpenAPI\Models\Operations\PutEmailIdentityDkimSigningAttributesRequestBodySigningAttributesOriginEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutEmailIdentityDkimSigningAttributesRequest();
    $request->emailIdentity = 'odio';
    $request->requestBody = new PutEmailIdentityDkimSigningAttributesRequestBody();
    $request->requestBody->signingAttributes = new PutEmailIdentityDkimSigningAttributesRequestBodySigningAttributes();
    $request->requestBody->signingAttributes->domainSigningPrivateKey = 'occaecati';
    $request->requestBody->signingAttributes->domainSigningSelector = 'commodi';
    $request->requestBody->signingAttributes->nextSigningKeyLength = DkimSigningKeyLengthEnum::RSA2048_BIT;
    $request->requestBody->signingAttributesOrigin = PutEmailIdentityDkimSigningAttributesRequestBodySigningAttributesOriginEnum::AWS_SES;
    $request->xAmzAlgorithm = 'deserunt';
    $request->xAmzContentSha256 = 'molestiae';
    $request->xAmzCredential = 'accusantium';
    $request->xAmzDate = 'porro';
    $request->xAmzSecurityToken = 'eum';
    $request->xAmzSignature = 'quas';
    $request->xAmzSignedHeaders = 'praesentium';

    $response = $sdk->sdk->putEmailIdentityDkimSigningAttributes($request);

    if ($response->putEmailIdentityDkimSigningAttributesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putEmailIdentityFeedbackAttributes

<p>Used to enable or disable feedback forwarding for an identity. This setting determines what happens when an identity is used to send an email that results in a bounce or complaint event.</p> <p>If the value is <code>true</code>, you receive email notifications when bounce or complaint events occur. These notifications are sent to the address that you specified in the <code>Return-Path</code> header of the original email.</p> <p>You're required to have a method of tracking bounces and complaints. If you haven't set up another mechanism for receiving bounce or complaint notifications (for example, by setting up an event destination), you receive an email notification when these events occur (even if this setting is disabled).</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutEmailIdentityFeedbackAttributesRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutEmailIdentityFeedbackAttributesRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutEmailIdentityFeedbackAttributesRequest();
    $request->emailIdentity = 'consequuntur';
    $request->requestBody = new PutEmailIdentityFeedbackAttributesRequestBody();
    $request->requestBody->emailForwardingEnabled = false;
    $request->xAmzAlgorithm = 'deleniti';
    $request->xAmzContentSha256 = 'fugit';
    $request->xAmzCredential = 'fuga';
    $request->xAmzDate = 'mollitia';
    $request->xAmzSecurityToken = 'incidunt';
    $request->xAmzSignature = 'atque';
    $request->xAmzSignedHeaders = 'explicabo';

    $response = $sdk->sdk->putEmailIdentityFeedbackAttributes($request);

    if ($response->putEmailIdentityFeedbackAttributesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putEmailIdentityMailFromAttributes

Used to enable or disable the custom Mail-From domain configuration for an email identity.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutEmailIdentityMailFromAttributesRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutEmailIdentityMailFromAttributesRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PutEmailIdentityMailFromAttributesRequestBodyBehaviorOnMxFailureEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutEmailIdentityMailFromAttributesRequest();
    $request->emailIdentity = 'minima';
    $request->requestBody = new PutEmailIdentityMailFromAttributesRequestBody();
    $request->requestBody->behaviorOnMxFailure = PutEmailIdentityMailFromAttributesRequestBodyBehaviorOnMxFailureEnum::USE_DEFAULT_VALUE;
    $request->requestBody->mailFromDomain = 'fugit';
    $request->xAmzAlgorithm = 'sapiente';
    $request->xAmzContentSha256 = 'consequuntur';
    $request->xAmzCredential = 'ratione';
    $request->xAmzDate = 'explicabo';
    $request->xAmzSecurityToken = 'saepe';
    $request->xAmzSignature = 'occaecati';
    $request->xAmzSignedHeaders = 'atque';

    $response = $sdk->sdk->putEmailIdentityMailFromAttributes($request);

    if ($response->putEmailIdentityMailFromAttributesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putSuppressedDestination

Adds an email address to the suppression list for your account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutSuppressedDestinationRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutSuppressedDestinationRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PutSuppressedDestinationRequestBodyReasonEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutSuppressedDestinationRequest();
    $request->requestBody = new PutSuppressedDestinationRequestBody();
    $request->requestBody->emailAddress = 'et';
    $request->requestBody->reason = PutSuppressedDestinationRequestBodyReasonEnum::BOUNCE;
    $request->xAmzAlgorithm = 'eveniet';
    $request->xAmzContentSha256 = 'accusamus';
    $request->xAmzCredential = 'veritatis';
    $request->xAmzDate = 'esse';
    $request->xAmzSecurityToken = 'quod';
    $request->xAmzSignature = 'nam';
    $request->xAmzSignedHeaders = 'vero';

    $response = $sdk->sdk->putSuppressedDestination($request);

    if ($response->putSuppressedDestinationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sendBulkEmail

Composes an email message to multiple destinations.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SendBulkEmailRequest;
use \OpenAPI\OpenAPI\Models\Operations\SendBulkEmailRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\BulkEmailEntry;
use \OpenAPI\OpenAPI\Models\Shared\Destination;
use \OpenAPI\OpenAPI\Models\Shared\ReplacementEmailContent;
use \OpenAPI\OpenAPI\Models\Shared\ReplacementTemplate;
use \OpenAPI\OpenAPI\Models\Shared\MessageTag;
use \OpenAPI\OpenAPI\Models\Operations\SendBulkEmailRequestBodyDefaultContent;
use \OpenAPI\OpenAPI\Models\Shared\Template;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SendBulkEmailRequest();
    $request->requestBody = new SendBulkEmailRequestBody();
    $request->requestBody->bulkEmailEntries = [
        new BulkEmailEntry(),
        new BulkEmailEntry(),
    ];
    $request->requestBody->configurationSetName = 'quasi';
    $request->requestBody->defaultContent = new SendBulkEmailRequestBodyDefaultContent();
    $request->requestBody->defaultContent->template = new Template();
    $request->requestBody->defaultContent->template->templateArn = 'saepe';
    $request->requestBody->defaultContent->template->templateData = 'vel';
    $request->requestBody->defaultContent->template->templateName = 'harum';
    $request->requestBody->defaultEmailTags = [
        new MessageTag(),
        new MessageTag(),
    ];
    $request->requestBody->feedbackForwardingEmailAddress = 'rerum';
    $request->requestBody->feedbackForwardingEmailAddressIdentityArn = 'occaecati';
    $request->requestBody->fromEmailAddress = 'minima';
    $request->requestBody->fromEmailAddressIdentityArn = 'distinctio';
    $request->requestBody->replyToAddresses = [
        'sit',
        'culpa',
        'tempore',
        'adipisci',
    ];
    $request->xAmzAlgorithm = 'cumque';
    $request->xAmzContentSha256 = 'consequuntur';
    $request->xAmzCredential = 'consequatur';
    $request->xAmzDate = 'minus';
    $request->xAmzSecurityToken = 'quaerat';
    $request->xAmzSignature = 'sapiente';
    $request->xAmzSignedHeaders = 'consectetur';

    $response = $sdk->sdk->sendBulkEmail($request);

    if ($response->sendBulkEmailResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sendCustomVerificationEmail

<p>Adds an email address to the list of identities for your Amazon SES account in the current Amazon Web Services Region and attempts to verify it. As a result of executing this operation, a customized verification email is sent to the specified address.</p> <p>To use this operation, you must first create a custom verification email template. For more information about creating and using custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/dg/creating-identities.html#send-email-verify-address-custom">Using custom verification email templates</a> in the <i>Amazon SES Developer Guide</i>.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SendCustomVerificationEmailRequest;
use \OpenAPI\OpenAPI\Models\Operations\SendCustomVerificationEmailRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SendCustomVerificationEmailRequest();
    $request->requestBody = new SendCustomVerificationEmailRequestBody();
    $request->requestBody->configurationSetName = 'esse';
    $request->requestBody->emailAddress = 'blanditiis';
    $request->requestBody->templateName = 'provident';
    $request->xAmzAlgorithm = 'a';
    $request->xAmzContentSha256 = 'nulla';
    $request->xAmzCredential = 'quas';
    $request->xAmzDate = 'esse';
    $request->xAmzSecurityToken = 'quasi';
    $request->xAmzSignature = 'a';
    $request->xAmzSignedHeaders = 'error';

    $response = $sdk->sdk->sendCustomVerificationEmail($request);

    if ($response->sendCustomVerificationEmailResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sendEmail

<p>Sends an email message. You can use the Amazon SES API v2 to send the following types of messages:</p> <ul> <li> <p> <b>Simple</b> – A standard email message. When you create this type of message, you specify the sender, the recipient, and the message body, and Amazon SES assembles the message for you.</p> </li> <li> <p> <b>Raw</b> – A raw, MIME-formatted email message. When you send this type of email, you have to specify all of the message headers, as well as the message body. You can use this message type to send messages that contain attachments. The message that you specify has to be a valid MIME message.</p> </li> <li> <p> <b>Templated</b> – A message that contains personalization tags. When you send this type of email, Amazon SES API v2 automatically replaces the tags with values that you specify.</p> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SendEmailRequest;
use \OpenAPI\OpenAPI\Models\Operations\SendEmailRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\SendEmailRequestBodyContent;
use \OpenAPI\OpenAPI\Models\Shared\RawMessage;
use \OpenAPI\OpenAPI\Models\Shared\Message;
use \OpenAPI\OpenAPI\Models\Shared\Body;
use \OpenAPI\OpenAPI\Models\Shared\Content;
use \OpenAPI\OpenAPI\Models\Shared\Template;
use \OpenAPI\OpenAPI\Models\Operations\SendEmailRequestBodyDestination;
use \OpenAPI\OpenAPI\Models\Shared\MessageTag;
use \OpenAPI\OpenAPI\Models\Operations\SendEmailRequestBodyListManagementOptions;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SendEmailRequest();
    $request->requestBody = new SendEmailRequestBody();
    $request->requestBody->configurationSetName = 'sint';
    $request->requestBody->content = new SendEmailRequestBodyContent();
    $request->requestBody->content->raw = new RawMessage();
    $request->requestBody->content->raw->data = 'pariatur';
    $request->requestBody->content->simple = new Message();
    $request->requestBody->content->simple->body = new Body();
    $request->requestBody->content->simple->body->html = new Content();
    $request->requestBody->content->simple->body->html->charset = 'possimus';
    $request->requestBody->content->simple->body->html->data = 'quia';
    $request->requestBody->content->simple->body->text = new Content();
    $request->requestBody->content->simple->body->text->charset = 'eveniet';
    $request->requestBody->content->simple->body->text->data = 'asperiores';
    $request->requestBody->content->simple->subject = new Content();
    $request->requestBody->content->simple->subject->charset = 'facere';
    $request->requestBody->content->simple->subject->data = 'veritatis';
    $request->requestBody->content->template = new Template();
    $request->requestBody->content->template->templateArn = 'consequuntur';
    $request->requestBody->content->template->templateData = 'quasi';
    $request->requestBody->content->template->templateName = 'similique';
    $request->requestBody->destination = new SendEmailRequestBodyDestination();
    $request->requestBody->destination->bccAddresses = [
        'aliquid',
        'tenetur',
        'quae',
    ];
    $request->requestBody->destination->ccAddresses = [
        'vel',
        'in',
        'eius',
        'libero',
    ];
    $request->requestBody->destination->toAddresses = [
        'soluta',
        'accusantium',
        'aliquam',
        'sapiente',
    ];
    $request->requestBody->emailTags = [
        new MessageTag(),
    ];
    $request->requestBody->feedbackForwardingEmailAddress = 'ullam';
    $request->requestBody->feedbackForwardingEmailAddressIdentityArn = 'reprehenderit';
    $request->requestBody->fromEmailAddress = 'ullam';
    $request->requestBody->fromEmailAddressIdentityArn = 'nisi';
    $request->requestBody->listManagementOptions = new SendEmailRequestBodyListManagementOptions();
    $request->requestBody->listManagementOptions->contactListName = 'aut';
    $request->requestBody->listManagementOptions->topicName = 'voluptatum';
    $request->requestBody->replyToAddresses = [
        'quibusdam',
    ];
    $request->xAmzAlgorithm = 'ex';
    $request->xAmzContentSha256 = 'deleniti';
    $request->xAmzCredential = 'itaque';
    $request->xAmzDate = 'dolorum';
    $request->xAmzSecurityToken = 'architecto';
    $request->xAmzSignature = 'omnis';
    $request->xAmzSignedHeaders = 'tenetur';

    $response = $sdk->sdk->sendEmail($request);

    if ($response->sendEmailResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagResource

<p>Add one or more tags (keys and values) to a specified resource. A <i>tag</i> is a label that you optionally define and associate with a resource. Tags can help you categorize and manage resources in different ways, such as by purpose, owner, environment, or other criteria. A resource can have as many as 50 tags.</p> <p>Each tag consists of a required <i>tag key</i> and an associated <i>tag value</i>, both of which you define. A tag key is a general label that acts as a category for more specific tag values. A tag value acts as a descriptor within a tag key.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\Tag;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagResourceRequest();
    $request->requestBody = new TagResourceRequestBody();
    $request->requestBody->resourceArn = 'quasi';
    $request->requestBody->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'et';
    $request->xAmzContentSha256 = 'voluptate';
    $request->xAmzCredential = 'ipsa';
    $request->xAmzDate = 'minima';
    $request->xAmzSecurityToken = 'veritatis';
    $request->xAmzSignature = 'consectetur';
    $request->xAmzSignedHeaders = 'adipisci';

    $response = $sdk->sdk->tagResource($request);

    if ($response->tagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## testRenderEmailTemplate

<p>Creates a preview of the MIME content of an email when provided with a template and a set of replacement data.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TestRenderEmailTemplateRequest;
use \OpenAPI\OpenAPI\Models\Operations\TestRenderEmailTemplateRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TestRenderEmailTemplateRequest();
    $request->requestBody = new TestRenderEmailTemplateRequestBody();
    $request->requestBody->templateData = 'iste';
    $request->templateName = 'temporibus';
    $request->xAmzAlgorithm = 'accusantium';
    $request->xAmzContentSha256 = 'rem';
    $request->xAmzCredential = 'aut';
    $request->xAmzDate = 'laudantium';
    $request->xAmzSecurityToken = 'eum';
    $request->xAmzSignature = 'mollitia';
    $request->xAmzSignedHeaders = 'ab';

    $response = $sdk->sdk->testRenderEmailTemplate($request);

    if ($response->testRenderEmailTemplateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## untagResource

Remove one or more tags (keys and values) from a specified resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UntagResourceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UntagResourceRequest();
    $request->resourceArn = 'corrupti';
    $request->tagKeys = [
        'voluptatem',
        'dolor',
    ];
    $request->xAmzAlgorithm = 'occaecati';
    $request->xAmzContentSha256 = 'numquam';
    $request->xAmzCredential = 'impedit';
    $request->xAmzDate = 'explicabo';
    $request->xAmzSecurityToken = 'voluptas';
    $request->xAmzSignature = 'aut';
    $request->xAmzSignedHeaders = 'dignissimos';

    $response = $sdk->sdk->untagResource($request);

    if ($response->untagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateConfigurationSetEventDestination

<p>Update the configuration of an event destination for a configuration set.</p> <p> <i>Events</i> include message sends, deliveries, opens, clicks, bounces, and complaints. <i>Event destinations</i> are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateConfigurationSetEventDestinationRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateConfigurationSetEventDestinationRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateConfigurationSetEventDestinationRequestBodyEventDestination;
use \OpenAPI\OpenAPI\Models\Shared\CloudWatchDestination;
use \OpenAPI\OpenAPI\Models\Shared\CloudWatchDimensionConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\DimensionValueSourceEnum;
use \OpenAPI\OpenAPI\Models\Shared\KinesisFirehoseDestination;
use \OpenAPI\OpenAPI\Models\Shared\EventTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PinpointDestination;
use \OpenAPI\OpenAPI\Models\Shared\SnsDestination;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateConfigurationSetEventDestinationRequest();
    $request->configurationSetName = 'dicta';
    $request->eventDestinationName = 'maiores';
    $request->requestBody = new UpdateConfigurationSetEventDestinationRequestBody();
    $request->requestBody->eventDestination = new UpdateConfigurationSetEventDestinationRequestBodyEventDestination();
    $request->requestBody->eventDestination->cloudWatchDestination = new CloudWatchDestination();
    $request->requestBody->eventDestination->cloudWatchDestination->dimensionConfigurations = [
        new CloudWatchDimensionConfiguration(),
        new CloudWatchDimensionConfiguration(),
        new CloudWatchDimensionConfiguration(),
    ];
    $request->requestBody->eventDestination->enabled = false;
    $request->requestBody->eventDestination->kinesisFirehoseDestination = new KinesisFirehoseDestination();
    $request->requestBody->eventDestination->kinesisFirehoseDestination->deliveryStreamArn = 'velit';
    $request->requestBody->eventDestination->kinesisFirehoseDestination->iamRoleArn = 'voluptatibus';
    $request->requestBody->eventDestination->matchingEventTypes = [
        EventTypeEnum::SUBSCRIPTION,
        EventTypeEnum::SEND,
    ];
    $request->requestBody->eventDestination->pinpointDestination = new PinpointDestination();
    $request->requestBody->eventDestination->pinpointDestination->applicationArn = 'ea';
    $request->requestBody->eventDestination->snsDestination = new SnsDestination();
    $request->requestBody->eventDestination->snsDestination->topicArn = 'quaerat';
    $request->xAmzAlgorithm = 'consequuntur';
    $request->xAmzContentSha256 = 'repellendus';
    $request->xAmzCredential = 'officia';
    $request->xAmzDate = 'maxime';
    $request->xAmzSecurityToken = 'dignissimos';
    $request->xAmzSignature = 'officia';
    $request->xAmzSignedHeaders = 'asperiores';

    $response = $sdk->sdk->updateConfigurationSetEventDestination($request);

    if ($response->updateConfigurationSetEventDestinationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateContact

Updates a contact's preferences for a list. It is not necessary to specify all existing topic preferences in the TopicPreferences object, just the ones that need updating.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateContactRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateContactRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\TopicPreference;
use \OpenAPI\OpenAPI\Models\Shared\SubscriptionStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateContactRequest();
    $request->contactListName = 'nemo';
    $request->emailAddress = 'quae';
    $request->requestBody = new UpdateContactRequestBody();
    $request->requestBody->attributesData = 'quaerat';
    $request->requestBody->topicPreferences = [
        new TopicPreference(),
        new TopicPreference(),
        new TopicPreference(),
        new TopicPreference(),
    ];
    $request->requestBody->unsubscribeAll = false;
    $request->xAmzAlgorithm = 'quod';
    $request->xAmzContentSha256 = 'labore';
    $request->xAmzCredential = 'ab';
    $request->xAmzDate = 'adipisci';
    $request->xAmzSecurityToken = 'fuga';
    $request->xAmzSignature = 'id';
    $request->xAmzSignedHeaders = 'suscipit';

    $response = $sdk->sdk->updateContact($request);

    if ($response->updateContactResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateContactList

Updates contact list metadata. This operation does a complete replacement.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateContactListRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateContactListRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\Topic;
use \OpenAPI\OpenAPI\Models\Shared\SubscriptionStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateContactListRequest();
    $request->contactListName = 'velit';
    $request->requestBody = new UpdateContactListRequestBody();
    $request->requestBody->description = 'culpa';
    $request->requestBody->topics = [
        new Topic(),
        new Topic(),
        new Topic(),
    ];
    $request->xAmzAlgorithm = 'recusandae';
    $request->xAmzContentSha256 = 'totam';
    $request->xAmzCredential = 'fugiat';
    $request->xAmzDate = 'vel';
    $request->xAmzSecurityToken = 'ducimus';
    $request->xAmzSignature = 'quos';
    $request->xAmzSignedHeaders = 'vel';

    $response = $sdk->sdk->updateContactList($request);

    if ($response->updateContactListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateCustomVerificationEmailTemplate

<p>Updates an existing custom verification email template.</p> <p>For more information about custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/dg/creating-identities.html#send-email-verify-address-custom">Using custom verification email templates</a> in the <i>Amazon SES Developer Guide</i>.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateCustomVerificationEmailTemplateRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateCustomVerificationEmailTemplateRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateCustomVerificationEmailTemplateRequest();
    $request->requestBody = new UpdateCustomVerificationEmailTemplateRequestBody();
    $request->requestBody->failureRedirectionURL = 'labore';
    $request->requestBody->fromEmailAddress = 'possimus';
    $request->requestBody->successRedirectionURL = 'facilis';
    $request->requestBody->templateContent = 'cum';
    $request->requestBody->templateSubject = 'commodi';
    $request->templateName = 'in';
    $request->xAmzAlgorithm = 'corporis';
    $request->xAmzContentSha256 = 'reiciendis';
    $request->xAmzCredential = 'assumenda';
    $request->xAmzDate = 'nemo';
    $request->xAmzSecurityToken = 'recusandae';
    $request->xAmzSignature = 'aliquid';
    $request->xAmzSignedHeaders = 'aperiam';

    $response = $sdk->sdk->updateCustomVerificationEmailTemplate($request);

    if ($response->updateCustomVerificationEmailTemplateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateEmailIdentityPolicy

<p>Updates the specified sending authorization policy for the given identity (an email address or a domain). This API returns successfully even if a policy with the specified name does not exist.</p> <note> <p>This API is for the identity owner only. If you have not verified the identity, this API will return an error.</p> </note> <p>Sending authorization is a feature that enables an identity owner to authorize other senders to use its identities. For information about using sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateEmailIdentityPolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateEmailIdentityPolicyRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateEmailIdentityPolicyRequest();
    $request->emailIdentity = 'cum';
    $request->policyName = 'consectetur';
    $request->requestBody = new UpdateEmailIdentityPolicyRequestBody();
    $request->requestBody->policy = 'in';
    $request->xAmzAlgorithm = 'exercitationem';
    $request->xAmzContentSha256 = 'earum';
    $request->xAmzCredential = 'facere';
    $request->xAmzDate = 'numquam';
    $request->xAmzSecurityToken = 'doloribus';
    $request->xAmzSignature = 'suscipit';
    $request->xAmzSignedHeaders = 'reiciendis';

    $response = $sdk->sdk->updateEmailIdentityPolicy($request);

    if ($response->updateEmailIdentityPolicyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateEmailTemplate

<p>Updates an email template. Email templates enable you to send personalized email to one or more destinations in a single API operation. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-personalized-email-api.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateEmailTemplateRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateEmailTemplateRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateEmailTemplateRequestBodyTemplateContent;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateEmailTemplateRequest();
    $request->requestBody = new UpdateEmailTemplateRequestBody();
    $request->requestBody->templateContent = new UpdateEmailTemplateRequestBodyTemplateContent();
    $request->requestBody->templateContent->html = 'quidem';
    $request->requestBody->templateContent->subject = 'saepe';
    $request->requestBody->templateContent->text = 'necessitatibus';
    $request->templateName = 'dolore';
    $request->xAmzAlgorithm = 'sunt';
    $request->xAmzContentSha256 = 'asperiores';
    $request->xAmzCredential = 'adipisci';
    $request->xAmzDate = 'non';
    $request->xAmzSecurityToken = 'amet';
    $request->xAmzSignature = 'beatae';
    $request->xAmzSignedHeaders = 'dignissimos';

    $response = $sdk->sdk->updateEmailTemplate($request);

    if ($response->updateEmailTemplateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
