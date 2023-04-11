import { Balance } from "./balance";
import { Lookup } from "./lookup";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://api.bintable.com/v1"];
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
 * BIN lookup API, the free api service from bintable.com to lookup card information using it's BIN. the service maintains updated database based on the comunity and other third party services to make sure all BINs in the database are accurate and up to date.
 */
export declare class SDK {
    /**
     * Authorized users with API Key can call endpoints under this tag.
     */
    balance: Balance;
    /**
     * Authorized users with API Key can call this service
     */
    lookup: Lookup;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
