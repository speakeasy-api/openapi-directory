import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ChannelCatalogCategoryMappingInfoLinks } from "./channelcatalogcategorymappinginfolinks";



// ChannelCatalogCategoryConfigurationInfo
/** 
 * For all catalog categories the current mapping applied
**/
export class ChannelCatalogCategoryConfigurationInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=catalogCategoryPath" })
  catalogCategoryPath: string[];

  @SpeakeasyMetadata({ data: "json, name=channelCategoryPath" })
  channelCategoryPath?: string[];

  @SpeakeasyMetadata({ data: "json, name=costValue" })
  costValue?: number;

  @SpeakeasyMetadata({ data: "json, name=links" })
  links: ChannelCatalogCategoryMappingInfoLinks;
}
