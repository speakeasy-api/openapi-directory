import { SpeakeasyBase } from "../../../internal/utils";
import { ExternalLinksGetChannelCatalogMarketplaceSettingsLink } from "./externallinksgetchannelcatalogmarketplacesettingslink";
import { ExternalLinksGetChannelInfoLink } from "./externallinksgetchannelinfolink";
import { LinksConfigureChannelCatalogColumnMappingsLink } from "./linksconfigurechannelcatalogcolumnmappingslink";
import { LinksConfigureChannelCatalogCostSettingsLink } from "./linksconfigurechannelcatalogcostsettingslink";
import { LinksConfigureChannelCatalogGeneralSettingsLink } from "./linksconfigurechannelcataloggeneralsettingslink";
import { LinksDeleteChannelCatalogLink } from "./linksdeletechannelcataloglink";
import { LinksDisableChannelCatalogCategoryMappingLink } from "./linksdisablechannelcatalogcategorymappinglink";
import { LinksDisableChannelCatalogLink } from "./linksdisablechannelcataloglink";
import { LinksEnableChannelCatalogLink } from "./linksenablechannelcataloglink";
import { LinksGetChannelCatalogCategoriesLink } from "./linksgetchannelcatalogcategorieslink";
import { LinksGetChannelCatalogExclusionFiltersLink } from "./linksgetchannelcatalogexclusionfilterslink";
import { LinksGetChannelCatalogExportationCacheInfoLink } from "./linksgetchannelcatalogexportationcacheinfolink";
import { LinksGetChannelCatalogLink } from "./linksgetchannelcataloglink";
import { LinksGetChannelCatalogProductInfoListLink } from "./linksgetchannelcatalogproductinfolistlink";
import { LinksReenableChannelCatalogCategoryMappingLink } from "./linksreenablechannelcatalogcategorymappinglink";
/**
 * Indicates the actions you can do on a channel catalog
 */
export declare class ChannelCatalogLinks extends SpeakeasyBase {
    categoryMappings?: LinksGetChannelCatalogCategoriesLink;
    channelInfo?: ExternalLinksGetChannelInfoLink;
    configureColumnMappings?: LinksConfigureChannelCatalogColumnMappingsLink;
    configureCostSettings?: LinksConfigureChannelCatalogCostSettingsLink;
    configureGeneralSettings?: LinksConfigureChannelCatalogGeneralSettingsLink;
    delete?: LinksDeleteChannelCatalogLink;
    disable?: LinksDisableChannelCatalogLink;
    disableCategoryMappings?: LinksDisableChannelCatalogCategoryMappingLink;
    enable?: LinksEnableChannelCatalogLink;
    exclusionFilters?: LinksGetChannelCatalogExclusionFiltersLink;
    exportationCacheInfo?: LinksGetChannelCatalogExportationCacheInfoLink;
    marketplaceSettings?: ExternalLinksGetChannelCatalogMarketplaceSettingsLink;
    products?: LinksGetChannelCatalogProductInfoListLink;
    reenableCategoryMappings?: LinksReenableChannelCatalogCategoryMappingLink;
    self: LinksGetChannelCatalogLink;
}
