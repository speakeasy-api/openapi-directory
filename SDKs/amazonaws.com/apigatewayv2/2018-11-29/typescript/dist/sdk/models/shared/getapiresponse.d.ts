import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A CORS configuration. Supported only for HTTP APIs.
 */
export declare class GetApiResponseCorsConfiguration extends SpeakeasyBase {
    allowCredentials?: boolean;
    allowHeaders?: string[];
    allowMethods?: string[];
    allowOrigins?: string[];
    exposeHeaders?: string[];
    maxAge?: number;
}
/**
 * The API protocol.
 */
export declare enum GetApiResponseProtocolTypeEnum {
    Websocket = "WEBSOCKET",
    Http = "HTTP"
}
/**
 * Success
 */
export declare class GetApiResponse extends SpeakeasyBase {
    apiEndpoint?: string;
    apiGatewayManaged?: boolean;
    apiId?: string;
    apiKeySelectionExpression?: string;
    corsConfiguration?: GetApiResponseCorsConfiguration;
    createdDate?: Date;
    description?: string;
    disableExecuteApiEndpoint?: boolean;
    disableSchemaValidation?: boolean;
    importInfo?: string[];
    name?: string;
    protocolType?: GetApiResponseProtocolTypeEnum;
    routeSelectionExpression?: string;
    tags?: Record<string, string>;
    version?: string;
    warnings?: string[];
}
