import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class WebhooksExecuteSecurity extends SpeakeasyBase {
    apiKey: string;
}
export declare class WebhooksExecuteRequest extends SpeakeasyBase {
    requestBody: any;
    /**
     * JWT Webhook token that represents the unifiedApi and applicationId associated to the event source.
     */
    id: string;
    /**
     * Service provider ID.
     */
    serviceId: string;
}
export declare class WebhooksExecuteResponse extends SpeakeasyBase {
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
