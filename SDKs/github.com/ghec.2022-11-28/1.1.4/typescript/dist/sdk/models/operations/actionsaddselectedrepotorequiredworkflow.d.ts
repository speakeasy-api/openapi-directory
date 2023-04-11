import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ActionsAddSelectedRepoToRequiredWorkflowRequest extends SpeakeasyBase {
    /**
     * The organization name. The name is not case sensitive.
     */
    org: string;
    /**
     * The unique identifier of the repository.
     */
    repositoryId: number;
    /**
     * The unique identifier of the required workflow.
     */
    requiredWorkflowId: number;
}
export declare class ActionsAddSelectedRepoToRequiredWorkflowResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
