import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Search API for 'Construction Permits' entry type
 */
export declare class TypeConstructionPermits {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Search API for 'Construction Permits' entry type
     *
     * @remarks
     * API to search for entries of type Construction Permits
     */
    searchConstructionPermits(req: operations.SearchConstructionPermitsRequest, config?: AxiosRequestConfig): Promise<operations.SearchConstructionPermitsResponse>;
}
