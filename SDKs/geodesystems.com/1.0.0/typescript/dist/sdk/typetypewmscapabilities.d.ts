import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Search API for 'WMS Capabilities' entry type
 */
export declare class TypeTypeWmsCapabilities {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Search API for 'WMS Capabilities' entry type
     *
     * @remarks
     * API to search for entries of type WMS Capabilities
     */
    searchTypeWmsCapabilities(req: operations.SearchTypeWmsCapabilitiesRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypeWmsCapabilitiesResponse>;
}
