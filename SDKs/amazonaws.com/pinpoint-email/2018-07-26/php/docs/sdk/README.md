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
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateConfigurationSetRequestBodyTrackingOptions;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateConfigurationSetRequest();
    $request->requestBody = new CreateConfigurationSetRequestBody();
    $request->requestBody->configurationSetName = 'debitis';
    $request->requestBody->deliveryOptions = new CreateConfigurationSetRequestBodyDeliveryOptions();
    $request->requestBody->deliveryOptions->sendingPoolName = 'ipsa';
    $request->requestBody->deliveryOptions->tlsPolicy = TlsPolicyEnum::OPTIONAL;
    $request->requestBody->reputationOptions = new CreateConfigurationSetRequestBodyReputationOptions();
    $request->requestBody->reputationOptions->lastFreshStart = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-14T01:03:07.567Z');
    $request->requestBody->reputationOptions->reputationMetricsEnabled = false;
    $request->requestBody->sendingOptions = new CreateConfigurationSetRequestBodySendingOptions();
    $request->requestBody->sendingOptions->sendingEnabled = false;
    $request->requestBody->tags = [
        new Tag(),
        new Tag(),
    ];
    $request->requestBody->trackingOptions = new CreateConfigurationSetRequestBodyTrackingOptions();
    $request->requestBody->trackingOptions->customRedirectDomain = 'minus';
    $request->xAmzAlgorithm = 'placeat';
    $request->xAmzContentSha256 = 'voluptatum';
    $request->xAmzCredential = 'iusto';
    $request->xAmzDate = 'excepturi';
    $request->xAmzSecurityToken = 'nisi';
    $request->xAmzSignature = 'recusandae';
    $request->xAmzSignedHeaders = 'temporibus';

    $response = $sdk->sdk->createConfigurationSet($request);

    if ($response->createConfigurationSetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createConfigurationSetEventDestination

<p>Create an event destination. In Amazon Pinpoint, <i>events</i> include message sends, deliveries, opens, clicks, bounces, and complaints. <i>Event destinations</i> are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.</p> <p>A single configuration set can include more than one event destination.</p>

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
    $request->configurationSetName = 'ab';
    $request->requestBody = new CreateConfigurationSetEventDestinationRequestBody();
    $request->requestBody->eventDestination = new CreateConfigurationSetEventDestinationRequestBodyEventDestination();
    $request->requestBody->eventDestination->cloudWatchDestination = new CloudWatchDestination();
    $request->requestBody->eventDestination->cloudWatchDestination->dimensionConfigurations = [
        new CloudWatchDimensionConfiguration(),
        new CloudWatchDimensionConfiguration(),
    ];
    $request->requestBody->eventDestination->enabled = false;
    $request->requestBody->eventDestination->kinesisFirehoseDestination = new KinesisFirehoseDestination();
    $request->requestBody->eventDestination->kinesisFirehoseDestination->deliveryStreamArn = 'veritatis';
    $request->requestBody->eventDestination->kinesisFirehoseDestination->iamRoleArn = 'deserunt';
    $request->requestBody->eventDestination->matchingEventTypes = [
        EventTypeEnum::BOUNCE,
    ];
    $request->requestBody->eventDestination->pinpointDestination = new PinpointDestination();
    $request->requestBody->eventDestination->pinpointDestination->applicationArn = 'repellendus';
    $request->requestBody->eventDestination->snsDestination = new SnsDestination();
    $request->requestBody->eventDestination->snsDestination->topicArn = 'sapiente';
    $request->requestBody->eventDestinationName = 'quo';
    $request->xAmzAlgorithm = 'odit';
    $request->xAmzContentSha256 = 'at';
    $request->xAmzCredential = 'at';
    $request->xAmzDate = 'maiores';
    $request->xAmzSecurityToken = 'molestiae';
    $request->xAmzSignature = 'quod';
    $request->xAmzSignedHeaders = 'quod';

    $response = $sdk->sdk->createConfigurationSetEventDestination($request);

    if ($response->createConfigurationSetEventDestinationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createDedicatedIpPool

Create a new pool of dedicated IP addresses. A pool can include one or more dedicated IP addresses that are associated with your Amazon Pinpoint account. You can associate a pool with a configuration set. When you send an email that uses that configuration set, Amazon Pinpoint sends it using only the IP addresses in the associated pool.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateDedicatedIpPoolRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateDedicatedIpPoolRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\Tag;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateDedicatedIpPoolRequest();
    $request->requestBody = new CreateDedicatedIpPoolRequestBody();
    $request->requestBody->poolName = 'esse';
    $request->requestBody->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'porro';
    $request->xAmzContentSha256 = 'dolorum';
    $request->xAmzCredential = 'dicta';
    $request->xAmzDate = 'nam';
    $request->xAmzSecurityToken = 'officia';
    $request->xAmzSignature = 'occaecati';
    $request->xAmzSignedHeaders = 'fugit';

    $response = $sdk->sdk->createDedicatedIpPool($request);

    if ($response->createDedicatedIpPoolResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createDeliverabilityTestReport

Create a new predictive inbox placement test. Predictive inbox placement tests can help you predict how your messages will be handled by various email providers around the world. When you perform a predictive inbox placement test, you provide a sample message that contains the content that you plan to send to your customers. Amazon Pinpoint then sends that message to special email addresses spread across several major email providers. After about 24 hours, the test is complete, and you can use the <code>GetDeliverabilityTestReport</code> operation to view the results of the test.

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
    $request->requestBody->content->raw->data = 'deleniti';
    $request->requestBody->content->simple = new Message();
    $request->requestBody->content->simple->body = new Body();
    $request->requestBody->content->simple->body->html = new Content();
    $request->requestBody->content->simple->body->html->charset = 'hic';
    $request->requestBody->content->simple->body->html->data = 'optio';
    $request->requestBody->content->simple->body->text = new Content();
    $request->requestBody->content->simple->body->text->charset = 'totam';
    $request->requestBody->content->simple->body->text->data = 'beatae';
    $request->requestBody->content->simple->subject = new Content();
    $request->requestBody->content->simple->subject->charset = 'commodi';
    $request->requestBody->content->simple->subject->data = 'molestiae';
    $request->requestBody->content->template = new Template();
    $request->requestBody->content->template->templateArn = 'modi';
    $request->requestBody->content->template->templateData = 'qui';
    $request->requestBody->fromEmailAddress = 'impedit';
    $request->requestBody->reportName = 'cum';
    $request->requestBody->tags = [
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'ipsum';
    $request->xAmzContentSha256 = 'excepturi';
    $request->xAmzCredential = 'aspernatur';
    $request->xAmzDate = 'perferendis';
    $request->xAmzSecurityToken = 'ad';
    $request->xAmzSignature = 'natus';
    $request->xAmzSignedHeaders = 'sed';

    $response = $sdk->sdk->createDeliverabilityTestReport($request);

    if ($response->createDeliverabilityTestReportResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createEmailIdentity

<p>Verifies an email identity for use with Amazon Pinpoint. In Amazon Pinpoint, an identity is an email address or domain that you use when you send email. Before you can use an identity to send email with Amazon Pinpoint, you first have to verify it. By verifying an address, you demonstrate that you're the owner of the address, and that you've given Amazon Pinpoint permission to send email from the address.</p> <p>When you verify an email address, Amazon Pinpoint sends an email to the address. Your email address is verified as soon as you follow the link in the verification email. </p> <p>When you verify a domain, this operation provides a set of DKIM tokens, which you can convert into CNAME tokens. You add these CNAME tokens to the DNS configuration for your domain. Your domain is verified when Amazon Pinpoint detects these records in the DNS configuration for your domain. It usually takes around 72 hours to complete the domain verification process.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateEmailIdentityRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateEmailIdentityRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\Tag;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateEmailIdentityRequest();
    $request->requestBody = new CreateEmailIdentityRequestBody();
    $request->requestBody->emailIdentity = 'iste';
    $request->requestBody->tags = [
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'natus';
    $request->xAmzContentSha256 = 'laboriosam';
    $request->xAmzCredential = 'hic';
    $request->xAmzDate = 'saepe';
    $request->xAmzSecurityToken = 'fuga';
    $request->xAmzSignature = 'in';
    $request->xAmzSignedHeaders = 'corporis';

    $response = $sdk->sdk->createEmailIdentity($request);

    if ($response->createEmailIdentityResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteConfigurationSet

<p>Delete an existing configuration set.</p> <p>In Amazon Pinpoint, <i>configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p>

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
    $request->configurationSetName = 'iste';
    $request->xAmzAlgorithm = 'iure';
    $request->xAmzContentSha256 = 'saepe';
    $request->xAmzCredential = 'quidem';
    $request->xAmzDate = 'architecto';
    $request->xAmzSecurityToken = 'ipsa';
    $request->xAmzSignature = 'reiciendis';
    $request->xAmzSignedHeaders = 'est';

    $response = $sdk->sdk->deleteConfigurationSet($request);

    if ($response->deleteConfigurationSetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteConfigurationSetEventDestination

<p>Delete an event destination.</p> <p>In Amazon Pinpoint, <i>events</i> include message sends, deliveries, opens, clicks, bounces, and complaints. <i>Event destinations</i> are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.</p>

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
    $request->configurationSetName = 'mollitia';
    $request->eventDestinationName = 'laborum';
    $request->xAmzAlgorithm = 'dolores';
    $request->xAmzContentSha256 = 'dolorem';
    $request->xAmzCredential = 'corporis';
    $request->xAmzDate = 'explicabo';
    $request->xAmzSecurityToken = 'nobis';
    $request->xAmzSignature = 'enim';
    $request->xAmzSignedHeaders = 'omnis';

    $response = $sdk->sdk->deleteConfigurationSetEventDestination($request);

    if ($response->deleteConfigurationSetEventDestinationResponse !== null) {
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
    $request->poolName = 'nemo';
    $request->xAmzAlgorithm = 'minima';
    $request->xAmzContentSha256 = 'excepturi';
    $request->xAmzCredential = 'accusantium';
    $request->xAmzDate = 'iure';
    $request->xAmzSecurityToken = 'culpa';
    $request->xAmzSignature = 'doloribus';
    $request->xAmzSignedHeaders = 'sapiente';

    $response = $sdk->sdk->deleteDedicatedIpPool($request);

    if ($response->deleteDedicatedIpPoolResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteEmailIdentity

Deletes an email identity that you previously verified for use with Amazon Pinpoint. An identity can be either an email address or a domain name.

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
    $request->emailIdentity = 'architecto';
    $request->xAmzAlgorithm = 'mollitia';
    $request->xAmzContentSha256 = 'dolorem';
    $request->xAmzCredential = 'culpa';
    $request->xAmzDate = 'consequuntur';
    $request->xAmzSecurityToken = 'repellat';
    $request->xAmzSignature = 'mollitia';
    $request->xAmzSignedHeaders = 'occaecati';

    $response = $sdk->sdk->deleteEmailIdentity($request);

    if ($response->deleteEmailIdentityResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAccount

Obtain information about the email-sending status and capabilities of your Amazon Pinpoint account in the current AWS Region.

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
    $request->xAmzAlgorithm = 'numquam';
    $request->xAmzContentSha256 = 'commodi';
    $request->xAmzCredential = 'quam';
    $request->xAmzDate = 'molestiae';
    $request->xAmzSecurityToken = 'velit';
    $request->xAmzSignature = 'error';
    $request->xAmzSignedHeaders = 'quia';

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
        'vitae',
        'laborum',
    ];
    $request->xAmzAlgorithm = 'animi';
    $request->xAmzContentSha256 = 'enim';
    $request->xAmzCredential = 'odit';
    $request->xAmzDate = 'quo';
    $request->xAmzSecurityToken = 'sequi';
    $request->xAmzSignature = 'tenetur';
    $request->xAmzSignedHeaders = 'ipsam';

    $response = $sdk->sdk->getBlacklistReports($request);

    if ($response->getBlacklistReportsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getConfigurationSet

<p>Get information about an existing configuration set, including the dedicated IP pool that it's associated with, whether or not it's enabled for sending email, and more.</p> <p>In Amazon Pinpoint, <i>configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p>

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
    $request->configurationSetName = 'id';
    $request->xAmzAlgorithm = 'possimus';
    $request->xAmzContentSha256 = 'aut';
    $request->xAmzCredential = 'quasi';
    $request->xAmzDate = 'error';
    $request->xAmzSecurityToken = 'temporibus';
    $request->xAmzSignature = 'laborum';
    $request->xAmzSignedHeaders = 'quasi';

    $response = $sdk->sdk->getConfigurationSet($request);

    if ($response->getConfigurationSetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getConfigurationSetEventDestinations

<p>Retrieve a list of event destinations that are associated with a configuration set.</p> <p>In Amazon Pinpoint, <i>events</i> include message sends, deliveries, opens, clicks, bounces, and complaints. <i>Event destinations</i> are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.</p>

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
    $request->configurationSetName = 'reiciendis';
    $request->xAmzAlgorithm = 'voluptatibus';
    $request->xAmzContentSha256 = 'vero';
    $request->xAmzCredential = 'nihil';
    $request->xAmzDate = 'praesentium';
    $request->xAmzSecurityToken = 'voluptatibus';
    $request->xAmzSignature = 'ipsa';
    $request->xAmzSignedHeaders = 'omnis';

    $response = $sdk->sdk->getConfigurationSetEventDestinations($request);

    if ($response->getConfigurationSetEventDestinationsResponse !== null) {
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
    $request->ip = 'voluptate';
    $request->xAmzAlgorithm = 'cum';
    $request->xAmzContentSha256 = 'perferendis';
    $request->xAmzCredential = 'doloremque';
    $request->xAmzDate = 'reprehenderit';
    $request->xAmzSecurityToken = 'ut';
    $request->xAmzSignature = 'maiores';
    $request->xAmzSignedHeaders = 'dicta';

    $response = $sdk->sdk->getDedicatedIp($request);

    if ($response->getDedicatedIpResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDedicatedIps

List the dedicated IP addresses that are associated with your Amazon Pinpoint account.

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
    $request->nextToken = 'corporis';
    $request->pageSize = 296140;
    $request->poolName = 'iusto';
    $request->xAmzAlgorithm = 'dicta';
    $request->xAmzContentSha256 = 'harum';
    $request->xAmzCredential = 'enim';
    $request->xAmzDate = 'accusamus';
    $request->xAmzSecurityToken = 'commodi';
    $request->xAmzSignature = 'repudiandae';
    $request->xAmzSignedHeaders = 'quae';

    $response = $sdk->sdk->getDedicatedIps($request);

    if ($response->getDedicatedIpsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeliverabilityDashboardOptions

<p>Retrieve information about the status of the Deliverability dashboard for your Amazon Pinpoint account. When the Deliverability dashboard is enabled, you gain access to reputation, deliverability, and other metrics for the domains that you use to send email using Amazon Pinpoint. You also gain the ability to perform predictive inbox placement tests.</p> <p>When you use the Deliverability dashboard, you pay a monthly subscription charge, in addition to any other fees that you accrue by using Amazon Pinpoint. For more information about the features and cost of a Deliverability dashboard subscription, see <a href="http://aws.amazon.com/pinpoint/pricing/">Amazon Pinpoint Pricing</a>.</p>

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
    $request->xAmzAlgorithm = 'ipsum';
    $request->xAmzContentSha256 = 'quidem';
    $request->xAmzCredential = 'molestias';
    $request->xAmzDate = 'excepturi';
    $request->xAmzSecurityToken = 'pariatur';
    $request->xAmzSignature = 'modi';
    $request->xAmzSignedHeaders = 'praesentium';

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
    $request->reportId = 'rem';
    $request->xAmzAlgorithm = 'voluptates';
    $request->xAmzContentSha256 = 'quasi';
    $request->xAmzCredential = 'repudiandae';
    $request->xAmzDate = 'sint';
    $request->xAmzSecurityToken = 'veritatis';
    $request->xAmzSignature = 'itaque';
    $request->xAmzSignedHeaders = 'incidunt';

    $response = $sdk->sdk->getDeliverabilityTestReport($request);

    if ($response->getDeliverabilityTestReportResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDomainDeliverabilityCampaign

Retrieve all the deliverability data for a specific campaign. This data is available for a campaign only if the campaign sent email by using a domain that the Deliverability dashboard is enabled for (<code>PutDeliverabilityDashboardOption</code> operation).

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
    $request->campaignId = 'enim';
    $request->xAmzAlgorithm = 'consequatur';
    $request->xAmzContentSha256 = 'est';
    $request->xAmzCredential = 'quibusdam';
    $request->xAmzDate = 'explicabo';
    $request->xAmzSecurityToken = 'deserunt';
    $request->xAmzSignature = 'distinctio';
    $request->xAmzSignedHeaders = 'quibusdam';

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
    $request->domain = 'labore';
    $request->endDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-26T03:14:36.345Z');
    $request->startDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-31T22:08:47.731Z');
    $request->xAmzAlgorithm = 'quos';
    $request->xAmzContentSha256 = 'perferendis';
    $request->xAmzCredential = 'magni';
    $request->xAmzDate = 'assumenda';
    $request->xAmzSecurityToken = 'ipsam';
    $request->xAmzSignature = 'alias';
    $request->xAmzSignedHeaders = 'fugit';

    $response = $sdk->sdk->getDomainStatisticsReport($request);

    if ($response->getDomainStatisticsReportResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEmailIdentity

Provides information about a specific identity associated with your Amazon Pinpoint account, including the identity's verification status, its DKIM authentication status, and its custom Mail-From settings.

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
    $request->emailIdentity = 'dolorum';
    $request->xAmzAlgorithm = 'excepturi';
    $request->xAmzContentSha256 = 'tempora';
    $request->xAmzCredential = 'facilis';
    $request->xAmzDate = 'tempore';
    $request->xAmzSecurityToken = 'labore';
    $request->xAmzSignature = 'delectus';
    $request->xAmzSignedHeaders = 'eum';

    $response = $sdk->sdk->getEmailIdentity($request);

    if ($response->getEmailIdentityResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listConfigurationSets

<p>List all of the configuration sets associated with your Amazon Pinpoint account in the current region.</p> <p>In Amazon Pinpoint, <i>configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p>

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
    $request->nextToken = 'non';
    $request->pageSize = 756107;
    $request->xAmzAlgorithm = 'sint';
    $request->xAmzContentSha256 = 'aliquid';
    $request->xAmzCredential = 'provident';
    $request->xAmzDate = 'necessitatibus';
    $request->xAmzSecurityToken = 'sint';
    $request->xAmzSignature = 'officia';
    $request->xAmzSignedHeaders = 'dolor';

    $response = $sdk->sdk->listConfigurationSets($request);

    if ($response->listConfigurationSetsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listDedicatedIpPools

List all of the dedicated IP pools that exist in your Amazon Pinpoint account in the current AWS Region.

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
    $request->nextToken = 'debitis';
    $request->pageSize = 952749;
    $request->xAmzAlgorithm = 'dolorum';
    $request->xAmzContentSha256 = 'in';
    $request->xAmzCredential = 'in';
    $request->xAmzDate = 'illum';
    $request->xAmzSecurityToken = 'maiores';
    $request->xAmzSignature = 'rerum';
    $request->xAmzSignedHeaders = 'dicta';

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
    $request->nextToken = 'magnam';
    $request->pageSize = 767024;
    $request->xAmzAlgorithm = 'facere';
    $request->xAmzContentSha256 = 'ea';
    $request->xAmzCredential = 'aliquid';
    $request->xAmzDate = 'laborum';
    $request->xAmzSecurityToken = 'accusamus';
    $request->xAmzSignature = 'non';
    $request->xAmzSignedHeaders = 'occaecati';

    $response = $sdk->sdk->listDeliverabilityTestReports($request);

    if ($response->listDeliverabilityTestReportsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listDomainDeliverabilityCampaigns

Retrieve deliverability data for all the campaigns that used a specific domain to send email during a specified time range. This data is available for a domain only if you enabled the Deliverability dashboard (<code>PutDeliverabilityDashboardOption</code> operation) for the domain.

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
    $request->endDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-13T03:59:53.583Z');
    $request->nextToken = 'delectus';
    $request->pageSize = 692532;
    $request->startDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-07-20T13:32:41.687Z');
    $request->subscribedDomain = 'id';
    $request->xAmzAlgorithm = 'blanditiis';
    $request->xAmzContentSha256 = 'deleniti';
    $request->xAmzCredential = 'sapiente';
    $request->xAmzDate = 'amet';
    $request->xAmzSecurityToken = 'deserunt';
    $request->xAmzSignature = 'nisi';
    $request->xAmzSignedHeaders = 'vel';

    $response = $sdk->sdk->listDomainDeliverabilityCampaigns($request);

    if ($response->listDomainDeliverabilityCampaignsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listEmailIdentities

Returns a list of all of the email identities that are associated with your Amazon Pinpoint account. An identity can be either an email address or a domain. This operation returns identities that are verified as well as those that aren't.

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
    $request->nextToken = 'natus';
    $request->pageSize = 606393;
    $request->xAmzAlgorithm = 'molestiae';
    $request->xAmzContentSha256 = 'perferendis';
    $request->xAmzCredential = 'nihil';
    $request->xAmzDate = 'magnam';
    $request->xAmzSecurityToken = 'distinctio';
    $request->xAmzSignature = 'id';
    $request->xAmzSignedHeaders = 'labore';

    $response = $sdk->sdk->listEmailIdentities($request);

    if ($response->listEmailIdentitiesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTagsForResource

Retrieve a list of the tags (keys and values) that are associated with a specified resource. A <i>tag</i> is a label that you optionally define and associate with a resource in Amazon Pinpoint. Each tag consists of a required <i>tag key</i> and an optional associated <i>tag value</i>. A tag key is a general label that acts as a category for more specific tag values. A tag value acts as a descriptor within a tag key.

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
    $request->resourceArn = 'labore';
    $request->xAmzAlgorithm = 'suscipit';
    $request->xAmzContentSha256 = 'natus';
    $request->xAmzCredential = 'nobis';
    $request->xAmzDate = 'eum';
    $request->xAmzSecurityToken = 'vero';
    $request->xAmzSignature = 'aspernatur';
    $request->xAmzSignedHeaders = 'architecto';

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
    $request->xAmzAlgorithm = 'magnam';
    $request->xAmzContentSha256 = 'et';
    $request->xAmzCredential = 'excepturi';
    $request->xAmzDate = 'ullam';
    $request->xAmzSecurityToken = 'provident';
    $request->xAmzSignature = 'quos';
    $request->xAmzSignedHeaders = 'sint';

    $response = $sdk->sdk->putAccountDedicatedIpWarmupAttributes($request);

    if ($response->putAccountDedicatedIpWarmupAttributesResponse !== null) {
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
    $request->xAmzAlgorithm = 'accusantium';
    $request->xAmzContentSha256 = 'mollitia';
    $request->xAmzCredential = 'reiciendis';
    $request->xAmzDate = 'mollitia';
    $request->xAmzSecurityToken = 'ad';
    $request->xAmzSignature = 'eum';
    $request->xAmzSignedHeaders = 'dolor';

    $response = $sdk->sdk->putAccountSendingAttributes($request);

    if ($response->putAccountSendingAttributesResponse !== null) {
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
    $request->configurationSetName = 'necessitatibus';
    $request->requestBody = new PutConfigurationSetDeliveryOptionsRequestBody();
    $request->requestBody->sendingPoolName = 'odit';
    $request->requestBody->tlsPolicy = PutConfigurationSetDeliveryOptionsRequestBodyTlsPolicyEnum::REQUIRE;
    $request->xAmzAlgorithm = 'quasi';
    $request->xAmzContentSha256 = 'iure';
    $request->xAmzCredential = 'doloribus';
    $request->xAmzDate = 'debitis';
    $request->xAmzSecurityToken = 'eius';
    $request->xAmzSignature = 'maxime';
    $request->xAmzSignedHeaders = 'deleniti';

    $response = $sdk->sdk->putConfigurationSetDeliveryOptions($request);

    if ($response->putConfigurationSetDeliveryOptionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putConfigurationSetReputationOptions

Enable or disable collection of reputation metrics for emails that you send using a particular configuration set in a specific AWS Region.

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
    $request->configurationSetName = 'facilis';
    $request->requestBody = new PutConfigurationSetReputationOptionsRequestBody();
    $request->requestBody->reputationMetricsEnabled = false;
    $request->xAmzAlgorithm = 'in';
    $request->xAmzContentSha256 = 'architecto';
    $request->xAmzCredential = 'architecto';
    $request->xAmzDate = 'repudiandae';
    $request->xAmzSecurityToken = 'ullam';
    $request->xAmzSignature = 'expedita';
    $request->xAmzSignedHeaders = 'nihil';

    $response = $sdk->sdk->putConfigurationSetReputationOptions($request);

    if ($response->putConfigurationSetReputationOptionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putConfigurationSetSendingOptions

Enable or disable email sending for messages that use a particular configuration set in a specific AWS Region.

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
    $request->configurationSetName = 'repellat';
    $request->requestBody = new PutConfigurationSetSendingOptionsRequestBody();
    $request->requestBody->sendingEnabled = false;
    $request->xAmzAlgorithm = 'quibusdam';
    $request->xAmzContentSha256 = 'sed';
    $request->xAmzCredential = 'saepe';
    $request->xAmzDate = 'pariatur';
    $request->xAmzSecurityToken = 'accusantium';
    $request->xAmzSignature = 'consequuntur';
    $request->xAmzSignedHeaders = 'praesentium';

    $response = $sdk->sdk->putConfigurationSetSendingOptions($request);

    if ($response->putConfigurationSetSendingOptionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putConfigurationSetTrackingOptions

Specify a custom domain to use for open and click tracking elements in email that you send using Amazon Pinpoint.

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
    $request->configurationSetName = 'natus';
    $request->requestBody = new PutConfigurationSetTrackingOptionsRequestBody();
    $request->requestBody->customRedirectDomain = 'magni';
    $request->xAmzAlgorithm = 'sunt';
    $request->xAmzContentSha256 = 'quo';
    $request->xAmzCredential = 'illum';
    $request->xAmzDate = 'pariatur';
    $request->xAmzSecurityToken = 'maxime';
    $request->xAmzSignature = 'ea';
    $request->xAmzSignedHeaders = 'excepturi';

    $response = $sdk->sdk->putConfigurationSetTrackingOptions($request);

    if ($response->putConfigurationSetTrackingOptionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putDedicatedIpInPool

<p>Move a dedicated IP address to an existing dedicated IP pool.</p> <note> <p>The dedicated IP address that you specify must already exist, and must be associated with your Amazon Pinpoint account. </p> <p>The dedicated IP pool you specify must already exist. You can create a new pool by using the <code>CreateDedicatedIpPool</code> operation.</p> </note>

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
    $request->ip = 'odit';
    $request->requestBody = new PutDedicatedIpInPoolRequestBody();
    $request->requestBody->destinationPoolName = 'ea';
    $request->xAmzAlgorithm = 'accusantium';
    $request->xAmzContentSha256 = 'ab';
    $request->xAmzCredential = 'maiores';
    $request->xAmzDate = 'quidem';
    $request->xAmzSecurityToken = 'ipsam';
    $request->xAmzSignature = 'voluptate';
    $request->xAmzSignedHeaders = 'autem';

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
    $request->ip = 'nam';
    $request->requestBody = new PutDedicatedIpWarmupAttributesRequestBody();
    $request->requestBody->warmupPercentage = 50588;
    $request->xAmzAlgorithm = 'pariatur';
    $request->xAmzContentSha256 = 'nemo';
    $request->xAmzCredential = 'voluptatibus';
    $request->xAmzDate = 'perferendis';
    $request->xAmzSecurityToken = 'fugiat';
    $request->xAmzSignature = 'amet';
    $request->xAmzSignedHeaders = 'aut';

    $response = $sdk->sdk->putDedicatedIpWarmupAttributes($request);

    if ($response->putDedicatedIpWarmupAttributesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putDeliverabilityDashboardOption

<p>Enable or disable the Deliverability dashboard for your Amazon Pinpoint account. When you enable the Deliverability dashboard, you gain access to reputation, deliverability, and other metrics for the domains that you use to send email using Amazon Pinpoint. You also gain the ability to perform predictive inbox placement tests.</p> <p>When you use the Deliverability dashboard, you pay a monthly subscription charge, in addition to any other fees that you accrue by using Amazon Pinpoint. For more information about the features and cost of a Deliverability dashboard subscription, see <a href="http://aws.amazon.com/pinpoint/pricing/">Amazon Pinpoint Pricing</a>.</p>

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
    $request->xAmzAlgorithm = 'corporis';
    $request->xAmzContentSha256 = 'hic';
    $request->xAmzCredential = 'libero';
    $request->xAmzDate = 'nobis';
    $request->xAmzSecurityToken = 'dolores';
    $request->xAmzSignature = 'quis';
    $request->xAmzSignedHeaders = 'totam';

    $response = $sdk->sdk->putDeliverabilityDashboardOption($request);

    if ($response->putDeliverabilityDashboardOptionResponse !== null) {
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
    $request->emailIdentity = 'dignissimos';
    $request->requestBody = new PutEmailIdentityDkimAttributesRequestBody();
    $request->requestBody->signingEnabled = false;
    $request->xAmzAlgorithm = 'eaque';
    $request->xAmzContentSha256 = 'quis';
    $request->xAmzCredential = 'nesciunt';
    $request->xAmzDate = 'eos';
    $request->xAmzSecurityToken = 'perferendis';
    $request->xAmzSignature = 'dolores';
    $request->xAmzSignedHeaders = 'minus';

    $response = $sdk->sdk->putEmailIdentityDkimAttributes($request);

    if ($response->putEmailIdentityDkimAttributesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putEmailIdentityFeedbackAttributes

<p>Used to enable or disable feedback forwarding for an identity. This setting determines what happens when an identity is used to send an email that results in a bounce or complaint event.</p> <p>When you enable feedback forwarding, Amazon Pinpoint sends you email notifications when bounce or complaint events occur. Amazon Pinpoint sends this notification to the address that you specified in the Return-Path header of the original email.</p> <p>When you disable feedback forwarding, Amazon Pinpoint sends notifications through other mechanisms, such as by notifying an Amazon SNS topic. You're required to have a method of tracking bounces and complaints. If you haven't set up another mechanism for receiving bounce or complaint notifications, Amazon Pinpoint sends an email notification when these events occur (even if this setting is disabled).</p>

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
    $request->emailIdentity = 'quam';
    $request->requestBody = new PutEmailIdentityFeedbackAttributesRequestBody();
    $request->requestBody->emailForwardingEnabled = false;
    $request->xAmzAlgorithm = 'dolor';
    $request->xAmzContentSha256 = 'vero';
    $request->xAmzCredential = 'nostrum';
    $request->xAmzDate = 'hic';
    $request->xAmzSecurityToken = 'recusandae';
    $request->xAmzSignature = 'omnis';
    $request->xAmzSignedHeaders = 'facilis';

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
    $request->emailIdentity = 'perspiciatis';
    $request->requestBody = new PutEmailIdentityMailFromAttributesRequestBody();
    $request->requestBody->behaviorOnMxFailure = PutEmailIdentityMailFromAttributesRequestBodyBehaviorOnMxFailureEnum::USE_DEFAULT_VALUE;
    $request->requestBody->mailFromDomain = 'porro';
    $request->xAmzAlgorithm = 'consequuntur';
    $request->xAmzContentSha256 = 'blanditiis';
    $request->xAmzCredential = 'error';
    $request->xAmzDate = 'eaque';
    $request->xAmzSecurityToken = 'occaecati';
    $request->xAmzSignature = 'rerum';
    $request->xAmzSignedHeaders = 'adipisci';

    $response = $sdk->sdk->putEmailIdentityMailFromAttributes($request);

    if ($response->putEmailIdentityMailFromAttributesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sendEmail

<p>Sends an email message. You can use the Amazon Pinpoint Email API to send two types of messages:</p> <ul> <li> <p> <b>Simple</b> – A standard email message. When you create this type of message, you specify the sender, the recipient, and the message body, and Amazon Pinpoint assembles the message for you.</p> </li> <li> <p> <b>Raw</b> – A raw, MIME-formatted email message. When you send this type of email, you have to specify all of the message headers, as well as the message body. You can use this message type to send messages that contain attachments. The message that you specify has to be a valid MIME message.</p> </li> </ul>

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

$sdk = SDK::builder()
    ->build();

try {
    $request = new SendEmailRequest();
    $request->requestBody = new SendEmailRequestBody();
    $request->requestBody->configurationSetName = 'asperiores';
    $request->requestBody->content = new SendEmailRequestBodyContent();
    $request->requestBody->content->raw = new RawMessage();
    $request->requestBody->content->raw->data = 'earum';
    $request->requestBody->content->simple = new Message();
    $request->requestBody->content->simple->body = new Body();
    $request->requestBody->content->simple->body->html = new Content();
    $request->requestBody->content->simple->body->html->charset = 'modi';
    $request->requestBody->content->simple->body->html->data = 'iste';
    $request->requestBody->content->simple->body->text = new Content();
    $request->requestBody->content->simple->body->text->charset = 'dolorum';
    $request->requestBody->content->simple->body->text->data = 'deleniti';
    $request->requestBody->content->simple->subject = new Content();
    $request->requestBody->content->simple->subject->charset = 'pariatur';
    $request->requestBody->content->simple->subject->data = 'provident';
    $request->requestBody->content->template = new Template();
    $request->requestBody->content->template->templateArn = 'nobis';
    $request->requestBody->content->template->templateData = 'libero';
    $request->requestBody->destination = new SendEmailRequestBodyDestination();
    $request->requestBody->destination->bccAddresses = [
        'quaerat',
        'quos',
        'aliquid',
        'dolorem',
    ];
    $request->requestBody->destination->ccAddresses = [
        'dolor',
    ];
    $request->requestBody->destination->toAddresses = [
        'ipsum',
    ];
    $request->requestBody->emailTags = [
        new MessageTag(),
        new MessageTag(),
        new MessageTag(),
        new MessageTag(),
    ];
    $request->requestBody->feedbackForwardingEmailAddress = 'excepturi';
    $request->requestBody->fromEmailAddress = 'cum';
    $request->requestBody->replyToAddresses = [
        'dignissimos',
        'reiciendis',
    ];
    $request->xAmzAlgorithm = 'amet';
    $request->xAmzContentSha256 = 'dolorum';
    $request->xAmzCredential = 'numquam';
    $request->xAmzDate = 'veritatis';
    $request->xAmzSecurityToken = 'ipsa';
    $request->xAmzSignature = 'ipsa';
    $request->xAmzSignedHeaders = 'iure';

    $response = $sdk->sdk->sendEmail($request);

    if ($response->sendEmailResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagResource

<p>Add one or more tags (keys and values) to a specified resource. A <i>tag</i> is a label that you optionally define and associate with a resource in Amazon Pinpoint. Tags can help you categorize and manage resources in different ways, such as by purpose, owner, environment, or other criteria. A resource can have as many as 50 tags.</p> <p>Each tag consists of a required <i>tag key</i> and an associated <i>tag value</i>, both of which you define. A tag key is a general label that acts as a category for more specific tag values. A tag value acts as a descriptor within a tag key.</p>

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
    $request->requestBody->resourceArn = 'odio';
    $request->requestBody->tags = [
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'accusamus';
    $request->xAmzContentSha256 = 'quidem';
    $request->xAmzCredential = 'voluptatibus';
    $request->xAmzDate = 'voluptas';
    $request->xAmzSecurityToken = 'natus';
    $request->xAmzSignature = 'eos';
    $request->xAmzSignedHeaders = 'atque';

    $response = $sdk->sdk->tagResource($request);

    if ($response->tagResourceResponse !== null) {
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
    $request->resourceArn = 'sit';
    $request->tagKeys = [
        'ab',
        'soluta',
        'dolorum',
        'iusto',
    ];
    $request->xAmzAlgorithm = 'voluptate';
    $request->xAmzContentSha256 = 'dolorum';
    $request->xAmzCredential = 'deleniti';
    $request->xAmzDate = 'omnis';
    $request->xAmzSecurityToken = 'necessitatibus';
    $request->xAmzSignature = 'distinctio';
    $request->xAmzSignedHeaders = 'asperiores';

    $response = $sdk->sdk->untagResource($request);

    if ($response->untagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateConfigurationSetEventDestination

<p>Update the configuration of an event destination for a configuration set.</p> <p>In Amazon Pinpoint, <i>events</i> include message sends, deliveries, opens, clicks, bounces, and complaints. <i>Event destinations</i> are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.</p>

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
    $request->configurationSetName = 'nihil';
    $request->eventDestinationName = 'ipsum';
    $request->requestBody = new UpdateConfigurationSetEventDestinationRequestBody();
    $request->requestBody->eventDestination = new UpdateConfigurationSetEventDestinationRequestBodyEventDestination();
    $request->requestBody->eventDestination->cloudWatchDestination = new CloudWatchDestination();
    $request->requestBody->eventDestination->cloudWatchDestination->dimensionConfigurations = [
        new CloudWatchDimensionConfiguration(),
        new CloudWatchDimensionConfiguration(),
    ];
    $request->requestBody->eventDestination->enabled = false;
    $request->requestBody->eventDestination->kinesisFirehoseDestination = new KinesisFirehoseDestination();
    $request->requestBody->eventDestination->kinesisFirehoseDestination->deliveryStreamArn = 'id';
    $request->requestBody->eventDestination->kinesisFirehoseDestination->iamRoleArn = 'saepe';
    $request->requestBody->eventDestination->matchingEventTypes = [
        EventTypeEnum::REJECT,
        EventTypeEnum::SEND,
    ];
    $request->requestBody->eventDestination->pinpointDestination = new PinpointDestination();
    $request->requestBody->eventDestination->pinpointDestination->applicationArn = 'amet';
    $request->requestBody->eventDestination->snsDestination = new SnsDestination();
    $request->requestBody->eventDestination->snsDestination->topicArn = 'optio';
    $request->xAmzAlgorithm = 'accusamus';
    $request->xAmzContentSha256 = 'ad';
    $request->xAmzCredential = 'saepe';
    $request->xAmzDate = 'suscipit';
    $request->xAmzSecurityToken = 'deserunt';
    $request->xAmzSignature = 'provident';
    $request->xAmzSignedHeaders = 'minima';

    $response = $sdk->sdk->updateConfigurationSetEventDestination($request);

    if ($response->updateConfigurationSetEventDestinationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
