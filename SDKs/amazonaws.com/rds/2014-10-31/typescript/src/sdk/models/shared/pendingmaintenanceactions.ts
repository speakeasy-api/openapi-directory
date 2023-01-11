import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PendingMaintenanceActionDetails } from "./pendingmaintenanceactiondetails";



// PendingMaintenanceActions
/** 
 * Describes the pending maintenance actions for a resource.
**/
export class PendingMaintenanceActions extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: PendingMaintenanceActionDetails })
  pendingMaintenanceActionDetails?: PendingMaintenanceActionDetails[];

  @SpeakeasyMetadata()
  resourceIdentifier?: string;
}
