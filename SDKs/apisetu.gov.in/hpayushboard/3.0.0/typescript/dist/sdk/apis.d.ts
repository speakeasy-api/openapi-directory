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
     * phcer - Pharmacist Registration Certificate
     *
     * API to verify Pharmacist Registration Certificate.
    **/
    phcer(req: operations.PhcerRequest, config?: AxiosRequestConfig): Promise<operations.PhcerResponse>;
    /**
     * rpcer - Pharmacist Renewal certificate
     *
     * API to verify Pharmacist Renewal certificate.
    **/
    rpcer(req: operations.RpcerRequest, config?: AxiosRequestConfig): Promise<operations.RpcerResponse>;
}
