import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ChannelCatalogCategoryConfiguration } from "./channelcatalogcategoryconfiguration";



// ConfigureCategoryRequest
/** 
 * The request message to make a mapping between catalog category path and a channel category path
**/
export class ConfigureCategoryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=channelCatalogCategories", elemType: ChannelCatalogCategoryConfiguration })
  channelCatalogCategories: ChannelCatalogCategoryConfiguration[];

  @SpeakeasyMetadata({ data: "json, name=overrideSubCategoryMappings" })
  overrideSubCategoryMappings: boolean;
}
