import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PendingMaintenanceActionDetails } from "./pendingmaintenanceactiondetails";



// ResourcePendingMaintenanceActions
/** 
 * Represents the output of <a>ApplyPendingMaintenanceAction</a>. 
**/
export class ResourcePendingMaintenanceActions extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: PendingMaintenanceActionDetails })
  pendingMaintenanceActionDetails?: PendingMaintenanceActionDetails[];

  @SpeakeasyMetadata()
  resourceIdentifier?: string;
}
