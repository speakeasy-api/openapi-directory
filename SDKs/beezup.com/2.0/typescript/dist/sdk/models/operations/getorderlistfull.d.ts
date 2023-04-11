import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetOrderListFullRequest extends SpeakeasyBase {
    /**
     * Allows the client to indicate wether it accepts a compressed encoding to reduce traffic size
     */
    acceptEncoding: string[];
    orderListRequest: shared.OrderListRequest;
}
export declare class GetOrderListFullResponse extends SpeakeasyBase {
    /**
     * Could not process request for given parameters values. Please check error message for more details.
     */
    beezUPCommonErrorResponseMessage?: shared.BeezUPCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successfully fetched the full list of Orders
     */
    orderListFull?: shared.OrderListFull;
}
