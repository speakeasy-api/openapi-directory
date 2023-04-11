import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Represents a CORS configuration. Supported only for HTTP APIs. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-cors.html">Configuring CORS</a> for more information.
 */
export declare class CreateApiRequestBodyCorsConfiguration extends SpeakeasyBase {
    allowCredentials?: boolean;
    allowHeaders?: string[];
    allowMethods?: string[];
    allowOrigins?: string[];
    exposeHeaders?: string[];
    maxAge?: number;
}
/**
 * Represents a protocol type.
 */
export declare enum CreateApiRequestBodyProtocolTypeEnum {
    Websocket = "WEBSOCKET",
    Http = "HTTP"
}
export declare class CreateApiRequestBody extends SpeakeasyBase {
    /**
     * An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information.
     */
    apiKeySelectionExpression?: string;
    /**
     * Represents a CORS configuration. Supported only for HTTP APIs. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-cors.html">Configuring CORS</a> for more information.
     */
    corsConfiguration?: CreateApiRequestBodyCorsConfiguration;
    /**
     * Represents an Amazon Resource Name (ARN).
     */
    credentialsArn?: string;
    /**
     * A string with a length between [0-1024].
     */
    description?: string;
    /**
     * Specifies whether clients can invoke your API by using the default execute-api endpoint. By default, clients can invoke your API with the default https://{api_id}.execute-api.{region}.amazonaws.com endpoint. To require that clients use a custom domain name to invoke your API, disable the default endpoint.
     */
    disableExecuteApiEndpoint?: boolean;
    /**
     * Avoid validating models when creating a deployment. Supported only for WebSocket APIs.
     */
    disableSchemaValidation?: boolean;
    /**
     * A string with a length between [1-128].
     */
    name: string;
    /**
     * Represents a protocol type.
     */
    protocolType: CreateApiRequestBodyProtocolTypeEnum;
    /**
     * After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for a list of expressions and each expression's associated selection key type.
     */
    routeKey?: string;
    /**
     * An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information.
     */
    routeSelectionExpression?: string;
    /**
     * Represents a collection of tags associated with the resource.
     */
    tags?: Record<string, string>;
    /**
     * A string representation of a URI with a length between [1-2048].
     */
    target?: string;
    /**
     * A string with a length between [1-64].
     */
    version?: string;
}
export declare class CreateApiRequest extends SpeakeasyBase {
    requestBody: CreateApiRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateApiResponse extends SpeakeasyBase {
    /**
     * BadRequestException
     */
    badRequestException?: any;
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * Success
     */
    createApiResponse?: shared.CreateApiResponse;
    /**
     * NotFoundException
     */
    notFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
}
