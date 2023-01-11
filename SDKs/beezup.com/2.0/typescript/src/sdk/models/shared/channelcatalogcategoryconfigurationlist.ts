import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ChannelCatalogCategoryConfigurationInfo } from "./channelcatalogcategoryconfigurationinfo";
import { CostStatusEnum } from "./coststatusenum";
import { ChannelCatalogCategoryMappingsLinks } from "./channelcatalogcategorymappingslinks";
import { MappingStatusEnum } from "./mappingstatusenum";



export class ChannelCatalogCategoryConfigurationList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=channelCatalogCategoryConfigurations", elemType: ChannelCatalogCategoryConfigurationInfo })
  channelCatalogCategoryConfigurations: ChannelCatalogCategoryConfigurationInfo[];

  @SpeakeasyMetadata({ data: "json, name=costStatus" })
  costStatus: CostStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=links" })
  links: ChannelCatalogCategoryMappingsLinks;

  @SpeakeasyMetadata({ data: "json, name=mappingStatus" })
  mappingStatus: MappingStatusEnum;
}
