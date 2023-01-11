import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class BankAccount {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createBankAccount - Create a bank account
     *
     * Create a new bank account. Returns a bank account object if the create is succeded.
    **/
    createBankAccount(req: operations.CreateBankAccountRequest, config?: AxiosRequestConfig): Promise<operations.CreateBankAccountResponse>;
    /**
     * deleteBankAccount - Delete a bank account
     *
     * Delete an existing bank account.
    **/
    deleteBankAccount(req: operations.DeleteBankAccountRequest, config?: AxiosRequestConfig): Promise<operations.DeleteBankAccountResponse>;
    /**
     * getBankAccount - Retrieve a bank account
     *
     * Retrieves the details of an existing bank account.
    **/
    getBankAccount(req: operations.GetBankAccountRequest, config?: AxiosRequestConfig): Promise<operations.GetBankAccountResponse>;
    /**
     * listBankAccount - List all bank account
     *
     * Returns a list of your bank accounts. The bank accounts are returned sorted by creation date, with the most recent bank account appearing first.
    **/
    listBankAccount(req: operations.ListBankAccountRequest, config?: AxiosRequestConfig): Promise<operations.ListBankAccountResponse>;
    /**
     * updateBankAccount - Update a bank account
     *
     * Update an existing bank accounts. Returns a bank account object if the update is succeded.
    **/
    updateBankAccount(req: operations.UpdateBankAccountRequest, config?: AxiosRequestConfig): Promise<operations.UpdateBankAccountResponse>;
}
