import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PendingMaintenanceActions } from "./pendingmaintenanceactions";



// PendingMaintenanceActionsMessage
/** 
 * Represents the output of <a>DescribePendingMaintenanceActions</a>.
**/
export class PendingMaintenanceActionsMessage extends SpeakeasyBase {
  @SpeakeasyMetadata()
  marker?: string;

  @SpeakeasyMetadata({ elemType: PendingMaintenanceActions })
  pendingMaintenanceActions?: PendingMaintenanceActions[];
}
