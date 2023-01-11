import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Other {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * categoriesList - Public Categories
     *
     * Returns a list of public categories
    **/
    categoriesList(config?: AxiosRequestConfig): Promise<operations.CategoriesListResponse>;
    /**
     * fileDownload - Public File Download
     *
     * Starts the download of a file
    **/
    fileDownload(req: operations.FileDownloadRequest, config?: AxiosRequestConfig): Promise<operations.FileDownloadResponse>;
    /**
     * licensesList - Public Licenses
     *
     * Returns a list of public licenses
    **/
    licensesList(config?: AxiosRequestConfig): Promise<operations.LicensesListResponse>;
    /**
     * privateAccount - Private Account information
     *
     * Account information for token/personal token
    **/
    privateAccount(req: operations.PrivateAccountRequest, config?: AxiosRequestConfig): Promise<operations.PrivateAccountResponse>;
    /**
     * privateFundingSearch - Search Funding
     *
     * Search for fundings
    **/
    privateFundingSearch(req: operations.PrivateFundingSearchRequest, config?: AxiosRequestConfig): Promise<operations.PrivateFundingSearchResponse>;
    /**
     * privateLicensesList - Private Account Licenses
     *
     * This is a private endpoint that requires OAuth. It will return a list with figshare public licenses AND licenses defined for account's institution.
    **/
    privateLicensesList(req: operations.PrivateLicensesListRequest, config?: AxiosRequestConfig): Promise<operations.PrivateLicensesListResponse>;
}
