import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class LedgerAccounts {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create Ledger Account
     *
     * @remarks
     * Create Ledger Account
     */
    ledgerAccountsAdd(req: operations.LedgerAccountsAddRequest, security: operations.LedgerAccountsAddSecurity, config?: AxiosRequestConfig): Promise<operations.LedgerAccountsAddResponse>;
    /**
     * List Ledger Accounts
     *
     * @remarks
     * List Ledger Accounts
     */
    ledgerAccountsAll(req: operations.LedgerAccountsAllRequest, security: operations.LedgerAccountsAllSecurity, config?: AxiosRequestConfig): Promise<operations.LedgerAccountsAllResponse>;
    /**
     * Delete Ledger Account
     *
     * @remarks
     * Delete Ledger Account
     */
    ledgerAccountsDelete(req: operations.LedgerAccountsDeleteRequest, security: operations.LedgerAccountsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.LedgerAccountsDeleteResponse>;
    /**
     * Get Ledger Account
     *
     * @remarks
     * Get Ledger Account
     */
    ledgerAccountsOne(req: operations.LedgerAccountsOneRequest, security: operations.LedgerAccountsOneSecurity, config?: AxiosRequestConfig): Promise<operations.LedgerAccountsOneResponse>;
    /**
     * Update Ledger Account
     *
     * @remarks
     * Update Ledger Account
     */
    ledgerAccountsUpdate(req: operations.LedgerAccountsUpdateRequest, security: operations.LedgerAccountsUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.LedgerAccountsUpdateResponse>;
}
