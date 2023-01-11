import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetChannelCatalogExportationHistoryPathParams extends SpeakeasyBase {
    channelCatalogId: string;
}
export declare class GetChannelCatalogExportationHistoryQueryParams extends SpeakeasyBase {
    pageNumber: number;
    pageSize: number;
}
export declare class GetChannelCatalogExportationHistoryRequest extends SpeakeasyBase {
    pathParams: GetChannelCatalogExportationHistoryPathParams;
    queryParams: GetChannelCatalogExportationHistoryQueryParams;
}
export declare class GetChannelCatalogExportationHistoryResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
    channelCatalogExportationHistory?: shared.ChannelCatalogExportationHistory;
}
