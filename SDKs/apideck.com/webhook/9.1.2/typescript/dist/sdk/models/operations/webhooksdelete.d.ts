import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class WebhooksDeleteSecurity extends SpeakeasyBase {
    apiKey: string;
}
export declare class WebhooksDeleteRequest extends SpeakeasyBase {
    /**
     * JWT Webhook token that represents the unifiedApi and applicationId associated to the event source.
     */
    id: string;
    /**
     * The ID of your Unify application
     */
    xApideckAppId: string;
}
export declare class WebhooksDeleteResponse extends SpeakeasyBase {
    /**
     * Bad Request
     */
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    /**
     * Webhooks
     */
    deleteWebhookResponse?: shared.DeleteWebhookResponse;
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
