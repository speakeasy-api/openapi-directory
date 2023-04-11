import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ConnectionSettingsUpdateSecurity extends SpeakeasyBase {
    apiKey: string;
}
export declare class ConnectionSettingsUpdateRequest extends SpeakeasyBase {
    /**
     * Fields that need to be updated on the resource
     */
    connectionInput: shared.ConnectionInput;
    /**
     * Resource Name
     */
    resource: string;
    /**
     * Service ID of the resource to return
     */
    serviceId: string;
    /**
     * Unified API
     */
    unifiedApi: string;
    /**
     * The ID of your Unify application
     */
    xApideckAppId: string;
    /**
     * ID of the consumer which you want to get or push data from
     */
    xApideckConsumerId: string;
}
export declare class ConnectionSettingsUpdateResponse extends SpeakeasyBase {
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
     * Connection updated
     */
    updateConnectionResponse?: shared.UpdateConnectionResponse;
}
