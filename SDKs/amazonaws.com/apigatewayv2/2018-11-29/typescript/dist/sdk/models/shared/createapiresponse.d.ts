import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A CORS configuration. Supported only for HTTP APIs.
 */
export declare class CreateApiResponseCorsConfiguration extends SpeakeasyBase {
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
export declare enum CreateApiResponseProtocolTypeEnum {
    Websocket = "WEBSOCKET",
    Http = "HTTP"
}
/**
 * Success
 */
export declare class CreateApiResponse extends SpeakeasyBase {
    apiEndpoint?: string;
    apiGatewayManaged?: boolean;
    apiId?: string;
    apiKeySelectionExpression?: string;
    corsConfiguration?: CreateApiResponseCorsConfiguration;
    createdDate?: Date;
    description?: string;
    disableExecuteApiEndpoint?: boolean;
    disableSchemaValidation?: boolean;
    importInfo?: string[];
    name?: string;
    protocolType?: CreateApiResponseProtocolTypeEnum;
    routeSelectionExpression?: string;
    tags?: Record<string, string>;
    version?: string;
    warnings?: string[];
}
