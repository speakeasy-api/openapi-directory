import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Search API for 'WaterML' entry type
 */
export declare class TypeTypePointHydroWaterml {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Search API for 'WaterML' entry type
     *
     * @remarks
     * API to search for entries of type WaterML
     */
    searchTypePointHydroWaterml(req: operations.SearchTypePointHydroWatermlRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypePointHydroWatermlResponse>;
}
