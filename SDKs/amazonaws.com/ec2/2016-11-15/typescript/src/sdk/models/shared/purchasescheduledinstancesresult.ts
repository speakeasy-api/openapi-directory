import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PurchaseScheduledInstancesResult
/** 
 * Contains the output of PurchaseScheduledInstances.
**/
export class PurchaseScheduledInstancesResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  scheduledInstanceSet?: Record<string, any>;
}
