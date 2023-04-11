import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Filters jobs by their `completed_at` timestamp. `latest` returns jobs from the most recent execution of the workflow run. `all` returns all jobs for a workflow run, including from old executions of the workflow run.
 */
export declare enum ActionsListJobsForWorkflowRunFilterEnum {
    Latest = "latest",
    All = "all"
}
export declare class ActionsListJobsForWorkflowRunRequest extends SpeakeasyBase {
    /**
     * Filters jobs by their `completed_at` timestamp. `latest` returns jobs from the most recent execution of the workflow run. `all` returns all jobs for a workflow run, including from old executions of the workflow run.
     */
    filter?: ActionsListJobsForWorkflowRunFilterEnum;
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
