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
     * Pradhan Mantri Jan Arogya Yojana
     *
     * @remarks
     * API to verify Pradhan Mantri Jan Arogya Yojana.
     */
    pmjay(req: operations.PmjayRequestBody, security: operations.PmjaySecurity, config?: AxiosRequestConfig): Promise<operations.PmjayResponse>;
}
