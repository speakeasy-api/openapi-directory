import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PendingMaintenanceActions } from "./pendingmaintenanceactions";



export class PendingMaintenanceActionsMessage extends SpeakeasyBase {
  @SpeakeasyMetadata()
  marker?: string;

  @SpeakeasyMetadata({ elemType: PendingMaintenanceActions })
  pendingMaintenanceActions?: PendingMaintenanceActions[];
}
