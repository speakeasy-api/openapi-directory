import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class WebhooksUpdateSecurity extends SpeakeasyBase {
    apiKey: string;
}
export declare class WebhooksUpdateRequest extends SpeakeasyBase {
    updateWebhookRequest: shared.UpdateWebhookRequest;
    /**
     * JWT Webhook token that represents the unifiedApi and applicationId associated to the event source.
     */
    id: string;
    /**
     * The ID of your Unify application
     */
    xApideckAppId: string;
}
export declare class WebhooksUpdateResponse extends SpeakeasyBase {
    /**
     * Bad Request
     */
    badRequestResponse?: shared.BadRequestResponse;
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
    /**
     * Webhooks
     */
    updateWebhookResponse?: shared.UpdateWebhookResponse;
}
