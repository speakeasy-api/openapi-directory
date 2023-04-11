import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class RoadDistance {
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
    confirmCarbonOffset5(req: operations.ConfirmCarbonOffset5RequestBody, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ConfirmCarbonOffset5Response>;
    /**
     * confirmPayment
     */
    confirmPayment5(req: operations.ConfirmPayment5RequestBody, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ConfirmPayment5Response>;
    /**
     * confirmTransaction
     */
    confirmPaymentOfTransaction5(req: operations.ConfirmPaymentOfTransaction5RequestBody, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ConfirmPaymentOfTransaction5Response>;
    /**
     * confirmPlanting
     */
    confirmsPlanting5(req: operations.ConfirmsPlanting5RequestBody, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ConfirmsPlanting5Response>;
    /**
     * RoadDistance
     */
    roadDistance(req: operations.RoadDistanceRequestBody, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.RoadDistanceResponse>;
}
