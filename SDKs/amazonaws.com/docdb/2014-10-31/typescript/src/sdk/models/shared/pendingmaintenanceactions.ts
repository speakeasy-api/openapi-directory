import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PendingMaintenanceActionDetails } from "./pendingmaintenanceactiondetails";



// PendingMaintenanceActions
/** 
 * Represents the output of <a>ApplyPendingMaintenanceAction</a>. 
**/
export class PendingMaintenanceActions extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: PendingMaintenanceActionDetails })
  pendingMaintenanceActionDetails?: PendingMaintenanceActionDetails[];

  @SpeakeasyMetadata()
  resourceIdentifier?: string;
}
