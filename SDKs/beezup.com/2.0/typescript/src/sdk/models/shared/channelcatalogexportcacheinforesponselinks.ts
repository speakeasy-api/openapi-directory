import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LinksClearChannelCatalogExportationCacheLink } from "./linksclearchannelcatalogexportationcachelink";
import { LinksGetChannelCatalogExportationCacheInfoLink } from "./linksgetchannelcatalogexportationcacheinfolink";



export class ChannelCatalogExportCacheInfoResponseLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clear" })
  clear?: LinksClearChannelCatalogExportationCacheLink;

  @SpeakeasyMetadata({ data: "json, name=self" })
  self: LinksGetChannelCatalogExportationCacheInfoLink;
}
