import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ReenableChannelCatalogCategoryMappingRequest extends SpeakeasyBase {
    /**
     * The channel catalog identifier
     */
    channelCatalogId: string;
}
export declare class ReenableChannelCatalogCategoryMappingResponse extends SpeakeasyBase {
    /**
     * ChannelCatalogId not found or not authorized
     */
    beezUPCommonErrorResponseMessage?: shared.BeezUPCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
