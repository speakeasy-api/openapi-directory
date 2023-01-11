import { SpeakeasyBase } from "../../../internal/utils";
import { ChannelCatalogCategoryMappingSettings } from "./channelcatalogcategorymappingsettings";
import { ChannelCategorySettings } from "./channelcategorysettings";
import { ChannelCostSettings } from "./channelcostsettings";
import { ChannelCatalogColumnMappingWithName } from "./channelcatalogcolumnmappingwithname";
import { CostSettings } from "./costsettings";
import { ExclusionFilter } from "./exclusionfilter";
import { GeneralSettings } from "./generalsettings";
import { ChannelCatalogLinks } from "./channelcataloglinks";
import { ChannelCatalogState } from "./channelcatalogstate";
/**
 * The channel catalog
**/
export declare class ChannelCatalog extends SpeakeasyBase {
    categoryMappingSettings?: ChannelCatalogCategoryMappingSettings;
    channelCatalogId: string;
    channelCategorySettings: ChannelCategorySettings;
    channelCostSettings: ChannelCostSettings;
    channelId: string;
    channelImageUrl: string;
    channelName: string;
    columnMappings?: ChannelCatalogColumnMappingWithName[];
    costSettings?: CostSettings;
    enabled: boolean;
    exclusionFilters?: ExclusionFilter[];
    exportUrl?: string;
    generalSettings: GeneralSettings;
    isMarketplace: boolean;
    links: ChannelCatalogLinks;
    state: ChannelCatalogState;
    storeId: string;
    types: string[];
}
