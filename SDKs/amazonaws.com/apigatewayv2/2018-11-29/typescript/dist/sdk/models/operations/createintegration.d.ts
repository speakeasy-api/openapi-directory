import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Represents a connection type.
 */
export declare enum CreateIntegrationRequestBodyConnectionTypeEnum {
    Internet = "INTERNET",
    VpcLink = "VPC_LINK"
}
/**
 * Specifies how to handle response payload content type conversions. Supported only for WebSocket APIs.
 */
export declare enum CreateIntegrationRequestBodyContentHandlingStrategyEnum {
    ConvertToBinary = "CONVERT_TO_BINARY",
    ConvertToText = "CONVERT_TO_TEXT"
}
/**
 * Represents an API method integration type.
 */
export declare enum CreateIntegrationRequestBodyIntegrationTypeEnum {
    Aws = "AWS",
    Http = "HTTP",
    Mock = "MOCK",
    HttpProxy = "HTTP_PROXY",
    AwsProxy = "AWS_PROXY"
}
/**
 * Represents passthrough behavior for an integration response. Supported only for WebSocket APIs.
 */
export declare enum CreateIntegrationRequestBodyPassthroughBehaviorEnum {
    WhenNoMatch = "WHEN_NO_MATCH",
    Never = "NEVER",
    WhenNoTemplates = "WHEN_NO_TEMPLATES"
}
/**
 * The TLS configuration for a private integration. If you specify a TLS configuration, private integration traffic uses the HTTPS protocol. Supported only for HTTP APIs.
 */
export declare class CreateIntegrationRequestBodyTlsConfig extends SpeakeasyBase {
    serverNameToVerify?: string;
}
export declare class CreateIntegrationRequestBody extends SpeakeasyBase {
    /**
     * A string with a length between [1-1024].
     */
    connectionId?: string;
    /**
     * Represents a connection type.
     */
    connectionType?: CreateIntegrationRequestBodyConnectionTypeEnum;
    /**
     * Specifies how to handle response payload content type conversions. Supported only for WebSocket APIs.
     */
    contentHandlingStrategy?: CreateIntegrationRequestBodyContentHandlingStrategyEnum;
    /**
     * Represents an Amazon Resource Name (ARN).
     */
    credentialsArn?: string;
    /**
     * A string with a length between [0-1024].
     */
    description?: string;
    /**
     * A string with a length between [1-64].
     */
    integrationMethod?: string;
    /**
     * A string with a length between [1-128].
     */
    integrationSubtype?: string;
    /**
     * Represents an API method integration type.
     */
    integrationType: CreateIntegrationRequestBodyIntegrationTypeEnum;
    /**
     * A string representation of a URI with a length between [1-2048].
     */
    integrationUri?: string;
    /**
     * Represents passthrough behavior for an integration response. Supported only for WebSocket APIs.
     */
    passthroughBehavior?: CreateIntegrationRequestBodyPassthroughBehaviorEnum;
    /**
     * A string with a length between [1-64].
     */
    payloadFormatVersion?: string;
    /**
     * <p>For WebSocket APIs, a key-value map specifying request parameters that are passed from the method request to the backend. The key is an integration request parameter name and the associated value is a method request parameter value or static value that must be enclosed within single quotes and pre-encoded as required by the backend. The method request parameter value must match the pattern of method.request.<replaceable>{location}</replaceable>.<replaceable>{name}</replaceable>
     *
     * @remarks
     *           , where
     *             <replaceable>{location}</replaceable>
     *            is querystring, path, or header; and
     *             <replaceable>{name}</replaceable>
     *            must be a valid and unique method request parameter name.</p> <p>For HTTP API integrations with a specified integrationSubtype, request parameters are a key-value map specifying parameters that are passed to AWS_PROXY integrations. You can provide static values, or map request data, stage variables, or context variables that are evaluated at runtime. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-integrations-aws-services.html">Working with AWS service integrations for HTTP APIs</a>.</p> <p>For HTTP API integrations without a specified integrationSubtype request parameters are a key-value map specifying how to transform HTTP requests before sending them to the backend. The key should follow the pattern &lt;action&gt;:&lt;header|querystring|path&gt;.&lt;location&gt; where action can be append, overwrite or remove. For values, you can provide static values, or map request data, stage variables, or context variables that are evaluated at runtime. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-parameter-mapping.html">Transforming API requests and responses</a>.</p>
     */
    requestParameters?: Record<string, string>;
    /**
     * A mapping of identifier keys to templates. The value is an actual template script. The key is typically a SelectionKey which is chosen based on evaluating a selection expression.
     */
    requestTemplates?: Record<string, string>;
    /**
     * Supported only for HTTP APIs. You use response parameters to transform the HTTP response from a backend integration before returning the response to clients.
     */
    responseParameters?: Record<string, Record<string, string>>;
    /**
     * An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information.
     */
    templateSelectionExpression?: string;
    /**
     * An integer with a value between [50-30000].
     */
    timeoutInMillis?: number;
    /**
     * The TLS configuration for a private integration. If you specify a TLS configuration, private integration traffic uses the HTTPS protocol. Supported only for HTTP APIs.
     */
    tlsConfig?: CreateIntegrationRequestBodyTlsConfig;
}
export declare class CreateIntegrationRequest extends SpeakeasyBase {
    requestBody: CreateIntegrationRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The API identifier.
     */
    apiId: string;
}
export declare class CreateIntegrationResponse extends SpeakeasyBase {
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
    createIntegrationResult?: shared.CreateIntegrationResult;
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
