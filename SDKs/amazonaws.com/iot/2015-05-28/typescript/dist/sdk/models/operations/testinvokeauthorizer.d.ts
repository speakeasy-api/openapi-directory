import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Specifies the HTTP context to use for the test authorizer request.
 */
export declare class TestInvokeAuthorizerRequestBodyHttpContext extends SpeakeasyBase {
    headers?: Record<string, string>;
    queryString?: string;
}
/**
 * Specifies the MQTT context to use for the test authorizer request
 */
export declare class TestInvokeAuthorizerRequestBodyMqttContext extends SpeakeasyBase {
    clientId?: string;
    password?: string;
    username?: string;
}
/**
 * Specifies the TLS context to use for the test authorizer request.
 */
export declare class TestInvokeAuthorizerRequestBodyTlsContext extends SpeakeasyBase {
    serverName?: string;
}
export declare class TestInvokeAuthorizerRequestBody extends SpeakeasyBase {
    /**
     * Specifies the HTTP context to use for the test authorizer request.
     */
    httpContext?: TestInvokeAuthorizerRequestBodyHttpContext;
    /**
     * Specifies the MQTT context to use for the test authorizer request
     */
    mqttContext?: TestInvokeAuthorizerRequestBodyMqttContext;
    /**
     * Specifies the TLS context to use for the test authorizer request.
     */
    tlsContext?: TestInvokeAuthorizerRequestBodyTlsContext;
    /**
     * The token returned by your custom authentication service.
     */
    token?: string;
    /**
     * The signature made with the token and your custom authentication service's private key. This value must be Base-64-encoded.
     */
    tokenSignature?: string;
}
export declare class TestInvokeAuthorizerRequest extends SpeakeasyBase {
    requestBody: TestInvokeAuthorizerRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The custom authorizer name.
     */
    authorizerName: string;
}
export declare class TestInvokeAuthorizerResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalFailureException
     */
    internalFailureException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * InvalidResponseException
     */
    invalidResponseException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ServiceUnavailableException
     */
    serviceUnavailableException?: any;
    /**
     * Success
     */
    testInvokeAuthorizerResponse?: shared.TestInvokeAuthorizerResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * UnauthorizedException
     */
    unauthorizedException?: any;
}
