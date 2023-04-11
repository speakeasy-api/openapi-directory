import { SpeakeasyBase } from "../../../internal/utils";
import { ChannelCatalogCategoryConfiguration } from "./channelcatalogcategoryconfiguration";
/**
 * The request message to make a mapping between catalog category path and a channel category path
 */
export declare class ConfigureCategoryRequest extends SpeakeasyBase {
    channelCatalogCategories: ChannelCatalogCategoryConfiguration[];
    /**
     * Great feature! In case of mapping to parent channel category, you can ask to override the mapping of all sub channel category to this catalog category path
     */
    overrideSubCategoryMappings: boolean;
}
