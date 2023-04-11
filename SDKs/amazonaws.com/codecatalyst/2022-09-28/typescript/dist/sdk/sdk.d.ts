import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://codecatalyst.global.api.aws", "https://codecatalyst.global.api.aws", "http://codecatalyst.{region}.amazonaws.com.cn", "https://codecatalyst.{region}.amazonaws.com.cn"];
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
 * <note> <p> <b>Amazon CodeCatalyst is in preview release and subject to change.</b> </p> </note> <p>Welcome to the Amazon CodeCatalyst API reference. This reference provides descriptions of operations and data types for Amazon CodeCatalyst. You can use the Amazon CodeCatalyst API to work with the following objects. </p> <p>Dev Environments and the Amazon Web Services Toolkits, by calling the following:</p> <ul> <li> <p> <a>CreateAccessToken</a>, which creates a personal access token (PAT) for the current user.</p> </li> <li> <p> <a>CreateDevEnvironment</a>, which creates a Dev Environment, where you can quickly work on the code stored in the source repositories of your project.</p> </li> <li> <p> <a>CreateProject</a> which creates a project in a specified space.</p> </li> <li> <p> <a>CreateSourceRepositoryBranch</a>, which creates a branch in a specified repository where you can work on code.</p> </li> <li> <p> <a>DeleteDevEnvironment</a>, which deletes a Dev Environment.</p> </li> <li> <p> <a>GetDevEnvironment</a>, which returns information about a Dev Environment.</p> </li> <li> <p> <a>GetProject</a>, which returns information about a project.</p> </li> <li> <p> <a>GetSourceRepositoryCloneUrls</a>, which returns information about the URLs that can be used with a Git client to clone a source repository.</p> </li> <li> <p> <a>GetSubscription</a>, which returns information about the Amazon Web Services account used for billing purposes and the billing plan for the space.</p> </li> <li> <p> <a>GetUserDetails</a>, which returns information about a user in Amazon CodeCatalyst.</p> </li> <li> <p> <a>ListDevEnvironments</a>, which retrives a list of Dev Environments in a project.</p> </li> <li> <p> <a>ListProjects</a>, which retrieves a list of projects in a space.</p> </li> <li> <p> <a>ListSourceRepositories</a>, which retrieves a list of source repositories in a project.</p> </li> <li> <p> <a>ListSourceRepositoryBranches</a>, which retrieves a list of branches in a source repository.</p> </li> <li> <p> <a>ListSpaces</a>, which retrieves a list of spaces.</p> </li> <li> <p> <a>StartDevEnvironment</a>, which starts a specified Dev Environment and puts it into an active state.</p> </li> <li> <p> <a>StartDevEnvironmentSession</a>, which starts a session to a specified Dev Environment.</p> </li> <li> <p> <a>StopDevEnvironment</a>, which stops a specified Dev Environment and puts it into an stopped state.</p> </li> <li> <p> <a>StopDevEnvironmentSession</a>, which stops a session for a specified Dev Environment.</p> </li> <li> <p> <a>UpdateDevEnvironment</a>, which changes one or more values for a Dev Environment.</p> </li> <li> <p> <a>VerifySession</a>, which verifies whether the calling user has a valid Amazon CodeCatalyst login and session.</p> </li> </ul> <p>Security, activity, and resource management in Amazon CodeCatalyst, by calling the following:</p> <ul> <li> <p> <a>DeleteAccessToken</a>, which deletes a specified personal access token (PAT).</p> </li> <li> <p> <a>ListAccessTokens</a>, which lists all personal access tokens (PATs) associated with a user.</p> </li> <li> <p> <a>ListEventLogs</a>, which retrieves a list of events that occurred during a specified time period in a space.</p> </li> </ul>
 *
 * @see {@link https://docs.aws.amazon.com/codecatalyst/} - Amazon Web Services documentation
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
     * Creates a personal access token (PAT) for the current user. A personal access token (PAT) is similar to a password. It is associated with your user account. You use PATs to access Amazon CodeCatalyst resources such as source repositories from third-party applications like Git and integrated development environments (IDEs). For more information, see <a href="https://docs.aws.amazon.com/codecatalyst/latest/userguide/ipa-tokens-keys.html">Managing personal access tokens in Amazon CodeCatalyst</a>.
     */
    createAccessToken(req: operations.CreateAccessTokenRequestBody, config?: AxiosRequestConfig): Promise<operations.CreateAccessTokenResponse>;
    /**
     * <p>Creates a Dev Environment in Amazon CodeCatalyst, a cloud-based development Dev Environment that you can use to quickly work on the code stored in the source repositories of your project. </p> <note> <p>When created in the Amazon CodeCatalyst console, by default a Dev Environment is configured to have a 2 core processor, 4GB of RAM, and 16GB of persistent storage. None of these defaults apply to a Dev Environment created programmatically.</p> </note>
     */
    createDevEnvironment(req: operations.CreateDevEnvironmentRequest, config?: AxiosRequestConfig): Promise<operations.CreateDevEnvironmentResponse>;
    /**
     * Creates a project in a specified space.
     */
    createProject(req: operations.CreateProjectRequest, config?: AxiosRequestConfig): Promise<operations.CreateProjectResponse>;
    /**
     * <p>Creates a branch in a specified source repository in Amazon CodeCatalyst. </p> <note> <p>This API only creates a branch in a source repository hosted in Amazon CodeCatalyst. You cannot use this API to create a branch in a linked repository.</p> </note>
     */
    createSourceRepositoryBranch(req: operations.CreateSourceRepositoryBranchRequest, config?: AxiosRequestConfig): Promise<operations.CreateSourceRepositoryBranchResponse>;
    /**
     * Deletes a specified personal access token (PAT). A personal access token can only be deleted by the user who created it.
     */
    deleteAccessToken(req: operations.DeleteAccessTokenRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAccessTokenResponse>;
    /**
     * Deletes a Dev Environment.
     */
    deleteDevEnvironment(req: operations.DeleteDevEnvironmentRequest, config?: AxiosRequestConfig): Promise<operations.DeleteDevEnvironmentResponse>;
    /**
     * Returns information about a Dev Environment for a source repository in a project. Dev Environments are specific to the user who creates them.
     */
    getDevEnvironment(req: operations.GetDevEnvironmentRequest, config?: AxiosRequestConfig): Promise<operations.GetDevEnvironmentResponse>;
    /**
     * Returns information about a project.
     */
    getProject(req: operations.GetProjectRequest, config?: AxiosRequestConfig): Promise<operations.GetProjectResponse>;
    /**
     * Returns information about the URLs that can be used with a Git client to clone a source repository.
     */
    getSourceRepositoryCloneUrls(req: operations.GetSourceRepositoryCloneUrlsRequest, config?: AxiosRequestConfig): Promise<operations.GetSourceRepositoryCloneUrlsResponse>;
    /**
     * Returns information about an space.
     */
    getSpace(req: operations.GetSpaceRequest, config?: AxiosRequestConfig): Promise<operations.GetSpaceResponse>;
    /**
     * Returns information about the Amazon Web Services account used for billing purposes and the billing plan for the space.
     */
    getSubscription(req: operations.GetSubscriptionRequest, config?: AxiosRequestConfig): Promise<operations.GetSubscriptionResponse>;
    /**
     * Returns information about a user.
     */
    getUserDetails(req: operations.GetUserDetailsRequest, config?: AxiosRequestConfig): Promise<operations.GetUserDetailsResponse>;
    /**
     * Lists all personal access tokens (PATs) associated with the user who calls the API. You can only list PATs associated with your user account.
     */
    listAccessTokens(req: operations.ListAccessTokensRequest, config?: AxiosRequestConfig): Promise<operations.ListAccessTokensResponse>;
    /**
     * Retrives a list of Dev Environments in a project.
     */
    listDevEnvironments(req: operations.ListDevEnvironmentsRequest, config?: AxiosRequestConfig): Promise<operations.ListDevEnvironmentsResponse>;
    /**
     * Retrieves a list of events that occurred during a specified time period in a space. You can use these events to audit user and system activity in a space.
     */
    listEventLogs(req: operations.ListEventLogsRequest, config?: AxiosRequestConfig): Promise<operations.ListEventLogsResponse>;
    /**
     * Retrieves a list of projects.
     */
    listProjects(req: operations.ListProjectsRequest, config?: AxiosRequestConfig): Promise<operations.ListProjectsResponse>;
    /**
     * Retrieves a list of source repositories in a project.
     */
    listSourceRepositories(req: operations.ListSourceRepositoriesRequest, config?: AxiosRequestConfig): Promise<operations.ListSourceRepositoriesResponse>;
    /**
     * Retrieves a list of branches in a specified source repository.
     */
    listSourceRepositoryBranches(req: operations.ListSourceRepositoryBranchesRequest, config?: AxiosRequestConfig): Promise<operations.ListSourceRepositoryBranchesResponse>;
    /**
     * Retrieves a list of spaces.
     */
    listSpaces(req: operations.ListSpacesRequest, config?: AxiosRequestConfig): Promise<operations.ListSpacesResponse>;
    /**
     * Starts a specified Dev Environment and puts it into an active state.
     */
    startDevEnvironment(req: operations.StartDevEnvironmentRequest, config?: AxiosRequestConfig): Promise<operations.StartDevEnvironmentResponse>;
    /**
     * Starts a session for a specified Dev Environment.
     */
    startDevEnvironmentSession(req: operations.StartDevEnvironmentSessionRequest, config?: AxiosRequestConfig): Promise<operations.StartDevEnvironmentSessionResponse>;
    /**
     * Pauses a specified Dev Environment and places it in a non-running state. Stopped Dev Environments do not consume compute minutes.
     */
    stopDevEnvironment(req: operations.StopDevEnvironmentRequest, config?: AxiosRequestConfig): Promise<operations.StopDevEnvironmentResponse>;
    /**
     * Stops a session for a specified Dev Environment.
     */
    stopDevEnvironmentSession(req: operations.StopDevEnvironmentSessionRequest, config?: AxiosRequestConfig): Promise<operations.StopDevEnvironmentSessionResponse>;
    /**
     * Changes one or more values for a Dev Environment. Updating certain values of the Dev Environment will cause a restart.
     */
    updateDevEnvironment(req: operations.UpdateDevEnvironmentRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDevEnvironmentResponse>;
    /**
     * Verifies whether the calling user has a valid Amazon CodeCatalyst login and session. If successful, this returns the ID of the user in Amazon CodeCatalyst.
     */
    verifySession(config?: AxiosRequestConfig): Promise<operations.VerifySessionResponse>;
}
