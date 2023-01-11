import { SpeakeasyBase } from "../../../internal/utils";
import { ChannelCategoryColumnOverride } from "./channelcategorycolumnoverride";
/**
 * The channel category
**/
export declare class ChannelCategory extends SpeakeasyBase {
    channelCategoryChannelCode?: string;
    channelCategoryColumnOverrides?: Record<string, ChannelCategoryColumnOverride>;
    channelCategoryDefaultCost?: number;
    channelCategoryId: string;
    channelCategoryLevel: number;
    channelCategoryPath: string[];
}
