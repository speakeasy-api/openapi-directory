import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://robomaker.{region}.amazonaws.com", "https://robomaker.{region}.amazonaws.com", "http://robomaker.{region}.amazonaws.com.cn", "https://robomaker.{region}.amazonaws.com.cn"];
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
 * This section provides documentation for the AWS RoboMaker API operations.
 *
 * @see {@link https://docs.aws.amazon.com/robomaker/} - Amazon Web Services documentation
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
     * Deletes one or more worlds in a batch operation.
     */
    batchDeleteWorlds(req: operations.BatchDeleteWorldsRequest, config?: AxiosRequestConfig): Promise<operations.BatchDeleteWorldsResponse>;
    /**
     * Describes one or more simulation jobs.
     */
    batchDescribeSimulationJob(req: operations.BatchDescribeSimulationJobRequest, config?: AxiosRequestConfig): Promise<operations.BatchDescribeSimulationJobResponse>;
    /**
     * <p>Cancels the specified deployment job.</p> <important> <p>This API will no longer be supported as of May 2, 2022. Use it to remove resources that were created for Deployment Service.</p> </important>
     */
    cancelDeploymentJob(req: operations.CancelDeploymentJobRequest, config?: AxiosRequestConfig): Promise<operations.CancelDeploymentJobResponse>;
    /**
     * Cancels the specified simulation job.
     */
    cancelSimulationJob(req: operations.CancelSimulationJobRequest, config?: AxiosRequestConfig): Promise<operations.CancelSimulationJobResponse>;
    /**
     * Cancels a simulation job batch. When you cancel a simulation job batch, you are also cancelling all of the active simulation jobs created as part of the batch.
     */
    cancelSimulationJobBatch(req: operations.CancelSimulationJobBatchRequest, config?: AxiosRequestConfig): Promise<operations.CancelSimulationJobBatchResponse>;
    /**
     * Cancels the specified export job.
     */
    cancelWorldExportJob(req: operations.CancelWorldExportJobRequest, config?: AxiosRequestConfig): Promise<operations.CancelWorldExportJobResponse>;
    /**
     * Cancels the specified world generator job.
     */
    cancelWorldGenerationJob(req: operations.CancelWorldGenerationJobRequest, config?: AxiosRequestConfig): Promise<operations.CancelWorldGenerationJobResponse>;
    /**
     * <p>Deploys a specific version of a robot application to robots in a fleet.</p> <important> <p>This API is no longer supported and will throw an error if used.</p> </important> <p>The robot application must have a numbered <code>applicationVersion</code> for consistency reasons. To create a new version, use <code>CreateRobotApplicationVersion</code> or see <a href="https://docs.aws.amazon.com/robomaker/latest/dg/create-robot-application-version.html">Creating a Robot Application Version</a>. </p> <note> <p>After 90 days, deployment jobs expire and will be deleted. They will no longer be accessible. </p> </note>
     */
    createDeploymentJob(req: operations.CreateDeploymentJobRequest, config?: AxiosRequestConfig): Promise<operations.CreateDeploymentJobResponse>;
    /**
     * <p>Creates a fleet, a logical group of robots running the same robot application.</p> <important> <p>This API is no longer supported and will throw an error if used.</p> </important>
     */
    createFleet(req: operations.CreateFleetRequest, config?: AxiosRequestConfig): Promise<operations.CreateFleetResponse>;
    /**
     * <p>Creates a robot.</p> <important> <p>This API is no longer supported and will throw an error if used.</p> </important>
     */
    createRobot(req: operations.CreateRobotRequest, config?: AxiosRequestConfig): Promise<operations.CreateRobotResponse>;
    /**
     * Creates a robot application.
     */
    createRobotApplication(req: operations.CreateRobotApplicationRequest, config?: AxiosRequestConfig): Promise<operations.CreateRobotApplicationResponse>;
    /**
     * Creates a version of a robot application.
     */
    createRobotApplicationVersion(req: operations.CreateRobotApplicationVersionRequest, config?: AxiosRequestConfig): Promise<operations.CreateRobotApplicationVersionResponse>;
    /**
     * Creates a simulation application.
     */
    createSimulationApplication(req: operations.CreateSimulationApplicationRequest, config?: AxiosRequestConfig): Promise<operations.CreateSimulationApplicationResponse>;
    /**
     * Creates a simulation application with a specific revision id.
     */
    createSimulationApplicationVersion(req: operations.CreateSimulationApplicationVersionRequest, config?: AxiosRequestConfig): Promise<operations.CreateSimulationApplicationVersionResponse>;
    /**
     * <p>Creates a simulation job.</p> <note> <p>After 90 days, simulation jobs expire and will be deleted. They will no longer be accessible. </p> </note>
     */
    createSimulationJob(req: operations.CreateSimulationJobRequest, config?: AxiosRequestConfig): Promise<operations.CreateSimulationJobResponse>;
    /**
     * Creates a world export job.
     */
    createWorldExportJob(req: operations.CreateWorldExportJobRequest, config?: AxiosRequestConfig): Promise<operations.CreateWorldExportJobResponse>;
    /**
     * Creates worlds using the specified template.
     */
    createWorldGenerationJob(req: operations.CreateWorldGenerationJobRequest, config?: AxiosRequestConfig): Promise<operations.CreateWorldGenerationJobResponse>;
    /**
     * Creates a world template.
     */
    createWorldTemplate(req: operations.CreateWorldTemplateRequest, config?: AxiosRequestConfig): Promise<operations.CreateWorldTemplateResponse>;
    /**
     * <p>Deletes a fleet.</p> <important> <p>This API will no longer be supported as of May 2, 2022. Use it to remove resources that were created for Deployment Service.</p> </important>
     */
    deleteFleet(req: operations.DeleteFleetRequest, config?: AxiosRequestConfig): Promise<operations.DeleteFleetResponse>;
    /**
     * <p>Deletes a robot.</p> <important> <p>This API will no longer be supported as of May 2, 2022. Use it to remove resources that were created for Deployment Service.</p> </important>
     */
    deleteRobot(req: operations.DeleteRobotRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRobotResponse>;
    /**
     * Deletes a robot application.
     */
    deleteRobotApplication(req: operations.DeleteRobotApplicationRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRobotApplicationResponse>;
    /**
     * Deletes a simulation application.
     */
    deleteSimulationApplication(req: operations.DeleteSimulationApplicationRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSimulationApplicationResponse>;
    /**
     * Deletes a world template.
     */
    deleteWorldTemplate(req: operations.DeleteWorldTemplateRequest, config?: AxiosRequestConfig): Promise<operations.DeleteWorldTemplateResponse>;
    /**
     * <p>Deregisters a robot.</p> <important> <p>This API will no longer be supported as of May 2, 2022. Use it to remove resources that were created for Deployment Service.</p> </important>
     */
    deregisterRobot(req: operations.DeregisterRobotRequest, config?: AxiosRequestConfig): Promise<operations.DeregisterRobotResponse>;
    /**
     * <p>Describes a deployment job.</p> <important> <p>This API will no longer be supported as of May 2, 2022. Use it to remove resources that were created for Deployment Service.</p> </important>
     */
    describeDeploymentJob(req: operations.DescribeDeploymentJobRequest, config?: AxiosRequestConfig): Promise<operations.DescribeDeploymentJobResponse>;
    /**
     * <p>Describes a fleet.</p> <important> <p>This API will no longer be supported as of May 2, 2022. Use it to remove resources that were created for Deployment Service.</p> </important>
     */
    describeFleet(req: operations.DescribeFleetRequest, config?: AxiosRequestConfig): Promise<operations.DescribeFleetResponse>;
    /**
     * <p>Describes a robot.</p> <important> <p>This API will no longer be supported as of May 2, 2022. Use it to remove resources that were created for Deployment Service.</p> </important>
     */
    describeRobot(req: operations.DescribeRobotRequest, config?: AxiosRequestConfig): Promise<operations.DescribeRobotResponse>;
    /**
     * Describes a robot application.
     */
    describeRobotApplication(req: operations.DescribeRobotApplicationRequest, config?: AxiosRequestConfig): Promise<operations.DescribeRobotApplicationResponse>;
    /**
     * Describes a simulation application.
     */
    describeSimulationApplication(req: operations.DescribeSimulationApplicationRequest, config?: AxiosRequestConfig): Promise<operations.DescribeSimulationApplicationResponse>;
    /**
     * Describes a simulation job.
     */
    describeSimulationJob(req: operations.DescribeSimulationJobRequest, config?: AxiosRequestConfig): Promise<operations.DescribeSimulationJobResponse>;
    /**
     * Describes a simulation job batch.
     */
    describeSimulationJobBatch(req: operations.DescribeSimulationJobBatchRequest, config?: AxiosRequestConfig): Promise<operations.DescribeSimulationJobBatchResponse>;
    /**
     * Describes a world.
     */
    describeWorld(req: operations.DescribeWorldRequest, config?: AxiosRequestConfig): Promise<operations.DescribeWorldResponse>;
    /**
     * Describes a world export job.
     */
    describeWorldExportJob(req: operations.DescribeWorldExportJobRequest, config?: AxiosRequestConfig): Promise<operations.DescribeWorldExportJobResponse>;
    /**
     * Describes a world generation job.
     */
    describeWorldGenerationJob(req: operations.DescribeWorldGenerationJobRequest, config?: AxiosRequestConfig): Promise<operations.DescribeWorldGenerationJobResponse>;
    /**
     * Describes a world template.
     */
    describeWorldTemplate(req: operations.DescribeWorldTemplateRequest, config?: AxiosRequestConfig): Promise<operations.DescribeWorldTemplateResponse>;
    /**
     * Gets the world template body.
     */
    getWorldTemplateBody(req: operations.GetWorldTemplateBodyRequest, config?: AxiosRequestConfig): Promise<operations.GetWorldTemplateBodyResponse>;
    /**
     * <p>Returns a list of deployment jobs for a fleet. You can optionally provide filters to retrieve specific deployment jobs.</p> <important> <p>This API will no longer be supported as of May 2, 2022. Use it to remove resources that were created for Deployment Service.</p> </important>
     */
    listDeploymentJobs(req: operations.ListDeploymentJobsRequest, config?: AxiosRequestConfig): Promise<operations.ListDeploymentJobsResponse>;
    /**
     * <p>Returns a list of fleets. You can optionally provide filters to retrieve specific fleets.</p> <important> <p>This API will no longer be supported as of May 2, 2022. Use it to remove resources that were created for Deployment Service.</p> </important>
     */
    listFleets(req: operations.ListFleetsRequest, config?: AxiosRequestConfig): Promise<operations.ListFleetsResponse>;
    /**
     * Returns a list of robot application. You can optionally provide filters to retrieve specific robot applications.
     */
    listRobotApplications(req: operations.ListRobotApplicationsRequest, config?: AxiosRequestConfig): Promise<operations.ListRobotApplicationsResponse>;
    /**
     * <p>Returns a list of robots. You can optionally provide filters to retrieve specific robots.</p> <important> <p>This API will no longer be supported as of May 2, 2022. Use it to remove resources that were created for Deployment Service.</p> </important>
     */
    listRobots(req: operations.ListRobotsRequest, config?: AxiosRequestConfig): Promise<operations.ListRobotsResponse>;
    /**
     * Returns a list of simulation applications. You can optionally provide filters to retrieve specific simulation applications.
     */
    listSimulationApplications(req: operations.ListSimulationApplicationsRequest, config?: AxiosRequestConfig): Promise<operations.ListSimulationApplicationsResponse>;
    /**
     * Returns a list simulation job batches. You can optionally provide filters to retrieve specific simulation batch jobs.
     */
    listSimulationJobBatches(req: operations.ListSimulationJobBatchesRequest, config?: AxiosRequestConfig): Promise<operations.ListSimulationJobBatchesResponse>;
    /**
     * Returns a list of simulation jobs. You can optionally provide filters to retrieve specific simulation jobs.
     */
    listSimulationJobs(req: operations.ListSimulationJobsRequest, config?: AxiosRequestConfig): Promise<operations.ListSimulationJobsResponse>;
    /**
     * Lists all tags on a AWS RoboMaker resource.
     */
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     * Lists world export jobs.
     */
    listWorldExportJobs(req: operations.ListWorldExportJobsRequest, config?: AxiosRequestConfig): Promise<operations.ListWorldExportJobsResponse>;
    /**
     * Lists world generator jobs.
     */
    listWorldGenerationJobs(req: operations.ListWorldGenerationJobsRequest, config?: AxiosRequestConfig): Promise<operations.ListWorldGenerationJobsResponse>;
    /**
     * Lists world templates.
     */
    listWorldTemplates(req: operations.ListWorldTemplatesRequest, config?: AxiosRequestConfig): Promise<operations.ListWorldTemplatesResponse>;
    /**
     * Lists worlds.
     */
    listWorlds(req: operations.ListWorldsRequest, config?: AxiosRequestConfig): Promise<operations.ListWorldsResponse>;
    /**
     * <p>Registers a robot with a fleet.</p> <important> <p>This API is no longer supported and will throw an error if used.</p> </important>
     */
    registerRobot(req: operations.RegisterRobotRequest, config?: AxiosRequestConfig): Promise<operations.RegisterRobotResponse>;
    /**
     * Restarts a running simulation job.
     */
    restartSimulationJob(req: operations.RestartSimulationJobRequest, config?: AxiosRequestConfig): Promise<operations.RestartSimulationJobResponse>;
    /**
     * Starts a new simulation job batch. The batch is defined using one or more <code>SimulationJobRequest</code> objects.
     */
    startSimulationJobBatch(req: operations.StartSimulationJobBatchRequest, config?: AxiosRequestConfig): Promise<operations.StartSimulationJobBatchResponse>;
    /**
     * <p>Syncrhonizes robots in a fleet to the latest deployment. This is helpful if robots were added after a deployment.</p> <important> <p>This API will no longer be supported as of May 2, 2022. Use it to remove resources that were created for Deployment Service.</p> </important>
     */
    syncDeploymentJob(req: operations.SyncDeploymentJobRequest, config?: AxiosRequestConfig): Promise<operations.SyncDeploymentJobResponse>;
    /**
     * <p>Adds or edits tags for a AWS RoboMaker resource.</p> <p>Each tag consists of a tag key and a tag value. Tag keys and tag values are both required, but tag values can be empty strings. </p> <p>For information about the rules that apply to tag keys and tag values, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/allocation-tag-restrictions.html">User-Defined Tag Restrictions</a> in the <i>AWS Billing and Cost Management User Guide</i>. </p>
     */
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * <p>Removes the specified tags from the specified AWS RoboMaker resource.</p> <p>To remove a tag, specify the tag key. To change the tag value of an existing tag key, use <a href="https://docs.aws.amazon.com/robomaker/latest/dg/API_TagResource.html"> <code>TagResource</code> </a>. </p>
     */
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
    /**
     * Updates a robot application.
     */
    updateRobotApplication(req: operations.UpdateRobotApplicationRequest, config?: AxiosRequestConfig): Promise<operations.UpdateRobotApplicationResponse>;
    /**
     * Updates a simulation application.
     */
    updateSimulationApplication(req: operations.UpdateSimulationApplicationRequest, config?: AxiosRequestConfig): Promise<operations.UpdateSimulationApplicationResponse>;
    /**
     * Updates a world template.
     */
    updateWorldTemplate(req: operations.UpdateWorldTemplateRequest, config?: AxiosRequestConfig): Promise<operations.UpdateWorldTemplateResponse>;
}
