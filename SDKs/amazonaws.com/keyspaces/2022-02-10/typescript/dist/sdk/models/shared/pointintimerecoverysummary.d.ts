import { SpeakeasyBase } from "../../../internal/utils";
import { PointInTimeRecoveryStatusEnum } from "./pointintimerecoverystatusenum";
/**
 * The point-in-time recovery status of the specified table.
 */
export declare class PointInTimeRecoverySummary extends SpeakeasyBase {
    earliestRestorableTimestamp?: Date;
    status: PointInTimeRecoveryStatusEnum;
}
