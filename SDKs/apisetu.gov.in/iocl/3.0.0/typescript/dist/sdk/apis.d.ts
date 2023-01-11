import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class ApIs {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * lpgsv - LPG Subscription Voucher
     *
     * API to verify LPG Subscription Voucher.
    **/
    lpgsv(req: operations.LpgsvRequest, config?: AxiosRequestConfig): Promise<operations.LpgsvResponse>;
    /**
     * lpgtv - Termination Voucher
     *
     * API to verify Termination Voucher.
    **/
    lpgtv(req: operations.LpgtvRequest, config?: AxiosRequestConfig): Promise<operations.LpgtvResponse>;
}
