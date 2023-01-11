import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Organizations {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getOrganization - Get one organization's data by id
    **/
    getOrganization(req: operations.GetOrganizationRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationResponse>;
    /**
     * getOrganizations - Get an array of all Organizations
    **/
    getOrganizations(req: operations.GetOrganizationsRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationsResponse>;
    /**
     * patchOrganization - Update an organization's data
    **/
    patchOrganization(req: operations.PatchOrganizationRequest, config?: AxiosRequestConfig): Promise<operations.PatchOrganizationResponse>;
}
