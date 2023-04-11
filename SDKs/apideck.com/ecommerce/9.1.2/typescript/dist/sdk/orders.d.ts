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
     * List Orders
     *
     * @remarks
     * List Orders
     */
    ordersAll(req: operations.OrdersAllRequest, security: operations.OrdersAllSecurity, config?: AxiosRequestConfig): Promise<operations.OrdersAllResponse>;
    /**
     * Get Order
     *
     * @remarks
     * Get Order
     */
    ordersOne(req: operations.OrdersOneRequest, security: operations.OrdersOneSecurity, config?: AxiosRequestConfig): Promise<operations.OrdersOneResponse>;
}
