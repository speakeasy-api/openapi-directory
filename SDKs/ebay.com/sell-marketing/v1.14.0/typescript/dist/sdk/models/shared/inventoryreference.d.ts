import { SpeakeasyBase } from "../../../internal/utils";
/**
 * This complex type is used to identify an item that is managed by the Inventory API. The type defines the fields contained in an inventory reference ID.
 */
export declare class InventoryReference extends SpeakeasyBase {
    /**
     * The seller's inventory reference ID for an item that is managed with the Inventory API.  <br><br>An inventory reference is either the ID of a single listing or the ID of the parent of an item group listing (a multi-variation listing, such as a shirt that is available in multiple sizes and colors).  <br><br><i>Required if </i> if you supply an <b>inventoryReferenceType</b>.
     */
    inventoryReferenceId?: string;
    /**
     * Indicates the type of item indicated by the <b>inventoryReferenceId</b>.  <br><br>This value can be set to either <code>INVENTORY_ITEM</code> or <code>INVENTORY_ITEM_GROUP</code> (if the ID points to a multi-variation listing). <br><br><i>Required if </i> if you supply an <b>inventoryReferenceId</b>. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:InventoryReferenceTypeEnum'>eBay API documentation</a>
     */
    inventoryReferenceType?: string;
}
