import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Filters jobs by their `completed_at` timestamp. Can be one of:
 *
 * @remarks
 * \* `latest`: Returns jobs from the most recent execution of the workflow run.
 * \* `all`: Returns all jobs for a workflow run, including from old executions of the workflow run.
 */
export declare enum ActionsListJobsForWorkflowRunFilterEnum {
    Latest = "latest",
    All = "all"
}
export declare class ActionsListJobsForWorkflowRunRequest extends SpeakeasyBase {
    /**
     * Filters jobs by their `completed_at` timestamp. Can be one of:
     *
     * @remarks
     * \* `latest`: Returns jobs from the most recent execution of the workflow run.
     * \* `all`: Returns all jobs for a workflow run, including from old executions of the workflow run.
     */
    filter?: ActionsListJobsForWorkflowRunFilterEnum;
    owner: string;
    /**
     * Page number of the results to fetch.
     */
    page?: number;
    /**
     * Results per page (max 100)
     */
    perPage?: number;
    repo: string;
    /**
     * The id of the workflow run.
     */
    runId: number;
}
/**
 * Response
 */
export declare class ActionsListJobsForWorkflowRun200ApplicationJSON extends SpeakeasyBase {
    jobs: shared.Job[];
    totalCount: number;
}
export declare class ActionsListJobsForWorkflowRunResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    actionsListJobsForWorkflowRun200ApplicationJSONObject?: ActionsListJobsForWorkflowRun200ApplicationJSON;
}
