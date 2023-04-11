import { SpeakeasyBase } from "../../../internal/utils";
import { ChannelCatalogCategoryConfigurationInfo } from "./channelcatalogcategoryconfigurationinfo";
import { ChannelCatalogCategoryMappingsLinks } from "./channelcatalogcategorymappingslinks";
import { CostStatusEnum } from "./coststatusenum";
import { MappingStatusEnum } from "./mappingstatusenum";
/**
 * Channel catalog category mappings
 */
export declare class ChannelCatalogCategoryConfigurationList extends SpeakeasyBase {
    channelCatalogCategoryConfigurations: ChannelCatalogCategoryConfigurationInfo[];
    costStatus: CostStatusEnum;
    /**
     * The action you can do on the category mappings
     */
    links: ChannelCatalogCategoryMappingsLinks;
    mappingStatus: MappingStatusEnum;
}
