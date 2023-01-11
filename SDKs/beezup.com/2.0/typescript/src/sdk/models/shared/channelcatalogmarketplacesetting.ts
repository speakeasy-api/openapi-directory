import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ChannelCatalogMarketplaceSettingDiscriminatorTypeEnum } from "./channelcatalogmarketplacesettingdiscriminatortypeenum";



// ChannelCatalogMarketplaceSetting
/** 
 * Model for fetching a channel catalog marketplace setting
**/
export class ChannelCatalogMarketplaceSetting extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=discriminatorType" })
  discriminatorType: ChannelCatalogMarketplaceSettingDiscriminatorTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}
