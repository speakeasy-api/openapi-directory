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
     * ITI Certificate
     *
     * @remarks
     * API to verify ITI Certificate.
     */
    iticr(req: operations.IticrRequestBody, security: operations.IticrSecurity, config?: AxiosRequestConfig): Promise<operations.IticrResponse>;
}
