import { Holidays } from "./holidays";
import { Info } from "./info";
import { Provinces } from "./provinces";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://canada-holidays.ca"];
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
 * This API lists all 31 public holidays for all 13 provinces and territories in Canada, including federal holidays.
 */
export declare class SDK {
    /**
     * Get holiday(s) with associated provinces
     */
    holidays: Holidays;
    /**
     * Get welcome message and links
     */
    info: Info;
    /**
     * Get province(s) with associated holidays
     */
    provinces: Provinces;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
