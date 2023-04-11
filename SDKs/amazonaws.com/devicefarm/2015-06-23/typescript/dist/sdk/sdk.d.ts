import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://devicefarm.{region}.amazonaws.com", "https://devicefarm.{region}.amazonaws.com", "http://devicefarm.{region}.amazonaws.com.cn", "https://devicefarm.{region}.amazonaws.com.cn"];
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
 * <p>Welcome to the AWS Device Farm API documentation, which contains APIs for:</p> <ul> <li> <p>Testing on desktop browsers</p> <p> Device Farm makes it possible for you to test your web applications on desktop browsers using Selenium. The APIs for desktop browser testing contain <code>TestGrid</code> in their names. For more information, see <a href="https://docs.aws.amazon.com/devicefarm/latest/testgrid/">Testing Web Applications on Selenium with Device Farm</a>.</p> </li> <li> <p>Testing on real mobile devices</p> <p>Device Farm makes it possible for you to test apps on physical phones, tablets, and other devices in the cloud. For more information, see the <a href="https://docs.aws.amazon.com/devicefarm/latest/developerguide/">Device Farm Developer Guide</a>.</p> </li> </ul>
 *
 * @see {@link https://docs.aws.amazon.com/devicefarm/} - Amazon Web Services documentation
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
     * Creates a device pool.
     */
    createDevicePool(req: operations.CreateDevicePoolRequest, config?: AxiosRequestConfig): Promise<operations.CreateDevicePoolResponse>;
    /**
     * Creates a profile that can be applied to one or more private fleet device instances.
     */
    createInstanceProfile(req: operations.CreateInstanceProfileRequest, config?: AxiosRequestConfig): Promise<operations.CreateInstanceProfileResponse>;
    /**
     * Creates a network profile.
     */
    createNetworkProfile(req: operations.CreateNetworkProfileRequest, config?: AxiosRequestConfig): Promise<operations.CreateNetworkProfileResponse>;
    /**
     * Creates a project.
     */
    createProject(req: operations.CreateProjectRequest, config?: AxiosRequestConfig): Promise<operations.CreateProjectResponse>;
    /**
     * Specifies and starts a remote access session.
     */
    createRemoteAccessSession(req: operations.CreateRemoteAccessSessionRequest, config?: AxiosRequestConfig): Promise<operations.CreateRemoteAccessSessionResponse>;
    /**
     * Creates a Selenium testing project. Projects are used to track <a>TestGridSession</a> instances.
     */
    createTestGridProject(req: operations.CreateTestGridProjectRequest, config?: AxiosRequestConfig): Promise<operations.CreateTestGridProjectResponse>;
    /**
     * Creates a signed, short-term URL that can be passed to a Selenium <code>RemoteWebDriver</code> constructor.
     */
    createTestGridUrl(req: operations.CreateTestGridUrlRequest, config?: AxiosRequestConfig): Promise<operations.CreateTestGridUrlResponse>;
    /**
     * Uploads an app or test scripts.
     */
    createUpload(req: operations.CreateUploadRequest, config?: AxiosRequestConfig): Promise<operations.CreateUploadResponse>;
    /**
     * Creates a configuration record in Device Farm for your Amazon Virtual Private Cloud (VPC) endpoint.
     */
    createVPCEConfiguration(req: operations.CreateVPCEConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.CreateVPCEConfigurationResponse>;
    /**
     * Deletes a device pool given the pool ARN. Does not allow deletion of curated pools owned by the system.
     */
    deleteDevicePool(req: operations.DeleteDevicePoolRequest, config?: AxiosRequestConfig): Promise<operations.DeleteDevicePoolResponse>;
    /**
     * Deletes a profile that can be applied to one or more private device instances.
     */
    deleteInstanceProfile(req: operations.DeleteInstanceProfileRequest, config?: AxiosRequestConfig): Promise<operations.DeleteInstanceProfileResponse>;
    /**
     * Deletes a network profile.
     */
    deleteNetworkProfile(req: operations.DeleteNetworkProfileRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNetworkProfileResponse>;
    /**
     * <p>Deletes an AWS Device Farm project, given the project ARN.</p> <p> Deleting this resource does not stop an in-progress run.</p>
     */
    deleteProject(req: operations.DeleteProjectRequest, config?: AxiosRequestConfig): Promise<operations.DeleteProjectResponse>;
    /**
     * Deletes a completed remote access session and its results.
     */
    deleteRemoteAccessSession(req: operations.DeleteRemoteAccessSessionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRemoteAccessSessionResponse>;
    /**
     * <p>Deletes the run, given the run ARN.</p> <p> Deleting this resource does not stop an in-progress run.</p>
     */
    deleteRun(req: operations.DeleteRunRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRunResponse>;
    /**
     * <p> Deletes a Selenium testing project and all content generated under it. </p> <important> <p>You cannot undo this operation.</p> </important> <note> <p>You cannot delete a project if it has active sessions.</p> </note>
     */
    deleteTestGridProject(req: operations.DeleteTestGridProjectRequest, config?: AxiosRequestConfig): Promise<operations.DeleteTestGridProjectResponse>;
    /**
     * Deletes an upload given the upload ARN.
     */
    deleteUpload(req: operations.DeleteUploadRequest, config?: AxiosRequestConfig): Promise<operations.DeleteUploadResponse>;
    /**
     * Deletes a configuration for your Amazon Virtual Private Cloud (VPC) endpoint.
     */
    deleteVPCEConfiguration(req: operations.DeleteVPCEConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.DeleteVPCEConfigurationResponse>;
    /**
     * Returns the number of unmetered iOS or unmetered Android devices that have been purchased by the account.
     */
    getAccountSettings(req: operations.GetAccountSettingsRequest, config?: AxiosRequestConfig): Promise<operations.GetAccountSettingsResponse>;
    /**
     * Gets information about a unique device type.
     */
    getDevice(req: operations.GetDeviceRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceResponse>;
    /**
     * Returns information about a device instance that belongs to a private device fleet.
     */
    getDeviceInstance(req: operations.GetDeviceInstanceRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceInstanceResponse>;
    /**
     * Gets information about a device pool.
     */
    getDevicePool(req: operations.GetDevicePoolRequest, config?: AxiosRequestConfig): Promise<operations.GetDevicePoolResponse>;
    /**
     * Gets information about compatibility with a device pool.
     */
    getDevicePoolCompatibility(req: operations.GetDevicePoolCompatibilityRequest, config?: AxiosRequestConfig): Promise<operations.GetDevicePoolCompatibilityResponse>;
    /**
     * Returns information about the specified instance profile.
     */
    getInstanceProfile(req: operations.GetInstanceProfileRequest, config?: AxiosRequestConfig): Promise<operations.GetInstanceProfileResponse>;
    /**
     * Gets information about a job.
     */
    getJob(req: operations.GetJobRequest, config?: AxiosRequestConfig): Promise<operations.GetJobResponse>;
    /**
     * Returns information about a network profile.
     */
    getNetworkProfile(req: operations.GetNetworkProfileRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkProfileResponse>;
    /**
     * Gets the current status and future status of all offerings purchased by an AWS account. The response indicates how many offerings are currently available and the offerings that will be available in the next period. The API returns a <code>NotEligible</code> error if the user is not permitted to invoke the operation. If you must be able to invoke this operation, contact <a href="mailto:aws-devicefarm-support@amazon.com">aws-devicefarm-support@amazon.com</a>.
     */
    getOfferingStatus(req: operations.GetOfferingStatusRequest, config?: AxiosRequestConfig): Promise<operations.GetOfferingStatusResponse>;
    /**
     * Gets information about a project.
     */
    getProject(req: operations.GetProjectRequest, config?: AxiosRequestConfig): Promise<operations.GetProjectResponse>;
    /**
     * Returns a link to a currently running remote access session.
     */
    getRemoteAccessSession(req: operations.GetRemoteAccessSessionRequest, config?: AxiosRequestConfig): Promise<operations.GetRemoteAccessSessionResponse>;
    /**
     * Gets information about a run.
     */
    getRun(req: operations.GetRunRequest, config?: AxiosRequestConfig): Promise<operations.GetRunResponse>;
    /**
     * Gets information about a suite.
     */
    getSuite(req: operations.GetSuiteRequest, config?: AxiosRequestConfig): Promise<operations.GetSuiteResponse>;
    /**
     * Gets information about a test.
     */
    getTest(req: operations.GetTestRequest, config?: AxiosRequestConfig): Promise<operations.GetTestResponse>;
    /**
     * Retrieves information about a Selenium testing project.
     */
    getTestGridProject(req: operations.GetTestGridProjectRequest, config?: AxiosRequestConfig): Promise<operations.GetTestGridProjectResponse>;
    /**
     * <p>A session is an instance of a browser created through a <code>RemoteWebDriver</code> with the URL from <a>CreateTestGridUrlResult$url</a>. You can use the following to look up sessions:</p> <ul> <li> <p>The session ARN (<a>GetTestGridSessionRequest$sessionArn</a>).</p> </li> <li> <p>The project ARN and a session ID (<a>GetTestGridSessionRequest$projectArn</a> and <a>GetTestGridSessionRequest$sessionId</a>).</p> </li> </ul> <p/>
     */
    getTestGridSession(req: operations.GetTestGridSessionRequest, config?: AxiosRequestConfig): Promise<operations.GetTestGridSessionResponse>;
    /**
     * Gets information about an upload.
     */
    getUpload(req: operations.GetUploadRequest, config?: AxiosRequestConfig): Promise<operations.GetUploadResponse>;
    /**
     * Returns information about the configuration settings for your Amazon Virtual Private Cloud (VPC) endpoint.
     */
    getVPCEConfiguration(req: operations.GetVPCEConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.GetVPCEConfigurationResponse>;
    /**
     * Installs an application to the device in a remote access session. For Android applications, the file must be in .apk format. For iOS applications, the file must be in .ipa format.
     */
    installToRemoteAccessSession(req: operations.InstallToRemoteAccessSessionRequest, config?: AxiosRequestConfig): Promise<operations.InstallToRemoteAccessSessionResponse>;
    /**
     * Gets information about artifacts.
     */
    listArtifacts(req: operations.ListArtifactsRequest, config?: AxiosRequestConfig): Promise<operations.ListArtifactsResponse>;
    /**
     * Returns information about the private device instances associated with one or more AWS accounts.
     */
    listDeviceInstances(req: operations.ListDeviceInstancesRequest, config?: AxiosRequestConfig): Promise<operations.ListDeviceInstancesResponse>;
    /**
     * Gets information about device pools.
     */
    listDevicePools(req: operations.ListDevicePoolsRequest, config?: AxiosRequestConfig): Promise<operations.ListDevicePoolsResponse>;
    /**
     * Gets information about unique device types.
     */
    listDevices(req: operations.ListDevicesRequest, config?: AxiosRequestConfig): Promise<operations.ListDevicesResponse>;
    /**
     * Returns information about all the instance profiles in an AWS account.
     */
    listInstanceProfiles(req: operations.ListInstanceProfilesRequest, config?: AxiosRequestConfig): Promise<operations.ListInstanceProfilesResponse>;
    /**
     * Gets information about jobs for a given test run.
     */
    listJobs(req: operations.ListJobsRequest, config?: AxiosRequestConfig): Promise<operations.ListJobsResponse>;
    /**
     * Returns the list of available network profiles.
     */
    listNetworkProfiles(req: operations.ListNetworkProfilesRequest, config?: AxiosRequestConfig): Promise<operations.ListNetworkProfilesResponse>;
    /**
     * Returns a list of offering promotions. Each offering promotion record contains the ID and description of the promotion. The API returns a <code>NotEligible</code> error if the caller is not permitted to invoke the operation. Contact <a href="mailto:aws-devicefarm-support@amazon.com">aws-devicefarm-support@amazon.com</a> if you must be able to invoke this operation.
     */
    listOfferingPromotions(req: operations.ListOfferingPromotionsRequest, config?: AxiosRequestConfig): Promise<operations.ListOfferingPromotionsResponse>;
    /**
     * Returns a list of all historical purchases, renewals, and system renewal transactions for an AWS account. The list is paginated and ordered by a descending timestamp (most recent transactions are first). The API returns a <code>NotEligible</code> error if the user is not permitted to invoke the operation. If you must be able to invoke this operation, contact <a href="mailto:aws-devicefarm-support@amazon.com">aws-devicefarm-support@amazon.com</a>.
     */
    listOfferingTransactions(req: operations.ListOfferingTransactionsRequest, config?: AxiosRequestConfig): Promise<operations.ListOfferingTransactionsResponse>;
    /**
     * Returns a list of products or offerings that the user can manage through the API. Each offering record indicates the recurring price per unit and the frequency for that offering. The API returns a <code>NotEligible</code> error if the user is not permitted to invoke the operation. If you must be able to invoke this operation, contact <a href="mailto:aws-devicefarm-support@amazon.com">aws-devicefarm-support@amazon.com</a>.
     */
    listOfferings(req: operations.ListOfferingsRequest, config?: AxiosRequestConfig): Promise<operations.ListOfferingsResponse>;
    /**
     * Gets information about projects.
     */
    listProjects(req: operations.ListProjectsRequest, config?: AxiosRequestConfig): Promise<operations.ListProjectsResponse>;
    /**
     * Returns a list of all currently running remote access sessions.
     */
    listRemoteAccessSessions(req: operations.ListRemoteAccessSessionsRequest, config?: AxiosRequestConfig): Promise<operations.ListRemoteAccessSessionsResponse>;
    /**
     * Gets information about runs, given an AWS Device Farm project ARN.
     */
    listRuns(req: operations.ListRunsRequest, config?: AxiosRequestConfig): Promise<operations.ListRunsResponse>;
    /**
     * Gets information about samples, given an AWS Device Farm job ARN.
     */
    listSamples(req: operations.ListSamplesRequest, config?: AxiosRequestConfig): Promise<operations.ListSamplesResponse>;
    /**
     * Gets information about test suites for a given job.
     */
    listSuites(req: operations.ListSuitesRequest, config?: AxiosRequestConfig): Promise<operations.ListSuitesResponse>;
    /**
     * List the tags for an AWS Device Farm resource.
     */
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     * Gets a list of all Selenium testing projects in your account.
     */
    listTestGridProjects(req: operations.ListTestGridProjectsRequest, config?: AxiosRequestConfig): Promise<operations.ListTestGridProjectsResponse>;
    /**
     * Returns a list of the actions taken in a <a>TestGridSession</a>.
     */
    listTestGridSessionActions(req: operations.ListTestGridSessionActionsRequest, config?: AxiosRequestConfig): Promise<operations.ListTestGridSessionActionsResponse>;
    /**
     * Retrieves a list of artifacts created during the session.
     */
    listTestGridSessionArtifacts(req: operations.ListTestGridSessionArtifactsRequest, config?: AxiosRequestConfig): Promise<operations.ListTestGridSessionArtifactsResponse>;
    /**
     * Retrieves a list of sessions for a <a>TestGridProject</a>.
     */
    listTestGridSessions(req: operations.ListTestGridSessionsRequest, config?: AxiosRequestConfig): Promise<operations.ListTestGridSessionsResponse>;
    /**
     * Gets information about tests in a given test suite.
     */
    listTests(req: operations.ListTestsRequest, config?: AxiosRequestConfig): Promise<operations.ListTestsResponse>;
    /**
     * <p>Gets information about unique problems, such as exceptions or crashes.</p> <p>Unique problems are defined as a single instance of an error across a run, job, or suite. For example, if a call in your application consistently raises an exception (<code>OutOfBoundsException in MyActivity.java:386</code>), <code>ListUniqueProblems</code> returns a single entry instead of many individual entries for that exception.</p>
     */
    listUniqueProblems(req: operations.ListUniqueProblemsRequest, config?: AxiosRequestConfig): Promise<operations.ListUniqueProblemsResponse>;
    /**
     * Gets information about uploads, given an AWS Device Farm project ARN.
     */
    listUploads(req: operations.ListUploadsRequest, config?: AxiosRequestConfig): Promise<operations.ListUploadsResponse>;
    /**
     * Returns information about all Amazon Virtual Private Cloud (VPC) endpoint configurations in the AWS account.
     */
    listVPCEConfigurations(req: operations.ListVPCEConfigurationsRequest, config?: AxiosRequestConfig): Promise<operations.ListVPCEConfigurationsResponse>;
    /**
     * Immediately purchases offerings for an AWS account. Offerings renew with the latest total purchased quantity for an offering, unless the renewal was overridden. The API returns a <code>NotEligible</code> error if the user is not permitted to invoke the operation. If you must be able to invoke this operation, contact <a href="mailto:aws-devicefarm-support@amazon.com">aws-devicefarm-support@amazon.com</a>.
     */
    purchaseOffering(req: operations.PurchaseOfferingRequest, config?: AxiosRequestConfig): Promise<operations.PurchaseOfferingResponse>;
    /**
     * Explicitly sets the quantity of devices to renew for an offering, starting from the <code>effectiveDate</code> of the next period. The API returns a <code>NotEligible</code> error if the user is not permitted to invoke the operation. If you must be able to invoke this operation, contact <a href="mailto:aws-devicefarm-support@amazon.com">aws-devicefarm-support@amazon.com</a>.
     */
    renewOffering(req: operations.RenewOfferingRequest, config?: AxiosRequestConfig): Promise<operations.RenewOfferingResponse>;
    /**
     * Schedules a run.
     */
    scheduleRun(req: operations.ScheduleRunRequest, config?: AxiosRequestConfig): Promise<operations.ScheduleRunResponse>;
    /**
     * Initiates a stop request for the current job. AWS Device Farm immediately stops the job on the device where tests have not started. You are not billed for this device. On the device where tests have started, setup suite and teardown suite tests run to completion on the device. You are billed for setup, teardown, and any tests that were in progress or already completed.
     */
    stopJob(req: operations.StopJobRequest, config?: AxiosRequestConfig): Promise<operations.StopJobResponse>;
    /**
     * Ends a specified remote access session.
     */
    stopRemoteAccessSession(req: operations.StopRemoteAccessSessionRequest, config?: AxiosRequestConfig): Promise<operations.StopRemoteAccessSessionResponse>;
    /**
     * Initiates a stop request for the current test run. AWS Device Farm immediately stops the run on devices where tests have not started. You are not billed for these devices. On devices where tests have started executing, setup suite and teardown suite tests run to completion on those devices. You are billed for setup, teardown, and any tests that were in progress or already completed.
     */
    stopRun(req: operations.StopRunRequest, config?: AxiosRequestConfig): Promise<operations.StopRunResponse>;
    /**
     * Associates the specified tags to a resource with the specified <code>resourceArn</code>. If existing tags on a resource are not specified in the request parameters, they are not changed. When a resource is deleted, the tags associated with that resource are also deleted.
     */
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * Deletes the specified tags from a resource.
     */
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
    /**
     * Updates information about a private device instance.
     */
    updateDeviceInstance(req: operations.UpdateDeviceInstanceRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDeviceInstanceResponse>;
    /**
     * Modifies the name, description, and rules in a device pool given the attributes and the pool ARN. Rule updates are all-or-nothing, meaning they can only be updated as a whole (or not at all).
     */
    updateDevicePool(req: operations.UpdateDevicePoolRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDevicePoolResponse>;
    /**
     * Updates information about an existing private device instance profile.
     */
    updateInstanceProfile(req: operations.UpdateInstanceProfileRequest, config?: AxiosRequestConfig): Promise<operations.UpdateInstanceProfileResponse>;
    /**
     * Updates the network profile.
     */
    updateNetworkProfile(req: operations.UpdateNetworkProfileRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkProfileResponse>;
    /**
     * Modifies the specified project name, given the project ARN and a new name.
     */
    updateProject(req: operations.UpdateProjectRequest, config?: AxiosRequestConfig): Promise<operations.UpdateProjectResponse>;
    /**
     * Change details of a project.
     */
    updateTestGridProject(req: operations.UpdateTestGridProjectRequest, config?: AxiosRequestConfig): Promise<operations.UpdateTestGridProjectResponse>;
    /**
     * Updates an uploaded test spec.
     */
    updateUpload(req: operations.UpdateUploadRequest, config?: AxiosRequestConfig): Promise<operations.UpdateUploadResponse>;
    /**
     * Updates information about an Amazon Virtual Private Cloud (VPC) endpoint configuration.
     */
    updateVPCEConfiguration(req: operations.UpdateVPCEConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.UpdateVPCEConfigurationResponse>;
}
