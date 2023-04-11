import { SpeakeasyBase } from "../../../internal/utils";
import { BatchSegmentJobSummary } from "./batchsegmentjobsummary";
/**
 * Success
 */
export declare class ListBatchSegmentJobsResponse extends SpeakeasyBase {
    batchSegmentJobs?: BatchSegmentJobSummary[];
    nextToken?: string;
}
