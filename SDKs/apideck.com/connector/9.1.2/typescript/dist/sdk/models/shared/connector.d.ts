import { SpeakeasyBase } from "../../../internal/utils";
import { ConnectorDoc } from "./connectordoc";
import { ConnectorEvent } from "./connectorevent";
import { ConnectorSetting } from "./connectorsetting";
import { ConnectorStatusEnum } from "./connectorstatusenum";
import { LinkedConnectorResource } from "./linkedconnectorresource";
import { UnifiedApiIdEnum } from "./unifiedapiidenum";
import { WebhookSupport } from "./webhooksupport";
/**
 * Type of authorization used by the connector
 */
export declare enum ConnectorAuthTypeEnum {
    Oauth2 = "oauth2",
    ApiKey = "apiKey",
    Basic = "basic",
    Custom = "custom",
    None = "none"
}
/**
 * Location of the OAuth client credentials. For most connectors the OAuth client credentials are stored on integration and managed by the application owner. For others they are stored on connection and managed by the consumer in Vault.
 */
export declare enum ConnectorOauthCredentialsSourceEnum {
    Integration = "integration",
    Connection = "connection"
}
/**
 * OAuth grant type used by the connector. More info: https://oauth.net/2/grant-types
 */
export declare enum ConnectorOauthGrantTypeEnum {
    AuthorizationCode = "authorization_code",
    ClientCredentials = "client_credentials",
    Password = "password"
}
export declare class ConnectorOauthScopes extends SpeakeasyBase {
    /**
     * List of Unified APIs that request this OAuth Scope by default. Application owners can customize the requested scopes.
     */
    defaultApis?: string[];
    /**
     * ID of the OAuth scope.
     */
    id?: string;
    /**
     * Label of the OAuth scope.
     */
    label?: string;
}
export declare class ConnectorTlsSupport extends SpeakeasyBase {
    /**
     * Description of the TLS support
     */
    description?: string;
    type?: string;
}
/**
 * OAuth scopes required for the connector. Add these scopes to your OAuth app.
 */
export declare class ConnectorUnifiedApisOauthScopes extends SpeakeasyBase {
    /**
     * ID of the OAuth scope.
     */
    id?: string;
    /**
     * Label of the OAuth scope.
     */
    label?: string;
}
export declare class ConnectorUnifiedApis extends SpeakeasyBase {
    /**
     * List of resources that are not supported on the downstream.
     */
    downstreamUnsupportedResources?: string[];
    /**
     * Name of Apideck Unified API
     */
    id?: UnifiedApiIdEnum;
    /**
     * Name of the API.
     */
    name?: string;
    oauthScopes?: ConnectorUnifiedApisOauthScopes[];
    /**
     * List of events that are supported on the connector for this Unified API.
     */
    supportedEvents?: ConnectorEvent[];
    /**
     * List of resources that are supported on the connector.
     */
    supportedResources?: LinkedConnectorResource[];
}
export declare class Connector extends SpeakeasyBase {
    /**
     * Indicates whether a connector only supports authentication. In this case the connector is not mapped to a Unified API, but can be used with the Proxy API
     */
    authOnly?: boolean;
    /**
     * Type of authorization used by the connector
     */
    authType?: ConnectorAuthTypeEnum;
    /**
     * Set to `true` when connector was implemented from downstream docs only and without API access. This state indicates that integration will require Apideck support, and access to downstream API to validate mapping quality.
     */
    blindMapped?: boolean;
    /**
     * List of resources that have settings that can be configured.
     */
    configurableResources?: string[];
    /**
     * Set to `true` when connector allows the definition of custom scopes.
     */
    customScopes?: boolean;
    /**
     * A description of the object.
     */
    description?: string;
    docs?: ConnectorDoc[];
    /**
     * Set to `true` when the connector offers a free trial. Use `signup_url` to sign up for a free trial
     */
    freeTrialAvailable?: boolean;
    /**
     * Indicates whether Apideck Sandbox OAuth credentials are available.
     */
    hasSandboxCredentials?: boolean;
    /**
     * Link to a small square icon for the connector.
     */
    iconUrl?: string;
    /**
     * ID of the connector.
     */
    id?: string;
    /**
     * Link to the full logo for the connector.
     */
    logoUrl?: string;
    /**
     * Name of the connector.
     */
    name?: string;
    /**
     * Location of the OAuth client credentials. For most connectors the OAuth client credentials are stored on integration and managed by the application owner. For others they are stored on connection and managed by the consumer in Vault.
     */
    oauthCredentialsSource?: ConnectorOauthCredentialsSourceEnum;
    /**
     * OAuth grant type used by the connector. More info: https://oauth.net/2/grant-types
     */
    oauthGrantType?: ConnectorOauthGrantTypeEnum;
    /**
     * List of OAuth Scopes available for this connector.
     */
    oauthScopes?: ConnectorOauthScopes[];
    /**
     * Service provider identifier
     */
    serviceId?: string;
    settings?: ConnectorSetting[];
    /**
     * Link to the connector's signup page.
     */
    signupUrl?: string;
    /**
     * Status of the connector. Connectors with status live or beta are callable.
     */
    status?: ConnectorStatusEnum;
    /**
     * List of events that are supported on the connector across all Unified APIs.
     */
    supportedEvents?: ConnectorEvent[];
    /**
     * List of resources that are supported on the connector.
     */
    supportedResources?: LinkedConnectorResource[];
    tlsSupport?: ConnectorTlsSupport;
    /**
     * List of Unified APIs that feature this connector.
     */
    unifiedApis?: ConnectorUnifiedApis[];
    /**
     * How webhooks are supported for the connector. Sometimes the connector natively supports webhooks, other times Apideck virtualizes them based on polling.
     */
    webhookSupport?: WebhookSupport;
    /**
     * Link to the connector's website.
     */
    websiteUrl?: string;
}
