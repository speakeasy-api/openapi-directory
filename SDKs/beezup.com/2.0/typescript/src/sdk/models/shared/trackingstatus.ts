import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TrackingStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clickSynchronizationUtcDate" })
  clickSynchronizationUtcDate: Date;

  @SpeakeasyMetadata({ data: "json, name=marketplaceOrderSynchonizationUtcDate" })
  marketplaceOrderSynchonizationUtcDate: Date;

  @SpeakeasyMetadata({ data: "json, name=orderSynchonizationUtcDate" })
  orderSynchonizationUtcDate: Date;
}
