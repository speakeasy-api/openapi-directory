import { SpeakeasyBase } from "../../../internal/utils";
import { ChannelCategoryColumnOverride } from "./channelcategorycolumnoverride";
/**
 * The channel category
 */
export declare class ChannelCategory extends SpeakeasyBase {
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
     * The channel category path
     */
    channelCategoryPath: string[];
}
