import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetChannelCatalogProductByChannelCatalogResponse extends SpeakeasyBase {
    /**
     * ProductId not found or not authorized
     */
    beezUPCommonErrorResponseMessage?: shared.BeezUPCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The channel catalog product by channel catalog
     */
    channelCatalogProductByChannelCatalogResponse?: shared.ChannelCatalogProductByChannelCatalogResponse;
}
