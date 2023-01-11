import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PendingMaintenanceActionDetails } from "./pendingmaintenanceactiondetails";



// ResourcePendingMaintenanceActions
/** 
 * Describes the pending maintenance actions for a resource.
**/
export class ResourcePendingMaintenanceActions extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: PendingMaintenanceActionDetails })
  pendingMaintenanceActionDetails?: PendingMaintenanceActionDetails[];

  @SpeakeasyMetadata()
  resourceIdentifier?: string;
}
