import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://api.color.pizza/v1/"];
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
 * An API that provides names for colors based on their hex value
 */
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
    /**
     * Get all colors of the default color name list
     */
    get(req: operations.GetRequest, config?: AxiosRequestConfig): Promise<operations.GetResponse>;
    /**
     * Get all colors of the default color name list
     */
    getLists(config?: AxiosRequestConfig): Promise<operations.GetListsResponse>;
    /**
     * Get all colors of the default color name list
     */
    getNames(req: operations.GetNamesRequest, config?: AxiosRequestConfig): Promise<operations.GetNamesResponse>;
    /**
     * Generate a color swatch for any color
     */
    getSwatch(req: operations.GetSwatchRequest, config?: AxiosRequestConfig): Promise<operations.GetSwatchResponse>;
}
