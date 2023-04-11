import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ApiResourcesOneSecurity extends SpeakeasyBase {
    apiKey: string;
}
export declare class ApiResourcesOneRequest extends SpeakeasyBase {
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
export declare class ApiResourcesOneResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * ApiResources
     */
    getApiResourceResponse?: shared.GetApiResourceResponse;
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
