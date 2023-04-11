import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ActionsListSelectedRepositoriesRequiredWorkflowRequest extends SpeakeasyBase {
    /**
     * The organization name. The name is not case sensitive.
     */
    org: string;
    /**
     * The unique identifier of the required workflow.
     */
    requiredWorkflowId: number;
}
/**
 * Success
 */
export declare class ActionsListSelectedRepositoriesRequiredWorkflow200ApplicationJSON extends SpeakeasyBase {
    repositories: shared.Repository[];
    totalCount: number;
}
export declare class ActionsListSelectedRepositoriesRequiredWorkflowResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    actionsListSelectedRepositoriesRequiredWorkflow200ApplicationJSONObject?: ActionsListSelectedRepositoriesRequiredWorkflow200ApplicationJSON;
}
