package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SelectedInventoryDiscount
 * This type defines the fields that describe the discounts applied to a set of inventory items and the order in which the selection rules are applied.
**/
public class SelectedInventoryDiscount {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("discountBenefit")
    public DiscountBenefit discountBenefit;
    public SelectedInventoryDiscount withDiscountBenefit(DiscountBenefit discountBenefit) {
        this.discountBenefit = discountBenefit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("discountId")
    public String discountId;
    public SelectedInventoryDiscount withDiscountId(String discountId) {
        this.discountId = discountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inventoryCriterion")
    public InventoryCriterion inventoryCriterion;
    public SelectedInventoryDiscount withInventoryCriterion(InventoryCriterion inventoryCriterion) {
        this.inventoryCriterion = inventoryCriterion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ruleOrder")
    public Integer ruleOrder;
    public SelectedInventoryDiscount withRuleOrder(Integer ruleOrder) {
        this.ruleOrder = ruleOrder;
        return this;
    }
}