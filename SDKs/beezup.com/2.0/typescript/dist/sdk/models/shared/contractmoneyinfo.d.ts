import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describe the pricing information related to the offer.
**/
export declare class ContractMoneyInfo extends SpeakeasyBase {
    amountExcludingTaxesAndExcludingCodePromoDiscountIncludingBillingPeriodDiscount?: number;
    amountExcludingTaxesAndExcludingDiscounts?: number;
    amountExcludingTaxesIncludingDiscounts?: number;
    amountExcludingTaxesIncludingDiscountsPerMonth?: number;
    amountIncludingTaxesExcludingDiscountIncludingBillingPeriodDiscount?: number;
    amountIncludingTaxesIncludingDiscounts?: number;
    amountTaxesExcludingDiscountIncludingBillingPeriodDiscount?: number;
    amountTaxesIncludingDiscounts?: number;
    currencyCode?: string;
    initialOfferFixedPrice?: number;
    vatPercent?: number;
}
