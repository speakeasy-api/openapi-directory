import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Numbers {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Find lease configs
     *
     * @remarks
     * Searches for all number lease configs for the user. Returns a paged list of NumberConfig
     */
    findNumberLeaseConfigs(req: operations.FindNumberLeaseConfigsRequest, security: operations.FindNumberLeaseConfigsSecurity, config?: AxiosRequestConfig): Promise<operations.FindNumberLeaseConfigsResponse>;
    /**
     * Find leases
     *
     * @remarks
     * Searches for all numbers leased by account user. This API is useful for finding all numbers currently owned by the user. Returns a paged list of number leases.
     */
    findNumberLeases(req: operations.FindNumberLeasesRequest, security: operations.FindNumberLeasesSecurity, config?: AxiosRequestConfig): Promise<operations.FindNumberLeasesResponse>;
    /**
     * Find number regions
     *
     * @remarks
     * Searches for region information. Use this API to obtain detailed region information that can be used to query for more specific phone numbers than a general query.
     */
    findNumberRegions(req: operations.FindNumberRegionsRequest, security: operations.FindNumberRegionsSecurity, config?: AxiosRequestConfig): Promise<operations.FindNumberRegionsResponse>;
    /**
     * Find local numbers
     *
     * @remarks
     * Searches for numbers available for purchase in CallFire local numbers catalog . At least one additional parameter is required. User may filter local numbers by their region information. If all numbers with desirable zip code is already busy search will return available numbers with nearest zip code.
     */
    findNumbersLocal(req: operations.FindNumbersLocalRequest, security: operations.FindNumbersLocalSecurity, config?: AxiosRequestConfig): Promise<operations.FindNumbersLocalResponse>;
    /**
     * Find tollfree numbers
     *
     * @remarks
     * Searches for the toll free numbers which are available for purchase in the CallFire catalog
     */
    findNumbersTollfree(req: operations.FindNumbersTollfreeRequest, security: operations.FindNumbersTollfreeSecurity, config?: AxiosRequestConfig): Promise<operations.FindNumbersTollfreeResponse>;
    /**
     * Find a specific lease
     *
     * @remarks
     * Returns a single NumberLease instance for a given number
     */
    getNumberLease(req: operations.GetNumberLeaseRequest, security: operations.GetNumberLeaseSecurity, config?: AxiosRequestConfig): Promise<operations.GetNumberLeaseResponse>;
    /**
     * Find a specific lease config
     *
     * @remarks
     * Returns a single NumberConfig instance for a given number lease
     */
    getNumberLeaseConfig(req: operations.GetNumberLeaseConfigRequest, security: operations.GetNumberLeaseConfigSecurity, config?: AxiosRequestConfig): Promise<operations.GetNumberLeaseConfigResponse>;
    /**
     * Update a lease
     *
     * @remarks
     * Updates a number lease instance. Ability to turn on/off autoRenew and toggle call/text features for a particular number
     */
    updateNumberLease(req: operations.UpdateNumberLeaseRequest, security: operations.UpdateNumberLeaseSecurity, config?: AxiosRequestConfig): Promise<operations.UpdateNumberLeaseResponse>;
    /**
     * Update a lease config
     *
     * @remarks
     * Updates a phone number lease configuration. Use this API endpoint to add an Inbound IVR or Call Tracking feature to a CallFire phone number. Call tracking configuration allows you to track the incoming calls, to analyze and to respond customers using sms or voice replies. For more information see [call tracking page](https://www.callfire.com/products/call-tracking)
     */
    updateNumberLeaseConfig(req: operations.UpdateNumberLeaseConfigRequest, security: operations.UpdateNumberLeaseConfigSecurity, config?: AxiosRequestConfig): Promise<operations.UpdateNumberLeaseConfigResponse>;
}
