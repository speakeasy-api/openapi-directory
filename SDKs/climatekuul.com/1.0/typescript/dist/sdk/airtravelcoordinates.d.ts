import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class AirtravelCoordinates {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * airtravelCoordinates - airtravelCoordinates
    **/
    airtravelCoordinates(req: operations.AirtravelCoordinatesRequest, config?: AxiosRequestConfig): Promise<operations.AirtravelCoordinatesResponse>;
    /**
     * confirmCarbonOffset4 - confirmCarbonOffset
    **/
    confirmCarbonOffset4(req: operations.ConfirmCarbonOffset4Request, config?: AxiosRequestConfig): Promise<operations.ConfirmCarbonOffset4Response>;
    /**
     * confirmPayment4 - confirmPayment
    **/
    confirmPayment4(req: operations.ConfirmPayment4Request, config?: AxiosRequestConfig): Promise<operations.ConfirmPayment4Response>;
    /**
     * confirmPaymentOfTransaction4 - confirmTransaction
    **/
    confirmPaymentOfTransaction4(req: operations.ConfirmPaymentOfTransaction4Request, config?: AxiosRequestConfig): Promise<operations.ConfirmPaymentOfTransaction4Response>;
    /**
     * confirmsPlanting4 - confirmPlanting
    **/
    confirmsPlanting4(req: operations.ConfirmsPlanting4Request, config?: AxiosRequestConfig): Promise<operations.ConfirmsPlanting4Response>;
}
