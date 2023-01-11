import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class EcommerceDelivery {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * confirmCarbonOffset1 - confirmCarbonOffset
    **/
    confirmCarbonOffset1(req: operations.ConfirmCarbonOffset1Request, config?: AxiosRequestConfig): Promise<operations.ConfirmCarbonOffset1Response>;
    /**
     * confirmPayment1 - confirmPayment
    **/
    confirmPayment1(req: operations.ConfirmPayment1Request, config?: AxiosRequestConfig): Promise<operations.ConfirmPayment1Response>;
    /**
     * confirmPaymentOfTransaction1 - confirmTransaction
    **/
    confirmPaymentOfTransaction1(req: operations.ConfirmPaymentOfTransaction1Request, config?: AxiosRequestConfig): Promise<operations.ConfirmPaymentOfTransaction1Response>;
    /**
     * confirmsPlanting2 - confirmPlanting
    **/
    confirmsPlanting2(req: operations.ConfirmsPlanting2Request, config?: AxiosRequestConfig): Promise<operations.ConfirmsPlanting2Response>;
    /**
     * ecommerceDelivery - ecommerceDelivery
    **/
    ecommerceDelivery(req: operations.EcommerceDeliveryRequest, config?: AxiosRequestConfig): Promise<operations.EcommerceDeliveryResponse>;
}
