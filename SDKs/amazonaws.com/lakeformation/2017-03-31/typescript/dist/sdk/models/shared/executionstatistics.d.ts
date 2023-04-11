import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Statistics related to the processing of a query statement.
 */
export declare class ExecutionStatistics extends SpeakeasyBase {
    averageExecutionTimeMillis?: number;
    dataScannedBytes?: number;
    workUnitsExecutedCount?: number;
}
