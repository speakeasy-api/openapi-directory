import { SpeakeasyBase } from "../../../internal/utils";
import { PendingMaintenanceActions } from "./pendingmaintenanceactions";
export declare class PendingMaintenanceActionsMessage extends SpeakeasyBase {
    marker?: string;
    pendingMaintenanceActions?: PendingMaintenanceActions[];
}
