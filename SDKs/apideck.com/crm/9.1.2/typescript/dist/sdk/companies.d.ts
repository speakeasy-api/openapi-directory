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
     * Create company
     *
     * @remarks
     * Create company
     */
    companiesAdd(req: operations.CompaniesAddRequest, security: operations.CompaniesAddSecurity, config?: AxiosRequestConfig): Promise<operations.CompaniesAddResponse>;
    /**
     * List companies
     *
     * @remarks
     * List companies
     */
    companiesAll(req: operations.CompaniesAllRequest, security: operations.CompaniesAllSecurity, config?: AxiosRequestConfig): Promise<operations.CompaniesAllResponse>;
    /**
     * Delete company
     *
     * @remarks
     * Delete company
     */
    companiesDelete(req: operations.CompaniesDeleteRequest, security: operations.CompaniesDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.CompaniesDeleteResponse>;
    /**
     * Get company
     *
     * @remarks
     * Get company
     */
    companiesOne(req: operations.CompaniesOneRequest, security: operations.CompaniesOneSecurity, config?: AxiosRequestConfig): Promise<operations.CompaniesOneResponse>;
    /**
     * Update company
     *
     * @remarks
     * Update company
     */
    companiesUpdate(req: operations.CompaniesUpdateRequest, security: operations.CompaniesUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.CompaniesUpdateResponse>;
}
