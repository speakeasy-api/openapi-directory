import { SpeakeasyBase } from "../../../internal/utils";
import { InstanceRefreshProgressDetails } from "./instancerefreshprogressdetails";
/**
 * Details about an instance refresh rollback.
 */
export declare class RollbackDetails extends SpeakeasyBase {
    instancesToUpdateOnRollback?: number;
    percentageCompleteOnRollback?: number;
    /**
     * Reports progress on replacing instances in an Auto Scaling group that has a warm pool. This includes separate details for instances in the warm pool and instances in the Auto Scaling group (the live pool).
     */
    progressDetailsOnRollback?: InstanceRefreshProgressDetails;
    rollbackReason?: string;
    rollbackStartTime?: Date;
}
