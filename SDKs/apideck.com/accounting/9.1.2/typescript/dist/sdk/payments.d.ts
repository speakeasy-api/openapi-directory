import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Payments {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create Payment
     *
     * @remarks
     * Create Payment
     */
    paymentsAdd(req: operations.PaymentsAddRequest, security: operations.PaymentsAddSecurity, config?: AxiosRequestConfig): Promise<operations.PaymentsAddResponse>;
    /**
     * List Payments
     *
     * @remarks
     * List Payments
     */
    paymentsAll(req: operations.PaymentsAllRequest, security: operations.PaymentsAllSecurity, config?: AxiosRequestConfig): Promise<operations.PaymentsAllResponse>;
    /**
     * Delete Payment
     *
     * @remarks
     * Delete Payment
     */
    paymentsDelete(req: operations.PaymentsDeleteRequest, security: operations.PaymentsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.PaymentsDeleteResponse>;
    /**
     * Get Payment
     *
     * @remarks
     * Get Payment
     */
    paymentsOne(req: operations.PaymentsOneRequest, security: operations.PaymentsOneSecurity, config?: AxiosRequestConfig): Promise<operations.PaymentsOneResponse>;
    /**
     * Update Payment
     *
     * @remarks
     * Update Payment
     */
    paymentsUpdate(req: operations.PaymentsUpdateRequest, security: operations.PaymentsUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.PaymentsUpdateResponse>;
}
