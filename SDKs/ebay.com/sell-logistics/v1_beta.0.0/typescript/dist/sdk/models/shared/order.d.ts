import { SpeakeasyBase } from "../../../internal/utils";
/**
 * This complex type defines an order from which a seller is including one or more line items in a single package to be shipped.
 */
export declare class Order extends SpeakeasyBase {
    /**
     * The e-commerce platform or environment where the order was created. Use the value <code>EBAY</code> to get the rates available for eBay orders.
     */
    channel?: string;
    /**
     * The unique ID of the order supplied by the channel of origin. For eBay orders, this would be the <b>orderId</b>.
     */
    orderId?: string;
}
