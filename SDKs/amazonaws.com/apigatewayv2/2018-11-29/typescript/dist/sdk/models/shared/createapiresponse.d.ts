import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A CORS configuration. Supported only for HTTP APIs.
**/
export declare class CreateApiResponseCorsConfiguration extends SpeakeasyBase {
    allowCredentials?: Record<string, any>;
    allowHeaders?: Record<string, any>;
    allowMethods?: Record<string, any>;
    allowOrigins?: Record<string, any>;
    exposeHeaders?: Record<string, any>;
    maxAge?: Record<string, any>;
}
export declare class CreateApiResponse extends SpeakeasyBase {
    apiEndpoint?: Record<string, any>;
    apiGatewayManaged?: Record<string, any>;
    apiId?: Record<string, any>;
    apiKeySelectionExpression?: Record<string, any>;
    corsConfiguration?: CreateApiResponseCorsConfiguration;
    createdDate?: Record<string, any>;
    description?: Record<string, any>;
    disableExecuteApiEndpoint?: Record<string, any>;
    disableSchemaValidation?: Record<string, any>;
    importInfo?: Record<string, any>;
    name?: Record<string, any>;
    protocolType?: Record<string, any>;
    routeSelectionExpression?: Record<string, any>;
    tags?: Record<string, string>;
    version?: Record<string, any>;
    warnings?: Record<string, any>;
}
