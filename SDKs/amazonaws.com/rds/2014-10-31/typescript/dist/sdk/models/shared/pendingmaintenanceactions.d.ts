import { SpeakeasyBase } from "../../../internal/utils";
import { PendingMaintenanceActionDetails } from "./pendingmaintenanceactiondetails";
/**
 * Describes the pending maintenance actions for a resource.
 */
export declare class PendingMaintenanceActions extends SpeakeasyBase {
    pendingMaintenanceActionDetails?: PendingMaintenanceActionDetails[];
    resourceIdentifier?: string;
}
