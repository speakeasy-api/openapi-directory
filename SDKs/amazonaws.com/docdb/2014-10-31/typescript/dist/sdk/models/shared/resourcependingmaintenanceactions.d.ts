import { SpeakeasyBase } from "../../../internal/utils";
import { PendingMaintenanceActionDetails } from "./pendingmaintenanceactiondetails";
/**
 * Represents the output of <a>ApplyPendingMaintenanceAction</a>.
 */
export declare class ResourcePendingMaintenanceActions extends SpeakeasyBase {
    pendingMaintenanceActionDetails?: PendingMaintenanceActionDetails[];
    resourceIdentifier?: string;
}
