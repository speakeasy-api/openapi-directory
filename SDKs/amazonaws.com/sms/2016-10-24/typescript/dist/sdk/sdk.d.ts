import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://sms.{region}.amazonaws.com", "https://sms.{region}.amazonaws.com", "http://sms.{region}.amazonaws.com.cn", "https://sms.{region}.amazonaws.com.cn"];
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
 * <important> <p> <b>Product update</b> </p> <p>We recommend <a href="http://aws.amazon.com/application-migration-service">Amazon Web Services Application Migration Service</a> (Amazon Web Services MGN) as the primary migration service for lift-and-shift migrations. If Amazon Web Services MGN is unavailable in a specific Amazon Web Services Region, you can use the Server Migration Service APIs through March 2023.</p> </important> <p>Server Migration Service (Server Migration Service) makes it easier and faster for you to migrate your on-premises workloads to Amazon Web Services. To learn more about Server Migration Service, see the following resources:</p> <ul> <li> <p> <a href="http://aws.amazon.com/server-migration-service/">Server Migration Service product page</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/server-migration-service/latest/userguide/">Server Migration Service User Guide</a> </p> </li> </ul>
 *
 * @see {@link https://docs.aws.amazon.com/sms/} - Amazon Web Services documentation
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
     * Creates an application. An application consists of one or more server groups. Each server group contain one or more servers.
     */
    createApp(req: operations.CreateAppRequest, config?: AxiosRequestConfig): Promise<operations.CreateAppResponse>;
    /**
     * Creates a replication job. The replication job schedules periodic replication runs to replicate your server to Amazon Web Services. Each replication run creates an Amazon Machine Image (AMI).
     */
    createReplicationJob(req: operations.CreateReplicationJobRequest, config?: AxiosRequestConfig): Promise<operations.CreateReplicationJobResponse>;
    /**
     * Deletes the specified application. Optionally deletes the launched stack associated with the application and all Server Migration Service replication jobs for servers in the application.
     */
    deleteApp(req: operations.DeleteAppRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAppResponse>;
    /**
     * Deletes the launch configuration for the specified application.
     */
    deleteAppLaunchConfiguration(req: operations.DeleteAppLaunchConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAppLaunchConfigurationResponse>;
    /**
     * Deletes the replication configuration for the specified application.
     */
    deleteAppReplicationConfiguration(req: operations.DeleteAppReplicationConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAppReplicationConfigurationResponse>;
    /**
     * Deletes the validation configuration for the specified application.
     */
    deleteAppValidationConfiguration(req: operations.DeleteAppValidationConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAppValidationConfigurationResponse>;
    /**
     * <p>Deletes the specified replication job.</p> <p>After you delete a replication job, there are no further replication runs. Amazon Web Services deletes the contents of the Amazon S3 bucket used to store Server Migration Service artifacts. The AMIs created by the replication runs are not deleted.</p>
     */
    deleteReplicationJob(req: operations.DeleteReplicationJobRequest, config?: AxiosRequestConfig): Promise<operations.DeleteReplicationJobResponse>;
    /**
     * Deletes all servers from your server catalog.
     */
    deleteServerCatalog(req: operations.DeleteServerCatalogRequest, config?: AxiosRequestConfig): Promise<operations.DeleteServerCatalogResponse>;
    /**
     * <p>Disassociates the specified connector from Server Migration Service.</p> <p>After you disassociate a connector, it is no longer available to support replication jobs.</p>
     */
    disassociateConnector(req: operations.DisassociateConnectorRequest, config?: AxiosRequestConfig): Promise<operations.DisassociateConnectorResponse>;
    /**
     * Generates a target change set for a currently launched stack and writes it to an Amazon S3 object in the customer’s Amazon S3 bucket.
     */
    generateChangeSet(req: operations.GenerateChangeSetRequest, config?: AxiosRequestConfig): Promise<operations.GenerateChangeSetResponse>;
    /**
     * Generates an CloudFormation template based on the current launch configuration and writes it to an Amazon S3 object in the customer’s Amazon S3 bucket.
     */
    generateTemplate(req: operations.GenerateTemplateRequest, config?: AxiosRequestConfig): Promise<operations.GenerateTemplateResponse>;
    /**
     * Retrieve information about the specified application.
     */
    getApp(req: operations.GetAppRequest, config?: AxiosRequestConfig): Promise<operations.GetAppResponse>;
    /**
     * Retrieves the application launch configuration associated with the specified application.
     */
    getAppLaunchConfiguration(req: operations.GetAppLaunchConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.GetAppLaunchConfigurationResponse>;
    /**
     * Retrieves the application replication configuration associated with the specified application.
     */
    getAppReplicationConfiguration(req: operations.GetAppReplicationConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.GetAppReplicationConfigurationResponse>;
    /**
     * Retrieves information about a configuration for validating an application.
     */
    getAppValidationConfiguration(req: operations.GetAppValidationConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.GetAppValidationConfigurationResponse>;
    /**
     * Retrieves output from validating an application.
     */
    getAppValidationOutput(req: operations.GetAppValidationOutputRequest, config?: AxiosRequestConfig): Promise<operations.GetAppValidationOutputResponse>;
    /**
     * Describes the connectors registered with the Server Migration Service.
     */
    getConnectors(req: operations.GetConnectorsRequest, config?: AxiosRequestConfig): Promise<operations.GetConnectorsResponse>;
    /**
     * Describes the specified replication job or all of your replication jobs.
     */
    getReplicationJobs(req: operations.GetReplicationJobsRequest, config?: AxiosRequestConfig): Promise<operations.GetReplicationJobsResponse>;
    /**
     * Describes the replication runs for the specified replication job.
     */
    getReplicationRuns(req: operations.GetReplicationRunsRequest, config?: AxiosRequestConfig): Promise<operations.GetReplicationRunsResponse>;
    /**
     * <p>Describes the servers in your server catalog.</p> <p>Before you can describe your servers, you must import them using <a>ImportServerCatalog</a>.</p>
     */
    getServers(req: operations.GetServersRequest, config?: AxiosRequestConfig): Promise<operations.GetServersResponse>;
    /**
     * Allows application import from Migration Hub.
     */
    importAppCatalog(req: operations.ImportAppCatalogRequest, config?: AxiosRequestConfig): Promise<operations.ImportAppCatalogResponse>;
    /**
     * <p>Gathers a complete list of on-premises servers. Connectors must be installed and monitoring all servers to import.</p> <p>This call returns immediately, but might take additional time to retrieve all the servers.</p>
     */
    importServerCatalog(req: operations.ImportServerCatalogRequest, config?: AxiosRequestConfig): Promise<operations.ImportServerCatalogResponse>;
    /**
     * Launches the specified application as a stack in CloudFormation.
     */
    launchApp(req: operations.LaunchAppRequest, config?: AxiosRequestConfig): Promise<operations.LaunchAppResponse>;
    /**
     * Retrieves summaries for all applications.
     */
    listApps(req: operations.ListAppsRequest, config?: AxiosRequestConfig): Promise<operations.ListAppsResponse>;
    /**
     * Provides information to Server Migration Service about whether application validation is successful.
     */
    notifyAppValidationOutput(req: operations.NotifyAppValidationOutputRequest, config?: AxiosRequestConfig): Promise<operations.NotifyAppValidationOutputResponse>;
    /**
     * Creates or updates the launch configuration for the specified application.
     */
    putAppLaunchConfiguration(req: operations.PutAppLaunchConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.PutAppLaunchConfigurationResponse>;
    /**
     * Creates or updates the replication configuration for the specified application.
     */
    putAppReplicationConfiguration(req: operations.PutAppReplicationConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.PutAppReplicationConfigurationResponse>;
    /**
     * Creates or updates a validation configuration for the specified application.
     */
    putAppValidationConfiguration(req: operations.PutAppValidationConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.PutAppValidationConfigurationResponse>;
    /**
     * Starts replicating the specified application by creating replication jobs for each server in the application.
     */
    startAppReplication(req: operations.StartAppReplicationRequest, config?: AxiosRequestConfig): Promise<operations.StartAppReplicationResponse>;
    /**
     * Starts an on-demand replication run for the specified application.
     */
    startOnDemandAppReplication(req: operations.StartOnDemandAppReplicationRequest, config?: AxiosRequestConfig): Promise<operations.StartOnDemandAppReplicationResponse>;
    /**
     * <p>Starts an on-demand replication run for the specified replication job. This replication run starts immediately. This replication run is in addition to the ones already scheduled.</p> <p>There is a limit on the number of on-demand replications runs that you can request in a 24-hour period.</p>
     */
    startOnDemandReplicationRun(req: operations.StartOnDemandReplicationRunRequest, config?: AxiosRequestConfig): Promise<operations.StartOnDemandReplicationRunResponse>;
    /**
     * Stops replicating the specified application by deleting the replication job for each server in the application.
     */
    stopAppReplication(req: operations.StopAppReplicationRequest, config?: AxiosRequestConfig): Promise<operations.StopAppReplicationResponse>;
    /**
     * Terminates the stack for the specified application.
     */
    terminateApp(req: operations.TerminateAppRequest, config?: AxiosRequestConfig): Promise<operations.TerminateAppResponse>;
    /**
     * Updates the specified application.
     */
    updateApp(req: operations.UpdateAppRequest, config?: AxiosRequestConfig): Promise<operations.UpdateAppResponse>;
    /**
     * Updates the specified settings for the specified replication job.
     */
    updateReplicationJob(req: operations.UpdateReplicationJobRequest, config?: AxiosRequestConfig): Promise<operations.UpdateReplicationJobResponse>;
}
