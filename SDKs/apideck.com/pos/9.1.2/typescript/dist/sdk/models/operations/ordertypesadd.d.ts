import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class OrderTypesAddSecurity extends SpeakeasyBase {
    apiKey: string;
}
export declare class OrderTypesAddRequest extends SpeakeasyBase {
    orderTypeInput: shared.OrderTypeInput;
    /**
     * Include raw response. Mostly used for debugging purposes
     */
    raw?: boolean;
    /**
     * The ID of your Unify application
     */
    xApideckAppId: string;
    /**
     * ID of the consumer which you want to get or push data from
     */
    xApideckConsumerId: string;
    /**
     * Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.
     */
    xApideckServiceId?: string;
}
export declare class OrderTypesAddResponse extends SpeakeasyBase {
    /**
     * Bad Request
     */
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    /**
     * OrderTypes
     */
    createOrderTypeResponse?: shared.CreateOrderTypeResponse;
    /**
     * The specified resource was not found
     */
    notFoundResponse?: shared.NotFoundResponse;
    /**
     * Payment Required
     */
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Unauthorized
     */
    unauthorizedResponse?: shared.UnauthorizedResponse;
    /**
     * Unexpected error
     */
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    /**
     * Unprocessable
     */
    unprocessableResponse?: shared.UnprocessableResponse;
}
