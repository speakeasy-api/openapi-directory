import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BeezUpCommonLink3 } from "./beezupcommonlink3";
import { LinksGetChannelCatalogMarketplacePropertiesLink } from "./linksgetchannelcatalogmarketplacepropertieslink";
import { LinksGetChannelCatalogMarketplaceSettingsLink } from "./linksgetchannelcatalogmarketplacesettingslink";



export class ChannelCatalogMarketplacePropertiesLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=externalConfigurationPage" })
  externalConfigurationPage?: BeezUpCommonLink3;

  @SpeakeasyMetadata({ data: "json, name=self" })
  self: LinksGetChannelCatalogMarketplacePropertiesLink;

  @SpeakeasyMetadata({ data: "json, name=settings" })
  settings?: LinksGetChannelCatalogMarketplaceSettingsLink;
}
