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
     * rdcer - Copy of Registered Deed
     *
     * API to verify Copy of Registered Deed.
    **/
    rdcer(req: operations.RdcerRequest, config?: AxiosRequestConfig): Promise<operations.RdcerResponse>;
    /**
     * ror1b - Records of Rights
     *
     * API to verify Records of Rights.
    **/
    ror1b(req: operations.Ror1bRequest, config?: AxiosRequestConfig): Promise<operations.Ror1bResponse>;
}
