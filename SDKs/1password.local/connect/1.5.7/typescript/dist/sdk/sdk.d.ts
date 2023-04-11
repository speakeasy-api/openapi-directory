import { Activity } from "./activity";
import { Files } from "./files";
import { Health } from "./health";
import { Items } from "./items";
import { Metrics } from "./metrics";
import { Vaults } from "./vaults";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://1password.local", "http://localhost:8080/v1"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
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
 * REST API interface for 1Password Connect.
 */
export declare class SDK {
    /**
     * Access API Request Activity
     */
    activity: Activity;
    files: Files;
    health: Health;
    /**
     * Access and manage items inside 1Password Vaults
     */
    items: Items;
    metrics: Metrics;
    /**
     * Access 1Password Vaults
     */
    vaults: Vaults;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
