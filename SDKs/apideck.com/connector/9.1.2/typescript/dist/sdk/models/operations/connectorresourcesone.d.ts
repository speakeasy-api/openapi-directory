import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ConnectorResourcesOneSecurity extends SpeakeasyBase {
    apiKey: string;
}
export declare class ConnectorResourcesOneRequest extends SpeakeasyBase {
    /**
     * ID of the record you are acting upon.
     */
    id: string;
    /**
     * ID of the resource you are acting upon.
     */
    resourceId: string;
    /**
     * Specify unified API for the connector resource. This is useful when a resource appears in multiple APIs
     */
    unifiedApi?: shared.UnifiedApiIdEnum;
    /**
     * The ID of your Unify application
     */
    xApideckAppId: string;
}
export declare class ConnectorResourcesOneResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * ConnectorResources
     */
    getConnectorResourceResponse?: shared.GetConnectorResourceResponse;
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
