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
     * pmjay - Pradhan Mantri Jan Arogya Yojana
     *
     * API to verify Pradhan Mantri Jan Arogya Yojana.
    **/
    pmjay(req: operations.PmjayRequest, config?: AxiosRequestConfig): Promise<operations.PmjayResponse>;
}
