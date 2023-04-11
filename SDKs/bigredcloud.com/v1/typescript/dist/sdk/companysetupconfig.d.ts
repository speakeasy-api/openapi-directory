import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class CompanySetupConfig {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Returns the company configuration settings.
     */
    companySetupConfigGet(config?: AxiosRequestConfig): Promise<operations.CompanySetupConfigGetResponse>;
    /**
     * Returns the company option setting.
     */
    companySetupConfigGetCompanyOptions(config?: AxiosRequestConfig): Promise<operations.CompanySetupConfigGetCompanyOptionsResponse>;
    /**
     * Returns the financial year.
     */
    companySetupConfigGetFinancialYear(config?: AxiosRequestConfig): Promise<operations.CompanySetupConfigGetFinancialYearResponse>;
}
