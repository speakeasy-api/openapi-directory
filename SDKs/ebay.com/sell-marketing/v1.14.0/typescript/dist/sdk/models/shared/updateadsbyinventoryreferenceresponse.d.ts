import { SpeakeasyBase } from "../../../internal/utils";
import { AdReference } from "./adreference";
import { ErrorT } from "./error";
/**
 * A type that contains the response fields used by the <b>UpdateAdsByInventoryReference</b> method.
 */
export declare class UpdateAdsByInventoryReferenceResponse extends SpeakeasyBase {
    /**
     * A list of ad IDs and links to retrieve them.
     */
    ads?: AdReference[];
    /**
     * A container for all of the errors associated with the specified inventory reference ID.
     */
    errors?: ErrorT[];
    /**
     * The reference ID associated with the ad. The reference ID could be a SKU number or Inventory Item Group, depending on value of <code>inventoryReferenceType</code>.
     */
    inventoryReferenceId?: string;
    /**
     * The inventory reference type associated with the ad. The inventory reference type could be a SKU number or Inventory Item Group. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:InventoryReferenceTypeEnum'>eBay API documentation</a>
     */
    inventoryReferenceType?: string;
    /**
     * An HTTP status code that indicates whether or not the CPS ad was successfully updated.
     */
    statusCode?: number;
}
