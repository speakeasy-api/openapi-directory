# SDK

## Overview

Doc Engage API - Amazon Pinpoint API

Amazon Web Services documentation
<https://docs.aws.amazon.com/pinpoint/>
### Available Operations

* [createApp](#createapp) -  <p>Creates an application.</p>
* [createCampaign](#createcampaign) - Creates a new campaign for an application or updates the settings of an existing campaign for an application.
* [createEmailTemplate](#createemailtemplate) - Creates a message template for messages that are sent through the email channel.
* [createExportJob](#createexportjob) - Creates an export job for an application.
* [createImportJob](#createimportjob) - Creates an import job for an application.
* [createInAppTemplate](#createinapptemplate) - Creates a new message template for messages using the in-app message channel.
* [createJourney](#createjourney) - Creates a journey for an application.
* [createPushTemplate](#createpushtemplate) - Creates a message template for messages that are sent through a push notification channel.
* [createRecommenderConfiguration](#createrecommenderconfiguration) - Creates an Amazon Pinpoint configuration for a recommender model.
* [createSegment](#createsegment) - Creates a new segment for an application or updates the configuration, dimension, and other settings for an existing segment that's associated with an application.
* [createSmsTemplate](#createsmstemplate) - Creates a message template for messages that are sent through the SMS channel.
* [createVoiceTemplate](#createvoicetemplate) - Creates a message template for messages that are sent through the voice channel.
* [deleteAdmChannel](#deleteadmchannel) - Disables the ADM channel for an application and deletes any existing settings for the channel.
* [deleteApnsChannel](#deleteapnschannel) - Disables the APNs channel for an application and deletes any existing settings for the channel.
* [deleteApnsSandboxChannel](#deleteapnssandboxchannel) - Disables the APNs sandbox channel for an application and deletes any existing settings for the channel.
* [deleteApnsVoipChannel](#deleteapnsvoipchannel) - Disables the APNs VoIP channel for an application and deletes any existing settings for the channel.
* [deleteApnsVoipSandboxChannel](#deleteapnsvoipsandboxchannel) - Disables the APNs VoIP sandbox channel for an application and deletes any existing settings for the channel.
* [deleteApp](#deleteapp) - Deletes an application.
* [deleteBaiduChannel](#deletebaiduchannel) - Disables the Baidu channel for an application and deletes any existing settings for the channel.
* [deleteCampaign](#deletecampaign) - Deletes a campaign from an application.
* [deleteEmailChannel](#deleteemailchannel) - Disables the email channel for an application and deletes any existing settings for the channel.
* [deleteEmailTemplate](#deleteemailtemplate) - Deletes a message template for messages that were sent through the email channel.
* [deleteEndpoint](#deleteendpoint) - Deletes an endpoint from an application.
* [deleteEventStream](#deleteeventstream) - Deletes the event stream for an application.
* [deleteGcmChannel](#deletegcmchannel) - Disables the GCM channel for an application and deletes any existing settings for the channel.
* [deleteInAppTemplate](#deleteinapptemplate) - Deletes a message template for messages sent using the in-app message channel.
* [deleteJourney](#deletejourney) - Deletes a journey from an application.
* [deletePushTemplate](#deletepushtemplate) - Deletes a message template for messages that were sent through a push notification channel.
* [deleteRecommenderConfiguration](#deleterecommenderconfiguration) - Deletes an Amazon Pinpoint configuration for a recommender model.
* [deleteSegment](#deletesegment) - Deletes a segment from an application.
* [deleteSmsChannel](#deletesmschannel) - Disables the SMS channel for an application and deletes any existing settings for the channel.
* [deleteSmsTemplate](#deletesmstemplate) - Deletes a message template for messages that were sent through the SMS channel.
* [deleteUserEndpoints](#deleteuserendpoints) - Deletes all the endpoints that are associated with a specific user ID.
* [deleteVoiceChannel](#deletevoicechannel) - Disables the voice channel for an application and deletes any existing settings for the channel.
* [deleteVoiceTemplate](#deletevoicetemplate) - Deletes a message template for messages that were sent through the voice channel.
* [getAdmChannel](#getadmchannel) - Retrieves information about the status and settings of the ADM channel for an application.
* [getApnsChannel](#getapnschannel) - Retrieves information about the status and settings of the APNs channel for an application.
* [getApnsSandboxChannel](#getapnssandboxchannel) - Retrieves information about the status and settings of the APNs sandbox channel for an application.
* [getApnsVoipChannel](#getapnsvoipchannel) - Retrieves information about the status and settings of the APNs VoIP channel for an application.
* [getApnsVoipSandboxChannel](#getapnsvoipsandboxchannel) - Retrieves information about the status and settings of the APNs VoIP sandbox channel for an application.
* [getApp](#getapp) - Retrieves information about an application.
* [getApplicationDateRangeKpi](#getapplicationdaterangekpi) - Retrieves (queries) pre-aggregated data for a standard metric that applies to an application.
* [getApplicationSettings](#getapplicationsettings) - Retrieves information about the settings for an application.
* [getApps](#getapps) - Retrieves information about all the applications that are associated with your Amazon Pinpoint account.
* [getBaiduChannel](#getbaiduchannel) - Retrieves information about the status and settings of the Baidu channel for an application.
* [getCampaign](#getcampaign) - Retrieves information about the status, configuration, and other settings for a campaign.
* [getCampaignActivities](#getcampaignactivities) - Retrieves information about all the activities for a campaign.
* [getCampaignDateRangeKpi](#getcampaigndaterangekpi) - Retrieves (queries) pre-aggregated data for a standard metric that applies to a campaign.
* [getCampaignVersion](#getcampaignversion) - Retrieves information about the status, configuration, and other settings for a specific version of a campaign.
* [getCampaignVersions](#getcampaignversions) - Retrieves information about the status, configuration, and other settings for all versions of a campaign.
* [getCampaigns](#getcampaigns) - Retrieves information about the status, configuration, and other settings for all the campaigns that are associated with an application.
* [getChannels](#getchannels) - Retrieves information about the history and status of each channel for an application.
* [getEmailChannel](#getemailchannel) - Retrieves information about the status and settings of the email channel for an application.
* [getEmailTemplate](#getemailtemplate) - Retrieves the content and settings of a message template for messages that are sent through the email channel.
* [getEndpoint](#getendpoint) - Retrieves information about the settings and attributes of a specific endpoint for an application.
* [getEventStream](#geteventstream) - Retrieves information about the event stream settings for an application.
* [getExportJob](#getexportjob) - Retrieves information about the status and settings of a specific export job for an application.
* [getExportJobs](#getexportjobs) - Retrieves information about the status and settings of all the export jobs for an application.
* [getGcmChannel](#getgcmchannel) - Retrieves information about the status and settings of the GCM channel for an application.
* [getImportJob](#getimportjob) - Retrieves information about the status and settings of a specific import job for an application.
* [getImportJobs](#getimportjobs) - Retrieves information about the status and settings of all the import jobs for an application.
* [getInAppMessages](#getinappmessages) - Retrieves the in-app messages targeted for the provided endpoint ID.
* [getInAppTemplate](#getinapptemplate) - Retrieves the content and settings of a message template for messages sent through the in-app channel.
* [getJourney](#getjourney) - Retrieves information about the status, configuration, and other settings for a journey.
* [getJourneyDateRangeKpi](#getjourneydaterangekpi) - Retrieves (queries) pre-aggregated data for a standard engagement metric that applies to a journey.
* [getJourneyExecutionActivityMetrics](#getjourneyexecutionactivitymetrics) - Retrieves (queries) pre-aggregated data for a standard execution metric that applies to a journey activity.
* [getJourneyExecutionMetrics](#getjourneyexecutionmetrics) - Retrieves (queries) pre-aggregated data for a standard execution metric that applies to a journey.
* [getJourneyRunExecutionActivityMetrics](#getjourneyrunexecutionactivitymetrics) - Retrieves (queries) pre-aggregated data for a standard run execution metric that applies to a journey activity.
* [getJourneyRunExecutionMetrics](#getjourneyrunexecutionmetrics) - Retrieves (queries) pre-aggregated data for a standard run execution metric that applies to a journey.
* [getJourneyRuns](#getjourneyruns) - Provides information about the runs of a journey.
* [getPushTemplate](#getpushtemplate) - Retrieves the content and settings of a message template for messages that are sent through a push notification channel.
* [getRecommenderConfiguration](#getrecommenderconfiguration) - Retrieves information about an Amazon Pinpoint configuration for a recommender model.
* [getRecommenderConfigurations](#getrecommenderconfigurations) - Retrieves information about all the recommender model configurations that are associated with your Amazon Pinpoint account.
* [getSegment](#getsegment) - Retrieves information about the configuration, dimension, and other settings for a specific segment that's associated with an application.
* [getSegmentExportJobs](#getsegmentexportjobs) - Retrieves information about the status and settings of the export jobs for a segment.
* [getSegmentImportJobs](#getsegmentimportjobs) - Retrieves information about the status and settings of the import jobs for a segment.
* [getSegmentVersion](#getsegmentversion) - Retrieves information about the configuration, dimension, and other settings for a specific version of a segment that's associated with an application.
* [getSegmentVersions](#getsegmentversions) - Retrieves information about the configuration, dimension, and other settings for all the versions of a specific segment that's associated with an application.
* [getSegments](#getsegments) - Retrieves information about the configuration, dimension, and other settings for all the segments that are associated with an application.
* [getSmsChannel](#getsmschannel) - Retrieves information about the status and settings of the SMS channel for an application.
* [getSmsTemplate](#getsmstemplate) - Retrieves the content and settings of a message template for messages that are sent through the SMS channel.
* [getUserEndpoints](#getuserendpoints) - Retrieves information about all the endpoints that are associated with a specific user ID.
* [getVoiceChannel](#getvoicechannel) - Retrieves information about the status and settings of the voice channel for an application.
* [getVoiceTemplate](#getvoicetemplate) - Retrieves the content and settings of a message template for messages that are sent through the voice channel.
* [listJourneys](#listjourneys) - Retrieves information about the status, configuration, and other settings for all the journeys that are associated with an application.
* [listTagsForResource](#listtagsforresource) - Retrieves all the tags (keys and values) that are associated with an application, campaign, message template, or segment.
* [listTemplateVersions](#listtemplateversions) - Retrieves information about all the versions of a specific message template.
* [listTemplates](#listtemplates) - Retrieves information about all the message templates that are associated with your Amazon Pinpoint account.
* [phoneNumberValidate](#phonenumbervalidate) - Retrieves information about a phone number.
* [putEventStream](#puteventstream) - Creates a new event stream for an application or updates the settings of an existing event stream for an application.
* [putEvents](#putevents) - Creates a new event to record for endpoints, or creates or updates endpoint data that existing events are associated with.
* [removeAttributes](#removeattributes) - Removes one or more attributes, of the same attribute type, from all the endpoints that are associated with an application.
* [sendMessages](#sendmessages) - Creates and sends a direct message.
* [sendOTPMessage](#sendotpmessage) - Send an OTP message
* [sendUsersMessages](#sendusersmessages) - Creates and sends a message to a list of users.
* [tagResource](#tagresource) - Adds one or more tags (keys and values) to an application, campaign, message template, or segment.
* [untagResource](#untagresource) - Removes one or more tags (keys and values) from an application, campaign, message template, or segment.
* [updateAdmChannel](#updateadmchannel) - Enables the ADM channel for an application or updates the status and settings of the ADM channel for an application.
* [updateApnsChannel](#updateapnschannel) - Enables the APNs channel for an application or updates the status and settings of the APNs channel for an application.
* [updateApnsSandboxChannel](#updateapnssandboxchannel) - Enables the APNs sandbox channel for an application or updates the status and settings of the APNs sandbox channel for an application.
* [updateApnsVoipChannel](#updateapnsvoipchannel) - Enables the APNs VoIP channel for an application or updates the status and settings of the APNs VoIP channel for an application.
* [updateApnsVoipSandboxChannel](#updateapnsvoipsandboxchannel) - Enables the APNs VoIP sandbox channel for an application or updates the status and settings of the APNs VoIP sandbox channel for an application.
* [updateApplicationSettings](#updateapplicationsettings) - Updates the settings for an application.
* [updateBaiduChannel](#updatebaiduchannel) - Enables the Baidu channel for an application or updates the status and settings of the Baidu channel for an application.
* [updateCampaign](#updatecampaign) - Updates the configuration and other settings for a campaign.
* [updateEmailChannel](#updateemailchannel) - Enables the email channel for an application or updates the status and settings of the email channel for an application.
* [updateEmailTemplate](#updateemailtemplate) - Updates an existing message template for messages that are sent through the email channel.
* [updateEndpoint](#updateendpoint) - Creates a new endpoint for an application or updates the settings and attributes of an existing endpoint for an application. You can also use this operation to define custom attributes for an endpoint. If an update includes one or more values for a custom attribute, Amazon Pinpoint replaces (overwrites) any existing values with the new values.
* [updateEndpointsBatch](#updateendpointsbatch) - Creates a new batch of endpoints for an application or updates the settings and attributes of a batch of existing endpoints for an application. You can also use this operation to define custom attributes for a batch of endpoints. If an update includes one or more values for a custom attribute, Amazon Pinpoint replaces (overwrites) any existing values with the new values.
* [updateGcmChannel](#updategcmchannel) - Enables the GCM channel for an application or updates the status and settings of the GCM channel for an application.
* [updateInAppTemplate](#updateinapptemplate) - Updates an existing message template for messages sent through the in-app message channel.
* [updateJourney](#updatejourney) - Updates the configuration and other settings for a journey.
* [updateJourneyState](#updatejourneystate) - Cancels (stops) an active journey.
* [updatePushTemplate](#updatepushtemplate) - Updates an existing message template for messages that are sent through a push notification channel.
* [updateRecommenderConfiguration](#updaterecommenderconfiguration) - Updates an Amazon Pinpoint configuration for a recommender model.
* [updateSegment](#updatesegment) - Creates a new segment for an application or updates the configuration, dimension, and other settings for an existing segment that's associated with an application.
* [updateSmsChannel](#updatesmschannel) - Enables the SMS channel for an application or updates the status and settings of the SMS channel for an application.
* [updateSmsTemplate](#updatesmstemplate) - Updates an existing message template for messages that are sent through the SMS channel.
* [updateTemplateActiveVersion](#updatetemplateactiveversion) - Changes the status of a specific version of a message template to <i>active</i>.
* [updateVoiceChannel](#updatevoicechannel) - Enables the voice channel for an application or updates the status and settings of the voice channel for an application.
* [updateVoiceTemplate](#updatevoicetemplate) - Updates an existing message template for messages that are sent through the voice channel.
* [verifyOTPMessage](#verifyotpmessage) - Verify an OTP

## createApp

 <p>Creates an application.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateAppRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateAppRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateAppRequestBodyCreateApplicationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateAppRequest();
    $request->requestBody = new CreateAppRequestBody();
    $request->requestBody->createApplicationRequest = new CreateAppRequestBodyCreateApplicationRequest();
    $request->requestBody->createApplicationRequest->name = 'Ken Kshlerin';
    $request->requestBody->createApplicationRequest->tags = [
        'temporibus' => 'ab',
        'quis' => 'veritatis',
        'deserunt' => 'perferendis',
        'ipsam' => 'repellendus',
    ];
    $request->xAmzAlgorithm = 'sapiente';
    $request->xAmzContentSha256 = 'quo';
    $request->xAmzCredential = 'odit';
    $request->xAmzDate = 'at';
    $request->xAmzSecurityToken = 'at';
    $request->xAmzSignature = 'maiores';
    $request->xAmzSignedHeaders = 'molestiae';

    $response = $sdk->sdk->createApp($request);

    if ($response->createAppResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createCampaign

Creates a new campaign for an application or updates the settings of an existing campaign for an application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateCampaignRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateCampaignRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateCampaignRequestBodyWriteCampaignRequest;
use \OpenAPI\OpenAPI\Models\Shared\WriteTreatmentResource;
use \OpenAPI\OpenAPI\Models\Shared\CustomDeliveryConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\EndpointTypesElementEnum;
use \OpenAPI\OpenAPI\Models\Shared\MessageConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\Message;
use \OpenAPI\OpenAPI\Models\Shared\ActionEnum;
use \OpenAPI\OpenAPI\Models\Shared\CampaignCustomMessage;
use \OpenAPI\OpenAPI\Models\Shared\CampaignEmailMessage;
use \OpenAPI\OpenAPI\Models\Shared\CampaignInAppMessage;
use \OpenAPI\OpenAPI\Models\Shared\InAppMessageContent;
use \OpenAPI\OpenAPI\Models\Shared\InAppMessageBodyConfig;
use \OpenAPI\OpenAPI\Models\Shared\AlignmentEnum;
use \OpenAPI\OpenAPI\Models\Shared\InAppMessageHeaderConfig;
use \OpenAPI\OpenAPI\Models\Shared\InAppMessageButton;
use \OpenAPI\OpenAPI\Models\Shared\OverrideButtonConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\ButtonActionEnum;
use \OpenAPI\OpenAPI\Models\Shared\DefaultButtonConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\LayoutEnum;
use \OpenAPI\OpenAPI\Models\Shared\CampaignSmsMessage;
use \OpenAPI\OpenAPI\Models\Shared\MessageTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Schedule;
use \OpenAPI\OpenAPI\Models\Shared\CampaignEventFilter;
use \OpenAPI\OpenAPI\Models\Shared\EventDimensions;
use \OpenAPI\OpenAPI\Models\Shared\AttributeDimension;
use \OpenAPI\OpenAPI\Models\Shared\AttributeTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SetDimension;
use \OpenAPI\OpenAPI\Models\Shared\DimensionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\MetricDimension;
use \OpenAPI\OpenAPI\Models\Shared\FilterTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\FrequencyEnum;
use \OpenAPI\OpenAPI\Models\Shared\QuietTime;
use \OpenAPI\OpenAPI\Models\Shared\TemplateConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\Template;
use \OpenAPI\OpenAPI\Models\Shared\CampaignHook;
use \OpenAPI\OpenAPI\Models\Shared\ModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CampaignLimits;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateCampaignRequest();
    $request->requestBody = new CreateCampaignRequestBody();
    $request->requestBody->writeCampaignRequest = new CreateCampaignRequestBodyWriteCampaignRequest();
    $request->requestBody->writeCampaignRequest->additionalTreatments = [
        new WriteTreatmentResource(),
        new WriteTreatmentResource(),
        new WriteTreatmentResource(),
        new WriteTreatmentResource(),
    ];
    $request->requestBody->writeCampaignRequest->customDeliveryConfiguration = new CustomDeliveryConfiguration();
    $request->requestBody->writeCampaignRequest->customDeliveryConfiguration->deliveryUri = 'quod';
    $request->requestBody->writeCampaignRequest->customDeliveryConfiguration->endpointTypes = [
        EndpointTypesElementEnum::ADM,
        EndpointTypesElementEnum::BAIDU,
    ];
    $request->requestBody->writeCampaignRequest->description = 'dolorum';
    $request->requestBody->writeCampaignRequest->holdoutPercent = 118274;
    $request->requestBody->writeCampaignRequest->hook = new CampaignHook();
    $request->requestBody->writeCampaignRequest->hook->lambdaFunctionName = 'nam';
    $request->requestBody->writeCampaignRequest->hook->mode = ModeEnum::FILTER;
    $request->requestBody->writeCampaignRequest->hook->webUrl = 'occaecati';
    $request->requestBody->writeCampaignRequest->isPaused = false;
    $request->requestBody->writeCampaignRequest->limits = new CampaignLimits();
    $request->requestBody->writeCampaignRequest->limits->daily = 143353;
    $request->requestBody->writeCampaignRequest->limits->maximumDuration = 537373;
    $request->requestBody->writeCampaignRequest->limits->messagesPerSecond = 944669;
    $request->requestBody->writeCampaignRequest->limits->session = 758616;
    $request->requestBody->writeCampaignRequest->limits->total = 521848;
    $request->requestBody->writeCampaignRequest->messageConfiguration = new MessageConfiguration();
    $request->requestBody->writeCampaignRequest->messageConfiguration->admMessage = new Message();
    $request->requestBody->writeCampaignRequest->messageConfiguration->admMessage->action = ActionEnum::OPEN_APP;
    $request->requestBody->writeCampaignRequest->messageConfiguration->admMessage->body = 'commodi';
    $request->requestBody->writeCampaignRequest->messageConfiguration->admMessage->imageIconUrl = 'molestiae';
    $request->requestBody->writeCampaignRequest->messageConfiguration->admMessage->imageSmallIconUrl = 'modi';
    $request->requestBody->writeCampaignRequest->messageConfiguration->admMessage->imageUrl = 'qui';
    $request->requestBody->writeCampaignRequest->messageConfiguration->admMessage->jsonBody = 'impedit';
    $request->requestBody->writeCampaignRequest->messageConfiguration->admMessage->mediaUrl = 'cum';
    $request->requestBody->writeCampaignRequest->messageConfiguration->admMessage->rawContent = 'esse';
    $request->requestBody->writeCampaignRequest->messageConfiguration->admMessage->silentPush = false;
    $request->requestBody->writeCampaignRequest->messageConfiguration->admMessage->timeToLive = 216550;
    $request->requestBody->writeCampaignRequest->messageConfiguration->admMessage->title = 'Ms.';
    $request->requestBody->writeCampaignRequest->messageConfiguration->admMessage->url = 'aspernatur';
    $request->requestBody->writeCampaignRequest->messageConfiguration->apnsMessage = new Message();
    $request->requestBody->writeCampaignRequest->messageConfiguration->apnsMessage->action = ActionEnum::OPEN_APP;
    $request->requestBody->writeCampaignRequest->messageConfiguration->apnsMessage->body = 'ad';
    $request->requestBody->writeCampaignRequest->messageConfiguration->apnsMessage->imageIconUrl = 'natus';
    $request->requestBody->writeCampaignRequest->messageConfiguration->apnsMessage->imageSmallIconUrl = 'sed';
    $request->requestBody->writeCampaignRequest->messageConfiguration->apnsMessage->imageUrl = 'iste';
    $request->requestBody->writeCampaignRequest->messageConfiguration->apnsMessage->jsonBody = 'dolor';
    $request->requestBody->writeCampaignRequest->messageConfiguration->apnsMessage->mediaUrl = 'natus';
    $request->requestBody->writeCampaignRequest->messageConfiguration->apnsMessage->rawContent = 'laboriosam';
    $request->requestBody->writeCampaignRequest->messageConfiguration->apnsMessage->silentPush = false;
    $request->requestBody->writeCampaignRequest->messageConfiguration->apnsMessage->timeToLive = 943749;
    $request->requestBody->writeCampaignRequest->messageConfiguration->apnsMessage->title = 'Dr.';
    $request->requestBody->writeCampaignRequest->messageConfiguration->apnsMessage->url = 'fuga';
    $request->requestBody->writeCampaignRequest->messageConfiguration->baiduMessage = new Message();
    $request->requestBody->writeCampaignRequest->messageConfiguration->baiduMessage->action = ActionEnum::DEEP_LINK;
    $request->requestBody->writeCampaignRequest->messageConfiguration->baiduMessage->body = 'corporis';
    $request->requestBody->writeCampaignRequest->messageConfiguration->baiduMessage->imageIconUrl = 'iste';
    $request->requestBody->writeCampaignRequest->messageConfiguration->baiduMessage->imageSmallIconUrl = 'iure';
    $request->requestBody->writeCampaignRequest->messageConfiguration->baiduMessage->imageUrl = 'saepe';
    $request->requestBody->writeCampaignRequest->messageConfiguration->baiduMessage->jsonBody = 'quidem';
    $request->requestBody->writeCampaignRequest->messageConfiguration->baiduMessage->mediaUrl = 'architecto';
    $request->requestBody->writeCampaignRequest->messageConfiguration->baiduMessage->rawContent = 'ipsa';
    $request->requestBody->writeCampaignRequest->messageConfiguration->baiduMessage->silentPush = false;
    $request->requestBody->writeCampaignRequest->messageConfiguration->baiduMessage->timeToLive = 969810;
    $request->requestBody->writeCampaignRequest->messageConfiguration->baiduMessage->title = 'Miss';
    $request->requestBody->writeCampaignRequest->messageConfiguration->baiduMessage->url = 'mollitia';
    $request->requestBody->writeCampaignRequest->messageConfiguration->customMessage = new CampaignCustomMessage();
    $request->requestBody->writeCampaignRequest->messageConfiguration->customMessage->data = 'laborum';
    $request->requestBody->writeCampaignRequest->messageConfiguration->defaultMessage = new Message();
    $request->requestBody->writeCampaignRequest->messageConfiguration->defaultMessage->action = ActionEnum::OPEN_APP;
    $request->requestBody->writeCampaignRequest->messageConfiguration->defaultMessage->body = 'dolorem';
    $request->requestBody->writeCampaignRequest->messageConfiguration->defaultMessage->imageIconUrl = 'corporis';
    $request->requestBody->writeCampaignRequest->messageConfiguration->defaultMessage->imageSmallIconUrl = 'explicabo';
    $request->requestBody->writeCampaignRequest->messageConfiguration->defaultMessage->imageUrl = 'nobis';
    $request->requestBody->writeCampaignRequest->messageConfiguration->defaultMessage->jsonBody = 'enim';
    $request->requestBody->writeCampaignRequest->messageConfiguration->defaultMessage->mediaUrl = 'omnis';
    $request->requestBody->writeCampaignRequest->messageConfiguration->defaultMessage->rawContent = 'nemo';
    $request->requestBody->writeCampaignRequest->messageConfiguration->defaultMessage->silentPush = false;
    $request->requestBody->writeCampaignRequest->messageConfiguration->defaultMessage->timeToLive = 325047;
    $request->requestBody->writeCampaignRequest->messageConfiguration->defaultMessage->title = 'Ms.';
    $request->requestBody->writeCampaignRequest->messageConfiguration->defaultMessage->url = 'accusantium';
    $request->requestBody->writeCampaignRequest->messageConfiguration->emailMessage = new CampaignEmailMessage();
    $request->requestBody->writeCampaignRequest->messageConfiguration->emailMessage->body = 'iure';
    $request->requestBody->writeCampaignRequest->messageConfiguration->emailMessage->fromAddress = 'culpa';
    $request->requestBody->writeCampaignRequest->messageConfiguration->emailMessage->htmlBody = 'doloribus';
    $request->requestBody->writeCampaignRequest->messageConfiguration->emailMessage->title = 'Dr.';
    $request->requestBody->writeCampaignRequest->messageConfiguration->gcmMessage = new Message();
    $request->requestBody->writeCampaignRequest->messageConfiguration->gcmMessage->action = ActionEnum::OPEN_APP;
    $request->requestBody->writeCampaignRequest->messageConfiguration->gcmMessage->body = 'mollitia';
    $request->requestBody->writeCampaignRequest->messageConfiguration->gcmMessage->imageIconUrl = 'dolorem';
    $request->requestBody->writeCampaignRequest->messageConfiguration->gcmMessage->imageSmallIconUrl = 'culpa';
    $request->requestBody->writeCampaignRequest->messageConfiguration->gcmMessage->imageUrl = 'consequuntur';
    $request->requestBody->writeCampaignRequest->messageConfiguration->gcmMessage->jsonBody = 'repellat';
    $request->requestBody->writeCampaignRequest->messageConfiguration->gcmMessage->mediaUrl = 'mollitia';
    $request->requestBody->writeCampaignRequest->messageConfiguration->gcmMessage->rawContent = 'occaecati';
    $request->requestBody->writeCampaignRequest->messageConfiguration->gcmMessage->silentPush = false;
    $request->requestBody->writeCampaignRequest->messageConfiguration->gcmMessage->timeToLive = 253291;
    $request->requestBody->writeCampaignRequest->messageConfiguration->gcmMessage->title = 'Ms.';
    $request->requestBody->writeCampaignRequest->messageConfiguration->gcmMessage->url = 'quam';
    $request->requestBody->writeCampaignRequest->messageConfiguration->inAppMessage = new CampaignInAppMessage();
    $request->requestBody->writeCampaignRequest->messageConfiguration->inAppMessage->body = 'molestiae';
    $request->requestBody->writeCampaignRequest->messageConfiguration->inAppMessage->content = [
        new InAppMessageContent(),
    ];
    $request->requestBody->writeCampaignRequest->messageConfiguration->inAppMessage->customConfig = [
        'quia' => 'quis',
        'vitae' => 'laborum',
        'animi' => 'enim',
    ];
    $request->requestBody->writeCampaignRequest->messageConfiguration->inAppMessage->layout = LayoutEnum::BOTTOM_BANNER;
    $request->requestBody->writeCampaignRequest->messageConfiguration->smsMessage = new CampaignSmsMessage();
    $request->requestBody->writeCampaignRequest->messageConfiguration->smsMessage->body = 'quo';
    $request->requestBody->writeCampaignRequest->messageConfiguration->smsMessage->entityId = 'sequi';
    $request->requestBody->writeCampaignRequest->messageConfiguration->smsMessage->messageType = MessageTypeEnum::PROMOTIONAL;
    $request->requestBody->writeCampaignRequest->messageConfiguration->smsMessage->originationNumber = 'ipsam';
    $request->requestBody->writeCampaignRequest->messageConfiguration->smsMessage->senderId = 'id';
    $request->requestBody->writeCampaignRequest->messageConfiguration->smsMessage->templateId = 'possimus';
    $request->requestBody->writeCampaignRequest->name = 'Joyce Mueller';
    $request->requestBody->writeCampaignRequest->priority = 96098;
    $request->requestBody->writeCampaignRequest->schedule = new Schedule();
    $request->requestBody->writeCampaignRequest->schedule->endTime = 'reiciendis';
    $request->requestBody->writeCampaignRequest->schedule->eventFilter = new CampaignEventFilter();
    $request->requestBody->writeCampaignRequest->schedule->eventFilter->dimensions = new EventDimensions();
    $request->requestBody->writeCampaignRequest->schedule->eventFilter->dimensions->attributes = [
        'vero' => new AttributeDimension(),
        'nihil' => new AttributeDimension(),
        'praesentium' => new AttributeDimension(),
        'voluptatibus' => new AttributeDimension(),
    ];
    $request->requestBody->writeCampaignRequest->schedule->eventFilter->dimensions->eventType = new SetDimension();
    $request->requestBody->writeCampaignRequest->schedule->eventFilter->dimensions->eventType->dimensionType = DimensionTypeEnum::INCLUSIVE;
    $request->requestBody->writeCampaignRequest->schedule->eventFilter->dimensions->eventType->values = [
        'voluptate',
        'cum',
        'perferendis',
    ];
    $request->requestBody->writeCampaignRequest->schedule->eventFilter->dimensions->metrics = [
        'reprehenderit' => new MetricDimension(),
    ];
    $request->requestBody->writeCampaignRequest->schedule->eventFilter->filterType = FilterTypeEnum::SYSTEM;
    $request->requestBody->writeCampaignRequest->schedule->frequency = FrequencyEnum::IN_APP_EVENT;
    $request->requestBody->writeCampaignRequest->schedule->isLocalTime = false;
    $request->requestBody->writeCampaignRequest->schedule->quietTime = new QuietTime();
    $request->requestBody->writeCampaignRequest->schedule->quietTime->end = 'dicta';
    $request->requestBody->writeCampaignRequest->schedule->quietTime->start = 'corporis';
    $request->requestBody->writeCampaignRequest->schedule->startTime = 'dolore';
    $request->requestBody->writeCampaignRequest->schedule->timezone = 'iusto';
    $request->requestBody->writeCampaignRequest->segmentId = 'dicta';
    $request->requestBody->writeCampaignRequest->segmentVersion = 688661;
    $request->requestBody->writeCampaignRequest->templateConfiguration = new TemplateConfiguration();
    $request->requestBody->writeCampaignRequest->templateConfiguration->emailTemplate = new Template();
    $request->requestBody->writeCampaignRequest->templateConfiguration->emailTemplate->name = 'Sophia Jerde I';
    $request->requestBody->writeCampaignRequest->templateConfiguration->emailTemplate->version = 'quidem';
    $request->requestBody->writeCampaignRequest->templateConfiguration->pushTemplate = new Template();
    $request->requestBody->writeCampaignRequest->templateConfiguration->pushTemplate->name = 'Andy Streich';
    $request->requestBody->writeCampaignRequest->templateConfiguration->pushTemplate->version = 'rem';
    $request->requestBody->writeCampaignRequest->templateConfiguration->smsTemplate = new Template();
    $request->requestBody->writeCampaignRequest->templateConfiguration->smsTemplate->name = 'Carl Waelchi DVM';
    $request->requestBody->writeCampaignRequest->templateConfiguration->smsTemplate->version = 'incidunt';
    $request->requestBody->writeCampaignRequest->templateConfiguration->voiceTemplate = new Template();
    $request->requestBody->writeCampaignRequest->templateConfiguration->voiceTemplate->name = 'Elizabeth Orn';
    $request->requestBody->writeCampaignRequest->templateConfiguration->voiceTemplate->version = 'deserunt';
    $request->requestBody->writeCampaignRequest->treatmentDescription = 'distinctio';
    $request->requestBody->writeCampaignRequest->treatmentName = 'quibusdam';
    $request->requestBody->writeCampaignRequest->tags = [
        'modi' => 'qui',
        'aliquid' => 'cupiditate',
    ];
    $request->xAmzAlgorithm = 'quos';
    $request->xAmzContentSha256 = 'perferendis';
    $request->xAmzCredential = 'magni';
    $request->xAmzDate = 'assumenda';
    $request->xAmzSecurityToken = 'ipsam';
    $request->xAmzSignature = 'alias';
    $request->xAmzSignedHeaders = 'fugit';
    $request->applicationId = 'dolorum';

    $response = $sdk->sdk->createCampaign($request);

    if ($response->createCampaignResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createEmailTemplate

Creates a message template for messages that are sent through the email channel.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateEmailTemplateRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateEmailTemplateRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateEmailTemplateRequestBodyEmailTemplateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateEmailTemplateRequest();
    $request->requestBody = new CreateEmailTemplateRequestBody();
    $request->requestBody->emailTemplateRequest = new CreateEmailTemplateRequestBodyEmailTemplateRequest();
    $request->requestBody->emailTemplateRequest->defaultSubstitutions = 'excepturi';
    $request->requestBody->emailTemplateRequest->htmlPart = 'tempora';
    $request->requestBody->emailTemplateRequest->recommenderId = 'facilis';
    $request->requestBody->emailTemplateRequest->subject = 'tempore';
    $request->requestBody->emailTemplateRequest->templateDescription = 'labore';
    $request->requestBody->emailTemplateRequest->textPart = 'delectus';
    $request->requestBody->emailTemplateRequest->tags = [
        'non' => 'eligendi',
        'sint' => 'aliquid',
    ];
    $request->xAmzAlgorithm = 'provident';
    $request->xAmzContentSha256 = 'necessitatibus';
    $request->xAmzCredential = 'sint';
    $request->xAmzDate = 'officia';
    $request->xAmzSecurityToken = 'dolor';
    $request->xAmzSignature = 'debitis';
    $request->xAmzSignedHeaders = 'a';
    $request->templateName = 'dolorum';

    $response = $sdk->sdk->createEmailTemplate($request);

    if ($response->createEmailTemplateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createExportJob

Creates an export job for an application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateExportJobRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateExportJobRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateExportJobRequestBodyExportJobRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateExportJobRequest();
    $request->requestBody = new CreateExportJobRequestBody();
    $request->requestBody->exportJobRequest = new CreateExportJobRequestBodyExportJobRequest();
    $request->requestBody->exportJobRequest->roleArn = 'in';
    $request->requestBody->exportJobRequest->s3UrlPrefix = 'in';
    $request->requestBody->exportJobRequest->segmentId = 'illum';
    $request->requestBody->exportJobRequest->segmentVersion = 978571;
    $request->xAmzAlgorithm = 'rerum';
    $request->xAmzContentSha256 = 'dicta';
    $request->xAmzCredential = 'magnam';
    $request->xAmzDate = 'cumque';
    $request->xAmzSecurityToken = 'facere';
    $request->xAmzSignature = 'ea';
    $request->xAmzSignedHeaders = 'aliquid';
    $request->applicationId = 'laborum';

    $response = $sdk->sdk->createExportJob($request);

    if ($response->createExportJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createImportJob

Creates an import job for an application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateImportJobRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateImportJobRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateImportJobRequestBodyImportJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\FormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateImportJobRequest();
    $request->requestBody = new CreateImportJobRequestBody();
    $request->requestBody->importJobRequest = new CreateImportJobRequestBodyImportJobRequest();
    $request->requestBody->importJobRequest->defineSegment = false;
    $request->requestBody->importJobRequest->externalId = 'accusamus';
    $request->requestBody->importJobRequest->format = FormatEnum::CSV;
    $request->requestBody->importJobRequest->registerEndpoints = false;
    $request->requestBody->importJobRequest->roleArn = 'occaecati';
    $request->requestBody->importJobRequest->s3Url = 'enim';
    $request->requestBody->importJobRequest->segmentId = 'accusamus';
    $request->requestBody->importJobRequest->segmentName = 'delectus';
    $request->xAmzAlgorithm = 'quidem';
    $request->xAmzContentSha256 = 'provident';
    $request->xAmzCredential = 'nam';
    $request->xAmzDate = 'id';
    $request->xAmzSecurityToken = 'blanditiis';
    $request->xAmzSignature = 'deleniti';
    $request->xAmzSignedHeaders = 'sapiente';
    $request->applicationId = 'amet';

    $response = $sdk->sdk->createImportJob($request);

    if ($response->createImportJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createInAppTemplate

Creates a new message template for messages using the in-app message channel.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateInAppTemplateRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateInAppTemplateRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateInAppTemplateRequestBodyInAppTemplateRequest;
use \OpenAPI\OpenAPI\Models\Shared\InAppMessageContent;
use \OpenAPI\OpenAPI\Models\Shared\InAppMessageBodyConfig;
use \OpenAPI\OpenAPI\Models\Shared\AlignmentEnum;
use \OpenAPI\OpenAPI\Models\Shared\InAppMessageHeaderConfig;
use \OpenAPI\OpenAPI\Models\Shared\InAppMessageButton;
use \OpenAPI\OpenAPI\Models\Shared\OverrideButtonConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\ButtonActionEnum;
use \OpenAPI\OpenAPI\Models\Shared\DefaultButtonConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\LayoutEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateInAppTemplateRequest();
    $request->requestBody = new CreateInAppTemplateRequestBody();
    $request->requestBody->inAppTemplateRequest = new CreateInAppTemplateRequestBodyInAppTemplateRequest();
    $request->requestBody->inAppTemplateRequest->content = [
        new InAppMessageContent(),
        new InAppMessageContent(),
        new InAppMessageContent(),
    ];
    $request->requestBody->inAppTemplateRequest->customConfig = [
        'vel' => 'natus',
        'omnis' => 'molestiae',
    ];
    $request->requestBody->inAppTemplateRequest->layout = LayoutEnum::BOTTOM_BANNER;
    $request->requestBody->inAppTemplateRequest->templateDescription = 'nihil';
    $request->requestBody->inAppTemplateRequest->tags = [
        'distinctio' => 'id',
        'labore' => 'labore',
    ];
    $request->xAmzAlgorithm = 'suscipit';
    $request->xAmzContentSha256 = 'natus';
    $request->xAmzCredential = 'nobis';
    $request->xAmzDate = 'eum';
    $request->xAmzSecurityToken = 'vero';
    $request->xAmzSignature = 'aspernatur';
    $request->xAmzSignedHeaders = 'architecto';
    $request->templateName = 'magnam';

    $response = $sdk->sdk->createInAppTemplate($request);

    if ($response->createInAppTemplateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createJourney

Creates a journey for an application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateJourneyRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateJourneyRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateJourneyRequestBodyWriteJourneyRequest;
use \OpenAPI\OpenAPI\Models\Shared\Activity;
use \OpenAPI\OpenAPI\Models\Shared\CustomMessageActivity;
use \OpenAPI\OpenAPI\Models\Shared\EndpointTypesElementEnum;
use \OpenAPI\OpenAPI\Models\Shared\JourneyCustomMessage;
use \OpenAPI\OpenAPI\Models\Shared\ConditionalSplitActivity;
use \OpenAPI\OpenAPI\Models\Shared\Condition;
use \OpenAPI\OpenAPI\Models\Shared\SimpleCondition;
use \OpenAPI\OpenAPI\Models\Shared\EventCondition;
use \OpenAPI\OpenAPI\Models\Shared\EventDimensions;
use \OpenAPI\OpenAPI\Models\Shared\AttributeDimension;
use \OpenAPI\OpenAPI\Models\Shared\AttributeTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SetDimension;
use \OpenAPI\OpenAPI\Models\Shared\DimensionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\MetricDimension;
use \OpenAPI\OpenAPI\Models\Shared\SegmentCondition;
use \OpenAPI\OpenAPI\Models\Shared\SimpleConditionSegmentDimensions;
use \OpenAPI\OpenAPI\Models\Shared\SegmentBehaviors;
use \OpenAPI\OpenAPI\Models\Shared\RecencyDimension;
use \OpenAPI\OpenAPI\Models\Shared\DurationEnum;
use \OpenAPI\OpenAPI\Models\Shared\RecencyTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SegmentDemographics;
use \OpenAPI\OpenAPI\Models\Shared\SegmentLocation;
use \OpenAPI\OpenAPI\Models\Shared\GPSPointDimension;
use \OpenAPI\OpenAPI\Models\Shared\GPSCoordinates;
use \OpenAPI\OpenAPI\Models\Shared\OperatorEnum;
use \OpenAPI\OpenAPI\Models\Shared\WaitTime;
use \OpenAPI\OpenAPI\Models\Shared\ContactCenterActivity;
use \OpenAPI\OpenAPI\Models\Shared\EmailMessageActivity;
use \OpenAPI\OpenAPI\Models\Shared\JourneyEmailMessage;
use \OpenAPI\OpenAPI\Models\Shared\HoldoutActivity;
use \OpenAPI\OpenAPI\Models\Shared\MultiConditionalSplitActivity;
use \OpenAPI\OpenAPI\Models\Shared\MultiConditionalBranch;
use \OpenAPI\OpenAPI\Models\Shared\PushMessageActivity;
use \OpenAPI\OpenAPI\Models\Shared\JourneyPushMessage;
use \OpenAPI\OpenAPI\Models\Shared\RandomSplitActivity;
use \OpenAPI\OpenAPI\Models\Shared\RandomSplitEntry;
use \OpenAPI\OpenAPI\Models\Shared\SMSMessageActivity;
use \OpenAPI\OpenAPI\Models\Shared\JourneySMSMessage;
use \OpenAPI\OpenAPI\Models\Shared\MessageTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\WaitActivity;
use \OpenAPI\OpenAPI\Models\Shared\ClosedDays;
use \OpenAPI\OpenAPI\Models\Shared\ClosedDaysRule;
use \OpenAPI\OpenAPI\Models\Shared\JourneyChannelSettings;
use \OpenAPI\OpenAPI\Models\Shared\JourneyLimits;
use \OpenAPI\OpenAPI\Models\Shared\OpenHours;
use \OpenAPI\OpenAPI\Models\Shared\OpenHoursRule;
use \OpenAPI\OpenAPI\Models\Shared\QuietTime;
use \OpenAPI\OpenAPI\Models\Shared\JourneySchedule;
use \OpenAPI\OpenAPI\Models\Shared\StartCondition;
use \OpenAPI\OpenAPI\Models\Shared\EventStartCondition;
use \OpenAPI\OpenAPI\Models\Shared\EventFilter;
use \OpenAPI\OpenAPI\Models\Shared\FilterTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\StateEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateJourneyRequest();
    $request->requestBody = new CreateJourneyRequestBody();
    $request->requestBody->writeJourneyRequest = new CreateJourneyRequestBodyWriteJourneyRequest();
    $request->requestBody->writeJourneyRequest->activities = [
        'excepturi' => new Activity(),
    ];
    $request->requestBody->writeJourneyRequest->closedDays = new ClosedDays();
    $request->requestBody->writeJourneyRequest->closedDays->custom = [
        new ClosedDaysRule(),
        new ClosedDaysRule(),
    ];
    $request->requestBody->writeJourneyRequest->closedDays->email = [
        new ClosedDaysRule(),
        new ClosedDaysRule(),
        new ClosedDaysRule(),
    ];
    $request->requestBody->writeJourneyRequest->closedDays->push = [
        new ClosedDaysRule(),
        new ClosedDaysRule(),
        new ClosedDaysRule(),
    ];
    $request->requestBody->writeJourneyRequest->closedDays->sms = [
        new ClosedDaysRule(),
        new ClosedDaysRule(),
        new ClosedDaysRule(),
    ];
    $request->requestBody->writeJourneyRequest->closedDays->voice = [
        new ClosedDaysRule(),
    ];
    $request->requestBody->writeJourneyRequest->creationDate = 'mollitia';
    $request->requestBody->writeJourneyRequest->journeyChannelSettings = new JourneyChannelSettings();
    $request->requestBody->writeJourneyRequest->journeyChannelSettings->connectCampaignArn = 'reiciendis';
    $request->requestBody->writeJourneyRequest->journeyChannelSettings->connectCampaignExecutionRoleArn = 'mollitia';
    $request->requestBody->writeJourneyRequest->lastModifiedDate = 'ad';
    $request->requestBody->writeJourneyRequest->limits = new JourneyLimits();
    $request->requestBody->writeJourneyRequest->limits->dailyCap = 431418;
    $request->requestBody->writeJourneyRequest->limits->endpointReentryCap = 221262;
    $request->requestBody->writeJourneyRequest->limits->endpointReentryInterval = 'necessitatibus';
    $request->requestBody->writeJourneyRequest->limits->messagesPerSecond = 141264;
    $request->requestBody->writeJourneyRequest->localTime = false;
    $request->requestBody->writeJourneyRequest->name = 'Joyce Kertzmann';
    $request->requestBody->writeJourneyRequest->openHours = new OpenHours();
    $request->requestBody->writeJourneyRequest->openHours->custom = [
        'maxime' => [
            new OpenHoursRule(),
            new OpenHoursRule(),
            new OpenHoursRule(),
        ],
        'facilis' => [
            new OpenHoursRule(),
            new OpenHoursRule(),
        ],
    ];
    $request->requestBody->writeJourneyRequest->openHours->email = [
        'architecto' => [
            new OpenHoursRule(),
            new OpenHoursRule(),
            new OpenHoursRule(),
            new OpenHoursRule(),
        ],
    ];
    $request->requestBody->writeJourneyRequest->openHours->push = [
        'expedita' => [
            new OpenHoursRule(),
            new OpenHoursRule(),
        ],
        'repellat' => [
            new OpenHoursRule(),
            new OpenHoursRule(),
            new OpenHoursRule(),
            new OpenHoursRule(),
        ],
    ];
    $request->requestBody->writeJourneyRequest->openHours->sms = [
        'saepe' => [
            new OpenHoursRule(),
            new OpenHoursRule(),
            new OpenHoursRule(),
            new OpenHoursRule(),
        ],
    ];
    $request->requestBody->writeJourneyRequest->openHours->voice = [
        'consequuntur' => [
            new OpenHoursRule(),
            new OpenHoursRule(),
            new OpenHoursRule(),
        ],
    ];
    $request->requestBody->writeJourneyRequest->quietTime = new QuietTime();
    $request->requestBody->writeJourneyRequest->quietTime->end = 'natus';
    $request->requestBody->writeJourneyRequest->quietTime->start = 'magni';
    $request->requestBody->writeJourneyRequest->refreshFrequency = 'sunt';
    $request->requestBody->writeJourneyRequest->refreshOnSegmentUpdate = false;
    $request->requestBody->writeJourneyRequest->schedule = new JourneySchedule();
    $request->requestBody->writeJourneyRequest->schedule->endTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-06-16T10:20:37.479Z');
    $request->requestBody->writeJourneyRequest->schedule->startTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-07-30T23:39:27.609Z');
    $request->requestBody->writeJourneyRequest->schedule->timezone = 'ea';
    $request->requestBody->writeJourneyRequest->sendingSchedule = false;
    $request->requestBody->writeJourneyRequest->startActivity = 'excepturi';
    $request->requestBody->writeJourneyRequest->startCondition = new StartCondition();
    $request->requestBody->writeJourneyRequest->startCondition->description = 'odit';
    $request->requestBody->writeJourneyRequest->startCondition->eventStartCondition = new EventStartCondition();
    $request->requestBody->writeJourneyRequest->startCondition->eventStartCondition->eventFilter = new EventFilter();
    $request->requestBody->writeJourneyRequest->startCondition->eventStartCondition->eventFilter->dimensions = new EventDimensions();
    $request->requestBody->writeJourneyRequest->startCondition->eventStartCondition->eventFilter->dimensions->attributes = [
        'accusantium' => new AttributeDimension(),
        'ab' => new AttributeDimension(),
    ];
    $request->requestBody->writeJourneyRequest->startCondition->eventStartCondition->eventFilter->dimensions->eventType = new SetDimension();
    $request->requestBody->writeJourneyRequest->startCondition->eventStartCondition->eventFilter->dimensions->eventType->dimensionType = DimensionTypeEnum::EXCLUSIVE;
    $request->requestBody->writeJourneyRequest->startCondition->eventStartCondition->eventFilter->dimensions->eventType->values = [
        'ipsam',
        'voluptate',
        'autem',
    ];
    $request->requestBody->writeJourneyRequest->startCondition->eventStartCondition->eventFilter->dimensions->metrics = [
        'eaque' => new MetricDimension(),
        'pariatur' => new MetricDimension(),
        'nemo' => new MetricDimension(),
    ];
    $request->requestBody->writeJourneyRequest->startCondition->eventStartCondition->eventFilter->filterType = FilterTypeEnum::ENDPOINT;
    $request->requestBody->writeJourneyRequest->startCondition->eventStartCondition->segmentId = 'perferendis';
    $request->requestBody->writeJourneyRequest->startCondition->segmentStartCondition = new SegmentCondition();
    $request->requestBody->writeJourneyRequest->startCondition->segmentStartCondition->segmentId = 'fugiat';
    $request->requestBody->writeJourneyRequest->state = StateEnum::ACTIVE;
    $request->requestBody->writeJourneyRequest->waitForQuietTime = false;
    $request->xAmzAlgorithm = 'aut';
    $request->xAmzContentSha256 = 'cumque';
    $request->xAmzCredential = 'corporis';
    $request->xAmzDate = 'hic';
    $request->xAmzSecurityToken = 'libero';
    $request->xAmzSignature = 'nobis';
    $request->xAmzSignedHeaders = 'dolores';
    $request->applicationId = 'quis';

    $response = $sdk->sdk->createJourney($request);

    if ($response->createJourneyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createPushTemplate

Creates a message template for messages that are sent through a push notification channel.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreatePushTemplateRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreatePushTemplateRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreatePushTemplateRequestBodyPushNotificationTemplateRequest;
use \OpenAPI\OpenAPI\Models\Shared\AndroidPushNotificationTemplate;
use \OpenAPI\OpenAPI\Models\Shared\ActionEnum;
use \OpenAPI\OpenAPI\Models\Shared\APNSPushNotificationTemplate;
use \OpenAPI\OpenAPI\Models\Shared\DefaultPushNotificationTemplate;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreatePushTemplateRequest();
    $request->requestBody = new CreatePushTemplateRequestBody();
    $request->requestBody->pushNotificationTemplateRequest = new CreatePushTemplateRequestBodyPushNotificationTemplateRequest();
    $request->requestBody->pushNotificationTemplateRequest->adm = new AndroidPushNotificationTemplate();
    $request->requestBody->pushNotificationTemplateRequest->adm->action = ActionEnum::DEEP_LINK;
    $request->requestBody->pushNotificationTemplateRequest->adm->body = 'dignissimos';
    $request->requestBody->pushNotificationTemplateRequest->adm->imageIconUrl = 'eaque';
    $request->requestBody->pushNotificationTemplateRequest->adm->imageUrl = 'quis';
    $request->requestBody->pushNotificationTemplateRequest->adm->rawContent = 'nesciunt';
    $request->requestBody->pushNotificationTemplateRequest->adm->smallImageIconUrl = 'eos';
    $request->requestBody->pushNotificationTemplateRequest->adm->sound = 'perferendis';
    $request->requestBody->pushNotificationTemplateRequest->adm->title = 'Mr.';
    $request->requestBody->pushNotificationTemplateRequest->adm->url = 'minus';
    $request->requestBody->pushNotificationTemplateRequest->apns = new APNSPushNotificationTemplate();
    $request->requestBody->pushNotificationTemplateRequest->apns->action = ActionEnum::DEEP_LINK;
    $request->requestBody->pushNotificationTemplateRequest->apns->body = 'dolor';
    $request->requestBody->pushNotificationTemplateRequest->apns->mediaUrl = 'vero';
    $request->requestBody->pushNotificationTemplateRequest->apns->rawContent = 'nostrum';
    $request->requestBody->pushNotificationTemplateRequest->apns->sound = 'hic';
    $request->requestBody->pushNotificationTemplateRequest->apns->title = 'Dr.';
    $request->requestBody->pushNotificationTemplateRequest->apns->url = 'omnis';
    $request->requestBody->pushNotificationTemplateRequest->baidu = new AndroidPushNotificationTemplate();
    $request->requestBody->pushNotificationTemplateRequest->baidu->action = ActionEnum::URL;
    $request->requestBody->pushNotificationTemplateRequest->baidu->body = 'perspiciatis';
    $request->requestBody->pushNotificationTemplateRequest->baidu->imageIconUrl = 'voluptatem';
    $request->requestBody->pushNotificationTemplateRequest->baidu->imageUrl = 'porro';
    $request->requestBody->pushNotificationTemplateRequest->baidu->rawContent = 'consequuntur';
    $request->requestBody->pushNotificationTemplateRequest->baidu->smallImageIconUrl = 'blanditiis';
    $request->requestBody->pushNotificationTemplateRequest->baidu->sound = 'error';
    $request->requestBody->pushNotificationTemplateRequest->baidu->title = 'Mr.';
    $request->requestBody->pushNotificationTemplateRequest->baidu->url = 'occaecati';
    $request->requestBody->pushNotificationTemplateRequest->default = new DefaultPushNotificationTemplate();
    $request->requestBody->pushNotificationTemplateRequest->default->action = ActionEnum::URL;
    $request->requestBody->pushNotificationTemplateRequest->default->body = 'adipisci';
    $request->requestBody->pushNotificationTemplateRequest->default->sound = 'asperiores';
    $request->requestBody->pushNotificationTemplateRequest->default->title = 'Dr.';
    $request->requestBody->pushNotificationTemplateRequest->default->url = 'modi';
    $request->requestBody->pushNotificationTemplateRequest->defaultSubstitutions = 'iste';
    $request->requestBody->pushNotificationTemplateRequest->gcm = new AndroidPushNotificationTemplate();
    $request->requestBody->pushNotificationTemplateRequest->gcm->action = ActionEnum::URL;
    $request->requestBody->pushNotificationTemplateRequest->gcm->body = 'deleniti';
    $request->requestBody->pushNotificationTemplateRequest->gcm->imageIconUrl = 'pariatur';
    $request->requestBody->pushNotificationTemplateRequest->gcm->imageUrl = 'provident';
    $request->requestBody->pushNotificationTemplateRequest->gcm->rawContent = 'nobis';
    $request->requestBody->pushNotificationTemplateRequest->gcm->smallImageIconUrl = 'libero';
    $request->requestBody->pushNotificationTemplateRequest->gcm->sound = 'delectus';
    $request->requestBody->pushNotificationTemplateRequest->gcm->title = 'Mrs.';
    $request->requestBody->pushNotificationTemplateRequest->gcm->url = 'quos';
    $request->requestBody->pushNotificationTemplateRequest->recommenderId = 'aliquid';
    $request->requestBody->pushNotificationTemplateRequest->templateDescription = 'dolorem';
    $request->requestBody->pushNotificationTemplateRequest->tags = [
        'dolor' => 'qui',
    ];
    $request->xAmzAlgorithm = 'ipsum';
    $request->xAmzContentSha256 = 'hic';
    $request->xAmzCredential = 'excepturi';
    $request->xAmzDate = 'cum';
    $request->xAmzSecurityToken = 'voluptate';
    $request->xAmzSignature = 'dignissimos';
    $request->xAmzSignedHeaders = 'reiciendis';
    $request->templateName = 'amet';

    $response = $sdk->sdk->createPushTemplate($request);

    if ($response->createPushTemplateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createRecommenderConfiguration

Creates an Amazon Pinpoint configuration for a recommender model.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateRecommenderConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateRecommenderConfigurationRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateRecommenderConfigurationRequestBodyCreateRecommenderConfiguration;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateRecommenderConfigurationRequest();
    $request->requestBody = new CreateRecommenderConfigurationRequestBody();
    $request->requestBody->createRecommenderConfiguration = new CreateRecommenderConfigurationRequestBodyCreateRecommenderConfiguration();
    $request->requestBody->createRecommenderConfiguration->attributes = [
        'numquam' => 'veritatis',
        'ipsa' => 'ipsa',
        'iure' => 'odio',
    ];
    $request->requestBody->createRecommenderConfiguration->description = 'quaerat';
    $request->requestBody->createRecommenderConfiguration->name = 'Rickey Wolf';
    $request->requestBody->createRecommenderConfiguration->recommendationProviderIdType = 'eos';
    $request->requestBody->createRecommenderConfiguration->recommendationProviderRoleArn = 'atque';
    $request->requestBody->createRecommenderConfiguration->recommendationProviderUri = 'sit';
    $request->requestBody->createRecommenderConfiguration->recommendationTransformerUri = 'fugiat';
    $request->requestBody->createRecommenderConfiguration->recommendationsDisplayName = 'ab';
    $request->requestBody->createRecommenderConfiguration->recommendationsPerMessage = 743835;
    $request->xAmzAlgorithm = 'dolorum';
    $request->xAmzContentSha256 = 'iusto';
    $request->xAmzCredential = 'voluptate';
    $request->xAmzDate = 'dolorum';
    $request->xAmzSecurityToken = 'deleniti';
    $request->xAmzSignature = 'omnis';
    $request->xAmzSignedHeaders = 'necessitatibus';

    $response = $sdk->sdk->createRecommenderConfiguration($request);

    if ($response->createRecommenderConfigurationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createSegment

Creates a new segment for an application or updates the configuration, dimension, and other settings for an existing segment that's associated with an application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateSegmentRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateSegmentRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateSegmentRequestBodyWriteSegmentRequest;
use \OpenAPI\OpenAPI\Models\Shared\SegmentDimensions;
use \OpenAPI\OpenAPI\Models\Shared\AttributeDimension;
use \OpenAPI\OpenAPI\Models\Shared\AttributeTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SegmentBehaviors;
use \OpenAPI\OpenAPI\Models\Shared\RecencyDimension;
use \OpenAPI\OpenAPI\Models\Shared\DurationEnum;
use \OpenAPI\OpenAPI\Models\Shared\RecencyTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SegmentDemographics;
use \OpenAPI\OpenAPI\Models\Shared\SetDimension;
use \OpenAPI\OpenAPI\Models\Shared\DimensionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SegmentLocation;
use \OpenAPI\OpenAPI\Models\Shared\GPSPointDimension;
use \OpenAPI\OpenAPI\Models\Shared\GPSCoordinates;
use \OpenAPI\OpenAPI\Models\Shared\MetricDimension;
use \OpenAPI\OpenAPI\Models\Shared\SegmentGroupList;
use \OpenAPI\OpenAPI\Models\Shared\SegmentGroup;
use \OpenAPI\OpenAPI\Models\Shared\SegmentReference;
use \OpenAPI\OpenAPI\Models\Shared\SourceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\TypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\IncludeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateSegmentRequest();
    $request->requestBody = new CreateSegmentRequestBody();
    $request->requestBody->writeSegmentRequest = new CreateSegmentRequestBodyWriteSegmentRequest();
    $request->requestBody->writeSegmentRequest->dimensions = new SegmentDimensions();
    $request->requestBody->writeSegmentRequest->dimensions->attributes = [
        'asperiores' => new AttributeDimension(),
        'nihil' => new AttributeDimension(),
        'ipsum' => new AttributeDimension(),
    ];
    $request->requestBody->writeSegmentRequest->dimensions->behavior = new SegmentBehaviors();
    $request->requestBody->writeSegmentRequest->dimensions->behavior->recency = new RecencyDimension();
    $request->requestBody->writeSegmentRequest->dimensions->behavior->recency->duration = DurationEnum::DAY7;
    $request->requestBody->writeSegmentRequest->dimensions->behavior->recency->recencyType = RecencyTypeEnum::INACTIVE;
    $request->requestBody->writeSegmentRequest->dimensions->demographic = new SegmentDemographics();
    $request->requestBody->writeSegmentRequest->dimensions->demographic->appVersion = new SetDimension();
    $request->requestBody->writeSegmentRequest->dimensions->demographic->appVersion->dimensionType = DimensionTypeEnum::EXCLUSIVE;
    $request->requestBody->writeSegmentRequest->dimensions->demographic->appVersion->values = [
        'aspernatur',
        'perferendis',
    ];
    $request->requestBody->writeSegmentRequest->dimensions->demographic->channel = new SetDimension();
    $request->requestBody->writeSegmentRequest->dimensions->demographic->channel->dimensionType = DimensionTypeEnum::INCLUSIVE;
    $request->requestBody->writeSegmentRequest->dimensions->demographic->channel->values = [
        'accusamus',
        'ad',
        'saepe',
        'suscipit',
    ];
    $request->requestBody->writeSegmentRequest->dimensions->demographic->deviceType = new SetDimension();
    $request->requestBody->writeSegmentRequest->dimensions->demographic->deviceType->dimensionType = DimensionTypeEnum::EXCLUSIVE;
    $request->requestBody->writeSegmentRequest->dimensions->demographic->deviceType->values = [
        'minima',
        'repellendus',
        'totam',
    ];
    $request->requestBody->writeSegmentRequest->dimensions->demographic->make = new SetDimension();
    $request->requestBody->writeSegmentRequest->dimensions->demographic->make->dimensionType = DimensionTypeEnum::EXCLUSIVE;
    $request->requestBody->writeSegmentRequest->dimensions->demographic->make->values = [
        'at',
    ];
    $request->requestBody->writeSegmentRequest->dimensions->demographic->model = new SetDimension();
    $request->requestBody->writeSegmentRequest->dimensions->demographic->model->dimensionType = DimensionTypeEnum::INCLUSIVE;
    $request->requestBody->writeSegmentRequest->dimensions->demographic->model->values = [
        'vel',
        'quod',
    ];
    $request->requestBody->writeSegmentRequest->dimensions->demographic->platform = new SetDimension();
    $request->requestBody->writeSegmentRequest->dimensions->demographic->platform->dimensionType = DimensionTypeEnum::EXCLUSIVE;
    $request->requestBody->writeSegmentRequest->dimensions->demographic->platform->values = [
        'dolorum',
    ];
    $request->requestBody->writeSegmentRequest->dimensions->location = new SegmentLocation();
    $request->requestBody->writeSegmentRequest->dimensions->location->country = new SetDimension();
    $request->requestBody->writeSegmentRequest->dimensions->location->country->dimensionType = DimensionTypeEnum::EXCLUSIVE;
    $request->requestBody->writeSegmentRequest->dimensions->location->country->values = [
        'harum',
        'iusto',
    ];
    $request->requestBody->writeSegmentRequest->dimensions->location->gpsPoint = new GPSPointDimension();
    $request->requestBody->writeSegmentRequest->dimensions->location->gpsPoint->coordinates = new GPSCoordinates();
    $request->requestBody->writeSegmentRequest->dimensions->location->gpsPoint->coordinates->latitude = 2155.07;
    $request->requestBody->writeSegmentRequest->dimensions->location->gpsPoint->coordinates->longitude = 7887.4;
    $request->requestBody->writeSegmentRequest->dimensions->location->gpsPoint->rangeInKilometers = 9473.71;
    $request->requestBody->writeSegmentRequest->dimensions->metrics = [
        'tempore' => new MetricDimension(),
    ];
    $request->requestBody->writeSegmentRequest->dimensions->userAttributes = [
        'numquam' => new AttributeDimension(),
        'enim' => new AttributeDimension(),
        'dolorem' => new AttributeDimension(),
        'sapiente' => new AttributeDimension(),
    ];
    $request->requestBody->writeSegmentRequest->name = 'Christian Balistreri';
    $request->requestBody->writeSegmentRequest->segmentGroups = new SegmentGroupList();
    $request->requestBody->writeSegmentRequest->segmentGroups->groups = [
        new SegmentGroup(),
    ];
    $request->requestBody->writeSegmentRequest->segmentGroups->include = IncludeEnum::ANY;
    $request->requestBody->writeSegmentRequest->tags = [
        'voluptas' => 'deserunt',
        'quam' => 'ipsum',
        'incidunt' => 'qui',
    ];
    $request->xAmzAlgorithm = 'cupiditate';
    $request->xAmzContentSha256 = 'maxime';
    $request->xAmzCredential = 'pariatur';
    $request->xAmzDate = 'soluta';
    $request->xAmzSecurityToken = 'dicta';
    $request->xAmzSignature = 'laborum';
    $request->xAmzSignedHeaders = 'totam';
    $request->applicationId = 'incidunt';

    $response = $sdk->sdk->createSegment($request);

    if ($response->createSegmentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createSmsTemplate

Creates a message template for messages that are sent through the SMS channel.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateSmsTemplateRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateSmsTemplateRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateSMSTemplateRequestBodySMSTemplateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateSmsTemplateRequest();
    $request->requestBody = new CreateSmsTemplateRequestBody();
    $request->requestBody->smsTemplateRequest = new CreateSMSTemplateRequestBodySMSTemplateRequest();
    $request->requestBody->smsTemplateRequest->body = 'aspernatur';
    $request->requestBody->smsTemplateRequest->defaultSubstitutions = 'dolores';
    $request->requestBody->smsTemplateRequest->recommenderId = 'distinctio';
    $request->requestBody->smsTemplateRequest->templateDescription = 'facilis';
    $request->requestBody->smsTemplateRequest->tags = [
        'quam' => 'molestias',
        'temporibus' => 'qui',
    ];
    $request->xAmzAlgorithm = 'neque';
    $request->xAmzContentSha256 = 'fugit';
    $request->xAmzCredential = 'magni';
    $request->xAmzDate = 'odio';
    $request->xAmzSecurityToken = 'sunt';
    $request->xAmzSignature = 'ullam';
    $request->xAmzSignedHeaders = 'nam';
    $request->templateName = 'hic';

    $response = $sdk->sdk->createSmsTemplate($request);

    if ($response->createSmsTemplateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createVoiceTemplate

Creates a message template for messages that are sent through the voice channel.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateVoiceTemplateRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateVoiceTemplateRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateVoiceTemplateRequestBodyVoiceTemplateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateVoiceTemplateRequest();
    $request->requestBody = new CreateVoiceTemplateRequestBody();
    $request->requestBody->voiceTemplateRequest = new CreateVoiceTemplateRequestBodyVoiceTemplateRequest();
    $request->requestBody->voiceTemplateRequest->body = 'voluptatem';
    $request->requestBody->voiceTemplateRequest->defaultSubstitutions = 'cumque';
    $request->requestBody->voiceTemplateRequest->languageCode = 'soluta';
    $request->requestBody->voiceTemplateRequest->templateDescription = 'nobis';
    $request->requestBody->voiceTemplateRequest->voiceId = 'et';
    $request->requestBody->voiceTemplateRequest->tags = [
        'ipsum' => 'veritatis',
        'nobis' => 'quos',
        'tempore' => 'cupiditate',
        'aperiam' => 'delectus',
    ];
    $request->xAmzAlgorithm = 'dolorem';
    $request->xAmzContentSha256 = 'dolore';
    $request->xAmzCredential = 'labore';
    $request->xAmzDate = 'adipisci';
    $request->xAmzSecurityToken = 'dolorum';
    $request->xAmzSignature = 'architecto';
    $request->xAmzSignedHeaders = 'quae';
    $request->templateName = 'aut';

    $response = $sdk->sdk->createVoiceTemplate($request);

    if ($response->createVoiceTemplateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteAdmChannel

Disables the ADM channel for an application and deletes any existing settings for the channel.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAdmChannelRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteAdmChannelRequest();
    $request->xAmzAlgorithm = 'quas';
    $request->xAmzContentSha256 = 'itaque';
    $request->xAmzCredential = 'consequatur';
    $request->xAmzDate = 'est';
    $request->xAmzSecurityToken = 'repellendus';
    $request->xAmzSignature = 'porro';
    $request->xAmzSignedHeaders = 'doloribus';
    $request->applicationId = 'ut';

    $response = $sdk->sdk->deleteAdmChannel($request);

    if ($response->deleteAdmChannelResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteApnsChannel

Disables the APNs channel for an application and deletes any existing settings for the channel.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteApnsChannelRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteApnsChannelRequest();
    $request->xAmzAlgorithm = 'facilis';
    $request->xAmzContentSha256 = 'cupiditate';
    $request->xAmzCredential = 'qui';
    $request->xAmzDate = 'quae';
    $request->xAmzSecurityToken = 'laudantium';
    $request->xAmzSignature = 'odio';
    $request->xAmzSignedHeaders = 'occaecati';
    $request->applicationId = 'voluptatibus';

    $response = $sdk->sdk->deleteApnsChannel($request);

    if ($response->deleteApnsChannelResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteApnsSandboxChannel

Disables the APNs sandbox channel for an application and deletes any existing settings for the channel.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteApnsSandboxChannelRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteApnsSandboxChannelRequest();
    $request->xAmzAlgorithm = 'quisquam';
    $request->xAmzContentSha256 = 'vero';
    $request->xAmzCredential = 'omnis';
    $request->xAmzDate = 'quis';
    $request->xAmzSecurityToken = 'ipsum';
    $request->xAmzSignature = 'delectus';
    $request->xAmzSignedHeaders = 'voluptate';
    $request->applicationId = 'consectetur';

    $response = $sdk->sdk->deleteApnsSandboxChannel($request);

    if ($response->deleteApnsSandboxChannelResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteApnsVoipChannel

Disables the APNs VoIP channel for an application and deletes any existing settings for the channel.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteApnsVoipChannelRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteApnsVoipChannelRequest();
    $request->xAmzAlgorithm = 'vero';
    $request->xAmzContentSha256 = 'tenetur';
    $request->xAmzCredential = 'dignissimos';
    $request->xAmzDate = 'hic';
    $request->xAmzSecurityToken = 'distinctio';
    $request->xAmzSignature = 'quod';
    $request->xAmzSignedHeaders = 'odio';
    $request->applicationId = 'similique';

    $response = $sdk->sdk->deleteApnsVoipChannel($request);

    if ($response->deleteApnsVoipChannelResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteApnsVoipSandboxChannel

Disables the APNs VoIP sandbox channel for an application and deletes any existing settings for the channel.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteApnsVoipSandboxChannelRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteApnsVoipSandboxChannelRequest();
    $request->xAmzAlgorithm = 'facilis';
    $request->xAmzContentSha256 = 'vero';
    $request->xAmzCredential = 'ducimus';
    $request->xAmzDate = 'dolore';
    $request->xAmzSecurityToken = 'quibusdam';
    $request->xAmzSignature = 'illum';
    $request->xAmzSignedHeaders = 'sequi';
    $request->applicationId = 'natus';

    $response = $sdk->sdk->deleteApnsVoipSandboxChannel($request);

    if ($response->deleteApnsVoipSandboxChannelResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteApp

Deletes an application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAppRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteAppRequest();
    $request->xAmzAlgorithm = 'impedit';
    $request->xAmzContentSha256 = 'aut';
    $request->xAmzCredential = 'voluptatibus';
    $request->xAmzDate = 'exercitationem';
    $request->xAmzSecurityToken = 'nulla';
    $request->xAmzSignature = 'fugit';
    $request->xAmzSignedHeaders = 'porro';
    $request->applicationId = 'maiores';

    $response = $sdk->sdk->deleteApp($request);

    if ($response->deleteAppResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteBaiduChannel

Disables the Baidu channel for an application and deletes any existing settings for the channel.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteBaiduChannelRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteBaiduChannelRequest();
    $request->xAmzAlgorithm = 'doloribus';
    $request->xAmzContentSha256 = 'iusto';
    $request->xAmzCredential = 'eligendi';
    $request->xAmzDate = 'ducimus';
    $request->xAmzSecurityToken = 'alias';
    $request->xAmzSignature = 'officia';
    $request->xAmzSignedHeaders = 'tempora';
    $request->applicationId = 'ipsam';

    $response = $sdk->sdk->deleteBaiduChannel($request);

    if ($response->deleteBaiduChannelResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteCampaign

Deletes a campaign from an application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteCampaignRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteCampaignRequest();
    $request->xAmzAlgorithm = 'ea';
    $request->xAmzContentSha256 = 'aspernatur';
    $request->xAmzCredential = 'vel';
    $request->xAmzDate = 'possimus';
    $request->xAmzSecurityToken = 'magnam';
    $request->xAmzSignature = 'ratione';
    $request->xAmzSignedHeaders = 'ex';
    $request->applicationId = 'laudantium';
    $request->campaignId = 'dicta';

    $response = $sdk->sdk->deleteCampaign($request);

    if ($response->deleteCampaignResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteEmailChannel

Disables the email channel for an application and deletes any existing settings for the channel.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteEmailChannelRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteEmailChannelRequest();
    $request->xAmzAlgorithm = 'dolor';
    $request->xAmzContentSha256 = 'maiores';
    $request->xAmzCredential = 'quasi';
    $request->xAmzDate = 'ex';
    $request->xAmzSecurityToken = 'nulla';
    $request->xAmzSignature = 'excepturi';
    $request->xAmzSignedHeaders = 'voluptatibus';
    $request->applicationId = 'nostrum';

    $response = $sdk->sdk->deleteEmailChannel($request);

    if ($response->deleteEmailChannelResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteEmailTemplate

Deletes a message template for messages that were sent through the email channel.

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
    $request->xAmzAlgorithm = 'sapiente';
    $request->xAmzContentSha256 = 'quisquam';
    $request->xAmzCredential = 'saepe';
    $request->xAmzDate = 'ea';
    $request->xAmzSecurityToken = 'impedit';
    $request->xAmzSignature = 'corporis';
    $request->xAmzSignedHeaders = 'veniam';
    $request->templateName = 'aliquid';
    $request->version = 'inventore';

    $response = $sdk->sdk->deleteEmailTemplate($request);

    if ($response->deleteEmailTemplateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteEndpoint

Deletes an endpoint from an application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteEndpointRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteEndpointRequest();
    $request->xAmzAlgorithm = 'magnam';
    $request->xAmzContentSha256 = 'ea';
    $request->xAmzCredential = 'quo';
    $request->xAmzDate = 'consectetur';
    $request->xAmzSecurityToken = 'recusandae';
    $request->xAmzSignature = 'aspernatur';
    $request->xAmzSignedHeaders = 'minima';
    $request->applicationId = 'eaque';
    $request->endpointId = 'a';

    $response = $sdk->sdk->deleteEndpoint($request);

    if ($response->deleteEndpointResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteEventStream

Deletes the event stream for an application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteEventStreamRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteEventStreamRequest();
    $request->xAmzAlgorithm = 'libero';
    $request->xAmzContentSha256 = 'aut';
    $request->xAmzCredential = 'aut';
    $request->xAmzDate = 'deleniti';
    $request->xAmzSecurityToken = 'impedit';
    $request->xAmzSignature = 'aliquam';
    $request->xAmzSignedHeaders = 'fugit';
    $request->applicationId = 'accusamus';

    $response = $sdk->sdk->deleteEventStream($request);

    if ($response->deleteEventStreamResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteGcmChannel

Disables the GCM channel for an application and deletes any existing settings for the channel.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteGcmChannelRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteGcmChannelRequest();
    $request->xAmzAlgorithm = 'inventore';
    $request->xAmzContentSha256 = 'non';
    $request->xAmzCredential = 'et';
    $request->xAmzDate = 'dolorum';
    $request->xAmzSecurityToken = 'laborum';
    $request->xAmzSignature = 'placeat';
    $request->xAmzSignedHeaders = 'velit';
    $request->applicationId = 'eum';

    $response = $sdk->sdk->deleteGcmChannel($request);

    if ($response->deleteGcmChannelResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteInAppTemplate

Deletes a message template for messages sent using the in-app message channel.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteInAppTemplateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteInAppTemplateRequest();
    $request->xAmzAlgorithm = 'autem';
    $request->xAmzContentSha256 = 'nobis';
    $request->xAmzCredential = 'quas';
    $request->xAmzDate = 'assumenda';
    $request->xAmzSecurityToken = 'nulla';
    $request->xAmzSignature = 'voluptas';
    $request->xAmzSignedHeaders = 'libero';
    $request->templateName = 'quasi';
    $request->version = 'tempora';

    $response = $sdk->sdk->deleteInAppTemplate($request);

    if ($response->deleteInAppTemplateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteJourney

Deletes a journey from an application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteJourneyRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteJourneyRequest();
    $request->xAmzAlgorithm = 'numquam';
    $request->xAmzContentSha256 = 'explicabo';
    $request->xAmzCredential = 'provident';
    $request->xAmzDate = 'ipsa';
    $request->xAmzSecurityToken = 'molestiae';
    $request->xAmzSignature = 'magnam';
    $request->xAmzSignedHeaders = 'odio';
    $request->applicationId = 'eius';
    $request->journeyId = 'esse';

    $response = $sdk->sdk->deleteJourney($request);

    if ($response->deleteJourneyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deletePushTemplate

Deletes a message template for messages that were sent through a push notification channel.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeletePushTemplateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeletePushTemplateRequest();
    $request->xAmzAlgorithm = 'esse';
    $request->xAmzContentSha256 = 'rem';
    $request->xAmzCredential = 'fuga';
    $request->xAmzDate = 'reprehenderit';
    $request->xAmzSecurityToken = 'quidem';
    $request->xAmzSignature = 'fugiat';
    $request->xAmzSignedHeaders = 'ut';
    $request->templateName = 'eum';
    $request->version = 'suscipit';

    $response = $sdk->sdk->deletePushTemplate($request);

    if ($response->deletePushTemplateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteRecommenderConfiguration

Deletes an Amazon Pinpoint configuration for a recommender model.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteRecommenderConfigurationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteRecommenderConfigurationRequest();
    $request->xAmzAlgorithm = 'assumenda';
    $request->xAmzContentSha256 = 'eos';
    $request->xAmzCredential = 'praesentium';
    $request->xAmzDate = 'quisquam';
    $request->xAmzSecurityToken = 'veritatis';
    $request->xAmzSignature = 'ipsa';
    $request->xAmzSignedHeaders = 'id';
    $request->recommenderId = 'quidem';

    $response = $sdk->sdk->deleteRecommenderConfiguration($request);

    if ($response->deleteRecommenderConfigurationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteSegment

Deletes a segment from an application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSegmentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteSegmentRequest();
    $request->xAmzAlgorithm = 'neque';
    $request->xAmzContentSha256 = 'quo';
    $request->xAmzCredential = 'illum';
    $request->xAmzDate = 'quo';
    $request->xAmzSecurityToken = 'fuga';
    $request->xAmzSignature = 'eius';
    $request->xAmzSignedHeaders = 'eos';
    $request->applicationId = 'voluptas';
    $request->segmentId = 'ab';

    $response = $sdk->sdk->deleteSegment($request);

    if ($response->deleteSegmentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteSmsChannel

Disables the SMS channel for an application and deletes any existing settings for the channel.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSmsChannelRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteSmsChannelRequest();
    $request->xAmzAlgorithm = 'cupiditate';
    $request->xAmzContentSha256 = 'consequatur';
    $request->xAmzCredential = 'tempora';
    $request->xAmzDate = 'debitis';
    $request->xAmzSecurityToken = 'ipsam';
    $request->xAmzSignature = 'aspernatur';
    $request->xAmzSignedHeaders = 'sequi';
    $request->applicationId = 'quo';

    $response = $sdk->sdk->deleteSmsChannel($request);

    if ($response->deleteSmsChannelResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteSmsTemplate

Deletes a message template for messages that were sent through the SMS channel.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSmsTemplateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteSmsTemplateRequest();
    $request->xAmzAlgorithm = 'esse';
    $request->xAmzContentSha256 = 'recusandae';
    $request->xAmzCredential = 'aperiam';
    $request->xAmzDate = 'distinctio';
    $request->xAmzSecurityToken = 'quod';
    $request->xAmzSignature = 'dignissimos';
    $request->xAmzSignedHeaders = 'inventore';
    $request->templateName = 'nihil';
    $request->version = 'totam';

    $response = $sdk->sdk->deleteSmsTemplate($request);

    if ($response->deleteSmsTemplateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteUserEndpoints

Deletes all the endpoints that are associated with a specific user ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteUserEndpointsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteUserEndpointsRequest();
    $request->xAmzAlgorithm = 'accusamus';
    $request->xAmzContentSha256 = 'aliquam';
    $request->xAmzCredential = 'odio';
    $request->xAmzDate = 'occaecati';
    $request->xAmzSecurityToken = 'commodi';
    $request->xAmzSignature = 'sapiente';
    $request->xAmzSignedHeaders = 'dolores';
    $request->applicationId = 'deserunt';
    $request->userId = 'molestiae';

    $response = $sdk->sdk->deleteUserEndpoints($request);

    if ($response->deleteUserEndpointsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteVoiceChannel

Disables the voice channel for an application and deletes any existing settings for the channel.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteVoiceChannelRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteVoiceChannelRequest();
    $request->xAmzAlgorithm = 'accusantium';
    $request->xAmzContentSha256 = 'porro';
    $request->xAmzCredential = 'eum';
    $request->xAmzDate = 'quas';
    $request->xAmzSecurityToken = 'praesentium';
    $request->xAmzSignature = 'consequuntur';
    $request->xAmzSignedHeaders = 'deleniti';
    $request->applicationId = 'fugit';

    $response = $sdk->sdk->deleteVoiceChannel($request);

    if ($response->deleteVoiceChannelResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteVoiceTemplate

Deletes a message template for messages that were sent through the voice channel.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteVoiceTemplateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteVoiceTemplateRequest();
    $request->xAmzAlgorithm = 'fuga';
    $request->xAmzContentSha256 = 'mollitia';
    $request->xAmzCredential = 'incidunt';
    $request->xAmzDate = 'atque';
    $request->xAmzSecurityToken = 'explicabo';
    $request->xAmzSignature = 'minima';
    $request->xAmzSignedHeaders = 'nisi';
    $request->templateName = 'fugit';
    $request->version = 'sapiente';

    $response = $sdk->sdk->deleteVoiceTemplate($request);

    if ($response->deleteVoiceTemplateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAdmChannel

Retrieves information about the status and settings of the ADM channel for an application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetAdmChannelRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAdmChannelRequest();
    $request->xAmzAlgorithm = 'consequuntur';
    $request->xAmzContentSha256 = 'ratione';
    $request->xAmzCredential = 'explicabo';
    $request->xAmzDate = 'saepe';
    $request->xAmzSecurityToken = 'occaecati';
    $request->xAmzSignature = 'atque';
    $request->xAmzSignedHeaders = 'et';
    $request->applicationId = 'esse';

    $response = $sdk->sdk->getAdmChannel($request);

    if ($response->getAdmChannelResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getApnsChannel

Retrieves information about the status and settings of the APNs channel for an application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetApnsChannelRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetApnsChannelRequest();
    $request->xAmzAlgorithm = 'eveniet';
    $request->xAmzContentSha256 = 'accusamus';
    $request->xAmzCredential = 'veritatis';
    $request->xAmzDate = 'esse';
    $request->xAmzSecurityToken = 'quod';
    $request->xAmzSignature = 'nam';
    $request->xAmzSignedHeaders = 'vero';
    $request->applicationId = 'aliquid';

    $response = $sdk->sdk->getApnsChannel($request);

    if ($response->getApnsChannelResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getApnsSandboxChannel

Retrieves information about the status and settings of the APNs sandbox channel for an application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetApnsSandboxChannelRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetApnsSandboxChannelRequest();
    $request->xAmzAlgorithm = 'quasi';
    $request->xAmzContentSha256 = 'saepe';
    $request->xAmzCredential = 'vel';
    $request->xAmzDate = 'harum';
    $request->xAmzSecurityToken = 'molestiae';
    $request->xAmzSignature = 'rerum';
    $request->xAmzSignedHeaders = 'occaecati';
    $request->applicationId = 'minima';

    $response = $sdk->sdk->getApnsSandboxChannel($request);

    if ($response->getApnsSandboxChannelResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getApnsVoipChannel

Retrieves information about the status and settings of the APNs VoIP channel for an application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetApnsVoipChannelRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetApnsVoipChannelRequest();
    $request->xAmzAlgorithm = 'distinctio';
    $request->xAmzContentSha256 = 'eligendi';
    $request->xAmzCredential = 'sit';
    $request->xAmzDate = 'culpa';
    $request->xAmzSecurityToken = 'tempore';
    $request->xAmzSignature = 'adipisci';
    $request->xAmzSignedHeaders = 'cumque';
    $request->applicationId = 'consequuntur';

    $response = $sdk->sdk->getApnsVoipChannel($request);

    if ($response->getApnsVoipChannelResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getApnsVoipSandboxChannel

Retrieves information about the status and settings of the APNs VoIP sandbox channel for an application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetApnsVoipSandboxChannelRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetApnsVoipSandboxChannelRequest();
    $request->xAmzAlgorithm = 'consequatur';
    $request->xAmzContentSha256 = 'minus';
    $request->xAmzCredential = 'quaerat';
    $request->xAmzDate = 'sapiente';
    $request->xAmzSecurityToken = 'consectetur';
    $request->xAmzSignature = 'esse';
    $request->xAmzSignedHeaders = 'blanditiis';
    $request->applicationId = 'provident';

    $response = $sdk->sdk->getApnsVoipSandboxChannel($request);

    if ($response->getApnsVoipSandboxChannelResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getApp

Retrieves information about an application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetAppRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAppRequest();
    $request->xAmzAlgorithm = 'a';
    $request->xAmzContentSha256 = 'nulla';
    $request->xAmzCredential = 'quas';
    $request->xAmzDate = 'esse';
    $request->xAmzSecurityToken = 'quasi';
    $request->xAmzSignature = 'a';
    $request->xAmzSignedHeaders = 'error';
    $request->applicationId = 'sint';

    $response = $sdk->sdk->getApp($request);

    if ($response->getAppResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getApplicationDateRangeKpi

Retrieves (queries) pre-aggregated data for a standard metric that applies to an application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetApplicationDateRangeKpiRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetApplicationDateRangeKpiRequest();
    $request->xAmzAlgorithm = 'pariatur';
    $request->xAmzContentSha256 = 'possimus';
    $request->xAmzCredential = 'quia';
    $request->xAmzDate = 'eveniet';
    $request->xAmzSecurityToken = 'asperiores';
    $request->xAmzSignature = 'facere';
    $request->xAmzSignedHeaders = 'veritatis';
    $request->applicationId = 'consequuntur';
    $request->endTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-16T10:50:58.442Z');
    $request->kpiName = 'culpa';
    $request->nextToken = 'aliquid';
    $request->pageSize = 'tenetur';
    $request->startTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-24T02:06:03.033Z');

    $response = $sdk->sdk->getApplicationDateRangeKpi($request);

    if ($response->getApplicationDateRangeKpiResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getApplicationSettings

Retrieves information about the settings for an application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetApplicationSettingsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetApplicationSettingsRequest();
    $request->xAmzAlgorithm = 'vel';
    $request->xAmzContentSha256 = 'in';
    $request->xAmzCredential = 'eius';
    $request->xAmzDate = 'libero';
    $request->xAmzSecurityToken = 'illum';
    $request->xAmzSignature = 'soluta';
    $request->xAmzSignedHeaders = 'accusantium';
    $request->applicationId = 'aliquam';

    $response = $sdk->sdk->getApplicationSettings($request);

    if ($response->getApplicationSettingsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getApps

Retrieves information about all the applications that are associated with your Amazon Pinpoint account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetAppsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAppsRequest();
    $request->xAmzAlgorithm = 'sapiente';
    $request->xAmzContentSha256 = 'dicta';
    $request->xAmzCredential = 'ullam';
    $request->xAmzDate = 'reprehenderit';
    $request->xAmzSecurityToken = 'ullam';
    $request->xAmzSignature = 'nisi';
    $request->xAmzSignedHeaders = 'aut';
    $request->pageSize = 'voluptatum';
    $request->token = 'qui';

    $response = $sdk->sdk->getApps($request);

    if ($response->getAppsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getBaiduChannel

Retrieves information about the status and settings of the Baidu channel for an application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetBaiduChannelRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetBaiduChannelRequest();
    $request->xAmzAlgorithm = 'quibusdam';
    $request->xAmzContentSha256 = 'ex';
    $request->xAmzCredential = 'deleniti';
    $request->xAmzDate = 'itaque';
    $request->xAmzSecurityToken = 'dolorum';
    $request->xAmzSignature = 'architecto';
    $request->xAmzSignedHeaders = 'omnis';
    $request->applicationId = 'tenetur';

    $response = $sdk->sdk->getBaiduChannel($request);

    if ($response->getBaiduChannelResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCampaign

Retrieves information about the status, configuration, and other settings for a campaign.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetCampaignRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCampaignRequest();
    $request->xAmzAlgorithm = 'quasi';
    $request->xAmzContentSha256 = 'at';
    $request->xAmzCredential = 'et';
    $request->xAmzDate = 'voluptate';
    $request->xAmzSecurityToken = 'ipsa';
    $request->xAmzSignature = 'minima';
    $request->xAmzSignedHeaders = 'veritatis';
    $request->applicationId = 'consectetur';
    $request->campaignId = 'adipisci';

    $response = $sdk->sdk->getCampaign($request);

    if ($response->getCampaignResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCampaignActivities

Retrieves information about all the activities for a campaign.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetCampaignActivitiesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCampaignActivitiesRequest();
    $request->xAmzAlgorithm = 'iste';
    $request->xAmzContentSha256 = 'temporibus';
    $request->xAmzCredential = 'accusantium';
    $request->xAmzDate = 'rem';
    $request->xAmzSecurityToken = 'aut';
    $request->xAmzSignature = 'laudantium';
    $request->xAmzSignedHeaders = 'eum';
    $request->applicationId = 'mollitia';
    $request->campaignId = 'ab';
    $request->pageSize = 'corrupti';
    $request->token = 'non';

    $response = $sdk->sdk->getCampaignActivities($request);

    if ($response->getCampaignActivitiesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCampaignDateRangeKpi

Retrieves (queries) pre-aggregated data for a standard metric that applies to a campaign.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetCampaignDateRangeKpiRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCampaignDateRangeKpiRequest();
    $request->xAmzAlgorithm = 'voluptatem';
    $request->xAmzContentSha256 = 'dolor';
    $request->xAmzCredential = 'occaecati';
    $request->xAmzDate = 'numquam';
    $request->xAmzSecurityToken = 'impedit';
    $request->xAmzSignature = 'explicabo';
    $request->xAmzSignedHeaders = 'voluptas';
    $request->applicationId = 'aut';
    $request->campaignId = 'dignissimos';
    $request->endTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-07T16:50:11.026Z');
    $request->kpiName = 'natus';
    $request->nextToken = 'velit';
    $request->pageSize = 'voluptatibus';
    $request->startTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-04T12:34:39.877Z');

    $response = $sdk->sdk->getCampaignDateRangeKpi($request);

    if ($response->getCampaignDateRangeKpiResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCampaignVersion

Retrieves information about the status, configuration, and other settings for a specific version of a campaign.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetCampaignVersionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCampaignVersionRequest();
    $request->xAmzAlgorithm = 'aperiam';
    $request->xAmzContentSha256 = 'ea';
    $request->xAmzCredential = 'quaerat';
    $request->xAmzDate = 'consequuntur';
    $request->xAmzSecurityToken = 'repellendus';
    $request->xAmzSignature = 'officia';
    $request->xAmzSignedHeaders = 'maxime';
    $request->applicationId = 'dignissimos';
    $request->campaignId = 'officia';
    $request->version = 'asperiores';

    $response = $sdk->sdk->getCampaignVersion($request);

    if ($response->getCampaignVersionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCampaignVersions

Retrieves information about the status, configuration, and other settings for all versions of a campaign.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetCampaignVersionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCampaignVersionsRequest();
    $request->xAmzAlgorithm = 'nemo';
    $request->xAmzContentSha256 = 'quae';
    $request->xAmzCredential = 'quaerat';
    $request->xAmzDate = 'porro';
    $request->xAmzSecurityToken = 'quod';
    $request->xAmzSignature = 'labore';
    $request->xAmzSignedHeaders = 'ab';
    $request->applicationId = 'adipisci';
    $request->campaignId = 'fuga';
    $request->pageSize = 'id';
    $request->token = 'suscipit';

    $response = $sdk->sdk->getCampaignVersions($request);

    if ($response->getCampaignVersionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCampaigns

Retrieves information about the status, configuration, and other settings for all the campaigns that are associated with an application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetCampaignsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCampaignsRequest();
    $request->xAmzAlgorithm = 'velit';
    $request->xAmzContentSha256 = 'culpa';
    $request->xAmzCredential = 'est';
    $request->xAmzDate = 'recusandae';
    $request->xAmzSecurityToken = 'totam';
    $request->xAmzSignature = 'fugiat';
    $request->xAmzSignedHeaders = 'vel';
    $request->applicationId = 'ducimus';
    $request->pageSize = 'quos';
    $request->token = 'vel';

    $response = $sdk->sdk->getCampaigns($request);

    if ($response->getCampaignsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getChannels

Retrieves information about the history and status of each channel for an application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetChannelsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetChannelsRequest();
    $request->xAmzAlgorithm = 'labore';
    $request->xAmzContentSha256 = 'possimus';
    $request->xAmzCredential = 'facilis';
    $request->xAmzDate = 'cum';
    $request->xAmzSecurityToken = 'commodi';
    $request->xAmzSignature = 'in';
    $request->xAmzSignedHeaders = 'corporis';
    $request->applicationId = 'reiciendis';

    $response = $sdk->sdk->getChannels($request);

    if ($response->getChannelsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEmailChannel

Retrieves information about the status and settings of the email channel for an application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetEmailChannelRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEmailChannelRequest();
    $request->xAmzAlgorithm = 'assumenda';
    $request->xAmzContentSha256 = 'nemo';
    $request->xAmzCredential = 'recusandae';
    $request->xAmzDate = 'aliquid';
    $request->xAmzSecurityToken = 'aperiam';
    $request->xAmzSignature = 'cum';
    $request->xAmzSignedHeaders = 'consectetur';
    $request->applicationId = 'in';

    $response = $sdk->sdk->getEmailChannel($request);

    if ($response->getEmailChannelResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEmailTemplate

Retrieves the content and settings of a message template for messages that are sent through the email channel.

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
    $request->xAmzAlgorithm = 'exercitationem';
    $request->xAmzContentSha256 = 'earum';
    $request->xAmzCredential = 'facere';
    $request->xAmzDate = 'numquam';
    $request->xAmzSecurityToken = 'doloribus';
    $request->xAmzSignature = 'suscipit';
    $request->xAmzSignedHeaders = 'reiciendis';
    $request->templateName = 'quidem';
    $request->version = 'saepe';

    $response = $sdk->sdk->getEmailTemplate($request);

    if ($response->getEmailTemplateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEndpoint

Retrieves information about the settings and attributes of a specific endpoint for an application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetEndpointRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEndpointRequest();
    $request->xAmzAlgorithm = 'necessitatibus';
    $request->xAmzContentSha256 = 'dolore';
    $request->xAmzCredential = 'sunt';
    $request->xAmzDate = 'asperiores';
    $request->xAmzSecurityToken = 'adipisci';
    $request->xAmzSignature = 'non';
    $request->xAmzSignedHeaders = 'amet';
    $request->applicationId = 'beatae';
    $request->endpointId = 'dignissimos';

    $response = $sdk->sdk->getEndpoint($request);

    if ($response->getEndpointResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEventStream

Retrieves information about the event stream settings for an application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetEventStreamRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEventStreamRequest();
    $request->xAmzAlgorithm = 'a';
    $request->xAmzContentSha256 = 'debitis';
    $request->xAmzCredential = 'consectetur';
    $request->xAmzDate = 'corporis';
    $request->xAmzSecurityToken = 'harum';
    $request->xAmzSignature = 'laboriosam';
    $request->xAmzSignedHeaders = 'ipsa';
    $request->applicationId = 'voluptates';

    $response = $sdk->sdk->getEventStream($request);

    if ($response->getEventStreamResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getExportJob

Retrieves information about the status and settings of a specific export job for an application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetExportJobRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetExportJobRequest();
    $request->xAmzAlgorithm = 'libero';
    $request->xAmzContentSha256 = 'vitae';
    $request->xAmzCredential = 'accusamus';
    $request->xAmzDate = 'similique';
    $request->xAmzSecurityToken = 'tempora';
    $request->xAmzSignature = 'aspernatur';
    $request->xAmzSignedHeaders = 'voluptas';
    $request->applicationId = 'voluptas';
    $request->jobId = 'voluptas';

    $response = $sdk->sdk->getExportJob($request);

    if ($response->getExportJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getExportJobs

Retrieves information about the status and settings of all the export jobs for an application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetExportJobsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetExportJobsRequest();
    $request->xAmzAlgorithm = 'minima';
    $request->xAmzContentSha256 = 'nobis';
    $request->xAmzCredential = 'dolorum';
    $request->xAmzDate = 'adipisci';
    $request->xAmzSecurityToken = 'minus';
    $request->xAmzSignature = 'dolores';
    $request->xAmzSignedHeaders = 'blanditiis';
    $request->applicationId = 'in';
    $request->pageSize = 'dolore';
    $request->token = 'aliquam';

    $response = $sdk->sdk->getExportJobs($request);

    if ($response->getExportJobsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGcmChannel

Retrieves information about the status and settings of the GCM channel for an application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetGcmChannelRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetGcmChannelRequest();
    $request->xAmzAlgorithm = 'officiis';
    $request->xAmzContentSha256 = 'temporibus';
    $request->xAmzCredential = 'ullam';
    $request->xAmzDate = 'adipisci';
    $request->xAmzSecurityToken = 'cum';
    $request->xAmzSignature = 'blanditiis';
    $request->xAmzSignedHeaders = 'quas';
    $request->applicationId = 'hic';

    $response = $sdk->sdk->getGcmChannel($request);

    if ($response->getGcmChannelResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getImportJob

Retrieves information about the status and settings of a specific import job for an application.

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
    $request->xAmzAlgorithm = 'nesciunt';
    $request->xAmzContentSha256 = 'culpa';
    $request->xAmzCredential = 'corrupti';
    $request->xAmzDate = 'pariatur';
    $request->xAmzSecurityToken = 'totam';
    $request->xAmzSignature = 'hic';
    $request->xAmzSignedHeaders = 'exercitationem';
    $request->applicationId = 'nobis';
    $request->jobId = 'sit';

    $response = $sdk->sdk->getImportJob($request);

    if ($response->getImportJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getImportJobs

Retrieves information about the status and settings of all the import jobs for an application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetImportJobsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetImportJobsRequest();
    $request->xAmzAlgorithm = 'rerum';
    $request->xAmzContentSha256 = 'sed';
    $request->xAmzCredential = 'reiciendis';
    $request->xAmzDate = 'explicabo';
    $request->xAmzSecurityToken = 'asperiores';
    $request->xAmzSignature = 'facilis';
    $request->xAmzSignedHeaders = 'voluptate';
    $request->applicationId = 'expedita';
    $request->pageSize = 'ab';
    $request->token = 'iste';

    $response = $sdk->sdk->getImportJobs($request);

    if ($response->getImportJobsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getInAppMessages

Retrieves the in-app messages targeted for the provided endpoint ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetInAppMessagesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetInAppMessagesRequest();
    $request->xAmzAlgorithm = 'dolore';
    $request->xAmzContentSha256 = 'laborum';
    $request->xAmzCredential = 'sed';
    $request->xAmzDate = 'in';
    $request->xAmzSecurityToken = 'commodi';
    $request->xAmzSignature = 'quidem';
    $request->xAmzSignedHeaders = 'explicabo';
    $request->applicationId = 'voluptas';
    $request->endpointId = 'unde';

    $response = $sdk->sdk->getInAppMessages($request);

    if ($response->getInAppMessagesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getInAppTemplate

Retrieves the content and settings of a message template for messages sent through the in-app channel.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetInAppTemplateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetInAppTemplateRequest();
    $request->xAmzAlgorithm = 'architecto';
    $request->xAmzContentSha256 = 'suscipit';
    $request->xAmzCredential = 'sapiente';
    $request->xAmzDate = 'debitis';
    $request->xAmzSecurityToken = 'illo';
    $request->xAmzSignature = 'reiciendis';
    $request->xAmzSignedHeaders = 'perferendis';
    $request->templateName = 'corrupti';
    $request->version = 'maiores';

    $response = $sdk->sdk->getInAppTemplate($request);

    if ($response->getInAppTemplateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getJourney

Retrieves information about the status, configuration, and other settings for a journey.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetJourneyRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetJourneyRequest();
    $request->xAmzAlgorithm = 'incidunt';
    $request->xAmzContentSha256 = 'sed';
    $request->xAmzCredential = 'provident';
    $request->xAmzDate = 'eius';
    $request->xAmzSecurityToken = 'necessitatibus';
    $request->xAmzSignature = 'ipsum';
    $request->xAmzSignedHeaders = 'ea';
    $request->applicationId = 'occaecati';
    $request->journeyId = 'quos';

    $response = $sdk->sdk->getJourney($request);

    if ($response->getJourneyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getJourneyDateRangeKpi

Retrieves (queries) pre-aggregated data for a standard engagement metric that applies to a journey.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetJourneyDateRangeKpiRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetJourneyDateRangeKpiRequest();
    $request->xAmzAlgorithm = 'voluptatibus';
    $request->xAmzContentSha256 = 'tempora';
    $request->xAmzCredential = 'tempora';
    $request->xAmzDate = 'voluptate';
    $request->xAmzSecurityToken = 'reiciendis';
    $request->xAmzSignature = 'ex';
    $request->xAmzSignedHeaders = 'sit';
    $request->applicationId = 'non';
    $request->endTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-06-26T01:49:52.614Z');
    $request->journeyId = 'facilis';
    $request->kpiName = 'quaerat';
    $request->nextToken = 'incidunt';
    $request->pageSize = 'ipsam';
    $request->startTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-06-05T03:46:35.414Z');

    $response = $sdk->sdk->getJourneyDateRangeKpi($request);

    if ($response->getJourneyDateRangeKpiResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getJourneyExecutionActivityMetrics

Retrieves (queries) pre-aggregated data for a standard execution metric that applies to a journey activity.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetJourneyExecutionActivityMetricsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetJourneyExecutionActivityMetricsRequest();
    $request->xAmzAlgorithm = 'sit';
    $request->xAmzContentSha256 = 'nobis';
    $request->xAmzCredential = 'error';
    $request->xAmzDate = 'veniam';
    $request->xAmzSecurityToken = 'minima';
    $request->xAmzSignature = 'recusandae';
    $request->xAmzSignedHeaders = 'reiciendis';
    $request->applicationId = 'nulla';
    $request->journeyActivityId = 'magni';
    $request->journeyId = 'aperiam';
    $request->nextToken = 'saepe';
    $request->pageSize = 'numquam';

    $response = $sdk->sdk->getJourneyExecutionActivityMetrics($request);

    if ($response->getJourneyExecutionActivityMetricsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getJourneyExecutionMetrics

Retrieves (queries) pre-aggregated data for a standard execution metric that applies to a journey.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetJourneyExecutionMetricsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetJourneyExecutionMetricsRequest();
    $request->xAmzAlgorithm = 'veniam';
    $request->xAmzContentSha256 = 'in';
    $request->xAmzCredential = 'officiis';
    $request->xAmzDate = 'beatae';
    $request->xAmzSecurityToken = 'laudantium';
    $request->xAmzSignature = 'exercitationem';
    $request->xAmzSignedHeaders = 'praesentium';
    $request->applicationId = 'cum';
    $request->journeyId = 'laboriosam';
    $request->nextToken = 'dolorum';
    $request->pageSize = 'voluptatum';

    $response = $sdk->sdk->getJourneyExecutionMetrics($request);

    if ($response->getJourneyExecutionMetricsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getJourneyRunExecutionActivityMetrics

Retrieves (queries) pre-aggregated data for a standard run execution metric that applies to a journey activity.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetJourneyRunExecutionActivityMetricsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetJourneyRunExecutionActivityMetricsRequest();
    $request->xAmzAlgorithm = 'error';
    $request->xAmzContentSha256 = 'hic';
    $request->xAmzCredential = 'expedita';
    $request->xAmzDate = 'debitis';
    $request->xAmzSecurityToken = 'neque';
    $request->xAmzSignature = 'dolorum';
    $request->xAmzSignedHeaders = 'nostrum';
    $request->applicationId = 'officia';
    $request->journeyActivityId = 'dolorum';
    $request->journeyId = 'corrupti';
    $request->nextToken = 'accusamus';
    $request->pageSize = 'tempora';
    $request->runId = 'atque';

    $response = $sdk->sdk->getJourneyRunExecutionActivityMetrics($request);

    if ($response->getJourneyRunExecutionActivityMetricsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getJourneyRunExecutionMetrics

Retrieves (queries) pre-aggregated data for a standard run execution metric that applies to a journey.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetJourneyRunExecutionMetricsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetJourneyRunExecutionMetricsRequest();
    $request->xAmzAlgorithm = 'fugit';
    $request->xAmzContentSha256 = 'ut';
    $request->xAmzCredential = 'fugiat';
    $request->xAmzDate = 'voluptatem';
    $request->xAmzSecurityToken = 'culpa';
    $request->xAmzSignature = 'expedita';
    $request->xAmzSignedHeaders = 'magnam';
    $request->applicationId = 'consequatur';
    $request->journeyId = 'esse';
    $request->nextToken = 'ipsam';
    $request->pageSize = 'sit';
    $request->runId = 'voluptatum';

    $response = $sdk->sdk->getJourneyRunExecutionMetrics($request);

    if ($response->getJourneyRunExecutionMetricsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getJourneyRuns

Provides information about the runs of a journey.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetJourneyRunsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetJourneyRunsRequest();
    $request->xAmzAlgorithm = 'quas';
    $request->xAmzContentSha256 = 'repudiandae';
    $request->xAmzCredential = 'corporis';
    $request->xAmzDate = 'et';
    $request->xAmzSecurityToken = 'blanditiis';
    $request->xAmzSignature = 'ex';
    $request->xAmzSignedHeaders = 'sed';
    $request->applicationId = 'sit';
    $request->journeyId = 'vel';
    $request->pageSize = 'nostrum';
    $request->token = 'saepe';

    $response = $sdk->sdk->getJourneyRuns($request);

    if ($response->getJourneyRunsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPushTemplate

Retrieves the content and settings of a message template for messages that are sent through a push notification channel.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetPushTemplateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPushTemplateRequest();
    $request->xAmzAlgorithm = 'error';
    $request->xAmzContentSha256 = 'consequatur';
    $request->xAmzCredential = 'incidunt';
    $request->xAmzDate = 'reiciendis';
    $request->xAmzSecurityToken = 'dolorem';
    $request->xAmzSignature = 'harum';
    $request->xAmzSignedHeaders = 'dicta';
    $request->templateName = 'architecto';
    $request->version = 'occaecati';

    $response = $sdk->sdk->getPushTemplate($request);

    if ($response->getPushTemplateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRecommenderConfiguration

Retrieves information about an Amazon Pinpoint configuration for a recommender model.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetRecommenderConfigurationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRecommenderConfigurationRequest();
    $request->xAmzAlgorithm = 'labore';
    $request->xAmzContentSha256 = 'quidem';
    $request->xAmzCredential = 'atque';
    $request->xAmzDate = 'laborum';
    $request->xAmzSecurityToken = 'nam';
    $request->xAmzSignature = 'tenetur';
    $request->xAmzSignedHeaders = 'laboriosam';
    $request->recommenderId = 'alias';

    $response = $sdk->sdk->getRecommenderConfiguration($request);

    if ($response->getRecommenderConfigurationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRecommenderConfigurations

Retrieves information about all the recommender model configurations that are associated with your Amazon Pinpoint account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetRecommenderConfigurationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRecommenderConfigurationsRequest();
    $request->xAmzAlgorithm = 'amet';
    $request->xAmzContentSha256 = 'deserunt';
    $request->xAmzCredential = 'voluptate';
    $request->xAmzDate = 'unde';
    $request->xAmzSecurityToken = 'reiciendis';
    $request->xAmzSignature = 'provident';
    $request->xAmzSignedHeaders = 'repellendus';
    $request->pageSize = 'delectus';
    $request->token = 'voluptates';

    $response = $sdk->sdk->getRecommenderConfigurations($request);

    if ($response->getRecommenderConfigurationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSegment

Retrieves information about the configuration, dimension, and other settings for a specific segment that's associated with an application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSegmentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSegmentRequest();
    $request->xAmzAlgorithm = 'perferendis';
    $request->xAmzContentSha256 = 'est';
    $request->xAmzCredential = 'quidem';
    $request->xAmzDate = 'reprehenderit';
    $request->xAmzSecurityToken = 'facere';
    $request->xAmzSignature = 'fuga';
    $request->xAmzSignedHeaders = 'praesentium';
    $request->applicationId = 'mollitia';
    $request->segmentId = 'veniam';

    $response = $sdk->sdk->getSegment($request);

    if ($response->getSegmentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSegmentExportJobs

Retrieves information about the status and settings of the export jobs for a segment.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSegmentExportJobsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSegmentExportJobsRequest();
    $request->xAmzAlgorithm = 'voluptatem';
    $request->xAmzContentSha256 = 'quisquam';
    $request->xAmzCredential = 'repudiandae';
    $request->xAmzDate = 'quasi';
    $request->xAmzSecurityToken = 'atque';
    $request->xAmzSignature = 'reprehenderit';
    $request->xAmzSignedHeaders = 'asperiores';
    $request->applicationId = 'totam';
    $request->pageSize = 'suscipit';
    $request->segmentId = 'quidem';
    $request->token = 'maxime';

    $response = $sdk->sdk->getSegmentExportJobs($request);

    if ($response->getSegmentExportJobsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSegmentImportJobs

Retrieves information about the status and settings of the import jobs for a segment.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSegmentImportJobsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSegmentImportJobsRequest();
    $request->xAmzAlgorithm = 'et';
    $request->xAmzContentSha256 = 'esse';
    $request->xAmzCredential = 'amet';
    $request->xAmzDate = 'assumenda';
    $request->xAmzSecurityToken = 'ea';
    $request->xAmzSignature = 'atque';
    $request->xAmzSignedHeaders = 'error';
    $request->applicationId = 'officiis';
    $request->pageSize = 'officiis';
    $request->segmentId = 'accusamus';
    $request->token = 'natus';

    $response = $sdk->sdk->getSegmentImportJobs($request);

    if ($response->getSegmentImportJobsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSegmentVersion

Retrieves information about the configuration, dimension, and other settings for a specific version of a segment that's associated with an application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSegmentVersionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSegmentVersionRequest();
    $request->xAmzAlgorithm = 'minima';
    $request->xAmzContentSha256 = 'aspernatur';
    $request->xAmzCredential = 'ex';
    $request->xAmzDate = 'maiores';
    $request->xAmzSecurityToken = 'corrupti';
    $request->xAmzSignature = 'at';
    $request->xAmzSignedHeaders = 'error';
    $request->applicationId = 'blanditiis';
    $request->segmentId = 'suscipit';
    $request->version = 'repudiandae';

    $response = $sdk->sdk->getSegmentVersion($request);

    if ($response->getSegmentVersionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSegmentVersions

Retrieves information about the configuration, dimension, and other settings for all the versions of a specific segment that's associated with an application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSegmentVersionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSegmentVersionsRequest();
    $request->xAmzAlgorithm = 'atque';
    $request->xAmzContentSha256 = 'atque';
    $request->xAmzCredential = 'sunt';
    $request->xAmzDate = 'recusandae';
    $request->xAmzSecurityToken = 'dolorum';
    $request->xAmzSignature = 'repellendus';
    $request->xAmzSignedHeaders = 'labore';
    $request->applicationId = 'reiciendis';
    $request->pageSize = 'doloremque';
    $request->segmentId = 'repudiandae';
    $request->token = 'dicta';

    $response = $sdk->sdk->getSegmentVersions($request);

    if ($response->getSegmentVersionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSegments

Retrieves information about the configuration, dimension, and other settings for all the segments that are associated with an application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSegmentsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSegmentsRequest();
    $request->xAmzAlgorithm = 'accusantium';
    $request->xAmzContentSha256 = 'beatae';
    $request->xAmzCredential = 'dolores';
    $request->xAmzDate = 'enim';
    $request->xAmzSecurityToken = 'laboriosam';
    $request->xAmzSignature = 'velit';
    $request->xAmzSignedHeaders = 'a';
    $request->applicationId = 'molestias';
    $request->pageSize = 'magnam';
    $request->token = 'saepe';

    $response = $sdk->sdk->getSegments($request);

    if ($response->getSegmentsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSmsChannel

Retrieves information about the status and settings of the SMS channel for an application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSmsChannelRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSmsChannelRequest();
    $request->xAmzAlgorithm = 'consequuntur';
    $request->xAmzContentSha256 = 'occaecati';
    $request->xAmzCredential = 'officiis';
    $request->xAmzDate = 'perspiciatis';
    $request->xAmzSecurityToken = 'in';
    $request->xAmzSignature = 'adipisci';
    $request->xAmzSignedHeaders = 'eveniet';
    $request->applicationId = 'occaecati';

    $response = $sdk->sdk->getSmsChannel($request);

    if ($response->getSmsChannelResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSmsTemplate

Retrieves the content and settings of a message template for messages that are sent through the SMS channel.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSmsTemplateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSmsTemplateRequest();
    $request->xAmzAlgorithm = 'consequuntur';
    $request->xAmzContentSha256 = 'fugit';
    $request->xAmzCredential = 'id';
    $request->xAmzDate = 'quis';
    $request->xAmzSecurityToken = 'reprehenderit';
    $request->xAmzSignature = 'error';
    $request->xAmzSignedHeaders = 'illo';
    $request->templateName = 'corporis';
    $request->version = 'quidem';

    $response = $sdk->sdk->getSmsTemplate($request);

    if ($response->getSmsTemplateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUserEndpoints

Retrieves information about all the endpoints that are associated with a specific user ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetUserEndpointsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUserEndpointsRequest();
    $request->xAmzAlgorithm = 'eveniet';
    $request->xAmzContentSha256 = 'non';
    $request->xAmzCredential = 'vero';
    $request->xAmzDate = 'doloremque';
    $request->xAmzSecurityToken = 'iure';
    $request->xAmzSignature = 'ipsa';
    $request->xAmzSignedHeaders = 'totam';
    $request->applicationId = 'quae';
    $request->userId = 'molestiae';

    $response = $sdk->sdk->getUserEndpoints($request);

    if ($response->getUserEndpointsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getVoiceChannel

Retrieves information about the status and settings of the voice channel for an application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetVoiceChannelRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetVoiceChannelRequest();
    $request->xAmzAlgorithm = 'eveniet';
    $request->xAmzContentSha256 = 'qui';
    $request->xAmzCredential = 'cum';
    $request->xAmzDate = 'iure';
    $request->xAmzSecurityToken = 'necessitatibus';
    $request->xAmzSignature = 'ratione';
    $request->xAmzSignedHeaders = 'laborum';
    $request->applicationId = 'distinctio';

    $response = $sdk->sdk->getVoiceChannel($request);

    if ($response->getVoiceChannelResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getVoiceTemplate

Retrieves the content and settings of a message template for messages that are sent through the voice channel.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetVoiceTemplateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetVoiceTemplateRequest();
    $request->xAmzAlgorithm = 'voluptatum';
    $request->xAmzContentSha256 = 'rem';
    $request->xAmzCredential = 'aliquam';
    $request->xAmzDate = 'ad';
    $request->xAmzSecurityToken = 'repellat';
    $request->xAmzSignature = 'alias';
    $request->xAmzSignedHeaders = 'corporis';
    $request->templateName = 'perspiciatis';
    $request->version = 'nihil';

    $response = $sdk->sdk->getVoiceTemplate($request);

    if ($response->getVoiceTemplateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listJourneys

Retrieves information about the status, configuration, and other settings for all the journeys that are associated with an application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListJourneysRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListJourneysRequest();
    $request->xAmzAlgorithm = 'mollitia';
    $request->xAmzContentSha256 = 'voluptas';
    $request->xAmzCredential = 'alias';
    $request->xAmzDate = 'maiores';
    $request->xAmzSecurityToken = 'reiciendis';
    $request->xAmzSignature = 'dolores';
    $request->xAmzSignedHeaders = 'id';
    $request->applicationId = 'minima';
    $request->pageSize = 'dolore';
    $request->token = 'dolorum';

    $response = $sdk->sdk->listJourneys($request);

    if ($response->listJourneysResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTagsForResource

Retrieves all the tags (keys and values) that are associated with an application, campaign, message template, or segment.

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
    $request->xAmzAlgorithm = 'nesciunt';
    $request->xAmzContentSha256 = 'quae';
    $request->xAmzCredential = 'recusandae';
    $request->xAmzDate = 'omnis';
    $request->xAmzSecurityToken = 'quaerat';
    $request->xAmzSignature = 'molestiae';
    $request->xAmzSignedHeaders = 'ex';
    $request->resourceArn = 'ut';

    $response = $sdk->sdk->listTagsForResource($request);

    if ($response->listTagsForResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTemplateVersions

Retrieves information about all the versions of a specific message template.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTemplateVersionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTemplateVersionsRequest();
    $request->xAmzAlgorithm = 'culpa';
    $request->xAmzContentSha256 = 'adipisci';
    $request->xAmzCredential = 'debitis';
    $request->xAmzDate = 'laudantium';
    $request->xAmzSecurityToken = 'eum';
    $request->xAmzSignature = 'nemo';
    $request->xAmzSignedHeaders = 'recusandae';
    $request->nextToken = 'esse';
    $request->pageSize = 'provident';
    $request->templateName = 'quis';
    $request->templateType = 'eum';

    $response = $sdk->sdk->listTemplateVersions($request);

    if ($response->listTemplateVersionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTemplates

Retrieves information about all the message templates that are associated with your Amazon Pinpoint account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTemplatesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTemplatesRequest();
    $request->xAmzAlgorithm = 'reiciendis';
    $request->xAmzContentSha256 = 'provident';
    $request->xAmzCredential = 'aspernatur';
    $request->xAmzDate = 'ullam';
    $request->xAmzSecurityToken = 'quasi';
    $request->xAmzSignature = 'animi';
    $request->xAmzSignedHeaders = 'nostrum';
    $request->nextToken = 'mollitia';
    $request->pageSize = 'provident';
    $request->prefix = 'possimus';
    $request->templateType = 'animi';

    $response = $sdk->sdk->listTemplates($request);

    if ($response->listTemplatesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## phoneNumberValidate

Retrieves information about a phone number.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PhoneNumberValidateRequest;
use \OpenAPI\OpenAPI\Models\Operations\PhoneNumberValidateRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PhoneNumberValidateRequestBodyNumberValidateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PhoneNumberValidateRequest();
    $request->requestBody = new PhoneNumberValidateRequestBody();
    $request->requestBody->numberValidateRequest = new PhoneNumberValidateRequestBodyNumberValidateRequest();
    $request->requestBody->numberValidateRequest->isoCountryCode = 'ex';
    $request->requestBody->numberValidateRequest->phoneNumber = 'aliquid';
    $request->xAmzAlgorithm = 'accusantium';
    $request->xAmzContentSha256 = 'repellat';
    $request->xAmzCredential = 'doloribus';
    $request->xAmzDate = 'ullam';
    $request->xAmzSecurityToken = 'in';
    $request->xAmzSignature = 'nam';
    $request->xAmzSignedHeaders = 'earum';

    $response = $sdk->sdk->phoneNumberValidate($request);

    if ($response->phoneNumberValidateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putEventStream

Creates a new event stream for an application or updates the settings of an existing event stream for an application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutEventStreamRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutEventStreamRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PutEventStreamRequestBodyWriteEventStream;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutEventStreamRequest();
    $request->requestBody = new PutEventStreamRequestBody();
    $request->requestBody->writeEventStream = new PutEventStreamRequestBodyWriteEventStream();
    $request->requestBody->writeEventStream->destinationStreamArn = 'officia';
    $request->requestBody->writeEventStream->roleArn = 'laborum';
    $request->xAmzAlgorithm = 'placeat';
    $request->xAmzContentSha256 = 'modi';
    $request->xAmzCredential = 'voluptatibus';
    $request->xAmzDate = 'molestias';
    $request->xAmzSecurityToken = 'officiis';
    $request->xAmzSignature = 'sapiente';
    $request->xAmzSignedHeaders = 'cumque';
    $request->applicationId = 'vitae';

    $response = $sdk->sdk->putEventStream($request);

    if ($response->putEventStreamResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putEvents

Creates a new event to record for endpoints, or creates or updates endpoint data that existing events are associated with.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutEventsRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutEventsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PutEventsRequestBodyEventsRequest;
use \OpenAPI\OpenAPI\Models\Shared\EventsBatch;
use \OpenAPI\OpenAPI\Models\Shared\PublicEndpoint;
use \OpenAPI\OpenAPI\Models\Shared\ChannelTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\EndpointDemographic;
use \OpenAPI\OpenAPI\Models\Shared\EndpointLocation;
use \OpenAPI\OpenAPI\Models\Shared\EndpointUser;
use \OpenAPI\OpenAPI\Models\Shared\Event;
use \OpenAPI\OpenAPI\Models\Shared\Session;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutEventsRequest();
    $request->requestBody = new PutEventsRequestBody();
    $request->requestBody->eventsRequest = new PutEventsRequestBodyEventsRequest();
    $request->requestBody->eventsRequest->batchItem = [
        'tempora' => new EventsBatch(),
        'quis' => new EventsBatch(),
        'inventore' => new EventsBatch(),
    ];
    $request->xAmzAlgorithm = 'fugit';
    $request->xAmzContentSha256 = 'cumque';
    $request->xAmzCredential = 'quae';
    $request->xAmzDate = 'perferendis';
    $request->xAmzSecurityToken = 'velit';
    $request->xAmzSignature = 'aspernatur';
    $request->xAmzSignedHeaders = 'eum';
    $request->applicationId = 'eius';

    $response = $sdk->sdk->putEvents($request);

    if ($response->putEventsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## removeAttributes

Removes one or more attributes, of the same attribute type, from all the endpoints that are associated with an application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RemoveAttributesRequest;
use \OpenAPI\OpenAPI\Models\Operations\RemoveAttributesRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\RemoveAttributesRequestBodyUpdateAttributesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RemoveAttributesRequest();
    $request->requestBody = new RemoveAttributesRequestBody();
    $request->requestBody->updateAttributesRequest = new RemoveAttributesRequestBodyUpdateAttributesRequest();
    $request->requestBody->updateAttributesRequest->blacklist = [
        'at',
        'impedit',
        'eos',
    ];
    $request->xAmzAlgorithm = 'sapiente';
    $request->xAmzContentSha256 = 'eum';
    $request->xAmzCredential = 'dicta';
    $request->xAmzDate = 'minima';
    $request->xAmzSecurityToken = 'beatae';
    $request->xAmzSignature = 'cupiditate';
    $request->xAmzSignedHeaders = 'provident';
    $request->applicationId = 'earum';
    $request->attributeType = 'soluta';

    $response = $sdk->sdk->removeAttributes($request);

    if ($response->removeAttributesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sendMessages

Creates and sends a direct message.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SendMessagesRequest;
use \OpenAPI\OpenAPI\Models\Operations\SendMessagesRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\SendMessagesRequestBodyMessageRequest;
use \OpenAPI\OpenAPI\Models\Shared\AddressConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\ChannelTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\EndpointSendConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\DirectMessageConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\ADMMessage;
use \OpenAPI\OpenAPI\Models\Shared\ActionEnum;
use \OpenAPI\OpenAPI\Models\Shared\APNSMessage;
use \OpenAPI\OpenAPI\Models\Shared\BaiduMessage;
use \OpenAPI\OpenAPI\Models\Shared\DefaultMessage;
use \OpenAPI\OpenAPI\Models\Shared\DefaultPushNotificationMessage;
use \OpenAPI\OpenAPI\Models\Shared\EmailMessage;
use \OpenAPI\OpenAPI\Models\Shared\RawEmail;
use \OpenAPI\OpenAPI\Models\Shared\SimpleEmail;
use \OpenAPI\OpenAPI\Models\Shared\SimpleEmailPart;
use \OpenAPI\OpenAPI\Models\Shared\GCMMessage;
use \OpenAPI\OpenAPI\Models\Shared\SMSMessage;
use \OpenAPI\OpenAPI\Models\Shared\MessageTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\VoiceMessage;
use \OpenAPI\OpenAPI\Models\Shared\TemplateConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\Template;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SendMessagesRequest();
    $request->requestBody = new SendMessagesRequestBody();
    $request->requestBody->messageRequest = new SendMessagesRequestBodyMessageRequest();
    $request->requestBody->messageRequest->addresses = [
        'illum' => new AddressConfiguration(),
        'eaque' => new AddressConfiguration(),
        'earum' => new AddressConfiguration(),
        'perspiciatis' => new AddressConfiguration(),
    ];
    $request->requestBody->messageRequest->context = [
        'debitis' => 'aliquid',
        'porro' => 'suscipit',
        'dolorem' => 'fugit',
        'cumque' => 'fuga',
    ];
    $request->requestBody->messageRequest->endpoints = [
        'animi' => new EndpointSendConfiguration(),
    ];
    $request->requestBody->messageRequest->messageConfiguration = new DirectMessageConfiguration();
    $request->requestBody->messageRequest->messageConfiguration->admMessage = new ADMMessage();
    $request->requestBody->messageRequest->messageConfiguration->admMessage->action = ActionEnum::URL;
    $request->requestBody->messageRequest->messageConfiguration->admMessage->body = 'nulla';
    $request->requestBody->messageRequest->messageConfiguration->admMessage->consolidationKey = 'consequatur';
    $request->requestBody->messageRequest->messageConfiguration->admMessage->data = [
        'et' => 'ducimus',
    ];
    $request->requestBody->messageRequest->messageConfiguration->admMessage->expiresAfter = 'natus';
    $request->requestBody->messageRequest->messageConfiguration->admMessage->iconReference = 'occaecati';
    $request->requestBody->messageRequest->messageConfiguration->admMessage->imageIconUrl = 'suscipit';
    $request->requestBody->messageRequest->messageConfiguration->admMessage->imageUrl = 'adipisci';
    $request->requestBody->messageRequest->messageConfiguration->admMessage->md5 = 'quasi';
    $request->requestBody->messageRequest->messageConfiguration->admMessage->rawContent = 'magni';
    $request->requestBody->messageRequest->messageConfiguration->admMessage->silentPush = false;
    $request->requestBody->messageRequest->messageConfiguration->admMessage->smallImageIconUrl = 'doloribus';
    $request->requestBody->messageRequest->messageConfiguration->admMessage->sound = 'nulla';
    $request->requestBody->messageRequest->messageConfiguration->admMessage->substitutions = [
        'ipsa' => [
            'nihil',
            'molestiae',
        ],
        'dicta' => [
            'esse',
            'praesentium',
        ],
        'maiores' => [
            'vel',
            'architecto',
            'fugiat',
            'doloremque',
        ],
        'dicta' => [
            'tempora',
            'esse',
        ],
    ];
    $request->requestBody->messageRequest->messageConfiguration->admMessage->title = 'Ms.';
    $request->requestBody->messageRequest->messageConfiguration->admMessage->url = 'consectetur';
    $request->requestBody->messageRequest->messageConfiguration->apnsMessage = new APNSMessage();
    $request->requestBody->messageRequest->messageConfiguration->apnsMessage->apnsPushType = 'aliquid';
    $request->requestBody->messageRequest->messageConfiguration->apnsMessage->action = ActionEnum::OPEN_APP;
    $request->requestBody->messageRequest->messageConfiguration->apnsMessage->badge = 671384;
    $request->requestBody->messageRequest->messageConfiguration->apnsMessage->body = 'sunt';
    $request->requestBody->messageRequest->messageConfiguration->apnsMessage->category = 'nostrum';
    $request->requestBody->messageRequest->messageConfiguration->apnsMessage->collapseId = 'fugiat';
    $request->requestBody->messageRequest->messageConfiguration->apnsMessage->data = [
        'aliquid' => 'officia',
        'suscipit' => 'aliquid',
        'perferendis' => 'eum',
    ];
    $request->requestBody->messageRequest->messageConfiguration->apnsMessage->mediaUrl = 'voluptas';
    $request->requestBody->messageRequest->messageConfiguration->apnsMessage->preferredAuthenticationMethod = 'iste';
    $request->requestBody->messageRequest->messageConfiguration->apnsMessage->priority = 'id';
    $request->requestBody->messageRequest->messageConfiguration->apnsMessage->rawContent = 'ab';
    $request->requestBody->messageRequest->messageConfiguration->apnsMessage->silentPush = false;
    $request->requestBody->messageRequest->messageConfiguration->apnsMessage->sound = 'error';
    $request->requestBody->messageRequest->messageConfiguration->apnsMessage->substitutions = [
        'voluptates' => [
            'laborum',
            'libero',
            'ad',
        ],
        'deleniti' => [
            'vitae',
            'repellendus',
        ],
        'ex' => [
            'ex',
            'ut',
            'ad',
            'expedita',
        ],
        'voluptatem' => [
            'cum',
            'aliquid',
            'beatae',
        ],
    ];
    $request->requestBody->messageRequest->messageConfiguration->apnsMessage->threadId = 'voluptatum';
    $request->requestBody->messageRequest->messageConfiguration->apnsMessage->timeToLive = 606308;
    $request->requestBody->messageRequest->messageConfiguration->apnsMessage->title = 'Mr.';
    $request->requestBody->messageRequest->messageConfiguration->apnsMessage->url = 'rerum';
    $request->requestBody->messageRequest->messageConfiguration->baiduMessage = new BaiduMessage();
    $request->requestBody->messageRequest->messageConfiguration->baiduMessage->action = ActionEnum::DEEP_LINK;
    $request->requestBody->messageRequest->messageConfiguration->baiduMessage->body = 'culpa';
    $request->requestBody->messageRequest->messageConfiguration->baiduMessage->data = [
        'sapiente' => 'officiis',
    ];
    $request->requestBody->messageRequest->messageConfiguration->baiduMessage->iconReference = 'architecto';
    $request->requestBody->messageRequest->messageConfiguration->baiduMessage->imageIconUrl = 'fuga';
    $request->requestBody->messageRequest->messageConfiguration->baiduMessage->imageUrl = 'pariatur';
    $request->requestBody->messageRequest->messageConfiguration->baiduMessage->rawContent = 'debitis';
    $request->requestBody->messageRequest->messageConfiguration->baiduMessage->silentPush = false;
    $request->requestBody->messageRequest->messageConfiguration->baiduMessage->smallImageIconUrl = 'voluptatem';
    $request->requestBody->messageRequest->messageConfiguration->baiduMessage->sound = 'alias';
    $request->requestBody->messageRequest->messageConfiguration->baiduMessage->substitutions = [
        'earum' => [
            'sapiente',
            'rem',
        ],
        'minus' => [
            'asperiores',
            'ratione',
        ],
        'ullam' => [
            'illum',
        ],
    ];
    $request->requestBody->messageRequest->messageConfiguration->baiduMessage->timeToLive = 518150;
    $request->requestBody->messageRequest->messageConfiguration->baiduMessage->title = 'Miss';
    $request->requestBody->messageRequest->messageConfiguration->baiduMessage->url = 'quibusdam';
    $request->requestBody->messageRequest->messageConfiguration->defaultMessage = new DefaultMessage();
    $request->requestBody->messageRequest->messageConfiguration->defaultMessage->body = 'nam';
    $request->requestBody->messageRequest->messageConfiguration->defaultMessage->substitutions = [
        'culpa' => [
            'aliquam',
        ],
        'inventore' => [
            'veritatis',
            'tempora',
            'dolor',
        ],
    ];
    $request->requestBody->messageRequest->messageConfiguration->defaultPushNotificationMessage = new DefaultPushNotificationMessage();
    $request->requestBody->messageRequest->messageConfiguration->defaultPushNotificationMessage->action = ActionEnum::OPEN_APP;
    $request->requestBody->messageRequest->messageConfiguration->defaultPushNotificationMessage->body = 'architecto';
    $request->requestBody->messageRequest->messageConfiguration->defaultPushNotificationMessage->data = [
        'modi' => 'fugit',
    ];
    $request->requestBody->messageRequest->messageConfiguration->defaultPushNotificationMessage->silentPush = false;
    $request->requestBody->messageRequest->messageConfiguration->defaultPushNotificationMessage->substitutions = [
        'laudantium' => [
            'dolor',
        ],
    ];
    $request->requestBody->messageRequest->messageConfiguration->defaultPushNotificationMessage->title = 'Dr.';
    $request->requestBody->messageRequest->messageConfiguration->defaultPushNotificationMessage->url = 'ipsam';
    $request->requestBody->messageRequest->messageConfiguration->emailMessage = new EmailMessage();
    $request->requestBody->messageRequest->messageConfiguration->emailMessage->body = 'consequuntur';
    $request->requestBody->messageRequest->messageConfiguration->emailMessage->feedbackForwardingAddress = 'ipsa';
    $request->requestBody->messageRequest->messageConfiguration->emailMessage->fromAddress = 'quas';
    $request->requestBody->messageRequest->messageConfiguration->emailMessage->rawEmail = new RawEmail();
    $request->requestBody->messageRequest->messageConfiguration->emailMessage->rawEmail->data = 'eveniet';
    $request->requestBody->messageRequest->messageConfiguration->emailMessage->replyToAddresses = [
        'officiis',
        'esse',
        'necessitatibus',
        'sed',
    ];
    $request->requestBody->messageRequest->messageConfiguration->emailMessage->simpleEmail = new SimpleEmail();
    $request->requestBody->messageRequest->messageConfiguration->emailMessage->simpleEmail->htmlPart = new SimpleEmailPart();
    $request->requestBody->messageRequest->messageConfiguration->emailMessage->simpleEmail->htmlPart->charset = 'veniam';
    $request->requestBody->messageRequest->messageConfiguration->emailMessage->simpleEmail->htmlPart->data = 'nesciunt';
    $request->requestBody->messageRequest->messageConfiguration->emailMessage->simpleEmail->subject = new SimpleEmailPart();
    $request->requestBody->messageRequest->messageConfiguration->emailMessage->simpleEmail->subject->charset = 'expedita';
    $request->requestBody->messageRequest->messageConfiguration->emailMessage->simpleEmail->subject->data = 'eum';
    $request->requestBody->messageRequest->messageConfiguration->emailMessage->simpleEmail->textPart = new SimpleEmailPart();
    $request->requestBody->messageRequest->messageConfiguration->emailMessage->simpleEmail->textPart->charset = 'vel';
    $request->requestBody->messageRequest->messageConfiguration->emailMessage->simpleEmail->textPart->data = 'voluptatum';
    $request->requestBody->messageRequest->messageConfiguration->emailMessage->substitutions = [
        'exercitationem' => [
            'porro',
        ],
        'autem' => [
            'laboriosam',
            'recusandae',
            'consequuntur',
            'voluptatem',
        ],
    ];
    $request->requestBody->messageRequest->messageConfiguration->gcmMessage = new GCMMessage();
    $request->requestBody->messageRequest->messageConfiguration->gcmMessage->action = ActionEnum::DEEP_LINK;
    $request->requestBody->messageRequest->messageConfiguration->gcmMessage->body = 'necessitatibus';
    $request->requestBody->messageRequest->messageConfiguration->gcmMessage->collapseKey = 'quasi';
    $request->requestBody->messageRequest->messageConfiguration->gcmMessage->data = [
        'at' => 'vero',
        'est' => 'harum',
    ];
    $request->requestBody->messageRequest->messageConfiguration->gcmMessage->iconReference = 'sequi';
    $request->requestBody->messageRequest->messageConfiguration->gcmMessage->imageIconUrl = 'doloribus';
    $request->requestBody->messageRequest->messageConfiguration->gcmMessage->imageUrl = 'repudiandae';
    $request->requestBody->messageRequest->messageConfiguration->gcmMessage->priority = 'optio';
    $request->requestBody->messageRequest->messageConfiguration->gcmMessage->rawContent = 'occaecati';
    $request->requestBody->messageRequest->messageConfiguration->gcmMessage->restrictedPackageName = 'nemo';
    $request->requestBody->messageRequest->messageConfiguration->gcmMessage->silentPush = false;
    $request->requestBody->messageRequest->messageConfiguration->gcmMessage->smallImageIconUrl = 'voluptate';
    $request->requestBody->messageRequest->messageConfiguration->gcmMessage->sound = 'blanditiis';
    $request->requestBody->messageRequest->messageConfiguration->gcmMessage->substitutions = [
        'voluptas' => [
            'nemo',
            'quos',
        ],
        'eius' => [
            'ducimus',
        ],
        'nesciunt' => [
            'laudantium',
            'incidunt',
            'quasi',
        ],
    ];
    $request->requestBody->messageRequest->messageConfiguration->gcmMessage->timeToLive = 524380;
    $request->requestBody->messageRequest->messageConfiguration->gcmMessage->title = 'Dr.';
    $request->requestBody->messageRequest->messageConfiguration->gcmMessage->url = 'dicta';
    $request->requestBody->messageRequest->messageConfiguration->smsMessage = new SMSMessage();
    $request->requestBody->messageRequest->messageConfiguration->smsMessage->body = 'nisi';
    $request->requestBody->messageRequest->messageConfiguration->smsMessage->entityId = 'consequuntur';
    $request->requestBody->messageRequest->messageConfiguration->smsMessage->keyword = 'consectetur';
    $request->requestBody->messageRequest->messageConfiguration->smsMessage->mediaUrl = 'aperiam';
    $request->requestBody->messageRequest->messageConfiguration->smsMessage->messageType = MessageTypeEnum::PROMOTIONAL;
    $request->requestBody->messageRequest->messageConfiguration->smsMessage->originationNumber = 'reiciendis';
    $request->requestBody->messageRequest->messageConfiguration->smsMessage->senderId = 'soluta';
    $request->requestBody->messageRequest->messageConfiguration->smsMessage->substitutions = [
        'omnis' => [
            'occaecati',
        ],
    ];
    $request->requestBody->messageRequest->messageConfiguration->smsMessage->templateId = 'iste';
    $request->requestBody->messageRequest->messageConfiguration->voiceMessage = new VoiceMessage();
    $request->requestBody->messageRequest->messageConfiguration->voiceMessage->body = 'magni';
    $request->requestBody->messageRequest->messageConfiguration->voiceMessage->languageCode = 'inventore';
    $request->requestBody->messageRequest->messageConfiguration->voiceMessage->originationNumber = 'fuga';
    $request->requestBody->messageRequest->messageConfiguration->voiceMessage->substitutions = [
        'voluptatibus' => [
            'omnis',
            'delectus',
            'minima',
        ],
        'praesentium' => [
            'magnam',
            'temporibus',
            'quos',
            'commodi',
        ],
        'itaque' => [
            'totam',
            'earum',
        ],
        'modi' => [
            'vero',
            'voluptatem',
            'ipsam',
        ],
    ];
    $request->requestBody->messageRequest->messageConfiguration->voiceMessage->voiceId = 'vel';
    $request->requestBody->messageRequest->templateConfiguration = new TemplateConfiguration();
    $request->requestBody->messageRequest->templateConfiguration->emailTemplate = new Template();
    $request->requestBody->messageRequest->templateConfiguration->emailTemplate->name = 'Frances Franey';
    $request->requestBody->messageRequest->templateConfiguration->emailTemplate->version = 'sint';
    $request->requestBody->messageRequest->templateConfiguration->pushTemplate = new Template();
    $request->requestBody->messageRequest->templateConfiguration->pushTemplate->name = 'Gerard Koch';
    $request->requestBody->messageRequest->templateConfiguration->pushTemplate->version = 'est';
    $request->requestBody->messageRequest->templateConfiguration->smsTemplate = new Template();
    $request->requestBody->messageRequest->templateConfiguration->smsTemplate->name = 'Velma Thompson';
    $request->requestBody->messageRequest->templateConfiguration->smsTemplate->version = 'necessitatibus';
    $request->requestBody->messageRequest->templateConfiguration->voiceTemplate = new Template();
    $request->requestBody->messageRequest->templateConfiguration->voiceTemplate->name = 'Ruben Hodkiewicz';
    $request->requestBody->messageRequest->templateConfiguration->voiceTemplate->version = 'quae';
    $request->requestBody->messageRequest->traceId = 'minus';
    $request->xAmzAlgorithm = 'fuga';
    $request->xAmzContentSha256 = 'laborum';
    $request->xAmzCredential = 'consectetur';
    $request->xAmzDate = 'velit';
    $request->xAmzSecurityToken = 'atque';
    $request->xAmzSignature = 'ipsum';
    $request->xAmzSignedHeaders = 'impedit';
    $request->applicationId = 'magni';

    $response = $sdk->sdk->sendMessages($request);

    if ($response->sendMessagesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sendOTPMessage

Send an OTP message

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SendOTPMessageRequest;
use \OpenAPI\OpenAPI\Models\Operations\SendOTPMessageRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\SendOTPMessageRequestBodySendOTPMessageRequestParameters;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SendOTPMessageRequest();
    $request->requestBody = new SendOTPMessageRequestBody();
    $request->requestBody->sendOTPMessageRequestParameters = new SendOTPMessageRequestBodySendOTPMessageRequestParameters();
    $request->requestBody->sendOTPMessageRequestParameters->allowedAttempts = 746585;
    $request->requestBody->sendOTPMessageRequestParameters->brandName = 'repudiandae';
    $request->requestBody->sendOTPMessageRequestParameters->channel = 'nam';
    $request->requestBody->sendOTPMessageRequestParameters->codeLength = 294076;
    $request->requestBody->sendOTPMessageRequestParameters->destinationIdentity = 'iusto';
    $request->requestBody->sendOTPMessageRequestParameters->entityId = 'voluptate';
    $request->requestBody->sendOTPMessageRequestParameters->language = 'sequi';
    $request->requestBody->sendOTPMessageRequestParameters->originationIdentity = 'dignissimos';
    $request->requestBody->sendOTPMessageRequestParameters->referenceId = 'neque';
    $request->requestBody->sendOTPMessageRequestParameters->templateId = 'quo';
    $request->requestBody->sendOTPMessageRequestParameters->validityPeriod = 535468;
    $request->xAmzAlgorithm = 'quibusdam';
    $request->xAmzContentSha256 = 'iure';
    $request->xAmzCredential = 'odit';
    $request->xAmzDate = 'voluptatibus';
    $request->xAmzSecurityToken = 'vel';
    $request->xAmzSignature = 'magnam';
    $request->xAmzSignedHeaders = 'quibusdam';
    $request->applicationId = 'inventore';

    $response = $sdk->sdk->sendOTPMessage($request);

    if ($response->sendOTPMessageResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sendUsersMessages

Creates and sends a message to a list of users.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SendUsersMessagesRequest;
use \OpenAPI\OpenAPI\Models\Operations\SendUsersMessagesRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\SendUsersMessagesRequestBodySendUsersMessageRequest;
use \OpenAPI\OpenAPI\Models\Shared\DirectMessageConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\ADMMessage;
use \OpenAPI\OpenAPI\Models\Shared\ActionEnum;
use \OpenAPI\OpenAPI\Models\Shared\APNSMessage;
use \OpenAPI\OpenAPI\Models\Shared\BaiduMessage;
use \OpenAPI\OpenAPI\Models\Shared\DefaultMessage;
use \OpenAPI\OpenAPI\Models\Shared\DefaultPushNotificationMessage;
use \OpenAPI\OpenAPI\Models\Shared\EmailMessage;
use \OpenAPI\OpenAPI\Models\Shared\RawEmail;
use \OpenAPI\OpenAPI\Models\Shared\SimpleEmail;
use \OpenAPI\OpenAPI\Models\Shared\SimpleEmailPart;
use \OpenAPI\OpenAPI\Models\Shared\GCMMessage;
use \OpenAPI\OpenAPI\Models\Shared\SMSMessage;
use \OpenAPI\OpenAPI\Models\Shared\MessageTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\VoiceMessage;
use \OpenAPI\OpenAPI\Models\Shared\TemplateConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\Template;
use \OpenAPI\OpenAPI\Models\Shared\EndpointSendConfiguration;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SendUsersMessagesRequest();
    $request->requestBody = new SendUsersMessagesRequestBody();
    $request->requestBody->sendUsersMessageRequest = new SendUsersMessagesRequestBodySendUsersMessageRequest();
    $request->requestBody->sendUsersMessageRequest->context = [
        'libero' => 'architecto',
        'voluptatibus' => 'quia',
        'porro' => 'aliquam',
        'velit' => 'illo',
    ];
    $request->requestBody->sendUsersMessageRequest->messageConfiguration = new DirectMessageConfiguration();
    $request->requestBody->sendUsersMessageRequest->messageConfiguration->admMessage = new ADMMessage();
    $request->requestBody->sendUsersMessageRequest->messageConfiguration->admMessage->action = ActionEnum::OPEN_APP;
    $request->requestBody->sendUsersMessageRequest->messageConfiguration->admMessage->body = 'vel';
    $request->requestBody->sendUsersMessageRequest->messageConfiguration->admMessage->consolidationKey = 'ea';
    $request->requestBody->sendUsersMessageRequest->messageConfiguration->admMessage->data = [
        'vero' => 'excepturi',
    ];
    $request->requestBody->sendUsersMessageRequest->messageConfiguration->admMessage->expiresAfter = 'eum';
    $request->requestBody->sendUsersMessageRequest->messageConfiguration->admMessage->iconReference = 'velit';
    $request->requestBody->sendUsersMessageRequest->messageConfiguration->admMessage->imageIconUrl = 'ut';
    $request->requestBody->sendUsersMessageRequest->messageConfiguration->admMessage->imageUrl = 'perspiciatis';
    $request->requestBody->sendUsersMessageRequest->messageConfiguration->admMessage->md5 = 'earum';
    $request->requestBody->sendUsersMessageRequest->messageConfiguration->admMessage->rawContent = 'dicta';
    $request->requestBody->sendUsersMessageRequest->messageConfiguration->admMessage->silentPush = false;
    $request->requestBody->sendUsersMessageRequest->messageConfiguration->admMessage->smallImageIconUrl = 'impedit';
    $request->requestBody->sendUsersMessageRequest->messageConfiguration->admMessage->sound = 'voluptatibus';
    $request->requestBody->sendUsersMessageRequest->messageConfiguration->admMessage->substitutions = [
        'itaque' => [
            'nisi',
        ],
        'itaque' => [
            'laborum',
        ],
        'non' => [
            'iusto',
        ],
    ];
    $request->requestBody->sendUsersMessageRequest->messageConfiguration->admMessage->title = 'Mr.';
    $request->requestBody->sendUsersMessageRequest->messageConfiguration->admMessage->url = 'doloremque';
    $request->requestBody->sendUsersMessageRequest->messageConfiguration->apnsMessage = new APNSMessage();
    $request->requestBody->sendUsersMessageRequest->messageConfiguration->apnsMessage->apnsPushType = 'consequatur';
    $request->requestBody->sendUsersMessageRequest->messageConfiguration->apnsMessage->action = ActionEnum::DEEP_LINK;
    $request->requestBody->sendUsersMessageRequest->messageConfiguration->apnsMessage->badge = 927403;
    $request->requestBody->sendUsersMessageRequest->messageConfiguration->apnsMessage->body = 'ea';
    $request->requestBody->sendUsersMessageRequest->messageConfiguration->apnsMessage->category = 'quidem';
    $request->requestBody->sendUsersMessageRequest->messageConfiguration->apnsMessage->collapseId = 'voluptas';
    $request->requestBody->sendUsersMessageRequest->messageConfiguration->apnsMessage->data = [
        'placeat' => 'perspiciatis',
        'expedita' => 'deleniti',
        'a' => 'voluptate',
    ];
    $request->requestBody->sendUsersMessageRequest->messageConfiguration->apnsMessage->mediaUrl = 'ullam';
    $request->requestBody->sendUsersMessageRequest->messageConfiguration->apnsMessage->preferredAuthenticationMethod = 'unde';
    $request->requestBody->sendUsersMessageRequest->messageConfiguration->apnsMessage->priority = 'necessitatibus';
    $request->requestBody->sendUsersMessageRequest->messageConfiguration->apnsMessage->rawContent = 'animi';
    $request->requestBody->sendUsersMessageRequest->messageConfiguration->apnsMessage->silentPush = false;
    $request->requestBody->sendUsersMessageRequest->messageConfiguration->apnsMessage->sound = 'impedit';
    $request->requestBody->sendUsersMessageRequest->messageConfiguration->apnsMessage->substitutions = [
        'corporis' => [
            'error',
            'esse',
            'labore',
        ],
        'veritatis' => [
            'consectetur',
            'vitae',
            'inventore',
            'dolorem',
        ],
    ];
    $request->requestBody->sendUsersMessageRequest->messageConfiguration->apnsMessage->threadId = 'ad';
    $request->requestBody->sendUsersMessageRequest->messageConfiguration->apnsMessage->timeToLive = 183033;
    $request->requestBody->sendUsersMessageRequest->messageConfiguration->apnsMessage->title = 'Miss';
    $request->requestBody->sendUsersMessageRequest->messageConfiguration->apnsMessage->url = 'ex';
    $request->requestBody->sendUsersMessageRequest->messageConfiguration->baiduMessage = new BaiduMessage();
    $request->requestBody->sendUsersMessageRequest->messageConfiguration->baiduMessage->action = ActionEnum::DEEP_LINK;
    $request->requestBody->sendUsersMessageRequest->messageConfiguration->baiduMessage->body = 'soluta';
    $request->requestBody->sendUsersMessageRequest->messageConfiguration->baiduMessage->data = [
        'rem' => 'dolorum',
        'odio' => 'fugit',
        'alias' => 'magni',
    ];
    $request->requestBody->sendUsersMessageRequest->messageConfiguration->baiduMessage->iconReference = 'vel';
    $request->requestBody->sendUsersMessageRequest->messageConfiguration->baiduMessage->imageIconUrl = 'quae';
    $request->requestBody->sendUsersMessageRequest->messageConfiguration->baiduMessage->imageUrl = 'quae';
    $request->requestBody->sendUsersMessageRequest->messageConfiguration->baiduMessage->rawContent = 'modi';
    $request->requestBody->sendUsersMessageRequest->messageConfiguration->baiduMessage->silentPush = false;
    $request->requestBody->sendUsersMessageRequest->messageConfiguration->baiduMessage->smallImageIconUrl = 'neque';
    $request->requestBody->sendUsersMessageRequest->messageConfiguration->baiduMessage->sound = 'exercitationem';
    $request->requestBody->sendUsersMessageRequest->messageConfiguration->baiduMessage->substitutions = [
        'et' => [
            'unde',
        ],
        'nulla' => [
            'maxime',
            'quia',
            'quia',
        ],
        'nostrum' => [
            'libero',
            'dicta',
            'id',
        ],
        'libero' => [
            'officia',
            'quos',
            'placeat',
            'sit',
        ],
    ];
    $request->requestBody->sendUsersMessageRequest->messageConfiguration->baiduMessage->timeToLive = 479385;
    $request->requestBody->sendUsersMessageRequest->messageConfiguration->baiduMessage->title = 'Mr.';
    $request->requestBody->sendUsersMessageRequest->messageConfiguration->baiduMessage->url = 'voluptates';
    $request->requestBody->sendUsersMessageRequest->messageConfiguration->defaultMessage = new DefaultMessage();
    $request->requestBody->sendUsersMessageRequest->messageConfiguration->defaultMessage->body = 'inventore';
    $request->requestBody->sendUsersMessageRequest->messageConfiguration->defaultMessage->substitutions = [
        'totam' => [
            'eligendi',
            'distinctio',
        ],
    ];
    $request->requestBody->sendUsersMessageRequest->messageConfiguration->defaultPushNotificationMessage = new DefaultPushNotificationMessage();
    $request->requestBody->sendUsersMessageRequest->messageConfiguration->defaultPushNotificationMessage->action = ActionEnum::OPEN_APP;
    $request->requestBody->sendUsersMessageRequest->messageConfiguration->defaultPushNotificationMessage->body = 'autem';
    $request->requestBody->sendUsersMessageRequest->messageConfiguration->defaultPushNotificationMessage->data = [
        'dolores' => 'assumenda',
        'beatae' => 'est',
    ];
    $request->requestBody->sendUsersMessageRequest->messageConfiguration->defaultPushNotificationMessage->silentPush = false;
    $request->requestBody->sendUsersMessageRequest->messageConfiguration->defaultPushNotificationMessage->substitutions = [
        'corrupti' => [
            'provident',
            'accusamus',
        ],
        'necessitatibus' => [
            'sint',
            'ea',
            'autem',
        ],
        'ipsam' => [
            'laudantium',
            'corporis',
            'officiis',
        ],
        'voluptatibus' => [
            'at',
            'alias',
            'quia',
        ],
    ];
    $request->requestBody->sendUsersMessageRequest->messageConfiguration->defaultPushNotificationMessage->title = 'Miss';
    $request->requestBody->sendUsersMessageRequest->messageConfiguration->defaultPushNotificationMessage->url = 'fuga';
    $request->requestBody->sendUsersMessageRequest->messageConfiguration->emailMessage = new EmailMessage();
    $request->requestBody->sendUsersMessageRequest->messageConfiguration->emailMessage->body = 'repudiandae';
    $request->requestBody->sendUsersMessageRequest->messageConfiguration->emailMessage->feedbackForwardingAddress = 'accusantium';
    $request->requestBody->sendUsersMessageRequest->messageConfiguration->emailMessage->fromAddress = 'expedita';
    $request->requestBody->sendUsersMessageRequest->messageConfiguration->emailMessage->rawEmail = new RawEmail();
    $request->requestBody->sendUsersMessageRequest->messageConfiguration->emailMessage->rawEmail->data = 'officiis';
    $request->requestBody->sendUsersMessageRequest->messageConfiguration->emailMessage->replyToAddresses = [
        'quibusdam',
    ];
    $request->requestBody->sendUsersMessageRequest->messageConfiguration->emailMessage->simpleEmail = new SimpleEmail();
    $request->requestBody->sendUsersMessageRequest->messageConfiguration->emailMessage->simpleEmail->htmlPart = new SimpleEmailPart();
    $request->requestBody->sendUsersMessageRequest->messageConfiguration->emailMessage->simpleEmail->htmlPart->charset = 'odio';
    $request->requestBody->sendUsersMessageRequest->messageConfiguration->emailMessage->simpleEmail->htmlPart->data = 'praesentium';
    $request->requestBody->sendUsersMessageRequest->messageConfiguration->emailMessage->simpleEmail->subject = new SimpleEmailPart();
    $request->requestBody->sendUsersMessageRequest->messageConfiguration->emailMessage->simpleEmail->subject->charset = 'odit';
    $request->requestBody->sendUsersMessageRequest->messageConfiguration->emailMessage->simpleEmail->subject->data = 'explicabo';
    $request->requestBody->sendUsersMessageRequest->messageConfiguration->emailMessage->simpleEmail->textPart = new SimpleEmailPart();
    $request->requestBody->sendUsersMessageRequest->messageConfiguration->emailMessage->simpleEmail->textPart->charset = 'corporis';
    $request->requestBody->sendUsersMessageRequest->messageConfiguration->emailMessage->simpleEmail->textPart->data = 'error';
    $request->requestBody->sendUsersMessageRequest->messageConfiguration->emailMessage->substitutions = [
        'adipisci' => [
            'similique',
            'ut',
            'quidem',
            'quis',
        ],
        'beatae' => [
            'molestiae',
            'delectus',
            'cupiditate',
        ],
        'fugit' => [
            'numquam',
            'nesciunt',
        ],
        'at' => [
            'dignissimos',
            'optio',
            'necessitatibus',
        ],
    ];
    $request->requestBody->sendUsersMessageRequest->messageConfiguration->gcmMessage = new GCMMessage();
    $request->requestBody->sendUsersMessageRequest->messageConfiguration->gcmMessage->action = ActionEnum::DEEP_LINK;
    $request->requestBody->sendUsersMessageRequest->messageConfiguration->gcmMessage->body = 'qui';
    $request->requestBody->sendUsersMessageRequest->messageConfiguration->gcmMessage->collapseKey = 'expedita';
    $request->requestBody->sendUsersMessageRequest->messageConfiguration->gcmMessage->data = [
        'cupiditate' => 'minima',
        'placeat' => 'enim',
        'neque' => 'in',
    ];
    $request->requestBody->sendUsersMessageRequest->messageConfiguration->gcmMessage->iconReference = 'minus';
    $request->requestBody->sendUsersMessageRequest->messageConfiguration->gcmMessage->imageIconUrl = 'eum';
    $request->requestBody->sendUsersMessageRequest->messageConfiguration->gcmMessage->imageUrl = 'modi';
    $request->requestBody->sendUsersMessageRequest->messageConfiguration->gcmMessage->priority = 'corporis';
    $request->requestBody->sendUsersMessageRequest->messageConfiguration->gcmMessage->rawContent = 'magnam';
    $request->requestBody->sendUsersMessageRequest->messageConfiguration->gcmMessage->restrictedPackageName = 'voluptates';
    $request->requestBody->sendUsersMessageRequest->messageConfiguration->gcmMessage->silentPush = false;
    $request->requestBody->sendUsersMessageRequest->messageConfiguration->gcmMessage->smallImageIconUrl = 'maiores';
    $request->requestBody->sendUsersMessageRequest->messageConfiguration->gcmMessage->sound = 'tempore';
    $request->requestBody->sendUsersMessageRequest->messageConfiguration->gcmMessage->substitutions = [
        'libero' => [
            'labore',
        ],
    ];
    $request->requestBody->sendUsersMessageRequest->messageConfiguration->gcmMessage->timeToLive = 520875;
    $request->requestBody->sendUsersMessageRequest->messageConfiguration->gcmMessage->title = 'Ms.';
    $request->requestBody->sendUsersMessageRequest->messageConfiguration->gcmMessage->url = 'voluptas';
    $request->requestBody->sendUsersMessageRequest->messageConfiguration->smsMessage = new SMSMessage();
    $request->requestBody->sendUsersMessageRequest->messageConfiguration->smsMessage->body = 'quo';
    $request->requestBody->sendUsersMessageRequest->messageConfiguration->smsMessage->entityId = 'velit';
    $request->requestBody->sendUsersMessageRequest->messageConfiguration->smsMessage->keyword = 'minus';
    $request->requestBody->sendUsersMessageRequest->messageConfiguration->smsMessage->mediaUrl = 'fuga';
    $request->requestBody->sendUsersMessageRequest->messageConfiguration->smsMessage->messageType = MessageTypeEnum::TRANSACTIONAL;
    $request->requestBody->sendUsersMessageRequest->messageConfiguration->smsMessage->originationNumber = 'est';
    $request->requestBody->sendUsersMessageRequest->messageConfiguration->smsMessage->senderId = 'impedit';
    $request->requestBody->sendUsersMessageRequest->messageConfiguration->smsMessage->substitutions = [
        'tempore' => [
            'odit',
            'repellat',
            'pariatur',
            'nemo',
        ],
        'reprehenderit' => [
            'odio',
        ],
        'minima' => [
            'ducimus',
            'excepturi',
        ],
        'dolores' => [
            'veritatis',
            'ducimus',
            'voluptate',
        ],
    ];
    $request->requestBody->sendUsersMessageRequest->messageConfiguration->smsMessage->templateId = 'pariatur';
    $request->requestBody->sendUsersMessageRequest->messageConfiguration->voiceMessage = new VoiceMessage();
    $request->requestBody->sendUsersMessageRequest->messageConfiguration->voiceMessage->body = 'itaque';
    $request->requestBody->sendUsersMessageRequest->messageConfiguration->voiceMessage->languageCode = 'similique';
    $request->requestBody->sendUsersMessageRequest->messageConfiguration->voiceMessage->originationNumber = 'optio';
    $request->requestBody->sendUsersMessageRequest->messageConfiguration->voiceMessage->substitutions = [
        'quaerat' => [
            'officiis',
            'placeat',
        ],
        'quidem' => [
            'quam',
            'dolorem',
        ],
    ];
    $request->requestBody->sendUsersMessageRequest->messageConfiguration->voiceMessage->voiceId = 'modi';
    $request->requestBody->sendUsersMessageRequest->templateConfiguration = new TemplateConfiguration();
    $request->requestBody->sendUsersMessageRequest->templateConfiguration->emailTemplate = new Template();
    $request->requestBody->sendUsersMessageRequest->templateConfiguration->emailTemplate->name = 'Bobbie Terry';
    $request->requestBody->sendUsersMessageRequest->templateConfiguration->emailTemplate->version = 'cum';
    $request->requestBody->sendUsersMessageRequest->templateConfiguration->pushTemplate = new Template();
    $request->requestBody->sendUsersMessageRequest->templateConfiguration->pushTemplate->name = 'Lila Harvey';
    $request->requestBody->sendUsersMessageRequest->templateConfiguration->pushTemplate->version = 'nam';
    $request->requestBody->sendUsersMessageRequest->templateConfiguration->smsTemplate = new Template();
    $request->requestBody->sendUsersMessageRequest->templateConfiguration->smsTemplate->name = 'Louise Tromp IV';
    $request->requestBody->sendUsersMessageRequest->templateConfiguration->smsTemplate->version = 'maiores';
    $request->requestBody->sendUsersMessageRequest->templateConfiguration->voiceTemplate = new Template();
    $request->requestBody->sendUsersMessageRequest->templateConfiguration->voiceTemplate->name = 'Joyce Howe';
    $request->requestBody->sendUsersMessageRequest->templateConfiguration->voiceTemplate->version = 'excepturi';
    $request->requestBody->sendUsersMessageRequest->traceId = 'occaecati';
    $request->requestBody->sendUsersMessageRequest->users = [
        'aliquam' => new EndpointSendConfiguration(),
        'nostrum' => new EndpointSendConfiguration(),
    ];
    $request->xAmzAlgorithm = 'doloribus';
    $request->xAmzContentSha256 = 'eligendi';
    $request->xAmzCredential = 'sint';
    $request->xAmzDate = 'enim';
    $request->xAmzSecurityToken = 'hic';
    $request->xAmzSignature = 'animi';
    $request->xAmzSignedHeaders = 'quas';
    $request->applicationId = 'totam';

    $response = $sdk->sdk->sendUsersMessages($request);

    if ($response->sendUsersMessagesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagResource

Adds one or more tags (keys and values) to an application, campaign, message template, or segment.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceRequestBodyTagsModel;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagResourceRequest();
    $request->requestBody = new TagResourceRequestBody();
    $request->requestBody->tagsModel = new TagResourceRequestBodyTagsModel();
    $request->requestBody->tagsModel->tags = [
        'odio' => 'eaque',
        'saepe' => 'architecto',
        'quos' => 'iste',
    ];
    $request->xAmzAlgorithm = 'assumenda';
    $request->xAmzContentSha256 = 'tempore';
    $request->xAmzCredential = 'libero';
    $request->xAmzDate = 'velit';
    $request->xAmzSecurityToken = 'doloremque';
    $request->xAmzSignature = 'delectus';
    $request->xAmzSignedHeaders = 'impedit';
    $request->resourceArn = 'cum';

    $response = $sdk->sdk->tagResource($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## untagResource

Removes one or more tags (keys and values) from an application, campaign, message template, or segment.

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
    $request->xAmzAlgorithm = 'ipsum';
    $request->xAmzContentSha256 = 'adipisci';
    $request->xAmzCredential = 'saepe';
    $request->xAmzDate = 'deserunt';
    $request->xAmzSecurityToken = 'doloremque';
    $request->xAmzSignature = 'quis';
    $request->xAmzSignedHeaders = 'veniam';
    $request->resourceArn = 'libero';
    $request->tagKeys = [
        'cupiditate',
    ];

    $response = $sdk->sdk->untagResource($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateAdmChannel

Enables the ADM channel for an application or updates the status and settings of the ADM channel for an application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAdmChannelRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAdmChannelRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateADMChannelRequestBodyADMChannelRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateAdmChannelRequest();
    $request->requestBody = new UpdateAdmChannelRequestBody();
    $request->requestBody->admChannelRequest = new UpdateADMChannelRequestBodyADMChannelRequest();
    $request->requestBody->admChannelRequest->clientId = 'molestiae';
    $request->requestBody->admChannelRequest->clientSecret = 'eligendi';
    $request->requestBody->admChannelRequest->enabled = false;
    $request->xAmzAlgorithm = 'possimus';
    $request->xAmzContentSha256 = 'non';
    $request->xAmzCredential = 'magnam';
    $request->xAmzDate = 'itaque';
    $request->xAmzSecurityToken = 'sed';
    $request->xAmzSignature = 'asperiores';
    $request->xAmzSignedHeaders = 'veniam';
    $request->applicationId = 'consequuntur';

    $response = $sdk->sdk->updateAdmChannel($request);

    if ($response->updateAdmChannelResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateApnsChannel

Enables the APNs channel for an application or updates the status and settings of the APNs channel for an application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateApnsChannelRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateApnsChannelRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAPNSChannelRequestBodyAPNSChannelRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateApnsChannelRequest();
    $request->requestBody = new UpdateApnsChannelRequestBody();
    $request->requestBody->apnsChannelRequest = new UpdateAPNSChannelRequestBodyAPNSChannelRequest();
    $request->requestBody->apnsChannelRequest->bundleId = 'facere';
    $request->requestBody->apnsChannelRequest->certificate = 'laudantium';
    $request->requestBody->apnsChannelRequest->defaultAuthenticationMethod = 'odit';
    $request->requestBody->apnsChannelRequest->enabled = false;
    $request->requestBody->apnsChannelRequest->privateKey = 'pariatur';
    $request->requestBody->apnsChannelRequest->teamId = 'amet';
    $request->requestBody->apnsChannelRequest->tokenKey = 'exercitationem';
    $request->requestBody->apnsChannelRequest->tokenKeyId = 'ab';
    $request->xAmzAlgorithm = 'velit';
    $request->xAmzContentSha256 = 'facilis';
    $request->xAmzCredential = 'tempore';
    $request->xAmzDate = 'nisi';
    $request->xAmzSecurityToken = 'voluptatibus';
    $request->xAmzSignature = 'quaerat';
    $request->xAmzSignedHeaders = 'blanditiis';
    $request->applicationId = 'distinctio';

    $response = $sdk->sdk->updateApnsChannel($request);

    if ($response->updateApnsChannelResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateApnsSandboxChannel

Enables the APNs sandbox channel for an application or updates the status and settings of the APNs sandbox channel for an application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateApnsSandboxChannelRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateApnsSandboxChannelRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAPNSSandboxChannelRequestBodyAPNSSandboxChannelRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateApnsSandboxChannelRequest();
    $request->requestBody = new UpdateApnsSandboxChannelRequestBody();
    $request->requestBody->apnsSandboxChannelRequest = new UpdateAPNSSandboxChannelRequestBodyAPNSSandboxChannelRequest();
    $request->requestBody->apnsSandboxChannelRequest->bundleId = 'nisi';
    $request->requestBody->apnsSandboxChannelRequest->certificate = 'quis';
    $request->requestBody->apnsSandboxChannelRequest->defaultAuthenticationMethod = 'nisi';
    $request->requestBody->apnsSandboxChannelRequest->enabled = false;
    $request->requestBody->apnsSandboxChannelRequest->privateKey = 'libero';
    $request->requestBody->apnsSandboxChannelRequest->teamId = 'minus';
    $request->requestBody->apnsSandboxChannelRequest->tokenKey = 'facere';
    $request->requestBody->apnsSandboxChannelRequest->tokenKeyId = 'facilis';
    $request->xAmzAlgorithm = 'ipsum';
    $request->xAmzContentSha256 = 'ad';
    $request->xAmzCredential = 'voluptatibus';
    $request->xAmzDate = 'voluptatibus';
    $request->xAmzSecurityToken = 'consequuntur';
    $request->xAmzSignature = 'debitis';
    $request->xAmzSignedHeaders = 'labore';
    $request->applicationId = 'rerum';

    $response = $sdk->sdk->updateApnsSandboxChannel($request);

    if ($response->updateApnsSandboxChannelResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateApnsVoipChannel

Enables the APNs VoIP channel for an application or updates the status and settings of the APNs VoIP channel for an application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateApnsVoipChannelRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateApnsVoipChannelRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAPNSVoipChannelRequestBodyAPNSVoipChannelRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateApnsVoipChannelRequest();
    $request->requestBody = new UpdateApnsVoipChannelRequestBody();
    $request->requestBody->apnsVoipChannelRequest = new UpdateAPNSVoipChannelRequestBodyAPNSVoipChannelRequest();
    $request->requestBody->apnsVoipChannelRequest->bundleId = 'eos';
    $request->requestBody->apnsVoipChannelRequest->certificate = 'reprehenderit';
    $request->requestBody->apnsVoipChannelRequest->defaultAuthenticationMethod = 'nostrum';
    $request->requestBody->apnsVoipChannelRequest->enabled = false;
    $request->requestBody->apnsVoipChannelRequest->privateKey = 'neque';
    $request->requestBody->apnsVoipChannelRequest->teamId = 'iusto';
    $request->requestBody->apnsVoipChannelRequest->tokenKey = 'est';
    $request->requestBody->apnsVoipChannelRequest->tokenKeyId = 'rem';
    $request->xAmzAlgorithm = 'eligendi';
    $request->xAmzContentSha256 = 'fugiat';
    $request->xAmzCredential = 'unde';
    $request->xAmzDate = 'officiis';
    $request->xAmzSecurityToken = 'ducimus';
    $request->xAmzSignature = 'dolor';
    $request->xAmzSignedHeaders = 'dicta';
    $request->applicationId = 'error';

    $response = $sdk->sdk->updateApnsVoipChannel($request);

    if ($response->updateApnsVoipChannelResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateApnsVoipSandboxChannel

Enables the APNs VoIP sandbox channel for an application or updates the status and settings of the APNs VoIP sandbox channel for an application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateApnsVoipSandboxChannelRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateApnsVoipSandboxChannelRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAPNSVoipSandboxChannelRequestBodyAPNSVoipSandboxChannelRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateApnsVoipSandboxChannelRequest();
    $request->requestBody = new UpdateApnsVoipSandboxChannelRequestBody();
    $request->requestBody->apnsVoipSandboxChannelRequest = new UpdateAPNSVoipSandboxChannelRequestBodyAPNSVoipSandboxChannelRequest();
    $request->requestBody->apnsVoipSandboxChannelRequest->bundleId = 'porro';
    $request->requestBody->apnsVoipSandboxChannelRequest->certificate = 'vitae';
    $request->requestBody->apnsVoipSandboxChannelRequest->defaultAuthenticationMethod = 'dignissimos';
    $request->requestBody->apnsVoipSandboxChannelRequest->enabled = false;
    $request->requestBody->apnsVoipSandboxChannelRequest->privateKey = 'esse';
    $request->requestBody->apnsVoipSandboxChannelRequest->teamId = 'fugiat';
    $request->requestBody->apnsVoipSandboxChannelRequest->tokenKey = 'ad';
    $request->requestBody->apnsVoipSandboxChannelRequest->tokenKeyId = 'aspernatur';
    $request->xAmzAlgorithm = 'enim';
    $request->xAmzContentSha256 = 'delectus';
    $request->xAmzCredential = 'iusto';
    $request->xAmzDate = 'dignissimos';
    $request->xAmzSecurityToken = 'libero';
    $request->xAmzSignature = 'illo';
    $request->xAmzSignedHeaders = 'ab';
    $request->applicationId = 'incidunt';

    $response = $sdk->sdk->updateApnsVoipSandboxChannel($request);

    if ($response->updateApnsVoipSandboxChannelResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateApplicationSettings

Updates the settings for an application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateApplicationSettingsRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateApplicationSettingsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateApplicationSettingsRequestBodyWriteApplicationSettingsRequest;
use \OpenAPI\OpenAPI\Models\Shared\CampaignHook;
use \OpenAPI\OpenAPI\Models\Shared\ModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CampaignLimits;
use \OpenAPI\OpenAPI\Models\Shared\QuietTime;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateApplicationSettingsRequest();
    $request->requestBody = new UpdateApplicationSettingsRequestBody();
    $request->requestBody->writeApplicationSettingsRequest = new UpdateApplicationSettingsRequestBodyWriteApplicationSettingsRequest();
    $request->requestBody->writeApplicationSettingsRequest->campaignHook = new CampaignHook();
    $request->requestBody->writeApplicationSettingsRequest->campaignHook->lambdaFunctionName = 'accusamus';
    $request->requestBody->writeApplicationSettingsRequest->campaignHook->mode = ModeEnum::FILTER;
    $request->requestBody->writeApplicationSettingsRequest->campaignHook->webUrl = 'tempore';
    $request->requestBody->writeApplicationSettingsRequest->cloudWatchMetricsEnabled = false;
    $request->requestBody->writeApplicationSettingsRequest->eventTaggingEnabled = false;
    $request->requestBody->writeApplicationSettingsRequest->limits = new CampaignLimits();
    $request->requestBody->writeApplicationSettingsRequest->limits->daily = 334018;
    $request->requestBody->writeApplicationSettingsRequest->limits->maximumDuration = 176499;
    $request->requestBody->writeApplicationSettingsRequest->limits->messagesPerSecond = 970079;
    $request->requestBody->writeApplicationSettingsRequest->limits->session = 939161;
    $request->requestBody->writeApplicationSettingsRequest->limits->total = 444121;
    $request->requestBody->writeApplicationSettingsRequest->quietTime = new QuietTime();
    $request->requestBody->writeApplicationSettingsRequest->quietTime->end = 'praesentium';
    $request->requestBody->writeApplicationSettingsRequest->quietTime->start = 'nemo';
    $request->xAmzAlgorithm = 'repellat';
    $request->xAmzContentSha256 = 'quisquam';
    $request->xAmzCredential = 'sequi';
    $request->xAmzDate = 'nihil';
    $request->xAmzSecurityToken = 'deleniti';
    $request->xAmzSignature = 'illo';
    $request->xAmzSignedHeaders = 'labore';
    $request->applicationId = 'assumenda';

    $response = $sdk->sdk->updateApplicationSettings($request);

    if ($response->updateApplicationSettingsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateBaiduChannel

Enables the Baidu channel for an application or updates the status and settings of the Baidu channel for an application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateBaiduChannelRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateBaiduChannelRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateBaiduChannelRequestBodyBaiduChannelRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateBaiduChannelRequest();
    $request->requestBody = new UpdateBaiduChannelRequestBody();
    $request->requestBody->baiduChannelRequest = new UpdateBaiduChannelRequestBodyBaiduChannelRequest();
    $request->requestBody->baiduChannelRequest->apiKey = 'aliquam';
    $request->requestBody->baiduChannelRequest->enabled = false;
    $request->requestBody->baiduChannelRequest->secretKey = 'quisquam';
    $request->xAmzAlgorithm = 'provident';
    $request->xAmzContentSha256 = 'laudantium';
    $request->xAmzCredential = 'repudiandae';
    $request->xAmzDate = 'consequatur';
    $request->xAmzSecurityToken = 'maxime';
    $request->xAmzSignature = 'aspernatur';
    $request->xAmzSignedHeaders = 'nam';
    $request->applicationId = 'expedita';

    $response = $sdk->sdk->updateBaiduChannel($request);

    if ($response->updateBaiduChannelResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateCampaign

Updates the configuration and other settings for a campaign.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateCampaignRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateCampaignRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateCampaignRequestBodyWriteCampaignRequest;
use \OpenAPI\OpenAPI\Models\Shared\WriteTreatmentResource;
use \OpenAPI\OpenAPI\Models\Shared\CustomDeliveryConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\EndpointTypesElementEnum;
use \OpenAPI\OpenAPI\Models\Shared\MessageConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\Message;
use \OpenAPI\OpenAPI\Models\Shared\ActionEnum;
use \OpenAPI\OpenAPI\Models\Shared\CampaignCustomMessage;
use \OpenAPI\OpenAPI\Models\Shared\CampaignEmailMessage;
use \OpenAPI\OpenAPI\Models\Shared\CampaignInAppMessage;
use \OpenAPI\OpenAPI\Models\Shared\InAppMessageContent;
use \OpenAPI\OpenAPI\Models\Shared\InAppMessageBodyConfig;
use \OpenAPI\OpenAPI\Models\Shared\AlignmentEnum;
use \OpenAPI\OpenAPI\Models\Shared\InAppMessageHeaderConfig;
use \OpenAPI\OpenAPI\Models\Shared\InAppMessageButton;
use \OpenAPI\OpenAPI\Models\Shared\OverrideButtonConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\ButtonActionEnum;
use \OpenAPI\OpenAPI\Models\Shared\DefaultButtonConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\LayoutEnum;
use \OpenAPI\OpenAPI\Models\Shared\CampaignSmsMessage;
use \OpenAPI\OpenAPI\Models\Shared\MessageTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Schedule;
use \OpenAPI\OpenAPI\Models\Shared\CampaignEventFilter;
use \OpenAPI\OpenAPI\Models\Shared\EventDimensions;
use \OpenAPI\OpenAPI\Models\Shared\AttributeDimension;
use \OpenAPI\OpenAPI\Models\Shared\AttributeTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SetDimension;
use \OpenAPI\OpenAPI\Models\Shared\DimensionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\MetricDimension;
use \OpenAPI\OpenAPI\Models\Shared\FilterTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\FrequencyEnum;
use \OpenAPI\OpenAPI\Models\Shared\QuietTime;
use \OpenAPI\OpenAPI\Models\Shared\TemplateConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\Template;
use \OpenAPI\OpenAPI\Models\Shared\CampaignHook;
use \OpenAPI\OpenAPI\Models\Shared\ModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CampaignLimits;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateCampaignRequest();
    $request->requestBody = new UpdateCampaignRequestBody();
    $request->requestBody->writeCampaignRequest = new UpdateCampaignRequestBodyWriteCampaignRequest();
    $request->requestBody->writeCampaignRequest->additionalTreatments = [
        new WriteTreatmentResource(),
        new WriteTreatmentResource(),
        new WriteTreatmentResource(),
    ];
    $request->requestBody->writeCampaignRequest->customDeliveryConfiguration = new CustomDeliveryConfiguration();
    $request->requestBody->writeCampaignRequest->customDeliveryConfiguration->deliveryUri = 'provident';
    $request->requestBody->writeCampaignRequest->customDeliveryConfiguration->endpointTypes = [
        EndpointTypesElementEnum::EMAIL,
        EndpointTypesElementEnum::ADM,
        EndpointTypesElementEnum::APNS_VOIP,
        EndpointTypesElementEnum::CUSTOM,
    ];
    $request->requestBody->writeCampaignRequest->description = 'similique';
    $request->requestBody->writeCampaignRequest->holdoutPercent = 833982;
    $request->requestBody->writeCampaignRequest->hook = new CampaignHook();
    $request->requestBody->writeCampaignRequest->hook->lambdaFunctionName = 'iure';
    $request->requestBody->writeCampaignRequest->hook->mode = ModeEnum::DELIVERY;
    $request->requestBody->writeCampaignRequest->hook->webUrl = 'commodi';
    $request->requestBody->writeCampaignRequest->isPaused = false;
    $request->requestBody->writeCampaignRequest->limits = new CampaignLimits();
    $request->requestBody->writeCampaignRequest->limits->daily = 771226;
    $request->requestBody->writeCampaignRequest->limits->maximumDuration = 415033;
    $request->requestBody->writeCampaignRequest->limits->messagesPerSecond = 12171;
    $request->requestBody->writeCampaignRequest->limits->session = 32055;
    $request->requestBody->writeCampaignRequest->limits->total = 322829;
    $request->requestBody->writeCampaignRequest->messageConfiguration = new MessageConfiguration();
    $request->requestBody->writeCampaignRequest->messageConfiguration->admMessage = new Message();
    $request->requestBody->writeCampaignRequest->messageConfiguration->admMessage->action = ActionEnum::OPEN_APP;
    $request->requestBody->writeCampaignRequest->messageConfiguration->admMessage->body = 'amet';
    $request->requestBody->writeCampaignRequest->messageConfiguration->admMessage->imageIconUrl = 'illum';
    $request->requestBody->writeCampaignRequest->messageConfiguration->admMessage->imageSmallIconUrl = 'praesentium';
    $request->requestBody->writeCampaignRequest->messageConfiguration->admMessage->imageUrl = 'quidem';
    $request->requestBody->writeCampaignRequest->messageConfiguration->admMessage->jsonBody = 'cum';
    $request->requestBody->writeCampaignRequest->messageConfiguration->admMessage->mediaUrl = 'amet';
    $request->requestBody->writeCampaignRequest->messageConfiguration->admMessage->rawContent = 'quasi';
    $request->requestBody->writeCampaignRequest->messageConfiguration->admMessage->silentPush = false;
    $request->requestBody->writeCampaignRequest->messageConfiguration->admMessage->timeToLive = 118126;
    $request->requestBody->writeCampaignRequest->messageConfiguration->admMessage->title = 'Ms.';
    $request->requestBody->writeCampaignRequest->messageConfiguration->admMessage->url = 'doloremque';
    $request->requestBody->writeCampaignRequest->messageConfiguration->apnsMessage = new Message();
    $request->requestBody->writeCampaignRequest->messageConfiguration->apnsMessage->action = ActionEnum::URL;
    $request->requestBody->writeCampaignRequest->messageConfiguration->apnsMessage->body = 'iusto';
    $request->requestBody->writeCampaignRequest->messageConfiguration->apnsMessage->imageIconUrl = 'amet';
    $request->requestBody->writeCampaignRequest->messageConfiguration->apnsMessage->imageSmallIconUrl = 'provident';
    $request->requestBody->writeCampaignRequest->messageConfiguration->apnsMessage->imageUrl = 'dolorum';
    $request->requestBody->writeCampaignRequest->messageConfiguration->apnsMessage->jsonBody = 'necessitatibus';
    $request->requestBody->writeCampaignRequest->messageConfiguration->apnsMessage->mediaUrl = 'provident';
    $request->requestBody->writeCampaignRequest->messageConfiguration->apnsMessage->rawContent = 'repudiandae';
    $request->requestBody->writeCampaignRequest->messageConfiguration->apnsMessage->silentPush = false;
    $request->requestBody->writeCampaignRequest->messageConfiguration->apnsMessage->timeToLive = 10063;
    $request->requestBody->writeCampaignRequest->messageConfiguration->apnsMessage->title = 'Mrs.';
    $request->requestBody->writeCampaignRequest->messageConfiguration->apnsMessage->url = 'molestiae';
    $request->requestBody->writeCampaignRequest->messageConfiguration->baiduMessage = new Message();
    $request->requestBody->writeCampaignRequest->messageConfiguration->baiduMessage->action = ActionEnum::URL;
    $request->requestBody->writeCampaignRequest->messageConfiguration->baiduMessage->body = 'facilis';
    $request->requestBody->writeCampaignRequest->messageConfiguration->baiduMessage->imageIconUrl = 'corrupti';
    $request->requestBody->writeCampaignRequest->messageConfiguration->baiduMessage->imageSmallIconUrl = 'aperiam';
    $request->requestBody->writeCampaignRequest->messageConfiguration->baiduMessage->imageUrl = 'sint';
    $request->requestBody->writeCampaignRequest->messageConfiguration->baiduMessage->jsonBody = 'accusamus';
    $request->requestBody->writeCampaignRequest->messageConfiguration->baiduMessage->mediaUrl = 'eos';
    $request->requestBody->writeCampaignRequest->messageConfiguration->baiduMessage->rawContent = 'totam';
    $request->requestBody->writeCampaignRequest->messageConfiguration->baiduMessage->silentPush = false;
    $request->requestBody->writeCampaignRequest->messageConfiguration->baiduMessage->timeToLive = 115861;
    $request->requestBody->writeCampaignRequest->messageConfiguration->baiduMessage->title = 'Mr.';
    $request->requestBody->writeCampaignRequest->messageConfiguration->baiduMessage->url = 'velit';
    $request->requestBody->writeCampaignRequest->messageConfiguration->customMessage = new CampaignCustomMessage();
    $request->requestBody->writeCampaignRequest->messageConfiguration->customMessage->data = 'dolor';
    $request->requestBody->writeCampaignRequest->messageConfiguration->defaultMessage = new Message();
    $request->requestBody->writeCampaignRequest->messageConfiguration->defaultMessage->action = ActionEnum::OPEN_APP;
    $request->requestBody->writeCampaignRequest->messageConfiguration->defaultMessage->body = 'a';
    $request->requestBody->writeCampaignRequest->messageConfiguration->defaultMessage->imageIconUrl = 'dolor';
    $request->requestBody->writeCampaignRequest->messageConfiguration->defaultMessage->imageSmallIconUrl = 'occaecati';
    $request->requestBody->writeCampaignRequest->messageConfiguration->defaultMessage->imageUrl = 'atque';
    $request->requestBody->writeCampaignRequest->messageConfiguration->defaultMessage->jsonBody = 'beatae';
    $request->requestBody->writeCampaignRequest->messageConfiguration->defaultMessage->mediaUrl = 'at';
    $request->requestBody->writeCampaignRequest->messageConfiguration->defaultMessage->rawContent = 'labore';
    $request->requestBody->writeCampaignRequest->messageConfiguration->defaultMessage->silentPush = false;
    $request->requestBody->writeCampaignRequest->messageConfiguration->defaultMessage->timeToLive = 794988;
    $request->requestBody->writeCampaignRequest->messageConfiguration->defaultMessage->title = 'Ms.';
    $request->requestBody->writeCampaignRequest->messageConfiguration->defaultMessage->url = 'voluptatem';
    $request->requestBody->writeCampaignRequest->messageConfiguration->emailMessage = new CampaignEmailMessage();
    $request->requestBody->writeCampaignRequest->messageConfiguration->emailMessage->body = 'perferendis';
    $request->requestBody->writeCampaignRequest->messageConfiguration->emailMessage->fromAddress = 'rerum';
    $request->requestBody->writeCampaignRequest->messageConfiguration->emailMessage->htmlBody = 'ea';
    $request->requestBody->writeCampaignRequest->messageConfiguration->emailMessage->title = 'Mr.';
    $request->requestBody->writeCampaignRequest->messageConfiguration->gcmMessage = new Message();
    $request->requestBody->writeCampaignRequest->messageConfiguration->gcmMessage->action = ActionEnum::DEEP_LINK;
    $request->requestBody->writeCampaignRequest->messageConfiguration->gcmMessage->body = 'repellat';
    $request->requestBody->writeCampaignRequest->messageConfiguration->gcmMessage->imageIconUrl = 'velit';
    $request->requestBody->writeCampaignRequest->messageConfiguration->gcmMessage->imageSmallIconUrl = 'porro';
    $request->requestBody->writeCampaignRequest->messageConfiguration->gcmMessage->imageUrl = 'provident';
    $request->requestBody->writeCampaignRequest->messageConfiguration->gcmMessage->jsonBody = 'consectetur';
    $request->requestBody->writeCampaignRequest->messageConfiguration->gcmMessage->mediaUrl = 'eligendi';
    $request->requestBody->writeCampaignRequest->messageConfiguration->gcmMessage->rawContent = 'dignissimos';
    $request->requestBody->writeCampaignRequest->messageConfiguration->gcmMessage->silentPush = false;
    $request->requestBody->writeCampaignRequest->messageConfiguration->gcmMessage->timeToLive = 235834;
    $request->requestBody->writeCampaignRequest->messageConfiguration->gcmMessage->title = 'Miss';
    $request->requestBody->writeCampaignRequest->messageConfiguration->gcmMessage->url = 'natus';
    $request->requestBody->writeCampaignRequest->messageConfiguration->inAppMessage = new CampaignInAppMessage();
    $request->requestBody->writeCampaignRequest->messageConfiguration->inAppMessage->body = 'temporibus';
    $request->requestBody->writeCampaignRequest->messageConfiguration->inAppMessage->content = [
        new InAppMessageContent(),
        new InAppMessageContent(),
        new InAppMessageContent(),
    ];
    $request->requestBody->writeCampaignRequest->messageConfiguration->inAppMessage->customConfig = [
        'tenetur' => 'aspernatur',
    ];
    $request->requestBody->writeCampaignRequest->messageConfiguration->inAppMessage->layout = LayoutEnum::MIDDLE_BANNER;
    $request->requestBody->writeCampaignRequest->messageConfiguration->smsMessage = new CampaignSmsMessage();
    $request->requestBody->writeCampaignRequest->messageConfiguration->smsMessage->body = 'itaque';
    $request->requestBody->writeCampaignRequest->messageConfiguration->smsMessage->entityId = 'illum';
    $request->requestBody->writeCampaignRequest->messageConfiguration->smsMessage->messageType = MessageTypeEnum::PROMOTIONAL;
    $request->requestBody->writeCampaignRequest->messageConfiguration->smsMessage->originationNumber = 'dignissimos';
    $request->requestBody->writeCampaignRequest->messageConfiguration->smsMessage->senderId = 'vero';
    $request->requestBody->writeCampaignRequest->messageConfiguration->smsMessage->templateId = 'qui';
    $request->requestBody->writeCampaignRequest->name = 'Jaime Champlin';
    $request->requestBody->writeCampaignRequest->priority = 471457;
    $request->requestBody->writeCampaignRequest->schedule = new Schedule();
    $request->requestBody->writeCampaignRequest->schedule->endTime = 'non';
    $request->requestBody->writeCampaignRequest->schedule->eventFilter = new CampaignEventFilter();
    $request->requestBody->writeCampaignRequest->schedule->eventFilter->dimensions = new EventDimensions();
    $request->requestBody->writeCampaignRequest->schedule->eventFilter->dimensions->attributes = [
        'illo' => new AttributeDimension(),
    ];
    $request->requestBody->writeCampaignRequest->schedule->eventFilter->dimensions->eventType = new SetDimension();
    $request->requestBody->writeCampaignRequest->schedule->eventFilter->dimensions->eventType->dimensionType = DimensionTypeEnum::EXCLUSIVE;
    $request->requestBody->writeCampaignRequest->schedule->eventFilter->dimensions->eventType->values = [
        'delectus',
        'non',
        'distinctio',
    ];
    $request->requestBody->writeCampaignRequest->schedule->eventFilter->dimensions->metrics = [
        'exercitationem' => new MetricDimension(),
        'labore' => new MetricDimension(),
    ];
    $request->requestBody->writeCampaignRequest->schedule->eventFilter->filterType = FilterTypeEnum::SYSTEM;
    $request->requestBody->writeCampaignRequest->schedule->frequency = FrequencyEnum::IN_APP_EVENT;
    $request->requestBody->writeCampaignRequest->schedule->isLocalTime = false;
    $request->requestBody->writeCampaignRequest->schedule->quietTime = new QuietTime();
    $request->requestBody->writeCampaignRequest->schedule->quietTime->end = 'modi';
    $request->requestBody->writeCampaignRequest->schedule->quietTime->start = 'in';
    $request->requestBody->writeCampaignRequest->schedule->startTime = 'explicabo';
    $request->requestBody->writeCampaignRequest->schedule->timezone = 'accusamus';
    $request->requestBody->writeCampaignRequest->segmentId = 'rem';
    $request->requestBody->writeCampaignRequest->segmentVersion = 44016;
    $request->requestBody->writeCampaignRequest->templateConfiguration = new TemplateConfiguration();
    $request->requestBody->writeCampaignRequest->templateConfiguration->emailTemplate = new Template();
    $request->requestBody->writeCampaignRequest->templateConfiguration->emailTemplate->name = 'Nina Halvorson';
    $request->requestBody->writeCampaignRequest->templateConfiguration->emailTemplate->version = 'minima';
    $request->requestBody->writeCampaignRequest->templateConfiguration->pushTemplate = new Template();
    $request->requestBody->writeCampaignRequest->templateConfiguration->pushTemplate->name = 'Oscar Bailey';
    $request->requestBody->writeCampaignRequest->templateConfiguration->pushTemplate->version = 'nesciunt';
    $request->requestBody->writeCampaignRequest->templateConfiguration->smsTemplate = new Template();
    $request->requestBody->writeCampaignRequest->templateConfiguration->smsTemplate->name = 'Julio Stehr';
    $request->requestBody->writeCampaignRequest->templateConfiguration->smsTemplate->version = 'veniam';
    $request->requestBody->writeCampaignRequest->templateConfiguration->voiceTemplate = new Template();
    $request->requestBody->writeCampaignRequest->templateConfiguration->voiceTemplate->name = 'Mr. Stephen Gleason';
    $request->requestBody->writeCampaignRequest->templateConfiguration->voiceTemplate->version = 'odio';
    $request->requestBody->writeCampaignRequest->treatmentDescription = 'commodi';
    $request->requestBody->writeCampaignRequest->treatmentName = 'numquam';
    $request->requestBody->writeCampaignRequest->tags = [
        'possimus' => 'voluptate',
        'consectetur' => 'nesciunt',
        'quaerat' => 'itaque',
    ];
    $request->xAmzAlgorithm = 'minus';
    $request->xAmzContentSha256 = 'sunt';
    $request->xAmzCredential = 'distinctio';
    $request->xAmzDate = 'iusto';
    $request->xAmzSecurityToken = 'quas';
    $request->xAmzSignature = 'et';
    $request->xAmzSignedHeaders = 'facilis';
    $request->applicationId = 'amet';
    $request->campaignId = 'autem';

    $response = $sdk->sdk->updateCampaign($request);

    if ($response->updateCampaignResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateEmailChannel

Enables the email channel for an application or updates the status and settings of the email channel for an application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateEmailChannelRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateEmailChannelRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateEmailChannelRequestBodyEmailChannelRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateEmailChannelRequest();
    $request->requestBody = new UpdateEmailChannelRequestBody();
    $request->requestBody->emailChannelRequest = new UpdateEmailChannelRequestBodyEmailChannelRequest();
    $request->requestBody->emailChannelRequest->configurationSet = 'fuga';
    $request->requestBody->emailChannelRequest->enabled = false;
    $request->requestBody->emailChannelRequest->fromAddress = 'alias';
    $request->requestBody->emailChannelRequest->identity = 'rem';
    $request->requestBody->emailChannelRequest->roleArn = 'aut';
    $request->xAmzAlgorithm = 'quos';
    $request->xAmzContentSha256 = 'laudantium';
    $request->xAmzCredential = 'repellendus';
    $request->xAmzDate = 'veritatis';
    $request->xAmzSecurityToken = 'quae';
    $request->xAmzSignature = 'eaque';
    $request->xAmzSignedHeaders = 'saepe';
    $request->applicationId = 'delectus';

    $response = $sdk->sdk->updateEmailChannel($request);

    if ($response->updateEmailChannelResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateEmailTemplate

Updates an existing message template for messages that are sent through the email channel.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateEmailTemplateRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateEmailTemplateRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateEmailTemplateRequestBodyEmailTemplateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateEmailTemplateRequest();
    $request->requestBody = new UpdateEmailTemplateRequestBody();
    $request->requestBody->emailTemplateRequest = new UpdateEmailTemplateRequestBodyEmailTemplateRequest();
    $request->requestBody->emailTemplateRequest->defaultSubstitutions = 'mollitia';
    $request->requestBody->emailTemplateRequest->htmlPart = 'nulla';
    $request->requestBody->emailTemplateRequest->recommenderId = 'officia';
    $request->requestBody->emailTemplateRequest->subject = 'sed';
    $request->requestBody->emailTemplateRequest->templateDescription = 'voluptatem';
    $request->requestBody->emailTemplateRequest->textPart = 'alias';
    $request->requestBody->emailTemplateRequest->tags = [
        'hic' => 'voluptatem',
        'incidunt' => 'qui',
        'qui' => 'necessitatibus',
        'harum' => 'explicabo',
    ];
    $request->xAmzAlgorithm = 'beatae';
    $request->xAmzContentSha256 = 'aliquid';
    $request->xAmzCredential = 'modi';
    $request->xAmzDate = 'optio';
    $request->xAmzSecurityToken = 'voluptatibus';
    $request->xAmzSignature = 'molestias';
    $request->xAmzSignedHeaders = 'officia';
    $request->createNewVersion = false;
    $request->templateName = 'libero';
    $request->version = 'totam';

    $response = $sdk->sdk->updateEmailTemplate($request);

    if ($response->updateEmailTemplateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateEndpoint

Creates a new endpoint for an application or updates the settings and attributes of an existing endpoint for an application. You can also use this operation to define custom attributes for an endpoint. If an update includes one or more values for a custom attribute, Amazon Pinpoint replaces (overwrites) any existing values with the new values.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateEndpointRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateEndpointRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateEndpointRequestBodyEndpointRequest;
use \OpenAPI\OpenAPI\Models\Shared\ChannelTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\EndpointDemographic;
use \OpenAPI\OpenAPI\Models\Shared\EndpointLocation;
use \OpenAPI\OpenAPI\Models\Shared\EndpointUser;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateEndpointRequest();
    $request->requestBody = new UpdateEndpointRequestBody();
    $request->requestBody->endpointRequest = new UpdateEndpointRequestBodyEndpointRequest();
    $request->requestBody->endpointRequest->address = '34741 Viva Wells';
    $request->requestBody->endpointRequest->attributes = [
        'laborum' => [
            'accusamus',
            'doloremque',
            'nisi',
        ],
        'rerum' => [
            'voluptates',
            'non',
            'rem',
            'quia',
        ],
        'ullam' => [
            'dicta',
            'voluptatibus',
            'eligendi',
            'quae',
        ],
        'officiis' => [
            'architecto',
        ],
    ];
    $request->requestBody->endpointRequest->channelType = ChannelTypeEnum::APNS_VOIP;
    $request->requestBody->endpointRequest->demographic = new EndpointDemographic();
    $request->requestBody->endpointRequest->demographic->appVersion = 'optio';
    $request->requestBody->endpointRequest->demographic->locale = 'rem';
    $request->requestBody->endpointRequest->demographic->make = 'perferendis';
    $request->requestBody->endpointRequest->demographic->model = 'facilis';
    $request->requestBody->endpointRequest->demographic->modelVersion = 'reiciendis';
    $request->requestBody->endpointRequest->demographic->platform = 'a';
    $request->requestBody->endpointRequest->demographic->platformVersion = 'iste';
    $request->requestBody->endpointRequest->demographic->timezone = 'dicta';
    $request->requestBody->endpointRequest->effectiveDate = 'quos';
    $request->requestBody->endpointRequest->endpointStatus = 'ullam';
    $request->requestBody->endpointRequest->location = new EndpointLocation();
    $request->requestBody->endpointRequest->location->city = 'West Tobin';
    $request->requestBody->endpointRequest->location->country = 'Slovakia (Slovak Republic)';
    $request->requestBody->endpointRequest->location->latitude = 2659.05;
    $request->requestBody->endpointRequest->location->longitude = 1635.58;
    $request->requestBody->endpointRequest->location->postalCode = '89778-5905';
    $request->requestBody->endpointRequest->location->region = 'nihil';
    $request->requestBody->endpointRequest->metrics = [
        'iure' => 4850.31,
        'nesciunt' => 8955.13,
    ];
    $request->requestBody->endpointRequest->optOut = 'vel';
    $request->requestBody->endpointRequest->requestId = 'neque';
    $request->requestBody->endpointRequest->user = new EndpointUser();
    $request->requestBody->endpointRequest->user->userAttributes = [
        'voluptas' => [
            'officia',
        ],
        'reprehenderit' => [
            'eius',
            'ipsa',
            'rem',
        ],
    ];
    $request->requestBody->endpointRequest->user->userId = 'maiores';
    $request->xAmzAlgorithm = 'accusantium';
    $request->xAmzContentSha256 = 'veniam';
    $request->xAmzCredential = 'saepe';
    $request->xAmzDate = 'neque';
    $request->xAmzSecurityToken = 'facere';
    $request->xAmzSignature = 'aliquam';
    $request->xAmzSignedHeaders = 'quos';
    $request->applicationId = 'doloribus';
    $request->endpointId = 'fugiat';

    $response = $sdk->sdk->updateEndpoint($request);

    if ($response->updateEndpointResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateEndpointsBatch

Creates a new batch of endpoints for an application or updates the settings and attributes of a batch of existing endpoints for an application. You can also use this operation to define custom attributes for a batch of endpoints. If an update includes one or more values for a custom attribute, Amazon Pinpoint replaces (overwrites) any existing values with the new values.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateEndpointsBatchRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateEndpointsBatchRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateEndpointsBatchRequestBodyEndpointBatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\EndpointBatchItem;
use \OpenAPI\OpenAPI\Models\Shared\ChannelTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\EndpointDemographic;
use \OpenAPI\OpenAPI\Models\Shared\EndpointLocation;
use \OpenAPI\OpenAPI\Models\Shared\EndpointUser;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateEndpointsBatchRequest();
    $request->requestBody = new UpdateEndpointsBatchRequestBody();
    $request->requestBody->endpointBatchRequest = new UpdateEndpointsBatchRequestBodyEndpointBatchRequest();
    $request->requestBody->endpointBatchRequest->item = [
        new EndpointBatchItem(),
        new EndpointBatchItem(),
        new EndpointBatchItem(),
    ];
    $request->xAmzAlgorithm = 'delectus';
    $request->xAmzContentSha256 = 'velit';
    $request->xAmzCredential = 'vitae';
    $request->xAmzDate = 'nesciunt';
    $request->xAmzSecurityToken = 'similique';
    $request->xAmzSignature = 'illo';
    $request->xAmzSignedHeaders = 'repellat';
    $request->applicationId = 'nemo';

    $response = $sdk->sdk->updateEndpointsBatch($request);

    if ($response->updateEndpointsBatchResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateGcmChannel

Enables the GCM channel for an application or updates the status and settings of the GCM channel for an application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateGcmChannelRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateGcmChannelRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateGCMChannelRequestBodyGCMChannelRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateGcmChannelRequest();
    $request->requestBody = new UpdateGcmChannelRequestBody();
    $request->requestBody->gcmChannelRequest = new UpdateGCMChannelRequestBodyGCMChannelRequest();
    $request->requestBody->gcmChannelRequest->apiKey = 'doloribus';
    $request->requestBody->gcmChannelRequest->enabled = false;
    $request->xAmzAlgorithm = 'possimus';
    $request->xAmzContentSha256 = 'unde';
    $request->xAmzCredential = 'incidunt';
    $request->xAmzDate = 'explicabo';
    $request->xAmzSecurityToken = 'ipsam';
    $request->xAmzSignature = 'cupiditate';
    $request->xAmzSignedHeaders = 'optio';
    $request->applicationId = 'alias';

    $response = $sdk->sdk->updateGcmChannel($request);

    if ($response->updateGcmChannelResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateInAppTemplate

Updates an existing message template for messages sent through the in-app message channel.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateInAppTemplateRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateInAppTemplateRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateInAppTemplateRequestBodyInAppTemplateRequest;
use \OpenAPI\OpenAPI\Models\Shared\InAppMessageContent;
use \OpenAPI\OpenAPI\Models\Shared\InAppMessageBodyConfig;
use \OpenAPI\OpenAPI\Models\Shared\AlignmentEnum;
use \OpenAPI\OpenAPI\Models\Shared\InAppMessageHeaderConfig;
use \OpenAPI\OpenAPI\Models\Shared\InAppMessageButton;
use \OpenAPI\OpenAPI\Models\Shared\OverrideButtonConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\ButtonActionEnum;
use \OpenAPI\OpenAPI\Models\Shared\DefaultButtonConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\LayoutEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateInAppTemplateRequest();
    $request->requestBody = new UpdateInAppTemplateRequestBody();
    $request->requestBody->inAppTemplateRequest = new UpdateInAppTemplateRequestBodyInAppTemplateRequest();
    $request->requestBody->inAppTemplateRequest->content = [
        new InAppMessageContent(),
        new InAppMessageContent(),
        new InAppMessageContent(),
    ];
    $request->requestBody->inAppTemplateRequest->customConfig = [
        'commodi' => 'sapiente',
    ];
    $request->requestBody->inAppTemplateRequest->layout = LayoutEnum::BOTTOM_BANNER;
    $request->requestBody->inAppTemplateRequest->templateDescription = 'veniam';
    $request->requestBody->inAppTemplateRequest->tags = [
        'officia' => 'sint',
        'ut' => 'numquam',
        'tenetur' => 'adipisci',
        'libero' => 'in',
    ];
    $request->xAmzAlgorithm = 'minima';
    $request->xAmzContentSha256 = 'ex';
    $request->xAmzCredential = 'minus';
    $request->xAmzDate = 'ab';
    $request->xAmzSecurityToken = 'beatae';
    $request->xAmzSignature = 'hic';
    $request->xAmzSignedHeaders = 'nisi';
    $request->createNewVersion = false;
    $request->templateName = 'quisquam';
    $request->version = 'dolor';

    $response = $sdk->sdk->updateInAppTemplate($request);

    if ($response->updateInAppTemplateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateJourney

Updates the configuration and other settings for a journey.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateJourneyRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateJourneyRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateJourneyRequestBodyWriteJourneyRequest;
use \OpenAPI\OpenAPI\Models\Shared\Activity;
use \OpenAPI\OpenAPI\Models\Shared\CustomMessageActivity;
use \OpenAPI\OpenAPI\Models\Shared\EndpointTypesElementEnum;
use \OpenAPI\OpenAPI\Models\Shared\JourneyCustomMessage;
use \OpenAPI\OpenAPI\Models\Shared\ConditionalSplitActivity;
use \OpenAPI\OpenAPI\Models\Shared\Condition;
use \OpenAPI\OpenAPI\Models\Shared\SimpleCondition;
use \OpenAPI\OpenAPI\Models\Shared\EventCondition;
use \OpenAPI\OpenAPI\Models\Shared\EventDimensions;
use \OpenAPI\OpenAPI\Models\Shared\AttributeDimension;
use \OpenAPI\OpenAPI\Models\Shared\AttributeTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SetDimension;
use \OpenAPI\OpenAPI\Models\Shared\DimensionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\MetricDimension;
use \OpenAPI\OpenAPI\Models\Shared\SegmentCondition;
use \OpenAPI\OpenAPI\Models\Shared\SimpleConditionSegmentDimensions;
use \OpenAPI\OpenAPI\Models\Shared\SegmentBehaviors;
use \OpenAPI\OpenAPI\Models\Shared\RecencyDimension;
use \OpenAPI\OpenAPI\Models\Shared\DurationEnum;
use \OpenAPI\OpenAPI\Models\Shared\RecencyTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SegmentDemographics;
use \OpenAPI\OpenAPI\Models\Shared\SegmentLocation;
use \OpenAPI\OpenAPI\Models\Shared\GPSPointDimension;
use \OpenAPI\OpenAPI\Models\Shared\GPSCoordinates;
use \OpenAPI\OpenAPI\Models\Shared\OperatorEnum;
use \OpenAPI\OpenAPI\Models\Shared\WaitTime;
use \OpenAPI\OpenAPI\Models\Shared\ContactCenterActivity;
use \OpenAPI\OpenAPI\Models\Shared\EmailMessageActivity;
use \OpenAPI\OpenAPI\Models\Shared\JourneyEmailMessage;
use \OpenAPI\OpenAPI\Models\Shared\HoldoutActivity;
use \OpenAPI\OpenAPI\Models\Shared\MultiConditionalSplitActivity;
use \OpenAPI\OpenAPI\Models\Shared\MultiConditionalBranch;
use \OpenAPI\OpenAPI\Models\Shared\PushMessageActivity;
use \OpenAPI\OpenAPI\Models\Shared\JourneyPushMessage;
use \OpenAPI\OpenAPI\Models\Shared\RandomSplitActivity;
use \OpenAPI\OpenAPI\Models\Shared\RandomSplitEntry;
use \OpenAPI\OpenAPI\Models\Shared\SMSMessageActivity;
use \OpenAPI\OpenAPI\Models\Shared\JourneySMSMessage;
use \OpenAPI\OpenAPI\Models\Shared\MessageTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\WaitActivity;
use \OpenAPI\OpenAPI\Models\Shared\ClosedDays;
use \OpenAPI\OpenAPI\Models\Shared\ClosedDaysRule;
use \OpenAPI\OpenAPI\Models\Shared\JourneyChannelSettings;
use \OpenAPI\OpenAPI\Models\Shared\JourneyLimits;
use \OpenAPI\OpenAPI\Models\Shared\OpenHours;
use \OpenAPI\OpenAPI\Models\Shared\OpenHoursRule;
use \OpenAPI\OpenAPI\Models\Shared\QuietTime;
use \OpenAPI\OpenAPI\Models\Shared\JourneySchedule;
use \OpenAPI\OpenAPI\Models\Shared\StartCondition;
use \OpenAPI\OpenAPI\Models\Shared\EventStartCondition;
use \OpenAPI\OpenAPI\Models\Shared\EventFilter;
use \OpenAPI\OpenAPI\Models\Shared\FilterTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\StateEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateJourneyRequest();
    $request->requestBody = new UpdateJourneyRequestBody();
    $request->requestBody->writeJourneyRequest = new UpdateJourneyRequestBodyWriteJourneyRequest();
    $request->requestBody->writeJourneyRequest->activities = [
        'fuga' => new Activity(),
        'minima' => new Activity(),
    ];
    $request->requestBody->writeJourneyRequest->closedDays = new ClosedDays();
    $request->requestBody->writeJourneyRequest->closedDays->custom = [
        new ClosedDaysRule(),
    ];
    $request->requestBody->writeJourneyRequest->closedDays->email = [
        new ClosedDaysRule(),
    ];
    $request->requestBody->writeJourneyRequest->closedDays->push = [
        new ClosedDaysRule(),
        new ClosedDaysRule(),
    ];
    $request->requestBody->writeJourneyRequest->closedDays->sms = [
        new ClosedDaysRule(),
    ];
    $request->requestBody->writeJourneyRequest->closedDays->voice = [
        new ClosedDaysRule(),
        new ClosedDaysRule(),
    ];
    $request->requestBody->writeJourneyRequest->creationDate = 'adipisci';
    $request->requestBody->writeJourneyRequest->journeyChannelSettings = new JourneyChannelSettings();
    $request->requestBody->writeJourneyRequest->journeyChannelSettings->connectCampaignArn = 'praesentium';
    $request->requestBody->writeJourneyRequest->journeyChannelSettings->connectCampaignExecutionRoleArn = 'dolor';
    $request->requestBody->writeJourneyRequest->lastModifiedDate = 'exercitationem';
    $request->requestBody->writeJourneyRequest->limits = new JourneyLimits();
    $request->requestBody->writeJourneyRequest->limits->dailyCap = 709701;
    $request->requestBody->writeJourneyRequest->limits->endpointReentryCap = 706411;
    $request->requestBody->writeJourneyRequest->limits->endpointReentryInterval = 'impedit';
    $request->requestBody->writeJourneyRequest->limits->messagesPerSecond = 24577;
    $request->requestBody->writeJourneyRequest->localTime = false;
    $request->requestBody->writeJourneyRequest->name = 'Molly Cronin';
    $request->requestBody->writeJourneyRequest->openHours = new OpenHours();
    $request->requestBody->writeJourneyRequest->openHours->custom = [
        'veniam' => [
            new OpenHoursRule(),
            new OpenHoursRule(),
            new OpenHoursRule(),
            new OpenHoursRule(),
        ],
        'itaque' => [
            new OpenHoursRule(),
            new OpenHoursRule(),
            new OpenHoursRule(),
            new OpenHoursRule(),
        ],
    ];
    $request->requestBody->writeJourneyRequest->openHours->email = [
        'enim' => [
            new OpenHoursRule(),
            new OpenHoursRule(),
            new OpenHoursRule(),
            new OpenHoursRule(),
        ],
        'assumenda' => [
            new OpenHoursRule(),
            new OpenHoursRule(),
            new OpenHoursRule(),
            new OpenHoursRule(),
        ],
        'architecto' => [
            new OpenHoursRule(),
        ],
        'culpa' => [
            new OpenHoursRule(),
        ],
    ];
    $request->requestBody->writeJourneyRequest->openHours->push = [
        'necessitatibus' => [
            new OpenHoursRule(),
        ],
        'dicta' => [
            new OpenHoursRule(),
            new OpenHoursRule(),
        ],
        'perspiciatis' => [
            new OpenHoursRule(),
            new OpenHoursRule(),
            new OpenHoursRule(),
            new OpenHoursRule(),
        ],
        'ullam' => [
            new OpenHoursRule(),
        ],
    ];
    $request->requestBody->writeJourneyRequest->openHours->sms = [
        'perferendis' => [
            new OpenHoursRule(),
        ],
    ];
    $request->requestBody->writeJourneyRequest->openHours->voice = [
        'cumque' => [
            new OpenHoursRule(),
            new OpenHoursRule(),
        ],
        'quibusdam' => [
            new OpenHoursRule(),
            new OpenHoursRule(),
            new OpenHoursRule(),
            new OpenHoursRule(),
        ],
        'nemo' => [
            new OpenHoursRule(),
            new OpenHoursRule(),
            new OpenHoursRule(),
            new OpenHoursRule(),
        ],
    ];
    $request->requestBody->writeJourneyRequest->quietTime = new QuietTime();
    $request->requestBody->writeJourneyRequest->quietTime->end = 'velit';
    $request->requestBody->writeJourneyRequest->quietTime->start = 'magnam';
    $request->requestBody->writeJourneyRequest->refreshFrequency = 'dignissimos';
    $request->requestBody->writeJourneyRequest->refreshOnSegmentUpdate = false;
    $request->requestBody->writeJourneyRequest->schedule = new JourneySchedule();
    $request->requestBody->writeJourneyRequest->schedule->endTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-06T09:59:59.144Z');
    $request->requestBody->writeJourneyRequest->schedule->startTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-20T19:36:03.657Z');
    $request->requestBody->writeJourneyRequest->schedule->timezone = 'provident';
    $request->requestBody->writeJourneyRequest->sendingSchedule = false;
    $request->requestBody->writeJourneyRequest->startActivity = 'cum';
    $request->requestBody->writeJourneyRequest->startCondition = new StartCondition();
    $request->requestBody->writeJourneyRequest->startCondition->description = 'doloribus';
    $request->requestBody->writeJourneyRequest->startCondition->eventStartCondition = new EventStartCondition();
    $request->requestBody->writeJourneyRequest->startCondition->eventStartCondition->eventFilter = new EventFilter();
    $request->requestBody->writeJourneyRequest->startCondition->eventStartCondition->eventFilter->dimensions = new EventDimensions();
    $request->requestBody->writeJourneyRequest->startCondition->eventStartCondition->eventFilter->dimensions->attributes = [
        'quidem' => new AttributeDimension(),
        'itaque' => new AttributeDimension(),
        'laboriosam' => new AttributeDimension(),
    ];
    $request->requestBody->writeJourneyRequest->startCondition->eventStartCondition->eventFilter->dimensions->eventType = new SetDimension();
    $request->requestBody->writeJourneyRequest->startCondition->eventStartCondition->eventFilter->dimensions->eventType->dimensionType = DimensionTypeEnum::EXCLUSIVE;
    $request->requestBody->writeJourneyRequest->startCondition->eventStartCondition->eventFilter->dimensions->eventType->values = [
        'perspiciatis',
        'hic',
    ];
    $request->requestBody->writeJourneyRequest->startCondition->eventStartCondition->eventFilter->dimensions->metrics = [
        'aspernatur' => new MetricDimension(),
        'libero' => new MetricDimension(),
        'nam' => new MetricDimension(),
    ];
    $request->requestBody->writeJourneyRequest->startCondition->eventStartCondition->eventFilter->filterType = FilterTypeEnum::SYSTEM;
    $request->requestBody->writeJourneyRequest->startCondition->eventStartCondition->segmentId = 'recusandae';
    $request->requestBody->writeJourneyRequest->startCondition->segmentStartCondition = new SegmentCondition();
    $request->requestBody->writeJourneyRequest->startCondition->segmentStartCondition->segmentId = 'quod';
    $request->requestBody->writeJourneyRequest->state = StateEnum::CANCELLED;
    $request->requestBody->writeJourneyRequest->waitForQuietTime = false;
    $request->xAmzAlgorithm = 'saepe';
    $request->xAmzContentSha256 = 'autem';
    $request->xAmzCredential = 'quo';
    $request->xAmzDate = 'nesciunt';
    $request->xAmzSecurityToken = 'illum';
    $request->xAmzSignature = 'nemo';
    $request->xAmzSignedHeaders = 'illum';
    $request->applicationId = 'facilis';
    $request->journeyId = 'non';

    $response = $sdk->sdk->updateJourney($request);

    if ($response->updateJourneyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateJourneyState

Cancels (stops) an active journey.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateJourneyStateRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateJourneyStateRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateJourneyStateRequestBodyJourneyStateRequest;
use \OpenAPI\OpenAPI\Models\Shared\StateEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateJourneyStateRequest();
    $request->requestBody = new UpdateJourneyStateRequestBody();
    $request->requestBody->journeyStateRequest = new UpdateJourneyStateRequestBodyJourneyStateRequest();
    $request->requestBody->journeyStateRequest->state = StateEnum::CANCELLED;
    $request->xAmzAlgorithm = 'assumenda';
    $request->xAmzContentSha256 = 'recusandae';
    $request->xAmzCredential = 'distinctio';
    $request->xAmzDate = 'pariatur';
    $request->xAmzSecurityToken = 'ad';
    $request->xAmzSignature = 'facere';
    $request->xAmzSignedHeaders = 'laborum';
    $request->applicationId = 'eveniet';
    $request->journeyId = 'laborum';

    $response = $sdk->sdk->updateJourneyState($request);

    if ($response->updateJourneyStateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updatePushTemplate

Updates an existing message template for messages that are sent through a push notification channel.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdatePushTemplateRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdatePushTemplateRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdatePushTemplateRequestBodyPushNotificationTemplateRequest;
use \OpenAPI\OpenAPI\Models\Shared\AndroidPushNotificationTemplate;
use \OpenAPI\OpenAPI\Models\Shared\ActionEnum;
use \OpenAPI\OpenAPI\Models\Shared\APNSPushNotificationTemplate;
use \OpenAPI\OpenAPI\Models\Shared\DefaultPushNotificationTemplate;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdatePushTemplateRequest();
    $request->requestBody = new UpdatePushTemplateRequestBody();
    $request->requestBody->pushNotificationTemplateRequest = new UpdatePushTemplateRequestBodyPushNotificationTemplateRequest();
    $request->requestBody->pushNotificationTemplateRequest->adm = new AndroidPushNotificationTemplate();
    $request->requestBody->pushNotificationTemplateRequest->adm->action = ActionEnum::OPEN_APP;
    $request->requestBody->pushNotificationTemplateRequest->adm->body = 'maxime';
    $request->requestBody->pushNotificationTemplateRequest->adm->imageIconUrl = 'ipsam';
    $request->requestBody->pushNotificationTemplateRequest->adm->imageUrl = 'alias';
    $request->requestBody->pushNotificationTemplateRequest->adm->rawContent = 'suscipit';
    $request->requestBody->pushNotificationTemplateRequest->adm->smallImageIconUrl = 'deserunt';
    $request->requestBody->pushNotificationTemplateRequest->adm->sound = 'molestias';
    $request->requestBody->pushNotificationTemplateRequest->adm->title = 'Miss';
    $request->requestBody->pushNotificationTemplateRequest->adm->url = 'est';
    $request->requestBody->pushNotificationTemplateRequest->apns = new APNSPushNotificationTemplate();
    $request->requestBody->pushNotificationTemplateRequest->apns->action = ActionEnum::DEEP_LINK;
    $request->requestBody->pushNotificationTemplateRequest->apns->body = 'labore';
    $request->requestBody->pushNotificationTemplateRequest->apns->mediaUrl = 'quo';
    $request->requestBody->pushNotificationTemplateRequest->apns->rawContent = 'perferendis';
    $request->requestBody->pushNotificationTemplateRequest->apns->sound = 'fugit';
    $request->requestBody->pushNotificationTemplateRequest->apns->title = 'Mrs.';
    $request->requestBody->pushNotificationTemplateRequest->apns->url = 'magnam';
    $request->requestBody->pushNotificationTemplateRequest->baidu = new AndroidPushNotificationTemplate();
    $request->requestBody->pushNotificationTemplateRequest->baidu->action = ActionEnum::OPEN_APP;
    $request->requestBody->pushNotificationTemplateRequest->baidu->body = 'eligendi';
    $request->requestBody->pushNotificationTemplateRequest->baidu->imageIconUrl = 'hic';
    $request->requestBody->pushNotificationTemplateRequest->baidu->imageUrl = 'nostrum';
    $request->requestBody->pushNotificationTemplateRequest->baidu->rawContent = 'officiis';
    $request->requestBody->pushNotificationTemplateRequest->baidu->smallImageIconUrl = 'unde';
    $request->requestBody->pushNotificationTemplateRequest->baidu->sound = 'nulla';
    $request->requestBody->pushNotificationTemplateRequest->baidu->title = 'Miss';
    $request->requestBody->pushNotificationTemplateRequest->baidu->url = 'mollitia';
    $request->requestBody->pushNotificationTemplateRequest->default = new DefaultPushNotificationTemplate();
    $request->requestBody->pushNotificationTemplateRequest->default->action = ActionEnum::OPEN_APP;
    $request->requestBody->pushNotificationTemplateRequest->default->body = 'nostrum';
    $request->requestBody->pushNotificationTemplateRequest->default->sound = 'esse';
    $request->requestBody->pushNotificationTemplateRequest->default->title = 'Ms.';
    $request->requestBody->pushNotificationTemplateRequest->default->url = 'fuga';
    $request->requestBody->pushNotificationTemplateRequest->defaultSubstitutions = 'facere';
    $request->requestBody->pushNotificationTemplateRequest->gcm = new AndroidPushNotificationTemplate();
    $request->requestBody->pushNotificationTemplateRequest->gcm->action = ActionEnum::URL;
    $request->requestBody->pushNotificationTemplateRequest->gcm->body = 'quasi';
    $request->requestBody->pushNotificationTemplateRequest->gcm->imageIconUrl = 'deserunt';
    $request->requestBody->pushNotificationTemplateRequest->gcm->imageUrl = 'quod';
    $request->requestBody->pushNotificationTemplateRequest->gcm->rawContent = 'laboriosam';
    $request->requestBody->pushNotificationTemplateRequest->gcm->smallImageIconUrl = 'doloremque';
    $request->requestBody->pushNotificationTemplateRequest->gcm->sound = 'voluptatem';
    $request->requestBody->pushNotificationTemplateRequest->gcm->title = 'Dr.';
    $request->requestBody->pushNotificationTemplateRequest->gcm->url = 'necessitatibus';
    $request->requestBody->pushNotificationTemplateRequest->recommenderId = 'maxime';
    $request->requestBody->pushNotificationTemplateRequest->templateDescription = 'consequatur';
    $request->requestBody->pushNotificationTemplateRequest->tags = [
        'architecto' => 'similique',
    ];
    $request->xAmzAlgorithm = 'porro';
    $request->xAmzContentSha256 = 'blanditiis';
    $request->xAmzCredential = 'quae';
    $request->xAmzDate = 'magni';
    $request->xAmzSecurityToken = 'officiis';
    $request->xAmzSignature = 'sed';
    $request->xAmzSignedHeaders = 'necessitatibus';
    $request->createNewVersion = false;
    $request->templateName = 'impedit';
    $request->version = 'ipsa';

    $response = $sdk->sdk->updatePushTemplate($request);

    if ($response->updatePushTemplateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateRecommenderConfiguration

Updates an Amazon Pinpoint configuration for a recommender model.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateRecommenderConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateRecommenderConfigurationRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateRecommenderConfigurationRequestBodyUpdateRecommenderConfiguration;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateRecommenderConfigurationRequest();
    $request->requestBody = new UpdateRecommenderConfigurationRequestBody();
    $request->requestBody->updateRecommenderConfiguration = new UpdateRecommenderConfigurationRequestBodyUpdateRecommenderConfiguration();
    $request->requestBody->updateRecommenderConfiguration->attributes = [
        'a' => 'maiores',
        'laudantium' => 'maiores',
        'alias' => 'asperiores',
    ];
    $request->requestBody->updateRecommenderConfiguration->description = 'rem';
    $request->requestBody->updateRecommenderConfiguration->name = 'Jeanette Wehner';
    $request->requestBody->updateRecommenderConfiguration->recommendationProviderIdType = 'eius';
    $request->requestBody->updateRecommenderConfiguration->recommendationProviderRoleArn = 'esse';
    $request->requestBody->updateRecommenderConfiguration->recommendationProviderUri = 'in';
    $request->requestBody->updateRecommenderConfiguration->recommendationTransformerUri = 'eligendi';
    $request->requestBody->updateRecommenderConfiguration->recommendationsDisplayName = 'quasi';
    $request->requestBody->updateRecommenderConfiguration->recommendationsPerMessage = 203621;
    $request->xAmzAlgorithm = 'vero';
    $request->xAmzContentSha256 = 'excepturi';
    $request->xAmzCredential = 'accusantium';
    $request->xAmzDate = 'qui';
    $request->xAmzSecurityToken = 'impedit';
    $request->xAmzSignature = 'beatae';
    $request->xAmzSignedHeaders = 'incidunt';
    $request->recommenderId = 'dicta';

    $response = $sdk->sdk->updateRecommenderConfiguration($request);

    if ($response->updateRecommenderConfigurationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateSegment

Creates a new segment for an application or updates the configuration, dimension, and other settings for an existing segment that's associated with an application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSegmentRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSegmentRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSegmentRequestBodyWriteSegmentRequest;
use \OpenAPI\OpenAPI\Models\Shared\SegmentDimensions;
use \OpenAPI\OpenAPI\Models\Shared\AttributeDimension;
use \OpenAPI\OpenAPI\Models\Shared\AttributeTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SegmentBehaviors;
use \OpenAPI\OpenAPI\Models\Shared\RecencyDimension;
use \OpenAPI\OpenAPI\Models\Shared\DurationEnum;
use \OpenAPI\OpenAPI\Models\Shared\RecencyTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SegmentDemographics;
use \OpenAPI\OpenAPI\Models\Shared\SetDimension;
use \OpenAPI\OpenAPI\Models\Shared\DimensionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SegmentLocation;
use \OpenAPI\OpenAPI\Models\Shared\GPSPointDimension;
use \OpenAPI\OpenAPI\Models\Shared\GPSCoordinates;
use \OpenAPI\OpenAPI\Models\Shared\MetricDimension;
use \OpenAPI\OpenAPI\Models\Shared\SegmentGroupList;
use \OpenAPI\OpenAPI\Models\Shared\SegmentGroup;
use \OpenAPI\OpenAPI\Models\Shared\SegmentReference;
use \OpenAPI\OpenAPI\Models\Shared\SourceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\TypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\IncludeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateSegmentRequest();
    $request->requestBody = new UpdateSegmentRequestBody();
    $request->requestBody->writeSegmentRequest = new UpdateSegmentRequestBodyWriteSegmentRequest();
    $request->requestBody->writeSegmentRequest->dimensions = new SegmentDimensions();
    $request->requestBody->writeSegmentRequest->dimensions->attributes = [
        'corporis' => new AttributeDimension(),
    ];
    $request->requestBody->writeSegmentRequest->dimensions->behavior = new SegmentBehaviors();
    $request->requestBody->writeSegmentRequest->dimensions->behavior->recency = new RecencyDimension();
    $request->requestBody->writeSegmentRequest->dimensions->behavior->recency->duration = DurationEnum::DAY14;
    $request->requestBody->writeSegmentRequest->dimensions->behavior->recency->recencyType = RecencyTypeEnum::ACTIVE;
    $request->requestBody->writeSegmentRequest->dimensions->demographic = new SegmentDemographics();
    $request->requestBody->writeSegmentRequest->dimensions->demographic->appVersion = new SetDimension();
    $request->requestBody->writeSegmentRequest->dimensions->demographic->appVersion->dimensionType = DimensionTypeEnum::EXCLUSIVE;
    $request->requestBody->writeSegmentRequest->dimensions->demographic->appVersion->values = [
        'accusantium',
        'id',
    ];
    $request->requestBody->writeSegmentRequest->dimensions->demographic->channel = new SetDimension();
    $request->requestBody->writeSegmentRequest->dimensions->demographic->channel->dimensionType = DimensionTypeEnum::INCLUSIVE;
    $request->requestBody->writeSegmentRequest->dimensions->demographic->channel->values = [
        'quas',
        'veritatis',
    ];
    $request->requestBody->writeSegmentRequest->dimensions->demographic->deviceType = new SetDimension();
    $request->requestBody->writeSegmentRequest->dimensions->demographic->deviceType->dimensionType = DimensionTypeEnum::INCLUSIVE;
    $request->requestBody->writeSegmentRequest->dimensions->demographic->deviceType->values = [
        'similique',
    ];
    $request->requestBody->writeSegmentRequest->dimensions->demographic->make = new SetDimension();
    $request->requestBody->writeSegmentRequest->dimensions->demographic->make->dimensionType = DimensionTypeEnum::INCLUSIVE;
    $request->requestBody->writeSegmentRequest->dimensions->demographic->make->values = [
        'magni',
        'deserunt',
    ];
    $request->requestBody->writeSegmentRequest->dimensions->demographic->model = new SetDimension();
    $request->requestBody->writeSegmentRequest->dimensions->demographic->model->dimensionType = DimensionTypeEnum::EXCLUSIVE;
    $request->requestBody->writeSegmentRequest->dimensions->demographic->model->values = [
        'sed',
        'nesciunt',
        'maxime',
    ];
    $request->requestBody->writeSegmentRequest->dimensions->demographic->platform = new SetDimension();
    $request->requestBody->writeSegmentRequest->dimensions->demographic->platform->dimensionType = DimensionTypeEnum::INCLUSIVE;
    $request->requestBody->writeSegmentRequest->dimensions->demographic->platform->values = [
        'aliquam',
        'excepturi',
        'maiores',
    ];
    $request->requestBody->writeSegmentRequest->dimensions->location = new SegmentLocation();
    $request->requestBody->writeSegmentRequest->dimensions->location->country = new SetDimension();
    $request->requestBody->writeSegmentRequest->dimensions->location->country->dimensionType = DimensionTypeEnum::EXCLUSIVE;
    $request->requestBody->writeSegmentRequest->dimensions->location->country->values = [
        'reiciendis',
    ];
    $request->requestBody->writeSegmentRequest->dimensions->location->gpsPoint = new GPSPointDimension();
    $request->requestBody->writeSegmentRequest->dimensions->location->gpsPoint->coordinates = new GPSCoordinates();
    $request->requestBody->writeSegmentRequest->dimensions->location->gpsPoint->coordinates->latitude = 2303.05;
    $request->requestBody->writeSegmentRequest->dimensions->location->gpsPoint->coordinates->longitude = 3638.45;
    $request->requestBody->writeSegmentRequest->dimensions->location->gpsPoint->rangeInKilometers = 574.7;
    $request->requestBody->writeSegmentRequest->dimensions->metrics = [
        'tenetur' => new MetricDimension(),
        'quas' => new MetricDimension(),
        'molestiae' => new MetricDimension(),
        'aliquid' => new MetricDimension(),
    ];
    $request->requestBody->writeSegmentRequest->dimensions->userAttributes = [
        'a' => new AttributeDimension(),
        'nobis' => new AttributeDimension(),
        'perspiciatis' => new AttributeDimension(),
        'accusantium' => new AttributeDimension(),
    ];
    $request->requestBody->writeSegmentRequest->name = 'Bethany Johnson';
    $request->requestBody->writeSegmentRequest->segmentGroups = new SegmentGroupList();
    $request->requestBody->writeSegmentRequest->segmentGroups->groups = [
        new SegmentGroup(),
        new SegmentGroup(),
        new SegmentGroup(),
    ];
    $request->requestBody->writeSegmentRequest->segmentGroups->include = IncludeEnum::NONE;
    $request->requestBody->writeSegmentRequest->tags = [
        'voluptates' => 'fugit',
        'eius' => 'sequi',
    ];
    $request->xAmzAlgorithm = 'eligendi';
    $request->xAmzContentSha256 = 'asperiores';
    $request->xAmzCredential = 'esse';
    $request->xAmzDate = 'blanditiis';
    $request->xAmzSecurityToken = 'sint';
    $request->xAmzSignature = 'repellat';
    $request->xAmzSignedHeaders = 'a';
    $request->applicationId = 'animi';
    $request->segmentId = 'maiores';

    $response = $sdk->sdk->updateSegment($request);

    if ($response->updateSegmentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateSmsChannel

Enables the SMS channel for an application or updates the status and settings of the SMS channel for an application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSmsChannelRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSmsChannelRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSMSChannelRequestBodySMSChannelRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateSmsChannelRequest();
    $request->requestBody = new UpdateSmsChannelRequestBody();
    $request->requestBody->smsChannelRequest = new UpdateSMSChannelRequestBodySMSChannelRequest();
    $request->requestBody->smsChannelRequest->enabled = false;
    $request->requestBody->smsChannelRequest->senderId = 'itaque';
    $request->requestBody->smsChannelRequest->shortCode = 'nulla';
    $request->xAmzAlgorithm = 'deserunt';
    $request->xAmzContentSha256 = 'corporis';
    $request->xAmzCredential = 'velit';
    $request->xAmzDate = 'officiis';
    $request->xAmzSecurityToken = 'enim';
    $request->xAmzSignature = 'officia';
    $request->xAmzSignedHeaders = 'saepe';
    $request->applicationId = 'eum';

    $response = $sdk->sdk->updateSmsChannel($request);

    if ($response->updateSmsChannelResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateSmsTemplate

Updates an existing message template for messages that are sent through the SMS channel.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSmsTemplateRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSmsTemplateRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSMSTemplateRequestBodySMSTemplateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateSmsTemplateRequest();
    $request->requestBody = new UpdateSmsTemplateRequestBody();
    $request->requestBody->smsTemplateRequest = new UpdateSMSTemplateRequestBodySMSTemplateRequest();
    $request->requestBody->smsTemplateRequest->body = 'repudiandae';
    $request->requestBody->smsTemplateRequest->defaultSubstitutions = 'accusantium';
    $request->requestBody->smsTemplateRequest->recommenderId = 'officia';
    $request->requestBody->smsTemplateRequest->templateDescription = 'impedit';
    $request->requestBody->smsTemplateRequest->tags = [
        'blanditiis' => 'eius',
    ];
    $request->xAmzAlgorithm = 'quisquam';
    $request->xAmzContentSha256 = 'eos';
    $request->xAmzCredential = 'nobis';
    $request->xAmzDate = 'natus';
    $request->xAmzSecurityToken = 'minus';
    $request->xAmzSignature = 'quia';
    $request->xAmzSignedHeaders = 'magnam';
    $request->createNewVersion = false;
    $request->templateName = 'reprehenderit';
    $request->version = 'quod';

    $response = $sdk->sdk->updateSmsTemplate($request);

    if ($response->updateSmsTemplateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateTemplateActiveVersion

Changes the status of a specific version of a message template to <i>active</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateTemplateActiveVersionRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateTemplateActiveVersionRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateTemplateActiveVersionRequestBodyTemplateActiveVersionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateTemplateActiveVersionRequest();
    $request->requestBody = new UpdateTemplateActiveVersionRequestBody();
    $request->requestBody->templateActiveVersionRequest = new UpdateTemplateActiveVersionRequestBodyTemplateActiveVersionRequest();
    $request->requestBody->templateActiveVersionRequest->version = 'quos';
    $request->xAmzAlgorithm = 'corrupti';
    $request->xAmzContentSha256 = 'amet';
    $request->xAmzCredential = 'molestiae';
    $request->xAmzDate = 'amet';
    $request->xAmzSecurityToken = 'laborum';
    $request->xAmzSignature = 'modi';
    $request->xAmzSignedHeaders = 'perferendis';
    $request->templateName = 'necessitatibus';
    $request->templateType = 'architecto';

    $response = $sdk->sdk->updateTemplateActiveVersion($request);

    if ($response->updateTemplateActiveVersionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateVoiceChannel

Enables the voice channel for an application or updates the status and settings of the voice channel for an application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateVoiceChannelRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateVoiceChannelRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateVoiceChannelRequestBodyVoiceChannelRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateVoiceChannelRequest();
    $request->requestBody = new UpdateVoiceChannelRequestBody();
    $request->requestBody->voiceChannelRequest = new UpdateVoiceChannelRequestBodyVoiceChannelRequest();
    $request->requestBody->voiceChannelRequest->enabled = false;
    $request->xAmzAlgorithm = 'molestias';
    $request->xAmzContentSha256 = 'dolore';
    $request->xAmzCredential = 'sunt';
    $request->xAmzDate = 'maiores';
    $request->xAmzSecurityToken = 'neque';
    $request->xAmzSignature = 'odit';
    $request->xAmzSignedHeaders = 'earum';
    $request->applicationId = 'veniam';

    $response = $sdk->sdk->updateVoiceChannel($request);

    if ($response->updateVoiceChannelResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateVoiceTemplate

Updates an existing message template for messages that are sent through the voice channel.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateVoiceTemplateRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateVoiceTemplateRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateVoiceTemplateRequestBodyVoiceTemplateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateVoiceTemplateRequest();
    $request->requestBody = new UpdateVoiceTemplateRequestBody();
    $request->requestBody->voiceTemplateRequest = new UpdateVoiceTemplateRequestBodyVoiceTemplateRequest();
    $request->requestBody->voiceTemplateRequest->body = 'ipsam';
    $request->requestBody->voiceTemplateRequest->defaultSubstitutions = 'eaque';
    $request->requestBody->voiceTemplateRequest->languageCode = 'exercitationem';
    $request->requestBody->voiceTemplateRequest->templateDescription = 'veniam';
    $request->requestBody->voiceTemplateRequest->voiceId = 'nihil';
    $request->requestBody->voiceTemplateRequest->tags = [
        'nisi' => 'tenetur',
        'quis' => 'quibusdam',
    ];
    $request->xAmzAlgorithm = 'nemo';
    $request->xAmzContentSha256 = 'suscipit';
    $request->xAmzCredential = 'pariatur';
    $request->xAmzDate = 'sit';
    $request->xAmzSecurityToken = 'quidem';
    $request->xAmzSignature = 'repellendus';
    $request->xAmzSignedHeaders = 'perferendis';
    $request->createNewVersion = false;
    $request->templateName = 'id';
    $request->version = 'sapiente';

    $response = $sdk->sdk->updateVoiceTemplate($request);

    if ($response->updateVoiceTemplateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## verifyOTPMessage

Verify an OTP

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\VerifyOTPMessageRequest;
use \OpenAPI\OpenAPI\Models\Operations\VerifyOTPMessageRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\VerifyOTPMessageRequestBodyVerifyOTPMessageRequestParameters;

$sdk = SDK::builder()
    ->build();

try {
    $request = new VerifyOTPMessageRequest();
    $request->requestBody = new VerifyOTPMessageRequestBody();
    $request->requestBody->verifyOTPMessageRequestParameters = new VerifyOTPMessageRequestBodyVerifyOTPMessageRequestParameters();
    $request->requestBody->verifyOTPMessageRequestParameters->destinationIdentity = 'sed';
    $request->requestBody->verifyOTPMessageRequestParameters->otp = 'possimus';
    $request->requestBody->verifyOTPMessageRequestParameters->referenceId = 'repellat';
    $request->xAmzAlgorithm = 'repudiandae';
    $request->xAmzContentSha256 = 'architecto';
    $request->xAmzCredential = 'adipisci';
    $request->xAmzDate = 'pariatur';
    $request->xAmzSecurityToken = 'harum';
    $request->xAmzSignature = 'dolore';
    $request->xAmzSignedHeaders = 'voluptatibus';
    $request->applicationId = 'iure';

    $response = $sdk->sdk->verifyOTPMessage($request);

    if ($response->verifyOTPMessageResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
