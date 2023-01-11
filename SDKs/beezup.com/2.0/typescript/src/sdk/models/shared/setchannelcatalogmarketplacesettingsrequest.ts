import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ChannelCatalogMarketplaceSetting } from "./channelcatalogmarketplacesetting";



// SetChannelCatalogMarketplaceSettingsRequest
/** 
 * The channel catalog marketplace settings to save
**/
export class SetChannelCatalogMarketplaceSettingsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=settings", elemType: ChannelCatalogMarketplaceSetting })
  settings: ChannelCatalogMarketplaceSetting[];
}
