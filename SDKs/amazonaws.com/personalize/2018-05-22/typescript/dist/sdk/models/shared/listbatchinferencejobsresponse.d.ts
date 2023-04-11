import { SpeakeasyBase } from "../../../internal/utils";
import { BatchInferenceJobSummary } from "./batchinferencejobsummary";
/**
 * Success
 */
export declare class ListBatchInferenceJobsResponse extends SpeakeasyBase {
    batchInferenceJobs?: BatchInferenceJobSummary[];
    nextToken?: string;
}
