import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class PayeeBankAccounts {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getPayees - List all Payee Bank Accounts
     *
     * Returns all your payee bank accounts.
     *
     * Ordered by date added descending.
     *
     * Can be paginated.
     *
    **/
    getPayees(config?: AxiosRequestConfig): Promise<operations.GetPayeesResponse>;
}
