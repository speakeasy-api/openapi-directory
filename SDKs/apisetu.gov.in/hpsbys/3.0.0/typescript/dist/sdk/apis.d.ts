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
     * rsbyc - Health Card/ Certificate
     *
     * API to verify Health Card/ Certificate.
    **/
    rsbyc(req: operations.RsbycRequest, config?: AxiosRequestConfig): Promise<operations.RsbycResponse>;
}
