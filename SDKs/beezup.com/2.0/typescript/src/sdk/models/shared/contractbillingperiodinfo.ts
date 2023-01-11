import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ContractBillingPeriodInfo
/** 
 * Describe the billing period information related to the offer.
**/
export class ContractBillingPeriodInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amountBillingPeriodDiscount" })
  amountBillingPeriodDiscount?: number;

  @SpeakeasyMetadata({ data: "json, name=billingPeriodInMonth" })
  billingPeriodInMonth?: number;

  @SpeakeasyMetadata({ data: "json, name=billingPeriodPercentDiscount" })
  billingPeriodPercentDiscount?: number;
}
