import { SpeakeasyBase } from "../../../internal/utils";
import { ChannelCatalogProductInfoLinks } from "./channelcatalogproductinfolinks";
import { ProductOverrideWithCatalogValue } from "./productoverridewithcatalogvalue";
/**
 * The channel catalog product information
**/
export declare class ChannelCatalogProductInfo extends SpeakeasyBase {
    disabled: boolean;
    excluded: boolean;
    excludedBy?: string[];
    links: ChannelCatalogProductInfoLinks;
    overrides: Record<string, ProductOverrideWithCatalogValue>;
    productExists: boolean;
    productId: string;
    productImageUrl?: string;
    productSku: string;
    productTitle: string;
    uncategorized: boolean;
}
