import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetOrderHistoryV3Request extends SpeakeasyBase {
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
export declare class GetOrderHistoryV3Response extends SpeakeasyBase {
    /**
     * Occurs when something goes wrong
     */
    beezUPCommonErrorResponseMessage?: shared.BeezUPCommonErrorResponseMessage;
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Requested Order could not be found
     */
    errorResponseMessage?: shared.ErrorResponseMessage;
    /**
     * Successfully fetched Order history
     */
    orderHistory?: shared.OrderHistory;
}
