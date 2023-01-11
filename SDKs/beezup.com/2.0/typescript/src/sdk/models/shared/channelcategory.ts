import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ChannelCategoryColumnOverride } from "./channelcategorycolumnoverride";



// ChannelCategory
/** 
 * The channel category
**/
export class ChannelCategory extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=channelCategoryChannelCode" })
  channelCategoryChannelCode?: string;

  @SpeakeasyMetadata({ data: "json, name=channelCategoryColumnOverrides", elemType: ChannelCategoryColumnOverride })
  channelCategoryColumnOverrides?: Record<string, ChannelCategoryColumnOverride>;

  @SpeakeasyMetadata({ data: "json, name=channelCategoryDefaultCost" })
  channelCategoryDefaultCost?: number;

  @SpeakeasyMetadata({ data: "json, name=channelCategoryId" })
  channelCategoryId: string;

  @SpeakeasyMetadata({ data: "json, name=channelCategoryLevel" })
  channelCategoryLevel: number;

  @SpeakeasyMetadata({ data: "json, name=channelCategoryPath" })
  channelCategoryPath: string[];
}
