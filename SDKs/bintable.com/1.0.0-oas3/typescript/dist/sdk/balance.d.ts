import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Authorized users with API Key can call endpoints under this tag.
 */
export declare class Balance {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Check Balance
     *
     * @remarks
     * Get Account balance and expiry
     */
    balanceLookup(req: operations.BalanceLookupRequest, config?: AxiosRequestConfig): Promise<operations.BalanceLookupResponse>;
}
