import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteChannelCatalogProductValueOverrideRequest extends SpeakeasyBase {
    /**
     * The channel catalog identifier
     */
    channelCatalogId: string;
    /**
     * The channel column identifier
     */
    channelColumnId: string;
    /**
     * The product identifier
     */
    productId: string;
}
export declare class DeleteChannelCatalogProductValueOverrideResponse extends SpeakeasyBase {
    /**
     * ChannelCatalogId or ProductId not found or not authorized
     */
    beezUPCommonErrorResponseMessage?: shared.BeezUPCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
