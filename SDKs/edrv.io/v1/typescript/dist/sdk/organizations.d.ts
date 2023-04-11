import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Organizations {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get one organization's data by id
     */
    getOrganization(req: operations.GetOrganizationRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationResponse>;
    /**
     * Get an array of all Organizations
     */
    getOrganizations(req: operations.GetOrganizationsRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationsResponse>;
    /**
     * Update an organization's data
     */
    patchOrganization(req: operations.PatchOrganizationRequest, config?: AxiosRequestConfig): Promise<operations.PatchOrganizationResponse>;
}
