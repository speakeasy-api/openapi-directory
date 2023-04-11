import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class UrbanDelivery {
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
    confirmCarbonOffset(req: operations.ConfirmCarbonOffsetRequestBody, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ConfirmCarbonOffsetResponse>;
    /**
     * confirmPayment
     */
    confirmPayment(req: operations.ConfirmPaymentRequestBody, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ConfirmPaymentResponse>;
    /**
     * confirmTransaction
     */
    confirmPaymentOfTransaction(req: operations.ConfirmPaymentOfTransactionRequestBody, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ConfirmPaymentOfTransactionResponse>;
    /**
     * confirmPlanting
     */
    confirmsPlanting(req: operations.ConfirmsPlantingRequestBody, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ConfirmsPlantingResponse>;
    /**
     * urbanDelivery
     */
    urbanDelivery(req: operations.UrbanDeliveryRequestBody, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UrbanDeliveryResponse>;
}
