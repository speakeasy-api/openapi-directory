import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class AirtravelCoordinates {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * airtravelCoordinates
     */
    airtravelCoordinates(req: operations.AirtravelCoordinatesRequest, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.AirtravelCoordinatesResponse>;
    /**
     * confirmCarbonOffset
     */
    confirmCarbonOffset4(req: operations.ConfirmCarbonOffset4RequestBody, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ConfirmCarbonOffset4Response>;
    /**
     * confirmPayment
     */
    confirmPayment4(req: operations.ConfirmPayment4RequestBody, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ConfirmPayment4Response>;
    /**
     * confirmTransaction
     */
    confirmPaymentOfTransaction4(req: operations.ConfirmPaymentOfTransaction4RequestBody, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ConfirmPaymentOfTransaction4Response>;
    /**
     * confirmPlanting
     */
    confirmsPlanting4(req: operations.ConfirmsPlanting4RequestBody, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ConfirmsPlanting4Response>;
}
