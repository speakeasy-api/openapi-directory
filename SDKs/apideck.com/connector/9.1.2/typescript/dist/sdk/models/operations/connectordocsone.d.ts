import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ConnectorDocsOneSecurity extends SpeakeasyBase {
    apiKey: string;
}
export declare class ConnectorDocsOneRequest extends SpeakeasyBase {
    /**
     * ID of the Doc
     */
    docId: string;
    /**
     * ID of the record you are acting upon.
     */
    id: string;
    /**
     * The ID of your Unify application
     */
    xApideckAppId: string;
}
export declare class ConnectorDocsOneResponse extends SpeakeasyBase {
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
     * Connectors
     */
    connectorDocsOne200TextMarkdownMarkdownString?: string;
}
