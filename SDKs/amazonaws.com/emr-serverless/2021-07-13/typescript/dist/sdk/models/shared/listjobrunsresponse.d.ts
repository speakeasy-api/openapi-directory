import { SpeakeasyBase } from "../../../internal/utils";
import { JobRunSummary } from "./jobrunsummary";
/**
 * Success
 */
export declare class ListJobRunsResponse extends SpeakeasyBase {
    jobRuns: JobRunSummary[];
    nextToken?: string;
}
