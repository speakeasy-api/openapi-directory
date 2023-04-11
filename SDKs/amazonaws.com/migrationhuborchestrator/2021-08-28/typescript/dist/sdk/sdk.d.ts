import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://migrationhub-orchestrator.{region}.amazonaws.com", "https://migrationhub-orchestrator.{region}.amazonaws.com", "http://migrationhub-orchestrator.{region}.amazonaws.com.cn", "https://migrationhub-orchestrator.{region}.amazonaws.com.cn"];
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
 * This API reference provides descriptions, syntax, and other details about each of the actions and data types for AWS Migration Hub Orchestrator. he topic for each action shows the API request parameters and the response. Alternatively, you can use one of the AWS SDKs to access an API that is tailored to the programming language or platform that you're using.
 *
 * @see {@link https://docs.aws.amazon.com/migrationhub-orchestrator/} - Amazon Web Services documentation
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
     * Create a workflow to orchestrate your migrations.
     */
    createWorkflow(req: operations.CreateWorkflowRequest, config?: AxiosRequestConfig): Promise<operations.CreateWorkflowResponse>;
    /**
     * Create a step in the migration workflow.
     */
    createWorkflowStep(req: operations.CreateWorkflowStepRequest, config?: AxiosRequestConfig): Promise<operations.CreateWorkflowStepResponse>;
    /**
     * Create a step group in a migration workflow.
     */
    createWorkflowStepGroup(req: operations.CreateWorkflowStepGroupRequest, config?: AxiosRequestConfig): Promise<operations.CreateWorkflowStepGroupResponse>;
    /**
     * Delete a migration workflow. You must pause a running workflow in Migration Hub Orchestrator console to delete it.
     */
    deleteWorkflow(req: operations.DeleteWorkflowRequest, config?: AxiosRequestConfig): Promise<operations.DeleteWorkflowResponse>;
    /**
     * Delete a step in a migration workflow. Pause the workflow to delete a running step.
     */
    deleteWorkflowStep(req: operations.DeleteWorkflowStepRequest, config?: AxiosRequestConfig): Promise<operations.DeleteWorkflowStepResponse>;
    /**
     * Delete a step group in a migration workflow.
     */
    deleteWorkflowStepGroup(req: operations.DeleteWorkflowStepGroupRequest, config?: AxiosRequestConfig): Promise<operations.DeleteWorkflowStepGroupResponse>;
    /**
     * Get the template you want to use for creating a migration workflow.
     */
    getTemplate(req: operations.GetTemplateRequest, config?: AxiosRequestConfig): Promise<operations.GetTemplateResponse>;
    /**
     * Get a specific step in a template.
     */
    getTemplateStep(req: operations.GetTemplateStepRequest, config?: AxiosRequestConfig): Promise<operations.GetTemplateStepResponse>;
    /**
     * Get a step group in a template.
     */
    getTemplateStepGroup(req: operations.GetTemplateStepGroupRequest, config?: AxiosRequestConfig): Promise<operations.GetTemplateStepGroupResponse>;
    /**
     * Get migration workflow.
     */
    getWorkflow(req: operations.GetWorkflowRequest, config?: AxiosRequestConfig): Promise<operations.GetWorkflowResponse>;
    /**
     * Get a step in the migration workflow.
     */
    getWorkflowStep(req: operations.GetWorkflowStepRequest, config?: AxiosRequestConfig): Promise<operations.GetWorkflowStepResponse>;
    /**
     * Get the step group of a migration workflow.
     */
    getWorkflowStepGroup(req: operations.GetWorkflowStepGroupRequest, config?: AxiosRequestConfig): Promise<operations.GetWorkflowStepGroupResponse>;
    /**
     * List AWS Migration Hub Orchestrator plugins.
     */
    listPlugins(req: operations.ListPluginsRequest, config?: AxiosRequestConfig): Promise<operations.ListPluginsResponse>;
    /**
     * List the tags added to a resource.
     */
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     * List the step groups in a template.
     */
    listTemplateStepGroups(req: operations.ListTemplateStepGroupsRequest, config?: AxiosRequestConfig): Promise<operations.ListTemplateStepGroupsResponse>;
    /**
     * List the steps in a template.
     */
    listTemplateSteps(req: operations.ListTemplateStepsRequest, config?: AxiosRequestConfig): Promise<operations.ListTemplateStepsResponse>;
    /**
     * List the templates available in Migration Hub Orchestrator to create a migration workflow.
     */
    listTemplates(req: operations.ListTemplatesRequest, config?: AxiosRequestConfig): Promise<operations.ListTemplatesResponse>;
    /**
     * List the step groups in a migration workflow.
     */
    listWorkflowStepGroups(req: operations.ListWorkflowStepGroupsRequest, config?: AxiosRequestConfig): Promise<operations.ListWorkflowStepGroupsResponse>;
    /**
     * List the steps in a workflow.
     */
    listWorkflowSteps(req: operations.ListWorkflowStepsRequest, config?: AxiosRequestConfig): Promise<operations.ListWorkflowStepsResponse>;
    /**
     * List the migration workflows.
     */
    listWorkflows(req: operations.ListWorkflowsRequest, config?: AxiosRequestConfig): Promise<operations.ListWorkflowsResponse>;
    /**
     * Retry a failed step in a migration workflow.
     */
    retryWorkflowStep(req: operations.RetryWorkflowStepRequest, config?: AxiosRequestConfig): Promise<operations.RetryWorkflowStepResponse>;
    /**
     * Start a migration workflow.
     */
    startWorkflow(req: operations.StartWorkflowRequest, config?: AxiosRequestConfig): Promise<operations.StartWorkflowResponse>;
    /**
     * Stop an ongoing migration workflow.
     */
    stopWorkflow(req: operations.StopWorkflowRequest, config?: AxiosRequestConfig): Promise<operations.StopWorkflowResponse>;
    /**
     * Tag a resource by specifying its Amazon Resource Name (ARN).
     */
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * Deletes the tags for a resource.
     */
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
    /**
     * Update a migration workflow.
     */
    updateWorkflow(req: operations.UpdateWorkflowRequest, config?: AxiosRequestConfig): Promise<operations.UpdateWorkflowResponse>;
    /**
     * Update a step in a migration workflow.
     */
    updateWorkflowStep(req: operations.UpdateWorkflowStepRequest, config?: AxiosRequestConfig): Promise<operations.UpdateWorkflowStepResponse>;
    /**
     * Update the step group in a migration workflow.
     */
    updateWorkflowStepGroup(req: operations.UpdateWorkflowStepGroupRequest, config?: AxiosRequestConfig): Promise<operations.UpdateWorkflowStepGroupResponse>;
}
