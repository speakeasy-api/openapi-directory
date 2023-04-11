import { SpeakeasyBase } from "../../../internal/utils";
import { LinksGetChannelCatalogMarketplacePropertiesLink } from "./linksgetchannelcatalogmarketplacepropertieslink";
import { LinksGetChannelCatalogMarketplaceSettingsLink } from "./linksgetchannelcatalogmarketplacesettingslink";
import { LinksGetPublicationsLink } from "./linksgetpublicationslink";
import { MarketplaceChannelCatalogPublicationOption } from "./marketplacechannelcatalogpublicationoption";
/**
 * Indicate the actions you can do on a channel catalog. If the settings are valid, you will be able to access to the publication history.
 */
export declare class MarketplaceChannelCatalogLinks extends SpeakeasyBase {
    properties: LinksGetChannelCatalogMarketplacePropertiesLink;
    publications?: LinksGetPublicationsLink;
    publishOptions?: MarketplaceChannelCatalogPublicationOption[];
    settings: LinksGetChannelCatalogMarketplaceSettingsLink;
}
