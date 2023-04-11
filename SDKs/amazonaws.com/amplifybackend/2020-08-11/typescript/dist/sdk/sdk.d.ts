import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://amplifybackend.{region}.amazonaws.com", "https://amplifybackend.{region}.amazonaws.com", "http://amplifybackend.{region}.amazonaws.com.cn", "https://amplifybackend.{region}.amazonaws.com.cn"];
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
 * AWS Amplify Admin API
 *
 * @see {@link https://docs.aws.amazon.com/amplifybackend/} - Amazon Web Services documentation
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
     * This operation clones an existing backend.
     */
    cloneBackend(req: operations.CloneBackendRequest, config?: AxiosRequestConfig): Promise<operations.CloneBackendResponse>;
    /**
     * This operation creates a backend for an Amplify app. Backends are automatically created at the time of app creation.
     */
    createBackend(req: operations.CreateBackendRequest, config?: AxiosRequestConfig): Promise<operations.CreateBackendResponse>;
    /**
     * Creates a new backend API resource.
     */
    createBackendAPI(req: operations.CreateBackendAPIRequest, config?: AxiosRequestConfig): Promise<operations.CreateBackendAPIResponse>;
    /**
     * Creates a new backend authentication resource.
     */
    createBackendAuth(req: operations.CreateBackendAuthRequest, config?: AxiosRequestConfig): Promise<operations.CreateBackendAuthResponse>;
    /**
     * Creates a config object for a backend.
     */
    createBackendConfig(req: operations.CreateBackendConfigRequest, config?: AxiosRequestConfig): Promise<operations.CreateBackendConfigResponse>;
    /**
     * Creates a backend storage resource.
     */
    createBackendStorage(req: operations.CreateBackendStorageRequest, config?: AxiosRequestConfig): Promise<operations.CreateBackendStorageResponse>;
    /**
     * Generates a one-time challenge code to authenticate a user into your Amplify Admin UI.
     */
    createToken(req: operations.CreateTokenRequest, config?: AxiosRequestConfig): Promise<operations.CreateTokenResponse>;
    /**
     * Removes an existing environment from your Amplify project.
     */
    deleteBackend(req: operations.DeleteBackendRequest, config?: AxiosRequestConfig): Promise<operations.DeleteBackendResponse>;
    /**
     * Deletes an existing backend API resource.
     */
    deleteBackendAPI(req: operations.DeleteBackendAPIRequest, config?: AxiosRequestConfig): Promise<operations.DeleteBackendAPIResponse>;
    /**
     * Deletes an existing backend authentication resource.
     */
    deleteBackendAuth(req: operations.DeleteBackendAuthRequest, config?: AxiosRequestConfig): Promise<operations.DeleteBackendAuthResponse>;
    /**
     * Removes the specified backend storage resource.
     */
    deleteBackendStorage(req: operations.DeleteBackendStorageRequest, config?: AxiosRequestConfig): Promise<operations.DeleteBackendStorageResponse>;
    /**
     * Deletes the challenge token based on the given appId and sessionId.
     */
    deleteToken(req: operations.DeleteTokenRequest, config?: AxiosRequestConfig): Promise<operations.DeleteTokenResponse>;
    /**
     * Generates a model schema for an existing backend API resource.
     */
    generateBackendAPIModels(req: operations.GenerateBackendAPIModelsRequest, config?: AxiosRequestConfig): Promise<operations.GenerateBackendAPIModelsResponse>;
    /**
     * Provides project-level details for your Amplify UI project.
     */
    getBackend(req: operations.GetBackendRequest, config?: AxiosRequestConfig): Promise<operations.GetBackendResponse>;
    /**
     * Gets the details for a backend API.
     */
    getBackendAPI(req: operations.GetBackendAPIRequest, config?: AxiosRequestConfig): Promise<operations.GetBackendAPIResponse>;
    /**
     * Gets a model introspection schema for an existing backend API resource.
     */
    getBackendAPIModels(req: operations.GetBackendAPIModelsRequest, config?: AxiosRequestConfig): Promise<operations.GetBackendAPIModelsResponse>;
    /**
     * Gets a backend auth details.
     */
    getBackendAuth(req: operations.GetBackendAuthRequest, config?: AxiosRequestConfig): Promise<operations.GetBackendAuthResponse>;
    /**
     * Returns information about a specific job.
     */
    getBackendJob(req: operations.GetBackendJobRequest, config?: AxiosRequestConfig): Promise<operations.GetBackendJobResponse>;
    /**
     * Gets details for a backend storage resource.
     */
    getBackendStorage(req: operations.GetBackendStorageRequest, config?: AxiosRequestConfig): Promise<operations.GetBackendStorageResponse>;
    /**
     * Gets the challenge token based on the given appId and sessionId.
     */
    getToken(req: operations.GetTokenRequest, config?: AxiosRequestConfig): Promise<operations.GetTokenResponse>;
    /**
     * Imports an existing backend authentication resource.
     */
    importBackendAuth(req: operations.ImportBackendAuthRequest, config?: AxiosRequestConfig): Promise<operations.ImportBackendAuthResponse>;
    /**
     * Imports an existing backend storage resource.
     */
    importBackendStorage(req: operations.ImportBackendStorageRequest, config?: AxiosRequestConfig): Promise<operations.ImportBackendStorageResponse>;
    /**
     * Lists the jobs for the backend of an Amplify app.
     */
    listBackendJobs(req: operations.ListBackendJobsRequest, config?: AxiosRequestConfig): Promise<operations.ListBackendJobsResponse>;
    /**
     * The list of S3 buckets in your account.
     */
    listS3Buckets(req: operations.ListS3BucketsRequest, config?: AxiosRequestConfig): Promise<operations.ListS3BucketsResponse>;
    /**
     * Removes all backend environments from your Amplify project.
     */
    removeAllBackends(req: operations.RemoveAllBackendsRequest, config?: AxiosRequestConfig): Promise<operations.RemoveAllBackendsResponse>;
    /**
     * Removes the AWS resources required to access the Amplify Admin UI.
     */
    removeBackendConfig(req: operations.RemoveBackendConfigRequest, config?: AxiosRequestConfig): Promise<operations.RemoveBackendConfigResponse>;
    /**
     * Updates an existing backend API resource.
     */
    updateBackendAPI(req: operations.UpdateBackendAPIRequest, config?: AxiosRequestConfig): Promise<operations.UpdateBackendAPIResponse>;
    /**
     * Updates an existing backend authentication resource.
     */
    updateBackendAuth(req: operations.UpdateBackendAuthRequest, config?: AxiosRequestConfig): Promise<operations.UpdateBackendAuthResponse>;
    /**
     * Updates the AWS resources required to access the Amplify Admin UI.
     */
    updateBackendConfig(req: operations.UpdateBackendConfigRequest, config?: AxiosRequestConfig): Promise<operations.UpdateBackendConfigResponse>;
    /**
     * Updates a specific job.
     */
    updateBackendJob(req: operations.UpdateBackendJobRequest, config?: AxiosRequestConfig): Promise<operations.UpdateBackendJobResponse>;
    /**
     * Updates an existing backend storage resource.
     */
    updateBackendStorage(req: operations.UpdateBackendStorageRequest, config?: AxiosRequestConfig): Promise<operations.UpdateBackendStorageResponse>;
}
