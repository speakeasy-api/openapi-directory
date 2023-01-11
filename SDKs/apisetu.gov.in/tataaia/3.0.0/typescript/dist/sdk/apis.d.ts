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
     * licer - Insurance Policy - Life
     *
     * API to verify Insurance Policy - Life.
    **/
    licer(req: operations.LicerRequest, config?: AxiosRequestConfig): Promise<operations.LicerResponse>;
    /**
     * prcpt - Premium Receipt
     *
     * API to verify Premium Receipt.
    **/
    prcpt(req: operations.PrcptRequest, config?: AxiosRequestConfig): Promise<operations.PrcptResponse>;
}
