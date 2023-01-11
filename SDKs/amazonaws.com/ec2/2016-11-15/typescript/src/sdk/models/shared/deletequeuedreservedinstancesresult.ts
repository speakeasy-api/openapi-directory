import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteQueuedReservedInstancesResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  failedQueuedPurchaseDeletions?: Record<string, any>;

  @SpeakeasyMetadata()
  successfulQueuedPurchaseDeletions?: Record<string, any>;
}
