import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ConnectorsAllSecurity extends SpeakeasyBase {
    apiKey: string;
}
export declare class ConnectorsAllRequest extends SpeakeasyBase {
    /**
     * Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response.
     */
    cursor?: string;
    /**
     * Apply filters
     */
    filter?: shared.ConnectorsFilter;
    /**
     * Number of records to return
     */
    limit?: number;
    /**
     * The ID of your Unify application
     */
    xApideckAppId: string;
}
export declare class ConnectorsAllResponse extends SpeakeasyBase {
    /**
     * Bad Request
     */
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    /**
     * Connectors
     */
    getConnectorsResponse?: shared.GetConnectorsResponse;
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
