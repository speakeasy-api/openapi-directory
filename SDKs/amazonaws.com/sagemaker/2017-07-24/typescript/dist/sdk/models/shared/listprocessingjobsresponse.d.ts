import { SpeakeasyBase } from "../../../internal/utils";
import { ProcessingJobSummary } from "./processingjobsummary";
/**
 * Success
 */
export declare class ListProcessingJobsResponse extends SpeakeasyBase {
    nextToken?: string;
    processingJobSummaries: ProcessingJobSummary[];
}
