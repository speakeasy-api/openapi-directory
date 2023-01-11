import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ChannelCatalogExportationReporting } from "./channelcatalogexportationreporting";
import { ChannelCatalogExportationHistoryLinks } from "./channelcatalogexportationhistorylinks";
import { BeezUpCommonPaginationResult } from "./beezupcommonpaginationresult";



export class ChannelCatalogExportationHistory extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=exportations", elemType: ChannelCatalogExportationReporting })
  exportations: ChannelCatalogExportationReporting[];

  @SpeakeasyMetadata({ data: "json, name=links" })
  links: ChannelCatalogExportationHistoryLinks;

  @SpeakeasyMetadata({ data: "json, name=paginationResult" })
  paginationResult?: BeezUpCommonPaginationResult;
}
