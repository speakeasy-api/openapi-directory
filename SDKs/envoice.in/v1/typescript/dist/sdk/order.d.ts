import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Order {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Return all orders for the account
     */
    orderApiAll(req: operations.OrderApiAllRequest, config?: AxiosRequestConfig): Promise<operations.OrderApiAllResponse>;
    /**
     * Change order shipping details
     */
    orderApiChangeShippingDetailsForm(req: operations.OrderApiChangeShippingDetailsFormRequest, config?: AxiosRequestConfig): Promise<operations.OrderApiChangeShippingDetailsFormResponse>;
    /**
     * Change order shipping details
     */
    orderApiChangeShippingDetailsJson(req: operations.OrderApiChangeShippingDetailsJsonRequest, config?: AxiosRequestConfig): Promise<operations.OrderApiChangeShippingDetailsJsonResponse>;
    /**
     * Change order shipping details
     */
    orderApiChangeShippingDetailsRaw(req: operations.OrderApiChangeShippingDetailsRawRequest, config?: AxiosRequestConfig): Promise<operations.OrderApiChangeShippingDetailsRawResponse>;
    /**
     * Change order status
     */
    orderApiChangeStatusForm(req: operations.OrderApiChangeStatusFormRequest, config?: AxiosRequestConfig): Promise<operations.OrderApiChangeStatusFormResponse>;
    /**
     * Change order status
     */
    orderApiChangeStatusJson(req: operations.OrderApiChangeStatusJsonRequest, config?: AxiosRequestConfig): Promise<operations.OrderApiChangeStatusJsonResponse>;
    /**
     * Change order status
     */
    orderApiChangeStatusRaw(req: operations.OrderApiChangeStatusRawRequest, config?: AxiosRequestConfig): Promise<operations.OrderApiChangeStatusRawResponse>;
    /**
     * Delete an existing order
     */
    orderApiDeleteForm(req: operations.OrderApiDeleteFormRequest, config?: AxiosRequestConfig): Promise<operations.OrderApiDeleteFormResponse>;
    /**
     * Delete an existing order
     */
    orderApiDeleteJson(req: operations.OrderApiDeleteJsonRequest, config?: AxiosRequestConfig): Promise<operations.OrderApiDeleteJsonResponse>;
    /**
     * Delete an existing order
     */
    orderApiDeleteRaw(req: operations.OrderApiDeleteRawRequest, config?: AxiosRequestConfig): Promise<operations.OrderApiDeleteRawResponse>;
    /**
     * Return order details
     */
    orderApiDetails(req: operations.OrderApiDetailsRequest, config?: AxiosRequestConfig): Promise<operations.OrderApiDetailsResponse>;
    /**
     * Create an order
     */
    orderApiNewForm(req: operations.OrderApiNewFormRequest, config?: AxiosRequestConfig): Promise<operations.OrderApiNewFormResponse>;
    /**
     * Create an order
     */
    orderApiNewJson(req: operations.OrderApiNewJsonRequest, config?: AxiosRequestConfig): Promise<operations.OrderApiNewJsonResponse>;
    /**
     * Create an order
     */
    orderApiNewRaw(req: operations.OrderApiNewRawRequest, config?: AxiosRequestConfig): Promise<operations.OrderApiNewRawResponse>;
}
