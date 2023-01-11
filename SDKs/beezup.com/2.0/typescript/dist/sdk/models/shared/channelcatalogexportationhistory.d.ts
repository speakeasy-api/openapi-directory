import { SpeakeasyBase } from "../../../internal/utils";
import { ChannelCatalogExportationReporting } from "./channelcatalogexportationreporting";
import { ChannelCatalogExportationHistoryLinks } from "./channelcatalogexportationhistorylinks";
import { BeezUpCommonPaginationResult } from "./beezupcommonpaginationresult";
export declare class ChannelCatalogExportationHistory extends SpeakeasyBase {
    exportations: ChannelCatalogExportationReporting[];
    links: ChannelCatalogExportationHistoryLinks;
    paginationResult?: BeezUpCommonPaginationResult;
}
