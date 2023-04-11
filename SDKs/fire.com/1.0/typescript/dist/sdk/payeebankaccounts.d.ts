import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class PayeeBankAccounts {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List all Payee Bank Accounts
     *
     * @remarks
     * Returns all your payee bank accounts.
     *
     * Ordered by payee name ascending.
     *
     * Can be paginated.
     *
     */
    getPayees(config?: AxiosRequestConfig): Promise<operations.GetPayeesResponse>;
}
