import { SpeakeasyBase } from "../../../internal/utils";
import { JobExecutionSummaryForJob } from "./jobexecutionsummaryforjob";
/**
 * Success
 */
export declare class ListJobExecutionsForJobResponse extends SpeakeasyBase {
    executionSummaries?: JobExecutionSummaryForJob[];
    nextToken?: string;
}
