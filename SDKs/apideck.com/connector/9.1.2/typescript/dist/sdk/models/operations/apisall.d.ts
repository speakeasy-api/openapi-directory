import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ApisAllSecurity extends SpeakeasyBase {
    apiKey: string;
}
export declare class ApisAllRequest extends SpeakeasyBase {
    /**
     * Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response.
     */
    cursor?: string;
    /**
     * Apply filters
     */
    filter?: shared.ApisFilter;
    /**
     * Number of records to return
     */
    limit?: number;
    /**
     * The ID of your Unify application
     */
    xApideckAppId: string;
}
export declare class ApisAllResponse extends SpeakeasyBase {
    /**
     * Bad Request
     */
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    /**
     * Apis
     */
    getApisResponse?: shared.GetApisResponse;
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
}
