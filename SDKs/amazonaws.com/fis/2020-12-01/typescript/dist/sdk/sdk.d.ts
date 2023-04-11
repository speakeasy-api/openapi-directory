import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://fis.{region}.amazonaws.com", "https://fis.{region}.amazonaws.com", "http://fis.{region}.amazonaws.com.cn", "https://fis.{region}.amazonaws.com.cn"];
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
 * Fault Injection Simulator is a managed service that enables you to perform fault injection experiments on your Amazon Web Services workloads. For more information, see the <a href="https://docs.aws.amazon.com/fis/latest/userguide/">Fault Injection Simulator User Guide</a>.
 *
 * @see {@link https://docs.aws.amazon.com/fis/} - Amazon Web Services documentation
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
     * <p>Creates an experiment template. </p> <p>An experiment template includes the following components:</p> <ul> <li> <p> <b>Targets</b>: A target can be a specific resource in your Amazon Web Services environment, or one or more resources that match criteria that you specify, for example, resources that have specific tags.</p> </li> <li> <p> <b>Actions</b>: The actions to carry out on the target. You can specify multiple actions, the duration of each action, and when to start each action during an experiment.</p> </li> <li> <p> <b>Stop conditions</b>: If a stop condition is triggered while an experiment is running, the experiment is automatically stopped. You can define a stop condition as a CloudWatch alarm.</p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/fis/latest/userguide/experiment-templates.html">Experiment templates</a> in the <i>Fault Injection Simulator User Guide</i>.</p>
     */
    createExperimentTemplate(req: operations.CreateExperimentTemplateRequest, config?: AxiosRequestConfig): Promise<operations.CreateExperimentTemplateResponse>;
    /**
     * Deletes the specified experiment template.
     */
    deleteExperimentTemplate(req: operations.DeleteExperimentTemplateRequest, config?: AxiosRequestConfig): Promise<operations.DeleteExperimentTemplateResponse>;
    /**
     * Gets information about the specified FIS action.
     */
    getAction(req: operations.GetActionRequest, config?: AxiosRequestConfig): Promise<operations.GetActionResponse>;
    /**
     * Gets information about the specified experiment.
     */
    getExperiment(req: operations.GetExperimentRequest, config?: AxiosRequestConfig): Promise<operations.GetExperimentResponse>;
    /**
     * Gets information about the specified experiment template.
     */
    getExperimentTemplate(req: operations.GetExperimentTemplateRequest, config?: AxiosRequestConfig): Promise<operations.GetExperimentTemplateResponse>;
    /**
     * Gets information about the specified resource type.
     */
    getTargetResourceType(req: operations.GetTargetResourceTypeRequest, config?: AxiosRequestConfig): Promise<operations.GetTargetResourceTypeResponse>;
    /**
     * Lists the available FIS actions.
     */
    listActions(req: operations.ListActionsRequest, config?: AxiosRequestConfig): Promise<operations.ListActionsResponse>;
    /**
     * Lists your experiment templates.
     */
    listExperimentTemplates(req: operations.ListExperimentTemplatesRequest, config?: AxiosRequestConfig): Promise<operations.ListExperimentTemplatesResponse>;
    /**
     * Lists your experiments.
     */
    listExperiments(req: operations.ListExperimentsRequest, config?: AxiosRequestConfig): Promise<operations.ListExperimentsResponse>;
    /**
     * Lists the tags for the specified resource.
     */
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     * Lists the target resource types.
     */
    listTargetResourceTypes(req: operations.ListTargetResourceTypesRequest, config?: AxiosRequestConfig): Promise<operations.ListTargetResourceTypesResponse>;
    /**
     * Starts running an experiment from the specified experiment template.
     */
    startExperiment(req: operations.StartExperimentRequest, config?: AxiosRequestConfig): Promise<operations.StartExperimentResponse>;
    /**
     * Stops the specified experiment.
     */
    stopExperiment(req: operations.StopExperimentRequest, config?: AxiosRequestConfig): Promise<operations.StopExperimentResponse>;
    /**
     * Applies the specified tags to the specified resource.
     */
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * Removes the specified tags from the specified resource.
     */
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
    /**
     * Updates the specified experiment template.
     */
    updateExperimentTemplate(req: operations.UpdateExperimentTemplateRequest, config?: AxiosRequestConfig): Promise<operations.UpdateExperimentTemplateResponse>;
}
