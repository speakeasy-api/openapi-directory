import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class UsersCompanyLevel {
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
     * Returns the list of users for the `companyId` identified in the path.
     *
     * To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
     * * Management API—Users read and write
     *
     */
    getCompaniesCompanyIdUsers(req: operations.GetCompaniesCompanyIdUsersRequest, security: operations.GetCompaniesCompanyIdUsersSecurity, config?: AxiosRequestConfig): Promise<operations.GetCompaniesCompanyIdUsersResponse>;
    /**
     * Get user details
     *
     * @remarks
     * Returns user details for the `userId` and the `companyId` identified in the path.
     *
     * To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
     * * Management API—Users read and write
     *
     */
    getCompaniesCompanyIdUsersUserId(req: operations.GetCompaniesCompanyIdUsersUserIdRequest, security: operations.GetCompaniesCompanyIdUsersUserIdSecurity, config?: AxiosRequestConfig): Promise<operations.GetCompaniesCompanyIdUsersUserIdResponse>;
    /**
     * Update user details
     *
     * @remarks
     * Updates user details for the `userId` and the `companyId` identified in the path.
     *
     * To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
     * * Management API—Users read and write
     *
     */
    patchCompaniesCompanyIdUsersUserId(req: operations.PatchCompaniesCompanyIdUsersUserIdRequest, security: operations.PatchCompaniesCompanyIdUsersUserIdSecurity, config?: AxiosRequestConfig): Promise<operations.PatchCompaniesCompanyIdUsersUserIdResponse>;
    /**
     * Create a new user
     *
     * @remarks
     * Creates the user for the `companyId` identified in the path.
     *
     * To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
     * * Management API—Users read and write
     *
     */
    postCompaniesCompanyIdUsers(req: operations.PostCompaniesCompanyIdUsersRequest, security: operations.PostCompaniesCompanyIdUsersSecurity, config?: AxiosRequestConfig): Promise<operations.PostCompaniesCompanyIdUsersResponse>;
}
