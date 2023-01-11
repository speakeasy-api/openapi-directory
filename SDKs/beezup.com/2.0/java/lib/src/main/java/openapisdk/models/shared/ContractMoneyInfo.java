package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ContractMoneyInfo
 * Describe the pricing information related to the offer.
**/
public class ContractMoneyInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amountExcludingTaxesAndExcludingCodePromoDiscountIncludingBillingPeriodDiscount")
    public Double amountExcludingTaxesAndExcludingCodePromoDiscountIncludingBillingPeriodDiscount;
    public ContractMoneyInfo withAmountExcludingTaxesAndExcludingCodePromoDiscountIncludingBillingPeriodDiscount(Double amountExcludingTaxesAndExcludingCodePromoDiscountIncludingBillingPeriodDiscount) {
        this.amountExcludingTaxesAndExcludingCodePromoDiscountIncludingBillingPeriodDiscount = amountExcludingTaxesAndExcludingCodePromoDiscountIncludingBillingPeriodDiscount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amountExcludingTaxesAndExcludingDiscounts")
    public Double amountExcludingTaxesAndExcludingDiscounts;
    public ContractMoneyInfo withAmountExcludingTaxesAndExcludingDiscounts(Double amountExcludingTaxesAndExcludingDiscounts) {
        this.amountExcludingTaxesAndExcludingDiscounts = amountExcludingTaxesAndExcludingDiscounts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amountExcludingTaxesIncludingDiscounts")
    public Double amountExcludingTaxesIncludingDiscounts;
    public ContractMoneyInfo withAmountExcludingTaxesIncludingDiscounts(Double amountExcludingTaxesIncludingDiscounts) {
        this.amountExcludingTaxesIncludingDiscounts = amountExcludingTaxesIncludingDiscounts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amountExcludingTaxesIncludingDiscountsPerMonth")
    public Double amountExcludingTaxesIncludingDiscountsPerMonth;
    public ContractMoneyInfo withAmountExcludingTaxesIncludingDiscountsPerMonth(Double amountExcludingTaxesIncludingDiscountsPerMonth) {
        this.amountExcludingTaxesIncludingDiscountsPerMonth = amountExcludingTaxesIncludingDiscountsPerMonth;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amountIncludingTaxesExcludingDiscountIncludingBillingPeriodDiscount")
    public Double amountIncludingTaxesExcludingDiscountIncludingBillingPeriodDiscount;
    public ContractMoneyInfo withAmountIncludingTaxesExcludingDiscountIncludingBillingPeriodDiscount(Double amountIncludingTaxesExcludingDiscountIncludingBillingPeriodDiscount) {
        this.amountIncludingTaxesExcludingDiscountIncludingBillingPeriodDiscount = amountIncludingTaxesExcludingDiscountIncludingBillingPeriodDiscount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amountIncludingTaxesIncludingDiscounts")
    public Double amountIncludingTaxesIncludingDiscounts;
    public ContractMoneyInfo withAmountIncludingTaxesIncludingDiscounts(Double amountIncludingTaxesIncludingDiscounts) {
        this.amountIncludingTaxesIncludingDiscounts = amountIncludingTaxesIncludingDiscounts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amountTaxesExcludingDiscountIncludingBillingPeriodDiscount")
    public Double amountTaxesExcludingDiscountIncludingBillingPeriodDiscount;
    public ContractMoneyInfo withAmountTaxesExcludingDiscountIncludingBillingPeriodDiscount(Double amountTaxesExcludingDiscountIncludingBillingPeriodDiscount) {
        this.amountTaxesExcludingDiscountIncludingBillingPeriodDiscount = amountTaxesExcludingDiscountIncludingBillingPeriodDiscount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amountTaxesIncludingDiscounts")
    public Double amountTaxesIncludingDiscounts;
    public ContractMoneyInfo withAmountTaxesIncludingDiscounts(Double amountTaxesIncludingDiscounts) {
        this.amountTaxesIncludingDiscounts = amountTaxesIncludingDiscounts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currencyCode")
    public String currencyCode;
    public ContractMoneyInfo withCurrencyCode(String currencyCode) {
        this.currencyCode = currencyCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("initialOfferFixedPrice")
    public Double initialOfferFixedPrice;
    public ContractMoneyInfo withInitialOfferFixedPrice(Double initialOfferFixedPrice) {
        this.initialOfferFixedPrice = initialOfferFixedPrice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vatPercent")
    public Double vatPercent;
    public ContractMoneyInfo withVatPercent(Double vatPercent) {
        this.vatPercent = vatPercent;
        return this;
    }
}