import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LinksConfigureChannelCatalogCategoryLink } from "./linksconfigurechannelcatalogcategorylink";



export class ChannelCatalogCategoryMappingInfoLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=configureCategories" })
  configureCategories?: LinksConfigureChannelCatalogCategoryLink;
}
