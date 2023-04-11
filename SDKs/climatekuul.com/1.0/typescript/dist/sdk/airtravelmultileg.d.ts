import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class AirtravelMultileg {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * airtravelMultileg
     */
    airtravelMultileg(req: shared.AirtravelMultilegRequest, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.AirtravelMultilegResponse>;
    /**
     * confirmCarbonOffset
     */
    confirmCarbonOffset3(req: operations.ConfirmCarbonOffset3RequestBody, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ConfirmCarbonOffset3Response>;
    /**
     * confirmPayment
     */
    confirmPayment3(req: operations.ConfirmPayment3RequestBody, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ConfirmPayment3Response>;
    /**
     * confirmTransaction
     */
    confirmPaymentOfTransaction3(req: operations.ConfirmPaymentOfTransaction3RequestBody, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ConfirmPaymentOfTransaction3Response>;
    /**
     * confirmPlanting
     */
    confirmsPlanting3(req: operations.ConfirmsPlanting3RequestBody, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ConfirmsPlanting3Response>;
}
