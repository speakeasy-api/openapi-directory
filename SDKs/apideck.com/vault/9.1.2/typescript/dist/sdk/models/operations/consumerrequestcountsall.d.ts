import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ConsumerRequestCountsAllSecurity extends SpeakeasyBase {
    apiKey: string;
}
export declare class ConsumerRequestCountsAllRequest extends SpeakeasyBase {
    /**
     * ID of the consumer to return
     */
    consumerId: string;
    /**
     * Scopes results to requests that happened before datetime
     */
    endDatetime: string;
    /**
     * Scopes results to requests that happened after datetime
     */
    startDatetime: string;
    /**
     * The ID of your Unify application
     */
    xApideckAppId: string;
}
export declare class ConsumerRequestCountsAllResponse extends SpeakeasyBase {
    /**
     * Bad Request
     */
    badRequestResponse?: shared.BadRequestResponse;
    /**
     * Consumers Request Counts within Date Range
     */
    consumerRequestCountsInDateRangeResponse?: shared.ConsumerRequestCountsInDateRangeResponse;
    contentType: string;
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
