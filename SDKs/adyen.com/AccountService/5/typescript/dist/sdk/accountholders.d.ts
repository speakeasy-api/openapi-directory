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
     * Close an account holder
     *
     * @remarks
     * Changes the [status of an account holder](https://docs.adyen.com/marketplaces-and-platforms/classic/account-holders-and-accounts#account-holder-statuses) to **Closed**. This state is final. If an account holder is closed, you can't process transactions, pay out funds, or reopen it. If payments are made to an account of an account holder with a **Closed** [`status`](https://docs.adyen.com/api-explorer/#/Account/latest/post/getAccountHolder__resParam_verification-accountHolder-checks-status), the payments are sent to your liable account.
     */
    postCloseAccountHolder(req: shared.CloseAccountHolderRequest, security: operations.PostCloseAccountHolderSecurity, config?: AxiosRequestConfig): Promise<operations.PostCloseAccountHolderResponse>;
    /**
     * Close stores
     *
     * @remarks
     * Closes stores associated with an account holder.
     */
    postCloseStores(req: shared.CloseStoresRequest, security: operations.PostCloseStoresSecurity, config?: AxiosRequestConfig): Promise<operations.PostCloseStoresResponse>;
    /**
     * Create an account holder
     *
     * @remarks
     * Creates an account holder that [represents the sub-merchant's entity](https://docs.adyen.com/marketplaces-and-platforms/classic/account-structure#your-platform) in your platform. The details that you need to provide in the request depend on the sub-merchant's legal entity type. For more information, refer to [Account holder and accounts](https://docs.adyen.com/marketplaces-and-platforms/classic/account-holders-and-accounts#legal-entity-types).
     */
    postCreateAccountHolder(req: shared.CreateAccountHolderRequest, security: operations.PostCreateAccountHolderSecurity, config?: AxiosRequestConfig): Promise<operations.PostCreateAccountHolderResponse>;
    /**
     * Get an account holder
     *
     * @remarks
     * Returns the details of an account holder.
     */
    postGetAccountHolder(req: shared.GetAccountHolderRequest, security: operations.PostGetAccountHolderSecurity, config?: AxiosRequestConfig): Promise<operations.PostGetAccountHolderResponse>;
    /**
     * Get a tax form
     *
     * @remarks
     * Generates a tax form for account holders operating in the US. For more information, refer to [Providing tax forms](https://docs.adyen.com/marketplaces-and-platforms/classic/tax-forms).
     */
    postGetTaxForm(req: shared.GetTaxFormRequest, security: operations.PostGetTaxFormSecurity, config?: AxiosRequestConfig): Promise<operations.PostGetTaxFormResponse>;
    /**
     * Suspend an account holder
     *
     * @remarks
     * Changes the [status of an account holder](https://docs.adyen.com/marketplaces-and-platforms/classic/account-holders-and-accounts#account-holder-statuses) to **Suspended**.
     */
    postSuspendAccountHolder(req: shared.SuspendAccountHolderRequest, security: operations.PostSuspendAccountHolderSecurity, config?: AxiosRequestConfig): Promise<operations.PostSuspendAccountHolderResponse>;
    /**
     * Unsuspend an account holder
     *
     * @remarks
     * Changes the [status of an account holder](https://docs.adyen.com/marketplaces-and-platforms/classic/account-holders-and-accounts#account-holder-statuses) from **Suspended** to **Inactive**.
     * Account holders can have a **Suspended** [`status`](https://docs.adyen.com/api-explorer/#/Account/latest/post/getAccountHolder__resParam_verification-accountHolder-checks-status) if you suspend them through the [`/suspendAccountHolder`](https://docs.adyen.com/api-explorer/#/Account/v5/post/suspendAccountHolder) endpoint or if a verification deadline expires.
     *
     * You can only unsuspend account holders if they do not have verification checks with a **FAILED** [`status`](https://docs.adyen.com/api-explorer/#/Account/latest/post/getAccountHolder__resParam_verification-accountHolder-checks-status).
     */
    postUnSuspendAccountHolder(req: shared.UnSuspendAccountHolderRequest, security: operations.PostUnSuspendAccountHolderSecurity, config?: AxiosRequestConfig): Promise<operations.PostUnSuspendAccountHolderResponse>;
    /**
     * Update an account holder
     *
     * @remarks
     * Updates the `accountHolderDetails` and `processingTier` of an account holder, and adds bank accounts and shareholders.
     *
     * When updating `accountHolderDetails`, parameters that are not included in the request are left unchanged except for the following object:
     *
     * * `metadata`: Updating the metadata replaces the entire object. This means that to update an existing key-value pair, you must provide the changes, as well as other existing key-value pairs.
     *
     * When updating any field in the following objects, you must submit all the fields required for validation:
     *
     *  * `address`
     *
     * * `fullPhoneNumber`
     *
     * * `bankAccountDetails.BankAccountDetail`
     *
     * * `businessDetails.shareholders.ShareholderContact`
     *
     *  For example, to update the `address.postalCode`, you must also submit the `address.country`, `.city`, `.street`, `.postalCode`, and possibly `.stateOrProvince` so that the address can be validated.
     *
     * To add a bank account or shareholder, provide the bank account or shareholder details without a `bankAccountUUID` or a `shareholderCode`.
     *
     *
     */
    postUpdateAccountHolder(req: shared.UpdateAccountHolderRequest, security: operations.PostUpdateAccountHolderSecurity, config?: AxiosRequestConfig): Promise<operations.PostUpdateAccountHolderResponse>;
    /**
     * Update payout or processing state
     *
     * @remarks
     * Disables or enables the processing or payout state of an account holder.
     */
    postUpdateAccountHolderState(req: shared.UpdateAccountHolderStateRequest, security: operations.PostUpdateAccountHolderStateSecurity, config?: AxiosRequestConfig): Promise<operations.PostUpdateAccountHolderStateResponse>;
}
