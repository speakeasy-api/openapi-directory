import { SpeakeasyBase } from "../../../internal/utils";
/**
 * This type defines the fields needed to delete an ad by its inventory reference ID.  You must always supply both <b>inventory_reference_id</b> and <b>inventory_reference_type</b>.
 */
export declare class DeleteAdsByInventoryReferenceRequest extends SpeakeasyBase {
    /**
     * The inventory reference ID is a seller-defined SKU value for a single-item listing, or a seller-defined identifier for an inventory item group. Both of these values are defined when using the Inventory API, and an inventory item group is used to create a multiple-variation listing.
     */
    inventoryReferenceId?: string;
    /**
     * The enumeration value passed into this field indicates the type of value used for the corresponding <b>inventoryReferenceId</b> value. The enumeration value used here will either be <code>INVENTORY_ITEM</code> (to delete the ad for a single SKU listing) or <code>INVENTORY_ITEM_GROUP</code> (to delete the ad for a multiple-variation listing). For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:InventoryReferenceTypeEnum'>eBay API documentation</a>
     */
    inventoryReferenceType?: string;
}
