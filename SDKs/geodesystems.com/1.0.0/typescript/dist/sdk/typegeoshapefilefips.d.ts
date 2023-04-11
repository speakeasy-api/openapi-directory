import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Search API for 'Shapefile with FIPS Code' entry type
 */
export declare class TypeGeoShapefileFips {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Search API for 'Shapefile with FIPS Code' entry type
     *
     * @remarks
     * API to search for entries of type Shapefile with FIPS Code
     */
    searchGeoShapefileFips(req: operations.SearchGeoShapefileFipsRequest, config?: AxiosRequestConfig): Promise<operations.SearchGeoShapefileFipsResponse>;
}
