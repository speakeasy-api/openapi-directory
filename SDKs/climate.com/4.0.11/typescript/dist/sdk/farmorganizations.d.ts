import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Farm organization data endpoints.
 */
export declare class FarmOrganizations {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Retrieve a specific farm organization by organization type and ID
     *
     * @remarks
     * Retrieve a given **farm organization** by organization type and ID.
     */
    fetchFarmOrganizationByTypeAndId(req: operations.FetchFarmOrganizationByTypeAndIdRequest, security: operations.FetchFarmOrganizationByTypeAndIdSecurity, config?: AxiosRequestConfig): Promise<operations.FetchFarmOrganizationByTypeAndIdResponse>;
}
