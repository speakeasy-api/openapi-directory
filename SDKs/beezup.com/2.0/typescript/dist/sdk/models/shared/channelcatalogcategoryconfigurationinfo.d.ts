import { SpeakeasyBase } from "../../../internal/utils";
import { ChannelCatalogCategoryMappingInfoLinks } from "./channelcatalogcategorymappinginfolinks";
/**
 * For all catalog categories the current mapping applied
 */
export declare class ChannelCatalogCategoryConfigurationInfo extends SpeakeasyBase {
    /**
     * The catalog category path
     */
    catalogCategoryPath: string[];
    /**
     * The channel category path
     */
    channelCategoryPath?: string[];
    /**
     * In case of CPC_ByCategory or CPA_ByCategory cost type, you have to indicate the cost value.
     */
    costValue?: number;
    links: ChannelCatalogCategoryMappingInfoLinks;
}
