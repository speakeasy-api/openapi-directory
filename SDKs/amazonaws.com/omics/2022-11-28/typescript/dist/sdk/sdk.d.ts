import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://omics.{region}.amazonaws.com", "https://omics.{region}.amazonaws.com", "http://omics.{region}.amazonaws.com.cn", "https://omics.{region}.amazonaws.com.cn"];
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
 * This is the <i>Amazon Omics API Reference</i>. For an introduction to the service, see <a href="https://docs.aws.amazon.com/omics/latest/dev/">What is Amazon Omics?</a> in the <i>Amazon Omics Developer Guide</i>.
 *
 * @see {@link https://docs.aws.amazon.com/omics/} - Amazon Web Services documentation
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
     * Deletes one or more read sets.
     */
    batchDeleteReadSet(req: operations.BatchDeleteReadSetRequest, config?: AxiosRequestConfig): Promise<operations.BatchDeleteReadSetResponse>;
    /**
     * Cancels an annotation import job.
     */
    cancelAnnotationImportJob(req: operations.CancelAnnotationImportJobRequest, config?: AxiosRequestConfig): Promise<operations.CancelAnnotationImportJobResponse>;
    /**
     * Cancels a run.
     */
    cancelRun(req: operations.CancelRunRequest, config?: AxiosRequestConfig): Promise<operations.CancelRunResponse>;
    /**
     * Cancels a variant import job.
     */
    cancelVariantImportJob(req: operations.CancelVariantImportJobRequest, config?: AxiosRequestConfig): Promise<operations.CancelVariantImportJobResponse>;
    /**
     * Creates an annotation store.
     */
    createAnnotationStore(req: operations.CreateAnnotationStoreRequest, config?: AxiosRequestConfig): Promise<operations.CreateAnnotationStoreResponse>;
    /**
     * Creates a reference store.
     */
    createReferenceStore(req: operations.CreateReferenceStoreRequest, config?: AxiosRequestConfig): Promise<operations.CreateReferenceStoreResponse>;
    /**
     * Creates a run group.
     */
    createRunGroup(req: operations.CreateRunGroupRequest, config?: AxiosRequestConfig): Promise<operations.CreateRunGroupResponse>;
    /**
     * Creates a sequence store.
     */
    createSequenceStore(req: operations.CreateSequenceStoreRequest, config?: AxiosRequestConfig): Promise<operations.CreateSequenceStoreResponse>;
    /**
     * Creates a variant store.
     */
    createVariantStore(req: operations.CreateVariantStoreRequest, config?: AxiosRequestConfig): Promise<operations.CreateVariantStoreResponse>;
    /**
     * Creates a workflow.
     */
    createWorkflow(req: operations.CreateWorkflowRequest, config?: AxiosRequestConfig): Promise<operations.CreateWorkflowResponse>;
    /**
     * Deletes an annotation store.
     */
    deleteAnnotationStore(req: operations.DeleteAnnotationStoreRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAnnotationStoreResponse>;
    /**
     * Deletes a genome reference.
     */
    deleteReference(req: operations.DeleteReferenceRequest, config?: AxiosRequestConfig): Promise<operations.DeleteReferenceResponse>;
    /**
     * Deletes a genome reference store.
     */
    deleteReferenceStore(req: operations.DeleteReferenceStoreRequest, config?: AxiosRequestConfig): Promise<operations.DeleteReferenceStoreResponse>;
    /**
     * Deletes a workflow run.
     */
    deleteRun(req: operations.DeleteRunRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRunResponse>;
    /**
     * Deletes a workflow run group.
     */
    deleteRunGroup(req: operations.DeleteRunGroupRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRunGroupResponse>;
    /**
     * Deletes a sequence store.
     */
    deleteSequenceStore(req: operations.DeleteSequenceStoreRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSequenceStoreResponse>;
    /**
     * Deletes a variant store.
     */
    deleteVariantStore(req: operations.DeleteVariantStoreRequest, config?: AxiosRequestConfig): Promise<operations.DeleteVariantStoreResponse>;
    /**
     * Deletes a workflow.
     */
    deleteWorkflow(req: operations.DeleteWorkflowRequest, config?: AxiosRequestConfig): Promise<operations.DeleteWorkflowResponse>;
    /**
     * Gets information about an annotation import job.
     */
    getAnnotationImportJob(req: operations.GetAnnotationImportJobRequest, config?: AxiosRequestConfig): Promise<operations.GetAnnotationImportJobResponse>;
    /**
     * Gets information about an annotation store.
     */
    getAnnotationStore(req: operations.GetAnnotationStoreRequest, config?: AxiosRequestConfig): Promise<operations.GetAnnotationStoreResponse>;
    /**
     * Gets a file from a read set.
     */
    getReadSet(req: operations.GetReadSetRequest, config?: AxiosRequestConfig): Promise<operations.GetReadSetResponse>;
    /**
     * Gets information about a read set activation job.
     */
    getReadSetActivationJob(req: operations.GetReadSetActivationJobRequest, config?: AxiosRequestConfig): Promise<operations.GetReadSetActivationJobResponse>;
    /**
     * Gets information about a read set export job.
     */
    getReadSetExportJob(req: operations.GetReadSetExportJobRequest, config?: AxiosRequestConfig): Promise<operations.GetReadSetExportJobResponse>;
    /**
     * Gets information about a read set import job.
     */
    getReadSetImportJob(req: operations.GetReadSetImportJobRequest, config?: AxiosRequestConfig): Promise<operations.GetReadSetImportJobResponse>;
    /**
     * Gets details about a read set.
     */
    getReadSetMetadata(req: operations.GetReadSetMetadataRequest, config?: AxiosRequestConfig): Promise<operations.GetReadSetMetadataResponse>;
    /**
     * Gets a reference file.
     */
    getReference(req: operations.GetReferenceRequest, config?: AxiosRequestConfig): Promise<operations.GetReferenceResponse>;
    /**
     * Gets information about a reference import job.
     */
    getReferenceImportJob(req: operations.GetReferenceImportJobRequest, config?: AxiosRequestConfig): Promise<operations.GetReferenceImportJobResponse>;
    /**
     * Gets information about a genome reference's metadata.
     */
    getReferenceMetadata(req: operations.GetReferenceMetadataRequest, config?: AxiosRequestConfig): Promise<operations.GetReferenceMetadataResponse>;
    /**
     * Gets information about a reference store.
     */
    getReferenceStore(req: operations.GetReferenceStoreRequest, config?: AxiosRequestConfig): Promise<operations.GetReferenceStoreResponse>;
    /**
     * Gets information about a workflow run.
     */
    getRun(req: operations.GetRunRequest, config?: AxiosRequestConfig): Promise<operations.GetRunResponse>;
    /**
     * Gets information about a workflow run group.
     */
    getRunGroup(req: operations.GetRunGroupRequest, config?: AxiosRequestConfig): Promise<operations.GetRunGroupResponse>;
    /**
     * Gets information about a workflow run task.
     */
    getRunTask(req: operations.GetRunTaskRequest, config?: AxiosRequestConfig): Promise<operations.GetRunTaskResponse>;
    /**
     * Gets information about a sequence store.
     */
    getSequenceStore(req: operations.GetSequenceStoreRequest, config?: AxiosRequestConfig): Promise<operations.GetSequenceStoreResponse>;
    /**
     * Gets information about a variant import job.
     */
    getVariantImportJob(req: operations.GetVariantImportJobRequest, config?: AxiosRequestConfig): Promise<operations.GetVariantImportJobResponse>;
    /**
     * Gets information about a variant store.
     */
    getVariantStore(req: operations.GetVariantStoreRequest, config?: AxiosRequestConfig): Promise<operations.GetVariantStoreResponse>;
    /**
     * Gets information about a workflow.
     */
    getWorkflow(req: operations.GetWorkflowRequest, config?: AxiosRequestConfig): Promise<operations.GetWorkflowResponse>;
    /**
     * Retrieves a list of annotation import jobs.
     */
    listAnnotationImportJobs(req: operations.ListAnnotationImportJobsRequest, config?: AxiosRequestConfig): Promise<operations.ListAnnotationImportJobsResponse>;
    /**
     * Retrieves a list of annotation stores.
     */
    listAnnotationStores(req: operations.ListAnnotationStoresRequest, config?: AxiosRequestConfig): Promise<operations.ListAnnotationStoresResponse>;
    /**
     * Retrieves a list of read set activation jobs.
     */
    listReadSetActivationJobs(req: operations.ListReadSetActivationJobsRequest, config?: AxiosRequestConfig): Promise<operations.ListReadSetActivationJobsResponse>;
    /**
     * Retrieves a list of read set export jobs.
     */
    listReadSetExportJobs(req: operations.ListReadSetExportJobsRequest, config?: AxiosRequestConfig): Promise<operations.ListReadSetExportJobsResponse>;
    /**
     * Retrieves a list of read set import jobs.
     */
    listReadSetImportJobs(req: operations.ListReadSetImportJobsRequest, config?: AxiosRequestConfig): Promise<operations.ListReadSetImportJobsResponse>;
    /**
     * Retrieves a list of read sets.
     */
    listReadSets(req: operations.ListReadSetsRequest, config?: AxiosRequestConfig): Promise<operations.ListReadSetsResponse>;
    /**
     * Retrieves a list of reference import jobs.
     */
    listReferenceImportJobs(req: operations.ListReferenceImportJobsRequest, config?: AxiosRequestConfig): Promise<operations.ListReferenceImportJobsResponse>;
    /**
     * Retrieves a list of reference stores.
     */
    listReferenceStores(req: operations.ListReferenceStoresRequest, config?: AxiosRequestConfig): Promise<operations.ListReferenceStoresResponse>;
    /**
     * Retrieves a list of references.
     */
    listReferences(req: operations.ListReferencesRequest, config?: AxiosRequestConfig): Promise<operations.ListReferencesResponse>;
    /**
     * Retrieves a list of run groups.
     */
    listRunGroups(req: operations.ListRunGroupsRequest, config?: AxiosRequestConfig): Promise<operations.ListRunGroupsResponse>;
    /**
     * Retrieves a list of tasks for a run.
     */
    listRunTasks(req: operations.ListRunTasksRequest, config?: AxiosRequestConfig): Promise<operations.ListRunTasksResponse>;
    /**
     * Retrieves a list of runs.
     */
    listRuns(req: operations.ListRunsRequest, config?: AxiosRequestConfig): Promise<operations.ListRunsResponse>;
    /**
     * Retrieves a list of sequence stores.
     */
    listSequenceStores(req: operations.ListSequenceStoresRequest, config?: AxiosRequestConfig): Promise<operations.ListSequenceStoresResponse>;
    /**
     * Retrieves a list of tags for a resource.
     */
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     * Retrieves a list of variant import jobs.
     */
    listVariantImportJobs(req: operations.ListVariantImportJobsRequest, config?: AxiosRequestConfig): Promise<operations.ListVariantImportJobsResponse>;
    /**
     * Retrieves a list of variant stores.
     */
    listVariantStores(req: operations.ListVariantStoresRequest, config?: AxiosRequestConfig): Promise<operations.ListVariantStoresResponse>;
    /**
     * Retrieves a list of workflows.
     */
    listWorkflows(req: operations.ListWorkflowsRequest, config?: AxiosRequestConfig): Promise<operations.ListWorkflowsResponse>;
    /**
     * Starts an annotation import job.
     */
    startAnnotationImportJob(req: operations.StartAnnotationImportJobRequest, config?: AxiosRequestConfig): Promise<operations.StartAnnotationImportJobResponse>;
    /**
     * Activates an archived read set. To reduce storage charges, Amazon Omics archives unused read sets after 30 days.
     */
    startReadSetActivationJob(req: operations.StartReadSetActivationJobRequest, config?: AxiosRequestConfig): Promise<operations.StartReadSetActivationJobResponse>;
    /**
     * Exports a read set to Amazon S3.
     */
    startReadSetExportJob(req: operations.StartReadSetExportJobRequest, config?: AxiosRequestConfig): Promise<operations.StartReadSetExportJobResponse>;
    /**
     * Starts a read set import job.
     */
    startReadSetImportJob(req: operations.StartReadSetImportJobRequest, config?: AxiosRequestConfig): Promise<operations.StartReadSetImportJobResponse>;
    /**
     * Starts a reference import job.
     */
    startReferenceImportJob(req: operations.StartReferenceImportJobRequest, config?: AxiosRequestConfig): Promise<operations.StartReferenceImportJobResponse>;
    /**
     * Starts a run.
     */
    startRun(req: operations.StartRunRequest, config?: AxiosRequestConfig): Promise<operations.StartRunResponse>;
    /**
     * Starts a variant import job.
     */
    startVariantImportJob(req: operations.StartVariantImportJobRequest, config?: AxiosRequestConfig): Promise<operations.StartVariantImportJobResponse>;
    /**
     * Tags a resource.
     */
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * Removes tags from a resource.
     */
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
    /**
     * Updates an annotation store.
     */
    updateAnnotationStore(req: operations.UpdateAnnotationStoreRequest, config?: AxiosRequestConfig): Promise<operations.UpdateAnnotationStoreResponse>;
    /**
     * Updates a run group.
     */
    updateRunGroup(req: operations.UpdateRunGroupRequest, config?: AxiosRequestConfig): Promise<operations.UpdateRunGroupResponse>;
    /**
     * Updates a variant store.
     */
    updateVariantStore(req: operations.UpdateVariantStoreRequest, config?: AxiosRequestConfig): Promise<operations.UpdateVariantStoreResponse>;
    /**
     * Updates a workflow.
     */
    updateWorkflow(req: operations.UpdateWorkflowRequest, config?: AxiosRequestConfig): Promise<operations.UpdateWorkflowResponse>;
}
