import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PendingMaintenanceActions } from "./pendingmaintenanceactions";



// PendingMaintenanceActionsMessage
/** 
 * Data returned from the <b>DescribePendingMaintenanceActions</b> action.
**/
export class PendingMaintenanceActionsMessage extends SpeakeasyBase {
  @SpeakeasyMetadata()
  marker?: string;

  @SpeakeasyMetadata({ elemType: PendingMaintenanceActions })
  pendingMaintenanceActions?: PendingMaintenanceActions[];
}
