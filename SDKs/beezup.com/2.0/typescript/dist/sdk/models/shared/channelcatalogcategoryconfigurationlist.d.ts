import { SpeakeasyBase } from "../../../internal/utils";
import { ChannelCatalogCategoryConfigurationInfo } from "./channelcatalogcategoryconfigurationinfo";
import { CostStatusEnum } from "./coststatusenum";
import { ChannelCatalogCategoryMappingsLinks } from "./channelcatalogcategorymappingslinks";
import { MappingStatusEnum } from "./mappingstatusenum";
export declare class ChannelCatalogCategoryConfigurationList extends SpeakeasyBase {
    channelCatalogCategoryConfigurations: ChannelCatalogCategoryConfigurationInfo[];
    costStatus: CostStatusEnum;
    links: ChannelCatalogCategoryMappingsLinks;
    mappingStatus: MappingStatusEnum;
}
