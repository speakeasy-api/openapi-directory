import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://amplify.{region}.amazonaws.com", "https://amplify.{region}.amazonaws.com", "http://amplify.{region}.amazonaws.com.cn", "https://amplify.{region}.amazonaws.com.cn"];
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
 * Amplify enables developers to develop and deploy cloud-powered mobile and web apps. The Amplify Console provides a continuous delivery and hosting service for web applications. For more information, see the <a href="https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html">Amplify Console User Guide</a>. The Amplify Framework is a comprehensive set of SDKs, libraries, tools, and documentation for client app development. For more information, see the <a href="https://docs.amplify.aws/">Amplify Framework.</a>
 *
 * @see {@link https://docs.aws.amazon.com/amplify/} - Amazon Web Services documentation
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
     *  Creates a new Amplify app.
     */
    createApp(req: operations.CreateAppRequest, config?: AxiosRequestConfig): Promise<operations.CreateAppResponse>;
    /**
     *  Creates a new backend environment for an Amplify app.
     */
    createBackendEnvironment(req: operations.CreateBackendEnvironmentRequest, config?: AxiosRequestConfig): Promise<operations.CreateBackendEnvironmentResponse>;
    /**
     *  Creates a new branch for an Amplify app.
     */
    createBranch(req: operations.CreateBranchRequest, config?: AxiosRequestConfig): Promise<operations.CreateBranchResponse>;
    /**
     *  Creates a deployment for a manually deployed Amplify app. Manually deployed apps are not connected to a repository.
     */
    createDeployment(req: operations.CreateDeploymentRequest, config?: AxiosRequestConfig): Promise<operations.CreateDeploymentResponse>;
    /**
     *  Creates a new domain association for an Amplify app. This action associates a custom domain with the Amplify app
     */
    createDomainAssociation(req: operations.CreateDomainAssociationRequest, config?: AxiosRequestConfig): Promise<operations.CreateDomainAssociationResponse>;
    /**
     *  Creates a new webhook on an Amplify app.
     */
    createWebhook(req: operations.CreateWebhookRequest, config?: AxiosRequestConfig): Promise<operations.CreateWebhookResponse>;
    /**
     *  Deletes an existing Amplify app specified by an app ID.
     */
    deleteApp(req: operations.DeleteAppRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAppResponse>;
    /**
     *  Deletes a backend environment for an Amplify app.
     */
    deleteBackendEnvironment(req: operations.DeleteBackendEnvironmentRequest, config?: AxiosRequestConfig): Promise<operations.DeleteBackendEnvironmentResponse>;
    /**
     *  Deletes a branch for an Amplify app.
     */
    deleteBranch(req: operations.DeleteBranchRequest, config?: AxiosRequestConfig): Promise<operations.DeleteBranchResponse>;
    /**
     *  Deletes a domain association for an Amplify app.
     */
    deleteDomainAssociation(req: operations.DeleteDomainAssociationRequest, config?: AxiosRequestConfig): Promise<operations.DeleteDomainAssociationResponse>;
    /**
     *  Deletes a job for a branch of an Amplify app.
     */
    deleteJob(req: operations.DeleteJobRequest, config?: AxiosRequestConfig): Promise<operations.DeleteJobResponse>;
    /**
     *  Deletes a webhook.
     */
    deleteWebhook(req: operations.DeleteWebhookRequest, config?: AxiosRequestConfig): Promise<operations.DeleteWebhookResponse>;
    /**
     *  Returns the website access logs for a specific time range using a presigned URL.
     */
    generateAccessLogs(req: operations.GenerateAccessLogsRequest, config?: AxiosRequestConfig): Promise<operations.GenerateAccessLogsResponse>;
    /**
     *  Returns an existing Amplify app by appID.
     */
    getApp(req: operations.GetAppRequest, config?: AxiosRequestConfig): Promise<operations.GetAppResponse>;
    /**
     *  Returns the artifact info that corresponds to an artifact id.
     */
    getArtifactUrl(req: operations.GetArtifactUrlRequest, config?: AxiosRequestConfig): Promise<operations.GetArtifactUrlResponse>;
    /**
     *  Returns a backend environment for an Amplify app.
     */
    getBackendEnvironment(req: operations.GetBackendEnvironmentRequest, config?: AxiosRequestConfig): Promise<operations.GetBackendEnvironmentResponse>;
    /**
     *  Returns a branch for an Amplify app.
     */
    getBranch(req: operations.GetBranchRequest, config?: AxiosRequestConfig): Promise<operations.GetBranchResponse>;
    /**
     *  Returns the domain information for an Amplify app.
     */
    getDomainAssociation(req: operations.GetDomainAssociationRequest, config?: AxiosRequestConfig): Promise<operations.GetDomainAssociationResponse>;
    /**
     *  Returns a job for a branch of an Amplify app.
     */
    getJob(req: operations.GetJobRequest, config?: AxiosRequestConfig): Promise<operations.GetJobResponse>;
    /**
     *  Returns the webhook information that corresponds to a specified webhook ID.
     */
    getWebhook(req: operations.GetWebhookRequest, config?: AxiosRequestConfig): Promise<operations.GetWebhookResponse>;
    /**
     *  Returns a list of the existing Amplify apps.
     */
    listApps(req: operations.ListAppsRequest, config?: AxiosRequestConfig): Promise<operations.ListAppsResponse>;
    /**
     *  Returns a list of artifacts for a specified app, branch, and job.
     */
    listArtifacts(req: operations.ListArtifactsRequest, config?: AxiosRequestConfig): Promise<operations.ListArtifactsResponse>;
    /**
     *  Lists the backend environments for an Amplify app.
     */
    listBackendEnvironments(req: operations.ListBackendEnvironmentsRequest, config?: AxiosRequestConfig): Promise<operations.ListBackendEnvironmentsResponse>;
    /**
     *  Lists the branches of an Amplify app.
     */
    listBranches(req: operations.ListBranchesRequest, config?: AxiosRequestConfig): Promise<operations.ListBranchesResponse>;
    /**
     *  Returns the domain associations for an Amplify app.
     */
    listDomainAssociations(req: operations.ListDomainAssociationsRequest, config?: AxiosRequestConfig): Promise<operations.ListDomainAssociationsResponse>;
    /**
     *  Lists the jobs for a branch of an Amplify app.
     */
    listJobs(req: operations.ListJobsRequest, config?: AxiosRequestConfig): Promise<operations.ListJobsResponse>;
    /**
     *  Returns a list of tags for a specified Amazon Resource Name (ARN).
     */
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     *  Returns a list of webhooks for an Amplify app.
     */
    listWebhooks(req: operations.ListWebhooksRequest, config?: AxiosRequestConfig): Promise<operations.ListWebhooksResponse>;
    /**
     *  Starts a deployment for a manually deployed app. Manually deployed apps are not connected to a repository.
     */
    startDeployment(req: operations.StartDeploymentRequest, config?: AxiosRequestConfig): Promise<operations.StartDeploymentResponse>;
    /**
     *  Starts a new job for a branch of an Amplify app.
     */
    startJob(req: operations.StartJobRequest, config?: AxiosRequestConfig): Promise<operations.StartJobResponse>;
    /**
     *  Stops a job that is in progress for a branch of an Amplify app.
     */
    stopJob(req: operations.StopJobRequest, config?: AxiosRequestConfig): Promise<operations.StopJobResponse>;
    /**
     *  Tags the resource with a tag key and value.
     */
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     *  Untags a resource with a specified Amazon Resource Name (ARN).
     */
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
    /**
     *  Updates an existing Amplify app.
     */
    updateApp(req: operations.UpdateAppRequest, config?: AxiosRequestConfig): Promise<operations.UpdateAppResponse>;
    /**
     *  Updates a branch for an Amplify app.
     */
    updateBranch(req: operations.UpdateBranchRequest, config?: AxiosRequestConfig): Promise<operations.UpdateBranchResponse>;
    /**
     *  Creates a new domain association for an Amplify app.
     */
    updateDomainAssociation(req: operations.UpdateDomainAssociationRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDomainAssociationResponse>;
    /**
     *  Updates a webhook.
     */
    updateWebhook(req: operations.UpdateWebhookRequest, config?: AxiosRequestConfig): Promise<operations.UpdateWebhookResponse>;
}
