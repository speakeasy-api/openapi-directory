import { SpeakeasyBase } from "../../../internal/utils";
/**
 * This type is used to provide details about an order line item being fulfilled by eBay or an eBay fulfillment partner.
 */
export declare class EbayFulfillmentProgram extends SpeakeasyBase {
    /**
     * The value returned in this field indicates the party that is handling fulfillment of the order line item. <br><br>Valid value: <code>EBAY</code>
     */
    fulfilledBy?: string;
}
