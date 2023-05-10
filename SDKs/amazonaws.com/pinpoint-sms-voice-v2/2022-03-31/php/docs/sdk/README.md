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

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AssociateOriginationIdentityRequest;
use \OpenAPI\OpenAPI\Models\Shared\AssociateOriginationIdentityRequest;
use \OpenAPI\OpenAPI\Models\Operations\AssociateOriginationIdentityXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssociateOriginationIdentityRequest();
    $request->associateOriginationIdentityRequest = new AssociateOriginationIdentityRequest();
    $request->associateOriginationIdentityRequest->clientToken = 'suscipit';
    $request->associateOriginationIdentityRequest->isoCountryCode = 'iure';
    $request->associateOriginationIdentityRequest->originationIdentity = 'magnam';
    $request->associateOriginationIdentityRequest->poolId = 'debitis';
    $request->xAmzAlgorithm = 'ipsa';
    $request->xAmzContentSha256 = 'delectus';
    $request->xAmzCredential = 'tempora';
    $request->xAmzDate = 'suscipit';
    $request->xAmzSecurityToken = 'molestiae';
    $request->xAmzSignature = 'minus';
    $request->xAmzSignedHeaders = 'placeat';
    $request->xAmzTarget = AssociateOriginationIdentityXAmzTargetEnum::PINPOINT_SMS_VOICE_V2_ASSOCIATE_ORIGINATION_IDENTITY;

    $response = $sdk->sdk->associateOriginationIdentity($request);

    if ($response->associateOriginationIdentityResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createConfigurationSet

<p>Creates a new configuration set. After you create the configuration set, you can add one or more event destinations to it.</p> <p>A configuration set is a set of rules that you apply to the SMS and voice messages that you send.</p> <p>When you send a message, you can optionally specify a single configuration set.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateConfigurationSetRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateConfigurationSetRequest;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateConfigurationSetXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateConfigurationSetRequest();
    $request->createConfigurationSetRequest = new CreateConfigurationSetRequest();
    $request->createConfigurationSetRequest->clientToken = 'voluptatum';
    $request->createConfigurationSetRequest->configurationSetName = 'iusto';
    $request->createConfigurationSetRequest->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'nisi';
    $request->xAmzContentSha256 = 'recusandae';
    $request->xAmzCredential = 'temporibus';
    $request->xAmzDate = 'ab';
    $request->xAmzSecurityToken = 'quis';
    $request->xAmzSignature = 'veritatis';
    $request->xAmzSignedHeaders = 'deserunt';
    $request->xAmzTarget = CreateConfigurationSetXAmzTargetEnum::PINPOINT_SMS_VOICE_V2_CREATE_CONFIGURATION_SET;

    $response = $sdk->sdk->createConfigurationSet($request);

    if ($response->createConfigurationSetResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createEventDestination

<p>Creates a new event destination in a configuration set.</p> <p>An event destination is a location where you send message events. The event options are Amazon CloudWatch, Amazon Kinesis Data Firehose, or Amazon SNS. For example, when a message is delivered successfully, you can send information about that event to an event destination, or send notifications to endpoints that are subscribed to an Amazon SNS topic.</p> <p>Each configuration set can contain between 0 and 5 event destinations. Each event destination can contain a reference to a single destination, such as a CloudWatch or Kinesis Data Firehose destination.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateEventDestinationRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateEventDestinationRequest;
use \OpenAPI\OpenAPI\Models\Shared\CloudWatchLogsDestination;
use \OpenAPI\OpenAPI\Models\Shared\KinesisFirehoseDestination;
use \OpenAPI\OpenAPI\Models\Shared\EventTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SnsDestination;
use \OpenAPI\OpenAPI\Models\Operations\CreateEventDestinationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateEventDestinationRequest();
    $request->createEventDestinationRequest = new CreateEventDestinationRequest();
    $request->createEventDestinationRequest->clientToken = 'perferendis';
    $request->createEventDestinationRequest->cloudWatchLogsDestination = new CloudWatchLogsDestination();
    $request->createEventDestinationRequest->cloudWatchLogsDestination->iamRoleArn = 'ipsam';
    $request->createEventDestinationRequest->cloudWatchLogsDestination->logGroupArn = 'repellendus';
    $request->createEventDestinationRequest->configurationSetName = 'sapiente';
    $request->createEventDestinationRequest->eventDestinationName = 'quo';
    $request->createEventDestinationRequest->kinesisFirehoseDestination = new KinesisFirehoseDestination();
    $request->createEventDestinationRequest->kinesisFirehoseDestination->deliveryStreamArn = 'odit';
    $request->createEventDestinationRequest->kinesisFirehoseDestination->iamRoleArn = 'at';
    $request->createEventDestinationRequest->matchingEventTypes = [
        EventTypeEnum::VOICE_TTL_EXPIRED,
        EventTypeEnum::TEXT_BLOCKED,
        EventTypeEnum::VOICE_ANSWERED,
        EventTypeEnum::VOICE_COMPLETED,
    ];
    $request->createEventDestinationRequest->snsDestination = new SnsDestination();
    $request->createEventDestinationRequest->snsDestination->topicArn = 'esse';
    $request->xAmzAlgorithm = 'totam';
    $request->xAmzContentSha256 = 'porro';
    $request->xAmzCredential = 'dolorum';
    $request->xAmzDate = 'dicta';
    $request->xAmzSecurityToken = 'nam';
    $request->xAmzSignature = 'officia';
    $request->xAmzSignedHeaders = 'occaecati';
    $request->xAmzTarget = CreateEventDestinationXAmzTargetEnum::PINPOINT_SMS_VOICE_V2_CREATE_EVENT_DESTINATION;

    $response = $sdk->sdk->createEventDestination($request);

    if ($response->createEventDestinationResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createOptOutList

<p>Creates a new opt-out list.</p> <p>If the opt-out list name already exists, an Error is returned.</p> <p>An opt-out list is a list of phone numbers that are opted out, meaning you can't send SMS or voice messages to them. If end user replies with the keyword "STOP," an entry for the phone number is added to the opt-out list. In addition to STOP, your recipients can use any supported opt-out keyword, such as CANCEL or OPTOUT. For a list of supported opt-out keywords, see <a href="https://docs.aws.amazon.com/pinpoint/latest/userguide/channels-sms-manage.html#channels-sms-manage-optout"> SMS opt out </a> in the <i>Amazon Pinpoint User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateOptOutListRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateOptOutListRequest;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateOptOutListXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateOptOutListRequest();
    $request->createOptOutListRequest = new CreateOptOutListRequest();
    $request->createOptOutListRequest->clientToken = 'fugit';
    $request->createOptOutListRequest->optOutListName = 'deleniti';
    $request->createOptOutListRequest->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'optio';
    $request->xAmzContentSha256 = 'totam';
    $request->xAmzCredential = 'beatae';
    $request->xAmzDate = 'commodi';
    $request->xAmzSecurityToken = 'molestiae';
    $request->xAmzSignature = 'modi';
    $request->xAmzSignedHeaders = 'qui';
    $request->xAmzTarget = CreateOptOutListXAmzTargetEnum::PINPOINT_SMS_VOICE_V2_CREATE_OPT_OUT_LIST;

    $response = $sdk->sdk->createOptOutList($request);

    if ($response->createOptOutListResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createPool

<p>Creates a new pool and associates the specified origination identity to the pool. A pool can include one or more phone numbers and SenderIds that are associated with your Amazon Web Services account.</p> <p>The new pool inherits its configuration from the specified origination identity. This includes keywords, message type, opt-out list, two-way configuration, and self-managed opt-out configuration. Deletion protection isn't inherited from the origination identity and defaults to false.</p> <p>If the origination identity is a phone number and is already associated with another pool, an Error is returned. A sender ID can be associated with multiple pools.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreatePoolRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreatePoolRequest;
use \OpenAPI\OpenAPI\Models\Shared\MessageTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreatePoolXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreatePoolRequest();
    $request->createPoolRequest = new CreatePoolRequest();
    $request->createPoolRequest->clientToken = 'impedit';
    $request->createPoolRequest->deletionProtectionEnabled = false;
    $request->createPoolRequest->isoCountryCode = 'cum';
    $request->createPoolRequest->messageType = MessageTypeEnum::TRANSACTIONAL;
    $request->createPoolRequest->originationIdentity = 'ipsum';
    $request->createPoolRequest->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'aspernatur';
    $request->xAmzContentSha256 = 'perferendis';
    $request->xAmzCredential = 'ad';
    $request->xAmzDate = 'natus';
    $request->xAmzSecurityToken = 'sed';
    $request->xAmzSignature = 'iste';
    $request->xAmzSignedHeaders = 'dolor';
    $request->xAmzTarget = CreatePoolXAmzTargetEnum::PINPOINT_SMS_VOICE_V2_CREATE_POOL;

    $response = $sdk->sdk->createPool($request);

    if ($response->createPoolResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteConfigurationSet

<p>Deletes an existing configuration set.</p> <p>A configuration set is a set of rules that you apply to voice and SMS messages that you send. In a configuration set, you can specify a destination for specific types of events related to voice and SMS messages. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteConfigurationSetRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteConfigurationSetRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteConfigurationSetXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteConfigurationSetRequest();
    $request->deleteConfigurationSetRequest = new DeleteConfigurationSetRequest();
    $request->deleteConfigurationSetRequest->configurationSetName = 'natus';
    $request->xAmzAlgorithm = 'laboriosam';
    $request->xAmzContentSha256 = 'hic';
    $request->xAmzCredential = 'saepe';
    $request->xAmzDate = 'fuga';
    $request->xAmzSecurityToken = 'in';
    $request->xAmzSignature = 'corporis';
    $request->xAmzSignedHeaders = 'iste';
    $request->xAmzTarget = DeleteConfigurationSetXAmzTargetEnum::PINPOINT_SMS_VOICE_V2_DELETE_CONFIGURATION_SET;

    $response = $sdk->sdk->deleteConfigurationSet($request);

    if ($response->deleteConfigurationSetResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteDefaultMessageType

<p>Deletes an existing default message type on a configuration set.</p> <p> A message type is a type of messages that you plan to send. If you send account-related messages or time-sensitive messages such as one-time passcodes, choose <b>Transactional</b>. If you plan to send messages that contain marketing material or other promotional content, choose <b>Promotional</b>. This setting applies to your entire Amazon Web Services account. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDefaultMessageTypeRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteDefaultMessageTypeRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDefaultMessageTypeXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteDefaultMessageTypeRequest();
    $request->deleteDefaultMessageTypeRequest = new DeleteDefaultMessageTypeRequest();
    $request->deleteDefaultMessageTypeRequest->configurationSetName = 'iure';
    $request->xAmzAlgorithm = 'saepe';
    $request->xAmzContentSha256 = 'quidem';
    $request->xAmzCredential = 'architecto';
    $request->xAmzDate = 'ipsa';
    $request->xAmzSecurityToken = 'reiciendis';
    $request->xAmzSignature = 'est';
    $request->xAmzSignedHeaders = 'mollitia';
    $request->xAmzTarget = DeleteDefaultMessageTypeXAmzTargetEnum::PINPOINT_SMS_VOICE_V2_DELETE_DEFAULT_MESSAGE_TYPE;

    $response = $sdk->sdk->deleteDefaultMessageType($request);

    if ($response->deleteDefaultMessageTypeResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteDefaultSenderId

<p>Deletes an existing default sender ID on a configuration set.</p> <p>A default sender ID is the identity that appears on recipients' devices when they receive SMS messages. Support for sender ID capabilities varies by country or region.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDefaultSenderIdRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteDefaultSenderIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDefaultSenderIdXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteDefaultSenderIdRequest();
    $request->deleteDefaultSenderIdRequest = new DeleteDefaultSenderIdRequest();
    $request->deleteDefaultSenderIdRequest->configurationSetName = 'laborum';
    $request->xAmzAlgorithm = 'dolores';
    $request->xAmzContentSha256 = 'dolorem';
    $request->xAmzCredential = 'corporis';
    $request->xAmzDate = 'explicabo';
    $request->xAmzSecurityToken = 'nobis';
    $request->xAmzSignature = 'enim';
    $request->xAmzSignedHeaders = 'omnis';
    $request->xAmzTarget = DeleteDefaultSenderIdXAmzTargetEnum::PINPOINT_SMS_VOICE_V2_DELETE_DEFAULT_SENDER_ID;

    $response = $sdk->sdk->deleteDefaultSenderId($request);

    if ($response->deleteDefaultSenderIdResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteEventDestination

<p>Deletes an existing event destination.</p> <p>An event destination is a location where you send response information about the messages that you send. For example, when a message is delivered successfully, you can send information about that event to an Amazon CloudWatch destination, or send notifications to endpoints that are subscribed to an Amazon SNS topic.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteEventDestinationRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteEventDestinationRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteEventDestinationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteEventDestinationRequest();
    $request->deleteEventDestinationRequest = new DeleteEventDestinationRequest();
    $request->deleteEventDestinationRequest->configurationSetName = 'nemo';
    $request->deleteEventDestinationRequest->eventDestinationName = 'minima';
    $request->xAmzAlgorithm = 'excepturi';
    $request->xAmzContentSha256 = 'accusantium';
    $request->xAmzCredential = 'iure';
    $request->xAmzDate = 'culpa';
    $request->xAmzSecurityToken = 'doloribus';
    $request->xAmzSignature = 'sapiente';
    $request->xAmzSignedHeaders = 'architecto';
    $request->xAmzTarget = DeleteEventDestinationXAmzTargetEnum::PINPOINT_SMS_VOICE_V2_DELETE_EVENT_DESTINATION;

    $response = $sdk->sdk->deleteEventDestination($request);

    if ($response->deleteEventDestinationResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteKeyword

<p>Deletes an existing keyword from an origination phone number or pool.</p> <p>A keyword is a word that you can search for on a particular phone number or pool. It is also a specific word or phrase that an end user can send to your number to elicit a response, such as an informational message or a special offer. When your number receives a message that begins with a keyword, Amazon Pinpoint responds with a customizable message.</p> <p>Keywords "HELP" and "STOP" can't be deleted or modified.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteKeywordRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteKeywordRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteKeywordXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteKeywordRequest();
    $request->deleteKeywordRequest = new DeleteKeywordRequest();
    $request->deleteKeywordRequest->keyword = 'mollitia';
    $request->deleteKeywordRequest->originationIdentity = 'dolorem';
    $request->xAmzAlgorithm = 'culpa';
    $request->xAmzContentSha256 = 'consequuntur';
    $request->xAmzCredential = 'repellat';
    $request->xAmzDate = 'mollitia';
    $request->xAmzSecurityToken = 'occaecati';
    $request->xAmzSignature = 'numquam';
    $request->xAmzSignedHeaders = 'commodi';
    $request->xAmzTarget = DeleteKeywordXAmzTargetEnum::PINPOINT_SMS_VOICE_V2_DELETE_KEYWORD;

    $response = $sdk->sdk->deleteKeyword($request);

    if ($response->deleteKeywordResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteOptOutList

<p>Deletes an existing opt-out list. All opted out phone numbers in the opt-out list are deleted.</p> <p>If the specified opt-out list name doesn't exist or is in-use by an origination phone number or pool, an Error is returned.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteOptOutListRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteOptOutListRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteOptOutListXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteOptOutListRequest();
    $request->deleteOptOutListRequest = new DeleteOptOutListRequest();
    $request->deleteOptOutListRequest->optOutListName = 'quam';
    $request->xAmzAlgorithm = 'molestiae';
    $request->xAmzContentSha256 = 'velit';
    $request->xAmzCredential = 'error';
    $request->xAmzDate = 'quia';
    $request->xAmzSecurityToken = 'quis';
    $request->xAmzSignature = 'vitae';
    $request->xAmzSignedHeaders = 'laborum';
    $request->xAmzTarget = DeleteOptOutListXAmzTargetEnum::PINPOINT_SMS_VOICE_V2_DELETE_OPT_OUT_LIST;

    $response = $sdk->sdk->deleteOptOutList($request);

    if ($response->deleteOptOutListResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteOptedOutNumber

<p>Deletes an existing opted out destination phone number from the specified opt-out list.</p> <p>Each destination phone number can only be deleted once every 30 days.</p> <p>If the specified destination phone number doesn't exist or if the opt-out list doesn't exist, an Error is returned.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteOptedOutNumberRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteOptedOutNumberRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteOptedOutNumberXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteOptedOutNumberRequest();
    $request->deleteOptedOutNumberRequest = new DeleteOptedOutNumberRequest();
    $request->deleteOptedOutNumberRequest->optOutListName = 'animi';
    $request->deleteOptedOutNumberRequest->optedOutNumber = 'enim';
    $request->xAmzAlgorithm = 'odit';
    $request->xAmzContentSha256 = 'quo';
    $request->xAmzCredential = 'sequi';
    $request->xAmzDate = 'tenetur';
    $request->xAmzSecurityToken = 'ipsam';
    $request->xAmzSignature = 'id';
    $request->xAmzSignedHeaders = 'possimus';
    $request->xAmzTarget = DeleteOptedOutNumberXAmzTargetEnum::PINPOINT_SMS_VOICE_V2_DELETE_OPTED_OUT_NUMBER;

    $response = $sdk->sdk->deleteOptedOutNumber($request);

    if ($response->deleteOptedOutNumberResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deletePool

<p>Deletes an existing pool. Deleting a pool disassociates all origination identities from that pool.</p> <p>If the pool status isn't active or if deletion protection is enabled, an Error is returned.</p> <p>A pool is a collection of phone numbers and SenderIds. A pool can include one or more phone numbers and SenderIds that are associated with your Amazon Web Services account.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeletePoolRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeletePoolRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeletePoolXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeletePoolRequest();
    $request->deletePoolRequest = new DeletePoolRequest();
    $request->deletePoolRequest->poolId = 'aut';
    $request->xAmzAlgorithm = 'quasi';
    $request->xAmzContentSha256 = 'error';
    $request->xAmzCredential = 'temporibus';
    $request->xAmzDate = 'laborum';
    $request->xAmzSecurityToken = 'quasi';
    $request->xAmzSignature = 'reiciendis';
    $request->xAmzSignedHeaders = 'voluptatibus';
    $request->xAmzTarget = DeletePoolXAmzTargetEnum::PINPOINT_SMS_VOICE_V2_DELETE_POOL;

    $response = $sdk->sdk->deletePool($request);

    if ($response->deletePoolResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteTextMessageSpendLimitOverride

Deletes an account-level monthly spending limit override for sending text messages. Deleting a spend limit override will set the <code>EnforcedLimit</code> to equal the <code>MaxLimit</code>, which is controlled by Amazon Web Services. For more information on spend limits (quotas) see <a href="https://docs.aws.amazon.com/pinpoint/latest/developerguide/quotas.html">Amazon Pinpoint quotas </a> in the <i>Amazon Pinpoint Developer Guide</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteTextMessageSpendLimitOverrideRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteTextMessageSpendLimitOverrideXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteTextMessageSpendLimitOverrideRequest();
    $request->requestBody = [
        'nihil' => 'praesentium',
        'voluptatibus' => 'ipsa',
        'omnis' => 'voluptate',
        'cum' => 'perferendis',
    ];
    $request->xAmzAlgorithm = 'doloremque';
    $request->xAmzContentSha256 = 'reprehenderit';
    $request->xAmzCredential = 'ut';
    $request->xAmzDate = 'maiores';
    $request->xAmzSecurityToken = 'dicta';
    $request->xAmzSignature = 'corporis';
    $request->xAmzSignedHeaders = 'dolore';
    $request->xAmzTarget = DeleteTextMessageSpendLimitOverrideXAmzTargetEnum::PINPOINT_SMS_VOICE_V2_DELETE_TEXT_MESSAGE_SPEND_LIMIT_OVERRIDE;

    $response = $sdk->sdk->deleteTextMessageSpendLimitOverride($request);

    if ($response->deleteTextMessageSpendLimitOverrideResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteVoiceMessageSpendLimitOverride

Deletes an account level monthly spend limit override for sending voice messages. Deleting a spend limit override sets the <code>EnforcedLimit</code> equal to the <code>MaxLimit</code>, which is controlled by Amazon Web Services. For more information on spending limits (quotas) see <a href="https://docs.aws.amazon.com/pinpoint/latest/developerguide/quotas.html">Amazon Pinpoint quotas</a> in the <i>Amazon Pinpoint Developer Guide</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteVoiceMessageSpendLimitOverrideRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteVoiceMessageSpendLimitOverrideXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteVoiceMessageSpendLimitOverrideRequest();
    $request->requestBody = [
        'dicta' => 'harum',
        'enim' => 'accusamus',
    ];
    $request->xAmzAlgorithm = 'commodi';
    $request->xAmzContentSha256 = 'repudiandae';
    $request->xAmzCredential = 'quae';
    $request->xAmzDate = 'ipsum';
    $request->xAmzSecurityToken = 'quidem';
    $request->xAmzSignature = 'molestias';
    $request->xAmzSignedHeaders = 'excepturi';
    $request->xAmzTarget = DeleteVoiceMessageSpendLimitOverrideXAmzTargetEnum::PINPOINT_SMS_VOICE_V2_DELETE_VOICE_MESSAGE_SPEND_LIMIT_OVERRIDE;

    $response = $sdk->sdk->deleteVoiceMessageSpendLimitOverride($request);

    if ($response->deleteVoiceMessageSpendLimitOverrideResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeAccountAttributes

<p>Describes attributes of your Amazon Web Services account. The supported account attributes include account tier, which indicates whether your account is in the sandbox or production environment. When you're ready to move your account out of the sandbox, create an Amazon Web Services Support case for a service limit increase request.</p> <p>New Amazon Pinpoint accounts are placed into an SMS or voice sandbox. The sandbox protects both Amazon Web Services end recipients and SMS or voice recipients from fraud and abuse. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeAccountAttributesRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeAccountAttributesRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeAccountAttributesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeAccountAttributesRequest();
    $request->describeAccountAttributesRequest = new DescribeAccountAttributesRequest();
    $request->describeAccountAttributesRequest->maxResults = 865103;
    $request->describeAccountAttributesRequest->nextToken = 'modi';
    $request->maxResults = 'praesentium';
    $request->nextToken = 'rem';
    $request->xAmzAlgorithm = 'voluptates';
    $request->xAmzContentSha256 = 'quasi';
    $request->xAmzCredential = 'repudiandae';
    $request->xAmzDate = 'sint';
    $request->xAmzSecurityToken = 'veritatis';
    $request->xAmzSignature = 'itaque';
    $request->xAmzSignedHeaders = 'incidunt';
    $request->xAmzTarget = DescribeAccountAttributesXAmzTargetEnum::PINPOINT_SMS_VOICE_V2_DESCRIBE_ACCOUNT_ATTRIBUTES;

    $response = $sdk->sdk->describeAccountAttributes($request);

    if ($response->describeAccountAttributesResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeAccountLimits

<p>Describes the current Amazon Pinpoint SMS Voice V2 resource quotas for your account. The description for a quota includes the quota name, current usage toward that quota, and the quota's maximum value.</p> <p>When you establish an Amazon Web Services account, the account has initial quotas on the maximum number of configuration sets, opt-out lists, phone numbers, and pools that you can create in a given Region. For more information see <a href="https://docs.aws.amazon.com/pinpoint/latest/developerguide/quotas.html"> Amazon Pinpoint quotas </a> in the <i>Amazon Pinpoint Developer Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeAccountLimitsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeAccountLimitsRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeAccountLimitsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeAccountLimitsRequest();
    $request->describeAccountLimitsRequest = new DescribeAccountLimitsRequest();
    $request->describeAccountLimitsRequest->maxResults = 318569;
    $request->describeAccountLimitsRequest->nextToken = 'consequatur';
    $request->maxResults = 'est';
    $request->nextToken = 'quibusdam';
    $request->xAmzAlgorithm = 'explicabo';
    $request->xAmzContentSha256 = 'deserunt';
    $request->xAmzCredential = 'distinctio';
    $request->xAmzDate = 'quibusdam';
    $request->xAmzSecurityToken = 'labore';
    $request->xAmzSignature = 'modi';
    $request->xAmzSignedHeaders = 'qui';
    $request->xAmzTarget = DescribeAccountLimitsXAmzTargetEnum::PINPOINT_SMS_VOICE_V2_DESCRIBE_ACCOUNT_LIMITS;

    $response = $sdk->sdk->describeAccountLimits($request);

    if ($response->describeAccountLimitsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeConfigurationSets

<p>Describes the specified configuration sets or all in your account.</p> <p>If you specify configuration set names, the output includes information for only the specified configuration sets. If you specify filters, the output includes information for only those configuration sets that meet the filter criteria. If you don't specify configuration set names or filters, the output includes information for all configuration sets.</p> <p>If you specify a configuration set name that isn't valid, an error is returned.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeConfigurationSetsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeConfigurationSetsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ConfigurationSetFilter;
use \OpenAPI\OpenAPI\Models\Shared\ConfigurationSetFilterNameEnum;
use \OpenAPI\OpenAPI\Models\Operations\DescribeConfigurationSetsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeConfigurationSetsRequest();
    $request->describeConfigurationSetsRequest = new DescribeConfigurationSetsRequest();
    $request->describeConfigurationSetsRequest->configurationSetNames = [
        'cupiditate',
        'quos',
    ];
    $request->describeConfigurationSetsRequest->filters = [
        new ConfigurationSetFilter(),
    ];
    $request->describeConfigurationSetsRequest->maxResults = 164940;
    $request->describeConfigurationSetsRequest->nextToken = 'assumenda';
    $request->maxResults = 'ipsam';
    $request->nextToken = 'alias';
    $request->xAmzAlgorithm = 'fugit';
    $request->xAmzContentSha256 = 'dolorum';
    $request->xAmzCredential = 'excepturi';
    $request->xAmzDate = 'tempora';
    $request->xAmzSecurityToken = 'facilis';
    $request->xAmzSignature = 'tempore';
    $request->xAmzSignedHeaders = 'labore';
    $request->xAmzTarget = DescribeConfigurationSetsXAmzTargetEnum::PINPOINT_SMS_VOICE_V2_DESCRIBE_CONFIGURATION_SETS;

    $response = $sdk->sdk->describeConfigurationSets($request);

    if ($response->describeConfigurationSetsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeKeywords

<p>Describes the specified keywords or all keywords on your origination phone number or pool.</p> <p>A keyword is a word that you can search for on a particular phone number or pool. It is also a specific word or phrase that an end user can send to your number to elicit a response, such as an informational message or a special offer. When your number receives a message that begins with a keyword, Amazon Pinpoint responds with a customizable message.</p> <p>If you specify a keyword that isn't valid, an Error is returned.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeKeywordsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeKeywordsRequest;
use \OpenAPI\OpenAPI\Models\Shared\KeywordFilter;
use \OpenAPI\OpenAPI\Models\Shared\KeywordFilterNameEnum;
use \OpenAPI\OpenAPI\Models\Operations\DescribeKeywordsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeKeywordsRequest();
    $request->describeKeywordsRequest = new DescribeKeywordsRequest();
    $request->describeKeywordsRequest->filters = [
        new KeywordFilter(),
        new KeywordFilter(),
        new KeywordFilter(),
        new KeywordFilter(),
    ];
    $request->describeKeywordsRequest->keywords = [
        'non',
        'eligendi',
    ];
    $request->describeKeywordsRequest->maxResults = 576157;
    $request->describeKeywordsRequest->nextToken = 'aliquid';
    $request->describeKeywordsRequest->originationIdentity = 'provident';
    $request->maxResults = 'necessitatibus';
    $request->nextToken = 'sint';
    $request->xAmzAlgorithm = 'officia';
    $request->xAmzContentSha256 = 'dolor';
    $request->xAmzCredential = 'debitis';
    $request->xAmzDate = 'a';
    $request->xAmzSecurityToken = 'dolorum';
    $request->xAmzSignature = 'in';
    $request->xAmzSignedHeaders = 'in';
    $request->xAmzTarget = DescribeKeywordsXAmzTargetEnum::PINPOINT_SMS_VOICE_V2_DESCRIBE_KEYWORDS;

    $response = $sdk->sdk->describeKeywords($request);

    if ($response->describeKeywordsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeOptOutLists

<p>Describes the specified opt-out list or all opt-out lists in your account.</p> <p>If you specify opt-out list names, the output includes information for only the specified opt-out lists. Opt-out lists include only those that meet the filter criteria. If you don't specify opt-out list names or filters, the output includes information for all opt-out lists.</p> <p>If you specify an opt-out list name that isn't valid, an Error is returned.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeOptOutListsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeOptOutListsRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeOptOutListsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeOptOutListsRequest();
    $request->describeOptOutListsRequest = new DescribeOptOutListsRequest();
    $request->describeOptOutListsRequest->maxResults = 846409;
    $request->describeOptOutListsRequest->nextToken = 'maiores';
    $request->describeOptOutListsRequest->optOutListNames = [
        'dicta',
        'magnam',
        'cumque',
    ];
    $request->maxResults = 'facere';
    $request->nextToken = 'ea';
    $request->xAmzAlgorithm = 'aliquid';
    $request->xAmzContentSha256 = 'laborum';
    $request->xAmzCredential = 'accusamus';
    $request->xAmzDate = 'non';
    $request->xAmzSecurityToken = 'occaecati';
    $request->xAmzSignature = 'enim';
    $request->xAmzSignedHeaders = 'accusamus';
    $request->xAmzTarget = DescribeOptOutListsXAmzTargetEnum::PINPOINT_SMS_VOICE_V2_DESCRIBE_OPT_OUT_LISTS;

    $response = $sdk->sdk->describeOptOutLists($request);

    if ($response->describeOptOutListsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeOptedOutNumbers

<p>Describes the specified opted out destination numbers or all opted out destination numbers in an opt-out list.</p> <p>If you specify opted out numbers, the output includes information for only the specified opted out numbers. If you specify filters, the output includes information for only those opted out numbers that meet the filter criteria. If you don't specify opted out numbers or filters, the output includes information for all opted out destination numbers in your opt-out list.</p> <p>If you specify an opted out number that isn't valid, an Error is returned.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeOptedOutNumbersRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeOptedOutNumbersRequest;
use \OpenAPI\OpenAPI\Models\Shared\OptedOutFilter;
use \OpenAPI\OpenAPI\Models\Shared\OptedOutFilterNameEnum;
use \OpenAPI\OpenAPI\Models\Operations\DescribeOptedOutNumbersXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeOptedOutNumbersRequest();
    $request->describeOptedOutNumbersRequest = new DescribeOptedOutNumbersRequest();
    $request->describeOptedOutNumbersRequest->filters = [
        new OptedOutFilter(),
        new OptedOutFilter(),
        new OptedOutFilter(),
        new OptedOutFilter(),
    ];
    $request->describeOptedOutNumbersRequest->maxResults = 692532;
    $request->describeOptedOutNumbersRequest->nextToken = 'provident';
    $request->describeOptedOutNumbersRequest->optOutListName = 'nam';
    $request->describeOptedOutNumbersRequest->optedOutNumbers = [
        'blanditiis',
        'deleniti',
        'sapiente',
    ];
    $request->maxResults = 'amet';
    $request->nextToken = 'deserunt';
    $request->xAmzAlgorithm = 'nisi';
    $request->xAmzContentSha256 = 'vel';
    $request->xAmzCredential = 'natus';
    $request->xAmzDate = 'omnis';
    $request->xAmzSecurityToken = 'molestiae';
    $request->xAmzSignature = 'perferendis';
    $request->xAmzSignedHeaders = 'nihil';
    $request->xAmzTarget = DescribeOptedOutNumbersXAmzTargetEnum::PINPOINT_SMS_VOICE_V2_DESCRIBE_OPTED_OUT_NUMBERS;

    $response = $sdk->sdk->describeOptedOutNumbers($request);

    if ($response->describeOptedOutNumbersResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describePhoneNumbers

<p>Describes the specified origination phone number, or all the phone numbers in your account.</p> <p>If you specify phone number IDs, the output includes information for only the specified phone numbers. If you specify filters, the output includes information for only those phone numbers that meet the filter criteria. If you don't specify phone number IDs or filters, the output includes information for all phone numbers.</p> <p>If you specify a phone number ID that isn't valid, an Error is returned.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribePhoneNumbersRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribePhoneNumbersRequest;
use \OpenAPI\OpenAPI\Models\Shared\PhoneNumberFilter;
use \OpenAPI\OpenAPI\Models\Shared\PhoneNumberFilterNameEnum;
use \OpenAPI\OpenAPI\Models\Operations\DescribePhoneNumbersXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribePhoneNumbersRequest();
    $request->describePhoneNumbersRequest = new DescribePhoneNumbersRequest();
    $request->describePhoneNumbersRequest->filters = [
        new PhoneNumberFilter(),
        new PhoneNumberFilter(),
    ];
    $request->describePhoneNumbersRequest->maxResults = 716075;
    $request->describePhoneNumbersRequest->nextToken = 'id';
    $request->describePhoneNumbersRequest->phoneNumberIds = [
        'labore',
        'suscipit',
    ];
    $request->maxResults = 'natus';
    $request->nextToken = 'nobis';
    $request->xAmzAlgorithm = 'eum';
    $request->xAmzContentSha256 = 'vero';
    $request->xAmzCredential = 'aspernatur';
    $request->xAmzDate = 'architecto';
    $request->xAmzSecurityToken = 'magnam';
    $request->xAmzSignature = 'et';
    $request->xAmzSignedHeaders = 'excepturi';
    $request->xAmzTarget = DescribePhoneNumbersXAmzTargetEnum::PINPOINT_SMS_VOICE_V2_DESCRIBE_PHONE_NUMBERS;

    $response = $sdk->sdk->describePhoneNumbers($request);

    if ($response->describePhoneNumbersResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describePools

<p>Retrieves the specified pools or all pools associated with your Amazon Web Services account.</p> <p>If you specify pool IDs, the output includes information for only the specified pools. If you specify filters, the output includes information for only those pools that meet the filter criteria. If you don't specify pool IDs or filters, the output includes information for all pools.</p> <p>If you specify a pool ID that isn't valid, an Error is returned.</p> <p>A pool is a collection of phone numbers and SenderIds. A pool can include one or more phone numbers and SenderIds that are associated with your Amazon Web Services account.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribePoolsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribePoolsRequest;
use \OpenAPI\OpenAPI\Models\Shared\PoolFilter;
use \OpenAPI\OpenAPI\Models\Shared\PoolFilterNameEnum;
use \OpenAPI\OpenAPI\Models\Operations\DescribePoolsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribePoolsRequest();
    $request->describePoolsRequest = new DescribePoolsRequest();
    $request->describePoolsRequest->filters = [
        new PoolFilter(),
        new PoolFilter(),
    ];
    $request->describePoolsRequest->maxResults = 590873;
    $request->describePoolsRequest->nextToken = 'quos';
    $request->describePoolsRequest->poolIds = [
        'accusantium',
        'mollitia',
        'reiciendis',
    ];
    $request->maxResults = 'mollitia';
    $request->nextToken = 'ad';
    $request->xAmzAlgorithm = 'eum';
    $request->xAmzContentSha256 = 'dolor';
    $request->xAmzCredential = 'necessitatibus';
    $request->xAmzDate = 'odit';
    $request->xAmzSecurityToken = 'nemo';
    $request->xAmzSignature = 'quasi';
    $request->xAmzSignedHeaders = 'iure';
    $request->xAmzTarget = DescribePoolsXAmzTargetEnum::PINPOINT_SMS_VOICE_V2_DESCRIBE_POOLS;

    $response = $sdk->sdk->describePools($request);

    if ($response->describePoolsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeSenderIds

<p>Describes the specified SenderIds or all SenderIds associated with your Amazon Web Services account.</p> <p>If you specify SenderIds, the output includes information for only the specified SenderIds. If you specify filters, the output includes information for only those SenderIds that meet the filter criteria. If you don't specify SenderIds or filters, the output includes information for all SenderIds.</p> <p>f you specify a sender ID that isn't valid, an Error is returned.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeSenderIdsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeSenderIdsRequest;
use \OpenAPI\OpenAPI\Models\Shared\SenderIdFilter;
use \OpenAPI\OpenAPI\Models\Shared\SenderIdFilterNameEnum;
use \OpenAPI\OpenAPI\Models\Shared\SenderIdAndCountry;
use \OpenAPI\OpenAPI\Models\Operations\DescribeSenderIdsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeSenderIdsRequest();
    $request->describeSenderIdsRequest = new DescribeSenderIdsRequest();
    $request->describeSenderIdsRequest->filters = [
        new SenderIdFilter(),
        new SenderIdFilter(),
        new SenderIdFilter(),
        new SenderIdFilter(),
    ];
    $request->describeSenderIdsRequest->maxResults = 891924;
    $request->describeSenderIdsRequest->nextToken = 'eius';
    $request->describeSenderIdsRequest->senderIds = [
        new SenderIdAndCountry(),
        new SenderIdAndCountry(),
        new SenderIdAndCountry(),
        new SenderIdAndCountry(),
    ];
    $request->maxResults = 'deleniti';
    $request->nextToken = 'facilis';
    $request->xAmzAlgorithm = 'in';
    $request->xAmzContentSha256 = 'architecto';
    $request->xAmzCredential = 'architecto';
    $request->xAmzDate = 'repudiandae';
    $request->xAmzSecurityToken = 'ullam';
    $request->xAmzSignature = 'expedita';
    $request->xAmzSignedHeaders = 'nihil';
    $request->xAmzTarget = DescribeSenderIdsXAmzTargetEnum::PINPOINT_SMS_VOICE_V2_DESCRIBE_SENDER_IDS;

    $response = $sdk->sdk->describeSenderIds($request);

    if ($response->describeSenderIdsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeSpendLimits

<p>Describes the current Amazon Pinpoint monthly spend limits for sending voice and text messages.</p> <p>When you establish an Amazon Web Services account, the account has initial monthly spend limit in a given Region. For more information on increasing your monthly spend limit, see <a href="https://docs.aws.amazon.com/pinpoint/latest/userguide/channels-sms-awssupport-spend-threshold.html"> Requesting increases to your monthly SMS spending quota for Amazon Pinpoint </a> in the <i>Amazon Pinpoint User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeSpendLimitsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeSpendLimitsRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeSpendLimitsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeSpendLimitsRequest();
    $request->describeSpendLimitsRequest = new DescribeSpendLimitsRequest();
    $request->describeSpendLimitsRequest->maxResults = 998848;
    $request->describeSpendLimitsRequest->nextToken = 'quibusdam';
    $request->maxResults = 'sed';
    $request->nextToken = 'saepe';
    $request->xAmzAlgorithm = 'pariatur';
    $request->xAmzContentSha256 = 'accusantium';
    $request->xAmzCredential = 'consequuntur';
    $request->xAmzDate = 'praesentium';
    $request->xAmzSecurityToken = 'natus';
    $request->xAmzSignature = 'magni';
    $request->xAmzSignedHeaders = 'sunt';
    $request->xAmzTarget = DescribeSpendLimitsXAmzTargetEnum::PINPOINT_SMS_VOICE_V2_DESCRIBE_SPEND_LIMITS;

    $response = $sdk->sdk->describeSpendLimits($request);

    if ($response->describeSpendLimitsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## disassociateOriginationIdentity

<p>Removes the specified origination identity from an existing pool.</p> <p>If the origination identity isn't associated with the specified pool, an Error is returned.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DisassociateOriginationIdentityRequest;
use \OpenAPI\OpenAPI\Models\Shared\DisassociateOriginationIdentityRequest;
use \OpenAPI\OpenAPI\Models\Operations\DisassociateOriginationIdentityXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisassociateOriginationIdentityRequest();
    $request->disassociateOriginationIdentityRequest = new DisassociateOriginationIdentityRequest();
    $request->disassociateOriginationIdentityRequest->clientToken = 'quo';
    $request->disassociateOriginationIdentityRequest->isoCountryCode = 'illum';
    $request->disassociateOriginationIdentityRequest->originationIdentity = 'pariatur';
    $request->disassociateOriginationIdentityRequest->poolId = 'maxime';
    $request->xAmzAlgorithm = 'ea';
    $request->xAmzContentSha256 = 'excepturi';
    $request->xAmzCredential = 'odit';
    $request->xAmzDate = 'ea';
    $request->xAmzSecurityToken = 'accusantium';
    $request->xAmzSignature = 'ab';
    $request->xAmzSignedHeaders = 'maiores';
    $request->xAmzTarget = DisassociateOriginationIdentityXAmzTargetEnum::PINPOINT_SMS_VOICE_V2_DISASSOCIATE_ORIGINATION_IDENTITY;

    $response = $sdk->sdk->disassociateOriginationIdentity($request);

    if ($response->disassociateOriginationIdentityResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listPoolOriginationIdentities

<p>Lists all associated origination identities in your pool.</p> <p>If you specify filters, the output includes information for only those origination identities that meet the filter criteria.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListPoolOriginationIdentitiesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListPoolOriginationIdentitiesRequest;
use \OpenAPI\OpenAPI\Models\Shared\PoolOriginationIdentitiesFilter;
use \OpenAPI\OpenAPI\Models\Shared\PoolOriginationIdentitiesFilterNameEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListPoolOriginationIdentitiesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListPoolOriginationIdentitiesRequest();
    $request->listPoolOriginationIdentitiesRequest = new ListPoolOriginationIdentitiesRequest();
    $request->listPoolOriginationIdentitiesRequest->filters = [
        new PoolOriginationIdentitiesFilter(),
        new PoolOriginationIdentitiesFilter(),
        new PoolOriginationIdentitiesFilter(),
    ];
    $request->listPoolOriginationIdentitiesRequest->maxResults = 373291;
    $request->listPoolOriginationIdentitiesRequest->nextToken = 'voluptate';
    $request->listPoolOriginationIdentitiesRequest->poolId = 'autem';
    $request->maxResults = 'nam';
    $request->nextToken = 'eaque';
    $request->xAmzAlgorithm = 'pariatur';
    $request->xAmzContentSha256 = 'nemo';
    $request->xAmzCredential = 'voluptatibus';
    $request->xAmzDate = 'perferendis';
    $request->xAmzSecurityToken = 'fugiat';
    $request->xAmzSignature = 'amet';
    $request->xAmzSignedHeaders = 'aut';
    $request->xAmzTarget = ListPoolOriginationIdentitiesXAmzTargetEnum::PINPOINT_SMS_VOICE_V2_LIST_POOL_ORIGINATION_IDENTITIES;

    $response = $sdk->sdk->listPoolOriginationIdentities($request);

    if ($response->listPoolOriginationIdentitiesResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTagsForResource

List all tags associated with a resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTagsForResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListTagsForResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListTagsForResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTagsForResourceRequest();
    $request->listTagsForResourceRequest = new ListTagsForResourceRequest();
    $request->listTagsForResourceRequest->resourceArn = 'cumque';
    $request->xAmzAlgorithm = 'corporis';
    $request->xAmzContentSha256 = 'hic';
    $request->xAmzCredential = 'libero';
    $request->xAmzDate = 'nobis';
    $request->xAmzSecurityToken = 'dolores';
    $request->xAmzSignature = 'quis';
    $request->xAmzSignedHeaders = 'totam';
    $request->xAmzTarget = ListTagsForResourceXAmzTargetEnum::PINPOINT_SMS_VOICE_V2_LIST_TAGS_FOR_RESOURCE;

    $response = $sdk->sdk->listTagsForResource($request);

    if ($response->listTagsForResourceResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putKeyword

<p>Creates or updates a keyword configuration on an origination phone number or pool.</p> <p> A keyword is a word that you can search for on a particular phone number or pool. It is also a specific word or phrase that an end user can send to your number to elicit a response, such as an informational message or a special offer. When your number receives a message that begins with a keyword, Amazon Pinpoint responds with a customizable message.</p> <p>If you specify a keyword that isn't valid, an Error is returned.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutKeywordRequest;
use \OpenAPI\OpenAPI\Models\Shared\PutKeywordRequest;
use \OpenAPI\OpenAPI\Models\Shared\KeywordActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\PutKeywordXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutKeywordRequest();
    $request->putKeywordRequest = new PutKeywordRequest();
    $request->putKeywordRequest->keyword = 'dignissimos';
    $request->putKeywordRequest->keywordAction = KeywordActionEnum::AUTOMATIC_RESPONSE;
    $request->putKeywordRequest->keywordMessage = 'quis';
    $request->putKeywordRequest->originationIdentity = 'nesciunt';
    $request->xAmzAlgorithm = 'eos';
    $request->xAmzContentSha256 = 'perferendis';
    $request->xAmzCredential = 'dolores';
    $request->xAmzDate = 'minus';
    $request->xAmzSecurityToken = 'quam';
    $request->xAmzSignature = 'dolor';
    $request->xAmzSignedHeaders = 'vero';
    $request->xAmzTarget = PutKeywordXAmzTargetEnum::PINPOINT_SMS_VOICE_V2_PUT_KEYWORD;

    $response = $sdk->sdk->putKeyword($request);

    if ($response->putKeywordResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putOptedOutNumber

<p>Creates an opted out destination phone number in the opt-out list.</p> <p>If the destination phone number isn't valid or if the specified opt-out list doesn't exist, an Error is returned.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutOptedOutNumberRequest;
use \OpenAPI\OpenAPI\Models\Shared\PutOptedOutNumberRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutOptedOutNumberXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutOptedOutNumberRequest();
    $request->putOptedOutNumberRequest = new PutOptedOutNumberRequest();
    $request->putOptedOutNumberRequest->optOutListName = 'nostrum';
    $request->putOptedOutNumberRequest->optedOutNumber = 'hic';
    $request->xAmzAlgorithm = 'recusandae';
    $request->xAmzContentSha256 = 'omnis';
    $request->xAmzCredential = 'facilis';
    $request->xAmzDate = 'perspiciatis';
    $request->xAmzSecurityToken = 'voluptatem';
    $request->xAmzSignature = 'porro';
    $request->xAmzSignedHeaders = 'consequuntur';
    $request->xAmzTarget = PutOptedOutNumberXAmzTargetEnum::PINPOINT_SMS_VOICE_V2_PUT_OPTED_OUT_NUMBER;

    $response = $sdk->sdk->putOptedOutNumber($request);

    if ($response->putOptedOutNumberResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## releasePhoneNumber

<p>Releases an existing origination phone number in your account. Once released, a phone number is no longer available for sending messages.</p> <p>If the origination phone number has deletion protection enabled or is associated with a pool, an Error is returned.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ReleasePhoneNumberRequest;
use \OpenAPI\OpenAPI\Models\Shared\ReleasePhoneNumberRequest;
use \OpenAPI\OpenAPI\Models\Operations\ReleasePhoneNumberXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReleasePhoneNumberRequest();
    $request->releasePhoneNumberRequest = new ReleasePhoneNumberRequest();
    $request->releasePhoneNumberRequest->phoneNumberId = 'blanditiis';
    $request->xAmzAlgorithm = 'error';
    $request->xAmzContentSha256 = 'eaque';
    $request->xAmzCredential = 'occaecati';
    $request->xAmzDate = 'rerum';
    $request->xAmzSecurityToken = 'adipisci';
    $request->xAmzSignature = 'asperiores';
    $request->xAmzSignedHeaders = 'earum';
    $request->xAmzTarget = ReleasePhoneNumberXAmzTargetEnum::PINPOINT_SMS_VOICE_V2_RELEASE_PHONE_NUMBER;

    $response = $sdk->sdk->releasePhoneNumber($request);

    if ($response->releasePhoneNumberResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## requestPhoneNumber

Request an origination phone number for use in your account. For more information on phone number request see <a href="https://docs.aws.amazon.com/pinpoint/latest/userguide/settings-sms-request-number.html"> Requesting a number </a> in the <i>Amazon Pinpoint User Guide</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RequestPhoneNumberRequest;
use \OpenAPI\OpenAPI\Models\Shared\RequestPhoneNumberRequest;
use \OpenAPI\OpenAPI\Models\Shared\MessageTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\NumberCapabilityEnum;
use \OpenAPI\OpenAPI\Models\Shared\RequestableNumberTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\RequestPhoneNumberXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RequestPhoneNumberRequest();
    $request->requestPhoneNumberRequest = new RequestPhoneNumberRequest();
    $request->requestPhoneNumberRequest->clientToken = 'modi';
    $request->requestPhoneNumberRequest->deletionProtectionEnabled = false;
    $request->requestPhoneNumberRequest->isoCountryCode = 'iste';
    $request->requestPhoneNumberRequest->messageType = MessageTypeEnum::PROMOTIONAL;
    $request->requestPhoneNumberRequest->numberCapabilities = [
        NumberCapabilityEnum::VOICE,
        NumberCapabilityEnum::VOICE,
        NumberCapabilityEnum::VOICE,
    ];
    $request->requestPhoneNumberRequest->numberType = RequestableNumberTypeEnum::TEN_DLC;
    $request->requestPhoneNumberRequest->optOutListName = 'delectus';
    $request->requestPhoneNumberRequest->poolId = 'quaerat';
    $request->requestPhoneNumberRequest->registrationId = 'quos';
    $request->requestPhoneNumberRequest->tags = [
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'dolorem';
    $request->xAmzContentSha256 = 'dolorem';
    $request->xAmzCredential = 'dolor';
    $request->xAmzDate = 'qui';
    $request->xAmzSecurityToken = 'ipsum';
    $request->xAmzSignature = 'hic';
    $request->xAmzSignedHeaders = 'excepturi';
    $request->xAmzTarget = RequestPhoneNumberXAmzTargetEnum::PINPOINT_SMS_VOICE_V2_REQUEST_PHONE_NUMBER;

    $response = $sdk->sdk->requestPhoneNumber($request);

    if ($response->requestPhoneNumberResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sendTextMessage

<p>Creates a new text message and sends it to a recipient's phone number.</p> <p>SMS throughput limits are measured in Message Parts per Second (MPS). Your MPS limit depends on the destination country of your messages, as well as the type of phone number (origination number) that you use to send the message. For more information, see <a href="https://docs.aws.amazon.com/pinpoint/latest/userguide/channels-sms-limitations-mps.html">Message Parts per Second (MPS) limits</a> in the <i>Amazon Pinpoint User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SendTextMessageRequest;
use \OpenAPI\OpenAPI\Models\Shared\SendTextMessageRequest;
use \OpenAPI\OpenAPI\Models\Shared\MessageTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\SendTextMessageXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SendTextMessageRequest();
    $request->sendTextMessageRequest = new SendTextMessageRequest();
    $request->sendTextMessageRequest->configurationSetName = 'cum';
    $request->sendTextMessageRequest->context = [
        'dignissimos' => 'reiciendis',
        'amet' => 'dolorum',
    ];
    $request->sendTextMessageRequest->destinationCountryParameters = [
        'veritatis' => 'ipsa',
        'ipsa' => 'iure',
    ];
    $request->sendTextMessageRequest->destinationPhoneNumber = 'odio';
    $request->sendTextMessageRequest->dryRun = false;
    $request->sendTextMessageRequest->keyword = 'quaerat';
    $request->sendTextMessageRequest->maxPrice = 'accusamus';
    $request->sendTextMessageRequest->messageBody = 'quidem';
    $request->sendTextMessageRequest->messageType = MessageTypeEnum::PROMOTIONAL;
    $request->sendTextMessageRequest->originationIdentity = 'voluptas';
    $request->sendTextMessageRequest->timeToLive = 617658;
    $request->xAmzAlgorithm = 'eos';
    $request->xAmzContentSha256 = 'atque';
    $request->xAmzCredential = 'sit';
    $request->xAmzDate = 'fugiat';
    $request->xAmzSecurityToken = 'ab';
    $request->xAmzSignature = 'soluta';
    $request->xAmzSignedHeaders = 'dolorum';
    $request->xAmzTarget = SendTextMessageXAmzTargetEnum::PINPOINT_SMS_VOICE_V2_SEND_TEXT_MESSAGE;

    $response = $sdk->sdk->sendTextMessage($request);

    if ($response->sendTextMessageResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sendVoiceMessage

Allows you to send a request that sends a text message through Amazon Pinpoint. This operation uses <a href="http://aws.amazon.com/polly/">Amazon Polly</a> to convert a text script into a voice message.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SendVoiceMessageRequest;
use \OpenAPI\OpenAPI\Models\Shared\SendVoiceMessageRequest;
use \OpenAPI\OpenAPI\Models\Shared\VoiceMessageBodyTextTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\VoiceIdEnum;
use \OpenAPI\OpenAPI\Models\Operations\SendVoiceMessageXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SendVoiceMessageRequest();
    $request->sendVoiceMessageRequest = new SendVoiceMessageRequest();
    $request->sendVoiceMessageRequest->configurationSetName = 'iusto';
    $request->sendVoiceMessageRequest->context = [
        'dolorum' => 'deleniti',
        'omnis' => 'necessitatibus',
    ];
    $request->sendVoiceMessageRequest->destinationPhoneNumber = 'distinctio';
    $request->sendVoiceMessageRequest->dryRun = false;
    $request->sendVoiceMessageRequest->maxPricePerMinute = 'asperiores';
    $request->sendVoiceMessageRequest->messageBody = 'nihil';
    $request->sendVoiceMessageRequest->messageBodyTextType = VoiceMessageBodyTextTypeEnum::TEXT;
    $request->sendVoiceMessageRequest->originationIdentity = 'voluptate';
    $request->sendVoiceMessageRequest->timeToLive = 663078;
    $request->sendVoiceMessageRequest->voiceId = VoiceIdEnum::TAKUMI;
    $request->xAmzAlgorithm = 'eius';
    $request->xAmzContentSha256 = 'aspernatur';
    $request->xAmzCredential = 'perferendis';
    $request->xAmzDate = 'amet';
    $request->xAmzSecurityToken = 'optio';
    $request->xAmzSignature = 'accusamus';
    $request->xAmzSignedHeaders = 'ad';
    $request->xAmzTarget = SendVoiceMessageXAmzTargetEnum::PINPOINT_SMS_VOICE_V2_SEND_VOICE_MESSAGE;

    $response = $sdk->sdk->sendVoiceMessage($request);

    if ($response->sendVoiceMessageResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## setDefaultMessageType

<p>Sets the default message type on a configuration set.</p> <p>Choose the category of SMS messages that you plan to send from this account. If you send account-related messages or time-sensitive messages such as one-time passcodes, choose <b>Transactional</b>. If you plan to send messages that contain marketing material or other promotional content, choose <b>Promotional</b>. This setting applies to your entire Amazon Web Services account.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SetDefaultMessageTypeRequest;
use \OpenAPI\OpenAPI\Models\Shared\SetDefaultMessageTypeRequest;
use \OpenAPI\OpenAPI\Models\Shared\MessageTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\SetDefaultMessageTypeXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SetDefaultMessageTypeRequest();
    $request->setDefaultMessageTypeRequest = new SetDefaultMessageTypeRequest();
    $request->setDefaultMessageTypeRequest->configurationSetName = 'saepe';
    $request->setDefaultMessageTypeRequest->messageType = MessageTypeEnum::TRANSACTIONAL;
    $request->xAmzAlgorithm = 'deserunt';
    $request->xAmzContentSha256 = 'provident';
    $request->xAmzCredential = 'minima';
    $request->xAmzDate = 'repellendus';
    $request->xAmzSecurityToken = 'totam';
    $request->xAmzSignature = 'similique';
    $request->xAmzSignedHeaders = 'alias';
    $request->xAmzTarget = SetDefaultMessageTypeXAmzTargetEnum::PINPOINT_SMS_VOICE_V2_SET_DEFAULT_MESSAGE_TYPE;

    $response = $sdk->sdk->setDefaultMessageType($request);

    if ($response->setDefaultMessageTypeResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## setDefaultSenderId

<p>Sets default sender ID on a configuration set.</p> <p>When sending a text message to a destination country that supports sender IDs, the default sender ID on the configuration set specified will be used if no dedicated origination phone numbers or registered sender IDs are available in your account.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SetDefaultSenderIdRequest;
use \OpenAPI\OpenAPI\Models\Shared\SetDefaultSenderIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\SetDefaultSenderIdXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SetDefaultSenderIdRequest();
    $request->setDefaultSenderIdRequest = new SetDefaultSenderIdRequest();
    $request->setDefaultSenderIdRequest->configurationSetName = 'at';
    $request->setDefaultSenderIdRequest->senderId = 'quaerat';
    $request->xAmzAlgorithm = 'tempora';
    $request->xAmzContentSha256 = 'vel';
    $request->xAmzCredential = 'quod';
    $request->xAmzDate = 'officiis';
    $request->xAmzSecurityToken = 'qui';
    $request->xAmzSignature = 'dolorum';
    $request->xAmzSignedHeaders = 'a';
    $request->xAmzTarget = SetDefaultSenderIdXAmzTargetEnum::PINPOINT_SMS_VOICE_V2_SET_DEFAULT_SENDER_ID;

    $response = $sdk->sdk->setDefaultSenderId($request);

    if ($response->setDefaultSenderIdResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## setTextMessageSpendLimitOverride

Sets an account level monthly spend limit override for sending text messages. The requested spend limit must be less than or equal to the <code>MaxLimit</code>, which is set by Amazon Web Services. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SetTextMessageSpendLimitOverrideRequest;
use \OpenAPI\OpenAPI\Models\Shared\SetTextMessageSpendLimitOverrideRequest;
use \OpenAPI\OpenAPI\Models\Operations\SetTextMessageSpendLimitOverrideXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SetTextMessageSpendLimitOverrideRequest();
    $request->setTextMessageSpendLimitOverrideRequest = new SetTextMessageSpendLimitOverrideRequest();
    $request->setTextMessageSpendLimitOverrideRequest->monthlyLimit = 456130;
    $request->xAmzAlgorithm = 'harum';
    $request->xAmzContentSha256 = 'iusto';
    $request->xAmzCredential = 'ipsum';
    $request->xAmzDate = 'quisquam';
    $request->xAmzSecurityToken = 'tenetur';
    $request->xAmzSignature = 'amet';
    $request->xAmzSignedHeaders = 'tempore';
    $request->xAmzTarget = SetTextMessageSpendLimitOverrideXAmzTargetEnum::PINPOINT_SMS_VOICE_V2_SET_TEXT_MESSAGE_SPEND_LIMIT_OVERRIDE;

    $response = $sdk->sdk->setTextMessageSpendLimitOverride($request);

    if ($response->setTextMessageSpendLimitOverrideResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## setVoiceMessageSpendLimitOverride

Sets an account level monthly spend limit override for sending voice messages. The requested spend limit must be less than or equal to the <code>MaxLimit</code>, which is set by Amazon Web Services. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SetVoiceMessageSpendLimitOverrideRequest;
use \OpenAPI\OpenAPI\Models\Shared\SetVoiceMessageSpendLimitOverrideRequest;
use \OpenAPI\OpenAPI\Models\Operations\SetVoiceMessageSpendLimitOverrideXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SetVoiceMessageSpendLimitOverrideRequest();
    $request->setVoiceMessageSpendLimitOverrideRequest = new SetVoiceMessageSpendLimitOverrideRequest();
    $request->setVoiceMessageSpendLimitOverrideRequest->monthlyLimit = 880298;
    $request->xAmzAlgorithm = 'numquam';
    $request->xAmzContentSha256 = 'enim';
    $request->xAmzCredential = 'dolorem';
    $request->xAmzDate = 'sapiente';
    $request->xAmzSecurityToken = 'totam';
    $request->xAmzSignature = 'nihil';
    $request->xAmzSignedHeaders = 'sit';
    $request->xAmzTarget = SetVoiceMessageSpendLimitOverrideXAmzTargetEnum::PINPOINT_SMS_VOICE_V2_SET_VOICE_MESSAGE_SPEND_LIMIT_OVERRIDE;

    $response = $sdk->sdk->setVoiceMessageSpendLimitOverride($request);

    if ($response->setVoiceMessageSpendLimitOverrideResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagResource

Adds or overwrites only the specified tags for the specified Amazon Pinpoint SMS Voice, version 2 resource. When you specify an existing tag key, the value is overwritten with the new value. Each resource can have a maximum of 50 tags. Each tag consists of a key and an optional value. Tag keys must be unique per resource. For more information about tags, see <a href="https://docs.aws.amazon.com/pinpoint/latest/developerguide/tagging-resources.html"> Tagging Amazon Pinpoint resources</a> in the <i>Amazon Pinpoint Developer Guide</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\TagResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagResourceRequest();
    $request->tagResourceRequest = new TagResourceRequest();
    $request->tagResourceRequest->resourceArn = 'expedita';
    $request->tagResourceRequest->tags = [
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'sed';
    $request->xAmzContentSha256 = 'vel';
    $request->xAmzCredential = 'libero';
    $request->xAmzDate = 'voluptas';
    $request->xAmzSecurityToken = 'deserunt';
    $request->xAmzSignature = 'quam';
    $request->xAmzSignedHeaders = 'ipsum';
    $request->xAmzTarget = TagResourceXAmzTargetEnum::PINPOINT_SMS_VOICE_V2_TAG_RESOURCE;

    $response = $sdk->sdk->tagResource($request);

    if ($response->tagResourceResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## untagResource

Removes the association of the specified tags from an Amazon Pinpoint SMS Voice V2 resource. For more information on tags see <a href="https://docs.aws.amazon.com/pinpoint/latest/developerguide/tagging-resources.html"> Tagging Amazon Pinpoint resources</a> in the <i>Amazon Pinpoint Developer Guide</i>. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UntagResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\UntagResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\UntagResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UntagResourceRequest();
    $request->untagResourceRequest = new UntagResourceRequest();
    $request->untagResourceRequest->resourceArn = 'incidunt';
    $request->untagResourceRequest->tagKeys = [
        'cupiditate',
    ];
    $request->xAmzAlgorithm = 'maxime';
    $request->xAmzContentSha256 = 'pariatur';
    $request->xAmzCredential = 'soluta';
    $request->xAmzDate = 'dicta';
    $request->xAmzSecurityToken = 'laborum';
    $request->xAmzSignature = 'totam';
    $request->xAmzSignedHeaders = 'incidunt';
    $request->xAmzTarget = UntagResourceXAmzTargetEnum::PINPOINT_SMS_VOICE_V2_UNTAG_RESOURCE;

    $response = $sdk->sdk->untagResource($request);

    if ($response->untagResourceResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateEventDestination

<p>Updates an existing event destination in a configuration set. You can update the IAM role ARN for CloudWatch Logs and Kinesis Data Firehose. You can also enable or disable the event destination.</p> <p>You may want to update an event destination to change its matching event types or updating the destination resource ARN. You can't change an event destination's type between CloudWatch Logs, Kinesis Data Firehose, and Amazon SNS.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateEventDestinationRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateEventDestinationRequest;
use \OpenAPI\OpenAPI\Models\Shared\CloudWatchLogsDestination;
use \OpenAPI\OpenAPI\Models\Shared\KinesisFirehoseDestination;
use \OpenAPI\OpenAPI\Models\Shared\EventTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SnsDestination;
use \OpenAPI\OpenAPI\Models\Operations\UpdateEventDestinationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateEventDestinationRequest();
    $request->updateEventDestinationRequest = new UpdateEventDestinationRequest();
    $request->updateEventDestinationRequest->cloudWatchLogsDestination = new CloudWatchLogsDestination();
    $request->updateEventDestinationRequest->cloudWatchLogsDestination->iamRoleArn = 'aspernatur';
    $request->updateEventDestinationRequest->cloudWatchLogsDestination->logGroupArn = 'dolores';
    $request->updateEventDestinationRequest->configurationSetName = 'distinctio';
    $request->updateEventDestinationRequest->enabled = false;
    $request->updateEventDestinationRequest->eventDestinationName = 'facilis';
    $request->updateEventDestinationRequest->kinesisFirehoseDestination = new KinesisFirehoseDestination();
    $request->updateEventDestinationRequest->kinesisFirehoseDestination->deliveryStreamArn = 'aliquid';
    $request->updateEventDestinationRequest->kinesisFirehoseDestination->iamRoleArn = 'quam';
    $request->updateEventDestinationRequest->matchingEventTypes = [
        EventTypeEnum::VOICE_BUSY,
        EventTypeEnum::TEXT_QUEUED,
        EventTypeEnum::TEXT_SUCCESSFUL,
    ];
    $request->updateEventDestinationRequest->snsDestination = new SnsDestination();
    $request->updateEventDestinationRequest->snsDestination->topicArn = 'fugit';
    $request->xAmzAlgorithm = 'magni';
    $request->xAmzContentSha256 = 'odio';
    $request->xAmzCredential = 'sunt';
    $request->xAmzDate = 'ullam';
    $request->xAmzSecurityToken = 'nam';
    $request->xAmzSignature = 'hic';
    $request->xAmzSignedHeaders = 'voluptatem';
    $request->xAmzTarget = UpdateEventDestinationXAmzTargetEnum::PINPOINT_SMS_VOICE_V2_UPDATE_EVENT_DESTINATION;

    $response = $sdk->sdk->updateEventDestination($request);

    if ($response->updateEventDestinationResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updatePhoneNumber

<p>Updates the configuration of an existing origination phone number. You can update the opt-out list, enable or disable two-way messaging, change the TwoWayChannelArn, enable or disable self-managed opt-outs, and enable or disable deletion protection.</p> <p>If the origination phone number is associated with a pool, an Error is returned.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdatePhoneNumberRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdatePhoneNumberRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdatePhoneNumberXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdatePhoneNumberRequest();
    $request->updatePhoneNumberRequest = new UpdatePhoneNumberRequest();
    $request->updatePhoneNumberRequest->deletionProtectionEnabled = false;
    $request->updatePhoneNumberRequest->optOutListName = 'cumque';
    $request->updatePhoneNumberRequest->phoneNumberId = 'soluta';
    $request->updatePhoneNumberRequest->selfManagedOptOutsEnabled = false;
    $request->updatePhoneNumberRequest->twoWayChannelArn = 'nobis';
    $request->updatePhoneNumberRequest->twoWayEnabled = false;
    $request->xAmzAlgorithm = 'et';
    $request->xAmzContentSha256 = 'saepe';
    $request->xAmzCredential = 'ipsum';
    $request->xAmzDate = 'veritatis';
    $request->xAmzSecurityToken = 'nobis';
    $request->xAmzSignature = 'quos';
    $request->xAmzSignedHeaders = 'tempore';
    $request->xAmzTarget = UpdatePhoneNumberXAmzTargetEnum::PINPOINT_SMS_VOICE_V2_UPDATE_PHONE_NUMBER;

    $response = $sdk->sdk->updatePhoneNumber($request);

    if ($response->updatePhoneNumberResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updatePool

Updates the configuration of an existing pool. You can update the opt-out list, enable or disable two-way messaging, change the <code>TwoWayChannelArn</code>, enable or disable self-managed opt-outs, enable or disable deletion protection, and enable or disable shared routes.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdatePoolRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdatePoolRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdatePoolXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdatePoolRequest();
    $request->updatePoolRequest = new UpdatePoolRequest();
    $request->updatePoolRequest->deletionProtectionEnabled = false;
    $request->updatePoolRequest->optOutListName = 'cupiditate';
    $request->updatePoolRequest->poolId = 'aperiam';
    $request->updatePoolRequest->selfManagedOptOutsEnabled = false;
    $request->updatePoolRequest->sharedRoutesEnabled = false;
    $request->updatePoolRequest->twoWayChannelArn = 'delectus';
    $request->updatePoolRequest->twoWayEnabled = false;
    $request->xAmzAlgorithm = 'dolorem';
    $request->xAmzContentSha256 = 'dolore';
    $request->xAmzCredential = 'labore';
    $request->xAmzDate = 'adipisci';
    $request->xAmzSecurityToken = 'dolorum';
    $request->xAmzSignature = 'architecto';
    $request->xAmzSignedHeaders = 'quae';
    $request->xAmzTarget = UpdatePoolXAmzTargetEnum::PINPOINT_SMS_VOICE_V2_UPDATE_POOL;

    $response = $sdk->sdk->updatePool($request);

    if ($response->updatePoolResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
