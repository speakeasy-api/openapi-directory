import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class OverrideChannelCatalogProductValuesRequest extends SpeakeasyBase {
    requestBody: Record<string, string>;
    /**
     * The channel catalog identifier
     */
    channelCatalogId: string;
    /**
     * The product identifier
     */
    productId: string;
}
export declare class OverrideChannelCatalogProductValuesResponse extends SpeakeasyBase {
    /**
     * BadRequest. See Error Response for more details
     */
    beezUPCommonErrorResponseMessage?: shared.BeezUPCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
