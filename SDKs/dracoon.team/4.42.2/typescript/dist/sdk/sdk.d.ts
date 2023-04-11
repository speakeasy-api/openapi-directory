import { Auth } from "./auth";
import { Config } from "./config";
import { Downloads } from "./downloads";
import { Eventlog } from "./eventlog";
import { Groups } from "./groups";
import { Internal } from "./internal";
import * as shared from "./models/shared";
import { Nodes } from "./nodes";
import { Provisioning } from "./provisioning";
import { Public } from "./public";
import { Resources } from "./resources";
import { Roles } from "./roles";
import { Settings } from "./settings";
import { Shares } from "./shares";
import { SystemAuthConfig } from "./systemauthconfig";
import { SystemPoliciesConfig } from "./systempoliciesconfig";
import { SystemSettingsConfig } from "./systemsettingsconfig";
import { SystemStorageConfig } from "./systemstorageconfig";
import { Uploads } from "./uploads";
import { User } from "./user";
import { Users } from "./users";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["/api"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * The security details required to authenticate the SDK
     */
    security?: shared.Security;
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};
/**
 * REST Web Services for DRACOON<br><br>This page provides an overview of all available and documented DRACOON APIs, which are grouped by tags.<br>Each tag provides a collection of APIs that are intended for a specific area of the DRACOON.<br><br><a title='Developer Information' href='https://developer.dracoon.com'>Developer Information</a>&emsp;&emsp;<a title='Get SDKs on GitHub' href='https://github.com/dracoon'>Get SDKs on GitHub</a><br><br><a title='Terms of service' href='https://www.dracoon.com/terms/general-terms-and-conditions/'>Terms of service</a>
 */
export declare class SDK {
    /**
     * Authentication
     */
    auth: Auth;
    /**
     * Configuration
     */
    config: Config;
    /**
     * File download without authentication headers
     */
    downloads: Downloads;
    /**
     * System events log
     */
    eventlog: Eventlog;
    /**
     * User groups
     */
    groups: Groups;
    /**
     * Internal non-public APIs
     */
    internal: Internal;
    /**
     * File system objects (rooms, folders, files)
     */
    nodes: Nodes;
    /**
     * Provisioning
     */
    provisioning: Provisioning;
    /**
     * Public API (upload / download shares, software information)
     */
    public: Public;
    /**
     * Client resources
     */
    resources: Resources;
    /**
     * Role user management
     */
    roles: Roles;
    /**
     * Customer settings
     */
    settings: Settings;
    /**
     * Upload and Download Shares
     */
    shares: Shares;
    /**
     * System settings (authentication methods)
     */
    systemAuthConfig: SystemAuthConfig;
    /**
     * System settings (policies)
     */
    systemPoliciesConfig: SystemPoliciesConfig;
    /**
     * System settings (mail server, logging, branding, default values etc.)
     */
    systemSettingsConfig: SystemSettingsConfig;
    /**
     * System settings (storage)
     */
    systemStorageConfig: SystemStorageConfig;
    /**
     * File upload without authentication headers
     */
    uploads: Uploads;
    /**
     * User operations
     */
    user: User;
    /**
     * User management
     */
    users: Users;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
