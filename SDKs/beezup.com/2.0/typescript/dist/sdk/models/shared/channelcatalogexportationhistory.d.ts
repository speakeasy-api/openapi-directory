import { SpeakeasyBase } from "../../../internal/utils";
import { BeezUPCommonPaginationResult } from "./beezupcommonpaginationresult";
import { ChannelCatalogExportationHistoryLinks } from "./channelcatalogexportationhistorylinks";
import { ChannelCatalogExportationReporting } from "./channelcatalogexportationreporting";
/**
 * Channel catalog exportation history
 */
export declare class ChannelCatalogExportationHistory extends SpeakeasyBase {
    exportations: ChannelCatalogExportationReporting[];
    links: ChannelCatalogExportationHistoryLinks;
    paginationResult?: BeezUPCommonPaginationResult;
}
