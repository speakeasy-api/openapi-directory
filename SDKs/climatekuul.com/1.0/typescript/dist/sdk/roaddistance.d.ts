import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class RoadDistance {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * confirmCarbonOffset5 - confirmCarbonOffset
    **/
    confirmCarbonOffset5(req: operations.ConfirmCarbonOffset5Request, config?: AxiosRequestConfig): Promise<operations.ConfirmCarbonOffset5Response>;
    /**
     * confirmPayment5 - confirmPayment
    **/
    confirmPayment5(req: operations.ConfirmPayment5Request, config?: AxiosRequestConfig): Promise<operations.ConfirmPayment5Response>;
    /**
     * confirmPaymentOfTransaction5 - confirmTransaction
    **/
    confirmPaymentOfTransaction5(req: operations.ConfirmPaymentOfTransaction5Request, config?: AxiosRequestConfig): Promise<operations.ConfirmPaymentOfTransaction5Response>;
    /**
     * confirmsPlanting5 - confirmPlanting
    **/
    confirmsPlanting5(req: operations.ConfirmsPlanting5Request, config?: AxiosRequestConfig): Promise<operations.ConfirmsPlanting5Response>;
    /**
     * roadDistance - RoadDistance
    **/
    roadDistance(req: operations.RoadDistanceRequest, config?: AxiosRequestConfig): Promise<operations.RoadDistanceResponse>;
}
