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
     * dgcer - Degree/ Diploma Certificate
     *
     * API to verify Degree/ Diploma Certificate.
    **/
    dgcer(req: operations.DgcerRequest, config?: AxiosRequestConfig): Promise<operations.DgcerResponse>;
}
