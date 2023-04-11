import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Receipt line item, comprised of a product or item and a price (if available)
 */
export declare class ReceiptLineItem extends SpeakeasyBase {
    /**
     * Description of the item
     */
    itemDescription?: string;
    /**
     * Price of the item if available
     */
    itemPrice?: number;
}
