import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LinksGetChannelCatalogMarketplacePropertiesLink } from "./linksgetchannelcatalogmarketplacepropertieslink";
import { LinksGetPublicationsLink } from "./linksgetpublicationslink";
import { MarketplaceChannelCatalogPublicationOption } from "./marketplacechannelcatalogpublicationoption";
import { LinksGetChannelCatalogMarketplaceSettingsLink } from "./linksgetchannelcatalogmarketplacesettingslink";



// MarketplaceChannelCatalogLinks
/** 
 * Indicate the actions you can do on a channel catalog. If the settings are valid, you will be able to access to the publication history.
**/
export class MarketplaceChannelCatalogLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=properties" })
  properties: LinksGetChannelCatalogMarketplacePropertiesLink;

  @SpeakeasyMetadata({ data: "json, name=publications" })
  publications?: LinksGetPublicationsLink;

  @SpeakeasyMetadata({ data: "json, name=publishOptions", elemType: MarketplaceChannelCatalogPublicationOption })
  publishOptions?: MarketplaceChannelCatalogPublicationOption[];

  @SpeakeasyMetadata({ data: "json, name=settings" })
  settings: LinksGetChannelCatalogMarketplaceSettingsLink;
}
