import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class JournalEntriesUpdateSecurity extends SpeakeasyBase {
    apiKey: string;
}
export declare class JournalEntriesUpdateRequest extends SpeakeasyBase {
    journalEntryInput: shared.JournalEntryInput;
    /**
     * ID of the record you are acting upon.
     */
    id: string;
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
export declare class JournalEntriesUpdateResponse extends SpeakeasyBase {
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
     * JournalEntries
     */
    updateJournalEntryResponse?: shared.UpdateJournalEntryResponse;
}
