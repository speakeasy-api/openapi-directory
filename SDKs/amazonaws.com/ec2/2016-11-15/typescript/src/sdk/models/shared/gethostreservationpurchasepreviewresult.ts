import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetHostReservationPurchasePreviewResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  currencyCode?: Record<string, any>;

  @SpeakeasyMetadata()
  purchase?: Record<string, any>;

  @SpeakeasyMetadata()
  totalHourlyPrice?: Record<string, any>;

  @SpeakeasyMetadata()
  totalUpfrontPrice?: Record<string, any>;
}
