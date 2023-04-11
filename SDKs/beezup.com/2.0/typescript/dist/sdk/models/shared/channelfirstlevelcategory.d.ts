import { SpeakeasyBase } from "../../../internal/utils";
import { ChannelCategory } from "./channelcategory";
import { ChannelCategoryColumnOverride } from "./channelcategorycolumnoverride";
/**
 * The first level category with his sub categories
 */
export declare class ChannelFirstLevelCategory extends SpeakeasyBase {
    /**
     * The channel category channel code identifier
     */
    channelCategoryChannelCode?: string;
    /**
     * The channel category column overrides
     */
    channelCategoryColumnOverrides?: Record<string, ChannelCategoryColumnOverride>;
    /**
     * The default cost on this channel category
     */
    channelCategoryDefaultCost?: number;
    channelCategoryId: string;
    /**
     * The channel category level starting from 1
     */
    channelCategoryLevel: number;
    /**
     * The channel category name
     */
    channelCategoryName: string;
    subCategories?: ChannelCategory[];
}
