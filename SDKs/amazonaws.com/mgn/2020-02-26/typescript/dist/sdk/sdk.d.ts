import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://mgn.{region}.amazonaws.com", "https://mgn.{region}.amazonaws.com", "http://mgn.{region}.amazonaws.com.cn", "https://mgn.{region}.amazonaws.com.cn"];
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
 * The Application Migration Service service.
 *
 * @see {@link https://docs.aws.amazon.com/mgn/} - Amazon Web Services documentation
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
     * Archive application.
     */
    archiveApplication(req: operations.ArchiveApplicationRequest, config?: AxiosRequestConfig): Promise<operations.ArchiveApplicationResponse>;
    /**
     * Archive wave.
     */
    archiveWave(req: operations.ArchiveWaveRequest, config?: AxiosRequestConfig): Promise<operations.ArchiveWaveResponse>;
    /**
     * Associate applications to wave.
     */
    associateApplications(req: operations.AssociateApplicationsRequest, config?: AxiosRequestConfig): Promise<operations.AssociateApplicationsResponse>;
    /**
     * Associate source servers to application.
     */
    associateSourceServers(req: operations.AssociateSourceServersRequest, config?: AxiosRequestConfig): Promise<operations.AssociateSourceServersResponse>;
    /**
     * Allows the user to set the SourceServer.LifeCycle.state property for specific Source Server IDs to one of the following: READY_FOR_TEST or READY_FOR_CUTOVER. This command only works if the Source Server is already launchable (dataReplicationInfo.lagDuration is not null.)
     */
    changeServerLifeCycleState(req: operations.ChangeServerLifeCycleStateRequest, config?: AxiosRequestConfig): Promise<operations.ChangeServerLifeCycleStateResponse>;
    /**
     * Create application.
     */
    createApplication(req: operations.CreateApplicationRequest, config?: AxiosRequestConfig): Promise<operations.CreateApplicationResponse>;
    /**
     * Creates a new Launch Configuration Template.
     */
    createLaunchConfigurationTemplate(req: operations.CreateLaunchConfigurationTemplateRequest, config?: AxiosRequestConfig): Promise<operations.CreateLaunchConfigurationTemplateResponse>;
    /**
     * Creates a new ReplicationConfigurationTemplate.
     */
    createReplicationConfigurationTemplate(req: operations.CreateReplicationConfigurationTemplateRequest, config?: AxiosRequestConfig): Promise<operations.CreateReplicationConfigurationTemplateResponse>;
    /**
     * Create wave.
     */
    createWave(req: operations.CreateWaveRequest, config?: AxiosRequestConfig): Promise<operations.CreateWaveResponse>;
    /**
     * Delete application.
     */
    deleteApplication(req: operations.DeleteApplicationRequest, config?: AxiosRequestConfig): Promise<operations.DeleteApplicationResponse>;
    /**
     * Deletes a single Job by ID.
     */
    deleteJob(req: operations.DeleteJobRequest, config?: AxiosRequestConfig): Promise<operations.DeleteJobResponse>;
    /**
     * Deletes a single Launch Configuration Template by ID.
     */
    deleteLaunchConfigurationTemplate(req: operations.DeleteLaunchConfigurationTemplateRequest, config?: AxiosRequestConfig): Promise<operations.DeleteLaunchConfigurationTemplateResponse>;
    /**
     * Deletes a single Replication Configuration Template by ID
     */
    deleteReplicationConfigurationTemplate(req: operations.DeleteReplicationConfigurationTemplateRequest, config?: AxiosRequestConfig): Promise<operations.DeleteReplicationConfigurationTemplateResponse>;
    /**
     * Deletes a single source server by ID.
     */
    deleteSourceServer(req: operations.DeleteSourceServerRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSourceServerResponse>;
    /**
     * Deletes a given vCenter client by ID.
     */
    deleteVcenterClient(req: operations.DeleteVcenterClientRequest, config?: AxiosRequestConfig): Promise<operations.DeleteVcenterClientResponse>;
    /**
     * Delete wave.
     */
    deleteWave(req: operations.DeleteWaveRequest, config?: AxiosRequestConfig): Promise<operations.DeleteWaveResponse>;
    /**
     * Retrieves detailed job log items with paging.
     */
    describeJobLogItems(req: operations.DescribeJobLogItemsRequest, config?: AxiosRequestConfig): Promise<operations.DescribeJobLogItemsResponse>;
    /**
     * Returns a list of Jobs. Use the JobsID and fromDate and toData filters to limit which jobs are returned. The response is sorted by creationDataTime - latest date first. Jobs are normally created by the StartTest, StartCutover, and TerminateTargetInstances APIs. Jobs are also created by DiagnosticLaunch and TerminateDiagnosticInstances, which are APIs available only to *Support* and only used in response to relevant support tickets.
     */
    describeJobs(req: operations.DescribeJobsRequest, config?: AxiosRequestConfig): Promise<operations.DescribeJobsResponse>;
    /**
     * Lists all Launch Configuration Templates, filtered by Launch Configuration Template IDs
     */
    describeLaunchConfigurationTemplates(req: operations.DescribeLaunchConfigurationTemplatesRequest, config?: AxiosRequestConfig): Promise<operations.DescribeLaunchConfigurationTemplatesResponse>;
    /**
     * Lists all ReplicationConfigurationTemplates, filtered by Source Server IDs.
     */
    describeReplicationConfigurationTemplates(req: operations.DescribeReplicationConfigurationTemplatesRequest, config?: AxiosRequestConfig): Promise<operations.DescribeReplicationConfigurationTemplatesResponse>;
    /**
     * Retrieves all SourceServers or multiple SourceServers by ID.
     */
    describeSourceServers(req: operations.DescribeSourceServersRequest, config?: AxiosRequestConfig): Promise<operations.DescribeSourceServersResponse>;
    /**
     * Returns a list of the installed vCenter clients.
     */
    describeVcenterClients(req: operations.DescribeVcenterClientsRequest, config?: AxiosRequestConfig): Promise<operations.DescribeVcenterClientsResponse>;
    /**
     * Disassociate applications from wave.
     */
    disassociateApplications(req: operations.DisassociateApplicationsRequest, config?: AxiosRequestConfig): Promise<operations.DisassociateApplicationsResponse>;
    /**
     * Disassociate source servers from application.
     */
    disassociateSourceServers(req: operations.DisassociateSourceServersRequest, config?: AxiosRequestConfig): Promise<operations.DisassociateSourceServersResponse>;
    /**
     * Disconnects specific Source Servers from Application Migration Service. Data replication is stopped immediately. All AWS resources created by Application Migration Service for enabling the replication of these source servers will be terminated / deleted within 90 minutes. Launched Test or Cutover instances will NOT be terminated. If the agent on the source server has not been prevented from communicating with the Application Migration Service service, then it will receive a command to uninstall itself (within approximately 10 minutes). The following properties of the SourceServer will be changed immediately: dataReplicationInfo.dataReplicationState will be set to DISCONNECTED; The totalStorageBytes property for each of dataReplicationInfo.replicatedDisks will be set to zero; dataReplicationInfo.lagDuration and dataReplicationInfo.lagDuration will be nullified.
     */
    disconnectFromService(req: operations.DisconnectFromServiceRequest, config?: AxiosRequestConfig): Promise<operations.DisconnectFromServiceResponse>;
    /**
     * Finalizes the cutover immediately for specific Source Servers. All AWS resources created by Application Migration Service for enabling the replication of these source servers will be terminated / deleted within 90 minutes. Launched Test or Cutover instances will NOT be terminated. The AWS Replication Agent will receive a command to uninstall itself (within 10 minutes). The following properties of the SourceServer will be changed immediately: dataReplicationInfo.dataReplicationState will be changed to DISCONNECTED; The SourceServer.lifeCycle.state will be changed to CUTOVER; The totalStorageBytes property fo each of dataReplicationInfo.replicatedDisks will be set to zero; dataReplicationInfo.lagDuration and dataReplicationInfo.lagDuration will be nullified.
     */
    finalizeCutover(req: operations.FinalizeCutoverRequest, config?: AxiosRequestConfig): Promise<operations.FinalizeCutoverResponse>;
    /**
     * Lists all LaunchConfigurations available, filtered by Source Server IDs.
     */
    getLaunchConfiguration(req: operations.GetLaunchConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.GetLaunchConfigurationResponse>;
    /**
     * Lists all ReplicationConfigurations, filtered by Source Server ID.
     */
    getReplicationConfiguration(req: operations.GetReplicationConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.GetReplicationConfigurationResponse>;
    /**
     * Initialize Application Migration Service.
     */
    initializeService(req: operations.InitializeServiceRequest, config?: AxiosRequestConfig): Promise<operations.InitializeServiceResponse>;
    /**
     * Retrieves all applications or multiple applications by ID.
     */
    listApplications(req: operations.ListApplicationsRequest, config?: AxiosRequestConfig): Promise<operations.ListApplicationsResponse>;
    /**
     * List export errors.
     */
    listExportErrors(req: operations.ListExportErrorsRequest, config?: AxiosRequestConfig): Promise<operations.ListExportErrorsResponse>;
    /**
     * List exports.
     */
    listExports(req: operations.ListExportsRequest, config?: AxiosRequestConfig): Promise<operations.ListExportsResponse>;
    /**
     * List import errors.
     */
    listImportErrors(req: operations.ListImportErrorsRequest, config?: AxiosRequestConfig): Promise<operations.ListImportErrorsResponse>;
    /**
     * List imports.
     */
    listImports(req: operations.ListImportsRequest, config?: AxiosRequestConfig): Promise<operations.ListImportsResponse>;
    /**
     * List source server post migration custom actions.
     */
    listSourceServerActions(req: operations.ListSourceServerActionsRequest, config?: AxiosRequestConfig): Promise<operations.ListSourceServerActionsResponse>;
    /**
     * List all tags for your Application Migration Service resources.
     */
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     * List template post migration custom actions.
     */
    listTemplateActions(req: operations.ListTemplateActionsRequest, config?: AxiosRequestConfig): Promise<operations.ListTemplateActionsResponse>;
    /**
     * Retrieves all waves or multiple waves by ID.
     */
    listWaves(req: operations.ListWavesRequest, config?: AxiosRequestConfig): Promise<operations.ListWavesResponse>;
    /**
     * Archives specific Source Servers by setting the SourceServer.isArchived property to true for specified SourceServers by ID. This command only works for SourceServers with a lifecycle. state which equals DISCONNECTED or CUTOVER.
     */
    markAsArchived(req: operations.MarkAsArchivedRequest, config?: AxiosRequestConfig): Promise<operations.MarkAsArchivedResponse>;
    /**
     * Put source server post migration custom action.
     */
    putSourceServerAction(req: operations.PutSourceServerActionRequest, config?: AxiosRequestConfig): Promise<operations.PutSourceServerActionResponse>;
    /**
     * Put template post migration custom action.
     */
    putTemplateAction(req: operations.PutTemplateActionRequest, config?: AxiosRequestConfig): Promise<operations.PutTemplateActionResponse>;
    /**
     * Remove source server post migration custom action.
     */
    removeSourceServerAction(req: operations.RemoveSourceServerActionRequest, config?: AxiosRequestConfig): Promise<operations.RemoveSourceServerActionResponse>;
    /**
     * Remove template post migration custom action.
     */
    removeTemplateAction(req: operations.RemoveTemplateActionRequest, config?: AxiosRequestConfig): Promise<operations.RemoveTemplateActionResponse>;
    /**
     * Causes the data replication initiation sequence to begin immediately upon next Handshake for specified SourceServer IDs, regardless of when the previous initiation started. This command will not work if the SourceServer is not stalled or is in a DISCONNECTED or STOPPED state.
     */
    retryDataReplication(req: operations.RetryDataReplicationRequest, config?: AxiosRequestConfig): Promise<operations.RetryDataReplicationResponse>;
    /**
     * Launches a Cutover Instance for specific Source Servers. This command starts a LAUNCH job whose initiatedBy property is StartCutover and changes the SourceServer.lifeCycle.state property to CUTTING_OVER.
     */
    startCutover(req: operations.StartCutoverRequest, config?: AxiosRequestConfig): Promise<operations.StartCutoverResponse>;
    /**
     * Start export.
     */
    startExport(req: operations.StartExportRequest, config?: AxiosRequestConfig): Promise<operations.StartExportResponse>;
    /**
     * Start import.
     */
    startImport(req: operations.StartImportRequest, config?: AxiosRequestConfig): Promise<operations.StartImportResponse>;
    /**
     * Starts replication for SNAPSHOT_SHIPPING agents.
     */
    startReplication(req: operations.StartReplicationRequest, config?: AxiosRequestConfig): Promise<operations.StartReplicationResponse>;
    /**
     * Launches a Test Instance for specific Source Servers. This command starts a LAUNCH job whose initiatedBy property is StartTest and changes the SourceServer.lifeCycle.state property to TESTING.
     */
    startTest(req: operations.StartTestRequest, config?: AxiosRequestConfig): Promise<operations.StartTestResponse>;
    /**
     * Adds or overwrites only the specified tags for the specified Application Migration Service resource or resources. When you specify an existing tag key, the value is overwritten with the new value. Each resource can have a maximum of 50 tags. Each tag consists of a key and optional value.
     */
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * Starts a job that terminates specific launched EC2 Test and Cutover instances. This command will not work for any Source Server with a lifecycle.state of TESTING, CUTTING_OVER, or CUTOVER.
     */
    terminateTargetInstances(req: operations.TerminateTargetInstancesRequest, config?: AxiosRequestConfig): Promise<operations.TerminateTargetInstancesResponse>;
    /**
     * Unarchive application.
     */
    unarchiveApplication(req: operations.UnarchiveApplicationRequest, config?: AxiosRequestConfig): Promise<operations.UnarchiveApplicationResponse>;
    /**
     * Unarchive wave.
     */
    unarchiveWave(req: operations.UnarchiveWaveRequest, config?: AxiosRequestConfig): Promise<operations.UnarchiveWaveResponse>;
    /**
     * Deletes the specified set of tags from the specified set of Application Migration Service resources.
     */
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
    /**
     * Update application.
     */
    updateApplication(req: operations.UpdateApplicationRequest, config?: AxiosRequestConfig): Promise<operations.UpdateApplicationResponse>;
    /**
     * Updates multiple LaunchConfigurations by Source Server ID.
     */
    updateLaunchConfiguration(req: operations.UpdateLaunchConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.UpdateLaunchConfigurationResponse>;
    /**
     * Updates an existing Launch Configuration Template by ID.
     */
    updateLaunchConfigurationTemplate(req: operations.UpdateLaunchConfigurationTemplateRequest, config?: AxiosRequestConfig): Promise<operations.UpdateLaunchConfigurationTemplateResponse>;
    /**
     * Allows you to update multiple ReplicationConfigurations by Source Server ID.
     */
    updateReplicationConfiguration(req: operations.UpdateReplicationConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.UpdateReplicationConfigurationResponse>;
    /**
     * Updates multiple ReplicationConfigurationTemplates by ID.
     */
    updateReplicationConfigurationTemplate(req: operations.UpdateReplicationConfigurationTemplateRequest, config?: AxiosRequestConfig): Promise<operations.UpdateReplicationConfigurationTemplateResponse>;
    /**
     * Allows you to change between the AGENT_BASED replication type and the SNAPSHOT_SHIPPING replication type.
     */
    updateSourceServerReplicationType(req: operations.UpdateSourceServerReplicationTypeRequest, config?: AxiosRequestConfig): Promise<operations.UpdateSourceServerReplicationTypeResponse>;
    /**
     * Update wave.
     */
    updateWave(req: operations.UpdateWaveRequest, config?: AxiosRequestConfig): Promise<operations.UpdateWaveResponse>;
}
