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
     * hvcer - Class XII Provisional Certificate
     *
     * API to verify Class XII Provisional Certificate.
    **/
    hvcer(req: operations.HvcerRequest, config?: AxiosRequestConfig): Promise<operations.HvcerResponse>;
    /**
     * svcer - Class X Provisional Certificate
     *
     * API to verify Class X Provisional Certificate.
    **/
    svcer(req: operations.SvcerRequest, config?: AxiosRequestConfig): Promise<operations.SvcerResponse>;
}
