import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class WebhooksShortExecuteSecurity extends SpeakeasyBase {
    apiKey: string;
}
export declare class WebhooksShortExecuteRequest extends SpeakeasyBase {
    requestBody: any;
    /**
     * The name of downstream event when connector does not supply in body or header
     */
    e?: string;
    /**
     * JWT Webhook token that represents the unifiedApi and applicationId associated to the event source.
     */
    id: string;
    /**
     * Unique identifier to used to look up consumer/connection when receiving connector events from downstream.
     */
    lId?: string;
    /**
     * Service provider ID.
     */
    serviceId: string;
}
export declare class WebhooksShortExecuteResponse extends SpeakeasyBase {
    /**
     * Bad Request
     */
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    /**
     * Execute Webhook
     */
    executeWebhookResponse?: shared.ExecuteWebhookResponse;
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
