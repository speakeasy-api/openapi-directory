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
     * Policy Document
     *
     * @remarks
     * API to verify Policy Document.
     */
    podoc(req: operations.PodocRequestBody, security: operations.PodocSecurity, config?: AxiosRequestConfig): Promise<operations.PodocResponse>;
}
