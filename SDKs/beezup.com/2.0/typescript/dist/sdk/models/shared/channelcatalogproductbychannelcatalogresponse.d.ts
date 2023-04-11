import { SpeakeasyBase } from "../../../internal/utils";
import { ChannelCatalogProductInfo } from "./channelcatalogproductinfo";
/**
 * The channel catalog product by channel catalog
 */
export declare class ChannelCatalogProductByChannelCatalogResponse extends SpeakeasyBase {
    /**
     * The channel catalog product by channel catalog. The key is the channel catalog identifier
     */
    channelCatalogs?: Record<string, ChannelCatalogProductInfo>;
}
