import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * BankAccount object represents your bank account information.
 */
export declare class BankAccount {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create a bank account
     *
     * @remarks
     * Create a new bank account. Returns a bank account object if the create is succeded.
     */
    createBankAccount(req: shared.BankAccountInput, config?: AxiosRequestConfig): Promise<operations.CreateBankAccountResponse>;
    /**
     * Delete a bank account
     *
     * @remarks
     * Delete an existing bank account.
     */
    deleteBankAccount(req: operations.DeleteBankAccountRequest, config?: AxiosRequestConfig): Promise<operations.DeleteBankAccountResponse>;
    /**
     * Retrieve a bank account
     *
     * @remarks
     * Retrieves the details of an existing bank account.
     */
    getBankAccount(req: operations.GetBankAccountRequest, config?: AxiosRequestConfig): Promise<operations.GetBankAccountResponse>;
    /**
     * List all bank account
     *
     * @remarks
     * Returns a list of your bank accounts. The bank accounts are returned sorted by creation date, with the most recent bank account appearing first.
     */
    listBankAccount(req: operations.ListBankAccountRequest, config?: AxiosRequestConfig): Promise<operations.ListBankAccountResponse>;
    /**
     * Update a bank account
     *
     * @remarks
     * Update an existing bank accounts. Returns a bank account object if the update is succeded.
     */
    updateBankAccount(req: operations.UpdateBankAccountRequest, config?: AxiosRequestConfig): Promise<operations.UpdateBankAccountResponse>;
}
