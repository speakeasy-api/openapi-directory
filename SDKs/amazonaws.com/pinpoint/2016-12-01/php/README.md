# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
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
    $request->requestBody->createApplicationRequest->name = 'Terrence Rau';
    $request->requestBody->createApplicationRequest->tags = [
        'corrupti' => 'illum',
        'vel' => 'error',
        'deserunt' => 'suscipit',
        'iure' => 'magnam',
    ];
    $request->xAmzAlgorithm = 'debitis';
    $request->xAmzContentSha256 = 'ipsa';
    $request->xAmzCredential = 'delectus';
    $request->xAmzDate = 'tempora';
    $request->xAmzSecurityToken = 'suscipit';
    $request->xAmzSignature = 'molestiae';
    $request->xAmzSignedHeaders = 'minus';

    $response = $sdk->createApp($request);

    if ($response->createAppResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [createApp](docs/sdk/README.md#createapp) -  <p>Creates an application.</p>
* [createCampaign](docs/sdk/README.md#createcampaign) - Creates a new campaign for an application or updates the settings of an existing campaign for an application.
* [createEmailTemplate](docs/sdk/README.md#createemailtemplate) - Creates a message template for messages that are sent through the email channel.
* [createExportJob](docs/sdk/README.md#createexportjob) - Creates an export job for an application.
* [createImportJob](docs/sdk/README.md#createimportjob) - Creates an import job for an application.
* [createInAppTemplate](docs/sdk/README.md#createinapptemplate) - Creates a new message template for messages using the in-app message channel.
* [createJourney](docs/sdk/README.md#createjourney) - Creates a journey for an application.
* [createPushTemplate](docs/sdk/README.md#createpushtemplate) - Creates a message template for messages that are sent through a push notification channel.
* [createRecommenderConfiguration](docs/sdk/README.md#createrecommenderconfiguration) - Creates an Amazon Pinpoint configuration for a recommender model.
* [createSegment](docs/sdk/README.md#createsegment) - Creates a new segment for an application or updates the configuration, dimension, and other settings for an existing segment that's associated with an application.
* [createSmsTemplate](docs/sdk/README.md#createsmstemplate) - Creates a message template for messages that are sent through the SMS channel.
* [createVoiceTemplate](docs/sdk/README.md#createvoicetemplate) - Creates a message template for messages that are sent through the voice channel.
* [deleteAdmChannel](docs/sdk/README.md#deleteadmchannel) - Disables the ADM channel for an application and deletes any existing settings for the channel.
* [deleteApnsChannel](docs/sdk/README.md#deleteapnschannel) - Disables the APNs channel for an application and deletes any existing settings for the channel.
* [deleteApnsSandboxChannel](docs/sdk/README.md#deleteapnssandboxchannel) - Disables the APNs sandbox channel for an application and deletes any existing settings for the channel.
* [deleteApnsVoipChannel](docs/sdk/README.md#deleteapnsvoipchannel) - Disables the APNs VoIP channel for an application and deletes any existing settings for the channel.
* [deleteApnsVoipSandboxChannel](docs/sdk/README.md#deleteapnsvoipsandboxchannel) - Disables the APNs VoIP sandbox channel for an application and deletes any existing settings for the channel.
* [deleteApp](docs/sdk/README.md#deleteapp) - Deletes an application.
* [deleteBaiduChannel](docs/sdk/README.md#deletebaiduchannel) - Disables the Baidu channel for an application and deletes any existing settings for the channel.
* [deleteCampaign](docs/sdk/README.md#deletecampaign) - Deletes a campaign from an application.
* [deleteEmailChannel](docs/sdk/README.md#deleteemailchannel) - Disables the email channel for an application and deletes any existing settings for the channel.
* [deleteEmailTemplate](docs/sdk/README.md#deleteemailtemplate) - Deletes a message template for messages that were sent through the email channel.
* [deleteEndpoint](docs/sdk/README.md#deleteendpoint) - Deletes an endpoint from an application.
* [deleteEventStream](docs/sdk/README.md#deleteeventstream) - Deletes the event stream for an application.
* [deleteGcmChannel](docs/sdk/README.md#deletegcmchannel) - Disables the GCM channel for an application and deletes any existing settings for the channel.
* [deleteInAppTemplate](docs/sdk/README.md#deleteinapptemplate) - Deletes a message template for messages sent using the in-app message channel.
* [deleteJourney](docs/sdk/README.md#deletejourney) - Deletes a journey from an application.
* [deletePushTemplate](docs/sdk/README.md#deletepushtemplate) - Deletes a message template for messages that were sent through a push notification channel.
* [deleteRecommenderConfiguration](docs/sdk/README.md#deleterecommenderconfiguration) - Deletes an Amazon Pinpoint configuration for a recommender model.
* [deleteSegment](docs/sdk/README.md#deletesegment) - Deletes a segment from an application.
* [deleteSmsChannel](docs/sdk/README.md#deletesmschannel) - Disables the SMS channel for an application and deletes any existing settings for the channel.
* [deleteSmsTemplate](docs/sdk/README.md#deletesmstemplate) - Deletes a message template for messages that were sent through the SMS channel.
* [deleteUserEndpoints](docs/sdk/README.md#deleteuserendpoints) - Deletes all the endpoints that are associated with a specific user ID.
* [deleteVoiceChannel](docs/sdk/README.md#deletevoicechannel) - Disables the voice channel for an application and deletes any existing settings for the channel.
* [deleteVoiceTemplate](docs/sdk/README.md#deletevoicetemplate) - Deletes a message template for messages that were sent through the voice channel.
* [getAdmChannel](docs/sdk/README.md#getadmchannel) - Retrieves information about the status and settings of the ADM channel for an application.
* [getApnsChannel](docs/sdk/README.md#getapnschannel) - Retrieves information about the status and settings of the APNs channel for an application.
* [getApnsSandboxChannel](docs/sdk/README.md#getapnssandboxchannel) - Retrieves information about the status and settings of the APNs sandbox channel for an application.
* [getApnsVoipChannel](docs/sdk/README.md#getapnsvoipchannel) - Retrieves information about the status and settings of the APNs VoIP channel for an application.
* [getApnsVoipSandboxChannel](docs/sdk/README.md#getapnsvoipsandboxchannel) - Retrieves information about the status and settings of the APNs VoIP sandbox channel for an application.
* [getApp](docs/sdk/README.md#getapp) - Retrieves information about an application.
* [getApplicationDateRangeKpi](docs/sdk/README.md#getapplicationdaterangekpi) - Retrieves (queries) pre-aggregated data for a standard metric that applies to an application.
* [getApplicationSettings](docs/sdk/README.md#getapplicationsettings) - Retrieves information about the settings for an application.
* [getApps](docs/sdk/README.md#getapps) - Retrieves information about all the applications that are associated with your Amazon Pinpoint account.
* [getBaiduChannel](docs/sdk/README.md#getbaiduchannel) - Retrieves information about the status and settings of the Baidu channel for an application.
* [getCampaign](docs/sdk/README.md#getcampaign) - Retrieves information about the status, configuration, and other settings for a campaign.
* [getCampaignActivities](docs/sdk/README.md#getcampaignactivities) - Retrieves information about all the activities for a campaign.
* [getCampaignDateRangeKpi](docs/sdk/README.md#getcampaigndaterangekpi) - Retrieves (queries) pre-aggregated data for a standard metric that applies to a campaign.
* [getCampaignVersion](docs/sdk/README.md#getcampaignversion) - Retrieves information about the status, configuration, and other settings for a specific version of a campaign.
* [getCampaignVersions](docs/sdk/README.md#getcampaignversions) - Retrieves information about the status, configuration, and other settings for all versions of a campaign.
* [getCampaigns](docs/sdk/README.md#getcampaigns) - Retrieves information about the status, configuration, and other settings for all the campaigns that are associated with an application.
* [getChannels](docs/sdk/README.md#getchannels) - Retrieves information about the history and status of each channel for an application.
* [getEmailChannel](docs/sdk/README.md#getemailchannel) - Retrieves information about the status and settings of the email channel for an application.
* [getEmailTemplate](docs/sdk/README.md#getemailtemplate) - Retrieves the content and settings of a message template for messages that are sent through the email channel.
* [getEndpoint](docs/sdk/README.md#getendpoint) - Retrieves information about the settings and attributes of a specific endpoint for an application.
* [getEventStream](docs/sdk/README.md#geteventstream) - Retrieves information about the event stream settings for an application.
* [getExportJob](docs/sdk/README.md#getexportjob) - Retrieves information about the status and settings of a specific export job for an application.
* [getExportJobs](docs/sdk/README.md#getexportjobs) - Retrieves information about the status and settings of all the export jobs for an application.
* [getGcmChannel](docs/sdk/README.md#getgcmchannel) - Retrieves information about the status and settings of the GCM channel for an application.
* [getImportJob](docs/sdk/README.md#getimportjob) - Retrieves information about the status and settings of a specific import job for an application.
* [getImportJobs](docs/sdk/README.md#getimportjobs) - Retrieves information about the status and settings of all the import jobs for an application.
* [getInAppMessages](docs/sdk/README.md#getinappmessages) - Retrieves the in-app messages targeted for the provided endpoint ID.
* [getInAppTemplate](docs/sdk/README.md#getinapptemplate) - Retrieves the content and settings of a message template for messages sent through the in-app channel.
* [getJourney](docs/sdk/README.md#getjourney) - Retrieves information about the status, configuration, and other settings for a journey.
* [getJourneyDateRangeKpi](docs/sdk/README.md#getjourneydaterangekpi) - Retrieves (queries) pre-aggregated data for a standard engagement metric that applies to a journey.
* [getJourneyExecutionActivityMetrics](docs/sdk/README.md#getjourneyexecutionactivitymetrics) - Retrieves (queries) pre-aggregated data for a standard execution metric that applies to a journey activity.
* [getJourneyExecutionMetrics](docs/sdk/README.md#getjourneyexecutionmetrics) - Retrieves (queries) pre-aggregated data for a standard execution metric that applies to a journey.
* [getJourneyRunExecutionActivityMetrics](docs/sdk/README.md#getjourneyrunexecutionactivitymetrics) - Retrieves (queries) pre-aggregated data for a standard run execution metric that applies to a journey activity.
* [getJourneyRunExecutionMetrics](docs/sdk/README.md#getjourneyrunexecutionmetrics) - Retrieves (queries) pre-aggregated data for a standard run execution metric that applies to a journey.
* [getJourneyRuns](docs/sdk/README.md#getjourneyruns) - Provides information about the runs of a journey.
* [getPushTemplate](docs/sdk/README.md#getpushtemplate) - Retrieves the content and settings of a message template for messages that are sent through a push notification channel.
* [getRecommenderConfiguration](docs/sdk/README.md#getrecommenderconfiguration) - Retrieves information about an Amazon Pinpoint configuration for a recommender model.
* [getRecommenderConfigurations](docs/sdk/README.md#getrecommenderconfigurations) - Retrieves information about all the recommender model configurations that are associated with your Amazon Pinpoint account.
* [getSegment](docs/sdk/README.md#getsegment) - Retrieves information about the configuration, dimension, and other settings for a specific segment that's associated with an application.
* [getSegmentExportJobs](docs/sdk/README.md#getsegmentexportjobs) - Retrieves information about the status and settings of the export jobs for a segment.
* [getSegmentImportJobs](docs/sdk/README.md#getsegmentimportjobs) - Retrieves information about the status and settings of the import jobs for a segment.
* [getSegmentVersion](docs/sdk/README.md#getsegmentversion) - Retrieves information about the configuration, dimension, and other settings for a specific version of a segment that's associated with an application.
* [getSegmentVersions](docs/sdk/README.md#getsegmentversions) - Retrieves information about the configuration, dimension, and other settings for all the versions of a specific segment that's associated with an application.
* [getSegments](docs/sdk/README.md#getsegments) - Retrieves information about the configuration, dimension, and other settings for all the segments that are associated with an application.
* [getSmsChannel](docs/sdk/README.md#getsmschannel) - Retrieves information about the status and settings of the SMS channel for an application.
* [getSmsTemplate](docs/sdk/README.md#getsmstemplate) - Retrieves the content and settings of a message template for messages that are sent through the SMS channel.
* [getUserEndpoints](docs/sdk/README.md#getuserendpoints) - Retrieves information about all the endpoints that are associated with a specific user ID.
* [getVoiceChannel](docs/sdk/README.md#getvoicechannel) - Retrieves information about the status and settings of the voice channel for an application.
* [getVoiceTemplate](docs/sdk/README.md#getvoicetemplate) - Retrieves the content and settings of a message template for messages that are sent through the voice channel.
* [listJourneys](docs/sdk/README.md#listjourneys) - Retrieves information about the status, configuration, and other settings for all the journeys that are associated with an application.
* [listTagsForResource](docs/sdk/README.md#listtagsforresource) - Retrieves all the tags (keys and values) that are associated with an application, campaign, message template, or segment.
* [listTemplateVersions](docs/sdk/README.md#listtemplateversions) - Retrieves information about all the versions of a specific message template.
* [listTemplates](docs/sdk/README.md#listtemplates) - Retrieves information about all the message templates that are associated with your Amazon Pinpoint account.
* [phoneNumberValidate](docs/sdk/README.md#phonenumbervalidate) - Retrieves information about a phone number.
* [putEventStream](docs/sdk/README.md#puteventstream) - Creates a new event stream for an application or updates the settings of an existing event stream for an application.
* [putEvents](docs/sdk/README.md#putevents) - Creates a new event to record for endpoints, or creates or updates endpoint data that existing events are associated with.
* [removeAttributes](docs/sdk/README.md#removeattributes) - Removes one or more attributes, of the same attribute type, from all the endpoints that are associated with an application.
* [sendMessages](docs/sdk/README.md#sendmessages) - Creates and sends a direct message.
* [sendOTPMessage](docs/sdk/README.md#sendotpmessage) - Send an OTP message
* [sendUsersMessages](docs/sdk/README.md#sendusersmessages) - Creates and sends a message to a list of users.
* [tagResource](docs/sdk/README.md#tagresource) - Adds one or more tags (keys and values) to an application, campaign, message template, or segment.
* [untagResource](docs/sdk/README.md#untagresource) - Removes one or more tags (keys and values) from an application, campaign, message template, or segment.
* [updateAdmChannel](docs/sdk/README.md#updateadmchannel) - Enables the ADM channel for an application or updates the status and settings of the ADM channel for an application.
* [updateApnsChannel](docs/sdk/README.md#updateapnschannel) - Enables the APNs channel for an application or updates the status and settings of the APNs channel for an application.
* [updateApnsSandboxChannel](docs/sdk/README.md#updateapnssandboxchannel) - Enables the APNs sandbox channel for an application or updates the status and settings of the APNs sandbox channel for an application.
* [updateApnsVoipChannel](docs/sdk/README.md#updateapnsvoipchannel) - Enables the APNs VoIP channel for an application or updates the status and settings of the APNs VoIP channel for an application.
* [updateApnsVoipSandboxChannel](docs/sdk/README.md#updateapnsvoipsandboxchannel) - Enables the APNs VoIP sandbox channel for an application or updates the status and settings of the APNs VoIP sandbox channel for an application.
* [updateApplicationSettings](docs/sdk/README.md#updateapplicationsettings) - Updates the settings for an application.
* [updateBaiduChannel](docs/sdk/README.md#updatebaiduchannel) - Enables the Baidu channel for an application or updates the status and settings of the Baidu channel for an application.
* [updateCampaign](docs/sdk/README.md#updatecampaign) - Updates the configuration and other settings for a campaign.
* [updateEmailChannel](docs/sdk/README.md#updateemailchannel) - Enables the email channel for an application or updates the status and settings of the email channel for an application.
* [updateEmailTemplate](docs/sdk/README.md#updateemailtemplate) - Updates an existing message template for messages that are sent through the email channel.
* [updateEndpoint](docs/sdk/README.md#updateendpoint) - Creates a new endpoint for an application or updates the settings and attributes of an existing endpoint for an application. You can also use this operation to define custom attributes for an endpoint. If an update includes one or more values for a custom attribute, Amazon Pinpoint replaces (overwrites) any existing values with the new values.
* [updateEndpointsBatch](docs/sdk/README.md#updateendpointsbatch) - Creates a new batch of endpoints for an application or updates the settings and attributes of a batch of existing endpoints for an application. You can also use this operation to define custom attributes for a batch of endpoints. If an update includes one or more values for a custom attribute, Amazon Pinpoint replaces (overwrites) any existing values with the new values.
* [updateGcmChannel](docs/sdk/README.md#updategcmchannel) - Enables the GCM channel for an application or updates the status and settings of the GCM channel for an application.
* [updateInAppTemplate](docs/sdk/README.md#updateinapptemplate) - Updates an existing message template for messages sent through the in-app message channel.
* [updateJourney](docs/sdk/README.md#updatejourney) - Updates the configuration and other settings for a journey.
* [updateJourneyState](docs/sdk/README.md#updatejourneystate) - Cancels (stops) an active journey.
* [updatePushTemplate](docs/sdk/README.md#updatepushtemplate) - Updates an existing message template for messages that are sent through a push notification channel.
* [updateRecommenderConfiguration](docs/sdk/README.md#updaterecommenderconfiguration) - Updates an Amazon Pinpoint configuration for a recommender model.
* [updateSegment](docs/sdk/README.md#updatesegment) - Creates a new segment for an application or updates the configuration, dimension, and other settings for an existing segment that's associated with an application.
* [updateSmsChannel](docs/sdk/README.md#updatesmschannel) - Enables the SMS channel for an application or updates the status and settings of the SMS channel for an application.
* [updateSmsTemplate](docs/sdk/README.md#updatesmstemplate) - Updates an existing message template for messages that are sent through the SMS channel.
* [updateTemplateActiveVersion](docs/sdk/README.md#updatetemplateactiveversion) - Changes the status of a specific version of a message template to <i>active</i>.
* [updateVoiceChannel](docs/sdk/README.md#updatevoicechannel) - Enables the voice channel for an application or updates the status and settings of the voice channel for an application.
* [updateVoiceTemplate](docs/sdk/README.md#updatevoicetemplate) - Updates an existing message template for messages that are sent through the voice channel.
* [verifyOTPMessage](docs/sdk/README.md#verifyotpmessage) - Verify an OTP
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
