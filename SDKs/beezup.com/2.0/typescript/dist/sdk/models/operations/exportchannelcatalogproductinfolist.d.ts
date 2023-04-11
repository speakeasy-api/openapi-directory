import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ExportChannelCatalogProductInfoListRequest extends SpeakeasyBase {
    /**
     * The channel catalog identifier
     */
    channelCatalogId: string;
    /**
     * The file type of the exportation
     */
    format: shared.ExportFormatInQueryGeneralParameterEnum;
    /**
     * The channel catalog product list filter
     */
    getChannelCatalogProductInfoListRequest: shared.GetChannelCatalogProductInfoListRequest;
}
export declare class ExportChannelCatalogProductInfoListResponse extends SpeakeasyBase {
    /**
     * ChannelCatalogId not found or not authorized
     */
    beezUPCommonErrorResponseMessage?: shared.BeezUPCommonErrorResponseMessage;
    /**
     * Channel catalog product information list exported
     */
    beezUPCommonLink3?: shared.BeezUPCommonLink3;
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
