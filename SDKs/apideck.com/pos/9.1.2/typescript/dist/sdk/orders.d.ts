import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Orders {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create Order
     *
     * @remarks
     * Create Order
     */
    ordersAdd(req: operations.OrdersAddRequest, security: operations.OrdersAddSecurity, config?: AxiosRequestConfig): Promise<operations.OrdersAddResponse>;
    /**
     * List Orders
     *
     * @remarks
     * List Orders
     */
    ordersAll(req: operations.OrdersAllRequest, security: operations.OrdersAllSecurity, config?: AxiosRequestConfig): Promise<operations.OrdersAllResponse>;
    /**
     * Delete Order
     *
     * @remarks
     * Delete Order
     */
    ordersDelete(req: operations.OrdersDeleteRequest, security: operations.OrdersDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.OrdersDeleteResponse>;
    /**
     * Get Order
     *
     * @remarks
     * Get Order
     */
    ordersOne(req: operations.OrdersOneRequest, security: operations.OrdersOneSecurity, config?: AxiosRequestConfig): Promise<operations.OrdersOneResponse>;
    /**
     * Pay Order
     *
     * @remarks
     * Pay Order
     */
    ordersPay(req: operations.OrdersPayRequest, security: operations.OrdersPaySecurity, config?: AxiosRequestConfig): Promise<operations.OrdersPayResponse>;
    /**
     * Update Order
     *
     * @remarks
     * Updates an open order by adding, replacing, or deleting fields. Square-only: Orders with a `completed` or `canceled` status cannot be updated. To pay for an order, use the [payments endpoint](#tag/Payments).
     *
     */
    ordersUpdate(req: operations.OrdersUpdateRequest, security: operations.OrdersUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.OrdersUpdateResponse>;
}
