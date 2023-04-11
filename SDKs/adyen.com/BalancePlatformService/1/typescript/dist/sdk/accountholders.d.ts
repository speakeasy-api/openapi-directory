import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class AccountHolders {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get an account holder
     *
     * @remarks
     * Returns an account holder.
     */
    getAccountHoldersId(req: operations.GetAccountHoldersIdRequest, security: operations.GetAccountHoldersIdSecurity, config?: AxiosRequestConfig): Promise<operations.GetAccountHoldersIdResponse>;
    /**
     * Get all balance accounts of an account holder
     *
     * @remarks
     * Returns a paginated list of the balance accounts associated with an account holder. To fetch multiple pages, use the query parameters.
     *
     * For example, to limit the page to 5 balance accounts and skip the first 10, use `/accountHolders/{id}/balanceAccounts?limit=5&offset=10`.
     */
    getAccountHoldersIdBalanceAccounts(req: operations.GetAccountHoldersIdBalanceAccountsRequest, security: operations.GetAccountHoldersIdBalanceAccountsSecurity, config?: AxiosRequestConfig): Promise<operations.GetAccountHoldersIdBalanceAccountsResponse>;
    /**
     * Update an account holder
     *
     * @remarks
     * Updates an account holder. When updating an account holder resource, if a parameter is not provided in the request, it is left unchanged.
     */
    patchAccountHoldersId(req: operations.PatchAccountHoldersIdRequest, security: operations.PatchAccountHoldersIdSecurity, config?: AxiosRequestConfig): Promise<operations.PatchAccountHoldersIdResponse>;
    /**
     * Create an account holder
     *
     * @remarks
     * Creates an account holder linked to a [legal entity](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/legalEntities).
     *
     *
     */
    postAccountHolders(req: shared.AccountHolderInfoInput, security: operations.PostAccountHoldersSecurity, config?: AxiosRequestConfig): Promise<operations.PostAccountHoldersResponse>;
}
