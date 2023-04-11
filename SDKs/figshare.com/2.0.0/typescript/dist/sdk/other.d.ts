import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Other {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Public Categories
     *
     * @remarks
     * Returns a list of public categories
     */
    categoriesList(config?: AxiosRequestConfig): Promise<operations.CategoriesListResponse>;
    /**
     * Public File Download
     *
     * @remarks
     * Starts the download of a file
     */
    fileDownload(req: operations.FileDownloadRequest, config?: AxiosRequestConfig): Promise<operations.FileDownloadResponse>;
    /**
     * Item Types
     *
     * @remarks
     * Returns the list of Item Types of the requested group. If no user is authenticated, returns the item types available for Figshare.
     */
    itemTypesList(req: operations.ItemTypesListRequest, security: operations.ItemTypesListSecurity, config?: AxiosRequestConfig): Promise<operations.ItemTypesListResponse>;
    /**
     * Public Licenses
     *
     * @remarks
     * Returns a list of public licenses
     */
    licensesList(config?: AxiosRequestConfig): Promise<operations.LicensesListResponse>;
    /**
     * Private Account information
     *
     * @remarks
     * Account information for token/personal token
     */
    privateAccount(config?: AxiosRequestConfig): Promise<operations.PrivateAccountResponse>;
    /**
     * Search Funding
     *
     * @remarks
     * Search for fundings
     */
    privateFundingSearch(req: shared.FundingSearch, security: operations.PrivateFundingSearchSecurity, config?: AxiosRequestConfig): Promise<operations.PrivateFundingSearchResponse>;
    /**
     * Private Account Licenses
     *
     * @remarks
     * This is a private endpoint that requires OAuth. It will return a list with figshare public licenses AND licenses defined for account's institution.
     */
    privateLicensesList(config?: AxiosRequestConfig): Promise<operations.PrivateLicensesListResponse>;
}
