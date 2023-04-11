import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ReenableChannelCatalogProductRequest extends SpeakeasyBase {
    /**
     * The channel catalog identifier
     */
    channelCatalogId: string;
    /**
     * The product identifier
     */
    productId: string;
}
export declare class ReenableChannelCatalogProductResponse extends SpeakeasyBase {
    /**
     * ChannelCatalogId or ProductId not found or not authorized
     */
    beezUPCommonErrorResponseMessage?: shared.BeezUPCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
