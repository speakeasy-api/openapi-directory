import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class General {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getBalancePlatformsId - Retrieve a balance platform.
     *
     * Returns a specific balance platform.
    **/
    getBalancePlatformsId(req: operations.GetBalancePlatformsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetBalancePlatformsIdResponse>;
    /**
     * getBalancePlatformsIdAccountHolders - Retrieve all account holders under a specific balance platform.
     *
     * Returns a paginated list of all the account holders that belong to the balance platform. To fetch multiple pages, use the query parameters.
     *
     * For example, to limit the page to 5 account holders and to skip the first 20: `/balancePlatforms/{id}/accountHolders?limit=5&offset=20`.
    **/
    getBalancePlatformsIdAccountHolders(req: operations.GetBalancePlatformsIdAccountHoldersRequest, config?: AxiosRequestConfig): Promise<operations.GetBalancePlatformsIdAccountHoldersResponse>;
}
