import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Billing Details Rest V 2 Controller
 */
export declare class BillingDetails {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Retrieves the Billing Details
     *
     * @remarks
     * Retrieves the Billing Details.
     */
    getBillingDetails(req: operations.GetBillingDetailsRequest, config?: AxiosRequestConfig): Promise<operations.GetBillingDetailsResponse>;
    /**
     * Updates the Billing Details
     *
     * @remarks
     * Updates the Billing Details.
     */
    putBillingDetails(req: operations.PutBillingDetailsRequest, config?: AxiosRequestConfig): Promise<operations.PutBillingDetailsResponse>;
}
