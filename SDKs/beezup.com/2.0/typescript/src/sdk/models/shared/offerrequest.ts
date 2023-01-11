import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class OfferRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=billingPeriodInMonth" })
  billingPeriodInMonth: number;

  @SpeakeasyMetadata({ data: "json, name=couponDiscountCode" })
  couponDiscountCode?: string;

  @SpeakeasyMetadata({ data: "json, name=couponOfferCode" })
  couponOfferCode?: string;

  @SpeakeasyMetadata({ data: "json, name=offerId" })
  offerId: number;

  @SpeakeasyMetadata({ data: "json, name=storeCount" })
  storeCount: number;
}
