import { SpeakeasyBase } from "../../../internal/utils";
import { MarketplaceChannelCatalog } from "./marketplacechannelcatalog";
import { MarketplaceChannelCatalogListLinks } from "./marketplacechannelcataloglistlinks";
/**
 * The marketplace channel catalog list
 */
export declare class MarketplaceChannelCatalogList extends SpeakeasyBase {
    links: MarketplaceChannelCatalogListLinks;
    /**
     * The list of marketplace channel catalog
     */
    marketplaceChannelCatalogs: MarketplaceChannelCatalog[];
}
