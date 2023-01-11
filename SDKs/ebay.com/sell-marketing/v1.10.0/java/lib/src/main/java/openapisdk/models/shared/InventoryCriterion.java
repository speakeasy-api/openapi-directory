package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InventoryCriterion
 * This type defines either the selections rules or the list of listing IDs for the promotion. The &quot;listing IDs&quot; are are either the seller's item IDs or the eBay listing IDs.
**/
public class InventoryCriterion {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inventoryCriterionType")
    public String inventoryCriterionType;
    public InventoryCriterion withInventoryCriterionType(String inventoryCriterionType) {
        this.inventoryCriterionType = inventoryCriterionType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inventoryItems")
    public InventoryItem[] inventoryItems;
    public InventoryCriterion withInventoryItems(InventoryItem[] inventoryItems) {
        this.inventoryItems = inventoryItems;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("listingIds")
    public String[] listingIds;
    public InventoryCriterion withListingIds(String[] listingIds) {
        this.listingIds = listingIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ruleCriteria")
    public RuleCriteria ruleCriteria;
    public InventoryCriterion withRuleCriteria(RuleCriteria ruleCriteria) {
        this.ruleCriteria = ruleCriteria;
        return this;
    }
}