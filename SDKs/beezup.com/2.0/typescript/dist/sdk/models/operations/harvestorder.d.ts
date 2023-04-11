import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class HarvestOrderRequest extends SpeakeasyBase {
    accountId: number;
    /**
     * The BeezUP Order identifier
     */
    beezUPOrderId: string;
    /**
     * The marketplace technical code
     */
    marketplaceTechnicalCode: string;
}
export declare class HarvestOrderResponse extends SpeakeasyBase {
    /**
     * Requested Order could not be found
     */
    beezUPCommonErrorResponseMessage?: shared.BeezUPCommonErrorResponseMessage;
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
