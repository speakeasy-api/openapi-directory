import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ApiResourceCoverageOneSecurity extends SpeakeasyBase {
    apiKey: string;
}
export declare class ApiResourceCoverageOneRequest extends SpeakeasyBase {
    /**
     * ID of the record you are acting upon.
     */
    id: string;
    /**
     * ID of the resource you are acting upon.
     */
    resourceId: string;
    /**
     * The ID of your Unify application
     */
    xApideckAppId: string;
}
export declare class ApiResourceCoverageOneResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * ApiResources
     */
    getApiResourceCoverageResponse?: shared.GetApiResourceCoverageResponse;
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
