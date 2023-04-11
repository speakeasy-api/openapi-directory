import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetChannelCatalogProductInfoRequest extends SpeakeasyBase {
    /**
     * The channel catalog identifier
     */
    channelCatalogId: string;
    /**
     * The product identifier
     */
    productId: string;
}
export declare class GetChannelCatalogProductInfoResponse extends SpeakeasyBase {
    /**
     * ChannelCatalog or ProductId not found or not authorized
     */
    beezUPCommonErrorResponseMessage?: shared.BeezUPCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Channel catalog product information
     */
    channelCatalogProductInfo?: shared.ChannelCatalogProductInfo;
}
