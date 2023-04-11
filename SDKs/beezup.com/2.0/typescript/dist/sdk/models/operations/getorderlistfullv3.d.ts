import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetOrderListFullV3Request extends SpeakeasyBase {
    /**
     * Allows the client to indicate wether it accepts a compressed encoding to reduce traffic size
     */
    acceptEncoding: string;
    orderListRequest: shared.OrderListRequest;
}
export declare class GetOrderListFullV3Response extends SpeakeasyBase {
    /**
     * Occurs when something goes wrong
     */
    beezUPCommonErrorResponseMessage?: shared.BeezUPCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Could not process request for given parameters values. Please check error message for more details.
     */
    errorResponseMessage?: shared.ErrorResponseMessage;
    /**
     * Successfully fetched the full list of Orders
     */
    orderListFullWithLinks?: shared.OrderListFullWithLinks;
}
