import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://m2.{region}.amazonaws.com", "https://m2.{region}.amazonaws.com", "http://m2.{region}.amazonaws.com.cn", "https://m2.{region}.amazonaws.com.cn"];
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
 * Amazon Web Services Mainframe Modernization provides tools and resources to help you plan and implement migration and modernization from mainframes to Amazon Web Services managed runtime environments. It provides tools for analyzing existing mainframe applications, developing or updating mainframe applications using COBOL or PL/I, and implementing an automated pipeline for continuous integration and continuous delivery (CI/CD) of the applications.
 *
 * @see {@link https://docs.aws.amazon.com/m2/} - Amazon Web Services documentation
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
     * Cancels the running of a specific batch job execution.
     */
    cancelBatchJobExecution(req: operations.CancelBatchJobExecutionRequest, config?: AxiosRequestConfig): Promise<operations.CancelBatchJobExecutionResponse>;
    /**
     * Creates a new application with given parameters. Requires an existing runtime environment and application definition file.
     */
    createApplication(req: operations.CreateApplicationRequest, config?: AxiosRequestConfig): Promise<operations.CreateApplicationResponse>;
    /**
     * Starts a data set import task for a specific application.
     */
    createDataSetImportTask(req: operations.CreateDataSetImportTaskRequest, config?: AxiosRequestConfig): Promise<operations.CreateDataSetImportTaskResponse>;
    /**
     * Creates and starts a deployment to deploy an application into a runtime environment.
     */
    createDeployment(req: operations.CreateDeploymentRequest, config?: AxiosRequestConfig): Promise<operations.CreateDeploymentResponse>;
    /**
     * Creates a runtime environment for a given runtime engine.
     */
    createEnvironment(req: operations.CreateEnvironmentRequest, config?: AxiosRequestConfig): Promise<operations.CreateEnvironmentResponse>;
    /**
     * Deletes a specific application. You cannot delete a running application.
     */
    deleteApplication(req: operations.DeleteApplicationRequest, config?: AxiosRequestConfig): Promise<operations.DeleteApplicationResponse>;
    /**
     * Deletes a specific application from the specific runtime environment where it was previously deployed. You cannot delete a runtime environment using DeleteEnvironment if any application has ever been deployed to it. This API removes the association of the application with the runtime environment so you can delete the environment smoothly.
     */
    deleteApplicationFromEnvironment(req: operations.DeleteApplicationFromEnvironmentRequest, config?: AxiosRequestConfig): Promise<operations.DeleteApplicationFromEnvironmentResponse>;
    /**
     * Deletes a specific runtime environment. The environment cannot contain deployed applications. If it does, you must delete those applications before you delete the environment.
     */
    deleteEnvironment(req: operations.DeleteEnvironmentRequest, config?: AxiosRequestConfig): Promise<operations.DeleteEnvironmentResponse>;
    /**
     * Describes the details of a specific application.
     */
    getApplication(req: operations.GetApplicationRequest, config?: AxiosRequestConfig): Promise<operations.GetApplicationResponse>;
    /**
     * Returns details about a specific version of a specific application.
     */
    getApplicationVersion(req: operations.GetApplicationVersionRequest, config?: AxiosRequestConfig): Promise<operations.GetApplicationVersionResponse>;
    /**
     * Gets the details of a specific batch job execution for a specific application.
     */
    getBatchJobExecution(req: operations.GetBatchJobExecutionRequest, config?: AxiosRequestConfig): Promise<operations.GetBatchJobExecutionResponse>;
    /**
     * Gets the details of a specific data set.
     */
    getDataSetDetails(req: operations.GetDataSetDetailsRequest, config?: AxiosRequestConfig): Promise<operations.GetDataSetDetailsResponse>;
    /**
     * Gets the status of a data set import task initiated with the <a>CreateDataSetImportTask</a> operation.
     */
    getDataSetImportTask(req: operations.GetDataSetImportTaskRequest, config?: AxiosRequestConfig): Promise<operations.GetDataSetImportTaskResponse>;
    /**
     * Gets details of a specific deployment with a given deployment identifier.
     */
    getDeployment(req: operations.GetDeploymentRequest, config?: AxiosRequestConfig): Promise<operations.GetDeploymentResponse>;
    /**
     * Describes a specific runtime environment.
     */
    getEnvironment(req: operations.GetEnvironmentRequest, config?: AxiosRequestConfig): Promise<operations.GetEnvironmentResponse>;
    /**
     * Returns a list of the application versions for a specific application.
     */
    listApplicationVersions(req: operations.ListApplicationVersionsRequest, config?: AxiosRequestConfig): Promise<operations.ListApplicationVersionsResponse>;
    /**
     * Lists the applications associated with a specific Amazon Web Services account. You can provide the unique identifier of a specific runtime environment in a query parameter to see all applications associated with that environment.
     */
    listApplications(req: operations.ListApplicationsRequest, config?: AxiosRequestConfig): Promise<operations.ListApplicationsResponse>;
    /**
     * Lists all the available batch job definitions based on the batch job resources uploaded during the application creation. You can use the batch job definitions in the list to start a batch job.
     */
    listBatchJobDefinitions(req: operations.ListBatchJobDefinitionsRequest, config?: AxiosRequestConfig): Promise<operations.ListBatchJobDefinitionsResponse>;
    /**
     * Lists historical, current, and scheduled batch job executions for a specific application.
     */
    listBatchJobExecutions(req: operations.ListBatchJobExecutionsRequest, config?: AxiosRequestConfig): Promise<operations.ListBatchJobExecutionsResponse>;
    /**
     * Lists the data set imports for the specified application.
     */
    listDataSetImportHistory(req: operations.ListDataSetImportHistoryRequest, config?: AxiosRequestConfig): Promise<operations.ListDataSetImportHistoryResponse>;
    /**
     * Lists the data sets imported for a specific application. In Amazon Web Services Mainframe Modernization, data sets are associated with applications deployed on runtime environments. This is known as importing data sets. Currently, Amazon Web Services Mainframe Modernization can import data sets into catalogs using <a href="https://docs.aws.amazon.com/m2/latest/APIReference/API_CreateDataSetImportTask.html">CreateDataSetImportTask</a>.
     */
    listDataSets(req: operations.ListDataSetsRequest, config?: AxiosRequestConfig): Promise<operations.ListDataSetsResponse>;
    /**
     * Returns a list of all deployments of a specific application. A deployment is a combination of a specific application and a specific version of that application. Each deployment is mapped to a particular application version.
     */
    listDeployments(req: operations.ListDeploymentsRequest, config?: AxiosRequestConfig): Promise<operations.ListDeploymentsResponse>;
    /**
     * Lists the available engine versions.
     */
    listEngineVersions(req: operations.ListEngineVersionsRequest, config?: AxiosRequestConfig): Promise<operations.ListEngineVersionsResponse>;
    /**
     * Lists the runtime environments.
     */
    listEnvironments(req: operations.ListEnvironmentsRequest, config?: AxiosRequestConfig): Promise<operations.ListEnvironmentsResponse>;
    /**
     * Lists the tags for the specified resource.
     */
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     * Starts an application that is currently stopped.
     */
    startApplication(req: operations.StartApplicationRequest, config?: AxiosRequestConfig): Promise<operations.StartApplicationResponse>;
    /**
     * Starts a batch job and returns the unique identifier of this execution of the batch job. The associated application must be running in order to start the batch job.
     */
    startBatchJob(req: operations.StartBatchJobRequest, config?: AxiosRequestConfig): Promise<operations.StartBatchJobResponse>;
    /**
     * Stops a running application.
     */
    stopApplication(req: operations.StopApplicationRequest, config?: AxiosRequestConfig): Promise<operations.StopApplicationResponse>;
    /**
     * Adds one or more tags to the specified resource.
     */
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * Removes one or more tags from the specified resource.
     */
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
    /**
     * Updates an application and creates a new version.
     */
    updateApplication(req: operations.UpdateApplicationRequest, config?: AxiosRequestConfig): Promise<operations.UpdateApplicationResponse>;
    /**
     * Updates the configuration details for a specific runtime environment.
     */
    updateEnvironment(req: operations.UpdateEnvironmentRequest, config?: AxiosRequestConfig): Promise<operations.UpdateEnvironmentResponse>;
}
