import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LinksDisableChannelCatalogCategoryMappingLink } from "./linksdisablechannelcatalogcategorymappinglink";
import { LinksReenableChannelCatalogCategoryMappingLink } from "./linksreenablechannelcatalogcategorymappinglink";
import { LinksGetChannelCatalogCategoriesLink } from "./linksgetchannelcatalogcategorieslink";



// ChannelCatalogCategoryMappingsLinks
/** 
 * The action you can do on the category mappings
**/
export class ChannelCatalogCategoryMappingsLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=disable" })
  disable?: LinksDisableChannelCatalogCategoryMappingLink;

  @SpeakeasyMetadata({ data: "json, name=reenable" })
  reenable?: LinksReenableChannelCatalogCategoryMappingLink;

  @SpeakeasyMetadata({ data: "json, name=self" })
  self: LinksGetChannelCatalogCategoriesLink;
}
