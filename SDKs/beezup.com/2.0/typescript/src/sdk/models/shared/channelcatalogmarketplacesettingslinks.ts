import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LinksSetChannelCatalogMarketplaceSettingsLink } from "./linkssetchannelcatalogmarketplacesettingslink";
import { LinksGetChannelCatalogMarketplaceSettingsLink } from "./linksgetchannelcatalogmarketplacesettingslink";



export class ChannelCatalogMarketplaceSettingsLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=save" })
  save: LinksSetChannelCatalogMarketplaceSettingsLink;

  @SpeakeasyMetadata({ data: "json, name=self" })
  self: LinksGetChannelCatalogMarketplaceSettingsLink;
}
