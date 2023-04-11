import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class APIs {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * LPG Subscription Voucher
     *
     * @remarks
     * API to verify LPG Subscription Voucher.
     */
    lpgsv(req: operations.LpgsvRequestBody, security: operations.LpgsvSecurity, config?: AxiosRequestConfig): Promise<operations.LpgsvResponse>;
    /**
     * Termination Voucher
     *
     * @remarks
     * API to verify Termination Voucher.
     */
    lpgtv(req: operations.LpgtvRequestBody, security: operations.LpgtvSecurity, config?: AxiosRequestConfig): Promise<operations.LpgtvResponse>;
}
