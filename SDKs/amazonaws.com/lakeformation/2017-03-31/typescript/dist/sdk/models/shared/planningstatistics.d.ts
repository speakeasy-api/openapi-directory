import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Statistics related to the processing of a query statement.
 */
export declare class PlanningStatistics extends SpeakeasyBase {
    estimatedDataToScanBytes?: number;
    planningTimeMillis?: number;
    queueTimeMillis?: number;
    workUnitsGeneratedCount?: number;
}
