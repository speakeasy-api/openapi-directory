import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Companies {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create Company
     *
     * @remarks
     * Create Company
     */
    companiesAdd(req: operations.CompaniesAddRequest, security: operations.CompaniesAddSecurity, config?: AxiosRequestConfig): Promise<operations.CompaniesAddResponse>;
    /**
     * List Companies
     *
     * @remarks
     * List Companies
     */
    companiesAll(req: operations.CompaniesAllRequest, security: operations.CompaniesAllSecurity, config?: AxiosRequestConfig): Promise<operations.CompaniesAllResponse>;
    /**
     * Delete Company
     *
     * @remarks
     * Delete Company
     */
    companiesDelete(req: operations.CompaniesDeleteRequest, security: operations.CompaniesDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.CompaniesDeleteResponse>;
    /**
     * Get Company
     *
     * @remarks
     * Get Company
     */
    companiesOne(req: operations.CompaniesOneRequest, security: operations.CompaniesOneSecurity, config?: AxiosRequestConfig): Promise<operations.CompaniesOneResponse>;
    /**
     * Update Company
     *
     * @remarks
     * Update Company
     */
    companiesUpdate(req: operations.CompaniesUpdateRequest, security: operations.CompaniesUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.CompaniesUpdateResponse>;
}
