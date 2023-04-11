import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://drs.{region}.amazonaws.com", "https://drs.{region}.amazonaws.com", "http://drs.{region}.amazonaws.com.cn", "https://drs.{region}.amazonaws.com.cn"];
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
 * AWS Elastic Disaster Recovery Service.
 *
 * @see {@link https://docs.aws.amazon.com/drs/} - Amazon Web Services documentation
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
     * Create an extended source server in the target Account based on the source server in staging account.
     */
    createExtendedSourceServer(req: operations.CreateExtendedSourceServerRequest, config?: AxiosRequestConfig): Promise<operations.CreateExtendedSourceServerResponse>;
    /**
     * Creates a new ReplicationConfigurationTemplate.
     */
    createReplicationConfigurationTemplate(req: operations.CreateReplicationConfigurationTemplateRequest, config?: AxiosRequestConfig): Promise<operations.CreateReplicationConfigurationTemplateResponse>;
    /**
     * Deletes a single Job by ID.
     */
    deleteJob(req: operations.DeleteJobRequest, config?: AxiosRequestConfig): Promise<operations.DeleteJobResponse>;
    /**
     * Deletes a single Recovery Instance by ID. This deletes the Recovery Instance resource from Elastic Disaster Recovery. The Recovery Instance must be disconnected first in order to delete it.
     */
    deleteRecoveryInstance(req: operations.DeleteRecoveryInstanceRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRecoveryInstanceResponse>;
    /**
     * Deletes a single Replication Configuration Template by ID
     */
    deleteReplicationConfigurationTemplate(req: operations.DeleteReplicationConfigurationTemplateRequest, config?: AxiosRequestConfig): Promise<operations.DeleteReplicationConfigurationTemplateResponse>;
    /**
     * Deletes a single Source Server by ID. The Source Server must be disconnected first.
     */
    deleteSourceServer(req: operations.DeleteSourceServerRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSourceServerResponse>;
    /**
     * Retrieves a detailed Job log with pagination.
     */
    describeJobLogItems(req: operations.DescribeJobLogItemsRequest, config?: AxiosRequestConfig): Promise<operations.DescribeJobLogItemsResponse>;
    /**
     * Returns a list of Jobs. Use the JobsID and fromDate and toDate filters to limit which jobs are returned. The response is sorted by creationDataTime - latest date first. Jobs are created by the StartRecovery, TerminateRecoveryInstances and StartFailbackLaunch APIs. Jobs are also created by DiagnosticLaunch and TerminateDiagnosticInstances, which are APIs available only to *Support* and only used in response to relevant support tickets.
     */
    describeJobs(req: operations.DescribeJobsRequest, config?: AxiosRequestConfig): Promise<operations.DescribeJobsResponse>;
    /**
     * Lists all Recovery Instances or multiple Recovery Instances by ID.
     */
    describeRecoveryInstances(req: operations.DescribeRecoveryInstancesRequest, config?: AxiosRequestConfig): Promise<operations.DescribeRecoveryInstancesResponse>;
    /**
     * Lists all Recovery Snapshots for a single Source Server.
     */
    describeRecoverySnapshots(req: operations.DescribeRecoverySnapshotsRequest, config?: AxiosRequestConfig): Promise<operations.DescribeRecoverySnapshotsResponse>;
    /**
     * Lists all ReplicationConfigurationTemplates, filtered by Source Server IDs.
     */
    describeReplicationConfigurationTemplates(req: operations.DescribeReplicationConfigurationTemplatesRequest, config?: AxiosRequestConfig): Promise<operations.DescribeReplicationConfigurationTemplatesResponse>;
    /**
     * Lists all Source Servers or multiple Source Servers filtered by ID.
     */
    describeSourceServers(req: operations.DescribeSourceServersRequest, config?: AxiosRequestConfig): Promise<operations.DescribeSourceServersResponse>;
    /**
     * Disconnect a Recovery Instance from Elastic Disaster Recovery. Data replication is stopped immediately. All AWS resources created by Elastic Disaster Recovery for enabling the replication of the Recovery Instance will be terminated / deleted within 90 minutes. If the agent on the Recovery Instance has not been prevented from communicating with the Elastic Disaster Recovery service, then it will receive a command to uninstall itself (within approximately 10 minutes). The following properties of the Recovery Instance will be changed immediately: dataReplicationInfo.dataReplicationState will be set to DISCONNECTED; The totalStorageBytes property for each of dataReplicationInfo.replicatedDisks will be set to zero; dataReplicationInfo.lagDuration and dataReplicationInfo.lagDuration will be nullified.
     */
    disconnectRecoveryInstance(req: operations.DisconnectRecoveryInstanceRequest, config?: AxiosRequestConfig): Promise<operations.DisconnectRecoveryInstanceResponse>;
    /**
     * Disconnects a specific Source Server from Elastic Disaster Recovery. Data replication is stopped immediately. All AWS resources created by Elastic Disaster Recovery for enabling the replication of the Source Server will be terminated / deleted within 90 minutes. You cannot disconnect a Source Server if it has a Recovery Instance. If the agent on the Source Server has not been prevented from communicating with the Elastic Disaster Recovery service, then it will receive a command to uninstall itself (within approximately 10 minutes). The following properties of the SourceServer will be changed immediately: dataReplicationInfo.dataReplicationState will be set to DISCONNECTED; The totalStorageBytes property for each of dataReplicationInfo.replicatedDisks will be set to zero; dataReplicationInfo.lagDuration and dataReplicationInfo.lagDuration will be nullified.
     */
    disconnectSourceServer(req: operations.DisconnectSourceServerRequest, config?: AxiosRequestConfig): Promise<operations.DisconnectSourceServerResponse>;
    /**
     * Lists all Failback ReplicationConfigurations, filtered by Recovery Instance ID.
     */
    getFailbackReplicationConfiguration(req: operations.GetFailbackReplicationConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.GetFailbackReplicationConfigurationResponse>;
    /**
     * Gets a LaunchConfiguration, filtered by Source Server IDs.
     */
    getLaunchConfiguration(req: operations.GetLaunchConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.GetLaunchConfigurationResponse>;
    /**
     * Gets a ReplicationConfiguration, filtered by Source Server ID.
     */
    getReplicationConfiguration(req: operations.GetReplicationConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.GetReplicationConfigurationResponse>;
    /**
     * Initialize Elastic Disaster Recovery.
     */
    initializeService(req: operations.InitializeServiceRequest, config?: AxiosRequestConfig): Promise<operations.InitializeServiceResponse>;
    /**
     * Returns a list of source servers on a staging account that are extensible, which means that: a. The source server is not already extended into this Account. b. The source server on the Account we’re reading from is not an extension of another source server.
     */
    listExtensibleSourceServers(req: operations.ListExtensibleSourceServersRequest, config?: AxiosRequestConfig): Promise<operations.ListExtensibleSourceServersResponse>;
    /**
     * Returns an array of staging accounts for existing extended source servers.
     */
    listStagingAccounts(req: operations.ListStagingAccountsRequest, config?: AxiosRequestConfig): Promise<operations.ListStagingAccountsResponse>;
    /**
     * List all tags for your Elastic Disaster Recovery resources.
     */
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     * Causes the data replication initiation sequence to begin immediately upon next Handshake for the specified Source Server ID, regardless of when the previous initiation started. This command will work only if the Source Server is stalled or is in a DISCONNECTED or STOPPED state.
     */
    retryDataReplication(req: operations.RetryDataReplicationRequest, config?: AxiosRequestConfig): Promise<operations.RetryDataReplicationResponse>;
    /**
     * Start replication to origin / target region - applies only to protected instances that originated in EC2. For recovery instances on target region - starts replication back to origin region. For failback instances on origin region - starts replication to target region to re-protect them.
     */
    reverseReplication(req: operations.ReverseReplicationRequest, config?: AxiosRequestConfig): Promise<operations.ReverseReplicationResponse>;
    /**
     * Initiates a Job for launching the machine that is being failed back to from the specified Recovery Instance. This will run conversion on the failback client and will reboot your machine, thus completing the failback process.
     */
    startFailbackLaunch(req: operations.StartFailbackLaunchRequest, config?: AxiosRequestConfig): Promise<operations.StartFailbackLaunchResponse>;
    /**
     * Launches Recovery Instances for the specified Source Servers. For each Source Server you may choose a point in time snapshot to launch from, or use an on demand snapshot.
     */
    startRecovery(req: operations.StartRecoveryRequest, config?: AxiosRequestConfig): Promise<operations.StartRecoveryResponse>;
    /**
     * Starts replication for a stopped Source Server. This action would make the Source Server protected again and restart billing for it.
     */
    startReplication(req: operations.StartReplicationRequest, config?: AxiosRequestConfig): Promise<operations.StartReplicationResponse>;
    /**
     * Stops the failback process for a specified Recovery Instance. This changes the Failback State of the Recovery Instance back to FAILBACK_NOT_STARTED.
     */
    stopFailback(req: operations.StopFailbackRequest, config?: AxiosRequestConfig): Promise<operations.StopFailbackResponse>;
    /**
     * Stops replication for a Source Server. This action would make the Source Server unprotected, delete its existing snapshots and stop billing for it.
     */
    stopReplication(req: operations.StopReplicationRequest, config?: AxiosRequestConfig): Promise<operations.StopReplicationResponse>;
    /**
     * Adds or overwrites only the specified tags for the specified Elastic Disaster Recovery resource or resources. When you specify an existing tag key, the value is overwritten with the new value. Each resource can have a maximum of 50 tags. Each tag consists of a key and optional value.
     */
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * Initiates a Job for terminating the EC2 resources associated with the specified Recovery Instances, and then will delete the Recovery Instances from the Elastic Disaster Recovery service.
     */
    terminateRecoveryInstances(req: operations.TerminateRecoveryInstancesRequest, config?: AxiosRequestConfig): Promise<operations.TerminateRecoveryInstancesResponse>;
    /**
     * Deletes the specified set of tags from the specified set of Elastic Disaster Recovery resources.
     */
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
    /**
     * Allows you to update the failback replication configuration of a Recovery Instance by ID.
     */
    updateFailbackReplicationConfiguration(req: operations.UpdateFailbackReplicationConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.UpdateFailbackReplicationConfigurationResponse>;
    /**
     * Updates a LaunchConfiguration by Source Server ID.
     */
    updateLaunchConfiguration(req: operations.UpdateLaunchConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.UpdateLaunchConfigurationResponse>;
    /**
     * Allows you to update a ReplicationConfiguration by Source Server ID.
     */
    updateReplicationConfiguration(req: operations.UpdateReplicationConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.UpdateReplicationConfigurationResponse>;
    /**
     * Updates a ReplicationConfigurationTemplate by ID.
     */
    updateReplicationConfigurationTemplate(req: operations.UpdateReplicationConfigurationTemplateRequest, config?: AxiosRequestConfig): Promise<operations.UpdateReplicationConfigurationTemplateResponse>;
}
