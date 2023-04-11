import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class WebhooksResolveSecurity extends SpeakeasyBase {
    apiKey: string;
}
export declare class WebhooksResolveRequest extends SpeakeasyBase {
    requestBody: any;
    /**
     * The name of downstream event when connector does not supply in body or header
     */
    e?: string;
    /**
     * JWT Webhook token that represents the connection lookupId. Signed so we know source came from us
     */
    id: string;
    /**
     * Service provider ID.
     */
    serviceId: string;
}
export declare class WebhooksResolveResponse extends SpeakeasyBase {
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
    /**
     * Resolve Webhook
     */
    resolveWebhookResponse?: shared.ResolveWebhookResponse;
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
