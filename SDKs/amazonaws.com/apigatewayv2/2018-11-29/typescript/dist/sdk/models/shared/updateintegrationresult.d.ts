import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type of the network connection to the integration endpoint. Specify INTERNET for connections through the public routable internet or VPC_LINK for private connections between API Gateway and resources in a VPC. The default value is INTERNET.
 */
export declare enum UpdateIntegrationResultConnectionTypeEnum {
    Internet = "INTERNET",
    VpcLink = "VPC_LINK"
}
/**
 * <p>Supported only for WebSocket APIs. Specifies how to handle response payload content type conversions. Supported values are CONVERT_TO_BINARY and CONVERT_TO_TEXT, with the following behaviors:</p> <p>CONVERT_TO_BINARY: Converts a response payload from a Base64-encoded string to the corresponding binary blob.</p> <p>CONVERT_TO_TEXT: Converts a response payload from a binary blob to a Base64-encoded string.</p> <p>If this property is not defined, the response payload will be passed through from the integration response to the route response or method response without modification.</p>
 */
export declare enum UpdateIntegrationResultContentHandlingStrategyEnum {
    ConvertToBinary = "CONVERT_TO_BINARY",
    ConvertToText = "CONVERT_TO_TEXT"
}
/**
 * <p>The integration type of an integration. One of the following:</p> <p>AWS: for integrating the route or method request with an AWS service action, including the Lambda function-invoking action. With the Lambda function-invoking action, this is referred to as the Lambda custom integration. With any other AWS service action, this is known as AWS integration. Supported only for WebSocket APIs.</p> <p>AWS_PROXY: for integrating the route or method request with a Lambda function or other AWS service action. This integration is also referred to as a Lambda proxy integration.</p> <p>HTTP: for integrating the route or method request with an HTTP endpoint. This integration is also referred to as the HTTP custom integration. Supported only for WebSocket APIs.</p> <p>HTTP_PROXY: for integrating the route or method request with an HTTP endpoint, with the client request passed through as-is. This is also referred to as HTTP proxy integration.</p> <p>MOCK: for integrating the route or method request with API Gateway as a "loopback" endpoint without invoking any backend. Supported only for WebSocket APIs.</p>
 */
export declare enum UpdateIntegrationResultIntegrationTypeEnum {
    Aws = "AWS",
    Http = "HTTP",
    Mock = "MOCK",
    HttpProxy = "HTTP_PROXY",
    AwsProxy = "AWS_PROXY"
}
/**
 * <p>Specifies the pass-through behavior for incoming requests based on the Content-Type header in the request, and the available mapping templates specified as the requestTemplates property on the Integration resource. There are three valid values: WHEN_NO_MATCH, WHEN_NO_TEMPLATES, and NEVER. Supported only for WebSocket APIs.</p> <p>WHEN_NO_MATCH passes the request body for unmapped content types through to the integration backend without transformation.</p> <p>NEVER rejects unmapped content types with an HTTP 415 Unsupported Media Type response.</p> <p>WHEN_NO_TEMPLATES allows pass-through when the integration has no content types mapped to templates. However, if there is at least one content type defined, unmapped content types will be rejected with the same HTTP 415 Unsupported Media Type response.</p>
 */
export declare enum UpdateIntegrationResultPassthroughBehaviorEnum {
    WhenNoMatch = "WHEN_NO_MATCH",
    Never = "NEVER",
    WhenNoTemplates = "WHEN_NO_TEMPLATES"
}
/**
 * The TLS configuration for a private integration. If you specify a TLS configuration, private integration traffic uses the HTTPS protocol. Supported only for HTTP APIs.
 */
export declare class UpdateIntegrationResultTlsConfig extends SpeakeasyBase {
    serverNameToVerify?: string;
}
/**
 * Success
 */
export declare class UpdateIntegrationResult extends SpeakeasyBase {
    apiGatewayManaged?: boolean;
    connectionId?: string;
    connectionType?: UpdateIntegrationResultConnectionTypeEnum;
    contentHandlingStrategy?: UpdateIntegrationResultContentHandlingStrategyEnum;
    credentialsArn?: string;
    description?: string;
    integrationId?: string;
    integrationMethod?: string;
    integrationResponseSelectionExpression?: string;
    integrationSubtype?: string;
    integrationType?: UpdateIntegrationResultIntegrationTypeEnum;
    integrationUri?: string;
    passthroughBehavior?: UpdateIntegrationResultPassthroughBehaviorEnum;
    payloadFormatVersion?: string;
    requestParameters?: Record<string, string>;
    requestTemplates?: Record<string, string>;
    responseParameters?: Record<string, Record<string, string>>;
    templateSelectionExpression?: string;
    timeoutInMillis?: number;
    tlsConfig?: UpdateIntegrationResultTlsConfig;
}
