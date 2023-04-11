import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CollectionTicketCommentsDeleteSecurity extends SpeakeasyBase {
    apiKey: string;
}
export declare class CollectionTicketCommentsDeleteRequest extends SpeakeasyBase {
    /**
     * The collection ID
     */
    collectionId: string;
    /**
     * ID of the record you are acting upon.
     */
    id: string;
    /**
     * Include raw response. Mostly used for debugging purposes
     */
    raw?: boolean;
    /**
     * ID of the ticket you are acting upon.
     */
    ticketId: string;
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
export declare class CollectionTicketCommentsDeleteResponse extends SpeakeasyBase {
    /**
     * Bad Request
     */
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    /**
     * Delete a Comment
     */
    deleteCommentResponse?: shared.DeleteCommentResponse;
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
