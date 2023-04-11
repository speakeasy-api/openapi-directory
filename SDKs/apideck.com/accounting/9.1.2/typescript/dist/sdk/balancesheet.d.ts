import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class BalanceSheet {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get BalanceSheet
     *
     * @remarks
     * Get BalanceSheet
     */
    balanceSheetOne(req: operations.BalanceSheetOneRequest, security: operations.BalanceSheetOneSecurity, config?: AxiosRequestConfig): Promise<operations.BalanceSheetOneResponse>;
}
