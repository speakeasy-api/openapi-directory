import { SpeakeasyBase } from "../../../internal/utils";
/**
 * This type identifies the line item and quantity of that line item that comprises one fulfillment, such as a shipping package.
 */
export declare class LineItemReference extends SpeakeasyBase {
    /**
     * This is the unique identifier of the eBay order line item that is part of the shipping fulfillment. The line item ID is created as soon as there is a commitment to buy from the seller.
     */
    lineItemId?: string;
    /**
     * This is the number of lineItems associated with the <a href="#request.trackingNumber">trackingNumber</a> specified by the seller. This must be a whole number greater than zero (0).
     */
    quantity?: number;
}
