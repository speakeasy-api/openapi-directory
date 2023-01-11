import { SpeakeasyBase } from "../../../internal/utils";
import { ChannelCategoryColumnOverride } from "./channelcategorycolumnoverride";
import { ChannelCategory } from "./channelcategory";
/**
 * The first level category with his sub categories
**/
export declare class ChannelFirstLevelCategory extends SpeakeasyBase {
    channelCategoryChannelCode?: string;
    channelCategoryColumnOverrides?: Record<string, ChannelCategoryColumnOverride>;
    channelCategoryDefaultCost?: number;
    channelCategoryId: string;
    channelCategoryLevel: number;
    channelCategoryName: string;
    subCategories?: ChannelCategory[];
}
