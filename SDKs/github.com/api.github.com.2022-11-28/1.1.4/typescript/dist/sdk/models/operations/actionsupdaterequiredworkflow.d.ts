import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Enable the required workflow for all repositories or selected repositories in the organization.
 */
export declare enum ActionsUpdateRequiredWorkflowRequestBodyScopeEnum {
    Selected = "selected",
    All = "all"
}
export declare class ActionsUpdateRequiredWorkflowRequestBody extends SpeakeasyBase {
    /**
     * The ID of the repository that contains the workflow file.
     */
    repositoryId?: string;
    /**
     * Enable the required workflow for all repositories or selected repositories in the organization.
     */
    scope?: ActionsUpdateRequiredWorkflowRequestBodyScopeEnum;
    /**
     * A list of repository IDs where you want to enable the required workflow. A list of repository IDs where you want to enable the required workflow. You can only provide a list of repository ids when the `scope` is set to `selected`.
     */
    selectedRepositoryIds?: number[];
    /**
     * Path of the workflow file to be configured as a required workflow.
     */
    workflowFilePath?: string;
}
export declare class ActionsUpdateRequiredWorkflowRequest extends SpeakeasyBase {
    requestBody: ActionsUpdateRequiredWorkflowRequestBody;
    /**
     * The organization name. The name is not case sensitive.
     */
    org: string;
    /**
     * The unique identifier of the required workflow.
     */
    requiredWorkflowId: number;
}
export declare class ActionsUpdateRequiredWorkflowResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    requiredWorkflow?: shared.RequiredWorkflow;
    /**
     * Validation failed, or the endpoint has been spammed.
     */
    validationErrorSimple?: shared.ValidationErrorSimple;
}
