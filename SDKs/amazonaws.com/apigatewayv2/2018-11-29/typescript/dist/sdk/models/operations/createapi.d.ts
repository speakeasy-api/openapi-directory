import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateApiHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * Represents a CORS configuration. Supported only for HTTP APIs. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-cors.html">Configuring CORS</a> for more information.
**/
export declare class CreateApiRequestBodyCorsConfiguration extends SpeakeasyBase {
    allowCredentials?: Record<string, any>;
    allowHeaders?: Record<string, any>;
    allowMethods?: Record<string, any>;
    allowOrigins?: Record<string, any>;
    exposeHeaders?: Record<string, any>;
    maxAge?: Record<string, any>;
}
export declare enum CreateApiRequestBodyProtocolTypeEnum {
    Websocket = "WEBSOCKET",
    Http = "HTTP"
}
export declare class CreateApiRequestBody extends SpeakeasyBase {
    apiKeySelectionExpression?: string;
    corsConfiguration?: CreateApiRequestBodyCorsConfiguration;
    credentialsArn?: string;
    description?: string;
    disableExecuteApiEndpoint?: boolean;
    disableSchemaValidation?: boolean;
    name: string;
    protocolType: CreateApiRequestBodyProtocolTypeEnum;
    routeKey?: string;
    routeSelectionExpression?: string;
    tags?: Record<string, string>;
    target?: string;
    version?: string;
}
export declare class CreateApiRequest extends SpeakeasyBase {
    headers: CreateApiHeaders;
    request: CreateApiRequestBody;
}
export declare class CreateApiResponse extends SpeakeasyBase {
    badRequestException?: any;
    conflictException?: any;
    contentType: string;
    createApiResponse?: shared.CreateApiResponse;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
