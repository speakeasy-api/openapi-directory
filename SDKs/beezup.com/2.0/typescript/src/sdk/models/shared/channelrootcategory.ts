import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ChannelFirstLevelCategory } from "./channelfirstlevelcategory";



// ChannelRootCategory
/** 
 * Get channel first level category list
**/
export class ChannelRootCategory extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=firstLevelCategories", elemType: ChannelFirstLevelCategory })
  firstLevelCategories: ChannelFirstLevelCategory[];
}
