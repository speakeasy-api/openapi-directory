import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://pinpoint.{region}.amazonaws.com", "https://pinpoint.{region}.amazonaws.com", "http://pinpoint.{region}.amazonaws.com.cn", "https://pinpoint.{region}.amazonaws.com.cn"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * The security details required to authenticate the SDK
     */
    security?: shared.Security;
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};
/**
 * Doc Engage API - Amazon Pinpoint API
 *
 * @see {@link https://docs.aws.amazon.com/pinpoint/} - Amazon Web Services documentation
 */
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
    /**
     *  <p>Creates an application.</p>
     */
    createApp(req: operations.CreateAppRequest, config?: AxiosRequestConfig): Promise<operations.CreateAppResponse>;
    /**
     * Creates a new campaign for an application or updates the settings of an existing campaign for an application.
     */
    createCampaign(req: operations.CreateCampaignRequest, config?: AxiosRequestConfig): Promise<operations.CreateCampaignResponse>;
    /**
     * Creates a message template for messages that are sent through the email channel.
     */
    createEmailTemplate(req: operations.CreateEmailTemplateRequest, config?: AxiosRequestConfig): Promise<operations.CreateEmailTemplateResponse>;
    /**
     * Creates an export job for an application.
     */
    createExportJob(req: operations.CreateExportJobRequest, config?: AxiosRequestConfig): Promise<operations.CreateExportJobResponse>;
    /**
     * Creates an import job for an application.
     */
    createImportJob(req: operations.CreateImportJobRequest, config?: AxiosRequestConfig): Promise<operations.CreateImportJobResponse>;
    /**
     * Creates a new message template for messages using the in-app message channel.
     */
    createInAppTemplate(req: operations.CreateInAppTemplateRequest, config?: AxiosRequestConfig): Promise<operations.CreateInAppTemplateResponse>;
    /**
     * Creates a journey for an application.
     */
    createJourney(req: operations.CreateJourneyRequest, config?: AxiosRequestConfig): Promise<operations.CreateJourneyResponse>;
    /**
     * Creates a message template for messages that are sent through a push notification channel.
     */
    createPushTemplate(req: operations.CreatePushTemplateRequest, config?: AxiosRequestConfig): Promise<operations.CreatePushTemplateResponse>;
    /**
     * Creates an Amazon Pinpoint configuration for a recommender model.
     */
    createRecommenderConfiguration(req: operations.CreateRecommenderConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.CreateRecommenderConfigurationResponse>;
    /**
     * Creates a new segment for an application or updates the configuration, dimension, and other settings for an existing segment that's associated with an application.
     */
    createSegment(req: operations.CreateSegmentRequest, config?: AxiosRequestConfig): Promise<operations.CreateSegmentResponse>;
    /**
     * Creates a message template for messages that are sent through the SMS channel.
     */
    createSmsTemplate(req: operations.CreateSmsTemplateRequest, config?: AxiosRequestConfig): Promise<operations.CreateSmsTemplateResponse>;
    /**
     * Creates a message template for messages that are sent through the voice channel.
     */
    createVoiceTemplate(req: operations.CreateVoiceTemplateRequest, config?: AxiosRequestConfig): Promise<operations.CreateVoiceTemplateResponse>;
    /**
     * Disables the ADM channel for an application and deletes any existing settings for the channel.
     */
    deleteAdmChannel(req: operations.DeleteAdmChannelRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAdmChannelResponse>;
    /**
     * Disables the APNs channel for an application and deletes any existing settings for the channel.
     */
    deleteApnsChannel(req: operations.DeleteApnsChannelRequest, config?: AxiosRequestConfig): Promise<operations.DeleteApnsChannelResponse>;
    /**
     * Disables the APNs sandbox channel for an application and deletes any existing settings for the channel.
     */
    deleteApnsSandboxChannel(req: operations.DeleteApnsSandboxChannelRequest, config?: AxiosRequestConfig): Promise<operations.DeleteApnsSandboxChannelResponse>;
    /**
     * Disables the APNs VoIP channel for an application and deletes any existing settings for the channel.
     */
    deleteApnsVoipChannel(req: operations.DeleteApnsVoipChannelRequest, config?: AxiosRequestConfig): Promise<operations.DeleteApnsVoipChannelResponse>;
    /**
     * Disables the APNs VoIP sandbox channel for an application and deletes any existing settings for the channel.
     */
    deleteApnsVoipSandboxChannel(req: operations.DeleteApnsVoipSandboxChannelRequest, config?: AxiosRequestConfig): Promise<operations.DeleteApnsVoipSandboxChannelResponse>;
    /**
     * Deletes an application.
     */
    deleteApp(req: operations.DeleteAppRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAppResponse>;
    /**
     * Disables the Baidu channel for an application and deletes any existing settings for the channel.
     */
    deleteBaiduChannel(req: operations.DeleteBaiduChannelRequest, config?: AxiosRequestConfig): Promise<operations.DeleteBaiduChannelResponse>;
    /**
     * Deletes a campaign from an application.
     */
    deleteCampaign(req: operations.DeleteCampaignRequest, config?: AxiosRequestConfig): Promise<operations.DeleteCampaignResponse>;
    /**
     * Disables the email channel for an application and deletes any existing settings for the channel.
     */
    deleteEmailChannel(req: operations.DeleteEmailChannelRequest, config?: AxiosRequestConfig): Promise<operations.DeleteEmailChannelResponse>;
    /**
     * Deletes a message template for messages that were sent through the email channel.
     */
    deleteEmailTemplate(req: operations.DeleteEmailTemplateRequest, config?: AxiosRequestConfig): Promise<operations.DeleteEmailTemplateResponse>;
    /**
     * Deletes an endpoint from an application.
     */
    deleteEndpoint(req: operations.DeleteEndpointRequest, config?: AxiosRequestConfig): Promise<operations.DeleteEndpointResponse>;
    /**
     * Deletes the event stream for an application.
     */
    deleteEventStream(req: operations.DeleteEventStreamRequest, config?: AxiosRequestConfig): Promise<operations.DeleteEventStreamResponse>;
    /**
     * Disables the GCM channel for an application and deletes any existing settings for the channel.
     */
    deleteGcmChannel(req: operations.DeleteGcmChannelRequest, config?: AxiosRequestConfig): Promise<operations.DeleteGcmChannelResponse>;
    /**
     * Deletes a message template for messages sent using the in-app message channel.
     */
    deleteInAppTemplate(req: operations.DeleteInAppTemplateRequest, config?: AxiosRequestConfig): Promise<operations.DeleteInAppTemplateResponse>;
    /**
     * Deletes a journey from an application.
     */
    deleteJourney(req: operations.DeleteJourneyRequest, config?: AxiosRequestConfig): Promise<operations.DeleteJourneyResponse>;
    /**
     * Deletes a message template for messages that were sent through a push notification channel.
     */
    deletePushTemplate(req: operations.DeletePushTemplateRequest, config?: AxiosRequestConfig): Promise<operations.DeletePushTemplateResponse>;
    /**
     * Deletes an Amazon Pinpoint configuration for a recommender model.
     */
    deleteRecommenderConfiguration(req: operations.DeleteRecommenderConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRecommenderConfigurationResponse>;
    /**
     * Deletes a segment from an application.
     */
    deleteSegment(req: operations.DeleteSegmentRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSegmentResponse>;
    /**
     * Disables the SMS channel for an application and deletes any existing settings for the channel.
     */
    deleteSmsChannel(req: operations.DeleteSmsChannelRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSmsChannelResponse>;
    /**
     * Deletes a message template for messages that were sent through the SMS channel.
     */
    deleteSmsTemplate(req: operations.DeleteSmsTemplateRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSmsTemplateResponse>;
    /**
     * Deletes all the endpoints that are associated with a specific user ID.
     */
    deleteUserEndpoints(req: operations.DeleteUserEndpointsRequest, config?: AxiosRequestConfig): Promise<operations.DeleteUserEndpointsResponse>;
    /**
     * Disables the voice channel for an application and deletes any existing settings for the channel.
     */
    deleteVoiceChannel(req: operations.DeleteVoiceChannelRequest, config?: AxiosRequestConfig): Promise<operations.DeleteVoiceChannelResponse>;
    /**
     * Deletes a message template for messages that were sent through the voice channel.
     */
    deleteVoiceTemplate(req: operations.DeleteVoiceTemplateRequest, config?: AxiosRequestConfig): Promise<operations.DeleteVoiceTemplateResponse>;
    /**
     * Retrieves information about the status and settings of the ADM channel for an application.
     */
    getAdmChannel(req: operations.GetAdmChannelRequest, config?: AxiosRequestConfig): Promise<operations.GetAdmChannelResponse>;
    /**
     * Retrieves information about the status and settings of the APNs channel for an application.
     */
    getApnsChannel(req: operations.GetApnsChannelRequest, config?: AxiosRequestConfig): Promise<operations.GetApnsChannelResponse>;
    /**
     * Retrieves information about the status and settings of the APNs sandbox channel for an application.
     */
    getApnsSandboxChannel(req: operations.GetApnsSandboxChannelRequest, config?: AxiosRequestConfig): Promise<operations.GetApnsSandboxChannelResponse>;
    /**
     * Retrieves information about the status and settings of the APNs VoIP channel for an application.
     */
    getApnsVoipChannel(req: operations.GetApnsVoipChannelRequest, config?: AxiosRequestConfig): Promise<operations.GetApnsVoipChannelResponse>;
    /**
     * Retrieves information about the status and settings of the APNs VoIP sandbox channel for an application.
     */
    getApnsVoipSandboxChannel(req: operations.GetApnsVoipSandboxChannelRequest, config?: AxiosRequestConfig): Promise<operations.GetApnsVoipSandboxChannelResponse>;
    /**
     * Retrieves information about an application.
     */
    getApp(req: operations.GetAppRequest, config?: AxiosRequestConfig): Promise<operations.GetAppResponse>;
    /**
     * Retrieves (queries) pre-aggregated data for a standard metric that applies to an application.
     */
    getApplicationDateRangeKpi(req: operations.GetApplicationDateRangeKpiRequest, config?: AxiosRequestConfig): Promise<operations.GetApplicationDateRangeKpiResponse>;
    /**
     * Retrieves information about the settings for an application.
     */
    getApplicationSettings(req: operations.GetApplicationSettingsRequest, config?: AxiosRequestConfig): Promise<operations.GetApplicationSettingsResponse>;
    /**
     * Retrieves information about all the applications that are associated with your Amazon Pinpoint account.
     */
    getApps(req: operations.GetAppsRequest, config?: AxiosRequestConfig): Promise<operations.GetAppsResponse>;
    /**
     * Retrieves information about the status and settings of the Baidu channel for an application.
     */
    getBaiduChannel(req: operations.GetBaiduChannelRequest, config?: AxiosRequestConfig): Promise<operations.GetBaiduChannelResponse>;
    /**
     * Retrieves information about the status, configuration, and other settings for a campaign.
     */
    getCampaign(req: operations.GetCampaignRequest, config?: AxiosRequestConfig): Promise<operations.GetCampaignResponse>;
    /**
     * Retrieves information about all the activities for a campaign.
     */
    getCampaignActivities(req: operations.GetCampaignActivitiesRequest, config?: AxiosRequestConfig): Promise<operations.GetCampaignActivitiesResponse>;
    /**
     * Retrieves (queries) pre-aggregated data for a standard metric that applies to a campaign.
     */
    getCampaignDateRangeKpi(req: operations.GetCampaignDateRangeKpiRequest, config?: AxiosRequestConfig): Promise<operations.GetCampaignDateRangeKpiResponse>;
    /**
     * Retrieves information about the status, configuration, and other settings for a specific version of a campaign.
     */
    getCampaignVersion(req: operations.GetCampaignVersionRequest, config?: AxiosRequestConfig): Promise<operations.GetCampaignVersionResponse>;
    /**
     * Retrieves information about the status, configuration, and other settings for all versions of a campaign.
     */
    getCampaignVersions(req: operations.GetCampaignVersionsRequest, config?: AxiosRequestConfig): Promise<operations.GetCampaignVersionsResponse>;
    /**
     * Retrieves information about the status, configuration, and other settings for all the campaigns that are associated with an application.
     */
    getCampaigns(req: operations.GetCampaignsRequest, config?: AxiosRequestConfig): Promise<operations.GetCampaignsResponse>;
    /**
     * Retrieves information about the history and status of each channel for an application.
     */
    getChannels(req: operations.GetChannelsRequest, config?: AxiosRequestConfig): Promise<operations.GetChannelsResponse>;
    /**
     * Retrieves information about the status and settings of the email channel for an application.
     */
    getEmailChannel(req: operations.GetEmailChannelRequest, config?: AxiosRequestConfig): Promise<operations.GetEmailChannelResponse>;
    /**
     * Retrieves the content and settings of a message template for messages that are sent through the email channel.
     */
    getEmailTemplate(req: operations.GetEmailTemplateRequest, config?: AxiosRequestConfig): Promise<operations.GetEmailTemplateResponse>;
    /**
     * Retrieves information about the settings and attributes of a specific endpoint for an application.
     */
    getEndpoint(req: operations.GetEndpointRequest, config?: AxiosRequestConfig): Promise<operations.GetEndpointResponse>;
    /**
     * Retrieves information about the event stream settings for an application.
     */
    getEventStream(req: operations.GetEventStreamRequest, config?: AxiosRequestConfig): Promise<operations.GetEventStreamResponse>;
    /**
     * Retrieves information about the status and settings of a specific export job for an application.
     */
    getExportJob(req: operations.GetExportJobRequest, config?: AxiosRequestConfig): Promise<operations.GetExportJobResponse>;
    /**
     * Retrieves information about the status and settings of all the export jobs for an application.
     */
    getExportJobs(req: operations.GetExportJobsRequest, config?: AxiosRequestConfig): Promise<operations.GetExportJobsResponse>;
    /**
     * Retrieves information about the status and settings of the GCM channel for an application.
     */
    getGcmChannel(req: operations.GetGcmChannelRequest, config?: AxiosRequestConfig): Promise<operations.GetGcmChannelResponse>;
    /**
     * Retrieves information about the status and settings of a specific import job for an application.
     */
    getImportJob(req: operations.GetImportJobRequest, config?: AxiosRequestConfig): Promise<operations.GetImportJobResponse>;
    /**
     * Retrieves information about the status and settings of all the import jobs for an application.
     */
    getImportJobs(req: operations.GetImportJobsRequest, config?: AxiosRequestConfig): Promise<operations.GetImportJobsResponse>;
    /**
     * Retrieves the in-app messages targeted for the provided endpoint ID.
     */
    getInAppMessages(req: operations.GetInAppMessagesRequest, config?: AxiosRequestConfig): Promise<operations.GetInAppMessagesResponse>;
    /**
     * Retrieves the content and settings of a message template for messages sent through the in-app channel.
     */
    getInAppTemplate(req: operations.GetInAppTemplateRequest, config?: AxiosRequestConfig): Promise<operations.GetInAppTemplateResponse>;
    /**
     * Retrieves information about the status, configuration, and other settings for a journey.
     */
    getJourney(req: operations.GetJourneyRequest, config?: AxiosRequestConfig): Promise<operations.GetJourneyResponse>;
    /**
     * Retrieves (queries) pre-aggregated data for a standard engagement metric that applies to a journey.
     */
    getJourneyDateRangeKpi(req: operations.GetJourneyDateRangeKpiRequest, config?: AxiosRequestConfig): Promise<operations.GetJourneyDateRangeKpiResponse>;
    /**
     * Retrieves (queries) pre-aggregated data for a standard execution metric that applies to a journey activity.
     */
    getJourneyExecutionActivityMetrics(req: operations.GetJourneyExecutionActivityMetricsRequest, config?: AxiosRequestConfig): Promise<operations.GetJourneyExecutionActivityMetricsResponse>;
    /**
     * Retrieves (queries) pre-aggregated data for a standard execution metric that applies to a journey.
     */
    getJourneyExecutionMetrics(req: operations.GetJourneyExecutionMetricsRequest, config?: AxiosRequestConfig): Promise<operations.GetJourneyExecutionMetricsResponse>;
    /**
     * Retrieves the content and settings of a message template for messages that are sent through a push notification channel.
     */
    getPushTemplate(req: operations.GetPushTemplateRequest, config?: AxiosRequestConfig): Promise<operations.GetPushTemplateResponse>;
    /**
     * Retrieves information about an Amazon Pinpoint configuration for a recommender model.
     */
    getRecommenderConfiguration(req: operations.GetRecommenderConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.GetRecommenderConfigurationResponse>;
    /**
     * Retrieves information about all the recommender model configurations that are associated with your Amazon Pinpoint account.
     */
    getRecommenderConfigurations(req: operations.GetRecommenderConfigurationsRequest, config?: AxiosRequestConfig): Promise<operations.GetRecommenderConfigurationsResponse>;
    /**
     * Retrieves information about the configuration, dimension, and other settings for a specific segment that's associated with an application.
     */
    getSegment(req: operations.GetSegmentRequest, config?: AxiosRequestConfig): Promise<operations.GetSegmentResponse>;
    /**
     * Retrieves information about the status and settings of the export jobs for a segment.
     */
    getSegmentExportJobs(req: operations.GetSegmentExportJobsRequest, config?: AxiosRequestConfig): Promise<operations.GetSegmentExportJobsResponse>;
    /**
     * Retrieves information about the status and settings of the import jobs for a segment.
     */
    getSegmentImportJobs(req: operations.GetSegmentImportJobsRequest, config?: AxiosRequestConfig): Promise<operations.GetSegmentImportJobsResponse>;
    /**
     * Retrieves information about the configuration, dimension, and other settings for a specific version of a segment that's associated with an application.
     */
    getSegmentVersion(req: operations.GetSegmentVersionRequest, config?: AxiosRequestConfig): Promise<operations.GetSegmentVersionResponse>;
    /**
     * Retrieves information about the configuration, dimension, and other settings for all the versions of a specific segment that's associated with an application.
     */
    getSegmentVersions(req: operations.GetSegmentVersionsRequest, config?: AxiosRequestConfig): Promise<operations.GetSegmentVersionsResponse>;
    /**
     * Retrieves information about the configuration, dimension, and other settings for all the segments that are associated with an application.
     */
    getSegments(req: operations.GetSegmentsRequest, config?: AxiosRequestConfig): Promise<operations.GetSegmentsResponse>;
    /**
     * Retrieves information about the status and settings of the SMS channel for an application.
     */
    getSmsChannel(req: operations.GetSmsChannelRequest, config?: AxiosRequestConfig): Promise<operations.GetSmsChannelResponse>;
    /**
     * Retrieves the content and settings of a message template for messages that are sent through the SMS channel.
     */
    getSmsTemplate(req: operations.GetSmsTemplateRequest, config?: AxiosRequestConfig): Promise<operations.GetSmsTemplateResponse>;
    /**
     * Retrieves information about all the endpoints that are associated with a specific user ID.
     */
    getUserEndpoints(req: operations.GetUserEndpointsRequest, config?: AxiosRequestConfig): Promise<operations.GetUserEndpointsResponse>;
    /**
     * Retrieves information about the status and settings of the voice channel for an application.
     */
    getVoiceChannel(req: operations.GetVoiceChannelRequest, config?: AxiosRequestConfig): Promise<operations.GetVoiceChannelResponse>;
    /**
     * Retrieves the content and settings of a message template for messages that are sent through the voice channel.
     */
    getVoiceTemplate(req: operations.GetVoiceTemplateRequest, config?: AxiosRequestConfig): Promise<operations.GetVoiceTemplateResponse>;
    /**
     * Retrieves information about the status, configuration, and other settings for all the journeys that are associated with an application.
     */
    listJourneys(req: operations.ListJourneysRequest, config?: AxiosRequestConfig): Promise<operations.ListJourneysResponse>;
    /**
     * Retrieves all the tags (keys and values) that are associated with an application, campaign, message template, or segment.
     */
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     * Retrieves information about all the versions of a specific message template.
     */
    listTemplateVersions(req: operations.ListTemplateVersionsRequest, config?: AxiosRequestConfig): Promise<operations.ListTemplateVersionsResponse>;
    /**
     * Retrieves information about all the message templates that are associated with your Amazon Pinpoint account.
     */
    listTemplates(req: operations.ListTemplatesRequest, config?: AxiosRequestConfig): Promise<operations.ListTemplatesResponse>;
    /**
     * Retrieves information about a phone number.
     */
    phoneNumberValidate(req: operations.PhoneNumberValidateRequest, config?: AxiosRequestConfig): Promise<operations.PhoneNumberValidateResponse>;
    /**
     * Creates a new event stream for an application or updates the settings of an existing event stream for an application.
     */
    putEventStream(req: operations.PutEventStreamRequest, config?: AxiosRequestConfig): Promise<operations.PutEventStreamResponse>;
    /**
     * Creates a new event to record for endpoints, or creates or updates endpoint data that existing events are associated with.
     */
    putEvents(req: operations.PutEventsRequest, config?: AxiosRequestConfig): Promise<operations.PutEventsResponse>;
    /**
     * Removes one or more attributes, of the same attribute type, from all the endpoints that are associated with an application.
     */
    removeAttributes(req: operations.RemoveAttributesRequest, config?: AxiosRequestConfig): Promise<operations.RemoveAttributesResponse>;
    /**
     * Creates and sends a direct message.
     */
    sendMessages(req: operations.SendMessagesRequest, config?: AxiosRequestConfig): Promise<operations.SendMessagesResponse>;
    /**
     * Send an OTP message
     */
    sendOTPMessage(req: operations.SendOTPMessageRequest, config?: AxiosRequestConfig): Promise<operations.SendOTPMessageResponse>;
    /**
     * Creates and sends a message to a list of users.
     */
    sendUsersMessages(req: operations.SendUsersMessagesRequest, config?: AxiosRequestConfig): Promise<operations.SendUsersMessagesResponse>;
    /**
     * Adds one or more tags (keys and values) to an application, campaign, message template, or segment.
     */
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * Removes one or more tags (keys and values) from an application, campaign, message template, or segment.
     */
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
    /**
     * Enables the ADM channel for an application or updates the status and settings of the ADM channel for an application.
     */
    updateAdmChannel(req: operations.UpdateAdmChannelRequest, config?: AxiosRequestConfig): Promise<operations.UpdateAdmChannelResponse>;
    /**
     * Enables the APNs channel for an application or updates the status and settings of the APNs channel for an application.
     */
    updateApnsChannel(req: operations.UpdateApnsChannelRequest, config?: AxiosRequestConfig): Promise<operations.UpdateApnsChannelResponse>;
    /**
     * Enables the APNs sandbox channel for an application or updates the status and settings of the APNs sandbox channel for an application.
     */
    updateApnsSandboxChannel(req: operations.UpdateApnsSandboxChannelRequest, config?: AxiosRequestConfig): Promise<operations.UpdateApnsSandboxChannelResponse>;
    /**
     * Enables the APNs VoIP channel for an application or updates the status and settings of the APNs VoIP channel for an application.
     */
    updateApnsVoipChannel(req: operations.UpdateApnsVoipChannelRequest, config?: AxiosRequestConfig): Promise<operations.UpdateApnsVoipChannelResponse>;
    /**
     * Enables the APNs VoIP sandbox channel for an application or updates the status and settings of the APNs VoIP sandbox channel for an application.
     */
    updateApnsVoipSandboxChannel(req: operations.UpdateApnsVoipSandboxChannelRequest, config?: AxiosRequestConfig): Promise<operations.UpdateApnsVoipSandboxChannelResponse>;
    /**
     * Updates the settings for an application.
     */
    updateApplicationSettings(req: operations.UpdateApplicationSettingsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateApplicationSettingsResponse>;
    /**
     * Enables the Baidu channel for an application or updates the status and settings of the Baidu channel for an application.
     */
    updateBaiduChannel(req: operations.UpdateBaiduChannelRequest, config?: AxiosRequestConfig): Promise<operations.UpdateBaiduChannelResponse>;
    /**
     * Updates the configuration and other settings for a campaign.
     */
    updateCampaign(req: operations.UpdateCampaignRequest, config?: AxiosRequestConfig): Promise<operations.UpdateCampaignResponse>;
    /**
     * Enables the email channel for an application or updates the status and settings of the email channel for an application.
     */
    updateEmailChannel(req: operations.UpdateEmailChannelRequest, config?: AxiosRequestConfig): Promise<operations.UpdateEmailChannelResponse>;
    /**
     * Updates an existing message template for messages that are sent through the email channel.
     */
    updateEmailTemplate(req: operations.UpdateEmailTemplateRequest, config?: AxiosRequestConfig): Promise<operations.UpdateEmailTemplateResponse>;
    /**
     * Creates a new endpoint for an application or updates the settings and attributes of an existing endpoint for an application. You can also use this operation to define custom attributes for an endpoint. If an update includes one or more values for a custom attribute, Amazon Pinpoint replaces (overwrites) any existing values with the new values.
     */
    updateEndpoint(req: operations.UpdateEndpointRequest, config?: AxiosRequestConfig): Promise<operations.UpdateEndpointResponse>;
    /**
     * Creates a new batch of endpoints for an application or updates the settings and attributes of a batch of existing endpoints for an application. You can also use this operation to define custom attributes for a batch of endpoints. If an update includes one or more values for a custom attribute, Amazon Pinpoint replaces (overwrites) any existing values with the new values.
     */
    updateEndpointsBatch(req: operations.UpdateEndpointsBatchRequest, config?: AxiosRequestConfig): Promise<operations.UpdateEndpointsBatchResponse>;
    /**
     * Enables the GCM channel for an application or updates the status and settings of the GCM channel for an application.
     */
    updateGcmChannel(req: operations.UpdateGcmChannelRequest, config?: AxiosRequestConfig): Promise<operations.UpdateGcmChannelResponse>;
    /**
     * Updates an existing message template for messages sent through the in-app message channel.
     */
    updateInAppTemplate(req: operations.UpdateInAppTemplateRequest, config?: AxiosRequestConfig): Promise<operations.UpdateInAppTemplateResponse>;
    /**
     * Updates the configuration and other settings for a journey.
     */
    updateJourney(req: operations.UpdateJourneyRequest, config?: AxiosRequestConfig): Promise<operations.UpdateJourneyResponse>;
    /**
     * Cancels (stops) an active journey.
     */
    updateJourneyState(req: operations.UpdateJourneyStateRequest, config?: AxiosRequestConfig): Promise<operations.UpdateJourneyStateResponse>;
    /**
     * Updates an existing message template for messages that are sent through a push notification channel.
     */
    updatePushTemplate(req: operations.UpdatePushTemplateRequest, config?: AxiosRequestConfig): Promise<operations.UpdatePushTemplateResponse>;
    /**
     * Updates an Amazon Pinpoint configuration for a recommender model.
     */
    updateRecommenderConfiguration(req: operations.UpdateRecommenderConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.UpdateRecommenderConfigurationResponse>;
    /**
     * Creates a new segment for an application or updates the configuration, dimension, and other settings for an existing segment that's associated with an application.
     */
    updateSegment(req: operations.UpdateSegmentRequest, config?: AxiosRequestConfig): Promise<operations.UpdateSegmentResponse>;
    /**
     * Enables the SMS channel for an application or updates the status and settings of the SMS channel for an application.
     */
    updateSmsChannel(req: operations.UpdateSmsChannelRequest, config?: AxiosRequestConfig): Promise<operations.UpdateSmsChannelResponse>;
    /**
     * Updates an existing message template for messages that are sent through the SMS channel.
     */
    updateSmsTemplate(req: operations.UpdateSmsTemplateRequest, config?: AxiosRequestConfig): Promise<operations.UpdateSmsTemplateResponse>;
    /**
     * Changes the status of a specific version of a message template to <i>active</i>.
     */
    updateTemplateActiveVersion(req: operations.UpdateTemplateActiveVersionRequest, config?: AxiosRequestConfig): Promise<operations.UpdateTemplateActiveVersionResponse>;
    /**
     * Enables the voice channel for an application or updates the status and settings of the voice channel for an application.
     */
    updateVoiceChannel(req: operations.UpdateVoiceChannelRequest, config?: AxiosRequestConfig): Promise<operations.UpdateVoiceChannelResponse>;
    /**
     * Updates an existing message template for messages that are sent through the voice channel.
     */
    updateVoiceTemplate(req: operations.UpdateVoiceTemplateRequest, config?: AxiosRequestConfig): Promise<operations.UpdateVoiceTemplateResponse>;
    /**
     * Verify an OTP
     */
    verifyOTPMessage(req: operations.VerifyOTPMessageRequest, config?: AxiosRequestConfig): Promise<operations.VerifyOTPMessageResponse>;
}
