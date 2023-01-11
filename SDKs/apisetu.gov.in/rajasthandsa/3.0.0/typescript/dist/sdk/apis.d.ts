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
     * dpicr - Disabled Person Identity Card/ Certificate
     *
     * API to verify Disabled Person Identity Card/ Certificate.
    **/
    dpicr(req: operations.DpicrRequest, config?: AxiosRequestConfig): Promise<operations.DpicrResponse>;
}
