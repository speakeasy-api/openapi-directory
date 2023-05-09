# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/amazonaws.com/pinpoint/2016-12-01/go
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
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.CreateApp(ctx, operations.CreateAppRequest{
        RequestBody: operations.CreateAppRequestBody{
            CreateApplicationRequest: operations.CreateAppRequestBodyCreateApplicationRequest{
                Name: sdk.String("Terrence Rau"),
                Tags: map[string]string{
                    "corrupti": "illum",
                    "vel": "error",
                    "deserunt": "suscipit",
                    "iure": "magnam",
                },
            },
        },
        XAmzAlgorithm: sdk.String("debitis"),
        XAmzContentSha256: sdk.String("ipsa"),
        XAmzCredential: sdk.String("delectus"),
        XAmzDate: sdk.String("tempora"),
        XAmzSecurityToken: sdk.String("suscipit"),
        XAmzSignature: sdk.String("molestiae"),
        XAmzSignedHeaders: sdk.String("minus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateAppResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [CreateApp](docs/sdk/README.md#createapp) -  <p>Creates an application.</p>
* [CreateCampaign](docs/sdk/README.md#createcampaign) - Creates a new campaign for an application or updates the settings of an existing campaign for an application.
* [CreateEmailTemplate](docs/sdk/README.md#createemailtemplate) - Creates a message template for messages that are sent through the email channel.
* [CreateExportJob](docs/sdk/README.md#createexportjob) - Creates an export job for an application.
* [CreateImportJob](docs/sdk/README.md#createimportjob) - Creates an import job for an application.
* [CreateInAppTemplate](docs/sdk/README.md#createinapptemplate) - Creates a new message template for messages using the in-app message channel.
* [CreateJourney](docs/sdk/README.md#createjourney) - Creates a journey for an application.
* [CreatePushTemplate](docs/sdk/README.md#createpushtemplate) - Creates a message template for messages that are sent through a push notification channel.
* [CreateRecommenderConfiguration](docs/sdk/README.md#createrecommenderconfiguration) - Creates an Amazon Pinpoint configuration for a recommender model.
* [CreateSegment](docs/sdk/README.md#createsegment) - Creates a new segment for an application or updates the configuration, dimension, and other settings for an existing segment that's associated with an application.
* [CreateSmsTemplate](docs/sdk/README.md#createsmstemplate) - Creates a message template for messages that are sent through the SMS channel.
* [CreateVoiceTemplate](docs/sdk/README.md#createvoicetemplate) - Creates a message template for messages that are sent through the voice channel.
* [DeleteAdmChannel](docs/sdk/README.md#deleteadmchannel) - Disables the ADM channel for an application and deletes any existing settings for the channel.
* [DeleteApnsChannel](docs/sdk/README.md#deleteapnschannel) - Disables the APNs channel for an application and deletes any existing settings for the channel.
* [DeleteApnsSandboxChannel](docs/sdk/README.md#deleteapnssandboxchannel) - Disables the APNs sandbox channel for an application and deletes any existing settings for the channel.
* [DeleteApnsVoipChannel](docs/sdk/README.md#deleteapnsvoipchannel) - Disables the APNs VoIP channel for an application and deletes any existing settings for the channel.
* [DeleteApnsVoipSandboxChannel](docs/sdk/README.md#deleteapnsvoipsandboxchannel) - Disables the APNs VoIP sandbox channel for an application and deletes any existing settings for the channel.
* [DeleteApp](docs/sdk/README.md#deleteapp) - Deletes an application.
* [DeleteBaiduChannel](docs/sdk/README.md#deletebaiduchannel) - Disables the Baidu channel for an application and deletes any existing settings for the channel.
* [DeleteCampaign](docs/sdk/README.md#deletecampaign) - Deletes a campaign from an application.
* [DeleteEmailChannel](docs/sdk/README.md#deleteemailchannel) - Disables the email channel for an application and deletes any existing settings for the channel.
* [DeleteEmailTemplate](docs/sdk/README.md#deleteemailtemplate) - Deletes a message template for messages that were sent through the email channel.
* [DeleteEndpoint](docs/sdk/README.md#deleteendpoint) - Deletes an endpoint from an application.
* [DeleteEventStream](docs/sdk/README.md#deleteeventstream) - Deletes the event stream for an application.
* [DeleteGcmChannel](docs/sdk/README.md#deletegcmchannel) - Disables the GCM channel for an application and deletes any existing settings for the channel.
* [DeleteInAppTemplate](docs/sdk/README.md#deleteinapptemplate) - Deletes a message template for messages sent using the in-app message channel.
* [DeleteJourney](docs/sdk/README.md#deletejourney) - Deletes a journey from an application.
* [DeletePushTemplate](docs/sdk/README.md#deletepushtemplate) - Deletes a message template for messages that were sent through a push notification channel.
* [DeleteRecommenderConfiguration](docs/sdk/README.md#deleterecommenderconfiguration) - Deletes an Amazon Pinpoint configuration for a recommender model.
* [DeleteSegment](docs/sdk/README.md#deletesegment) - Deletes a segment from an application.
* [DeleteSmsChannel](docs/sdk/README.md#deletesmschannel) - Disables the SMS channel for an application and deletes any existing settings for the channel.
* [DeleteSmsTemplate](docs/sdk/README.md#deletesmstemplate) - Deletes a message template for messages that were sent through the SMS channel.
* [DeleteUserEndpoints](docs/sdk/README.md#deleteuserendpoints) - Deletes all the endpoints that are associated with a specific user ID.
* [DeleteVoiceChannel](docs/sdk/README.md#deletevoicechannel) - Disables the voice channel for an application and deletes any existing settings for the channel.
* [DeleteVoiceTemplate](docs/sdk/README.md#deletevoicetemplate) - Deletes a message template for messages that were sent through the voice channel.
* [GetAdmChannel](docs/sdk/README.md#getadmchannel) - Retrieves information about the status and settings of the ADM channel for an application.
* [GetApnsChannel](docs/sdk/README.md#getapnschannel) - Retrieves information about the status and settings of the APNs channel for an application.
* [GetApnsSandboxChannel](docs/sdk/README.md#getapnssandboxchannel) - Retrieves information about the status and settings of the APNs sandbox channel for an application.
* [GetApnsVoipChannel](docs/sdk/README.md#getapnsvoipchannel) - Retrieves information about the status and settings of the APNs VoIP channel for an application.
* [GetApnsVoipSandboxChannel](docs/sdk/README.md#getapnsvoipsandboxchannel) - Retrieves information about the status and settings of the APNs VoIP sandbox channel for an application.
* [GetApp](docs/sdk/README.md#getapp) - Retrieves information about an application.
* [GetApplicationDateRangeKpi](docs/sdk/README.md#getapplicationdaterangekpi) - Retrieves (queries) pre-aggregated data for a standard metric that applies to an application.
* [GetApplicationSettings](docs/sdk/README.md#getapplicationsettings) - Retrieves information about the settings for an application.
* [GetApps](docs/sdk/README.md#getapps) - Retrieves information about all the applications that are associated with your Amazon Pinpoint account.
* [GetBaiduChannel](docs/sdk/README.md#getbaiduchannel) - Retrieves information about the status and settings of the Baidu channel for an application.
* [GetCampaign](docs/sdk/README.md#getcampaign) - Retrieves information about the status, configuration, and other settings for a campaign.
* [GetCampaignActivities](docs/sdk/README.md#getcampaignactivities) - Retrieves information about all the activities for a campaign.
* [GetCampaignDateRangeKpi](docs/sdk/README.md#getcampaigndaterangekpi) - Retrieves (queries) pre-aggregated data for a standard metric that applies to a campaign.
* [GetCampaignVersion](docs/sdk/README.md#getcampaignversion) - Retrieves information about the status, configuration, and other settings for a specific version of a campaign.
* [GetCampaignVersions](docs/sdk/README.md#getcampaignversions) - Retrieves information about the status, configuration, and other settings for all versions of a campaign.
* [GetCampaigns](docs/sdk/README.md#getcampaigns) - Retrieves information about the status, configuration, and other settings for all the campaigns that are associated with an application.
* [GetChannels](docs/sdk/README.md#getchannels) - Retrieves information about the history and status of each channel for an application.
* [GetEmailChannel](docs/sdk/README.md#getemailchannel) - Retrieves information about the status and settings of the email channel for an application.
* [GetEmailTemplate](docs/sdk/README.md#getemailtemplate) - Retrieves the content and settings of a message template for messages that are sent through the email channel.
* [GetEndpoint](docs/sdk/README.md#getendpoint) - Retrieves information about the settings and attributes of a specific endpoint for an application.
* [GetEventStream](docs/sdk/README.md#geteventstream) - Retrieves information about the event stream settings for an application.
* [GetExportJob](docs/sdk/README.md#getexportjob) - Retrieves information about the status and settings of a specific export job for an application.
* [GetExportJobs](docs/sdk/README.md#getexportjobs) - Retrieves information about the status and settings of all the export jobs for an application.
* [GetGcmChannel](docs/sdk/README.md#getgcmchannel) - Retrieves information about the status and settings of the GCM channel for an application.
* [GetImportJob](docs/sdk/README.md#getimportjob) - Retrieves information about the status and settings of a specific import job for an application.
* [GetImportJobs](docs/sdk/README.md#getimportjobs) - Retrieves information about the status and settings of all the import jobs for an application.
* [GetInAppMessages](docs/sdk/README.md#getinappmessages) - Retrieves the in-app messages targeted for the provided endpoint ID.
* [GetInAppTemplate](docs/sdk/README.md#getinapptemplate) - Retrieves the content and settings of a message template for messages sent through the in-app channel.
* [GetJourney](docs/sdk/README.md#getjourney) - Retrieves information about the status, configuration, and other settings for a journey.
* [GetJourneyDateRangeKpi](docs/sdk/README.md#getjourneydaterangekpi) - Retrieves (queries) pre-aggregated data for a standard engagement metric that applies to a journey.
* [GetJourneyExecutionActivityMetrics](docs/sdk/README.md#getjourneyexecutionactivitymetrics) - Retrieves (queries) pre-aggregated data for a standard execution metric that applies to a journey activity.
* [GetJourneyExecutionMetrics](docs/sdk/README.md#getjourneyexecutionmetrics) - Retrieves (queries) pre-aggregated data for a standard execution metric that applies to a journey.
* [GetJourneyRunExecutionActivityMetrics](docs/sdk/README.md#getjourneyrunexecutionactivitymetrics) - Retrieves (queries) pre-aggregated data for a standard run execution metric that applies to a journey activity.
* [GetJourneyRunExecutionMetrics](docs/sdk/README.md#getjourneyrunexecutionmetrics) - Retrieves (queries) pre-aggregated data for a standard run execution metric that applies to a journey.
* [GetJourneyRuns](docs/sdk/README.md#getjourneyruns) - Provides information about the runs of a journey.
* [GetPushTemplate](docs/sdk/README.md#getpushtemplate) - Retrieves the content and settings of a message template for messages that are sent through a push notification channel.
* [GetRecommenderConfiguration](docs/sdk/README.md#getrecommenderconfiguration) - Retrieves information about an Amazon Pinpoint configuration for a recommender model.
* [GetRecommenderConfigurations](docs/sdk/README.md#getrecommenderconfigurations) - Retrieves information about all the recommender model configurations that are associated with your Amazon Pinpoint account.
* [GetSegment](docs/sdk/README.md#getsegment) - Retrieves information about the configuration, dimension, and other settings for a specific segment that's associated with an application.
* [GetSegmentExportJobs](docs/sdk/README.md#getsegmentexportjobs) - Retrieves information about the status and settings of the export jobs for a segment.
* [GetSegmentImportJobs](docs/sdk/README.md#getsegmentimportjobs) - Retrieves information about the status and settings of the import jobs for a segment.
* [GetSegmentVersion](docs/sdk/README.md#getsegmentversion) - Retrieves information about the configuration, dimension, and other settings for a specific version of a segment that's associated with an application.
* [GetSegmentVersions](docs/sdk/README.md#getsegmentversions) - Retrieves information about the configuration, dimension, and other settings for all the versions of a specific segment that's associated with an application.
* [GetSegments](docs/sdk/README.md#getsegments) - Retrieves information about the configuration, dimension, and other settings for all the segments that are associated with an application.
* [GetSmsChannel](docs/sdk/README.md#getsmschannel) - Retrieves information about the status and settings of the SMS channel for an application.
* [GetSmsTemplate](docs/sdk/README.md#getsmstemplate) - Retrieves the content and settings of a message template for messages that are sent through the SMS channel.
* [GetUserEndpoints](docs/sdk/README.md#getuserendpoints) - Retrieves information about all the endpoints that are associated with a specific user ID.
* [GetVoiceChannel](docs/sdk/README.md#getvoicechannel) - Retrieves information about the status and settings of the voice channel for an application.
* [GetVoiceTemplate](docs/sdk/README.md#getvoicetemplate) - Retrieves the content and settings of a message template for messages that are sent through the voice channel.
* [ListJourneys](docs/sdk/README.md#listjourneys) - Retrieves information about the status, configuration, and other settings for all the journeys that are associated with an application.
* [ListTagsForResource](docs/sdk/README.md#listtagsforresource) - Retrieves all the tags (keys and values) that are associated with an application, campaign, message template, or segment.
* [ListTemplateVersions](docs/sdk/README.md#listtemplateversions) - Retrieves information about all the versions of a specific message template.
* [ListTemplates](docs/sdk/README.md#listtemplates) - Retrieves information about all the message templates that are associated with your Amazon Pinpoint account.
* [PhoneNumberValidate](docs/sdk/README.md#phonenumbervalidate) - Retrieves information about a phone number.
* [PutEventStream](docs/sdk/README.md#puteventstream) - Creates a new event stream for an application or updates the settings of an existing event stream for an application.
* [PutEvents](docs/sdk/README.md#putevents) - Creates a new event to record for endpoints, or creates or updates endpoint data that existing events are associated with.
* [RemoveAttributes](docs/sdk/README.md#removeattributes) - Removes one or more attributes, of the same attribute type, from all the endpoints that are associated with an application.
* [SendMessages](docs/sdk/README.md#sendmessages) - Creates and sends a direct message.
* [SendOTPMessage](docs/sdk/README.md#sendotpmessage) - Send an OTP message
* [SendUsersMessages](docs/sdk/README.md#sendusersmessages) - Creates and sends a message to a list of users.
* [TagResource](docs/sdk/README.md#tagresource) - Adds one or more tags (keys and values) to an application, campaign, message template, or segment.
* [UntagResource](docs/sdk/README.md#untagresource) - Removes one or more tags (keys and values) from an application, campaign, message template, or segment.
* [UpdateAdmChannel](docs/sdk/README.md#updateadmchannel) - Enables the ADM channel for an application or updates the status and settings of the ADM channel for an application.
* [UpdateApnsChannel](docs/sdk/README.md#updateapnschannel) - Enables the APNs channel for an application or updates the status and settings of the APNs channel for an application.
* [UpdateApnsSandboxChannel](docs/sdk/README.md#updateapnssandboxchannel) - Enables the APNs sandbox channel for an application or updates the status and settings of the APNs sandbox channel for an application.
* [UpdateApnsVoipChannel](docs/sdk/README.md#updateapnsvoipchannel) - Enables the APNs VoIP channel for an application or updates the status and settings of the APNs VoIP channel for an application.
* [UpdateApnsVoipSandboxChannel](docs/sdk/README.md#updateapnsvoipsandboxchannel) - Enables the APNs VoIP sandbox channel for an application or updates the status and settings of the APNs VoIP sandbox channel for an application.
* [UpdateApplicationSettings](docs/sdk/README.md#updateapplicationsettings) - Updates the settings for an application.
* [UpdateBaiduChannel](docs/sdk/README.md#updatebaiduchannel) - Enables the Baidu channel for an application or updates the status and settings of the Baidu channel for an application.
* [UpdateCampaign](docs/sdk/README.md#updatecampaign) - Updates the configuration and other settings for a campaign.
* [UpdateEmailChannel](docs/sdk/README.md#updateemailchannel) - Enables the email channel for an application or updates the status and settings of the email channel for an application.
* [UpdateEmailTemplate](docs/sdk/README.md#updateemailtemplate) - Updates an existing message template for messages that are sent through the email channel.
* [UpdateEndpoint](docs/sdk/README.md#updateendpoint) - Creates a new endpoint for an application or updates the settings and attributes of an existing endpoint for an application. You can also use this operation to define custom attributes for an endpoint. If an update includes one or more values for a custom attribute, Amazon Pinpoint replaces (overwrites) any existing values with the new values.
* [UpdateEndpointsBatch](docs/sdk/README.md#updateendpointsbatch) - Creates a new batch of endpoints for an application or updates the settings and attributes of a batch of existing endpoints for an application. You can also use this operation to define custom attributes for a batch of endpoints. If an update includes one or more values for a custom attribute, Amazon Pinpoint replaces (overwrites) any existing values with the new values.
* [UpdateGcmChannel](docs/sdk/README.md#updategcmchannel) - Enables the GCM channel for an application or updates the status and settings of the GCM channel for an application.
* [UpdateInAppTemplate](docs/sdk/README.md#updateinapptemplate) - Updates an existing message template for messages sent through the in-app message channel.
* [UpdateJourney](docs/sdk/README.md#updatejourney) - Updates the configuration and other settings for a journey.
* [UpdateJourneyState](docs/sdk/README.md#updatejourneystate) - Cancels (stops) an active journey.
* [UpdatePushTemplate](docs/sdk/README.md#updatepushtemplate) - Updates an existing message template for messages that are sent through a push notification channel.
* [UpdateRecommenderConfiguration](docs/sdk/README.md#updaterecommenderconfiguration) - Updates an Amazon Pinpoint configuration for a recommender model.
* [UpdateSegment](docs/sdk/README.md#updatesegment) - Creates a new segment for an application or updates the configuration, dimension, and other settings for an existing segment that's associated with an application.
* [UpdateSmsChannel](docs/sdk/README.md#updatesmschannel) - Enables the SMS channel for an application or updates the status and settings of the SMS channel for an application.
* [UpdateSmsTemplate](docs/sdk/README.md#updatesmstemplate) - Updates an existing message template for messages that are sent through the SMS channel.
* [UpdateTemplateActiveVersion](docs/sdk/README.md#updatetemplateactiveversion) - Changes the status of a specific version of a message template to <i>active</i>.
* [UpdateVoiceChannel](docs/sdk/README.md#updatevoicechannel) - Enables the voice channel for an application or updates the status and settings of the voice channel for an application.
* [UpdateVoiceTemplate](docs/sdk/README.md#updatevoicetemplate) - Updates an existing message template for messages that are sent through the voice channel.
* [VerifyOTPMessage](docs/sdk/README.md#verifyotpmessage) - Verify an OTP
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
