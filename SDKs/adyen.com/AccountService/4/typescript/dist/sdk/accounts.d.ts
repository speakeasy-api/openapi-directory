import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Accounts {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Close an account
     *
     * @remarks
     * Closes an account. If an account is closed, you cannot process transactions, pay out its funds, or reopen it. If payments are made to a closed account, the payments are sent to your liable account.
     */
    postCloseAccount(req: shared.CloseAccountRequest, security: operations.PostCloseAccountSecurity, config?: AxiosRequestConfig): Promise<operations.PostCloseAccountResponse>;
    /**
     * Create an account
     *
     * @remarks
     * Creates an account under an account holder. An account holder can have [multiple accounts](https://docs.adyen.com/marketplaces-and-platforms/classic/account-holders-and-accounts#create-additional-accounts).
     */
    postCreateAccount(req: shared.CreateAccountRequest, security: operations.PostCreateAccountSecurity, config?: AxiosRequestConfig): Promise<operations.PostCreateAccountResponse>;
    /**
     * Update an account
     *
     * @remarks
     * Updates the description or payout schedule of an account.
     */
    postUpdateAccount(req: shared.UpdateAccountRequest, security: operations.PostUpdateAccountSecurity, config?: AxiosRequestConfig): Promise<operations.PostUpdateAccountResponse>;
}
