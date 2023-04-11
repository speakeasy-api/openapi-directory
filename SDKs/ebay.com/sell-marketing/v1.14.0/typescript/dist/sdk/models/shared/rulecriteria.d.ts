import { SpeakeasyBase } from "../../../internal/utils";
import { InventoryItem } from "./inventoryitem";
import { SelectionRule } from "./selectionrule";
/**
 * This type defines the fields for a set of inventory selection rules.  <br><br><b>Required:</b> When <b>inventoryCriterionType</b> is set to <code>INVENTORY_BY_RULE</code> or <code>INVENTORY_ANY</code>.
 */
export declare class RuleCriteria extends SpeakeasyBase {
    /**
     * A list of seller inventory reference IDs to exclude from the promotion.  <br><br><p class="tablenote"><b>Note:</b> The request can have either <b>excludeInventoryItems</b> or <b>excludeListingIds</b> but not both.</p> <b>Maximum:</b> 100 parent items <br><b>Maximum SKU or custom label length:</b> 50 characters
     */
    excludeInventoryItems?: InventoryItem[];
    /**
     * A list of eBay listing IDs to exclude from the promotion.  <br><br><p class="tablenote"><b>Note:</b> The request can have either <b>excludeInventoryItems</b> or <b>excludeListingIds</b> but not both.</p> <b>Maximum:</b> 100 parent items <br><b>Maximum SKU or custom label length:</b> 50 characters
     */
    excludeListingIds?: string[];
    /**
     * A list of SKUs to remove from a markdown promotion. The listed SKUs are 'marked up' to their standard price after being part of the markdown promotion.
     */
    markupInventoryItems?: InventoryItem[];
    /**
     * A list of listing IDs to remove from a markdown promotion. The listed items are 'marked up' to their standard price after being part of the markdown promotion.
     */
    markupListingIds?: string[];
    /**
     * The container for the rules that select the items to include in a promotion.  <br><br><i>Required if </i> <b>inventoryCriterionType</b> is set to <code>INVENTORY_BY_RULE</code>.
     */
    selectionRules?: SelectionRule[];
}
