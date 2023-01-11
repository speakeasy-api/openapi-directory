package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RuleCriteria
 * This type defines the fields for a set of inventory selection rules. Required: When inventoryCriterionType is set to INVENTORY_BY_RULE or INVENTORY_ANY.
**/
public class RuleCriteria {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("excludeInventoryItems")
    public InventoryItem[] excludeInventoryItems;
    public RuleCriteria withExcludeInventoryItems(InventoryItem[] excludeInventoryItems) {
        this.excludeInventoryItems = excludeInventoryItems;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("excludeListingIds")
    public String[] excludeListingIds;
    public RuleCriteria withExcludeListingIds(String[] excludeListingIds) {
        this.excludeListingIds = excludeListingIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("markupInventoryItems")
    public InventoryItem[] markupInventoryItems;
    public RuleCriteria withMarkupInventoryItems(InventoryItem[] markupInventoryItems) {
        this.markupInventoryItems = markupInventoryItems;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("markupListingIds")
    public String[] markupListingIds;
    public RuleCriteria withMarkupListingIds(String[] markupListingIds) {
        this.markupListingIds = markupListingIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("selectionRules")
    public SelectionRule[] selectionRules;
    public RuleCriteria withSelectionRules(SelectionRule[] selectionRules) {
        this.selectionRules = selectionRules;
        return this;
    }
}