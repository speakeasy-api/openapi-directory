import { SpeakeasyBase } from "../../../internal/utils";
/**
 * This type contains information about the management of the shipping for the order.
 */
export declare class EbayShipping extends SpeakeasyBase {
    /**
     * This field contains the shipping label provider. If <code>EBAY</code>, this order is managed by eBay shipping and a free shipping label by eBay is downloadable by the seller via the eBay website.
     */
    shippingLabelProvidedBy?: string;
}
