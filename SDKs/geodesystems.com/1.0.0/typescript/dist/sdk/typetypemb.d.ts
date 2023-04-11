import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Search API for 'MB Bathymetry' entry type
 */
export declare class TypeTypeMb {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Search API for 'MB Bathymetry' entry type
     *
     * @remarks
     * API to search for entries of type MB Bathymetry
     */
    searchTypeMb(req: operations.SearchTypeMbRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypeMbResponse>;
}
