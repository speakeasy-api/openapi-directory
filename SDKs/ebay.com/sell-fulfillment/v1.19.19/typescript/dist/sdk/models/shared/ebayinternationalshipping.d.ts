import { SpeakeasyBase } from "../../../internal/utils";
/**
 * This type is used to provide details about an order line item being managed through eBay International Shipping.
 */
export declare class EbayInternationalShipping extends SpeakeasyBase {
    /**
     * The value returned in this field indicates the party that is responsible for managing returns of the order line item.<br><br>Valid value: <code>EBAY</code>
     */
    returnsManagedBy?: string;
}
