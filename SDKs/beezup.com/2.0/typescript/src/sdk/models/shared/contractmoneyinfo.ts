import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ContractMoneyInfo
/** 
 * Describe the pricing information related to the offer.
**/
export class ContractMoneyInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amountExcludingTaxesAndExcludingCodePromoDiscountIncludingBillingPeriodDiscount" })
  amountExcludingTaxesAndExcludingCodePromoDiscountIncludingBillingPeriodDiscount?: number;

  @SpeakeasyMetadata({ data: "json, name=amountExcludingTaxesAndExcludingDiscounts" })
  amountExcludingTaxesAndExcludingDiscounts?: number;

  @SpeakeasyMetadata({ data: "json, name=amountExcludingTaxesIncludingDiscounts" })
  amountExcludingTaxesIncludingDiscounts?: number;

  @SpeakeasyMetadata({ data: "json, name=amountExcludingTaxesIncludingDiscountsPerMonth" })
  amountExcludingTaxesIncludingDiscountsPerMonth?: number;

  @SpeakeasyMetadata({ data: "json, name=amountIncludingTaxesExcludingDiscountIncludingBillingPeriodDiscount" })
  amountIncludingTaxesExcludingDiscountIncludingBillingPeriodDiscount?: number;

  @SpeakeasyMetadata({ data: "json, name=amountIncludingTaxesIncludingDiscounts" })
  amountIncludingTaxesIncludingDiscounts?: number;

  @SpeakeasyMetadata({ data: "json, name=amountTaxesExcludingDiscountIncludingBillingPeriodDiscount" })
  amountTaxesExcludingDiscountIncludingBillingPeriodDiscount?: number;

  @SpeakeasyMetadata({ data: "json, name=amountTaxesIncludingDiscounts" })
  amountTaxesIncludingDiscounts?: number;

  @SpeakeasyMetadata({ data: "json, name=currencyCode" })
  currencyCode?: string;

  @SpeakeasyMetadata({ data: "json, name=initialOfferFixedPrice" })
  initialOfferFixedPrice?: number;

  @SpeakeasyMetadata({ data: "json, name=vatPercent" })
  vatPercent?: number;
}
