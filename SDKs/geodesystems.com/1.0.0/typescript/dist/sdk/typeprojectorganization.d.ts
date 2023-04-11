import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Search API for 'Organization' entry type
 */
export declare class TypeProjectOrganization {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Search API for 'Organization' entry type
     *
     * @remarks
     * API to search for entries of type Organization
     */
    searchProjectOrganization(req: operations.SearchProjectOrganizationRequest, config?: AxiosRequestConfig): Promise<operations.SearchProjectOrganizationResponse>;
}
