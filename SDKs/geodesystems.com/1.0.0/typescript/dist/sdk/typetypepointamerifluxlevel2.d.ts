import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Search API for 'Ameriflux Level 2 CSV File' entry type
 */
export declare class TypeTypePointAmerifluxLevel2 {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Search API for 'Ameriflux Level 2 CSV File' entry type
     *
     * @remarks
     * API to search for entries of type Ameriflux Level 2 CSV File
     */
    searchTypePointAmerifluxLevel2(req: operations.SearchTypePointAmerifluxLevel2Request, config?: AxiosRequestConfig): Promise<operations.SearchTypePointAmerifluxLevel2Response>;
}
