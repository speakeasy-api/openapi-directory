import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeferredMaintenanceWindowsList
/** 
 * Describes a deferred maintenance window
**/
export class DeferredMaintenanceWindowsList extends SpeakeasyBase {
  @SpeakeasyMetadata()
  deferMaintenanceEndTime?: Date;

  @SpeakeasyMetadata()
  deferMaintenanceIdentifier?: string;

  @SpeakeasyMetadata()
  deferMaintenanceStartTime?: Date;
}
