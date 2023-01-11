package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ContractBillingPeriodInfo
 * Describe the billing period information related to the offer.
**/
public class ContractBillingPeriodInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amountBillingPeriodDiscount")
    public Double amountBillingPeriodDiscount;
    public ContractBillingPeriodInfo withAmountBillingPeriodDiscount(Double amountBillingPeriodDiscount) {
        this.amountBillingPeriodDiscount = amountBillingPeriodDiscount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("billingPeriodInMonth")
    public Integer billingPeriodInMonth;
    public ContractBillingPeriodInfo withBillingPeriodInMonth(Integer billingPeriodInMonth) {
        this.billingPeriodInMonth = billingPeriodInMonth;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("billingPeriodPercentDiscount")
    public Double billingPeriodPercentDiscount;
    public ContractBillingPeriodInfo withBillingPeriodPercentDiscount(Double billingPeriodPercentDiscount) {
        this.billingPeriodPercentDiscount = billingPeriodPercentDiscount;
        return this;
    }
}