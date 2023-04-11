import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class UsersMerchantLevel {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get a list of users
     *
     * @remarks
     * Returns a list of users associated with the `merchantId` specified in the path.
     *
     * To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
     * * Management API—Users read and write
     *
     */
    getMerchantsMerchantIdUsers(req: operations.GetMerchantsMerchantIdUsersRequest, security: operations.GetMerchantsMerchantIdUsersSecurity, config?: AxiosRequestConfig): Promise<operations.GetMerchantsMerchantIdUsersResponse>;
    /**
     * Get user details
     *
     * @remarks
     * Returns user details for the `userId` and the `merchantId` specified in the path.
     *
     * To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
     * * Management API—Users read and write
     *
     */
    getMerchantsMerchantIdUsersUserId(req: operations.GetMerchantsMerchantIdUsersUserIdRequest, security: operations.GetMerchantsMerchantIdUsersUserIdSecurity, config?: AxiosRequestConfig): Promise<operations.GetMerchantsMerchantIdUsersUserIdResponse>;
    /**
     * Update a user
     *
     * @remarks
     * Updates user details for the `userId` and the `merchantId` specified in the path.
     *
     * To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
     * * Management API—Users read and write
     *
     */
    patchMerchantsMerchantIdUsersUserId(req: operations.PatchMerchantsMerchantIdUsersUserIdRequest, security: operations.PatchMerchantsMerchantIdUsersUserIdSecurity, config?: AxiosRequestConfig): Promise<operations.PatchMerchantsMerchantIdUsersUserIdResponse>;
    /**
     * Create a new user
     *
     * @remarks
     * Creates a user for the `merchantId` specified in the path.
     *
     * To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
     * * Management API—Users read and write
     *
     */
    postMerchantsMerchantIdUsers(req: operations.PostMerchantsMerchantIdUsersRequest, security: operations.PostMerchantsMerchantIdUsersSecurity, config?: AxiosRequestConfig): Promise<operations.PostMerchantsMerchantIdUsersResponse>;
}
