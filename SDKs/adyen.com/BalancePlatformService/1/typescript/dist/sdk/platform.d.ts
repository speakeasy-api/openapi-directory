import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Platform {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get a balance platform
     *
     * @remarks
     * Returns a balance platform.
     */
    getBalancePlatformsId(req: operations.GetBalancePlatformsIdRequest, security: operations.GetBalancePlatformsIdSecurity, config?: AxiosRequestConfig): Promise<operations.GetBalancePlatformsIdResponse>;
    /**
     * Get all account holders under a balance platform
     *
     * @remarks
     * Returns a paginated list of all the account holders that belong to the balance platform. To fetch multiple pages, use the query parameters.
     *
     * For example, to limit the page to 5 account holders and to skip the first 20, use `/balancePlatforms/{id}/accountHolders?limit=5&offset=20`.
     */
    getBalancePlatformsIdAccountHolders(req: operations.GetBalancePlatformsIdAccountHoldersRequest, security: operations.GetBalancePlatformsIdAccountHoldersSecurity, config?: AxiosRequestConfig): Promise<operations.GetBalancePlatformsIdAccountHoldersResponse>;
}
