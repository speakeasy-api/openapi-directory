package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class BillingPeriod {
    @JsonProperty("billingPeriodInMonth")
    public Integer billingPeriodInMonth;
    public BillingPeriod withBillingPeriodInMonth(Integer billingPeriodInMonth) {
        this.billingPeriodInMonth = billingPeriodInMonth;
        return this;
    }
    @JsonProperty("discountPercentage")
    public Double discountPercentage;
    public BillingPeriod withDiscountPercentage(Double discountPercentage) {
        this.discountPercentage = discountPercentage;
        return this;
    }
}