import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Search API for 'GC-Net Point Data' entry type
 */
export declare class TypeTypePointGcnet {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Search API for 'GC-Net Point Data' entry type
     *
     * @remarks
     * API to search for entries of type GC-Net Point Data
     */
    searchTypePointGcnet(req: operations.SearchTypePointGcnetRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypePointGcnetResponse>;
}
