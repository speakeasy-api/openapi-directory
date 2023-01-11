import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ChannelCatalogCategoryConfiguration
/** 
 * Represent a mapping between a catalog category path and a channel category path.
 * The cost on this mapping can be applied.
 * 
**/
export class ChannelCatalogCategoryConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=autoMapNewSubCategories" })
  autoMapNewSubCategories: boolean;

  @SpeakeasyMetadata({ data: "json, name=catalogCategoryPath" })
  catalogCategoryPath: string[];

  @SpeakeasyMetadata({ data: "json, name=channelCategoryPath" })
  channelCategoryPath?: string[];

  @SpeakeasyMetadata({ data: "json, name=costValue" })
  costValue?: number;
}
