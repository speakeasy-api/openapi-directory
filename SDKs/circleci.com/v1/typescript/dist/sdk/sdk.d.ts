import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://circleci.com/api/v1"];
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
 * The CircleCI API is a RESTful, fully-featured API that allows you to do almost anything in CircleCI.
 *
 * @remarks
 * You can access all information and trigger all actions.
 * The only thing we don’t provide access to is billing functions, which must be done from the CircleCI web UI.
 *
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
     * Clears the cache for a project.
     *
     */
    deleteProjectUsernameProjectBuildCache(req: operations.DeleteProjectUsernameProjectBuildCacheRequest, config?: AxiosRequestConfig): Promise<operations.DeleteProjectUsernameProjectBuildCacheResponse>;
    /**
     * Delete a checkout key.
     *
     */
    deleteProjectUsernameProjectCheckoutKeyFingerprint(req: operations.DeleteProjectUsernameProjectCheckoutKeyFingerprintRequest, config?: AxiosRequestConfig): Promise<operations.DeleteProjectUsernameProjectCheckoutKeyFingerprintResponse>;
    /**
     * Deletes the environment variable named ':name'
     *
     */
    deleteProjectUsernameProjectEnvvarName(req: operations.DeleteProjectUsernameProjectEnvvarNameRequest, config?: AxiosRequestConfig): Promise<operations.DeleteProjectUsernameProjectEnvvarNameResponse>;
    /**
     * Provides information about the signed in user.
     *
     */
    getMe(config?: AxiosRequestConfig): Promise<operations.GetMeResponse>;
    /**
     * Build summary for each of the last 30 builds for a single git repo.
     *
     */
    getProjectUsernameProject(req: operations.GetProjectUsernameProjectRequest, config?: AxiosRequestConfig): Promise<operations.GetProjectUsernameProjectResponse>;
    /**
     * Lists checkout keys.
     *
     */
    getProjectUsernameProjectCheckoutKey(req: operations.GetProjectUsernameProjectCheckoutKeyRequest, config?: AxiosRequestConfig): Promise<operations.GetProjectUsernameProjectCheckoutKeyResponse>;
    /**
     * Get a checkout key.
     *
     */
    getProjectUsernameProjectCheckoutKeyFingerprint(req: operations.GetProjectUsernameProjectCheckoutKeyFingerprintRequest, config?: AxiosRequestConfig): Promise<operations.GetProjectUsernameProjectCheckoutKeyFingerprintResponse>;
    /**
     * Lists the environment variables for :project
     *
     */
    getProjectUsernameProjectEnvvar(req: operations.GetProjectUsernameProjectEnvvarRequest, config?: AxiosRequestConfig): Promise<operations.GetProjectUsernameProjectEnvvarResponse>;
    /**
     * Gets the hidden value of environment variable :name
     *
     */
    getProjectUsernameProjectEnvvarName(req: operations.GetProjectUsernameProjectEnvvarNameRequest, config?: AxiosRequestConfig): Promise<operations.GetProjectUsernameProjectEnvvarNameResponse>;
    /**
     * Full details for a single build. The response includes all of the fields from the build summary.
     * This is also the payload for the [notification webhooks](/docs/configuration/#notify), in which case this object is the value to a key named 'payload'.
     *
     */
    getProjectUsernameProjectBuildNum(req: operations.GetProjectUsernameProjectBuildNumRequest, config?: AxiosRequestConfig): Promise<operations.GetProjectUsernameProjectBuildNumResponse>;
    /**
     * List the artifacts produced by a given build.
     *
     */
    getProjectUsernameProjectBuildNumArtifacts(req: operations.GetProjectUsernameProjectBuildNumArtifactsRequest, config?: AxiosRequestConfig): Promise<operations.GetProjectUsernameProjectBuildNumArtifactsResponse>;
    /**
     * Provides test metadata for a build
     * Note: [Learn how to set up your builds to collect test metadata](https://circleci.com/docs/test-metadata/)
     *
     */
    getProjectUsernameProjectBuildNumTests(req: operations.GetProjectUsernameProjectBuildNumTestsRequest, config?: AxiosRequestConfig): Promise<operations.GetProjectUsernameProjectBuildNumTestsResponse>;
    /**
     * List of all the projects you're following on CircleCI, with build information organized by branch.
     *
     */
    getProjects(config?: AxiosRequestConfig): Promise<operations.GetProjectsResponse>;
    /**
     * Build summary for each of the last 30 recent builds, ordered by build_num.
     *
     */
    getRecentBuilds(req: operations.GetRecentBuildsRequest, config?: AxiosRequestConfig): Promise<operations.GetRecentBuildsResponse>;
    /**
     * Triggers a new build, returns a summary of the build.
     *
     */
    postProjectUsernameProject(req: operations.PostProjectUsernameProjectRequest, config?: AxiosRequestConfig): Promise<operations.PostProjectUsernameProjectResponse>;
    /**
     * Creates a new checkout key.
     * Only usable with a user API token.
     *
     */
    postProjectUsernameProjectCheckoutKey(req: operations.PostProjectUsernameProjectCheckoutKeyRequest, config?: AxiosRequestConfig): Promise<operations.PostProjectUsernameProjectCheckoutKeyResponse>;
    /**
     * Creates a new environment variable
     *
     */
    postProjectUsernameProjectEnvvar(req: operations.PostProjectUsernameProjectEnvvarRequest, config?: AxiosRequestConfig): Promise<operations.PostProjectUsernameProjectEnvvarResponse>;
    /**
     * Create an ssh key used to access external systems that require SSH key-based authentication
     *
     */
    postProjectUsernameProjectSshKey(req: operations.PostProjectUsernameProjectSshKeyRequest, config?: AxiosRequestConfig): Promise<operations.PostProjectUsernameProjectSshKeyResponse>;
    /**
     * Triggers a new build, returns a summary of the build.
     * Optional build parameters can be set using an experimental API.
     *
     * Note: For more about build parameters, read about [using parameterized builds](https://circleci.com/docs/parameterized-builds/)
     *
     */
    postProjectUsernameProjectTreeBranch(req: operations.PostProjectUsernameProjectTreeBranchRequest, config?: AxiosRequestConfig): Promise<operations.PostProjectUsernameProjectTreeBranchResponse>;
    /**
     * Cancels the build, returns a summary of the build.
     *
     */
    postProjectUsernameProjectBuildNumCancel(req: operations.PostProjectUsernameProjectBuildNumCancelRequest, config?: AxiosRequestConfig): Promise<operations.PostProjectUsernameProjectBuildNumCancelResponse>;
    /**
     * Retries the build, returns a summary of the new build.
     *
     */
    postProjectUsernameProjectBuildNumRetry(req: operations.PostProjectUsernameProjectBuildNumRetryRequest, config?: AxiosRequestConfig): Promise<operations.PostProjectUsernameProjectBuildNumRetryResponse>;
    /**
     * Adds your Heroku API key to CircleCI, takes apikey as form param name.
     *
     */
    postUserHerokuKey(config?: AxiosRequestConfig): Promise<operations.PostUserHerokuKeyResponse>;
}
