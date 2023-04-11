import { SpeakeasyBase } from "../../../internal/utils";
import { BeezUPCommonInfoSummaries } from "./beezupcommoninfosummaries";
import { ChannelCatalogMarketplacePropertiesLinks } from "./channelcatalogmarketplacepropertieslinks";
import { ChannelCatalogMarketplacePropertyGroup } from "./channelcatalogmarketplacepropertygroup";
/**
 * Successfully fetched channel catalog properties
 */
export declare class ChannelCatalogMarketplaceProperties extends SpeakeasyBase {
    info?: BeezUPCommonInfoSummaries;
    links: ChannelCatalogMarketplacePropertiesLinks;
    /**
     * The groups settings with constraints
     */
    propertyGroups: ChannelCatalogMarketplacePropertyGroup[];
}
