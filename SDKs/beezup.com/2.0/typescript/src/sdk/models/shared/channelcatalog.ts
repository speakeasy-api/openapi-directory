import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ChannelCatalogCategoryMappingSettings } from "./channelcatalogcategorymappingsettings";
import { ChannelCategorySettings } from "./channelcategorysettings";
import { ChannelCostSettings } from "./channelcostsettings";
import { ChannelCatalogColumnMappingWithName } from "./channelcatalogcolumnmappingwithname";
import { CostSettings } from "./costsettings";
import { ExclusionFilter } from "./exclusionfilter";
import { GeneralSettings } from "./generalsettings";
import { ChannelCatalogLinks } from "./channelcataloglinks";
import { ChannelCatalogState } from "./channelcatalogstate";



// ChannelCatalog
/** 
 * The channel catalog
**/
export class ChannelCatalog extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=categoryMappingSettings" })
  categoryMappingSettings?: ChannelCatalogCategoryMappingSettings;

  @SpeakeasyMetadata({ data: "json, name=channelCatalogId" })
  channelCatalogId: string;

  @SpeakeasyMetadata({ data: "json, name=channelCategorySettings" })
  channelCategorySettings: ChannelCategorySettings;

  @SpeakeasyMetadata({ data: "json, name=channelCostSettings" })
  channelCostSettings: ChannelCostSettings;

  @SpeakeasyMetadata({ data: "json, name=channelId" })
  channelId: string;

  @SpeakeasyMetadata({ data: "json, name=channelImageUrl" })
  channelImageUrl: string;

  @SpeakeasyMetadata({ data: "json, name=channelName" })
  channelName: string;

  @SpeakeasyMetadata({ data: "json, name=columnMappings", elemType: ChannelCatalogColumnMappingWithName })
  columnMappings?: ChannelCatalogColumnMappingWithName[];

  @SpeakeasyMetadata({ data: "json, name=costSettings" })
  costSettings?: CostSettings;

  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled: boolean;

  @SpeakeasyMetadata({ data: "json, name=exclusionFilters", elemType: ExclusionFilter })
  exclusionFilters?: ExclusionFilter[];

  @SpeakeasyMetadata({ data: "json, name=exportUrl" })
  exportUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=generalSettings" })
  generalSettings: GeneralSettings;

  @SpeakeasyMetadata({ data: "json, name=isMarketplace" })
  isMarketplace: boolean;

  @SpeakeasyMetadata({ data: "json, name=links" })
  links: ChannelCatalogLinks;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state: ChannelCatalogState;

  @SpeakeasyMetadata({ data: "json, name=storeId" })
  storeId: string;

  @SpeakeasyMetadata({ data: "json, name=types" })
  types: string[];
}
