import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ChannelCatalogMarketplaceSettingsLinks } from "./channelcatalogmarketplacesettingslinks";
import { ChannelCatalogMarketplaceSetting } from "./channelcatalogmarketplacesetting";



// ChannelCatalogMarketplaceSettings
/** 
 * The channel catalog marketplace settings
**/
export class ChannelCatalogMarketplaceSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=links" })
  links: ChannelCatalogMarketplaceSettingsLinks;

  @SpeakeasyMetadata({ data: "json, name=settings", elemType: ChannelCatalogMarketplaceSetting })
  settings: ChannelCatalogMarketplaceSetting[];
}
