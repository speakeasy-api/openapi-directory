import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Me {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Retrieve current account data
     */
    meGetMe(config?: AxiosRequestConfig): Promise<operations.MeGetMeResponse>;
    /**
     * Retrieve current account plan
     */
    meGetMePlan(config?: AxiosRequestConfig): Promise<operations.MeGetMePlanResponse>;
}
