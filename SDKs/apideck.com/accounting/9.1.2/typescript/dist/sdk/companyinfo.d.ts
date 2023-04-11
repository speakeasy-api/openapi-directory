import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class CompanyInfo {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get company info
     *
     * @remarks
     * Get company info
     */
    companyInfoOne(req: operations.CompanyInfoOneRequest, security: operations.CompanyInfoOneSecurity, config?: AxiosRequestConfig): Promise<operations.CompanyInfoOneResponse>;
}
