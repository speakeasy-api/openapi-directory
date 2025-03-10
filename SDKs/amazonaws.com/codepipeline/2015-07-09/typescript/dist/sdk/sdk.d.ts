import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://codepipeline.{region}.amazonaws.com", "https://codepipeline.{region}.amazonaws.com", "http://codepipeline.{region}.amazonaws.com.cn", "https://codepipeline.{region}.amazonaws.com.cn"];
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
 * <fullname>AWS CodePipeline</fullname> <p> <b>Overview</b> </p> <p>This is the AWS CodePipeline API Reference. This guide provides descriptions of the actions and data types for AWS CodePipeline. Some functionality for your pipeline can only be configured through the API. For more information, see the <a href="https://docs.aws.amazon.com/codepipeline/latest/userguide/welcome.html">AWS CodePipeline User Guide</a>.</p> <p>You can use the AWS CodePipeline API to work with pipelines, stages, actions, and transitions.</p> <p> <i>Pipelines</i> are models of automated release processes. Each pipeline is uniquely named, and consists of stages, actions, and transitions. </p> <p>You can work with pipelines by calling:</p> <ul> <li> <p> <a>CreatePipeline</a>, which creates a uniquely named pipeline.</p> </li> <li> <p> <a>DeletePipeline</a>, which deletes the specified pipeline.</p> </li> <li> <p> <a>GetPipeline</a>, which returns information about the pipeline structure and pipeline metadata, including the pipeline Amazon Resource Name (ARN).</p> </li> <li> <p> <a>GetPipelineExecution</a>, which returns information about a specific execution of a pipeline.</p> </li> <li> <p> <a>GetPipelineState</a>, which returns information about the current state of the stages and actions of a pipeline.</p> </li> <li> <p> <a>ListActionExecutions</a>, which returns action-level details for past executions. The details include full stage and action-level details, including individual action duration, status, any errors that occurred during the execution, and input and output artifact location details.</p> </li> <li> <p> <a>ListPipelines</a>, which gets a summary of all of the pipelines associated with your account.</p> </li> <li> <p> <a>ListPipelineExecutions</a>, which gets a summary of the most recent executions for a pipeline.</p> </li> <li> <p> <a>StartPipelineExecution</a>, which runs the most recent revision of an artifact through the pipeline.</p> </li> <li> <p> <a>StopPipelineExecution</a>, which stops the specified pipeline execution from continuing through the pipeline.</p> </li> <li> <p> <a>UpdatePipeline</a>, which updates a pipeline with edits or changes to the structure of the pipeline.</p> </li> </ul> <p>Pipelines include <i>stages</i>. Each stage contains one or more actions that must complete before the next stage begins. A stage results in success or failure. If a stage fails, the pipeline stops at that stage and remains stopped until either a new version of an artifact appears in the source location, or a user takes action to rerun the most recent artifact through the pipeline. You can call <a>GetPipelineState</a>, which displays the status of a pipeline, including the status of stages in the pipeline, or <a>GetPipeline</a>, which returns the entire structure of the pipeline, including the stages of that pipeline. For more information about the structure of stages and actions, see <a href="https://docs.aws.amazon.com/codepipeline/latest/userguide/pipeline-structure.html">AWS CodePipeline Pipeline Structure Reference</a>.</p> <p>Pipeline stages include <i>actions</i> that are categorized into categories such as source or build actions performed in a stage of a pipeline. For example, you can use a source action to import artifacts into a pipeline from a source such as Amazon S3. Like stages, you do not work with actions directly in most cases, but you do define and interact with actions when working with pipeline operations such as <a>CreatePipeline</a> and <a>GetPipelineState</a>. Valid action categories are:</p> <ul> <li> <p>Source</p> </li> <li> <p>Build</p> </li> <li> <p>Test</p> </li> <li> <p>Deploy</p> </li> <li> <p>Approval</p> </li> <li> <p>Invoke</p> </li> </ul> <p>Pipelines also include <i>transitions</i>, which allow the transition of artifacts from one stage to the next in a pipeline after the actions in one stage complete.</p> <p>You can work with transitions by calling:</p> <ul> <li> <p> <a>DisableStageTransition</a>, which prevents artifacts from transitioning to the next stage in a pipeline.</p> </li> <li> <p> <a>EnableStageTransition</a>, which enables transition of artifacts between stages in a pipeline. </p> </li> </ul> <p> <b>Using the API to integrate with AWS CodePipeline</b> </p> <p>For third-party integrators or developers who want to create their own integrations with AWS CodePipeline, the expected sequence varies from the standard API user. To integrate with AWS CodePipeline, developers need to work with the following items:</p> <p> <b>Jobs</b>, which are instances of an action. For example, a job for a source action might import a revision of an artifact from a source. </p> <p>You can work with jobs by calling:</p> <ul> <li> <p> <a>AcknowledgeJob</a>, which confirms whether a job worker has received the specified job.</p> </li> <li> <p> <a>GetJobDetails</a>, which returns the details of a job.</p> </li> <li> <p> <a>PollForJobs</a>, which determines whether there are any jobs to act on.</p> </li> <li> <p> <a>PutJobFailureResult</a>, which provides details of a job failure. </p> </li> <li> <p> <a>PutJobSuccessResult</a>, which provides details of a job success.</p> </li> </ul> <p> <b>Third party jobs</b>, which are instances of an action created by a partner action and integrated into AWS CodePipeline. Partner actions are created by members of the AWS Partner Network.</p> <p>You can work with third party jobs by calling:</p> <ul> <li> <p> <a>AcknowledgeThirdPartyJob</a>, which confirms whether a job worker has received the specified job.</p> </li> <li> <p> <a>GetThirdPartyJobDetails</a>, which requests the details of a job for a partner action.</p> </li> <li> <p> <a>PollForThirdPartyJobs</a>, which determines whether there are any jobs to act on. </p> </li> <li> <p> <a>PutThirdPartyJobFailureResult</a>, which provides details of a job failure.</p> </li> <li> <p> <a>PutThirdPartyJobSuccessResult</a>, which provides details of a job success.</p> </li> </ul>
 *
 * @see {@link https://docs.aws.amazon.com/codepipeline/} - Amazon Web Services documentation
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
     * Returns information about a specified job and whether that job has been received by the job worker. Used for custom actions only.
     */
    acknowledgeJob(req: operations.AcknowledgeJobRequest, config?: AxiosRequestConfig): Promise<operations.AcknowledgeJobResponse>;
    /**
     * Confirms a job worker has received the specified job. Used for partner actions only.
     */
    acknowledgeThirdPartyJob(req: operations.AcknowledgeThirdPartyJobRequest, config?: AxiosRequestConfig): Promise<operations.AcknowledgeThirdPartyJobResponse>;
    /**
     * Creates a new custom action that can be used in all pipelines associated with the AWS account. Only used for custom actions.
     */
    createCustomActionType(req: operations.CreateCustomActionTypeRequest, config?: AxiosRequestConfig): Promise<operations.CreateCustomActionTypeResponse>;
    /**
     * <p>Creates a pipeline.</p> <note> <p>In the pipeline structure, you must include either <code>artifactStore</code> or <code>artifactStores</code> in your pipeline, but you cannot use both. If you create a cross-region action in your pipeline, you must use <code>artifactStores</code>.</p> </note>
     */
    createPipeline(req: operations.CreatePipelineRequest, config?: AxiosRequestConfig): Promise<operations.CreatePipelineResponse>;
    /**
     * <p>Marks a custom action as deleted. <code>PollForJobs</code> for the custom action fails after the action is marked for deletion. Used for custom actions only.</p> <important> <p>To re-create a custom action after it has been deleted you must use a string in the version field that has never been used before. This string can be an incremented version number, for example. To restore a deleted custom action, use a JSON file that is identical to the deleted action, including the original string in the version field.</p> </important>
     */
    deleteCustomActionType(req: operations.DeleteCustomActionTypeRequest, config?: AxiosRequestConfig): Promise<operations.DeleteCustomActionTypeResponse>;
    /**
     * Deletes the specified pipeline.
     */
    deletePipeline(req: operations.DeletePipelineRequest, config?: AxiosRequestConfig): Promise<operations.DeletePipelineResponse>;
    /**
     * Deletes a previously created webhook by name. Deleting the webhook stops AWS CodePipeline from starting a pipeline every time an external event occurs. The API returns successfully when trying to delete a webhook that is already deleted. If a deleted webhook is re-created by calling PutWebhook with the same name, it will have a different URL.
     */
    deleteWebhook(req: operations.DeleteWebhookRequest, config?: AxiosRequestConfig): Promise<operations.DeleteWebhookResponse>;
    /**
     * Removes the connection between the webhook that was created by CodePipeline and the external tool with events to be detected. Currently supported only for webhooks that target an action type of GitHub.
     */
    deregisterWebhookWithThirdParty(req: operations.DeregisterWebhookWithThirdPartyRequest, config?: AxiosRequestConfig): Promise<operations.DeregisterWebhookWithThirdPartyResponse>;
    /**
     * Prevents artifacts in a pipeline from transitioning to the next stage in the pipeline.
     */
    disableStageTransition(req: operations.DisableStageTransitionRequest, config?: AxiosRequestConfig): Promise<operations.DisableStageTransitionResponse>;
    /**
     * Enables artifacts in a pipeline to transition to a stage in a pipeline.
     */
    enableStageTransition(req: operations.EnableStageTransitionRequest, config?: AxiosRequestConfig): Promise<operations.EnableStageTransitionResponse>;
    /**
     * Returns information about an action type created for an external provider, where the action is to be used by customers of the external provider. The action can be created with any supported integration model.
     */
    getActionType(req: operations.GetActionTypeRequest, config?: AxiosRequestConfig): Promise<operations.GetActionTypeResponse>;
    /**
     * <p>Returns information about a job. Used for custom actions only.</p> <important> <p>When this API is called, AWS CodePipeline returns temporary credentials for the S3 bucket used to store artifacts for the pipeline, if the action requires access to that S3 bucket for input or output artifacts. This API also returns any secret values defined for the action.</p> </important>
     */
    getJobDetails(req: operations.GetJobDetailsRequest, config?: AxiosRequestConfig): Promise<operations.GetJobDetailsResponse>;
    /**
     * Returns the metadata, structure, stages, and actions of a pipeline. Can be used to return the entire structure of a pipeline in JSON format, which can then be modified and used to update the pipeline structure with <a>UpdatePipeline</a>.
     */
    getPipeline(req: operations.GetPipelineRequest, config?: AxiosRequestConfig): Promise<operations.GetPipelineResponse>;
    /**
     * Returns information about an execution of a pipeline, including details about artifacts, the pipeline execution ID, and the name, version, and status of the pipeline.
     */
    getPipelineExecution(req: operations.GetPipelineExecutionRequest, config?: AxiosRequestConfig): Promise<operations.GetPipelineExecutionResponse>;
    /**
     * <p>Returns information about the state of a pipeline, including the stages and actions.</p> <note> <p>Values returned in the <code>revisionId</code> and <code>revisionUrl</code> fields indicate the source revision information, such as the commit ID, for the current state.</p> </note>
     */
    getPipelineState(req: operations.GetPipelineStateRequest, config?: AxiosRequestConfig): Promise<operations.GetPipelineStateResponse>;
    /**
     * <p>Requests the details of a job for a third party action. Used for partner actions only.</p> <important> <p>When this API is called, AWS CodePipeline returns temporary credentials for the S3 bucket used to store artifacts for the pipeline, if the action requires access to that S3 bucket for input or output artifacts. This API also returns any secret values defined for the action.</p> </important>
     */
    getThirdPartyJobDetails(req: operations.GetThirdPartyJobDetailsRequest, config?: AxiosRequestConfig): Promise<operations.GetThirdPartyJobDetailsResponse>;
    /**
     * Lists the action executions that have occurred in a pipeline.
     */
    listActionExecutions(req: operations.ListActionExecutionsRequest, config?: AxiosRequestConfig): Promise<operations.ListActionExecutionsResponse>;
    /**
     * Gets a summary of all AWS CodePipeline action types associated with your account.
     */
    listActionTypes(req: operations.ListActionTypesRequest, config?: AxiosRequestConfig): Promise<operations.ListActionTypesResponse>;
    /**
     * Gets a summary of the most recent executions for a pipeline.
     */
    listPipelineExecutions(req: operations.ListPipelineExecutionsRequest, config?: AxiosRequestConfig): Promise<operations.ListPipelineExecutionsResponse>;
    /**
     * Gets a summary of all of the pipelines associated with your account.
     */
    listPipelines(req: operations.ListPipelinesRequest, config?: AxiosRequestConfig): Promise<operations.ListPipelinesResponse>;
    /**
     * Gets the set of key-value pairs (metadata) that are used to manage the resource.
     */
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     * Gets a listing of all the webhooks in this AWS Region for this account. The output lists all webhooks and includes the webhook URL and ARN and the configuration for each webhook.
     */
    listWebhooks(req: operations.ListWebhooksRequest, config?: AxiosRequestConfig): Promise<operations.ListWebhooksResponse>;
    /**
     * <p>Returns information about any jobs for AWS CodePipeline to act on. <code>PollForJobs</code> is valid only for action types with "Custom" in the owner field. If the action type contains "AWS" or "ThirdParty" in the owner field, the <code>PollForJobs</code> action returns an error.</p> <important> <p>When this API is called, AWS CodePipeline returns temporary credentials for the S3 bucket used to store artifacts for the pipeline, if the action requires access to that S3 bucket for input or output artifacts. This API also returns any secret values defined for the action.</p> </important>
     */
    pollForJobs(req: operations.PollForJobsRequest, config?: AxiosRequestConfig): Promise<operations.PollForJobsResponse>;
    /**
     * <p>Determines whether there are any third party jobs for a job worker to act on. Used for partner actions only.</p> <important> <p>When this API is called, AWS CodePipeline returns temporary credentials for the S3 bucket used to store artifacts for the pipeline, if the action requires access to that S3 bucket for input or output artifacts.</p> </important>
     */
    pollForThirdPartyJobs(req: operations.PollForThirdPartyJobsRequest, config?: AxiosRequestConfig): Promise<operations.PollForThirdPartyJobsResponse>;
    /**
     * Provides information to AWS CodePipeline about new revisions to a source.
     */
    putActionRevision(req: operations.PutActionRevisionRequest, config?: AxiosRequestConfig): Promise<operations.PutActionRevisionResponse>;
    /**
     * Provides the response to a manual approval request to AWS CodePipeline. Valid responses include Approved and Rejected.
     */
    putApprovalResult(req: operations.PutApprovalResultRequest, config?: AxiosRequestConfig): Promise<operations.PutApprovalResultResponse>;
    /**
     * Represents the failure of a job as returned to the pipeline by a job worker. Used for custom actions only.
     */
    putJobFailureResult(req: operations.PutJobFailureResultRequest, config?: AxiosRequestConfig): Promise<operations.PutJobFailureResultResponse>;
    /**
     * Represents the success of a job as returned to the pipeline by a job worker. Used for custom actions only.
     */
    putJobSuccessResult(req: operations.PutJobSuccessResultRequest, config?: AxiosRequestConfig): Promise<operations.PutJobSuccessResultResponse>;
    /**
     * Represents the failure of a third party job as returned to the pipeline by a job worker. Used for partner actions only.
     */
    putThirdPartyJobFailureResult(req: operations.PutThirdPartyJobFailureResultRequest, config?: AxiosRequestConfig): Promise<operations.PutThirdPartyJobFailureResultResponse>;
    /**
     * Represents the success of a third party job as returned to the pipeline by a job worker. Used for partner actions only.
     */
    putThirdPartyJobSuccessResult(req: operations.PutThirdPartyJobSuccessResultRequest, config?: AxiosRequestConfig): Promise<operations.PutThirdPartyJobSuccessResultResponse>;
    /**
     * Defines a webhook and returns a unique webhook URL generated by CodePipeline. This URL can be supplied to third party source hosting providers to call every time there's a code change. When CodePipeline receives a POST request on this URL, the pipeline defined in the webhook is started as long as the POST request satisfied the authentication and filtering requirements supplied when defining the webhook. RegisterWebhookWithThirdParty and DeregisterWebhookWithThirdParty APIs can be used to automatically configure supported third parties to call the generated webhook URL.
     */
    putWebhook(req: operations.PutWebhookRequest, config?: AxiosRequestConfig): Promise<operations.PutWebhookResponse>;
    /**
     * Configures a connection between the webhook that was created and the external tool with events to be detected.
     */
    registerWebhookWithThirdParty(req: operations.RegisterWebhookWithThirdPartyRequest, config?: AxiosRequestConfig): Promise<operations.RegisterWebhookWithThirdPartyResponse>;
    /**
     * Resumes the pipeline execution by retrying the last failed actions in a stage. You can retry a stage immediately if any of the actions in the stage fail. When you retry, all actions that are still in progress continue working, and failed actions are triggered again.
     */
    retryStageExecution(req: operations.RetryStageExecutionRequest, config?: AxiosRequestConfig): Promise<operations.RetryStageExecutionResponse>;
    /**
     * Starts the specified pipeline. Specifically, it begins processing the latest commit to the source location specified as part of the pipeline.
     */
    startPipelineExecution(req: operations.StartPipelineExecutionRequest, config?: AxiosRequestConfig): Promise<operations.StartPipelineExecutionResponse>;
    /**
     * Stops the specified pipeline execution. You choose to either stop the pipeline execution by completing in-progress actions without starting subsequent actions, or by abandoning in-progress actions. While completing or abandoning in-progress actions, the pipeline execution is in a <code>Stopping</code> state. After all in-progress actions are completed or abandoned, the pipeline execution is in a <code>Stopped</code> state.
     */
    stopPipelineExecution(req: operations.StopPipelineExecutionRequest, config?: AxiosRequestConfig): Promise<operations.StopPipelineExecutionResponse>;
    /**
     * Adds to or modifies the tags of the given resource. Tags are metadata that can be used to manage a resource.
     */
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * Removes tags from an AWS resource.
     */
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
    /**
     * Updates an action type that was created with any supported integration model, where the action type is to be used by customers of the action type provider. Use a JSON file with the action definition and <code>UpdateActionType</code> to provide the full structure.
     */
    updateActionType(req: operations.UpdateActionTypeRequest, config?: AxiosRequestConfig): Promise<operations.UpdateActionTypeResponse>;
    /**
     * Updates a specified pipeline with edits or changes to its structure. Use a JSON file with the pipeline structure and <code>UpdatePipeline</code> to provide the full structure of the pipeline. Updating the pipeline increases the version number of the pipeline by 1.
     */
    updatePipeline(req: operations.UpdatePipelineRequest, config?: AxiosRequestConfig): Promise<operations.UpdatePipelineResponse>;
}
