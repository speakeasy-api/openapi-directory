import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class BillingPeriod extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=billingPeriodInMonth" })
  billingPeriodInMonth: number;

  @SpeakeasyMetadata({ data: "json, name=discountPercentage" })
  discountPercentage: number;
}
