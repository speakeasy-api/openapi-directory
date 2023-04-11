import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describe the pricing information related to the offer.
 */
export declare class ContractMoneyInfo extends SpeakeasyBase {
    /**
     * The amount excluding taxes and excluding code promo discount including billing period discount.
     */
    amountExcludingTaxesAndExcludingCodePromoDiscountIncludingBillingPeriodDiscount?: number;
    /**
     * The amount excluding taxes and excluding discounts.
     */
    amountExcludingTaxesAndExcludingDiscounts?: number;
    /**
     * The amount excluding taxes including discounts.
     */
    amountExcludingTaxesIncludingDiscounts?: number;
    /**
     * The amount excluding taxes including discounts per month.
     */
    amountExcludingTaxesIncludingDiscountsPerMonth?: number;
    /**
     * The amount including taxes excluding discount including billing period discount.
     */
    amountIncludingTaxesExcludingDiscountIncludingBillingPeriodDiscount?: number;
    /**
     * The amount including taxes including discounts.
     */
    amountIncludingTaxesIncludingDiscounts?: number;
    /**
     * The taxes excluding discount including billing period discount.
     */
    amountTaxesExcludingDiscountIncludingBillingPeriodDiscount?: number;
    /**
     * Taxes including discounts.
     */
    amountTaxesIncludingDiscounts?: number;
    /**
     * The currency code <a href="https://en.wikipedia.org/wiki/ISO_4217">(ISO 4217)</a>
     *
     * @remarks
     *
     */
    currencyCode?: string;
    /**
     * The initial offer fixed price.
     */
    initialOfferFixedPrice?: number;
    /**
     * The VAT percent.
     */
    vatPercent?: number;
}
