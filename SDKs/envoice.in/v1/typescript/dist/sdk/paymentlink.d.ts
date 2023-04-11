import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class PaymentLink {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create a payment link
     */
    paymentLinkApiAll(req: operations.PaymentLinkApiAllRequest, config?: AxiosRequestConfig): Promise<operations.PaymentLinkApiAllResponse>;
    /**
     * Delete an existing payment link
     */
    paymentLinkApiDeleteForm(req: operations.PaymentLinkApiDeleteFormRequest, config?: AxiosRequestConfig): Promise<operations.PaymentLinkApiDeleteFormResponse>;
    /**
     * Delete an existing payment link
     */
    paymentLinkApiDeleteJson(req: operations.PaymentLinkApiDeleteJsonRequest, config?: AxiosRequestConfig): Promise<operations.PaymentLinkApiDeleteJsonResponse>;
    /**
     * Delete an existing payment link
     */
    paymentLinkApiDeleteRaw(req: operations.PaymentLinkApiDeleteRawRequest, config?: AxiosRequestConfig): Promise<operations.PaymentLinkApiDeleteRawResponse>;
    /**
     * Create a payment link
     */
    paymentLinkApiNewForm(req: operations.PaymentLinkApiNewFormRequest, config?: AxiosRequestConfig): Promise<operations.PaymentLinkApiNewFormResponse>;
    /**
     * Create a payment link
     */
    paymentLinkApiNewJson(req: operations.PaymentLinkApiNewJsonRequest, config?: AxiosRequestConfig): Promise<operations.PaymentLinkApiNewJsonResponse>;
    /**
     * Create a payment link
     */
    paymentLinkApiNewRaw(req: operations.PaymentLinkApiNewRawRequest, config?: AxiosRequestConfig): Promise<operations.PaymentLinkApiNewRawResponse>;
    /**
     * Return the unique url to the client's payment link
     */
    paymentLinkApiUri(req: operations.PaymentLinkApiUriRequest, config?: AxiosRequestConfig): Promise<operations.PaymentLinkApiUriResponse>;
}
