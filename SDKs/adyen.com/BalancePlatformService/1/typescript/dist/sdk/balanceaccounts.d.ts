import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class BalanceAccounts {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getBalanceAccountsId - Retrieve a balance account.
     *
     * Returns a specific balance account.
    **/
    getBalanceAccountsId(req: operations.GetBalanceAccountsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetBalanceAccountsIdResponse>;
    /**
     * getBalanceAccountsIdPaymentInstruments - Retrieve all payment instruments for a specific balance account.
     *
     * Returns a paginated list of the payment instruments associated with a specific balance account. To fetch multiple pages, use the query parameters.
     *
     * For example, to limit the page to 3 payment instruments and to skip the first 6: `/balanceAccounts/{id}/paymentInstruments?limit=3&offset=6`
    **/
    getBalanceAccountsIdPaymentInstruments(req: operations.GetBalanceAccountsIdPaymentInstrumentsRequest, config?: AxiosRequestConfig): Promise<operations.GetBalanceAccountsIdPaymentInstrumentsResponse>;
    /**
     * patchBalanceAccountsId - Update a balance account.
     *
     * Updates a balance account.
    **/
    patchBalanceAccountsId(req: operations.PatchBalanceAccountsIdRequest, config?: AxiosRequestConfig): Promise<operations.PatchBalanceAccountsIdResponse>;
    /**
     * postBalanceAccounts - Create a balance account.
     *
     * Creates a balance account. The balance account resource holds the funds of the associated account holder.
     *
     * For more information, refer to [Create accounts](https://docs.adyen.com/issuing/create-accounts).
    **/
    postBalanceAccounts(req: operations.PostBalanceAccountsRequest, config?: AxiosRequestConfig): Promise<operations.PostBalanceAccountsResponse>;
}
