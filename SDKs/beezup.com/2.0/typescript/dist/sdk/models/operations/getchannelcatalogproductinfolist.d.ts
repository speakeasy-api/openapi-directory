import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetChannelCatalogProductInfoListRequest extends SpeakeasyBase {
    /**
     * The channel catalog identifier
     */
    channelCatalogId: string;
    /**
     * The channel catalog product list filter
     */
    getChannelCatalogProductInfoListRequest: shared.GetChannelCatalogProductInfoListRequest;
}
export declare class GetChannelCatalogProductInfoListResponse extends SpeakeasyBase {
    /**
     * ChannelCatalogId not found or not authorized
     */
    beezUPCommonErrorResponseMessage?: shared.BeezUPCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Channel catalog product information
     */
    channelCatalogProductInfoList?: shared.ChannelCatalogProductInfoList;
}
