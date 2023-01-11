import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Company {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * companySearchRead - Return company search result
     *
     * Return company search result
     *
     * ### Response Class (Status 200)
     *
     * * __{company_name}__: Used as a key word to search companies,
     *
     * For more details on how companies are listed [see here][ref].
     * [ref]: https://etmdb.com/en/company-list/-updated_date
    **/
    companySearchRead(req: operations.CompanySearchReadRequest, config?: AxiosRequestConfig): Promise<operations.CompanySearchReadResponse>;
}
