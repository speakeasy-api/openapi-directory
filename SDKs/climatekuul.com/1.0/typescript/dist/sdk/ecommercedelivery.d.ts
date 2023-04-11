import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class EcommerceDelivery {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * confirmCarbonOffset
     */
    confirmCarbonOffset1(req: operations.ConfirmCarbonOffset1RequestBody, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ConfirmCarbonOffset1Response>;
    /**
     * confirmPayment
     */
    confirmPayment1(req: operations.ConfirmPayment1RequestBody, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ConfirmPayment1Response>;
    /**
     * confirmTransaction
     */
    confirmPaymentOfTransaction1(req: operations.ConfirmPaymentOfTransaction1RequestBody, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ConfirmPaymentOfTransaction1Response>;
    /**
     * confirmPlanting
     */
    confirmsPlanting2(req: operations.ConfirmsPlanting2RequestBody, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ConfirmsPlanting2Response>;
    /**
     * ecommerceDelivery
     */
    ecommerceDelivery(req: operations.EcommerceDeliveryRequest, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.EcommerceDeliveryResponse>;
}
