import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class AccountHolders {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getAccountHoldersId - Retrieve an account holder.
     *
     * Returns a specific account holder.
    **/
    getAccountHoldersId(req: operations.GetAccountHoldersIdRequest, config?: AxiosRequestConfig): Promise<operations.GetAccountHoldersIdResponse>;
    /**
     * getAccountHoldersIdBalanceAccounts - Retrieve all balance accounts of a specific account holder.
     *
     * Returns a paginated list of balance accounts associated with a specific account holder. To fetch multiple pages, use the query parameters.
     *
     * For example, to limit the page to 5 balance accounts and to skip the first 10: `/accountHolders/{id}/balanceAccounts?limit=5&offset=10`.
    **/
    getAccountHoldersIdBalanceAccounts(req: operations.GetAccountHoldersIdBalanceAccountsRequest, config?: AxiosRequestConfig): Promise<operations.GetAccountHoldersIdBalanceAccountsResponse>;
    /**
     * patchAccountHoldersId - Update an account holder.
     *
     * Updates a specific account holder. When updating an account holder resource, note that:
     *
     * * If a parameter is not provided in the request, the parameter is left unchanged.
     *
     * * When updating any parameter in the `contactDetails` object, you must send all other existing `contactDetails` parameters.
    **/
    patchAccountHoldersId(req: operations.PatchAccountHoldersIdRequest, config?: AxiosRequestConfig): Promise<operations.PatchAccountHoldersIdResponse>;
    /**
     * postAccountHolders - Create an account holder.
     *
     * Creates an account holder. This resource represents your user's entity within the balance platform.
     *
     * For more information, refer to [Create accounts](https://docs.adyen.com/issuing/create-accounts).
    **/
    postAccountHolders(req: operations.PostAccountHoldersRequest, config?: AxiosRequestConfig): Promise<operations.PostAccountHoldersResponse>;
}
