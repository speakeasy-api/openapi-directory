import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare const ServerList: readonly ["https://api.deutschebahn.com/reisezentren/v1", "http://api.deutschebahn.com/reisezentren/v1"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
    /**
     * getReisezentren - Get all station infos
     *
     * Get all station infos
    **/
    getReisezentren(req: operations.GetReisezentrenRequest, config?: AxiosRequestConfig): Promise<operations.GetReisezentrenResponse>;
    /**
     * getReisezentrenLocLatLon - Get information about a station near a location
     *
     * Get information about a station near a location
    **/
    getReisezentrenLocLatLon(req: operations.GetReisezentrenLocLatLonRequest, config?: AxiosRequestConfig): Promise<operations.GetReisezentrenLocLatLonResponse>;
    /**
     * getReisezentrenLocLatLonDist - Get stations in a given radius
     *
     * Get stations in a given radius
    **/
    getReisezentrenLocLatLonDist(req: operations.GetReisezentrenLocLatLonDistRequest, config?: AxiosRequestConfig): Promise<operations.GetReisezentrenLocLatLonDistResponse>;
    /**
     * getReisezentrenId - Get information about a specific station
     *
     * Get information about a specific station
    **/
    getReisezentrenId(req: operations.GetReisezentrenIdRequest, config?: AxiosRequestConfig): Promise<operations.GetReisezentrenIdResponse>;
}
