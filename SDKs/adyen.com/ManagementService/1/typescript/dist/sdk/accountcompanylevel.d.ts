import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class AccountCompanyLevel {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get a list of company accounts
     *
     * @remarks
     * Returns the list of company accounts that your API credential has access to. The list is grouped into pages as defined by the query parameters.
     *
     * To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
     *
     * * Management API—Account read
     */
    getCompanies(req: operations.GetCompaniesRequest, security: operations.GetCompaniesSecurity, config?: AxiosRequestConfig): Promise<operations.GetCompaniesResponse>;
    /**
     * Get a company account
     *
     * @remarks
     * Returns the company account specified in the path. Your API credential must have access to the company account.
     *
     * To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
     * * Management API—Account read
     */
    getCompaniesCompanyId(req: operations.GetCompaniesCompanyIdRequest, security: operations.GetCompaniesCompanyIdSecurity, config?: AxiosRequestConfig): Promise<operations.GetCompaniesCompanyIdResponse>;
    /**
     * Get a list of merchant accounts
     *
     * @remarks
     * Returns the list of merchant accounts under the company account specified in the path. The list only includes merchant accounts that your API credential has access to. The list is grouped into pages as defined by the query parameters.
     *
     * To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
     * * Management API—Account read
     */
    getCompaniesCompanyIdMerchants(req: operations.GetCompaniesCompanyIdMerchantsRequest, security: operations.GetCompaniesCompanyIdMerchantsSecurity, config?: AxiosRequestConfig): Promise<operations.GetCompaniesCompanyIdMerchantsResponse>;
}
