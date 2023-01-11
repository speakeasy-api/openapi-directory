import { SpeakeasyBase } from "../../../internal/utils";
import { PendingMaintenanceActions } from "./pendingmaintenanceactions";
/**
 * Represents the output of <a>DescribePendingMaintenanceActions</a>.
**/
export declare class PendingMaintenanceActionsMessage extends SpeakeasyBase {
    marker?: string;
    pendingMaintenanceActions?: PendingMaintenanceActions[];
}
