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
     * postCloseAccountHolder - Close an account holder.
     *
     * Changes the [status of an account holder](https://docs.adyen.com/platforms/account-holders-and-accounts#account-holder-statuses) to **Closed**. This state is final. If an account holder is closed, you can't process transactions, pay out funds, or reopen it. If payments are made to an account of an account holder with a **Closed** status,the payments will be directed to your liable account.
    **/
    postCloseAccountHolder(req: operations.PostCloseAccountHolderRequest, config?: AxiosRequestConfig): Promise<operations.PostCloseAccountHolderResponse>;
    /**
     * postCloseStores - Close stores.
     *
     * Close one or more stores of the account holder.
    **/
    postCloseStores(req: operations.PostCloseStoresRequest, config?: AxiosRequestConfig): Promise<operations.PostCloseStoresResponse>;
    /**
     * postCreateAccountHolder - Create a new account holder.
     *
     * Creates an account holder, which [represents the sub-merchant's entity](https://docs.adyen.com/platforms/account-structure#your-platform) in your platform. The details that you need to provide in the request depend on the sub-merchant's legal entity type. For more information, refer to [Account holder and accounts](https://docs.adyen.com/platforms/account-holders-and-accounts#legal-entity-types).
    **/
    postCreateAccountHolder(req: operations.PostCreateAccountHolderRequest, config?: AxiosRequestConfig): Promise<operations.PostCreateAccountHolderResponse>;
    /**
     * postGetAccountHolder - Get an account holder.
     *
     * Retrieves the details of an account holder.
    **/
    postGetAccountHolder(req: operations.PostGetAccountHolderRequest, config?: AxiosRequestConfig): Promise<operations.PostGetAccountHolderResponse>;
    /**
     * postGetTaxForm - Get a tax form.
     *
     * Generates a tax form for account holders operating in the US. For more information, refer to [Providing tax forms](https://docs.adyen.com/platforms/tax-forms).
    **/
    postGetTaxForm(req: operations.PostGetTaxFormRequest, config?: AxiosRequestConfig): Promise<operations.PostGetTaxFormResponse>;
    /**
     * postSuspendAccountHolder - Suspend an account holder.
     *
     * Changes the [status of an account holder](https://docs.adyen.com/platforms/account-holders-and-accounts#account-holder-statuses) to **Suspended**.
    **/
    postSuspendAccountHolder(req: operations.PostSuspendAccountHolderRequest, config?: AxiosRequestConfig): Promise<operations.PostSuspendAccountHolderResponse>;
    /**
     * postUnSuspendAccountHolder - Unsuspend an account holder.
     *
     * Changes the [status of an account holder](https://docs.adyen.com/platforms/account-holders-and-accounts#account-holder-statuses) from **Suspended** to **Inactive**. Account holders can have a **Suspended** status if you suspend them through the [`/suspendAccountHolder`](https://docs.adyen.com/api-explorer/#/Account/v5/post/suspendAccountHolder) endpoint or if a KYC deadline expires.
     *
     * You can only unsuspend account holders if they _do not_ have verification checks with a **FAILED** [`status`](https://docs.adyen.com/api-explorer/#/Account/latest/post/getAccountHolder__resParam_verification-accountHolder-checks-status).
    **/
    postUnSuspendAccountHolder(req: operations.PostUnSuspendAccountHolderRequest, config?: AxiosRequestConfig): Promise<operations.PostUnSuspendAccountHolderResponse>;
    /**
     * postUpdateAccountHolder - Update an account holder.
     *
     * Updates the `accountHolderDetails` and `processingTier` of an account holder, and adds bank accounts and shareholders.
     *
     * When updating `accountHolderDetails`, parameters that are not included in the request are left unchanged except for the objects below.
     *
     * * `metadata`: Updating the metadata replaces the entire object. This means that to update an existing key-value pair, you must provide the changes along with other existing key-value pairs.
     *
     * When updating any field in the following objects, you must submit all the fields required for validation.
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
    **/
    postUpdateAccountHolder(req: operations.PostUpdateAccountHolderRequest, config?: AxiosRequestConfig): Promise<operations.PostUpdateAccountHolderResponse>;
    /**
     * postUpdateAccountHolderState - Update payout or processing state.
     *
     * Disables or enables the processing or payout state of an account holder.
    **/
    postUpdateAccountHolderState(req: operations.PostUpdateAccountHolderStateRequest, config?: AxiosRequestConfig): Promise<operations.PostUpdateAccountHolderStateResponse>;
}
