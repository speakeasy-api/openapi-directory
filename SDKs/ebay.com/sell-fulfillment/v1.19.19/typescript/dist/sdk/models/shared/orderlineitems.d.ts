import { SpeakeasyBase } from "../../../internal/utils";
/**
 * This type is used by the <strong>lineItems</strong> array that is used to identify one or more line items in the order with the payment dispute.
 */
export declare class OrderLineItems extends SpeakeasyBase {
    /**
     * The unique identifier of the eBay listing associated with the order.
     */
    itemId?: string;
    /**
     * The unique identifier of the line item within the order. The <strong>lineItemId</strong> value is created once the buyer actually purchases the item, or if there is a commitment to buy (such as an auction that is won by the buyer, an accepted Best Offer, or other situation that does not require immediate payment from the buyer).
     */
    lineItemId?: string;
}
