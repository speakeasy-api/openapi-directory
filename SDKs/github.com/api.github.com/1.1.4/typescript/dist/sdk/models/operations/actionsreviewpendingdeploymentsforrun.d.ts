import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Whether to approve or reject deployment to the specified environments.
 */
export declare enum ActionsReviewPendingDeploymentsForRunRequestBodyStateEnum {
    Approved = "approved",
    Rejected = "rejected"
}
export declare class ActionsReviewPendingDeploymentsForRunRequestBody extends SpeakeasyBase {
    /**
     * A comment to accompany the deployment review
     */
    comment: string;
    /**
     * The list of environment ids to approve or reject
     */
    environmentIds: number[];
    /**
     * Whether to approve or reject deployment to the specified environments.
     */
    state: ActionsReviewPendingDeploymentsForRunRequestBodyStateEnum;
}
export declare class ActionsReviewPendingDeploymentsForRunRequest extends SpeakeasyBase {
    requestBody: ActionsReviewPendingDeploymentsForRunRequestBody;
    /**
     * The account owner of the repository. The name is not case sensitive.
     */
    owner: string;
    /**
     * The name of the repository. The name is not case sensitive.
     */
    repo: string;
    /**
     * The unique identifier of the workflow run.
     */
    runId: number;
}
export declare class ActionsReviewPendingDeploymentsForRunResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    deployments?: shared.Deployment[];
}
