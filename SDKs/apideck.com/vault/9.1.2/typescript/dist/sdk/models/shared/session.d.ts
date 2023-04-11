import { SpeakeasyBase } from "../../../internal/utils";
import { ConsumerMetadata } from "./consumermetadata";
import { UnifiedApiIdEnum } from "./unifiedapiidenum";
export declare enum SessionSettingsAllowActionsEnum {
    Delete = "delete",
    Disconnect = "disconnect",
    Reauthorize = "reauthorize",
    Disable = "disable"
}
/**
 * Settings to change the way the Vault is displayed.
 */
export declare class SessionSettings extends SpeakeasyBase {
    /**
     * Hide actions from your users in [Vault](/apis/vault/reference#section/Get-Started). Actions in `allow_actions` will be shown on a connection in Vault.
     *
     * @remarks
     * Available actions are: `delete`, `disconnect`, `reauthorize` and `disable`.
     * Empty array will hide all actions. By default all actions are visible.
     */
    allowActions?: SessionSettingsAllowActionsEnum[];
    /**
     * Automatically redirect to redirect uri after the connection has been configured as callable. Defaults to `false`.
     */
    autoRedirect?: boolean;
    /**
     * Hide Apideck connection guides in [Vault](/apis/vault/reference#section/Get-Started). Defaults to `false`.
     */
    hideGuides?: boolean;
    /**
     * A boolean that controls the display of the configurable resources for an integration. When set to true, the resource configuration options will be hidden and not shown to the user. When set to false, the resource configuration options will be displayed to the user.
     */
    hideResourceSettings?: boolean;
    /**
     * Configure [Vault](/apis/vault/reference#section/Get-Started) to run in isolation mode, meaning it only shows the connection settings and hides the navigation items.
     */
    isolationMode?: boolean;
    /**
     * Configure [Vault](/apis/vault/reference#section/Get-Started) to show a banner informing the logged in user is in a test environment.
     */
    sandboxMode?: boolean;
    /**
     * The duration of time the session is valid for (maximum 1 week).
     */
    sessionLength?: string;
    /**
     * Configure [Vault](/apis/vault/reference#section/Get-Started) to show the logs page. Defaults to `true`.
     */
    showLogs?: boolean;
    /**
     * Configure [Vault](/apis/vault/reference#section/Get-Started) to show the sidebar. Defaults to `true`.
     */
    showSidebar?: boolean;
    /**
     * Configure [Vault](/apis/vault/reference#section/Get-Started) to show the suggestions page. Defaults to `false`.
     */
    showSuggestions?: boolean;
    /**
     * Provide the IDs of the Unified APIs you want to be visible. Leaving it empty or omitting this field will show all Unified APIs.
     */
    unifiedApis?: UnifiedApiIdEnum[];
}
/**
 * Theming options to change the look and feel of Vault.
 */
export declare class SessionTheme extends SpeakeasyBase {
    /**
     * The URL to the favicon to use for Vault.
     */
    favicon?: string;
    /**
     * The URL to the logo to use for Vault.
     */
    logo?: string;
    /**
     * The primary color to use for Vault.
     */
    primaryColor?: string;
    /**
     * The URL to the privacy policy that will be shown in the sidebar.
     */
    privacyUrl?: string;
    /**
     * The background color to use for the sidebar.
     */
    sidepanelBackgroundColor?: string;
    /**
     * The text color to use for the sidebar.
     */
    sidepanelTextColor?: string;
    /**
     * The URL to the terms and conditions that will be shown in the sidebar.
     */
    termsUrl?: string;
    /**
     * The name that will be shown in the sidebar.
     */
    vaultName?: string;
}
/**
 * Additional redirect uri and/or consumer metadata
 */
export declare class Session extends SpeakeasyBase {
    /**
     * The metadata of the consumer. This is used to display the consumer in the sidebar. This is optional, but recommended.
     */
    consumerMetadata?: ConsumerMetadata;
    /**
     * Custom consumer settings that are passed as part of the session.
     */
    customConsumerSettings?: Record<string, any>;
    /**
     * The URL to redirect the user to after the session has been configured.
     */
    redirectUri?: string;
    /**
     * Settings to change the way the Vault is displayed.
     */
    settings?: SessionSettings;
    /**
     * Theming options to change the look and feel of Vault.
     */
    theme?: SessionTheme;
}
