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
     * cocer - Company Related Certificate
     *
     * API to verify Company Related Certificate.
    **/
    cocer(req: operations.CocerRequest, config?: AxiosRequestConfig): Promise<operations.CocerResponse>;
    /**
     * rfcer - Registration Certificate of Firm/ Company
     *
     * API to verify Registration Certificate of Firm/ Company.
    **/
    rfcer(req: operations.RfcerRequest, config?: AxiosRequestConfig): Promise<operations.RfcerResponse>;
}
