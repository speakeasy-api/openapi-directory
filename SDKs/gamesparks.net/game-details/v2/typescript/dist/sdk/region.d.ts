import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Region Restv 2 Controller
 */
export declare class Region {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getGameRegionOptions
     */
    getGameRegionOptionsUsingGET(req: operations.GETGameRegionOptionsUsingGETRequest, config?: AxiosRequestConfig): Promise<operations.GETGameRegionOptionsUsingGETResponse>;
    /**
     * getRegionOptions
     */
    getRegionOptionsUsingGET(config?: AxiosRequestConfig): Promise<operations.GETRegionOptionsUsingGETResponse>;
    /**
     * setGameRegion
     */
    setGameRegionUsingPOST(req: operations.SetGameRegionUsingPOSTRequest, config?: AxiosRequestConfig): Promise<operations.SetGameRegionUsingPOSTResponse>;
}
