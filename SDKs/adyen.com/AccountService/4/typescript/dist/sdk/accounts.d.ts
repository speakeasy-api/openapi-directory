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
     * postCloseAccount - Close an account.
     *
     * Closes an account. If an account is closed, you cannot process transactions, pay out its funds, or reopen it. If payments are made to a closed account, the payments will be directed to your liable account.
    **/
    postCloseAccount(req: operations.PostCloseAccountRequest, config?: AxiosRequestConfig): Promise<operations.PostCloseAccountResponse>;
    /**
     * postCreateAccount - Create a new account.
     *
     * Creates an account under an account holder. An account holder can have [multiple accounts](https://docs.adyen.com/platforms/account-holders-and-accounts#create-additional-accounts).
    **/
    postCreateAccount(req: operations.PostCreateAccountRequest, config?: AxiosRequestConfig): Promise<operations.PostCreateAccountResponse>;
    /**
     * postUpdateAccount - Update an account.
     *
     * Updates the description or payout schedule of an account.
    **/
    postUpdateAccount(req: operations.PostUpdateAccountRequest, config?: AxiosRequestConfig): Promise<operations.PostUpdateAccountResponse>;
}
