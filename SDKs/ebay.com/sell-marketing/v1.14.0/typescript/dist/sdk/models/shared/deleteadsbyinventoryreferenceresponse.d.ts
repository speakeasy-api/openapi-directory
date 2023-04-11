import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorT } from "./error";
/**
 * This type defines the fields returned by request to delete a set of ads by inventory reference ID.
 */
export declare class DeleteAdsByInventoryReferenceResponse extends SpeakeasyBase {
    /**
     * The unique identifier of the ad that was deleted, or the ad that the seller attempted to delete.<span class="tablenote"><b>Note:</b>Although the field name is plural and it is an array, only one ad ID will be returned here since there can be only one ad per listing.</span>
     */
    adIds?: string[];
    /**
     * The container for the errors associated with the request.
     */
    errors?: ErrorT[];
    /**
     * The inventory reference ID is a seller-defined SKU value for a single-item listing, or a seller-defined identifier for an inventory item group. Both of these values are defined when using the Inventory API, and an inventory item group is used to create a multiple-variation listing.
     */
    inventoryReferenceId?: string;
    /**
     * The enumeration value returned here indicates if the ad was for a single-variation listing or a multiple-variation listing. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:InventoryReferenceTypeEnum'>eBay API documentation</a>
     */
    inventoryReferenceType?: string;
    /**
     * An HTTP status code indicating if the corresponding ad was successfully deleted or not. <code>200 Successful</code> should be returned for successfully deleted ads. <span class="tablenote"><b>Note:</b>A status code is returned for each ad that the seller deletes, or attempts to delete.</span>
     */
    statusCode?: number;
}
