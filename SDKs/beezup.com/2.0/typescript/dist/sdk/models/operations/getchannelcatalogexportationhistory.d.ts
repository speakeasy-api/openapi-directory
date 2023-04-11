import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetChannelCatalogExportationHistoryRequest extends SpeakeasyBase {
    /**
     * The channel catalog identifier
     */
    channelCatalogId: string;
    /**
     * The page number you want to get
     */
    pageNumber: number;
    /**
     * The entry count you want to get
     */
    pageSize: number;
}
export declare class GetChannelCatalogExportationHistoryResponse extends SpeakeasyBase {
    /**
     * ChannelCatalogId not found or not authorized
     */
    beezUPCommonErrorResponseMessage?: shared.BeezUPCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Channel catalog exportation history
     */
    channelCatalogExportationHistory?: shared.ChannelCatalogExportationHistory;
}
