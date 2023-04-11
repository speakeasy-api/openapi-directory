import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class BalanceAccounts {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get a balance account
     *
     * @remarks
     * Returns a balance account and its balances for the default currency and other currencies with a non-zero balance.
     */
    getBalanceAccountsId(req: operations.GetBalanceAccountsIdRequest, security: operations.GetBalanceAccountsIdSecurity, config?: AxiosRequestConfig): Promise<operations.GetBalanceAccountsIdResponse>;
    /**
     * Get all payment instruments for a balance account
     *
     * @remarks
     * Returns a paginated list of the payment instruments associated with a balance account.
     *
     * To fetch multiple pages, use the query parameters.For example, to limit the page to 3 payment instruments and to skip the first 6, use `/balanceAccounts/{id}/paymentInstruments?limit=3&offset=6`.
     */
    getBalanceAccountsIdPaymentInstruments(req: operations.GetBalanceAccountsIdPaymentInstrumentsRequest, security: operations.GetBalanceAccountsIdPaymentInstrumentsSecurity, config?: AxiosRequestConfig): Promise<operations.GetBalanceAccountsIdPaymentInstrumentsResponse>;
    /**
     * Update a balance account
     *
     * @remarks
     * Updates a balance account.
     */
    patchBalanceAccountsId(req: operations.PatchBalanceAccountsIdRequest, security: operations.PatchBalanceAccountsIdSecurity, config?: AxiosRequestConfig): Promise<operations.PatchBalanceAccountsIdResponse>;
    /**
     * Create a balance account
     *
     * @remarks
     * Creates a balance account that holds the funds of the associated account holder.
     */
    postBalanceAccounts(req: shared.BalanceAccountInfoInput, security: operations.PostBalanceAccountsSecurity, config?: AxiosRequestConfig): Promise<operations.PostBalanceAccountsResponse>;
}
