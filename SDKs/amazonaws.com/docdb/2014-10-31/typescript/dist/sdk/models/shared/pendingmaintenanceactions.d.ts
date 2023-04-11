import { SpeakeasyBase } from "../../../internal/utils";
import { PendingMaintenanceActionDetails } from "./pendingmaintenanceactiondetails";
/**
 * Represents the output of <a>ApplyPendingMaintenanceAction</a>.
 */
export declare class PendingMaintenanceActions extends SpeakeasyBase {
    pendingMaintenanceActionDetails?: PendingMaintenanceActionDetails[];
    resourceIdentifier?: string;
}
