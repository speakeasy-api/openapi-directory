import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class CharityOrg {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * This call is used to retrieve detailed information about supported charitable organizations. It allows users to retrieve the details for a specific charitable organization using its charity organization ID.
     */
    getCharityOrg(req: operations.GetCharityOrgRequest, security: operations.GetCharityOrgSecurity, config?: AxiosRequestConfig): Promise<operations.GetCharityOrgResponse>;
    /**
     * This call is used to search for supported charitable organizations. It allows users to search for a specific charitable organization, or for multiple charitable organizations, from a particular charitable domain and/or geographical region, or by using search criteria.<br /><br />The call returns paginated search results containing the charitable organizations that match the specified criteria.
     */
    getCharityOrgs(req: operations.GetCharityOrgsRequest, security: operations.GetCharityOrgsSecurity, config?: AxiosRequestConfig): Promise<operations.GetCharityOrgsResponse>;
}
