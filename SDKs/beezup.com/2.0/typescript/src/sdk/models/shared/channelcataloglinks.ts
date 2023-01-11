import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LinksGetChannelCatalogCategoriesLink } from "./linksgetchannelcatalogcategorieslink";
import { ExternalLinksGetChannelInfoLink } from "./externallinksgetchannelinfolink";
import { LinksConfigureChannelCatalogColumnMappingsLink } from "./linksconfigurechannelcatalogcolumnmappingslink";
import { LinksConfigureChannelCatalogCostSettingsLink } from "./linksconfigurechannelcatalogcostsettingslink";
import { LinksConfigureChannelCatalogGeneralSettingsLink } from "./linksconfigurechannelcataloggeneralsettingslink";
import { LinksDeleteChannelCatalogLink } from "./linksdeletechannelcataloglink";
import { LinksDisableChannelCatalogLink } from "./linksdisablechannelcataloglink";
import { LinksDisableChannelCatalogCategoryMappingLink } from "./linksdisablechannelcatalogcategorymappinglink";
import { LinksEnableChannelCatalogLink } from "./linksenablechannelcataloglink";
import { LinksGetChannelCatalogExclusionFiltersLink } from "./linksgetchannelcatalogexclusionfilterslink";
import { LinksGetChannelCatalogExportationCacheInfoLink } from "./linksgetchannelcatalogexportationcacheinfolink";
import { ExternalLinksGetChannelCatalogMarketplaceSettingsLink } from "./externallinksgetchannelcatalogmarketplacesettingslink";
import { LinksGetChannelCatalogProductInfoListLink } from "./linksgetchannelcatalogproductinfolistlink";
import { LinksReenableChannelCatalogCategoryMappingLink } from "./linksreenablechannelcatalogcategorymappinglink";
import { LinksGetChannelCatalogLink } from "./linksgetchannelcataloglink";



// ChannelCatalogLinks
/** 
 * Indicates the actions you can do on a channel catalog
**/
export class ChannelCatalogLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=categoryMappings" })
  categoryMappings?: LinksGetChannelCatalogCategoriesLink;

  @SpeakeasyMetadata({ data: "json, name=channelInfo" })
  channelInfo?: ExternalLinksGetChannelInfoLink;

  @SpeakeasyMetadata({ data: "json, name=configureColumnMappings" })
  configureColumnMappings?: LinksConfigureChannelCatalogColumnMappingsLink;

  @SpeakeasyMetadata({ data: "json, name=configureCostSettings" })
  configureCostSettings?: LinksConfigureChannelCatalogCostSettingsLink;

  @SpeakeasyMetadata({ data: "json, name=configureGeneralSettings" })
  configureGeneralSettings?: LinksConfigureChannelCatalogGeneralSettingsLink;

  @SpeakeasyMetadata({ data: "json, name=delete" })
  delete?: LinksDeleteChannelCatalogLink;

  @SpeakeasyMetadata({ data: "json, name=disable" })
  disable?: LinksDisableChannelCatalogLink;

  @SpeakeasyMetadata({ data: "json, name=disableCategoryMappings" })
  disableCategoryMappings?: LinksDisableChannelCatalogCategoryMappingLink;

  @SpeakeasyMetadata({ data: "json, name=enable" })
  enable?: LinksEnableChannelCatalogLink;

  @SpeakeasyMetadata({ data: "json, name=exclusionFilters" })
  exclusionFilters?: LinksGetChannelCatalogExclusionFiltersLink;

  @SpeakeasyMetadata({ data: "json, name=exportationCacheInfo" })
  exportationCacheInfo?: LinksGetChannelCatalogExportationCacheInfoLink;

  @SpeakeasyMetadata({ data: "json, name=marketplaceSettings" })
  marketplaceSettings?: ExternalLinksGetChannelCatalogMarketplaceSettingsLink;

  @SpeakeasyMetadata({ data: "json, name=products" })
  products?: LinksGetChannelCatalogProductInfoListLink;

  @SpeakeasyMetadata({ data: "json, name=reenableCategoryMappings" })
  reenableCategoryMappings?: LinksReenableChannelCatalogCategoryMappingLink;

  @SpeakeasyMetadata({ data: "json, name=self" })
  self: LinksGetChannelCatalogLink;
}
