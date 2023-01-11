import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LinksGetChannelCatalogExportationHistoryLink } from "./linksgetchannelcatalogexportationhistorylink";



export class ChannelCatalogExportationHistoryLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=self" })
  self?: LinksGetChannelCatalogExportationHistoryLink;
}
