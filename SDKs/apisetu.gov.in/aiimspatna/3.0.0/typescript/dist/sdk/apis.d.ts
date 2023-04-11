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
     * Clinical Laboratory Report
     *
     * @remarks
     * API to verify Clinical Laboratory Report.
     */
    labrp(req: operations.LabrpRequestBody, security: operations.LabrpSecurity, config?: AxiosRequestConfig): Promise<operations.LabrpResponse>;
}
