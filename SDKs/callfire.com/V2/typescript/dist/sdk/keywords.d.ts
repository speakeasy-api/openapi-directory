import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Keywords {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Find keyword lease configs
     *
     * @remarks
     * Searches for all keyword lease configs for the user. Returns a paged list of KeywordConfig
     */
    findKeywordLeaseConfigs(req: operations.FindKeywordLeaseConfigsRequest, security: operations.FindKeywordLeaseConfigsSecurity, config?: AxiosRequestConfig): Promise<operations.FindKeywordLeaseConfigsResponse>;
    /**
     * Find keyword leases
     *
     * @remarks
     * Searches for all keywords owned by user. A keyword lease is the ownership information involving a keyword
     */
    findKeywordLeases(req: operations.FindKeywordLeasesRequest, security: operations.FindKeywordLeasesSecurity, config?: AxiosRequestConfig): Promise<operations.FindKeywordLeasesResponse>;
    /**
     * Find keywords
     *
     * @remarks
     * Searches for all keywords available for purchase on the CallFire platform. If a keyword appears in the response, it is available for purchase. List the 'keywords' in a query parameter to search for multiple keywords (at least one keyword should be sent in request). Keyword should only consist of uppercase and lowercase letters and numbers. Number of characters must be greater than 2, but less than 65.
     */
    findKeywords(req: operations.FindKeywordsRequest, security: operations.FindKeywordsSecurity, config?: AxiosRequestConfig): Promise<operations.FindKeywordsResponse>;
    /**
     * Find a specific lease
     *
     * @remarks
     * Searches for all keywords owned by user
     */
    getKeywordLease(req: operations.GetKeywordLeaseRequest, security: operations.GetKeywordLeaseSecurity, config?: AxiosRequestConfig): Promise<operations.GetKeywordLeaseResponse>;
    /**
     * Find a keyword by id
     *
     * @remarks
     * Get keyword by id
     */
    getKeywordLeaseById(req: operations.GetKeywordLeaseByIdRequest, security: operations.GetKeywordLeaseByIdSecurity, config?: AxiosRequestConfig): Promise<operations.GetKeywordLeaseByIdResponse>;
    /**
     * Find a specific keyword lease config
     *
     * @remarks
     * Returns a single KeywordConfig instance for a given keyword lease
     */
    getKeywordLeaseConfig(req: operations.GetKeywordLeaseConfigRequest, security: operations.GetKeywordLeaseConfigSecurity, config?: AxiosRequestConfig): Promise<operations.GetKeywordLeaseConfigResponse>;
    /**
     * Check for a specific keyword
     *
     * @remarks
     * Searches for the specific keyword to purchase on the CallFire platform. Returns 'true' if keyword is available. Keyword should only consist of uppercase and lowercase letters and numbers. Number of characters must be greater than 2, but less than 65.
     */
    isKeywordAvailable(req: operations.IsKeywordAvailableRequest, security: operations.IsKeywordAvailableSecurity, config?: AxiosRequestConfig): Promise<operations.IsKeywordAvailableResponse>;
    /**
     * Update a lease
     *
     * @remarks
     * Updates a keyword lease. Turns the autoRenew on/off. Configure double opt in feature. Add/remove contact list from keyword.
     */
    updateKeywordLease(req: operations.UpdateKeywordLeaseRequest, security: operations.UpdateKeywordLeaseSecurity, config?: AxiosRequestConfig): Promise<operations.UpdateKeywordLeaseResponse>;
    /**
     * Update a keyword lease config
     *
     * @remarks
     * Updates a keyword lease configuration. Use this API endpoint to enable/disable inbound SMS forwarding, set forward number. Forward number must be in E.164 format)
     */
    updateKeywordLeaseConfig(req: operations.UpdateKeywordLeaseConfigRequest, security: operations.UpdateKeywordLeaseConfigSecurity, config?: AxiosRequestConfig): Promise<operations.UpdateKeywordLeaseConfigResponse>;
}
