import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ActionsListJobsForWorkflowRunAttemptRequest extends SpeakeasyBase {
    /**
     * The attempt number of the workflow run.
     */
    attemptNumber: number;
    /**
     * The account owner of the repository. The name is not case sensitive.
     */
    owner: string;
    /**
     * Page number of the results to fetch.
     */
    page?: number;
    /**
     * The number of results per page (max 100).
     */
    perPage?: number;
    /**
     * The name of the repository. The name is not case sensitive.
     */
    repo: string;
    /**
     * The unique identifier of the workflow run.
     */
    runId: number;
}
/**
 * Response
 */
export declare class ActionsListJobsForWorkflowRunAttempt200ApplicationJSON extends SpeakeasyBase {
    jobs: shared.Job[];
    totalCount: number;
}
export declare class ActionsListJobsForWorkflowRunAttemptResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    actionsListJobsForWorkflowRunAttempt200ApplicationJSONObject?: ActionsListJobsForWorkflowRunAttempt200ApplicationJSON;
    /**
     * Resource not found
     */
    basicError?: shared.BasicError;
}
