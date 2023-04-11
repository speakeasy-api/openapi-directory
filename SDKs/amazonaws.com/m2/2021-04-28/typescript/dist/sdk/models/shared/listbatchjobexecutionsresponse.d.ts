import { SpeakeasyBase } from "../../../internal/utils";
import { BatchJobExecutionSummary } from "./batchjobexecutionsummary";
/**
 * Success
 */
export declare class ListBatchJobExecutionsResponse extends SpeakeasyBase {
    batchJobExecutions: BatchJobExecutionSummary[];
    nextToken?: string;
}
