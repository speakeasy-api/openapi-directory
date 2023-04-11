import { SpeakeasyBase } from "../../../internal/utils";
import { JobExecutionSummary } from "./jobexecutionsummary";
/**
 * Success
 */
export declare class GetPendingJobExecutionsResponse extends SpeakeasyBase {
    inProgressJobs?: JobExecutionSummary[];
    queuedJobs?: JobExecutionSummary[];
}
