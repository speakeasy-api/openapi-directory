import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Accounts {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * addAccount - Add a new account
     *
     * Creates a new fire.com account.
     *
     * **Please note there is a charge associated with creating a new account.**
     *
    **/
    addAccount(req: operations.AddAccountRequest, config?: AxiosRequestConfig): Promise<operations.AddAccountResponse>;
    /**
     * getAccountById - Retrieve the details of a fire.com Account
     *
     * You can retrieve the details of a fire.com Account by its `ican`.
    **/
    getAccountById(req: operations.GetAccountByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetAccountByIdResponse>;
    /**
     * getAccounts - List all fire.com Accounts
     *
     * Returns all your fire.com Accounts. Ordered by Alias ascending. Can be paginated.
    **/
    getAccounts(config?: AxiosRequestConfig): Promise<operations.GetAccountsResponse>;
}
