import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * fire.com Accounts are the equivalent of a bank account from bank.
 */
export declare class Accounts {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Add a new account
     *
     * @remarks
     * Creates a new fire.com account.
     *
     * **Please note there is a charge associated with creating a new account.**
     *
     */
    addAccount(req: operations.AddAccountNewAccount, config?: AxiosRequestConfig): Promise<operations.AddAccountResponse>;
    /**
     * Retrieve the details of a fire.com Account
     *
     * @remarks
     * You can retrieve the details of a fire.com Account by its `ican`.
     */
    getAccountById(req: operations.GetAccountByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetAccountByIdResponse>;
    /**
     * List all fire.com Accounts
     *
     * @remarks
     * Returns all your fire.com Accounts. Ordered by Alias ascending. Can be paginated.
     */
    getAccounts(config?: AxiosRequestConfig): Promise<operations.GetAccountsResponse>;
}
