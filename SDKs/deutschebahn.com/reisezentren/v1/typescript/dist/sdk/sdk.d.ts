import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://api.deutschebahn.com/reisezentren/v1", "http://api.deutschebahn.com/reisezentren/v1"];
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
 * This REST-API enables you to query information about travel centers in Germany.
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
     * Get all station infos
     *
     * @remarks
     * Get all station infos
     */
    getReisezentren(req: operations.GetReisezentrenRequest, config?: AxiosRequestConfig): Promise<operations.GetReisezentrenResponse>;
    /**
     * Get information about a station near a location
     *
     * @remarks
     * Get information about a station near a location
     */
    getReisezentrenLocLatLon(req: operations.GetReisezentrenLocLatLonRequest, config?: AxiosRequestConfig): Promise<operations.GetReisezentrenLocLatLonResponse>;
    /**
     * Get stations in a given radius
     *
     * @remarks
     * Get stations in a given radius
     */
    getReisezentrenLocLatLonDist(req: operations.GetReisezentrenLocLatLonDistRequest, config?: AxiosRequestConfig): Promise<operations.GetReisezentrenLocLatLonDistResponse>;
    /**
     * Get information about a specific station
     *
     * @remarks
     * Get information about a specific station
     */
    getReisezentrenId(req: operations.GetReisezentrenIdRequest, config?: AxiosRequestConfig): Promise<operations.GetReisezentrenIdResponse>;
}
