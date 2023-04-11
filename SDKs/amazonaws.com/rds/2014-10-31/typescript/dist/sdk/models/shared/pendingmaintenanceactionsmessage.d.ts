import { SpeakeasyBase } from "../../../internal/utils";
import { PendingMaintenanceActions } from "./pendingmaintenanceactions";
/**
 * Data returned from the <b>DescribePendingMaintenanceActions</b> action.
 */
export declare class PendingMaintenanceActionsMessage extends SpeakeasyBase {
    marker?: string;
    pendingMaintenanceActions?: PendingMaintenanceActions[];
}
