import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class UrbanDelivery {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * confirmCarbonOffset - confirmCarbonOffset
    **/
    confirmCarbonOffset(req: operations.ConfirmCarbonOffsetRequest, config?: AxiosRequestConfig): Promise<operations.ConfirmCarbonOffsetResponse>;
    /**
     * confirmPayment - confirmPayment
    **/
    confirmPayment(req: operations.ConfirmPaymentRequest, config?: AxiosRequestConfig): Promise<operations.ConfirmPaymentResponse>;
    /**
     * confirmPaymentOfTransaction - confirmTransaction
    **/
    confirmPaymentOfTransaction(req: operations.ConfirmPaymentOfTransactionRequest, config?: AxiosRequestConfig): Promise<operations.ConfirmPaymentOfTransactionResponse>;
    /**
     * confirmsPlanting - confirmPlanting
    **/
    confirmsPlanting(req: operations.ConfirmsPlantingRequest, config?: AxiosRequestConfig): Promise<operations.ConfirmsPlantingResponse>;
    /**
     * urbanDelivery - urbanDelivery
    **/
    urbanDelivery(req: operations.UrbanDeliveryRequest, config?: AxiosRequestConfig): Promise<operations.UrbanDeliveryResponse>;
}
