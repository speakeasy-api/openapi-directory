import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Search API for 'HDF5 File' entry type
 */
export declare class TypeGeoHdf5 {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Search API for 'HDF5 File' entry type
     *
     * @remarks
     * API to search for entries of type HDF5 File
     */
    searchGeoHdf5(req: operations.SearchGeoHdf5Request, config?: AxiosRequestConfig): Promise<operations.SearchGeoHdf5Response>;
}
