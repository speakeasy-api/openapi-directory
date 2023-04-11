import { SpeakeasyBase } from "../../../internal/utils";
/**
 * This type defines the fields for the seller inventory reference IDs (also known as an "SKU" or "custom label").
 */
export declare class InventoryItem extends SpeakeasyBase {
    /**
     * The seller's inventory reference ID for a listing. Also known as the "SKU" or "custom label," an inventory reference ID is either the ID of the listing or, if the listing has variations (such as a shirt that's available in multiple sizes and colors), the ID of the parent listing.
     */
    inventoryReferenceId?: string;
}
