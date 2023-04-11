import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A CORS configuration. Supported only for HTTP APIs.
 */
export declare class ApiCorsConfiguration extends SpeakeasyBase {
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
export declare enum ApiProtocolTypeEnum {
    Websocket = "WEBSOCKET",
    Http = "HTTP"
}
/**
 * Represents an API.
 */
export declare class Api extends SpeakeasyBase {
    apiEndpoint?: string;
    apiGatewayManaged?: boolean;
    apiId?: string;
    apiKeySelectionExpression?: string;
    corsConfiguration?: ApiCorsConfiguration;
    createdDate?: Date;
    description?: string;
    disableExecuteApiEndpoint?: boolean;
    disableSchemaValidation?: boolean;
    importInfo?: string[];
    name: string;
    protocolType: ApiProtocolTypeEnum;
    routeSelectionExpression: string;
    tags?: Record<string, string>;
    version?: string;
    warnings?: string[];
}
