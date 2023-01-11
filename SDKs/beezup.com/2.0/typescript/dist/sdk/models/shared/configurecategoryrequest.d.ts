import { SpeakeasyBase } from "../../../internal/utils";
import { ChannelCatalogCategoryConfiguration } from "./channelcatalogcategoryconfiguration";
/**
 * The request message to make a mapping between catalog category path and a channel category path
**/
export declare class ConfigureCategoryRequest extends SpeakeasyBase {
    channelCatalogCategories: ChannelCatalogCategoryConfiguration[];
    overrideSubCategoryMappings: boolean;
}
