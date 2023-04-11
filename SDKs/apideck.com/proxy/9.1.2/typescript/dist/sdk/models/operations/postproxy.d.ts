import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostProxySecurity extends SpeakeasyBase {
    apiKey: string;
}
export declare class PostProxyRequest extends SpeakeasyBase {
    /**
     * Depending on the verb/method of the request this will contain the request body you want to POST/PATCH/PUT.
     */
    requestBody?: Uint8Array;
    /**
     * The ID of your Unify application
     */
    xApideckAppId: string;
    /**
     * ID of the consumer which you want to get or push data from
     */
    xApideckConsumerId: string;
    /**
     * Downstream authorization header. This will skip the Vault token injection.
     */
    xApideckDownstreamAuthorization?: string;
    /**
     * Downstream URL
     */
    xApideckDownstreamUrl: string;
    /**
     * Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.
     */
    xApideckServiceId: string;
}
/**
 * Unauthorized
 */
export declare class PostProxy401ApplicationJSON extends SpeakeasyBase {
    /**
     * Contains parameter or domain specific information related to the error and why it occurred.
     */
    detail?: string;
    /**
     * Contains an explanation of the status_code as defined in HTTP/1.1 standard (RFC 7231)
     */
    error?: string;
    /**
     * A human-readable message providing more details about the error.
     */
    message?: string;
    /**
     * Link to documentation of error type
     */
    ref?: string;
    /**
     * HTTP status code
     */
    statusCode?: number;
    /**
     * The type of error returned
     */
    typeName?: string;
}
export declare class PostProxyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Ok
     */
    postProxy200ApplicationJSONAny?: any;
    /**
     * Unauthorized
     */
    postProxy401ApplicationJSONObject?: PostProxy401ApplicationJSON;
    /**
     * Proxy error
     */
    postProxyDefaultApplicationJSONAny?: any;
}
