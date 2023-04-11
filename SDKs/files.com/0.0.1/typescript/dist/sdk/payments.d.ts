import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Operations about payments
 */
export declare class Payments {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List Payments
     *
     * @remarks
     * List Payments
     */
    getPayments(req: operations.GetPaymentsRequest, config?: AxiosRequestConfig): Promise<operations.GetPaymentsResponse>;
    /**
     * Show Payment
     *
     * @remarks
     * Show Payment
     */
    getPaymentsId(req: operations.GetPaymentsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetPaymentsIdResponse>;
}
