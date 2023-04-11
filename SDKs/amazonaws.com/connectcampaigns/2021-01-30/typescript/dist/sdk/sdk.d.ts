import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://connect-campaigns.{region}.amazonaws.com", "https://connect-campaigns.{region}.amazonaws.com", "http://connect-campaigns.{region}.amazonaws.com.cn", "https://connect-campaigns.{region}.amazonaws.com.cn"];
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
 * Provide APIs to create and manage Amazon Connect Campaigns.
 *
 * @see {@link https://docs.aws.amazon.com/connect-campaigns/} - Amazon Web Services documentation
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
     * Creates a campaign for the specified Amazon Connect account. This API is idempotent.
     */
    createCampaign(req: operations.CreateCampaignRequest, config?: AxiosRequestConfig): Promise<operations.CreateCampaignResponse>;
    /**
     * Deletes a campaign from the specified Amazon Connect account.
     */
    deleteCampaign(req: operations.DeleteCampaignRequest, config?: AxiosRequestConfig): Promise<operations.DeleteCampaignResponse>;
    /**
     * Deletes a connect instance config from the specified AWS account.
     */
    deleteConnectInstanceConfig(req: operations.DeleteConnectInstanceConfigRequest, config?: AxiosRequestConfig): Promise<operations.DeleteConnectInstanceConfigResponse>;
    /**
     * Delete the Connect Campaigns onboarding job for the specified Amazon Connect instance.
     */
    deleteInstanceOnboardingJob(req: operations.DeleteInstanceOnboardingJobRequest, config?: AxiosRequestConfig): Promise<operations.DeleteInstanceOnboardingJobResponse>;
    /**
     * Describes the specific campaign.
     */
    describeCampaign(req: operations.DescribeCampaignRequest, config?: AxiosRequestConfig): Promise<operations.DescribeCampaignResponse>;
    /**
     * Get state of a campaign for the specified Amazon Connect account.
     */
    getCampaignState(req: operations.GetCampaignStateRequest, config?: AxiosRequestConfig): Promise<operations.GetCampaignStateResponse>;
    /**
     * Get state of campaigns for the specified Amazon Connect account.
     */
    getCampaignStateBatch(req: operations.GetCampaignStateBatchRequest, config?: AxiosRequestConfig): Promise<operations.GetCampaignStateBatchResponse>;
    /**
     * Get the specific Connect instance config.
     */
    getConnectInstanceConfig(req: operations.GetConnectInstanceConfigRequest, config?: AxiosRequestConfig): Promise<operations.GetConnectInstanceConfigResponse>;
    /**
     * Get the specific instance onboarding job status.
     */
    getInstanceOnboardingJobStatus(req: operations.GetInstanceOnboardingJobStatusRequest, config?: AxiosRequestConfig): Promise<operations.GetInstanceOnboardingJobStatusResponse>;
    /**
     * Provides summary information about the campaigns under the specified Amazon Connect account.
     */
    listCampaigns(req: operations.ListCampaignsRequest, config?: AxiosRequestConfig): Promise<operations.ListCampaignsResponse>;
    /**
     * List tags for a resource.
     */
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     * Pauses a campaign for the specified Amazon Connect account.
     */
    pauseCampaign(req: operations.PauseCampaignRequest, config?: AxiosRequestConfig): Promise<operations.PauseCampaignResponse>;
    /**
     * Creates dials requests for the specified campaign Amazon Connect account. This API is idempotent.
     */
    putDialRequestBatch(req: operations.PutDialRequestBatchRequest, config?: AxiosRequestConfig): Promise<operations.PutDialRequestBatchResponse>;
    /**
     * Stops a campaign for the specified Amazon Connect account.
     */
    resumeCampaign(req: operations.ResumeCampaignRequest, config?: AxiosRequestConfig): Promise<operations.ResumeCampaignResponse>;
    /**
     * Starts a campaign for the specified Amazon Connect account.
     */
    startCampaign(req: operations.StartCampaignRequest, config?: AxiosRequestConfig): Promise<operations.StartCampaignResponse>;
    /**
     * Onboard the specific Amazon Connect instance to Connect Campaigns.
     */
    startInstanceOnboardingJob(req: operations.StartInstanceOnboardingJobRequest, config?: AxiosRequestConfig): Promise<operations.StartInstanceOnboardingJobResponse>;
    /**
     * Stops a campaign for the specified Amazon Connect account.
     */
    stopCampaign(req: operations.StopCampaignRequest, config?: AxiosRequestConfig): Promise<operations.StopCampaignResponse>;
    /**
     * Tag a resource.
     */
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * Untag a resource.
     */
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
    /**
     * Updates the dialer config of a campaign. This API is idempotent.
     */
    updateCampaignDialerConfig(req: operations.UpdateCampaignDialerConfigRequest, config?: AxiosRequestConfig): Promise<operations.UpdateCampaignDialerConfigResponse>;
    /**
     * Updates the name of a campaign. This API is idempotent.
     */
    updateCampaignName(req: operations.UpdateCampaignNameRequest, config?: AxiosRequestConfig): Promise<operations.UpdateCampaignNameResponse>;
    /**
     * Updates the outbound call config of a campaign. This API is idempotent.
     */
    updateCampaignOutboundCallConfig(req: operations.UpdateCampaignOutboundCallConfigRequest, config?: AxiosRequestConfig): Promise<operations.UpdateCampaignOutboundCallConfigResponse>;
}
