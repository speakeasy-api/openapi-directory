import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class AirtravelMultileg {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * airtravelMultileg - airtravelMultileg
    **/
    airtravelMultileg(req: operations.AirtravelMultilegRequest, config?: AxiosRequestConfig): Promise<operations.AirtravelMultilegResponse>;
    /**
     * confirmCarbonOffset3 - confirmCarbonOffset
    **/
    confirmCarbonOffset3(req: operations.ConfirmCarbonOffset3Request, config?: AxiosRequestConfig): Promise<operations.ConfirmCarbonOffset3Response>;
    /**
     * confirmPayment3 - confirmPayment
    **/
    confirmPayment3(req: operations.ConfirmPayment3Request, config?: AxiosRequestConfig): Promise<operations.ConfirmPayment3Response>;
    /**
     * confirmPaymentOfTransaction3 - confirmTransaction
    **/
    confirmPaymentOfTransaction3(req: operations.ConfirmPaymentOfTransaction3Request, config?: AxiosRequestConfig): Promise<operations.ConfirmPaymentOfTransaction3Response>;
    /**
     * confirmsPlanting3 - confirmPlanting
    **/
    confirmsPlanting3(req: operations.ConfirmsPlanting3Request, config?: AxiosRequestConfig): Promise<operations.ConfirmsPlanting3Response>;
}
