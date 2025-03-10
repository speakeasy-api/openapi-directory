import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Search API for 'Standard Parameter Name' entry type
 */
export declare class TypeProjectStandardName {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Search API for 'Standard Parameter Name' entry type
     *
     * @remarks
     * API to search for entries of type Standard Parameter Name
     */
    searchProjectStandardName(req: operations.SearchProjectStandardNameRequest, config?: AxiosRequestConfig): Promise<operations.SearchProjectStandardNameResponse>;
}
