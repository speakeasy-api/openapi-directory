import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ConnectorsOneSecurity extends SpeakeasyBase {
    apiKey: string;
}
export declare class ConnectorsOneRequest extends SpeakeasyBase {
    /**
     * ID of the record you are acting upon.
     */
    id: string;
    /**
     * The ID of your Unify application
     */
    xApideckAppId: string;
}
export declare class ConnectorsOneResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Connectors
     */
    getConnectorResponse?: shared.GetConnectorResponse;
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
}
