import { SpeakeasyBase } from "../../../internal/utils";
import { ChannelCatalogCategoryMappingInfoLinks } from "./channelcatalogcategorymappinginfolinks";
/**
 * For all catalog categories the current mapping applied
**/
export declare class ChannelCatalogCategoryConfigurationInfo extends SpeakeasyBase {
    catalogCategoryPath: string[];
    channelCategoryPath?: string[];
    costValue?: number;
    links: ChannelCatalogCategoryMappingInfoLinks;
}
