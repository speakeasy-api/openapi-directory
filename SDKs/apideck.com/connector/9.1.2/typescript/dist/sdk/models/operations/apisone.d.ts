import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ApisOneSecurity extends SpeakeasyBase {
    apiKey: string;
}
export declare class ApisOneRequest extends SpeakeasyBase {
    /**
     * ID of the record you are acting upon.
     */
    id: string;
    /**
     * The ID of your Unify application
     */
    xApideckAppId: string;
}
export declare class ApisOneResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Apis
     */
    getApiResponse?: shared.GetApiResponse;
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
