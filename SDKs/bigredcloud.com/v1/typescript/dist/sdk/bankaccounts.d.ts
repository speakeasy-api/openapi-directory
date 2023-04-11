import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class BankAccounts {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Removes an existing Bank Account.
     */
    bankAccountsDelete(req: operations.BankAccountsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.BankAccountsDeleteResponse>;
    /**
     * Returns a list of company's Bank Account. Supports OData querying protocol.
     * Filtering is forbidden.
     * Ordering is allowed by "id" and "acCode" fields.
     */
    bankAccountsGet(config?: AxiosRequestConfig): Promise<operations.BankAccountsGetResponse>;
    /**
     * Creates a new Bank Account.
     */
    bankAccountsPost(req: shared.BankAccountDto, config?: AxiosRequestConfig): Promise<operations.BankAccountsPostResponse>;
    /**
     * Processes a batch of Bank Accounts.
     */
    bankAccountsProcessBatch(req: shared.BatchItemBankAccountDto[], config?: AxiosRequestConfig): Promise<operations.BankAccountsProcessBatchResponse>;
    /**
     * Updates an existing Bank Account.
     */
    bankAccountsPut(req: operations.BankAccountsPutRequest, config?: AxiosRequestConfig): Promise<operations.BankAccountsPutResponse>;
    /**
     * Returns information about a single Bank Account.
     */
    getV1BankAccountsId(req: operations.GetV1BankAccountsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetV1BankAccountsIdResponse>;
}
