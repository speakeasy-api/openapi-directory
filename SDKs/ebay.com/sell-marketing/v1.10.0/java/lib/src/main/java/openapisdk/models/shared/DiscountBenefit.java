package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DiscountBenefit
 * This container defines the promotional discount as either a monetary amount or a percentage of the sales price. Important!: You must populate one and only one of the fields in this container: amountOffItem amountOffOrder percentageOffItem percentageOffOrder Tip: Refer to Configuring discounts for threshold promotions for information and examples on how to combine discountBenefit and discountSpecification values to create different types of promotions.
**/
public class DiscountBenefit {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amountOffItem")
    public Amount amountOffItem;
    public DiscountBenefit withAmountOffItem(Amount amountOffItem) {
        this.amountOffItem = amountOffItem;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amountOffOrder")
    public Amount amountOffOrder;
    public DiscountBenefit withAmountOffOrder(Amount amountOffOrder) {
        this.amountOffOrder = amountOffOrder;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("percentageOffItem")
    public String percentageOffItem;
    public DiscountBenefit withPercentageOffItem(String percentageOffItem) {
        this.percentageOffItem = percentageOffItem;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("percentageOffOrder")
    public String percentageOffOrder;
    public DiscountBenefit withPercentageOffOrder(String percentageOffOrder) {
        this.percentageOffOrder = percentageOffOrder;
        return this;
    }
}