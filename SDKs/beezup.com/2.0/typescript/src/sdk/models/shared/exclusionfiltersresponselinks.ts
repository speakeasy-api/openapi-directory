import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LinksConfigureChannelCatalogExclusionFiltersLink } from "./linksconfigurechannelcatalogexclusionfilterslink";
import { LinksGetChannelCatalogExclusionFiltersLink } from "./linksgetchannelcatalogexclusionfilterslink";



export class ExclusionFiltersResponseLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=configure" })
  configure?: LinksConfigureChannelCatalogExclusionFiltersLink;

  @SpeakeasyMetadata({ data: "json, name=self" })
  self: LinksGetChannelCatalogExclusionFiltersLink;
}
