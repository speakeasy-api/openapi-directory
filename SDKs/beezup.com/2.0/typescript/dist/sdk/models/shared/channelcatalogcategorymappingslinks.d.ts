import { SpeakeasyBase } from "../../../internal/utils";
import { LinksDisableChannelCatalogCategoryMappingLink } from "./linksdisablechannelcatalogcategorymappinglink";
import { LinksGetChannelCatalogCategoriesLink } from "./linksgetchannelcatalogcategorieslink";
import { LinksReenableChannelCatalogCategoryMappingLink } from "./linksreenablechannelcatalogcategorymappinglink";
/**
 * The action you can do on the category mappings
 */
export declare class ChannelCatalogCategoryMappingsLinks extends SpeakeasyBase {
    disable?: LinksDisableChannelCatalogCategoryMappingLink;
    reenable?: LinksReenableChannelCatalogCategoryMappingLink;
    self: LinksGetChannelCatalogCategoriesLink;
}
