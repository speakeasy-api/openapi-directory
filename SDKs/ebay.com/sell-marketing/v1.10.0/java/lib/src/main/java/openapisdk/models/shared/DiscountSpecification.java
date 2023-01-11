package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DiscountSpecification
 * This container defines the criteria for when the discounts of a promotion trigger, such as the minimum quantity the buyer must purchase before the promotion kicks in. The promotional discount is applied each time the criteria defined by this container is met. Note: When configuring the rules that govern when the discounts are applied, populate just one of the following fields in the discountSpecification container: minAmount minQuantity forEachQuantity forEachAmount Tip: Refer to Configuring discounts for threshold promotions for information and examples on how to combine discountBenefit and discountSpecification to create different types of promotions.
**/
public class DiscountSpecification {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("forEachAmount")
    public Amount forEachAmount;
    public DiscountSpecification withForEachAmount(Amount forEachAmount) {
        this.forEachAmount = forEachAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("forEachQuantity")
    public Integer forEachQuantity;
    public DiscountSpecification withForEachQuantity(Integer forEachQuantity) {
        this.forEachQuantity = forEachQuantity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minAmount")
    public Amount minAmount;
    public DiscountSpecification withMinAmount(Amount minAmount) {
        this.minAmount = minAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minQuantity")
    public Integer minQuantity;
    public DiscountSpecification withMinQuantity(Integer minQuantity) {
        this.minQuantity = minQuantity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("numberOfDiscountedItems")
    public Integer numberOfDiscountedItems;
    public DiscountSpecification withNumberOfDiscountedItems(Integer numberOfDiscountedItems) {
        this.numberOfDiscountedItems = numberOfDiscountedItems;
        return this;
    }
}