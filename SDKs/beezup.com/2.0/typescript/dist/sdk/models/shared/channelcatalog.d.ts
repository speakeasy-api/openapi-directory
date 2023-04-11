import { SpeakeasyBase } from "../../../internal/utils";
import { ChannelCatalogCategoryMappingSettings } from "./channelcatalogcategorymappingsettings";
import { ChannelCatalogColumnMappingWithName } from "./channelcatalogcolumnmappingwithname";
import { ChannelCatalogLinks } from "./channelcataloglinks";
import { ChannelCatalogState } from "./channelcatalogstate";
import { ChannelCategorySettings } from "./channelcategorysettings";
import { ChannelCostSettings } from "./channelcostsettings";
import { CostSettings } from "./costsettings";
import { ExclusionFilter } from "./exclusionfilter";
import { GeneralSettings } from "./generalsettings";
/**
 * The channel catalog
 */
export declare class ChannelCatalog extends SpeakeasyBase {
    categoryMappingSettings?: ChannelCatalogCategoryMappingSettings;
    /**
     * The channel catalog identifier
     */
    channelCatalogId: string;
    channelCategorySettings: ChannelCategorySettings;
    /**
     * Indicate the default configuration of the cost on this channel.
     */
    channelCostSettings: ChannelCostSettings;
    /**
     * The channel identifier
     */
    channelId: string;
    /**
     * The URL <a href="https://en.wikipedia.org/wiki/URL">https://en.wikipedia.org/wiki/URL</a>
     */
    channelImageUrl: string;
    /**
     * The channel name
     */
    channelName: string;
    /**
     * The column mapping list between a channel and a catalog
     */
    columnMappings?: ChannelCatalogColumnMappingWithName[];
    /**
     * If this property is not indicated please force the user to configure the cost settings.
     *
     * @remarks
     * Defines the cost type you have on this channel with the cost value.
     *
     */
    costSettings?: CostSettings;
    /**
     * Indicates if the channel catalog is enable
     */
    enabled: boolean;
    /**
     * The exclusion filter list
     */
    exclusionFilters?: ExclusionFilter[];
    /**
     * The URL <a href="https://en.wikipedia.org/wiki/URL">https://en.wikipedia.org/wiki/URL</a>
     */
    exportUrl?: string;
    /**
     * Represents the general settings of your channel catalog
     */
    generalSettings: GeneralSettings;
    /**
     * Indicates if this channel catalog is related to a marketplace
     */
    isMarketplace: boolean;
    /**
     * Indicates the actions you can do on a channel catalog
     */
    links: ChannelCatalogLinks;
    /**
     * Channel Catalog State
     */
    state: ChannelCatalogState;
    /**
     * The store identifier
     */
    storeId: string;
    /**
     * The channel type list related to the channel
     */
    types: string[];
}
