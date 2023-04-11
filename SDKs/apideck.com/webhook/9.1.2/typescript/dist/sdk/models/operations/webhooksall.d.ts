import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class WebhooksAllSecurity extends SpeakeasyBase {
    apiKey: string;
}
export declare class WebhooksAllRequest extends SpeakeasyBase {
    /**
     * Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response.
     */
    cursor?: string;
    /**
     * Number of records to return
     */
    limit?: number;
    /**
     * The ID of your Unify application
     */
    xApideckAppId: string;
}
export declare class WebhooksAllResponse extends SpeakeasyBase {
    /**
     * Bad Request
     */
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    /**
     * Webhooks
     */
    getWebhooksResponse?: shared.GetWebhooksResponse;
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
