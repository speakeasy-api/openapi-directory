import { SpeakeasyBase } from "../../../internal/utils";
import { ChannelCatalogProductInfoLinks } from "./channelcatalogproductinfolinks";
import { ProductOverrideWithCatalogValue } from "./productoverridewithcatalogvalue";
/**
 * The channel catalog product information
 */
export declare class ChannelCatalogProductInfo extends SpeakeasyBase {
    /**
     * Indicates if the product has been disabled or not
     */
    disabled: boolean;
    /**
     * Indicates if the product has been excluded by a exclusion filter
     */
    excluded: boolean;
    excludedBy?: string[];
    /**
     * Indicates the differents actions you can do on a channel product
     */
    links: ChannelCatalogProductInfoLinks;
    /**
     * The key is the channel column identifier
     */
    overrides: Record<string, ProductOverrideWithCatalogValue>;
    /**
     * Indicates if the product still exists in your catalog
     */
    productExists: boolean;
    /**
     * The product identifier
     */
    productId: string;
    /**
     * The product image Url
     */
    productImageUrl?: string;
    /**
     * The product SKU
     */
    productSku: string;
    /**
     * The product tile
     */
    productTitle: string;
    /**
     * Indicates if the product's category has been NOT mapped to a channel category
     */
    uncategorized: boolean;
}
