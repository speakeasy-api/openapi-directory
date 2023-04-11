import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetOrderSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class GetOrderRequest extends SpeakeasyBase {
    /**
     * Limit fields received in response. E.g. fields: id, name or fields items (id, name), see more at [partial response](https://developers.callfire.com/docs.html#partial-response) page.
     */
    fields?: string;
    /**
     * An id of an order
     */
    id: number;
}
export declare class GetOrderResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad request
     */
    errorResponse?: shared.ErrorResponse;
    /**
     * successful operation
     */
    numberOrder?: shared.NumberOrder;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
