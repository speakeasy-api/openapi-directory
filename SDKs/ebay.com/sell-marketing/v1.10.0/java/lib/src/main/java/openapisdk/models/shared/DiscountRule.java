package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DiscountRule
 * This complex type defines a promotion as being either a monetary amount or a percentage of a sales price that's subtracted from the price of an item or order. Set the amount of the discount and the rules that govern when the discount triggers using the discountBenefit and discountSpecification fields. Note: In volume pricing promotions, you must configure at least two discountRule containers and at most four.
**/
public class DiscountRule {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("discountBenefit")
    public DiscountBenefit discountBenefit;
    public DiscountRule withDiscountBenefit(DiscountBenefit discountBenefit) {
        this.discountBenefit = discountBenefit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("discountSpecification")
    public DiscountSpecification discountSpecification;
    public DiscountRule withDiscountSpecification(DiscountSpecification discountSpecification) {
        this.discountSpecification = discountSpecification;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxDiscountAmount")
    public Amount maxDiscountAmount;
    public DiscountRule withMaxDiscountAmount(Amount maxDiscountAmount) {
        this.maxDiscountAmount = maxDiscountAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ruleOrder")
    public Integer ruleOrder;
    public DiscountRule withRuleOrder(Integer ruleOrder) {
        this.ruleOrder = ruleOrder;
        return this;
    }
}