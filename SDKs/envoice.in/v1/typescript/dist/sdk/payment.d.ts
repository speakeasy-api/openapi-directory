import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Payment {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Return all supported payment gateways (no currencies means all are supported)
     */
    paymentApiSupported(req: operations.PaymentApiSupportedRequest, config?: AxiosRequestConfig): Promise<operations.PaymentApiSupportedResponse>;
}
