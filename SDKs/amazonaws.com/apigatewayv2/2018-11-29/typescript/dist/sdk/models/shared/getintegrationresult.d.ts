import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The TLS configuration for a private integration. If you specify a TLS configuration, private integration traffic uses the HTTPS protocol. Supported only for HTTP APIs.
**/
export declare class GetIntegrationResultTlsConfig extends SpeakeasyBase {
    serverNameToVerify?: Record<string, any>;
}
export declare class GetIntegrationResult extends SpeakeasyBase {
    apiGatewayManaged?: Record<string, any>;
    connectionId?: Record<string, any>;
    connectionType?: Record<string, any>;
    contentHandlingStrategy?: Record<string, any>;
    credentialsArn?: Record<string, any>;
    description?: Record<string, any>;
    integrationId?: Record<string, any>;
    integrationMethod?: Record<string, any>;
    integrationResponseSelectionExpression?: Record<string, any>;
    integrationSubtype?: Record<string, any>;
    integrationType?: Record<string, any>;
    integrationUri?: Record<string, any>;
    passthroughBehavior?: Record<string, any>;
    payloadFormatVersion?: Record<string, any>;
    requestParameters?: Record<string, string>;
    requestTemplates?: Record<string, string>;
    responseParameters?: Record<string, Record<string, string>>;
    templateSelectionExpression?: Record<string, any>;
    timeoutInMillis?: Record<string, any>;
    tlsConfig?: GetIntegrationResultTlsConfig;
}
