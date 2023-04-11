import { SpeakeasyBase } from "../../../internal/utils";
import { AuthTypeEnum } from "./authtypeenum";
import { ConnectionStateEnum } from "./connectionstateenum";
import { FormField } from "./formfield";
import { IntegrationStateEnum } from "./integrationstateenum";
import { OAuthGrantTypeEnum } from "./oauthgranttypeenum";
import { WebhookSubscription } from "./webhooksubscription";
export declare class ConnectionConfigurationDefaultsInput extends SpeakeasyBase {
    id?: string;
    options?: any[];
    value?: any;
}
export declare class ConnectionConfigurationInput extends SpeakeasyBase {
    defaults?: ConnectionConfigurationDefaultsInput[];
    resource?: string;
}
/**
 * Fields that need to be updated on the resource
 */
export declare class ConnectionInput extends SpeakeasyBase {
    configuration?: ConnectionConfigurationInput[];
    /**
     * Whether the connection is enabled or not. You can enable or disable a connection using the Update Connection API.
     */
    enabled?: boolean;
    /**
     * Attach your own consumer specific metadata
     */
    metadata?: Record<string, any>;
    /**
     * Connection settings. Values will persist to `form_fields` with corresponding id
     */
    settings?: Record<string, any>;
}
export declare enum ConnectionConfigurationDefaultsTargetEnum {
    CustomFields = "custom_fields",
    Resource = "resource"
}
export declare class ConnectionConfigurationDefaults extends SpeakeasyBase {
    id?: string;
    options?: any[];
    target?: ConnectionConfigurationDefaultsTargetEnum;
    value?: any;
}
export declare class ConnectionConfiguration extends SpeakeasyBase {
    defaults?: ConnectionConfigurationDefaults[];
    resource?: string;
}
/**
 * Status of the connection.
 */
export declare enum ConnectionStatusEnum {
    Live = "live",
    Upcoming = "upcoming",
    Requested = "requested"
}
export declare class Connection extends SpeakeasyBase {
    /**
     * Type of authorization used by the connector
     */
    authType?: AuthTypeEnum;
    /**
     * The OAuth redirect URI. Redirect your users to this URI to let them authorize your app in the connector's UI. Before you can use this URI, you must add `redirect_uri` as a query parameter. Your users will be redirected to this `redirect_uri` after they granted access to your app in the connector's UI.
     */
    authorizeUrl?: string;
    configurableResources?: string[];
    configuration?: ConnectionConfiguration[];
    createdAt?: number;
    /**
     * Whether the connection is enabled or not. You can enable or disable a connection using the Update Connection API.
     */
    enabled?: boolean;
    /**
     * The settings that are wanted to create a connection.
     */
    formFields?: FormField[];
    /**
     * Whether the connector has a guide available in the developer docs or not (https://docs.apideck.com/connectors/{service_id}/docs/consumer+connection).
     */
    hasGuide?: boolean;
    /**
     * A visual icon of the connection, that will be shown in the Vault
     */
    icon?: string;
    /**
     * The unique identifier of the connection.
     */
    id?: string;
    /**
     * The current state of the Integration.
     */
    integrationState?: IntegrationStateEnum;
    /**
     * The logo of the connection, that will be shown in the Vault
     */
    logo?: string;
    /**
     * Attach your own consumer specific metadata
     */
    metadata?: Record<string, any>;
    /**
     * The name of the connection
     */
    name?: string;
    /**
     * OAuth grant type used by the connector. More info: https://oauth.net/2/grant-types
     */
    oauthGrantType?: OAuthGrantTypeEnum;
    resourceSchemaSupport?: string[];
    resourceSettingsSupport?: string[];
    /**
     * The OAuth revoke URI. Redirect your users to this URI to revoke this connection. Before you can use this URI, you must add `redirect_uri` as a query parameter. Your users will be redirected to this `redirect_uri` after they granted access to your app in the connector's UI.
     */
    revokeUrl?: string;
    /**
     * The ID of the service this connection belongs to.
     */
    serviceId?: string;
    /**
     * Connection settings. Values will persist to `form_fields` with corresponding id
     */
    settings?: Record<string, any>;
    /**
     * List of settings that are required to be configured on integration before authorization can occur
     */
    settingsRequiredForAuthorization?: string[];
    /**
     * [Connection state flow](#section/Connection-state)
     */
    state?: ConnectionStateEnum;
    /**
     * Status of the connection.
     */
    status?: ConnectionStatusEnum;
    subscriptions?: WebhookSubscription[];
    tagLine?: string;
    /**
     * The unified API category where the connection belongs to.
     */
    unifiedApi?: string;
    updatedAt?: number;
    /**
     * The website URL of the connection
     */
    website?: string;
}
