import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class CharityOrg {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getCharityOrg - This call is used to retrieve detailed information about supported charitable organizations. It allows users to retrieve the details for a specific charitable organization using its charity organization ID. The call returns the full details for the charitable organization that matches the specified ID.
    **/
    getCharityOrg(req: operations.GetCharityOrgRequest, config?: AxiosRequestConfig): Promise<operations.GetCharityOrgResponse>;
    /**
     * getCharityOrgByLegacyId - This call allows users to retrieve the details for a specific charitable organization using its legacy charity ID, which has also been referred to as the charity number, external ID, and PayPal Giving Fund ID. The legacy charity ID&nbsp;is separate from eBay&rsquo;s generic charity ID.
    **/
    getCharityOrgByLegacyId(req: operations.GetCharityOrgByLegacyIdRequest, config?: AxiosRequestConfig): Promise<operations.GetCharityOrgByLegacyIdResponse>;
    /**
     * getCharityOrgs - This call is used to search for supported charitable organizations. It allows users to search for a specific charitable organization, or for multiple charitable organizations, from a particular charitable domain and/or geographical region, or by using search criteria. The call returns paginated search results containing the charitable organizations that match the specified criteria.
    **/
    getCharityOrgs(req: operations.GetCharityOrgsRequest, config?: AxiosRequestConfig): Promise<operations.GetCharityOrgsResponse>;
}
