import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Creating, viewing, and canceling orders.
 */
export declare class Orders {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Cancel an Order
     *
     * @remarks
     * Request an order is canceled to prevent shipment.
     */
    deleteOrdersId(req: operations.DeleteOrdersIdRequest, security: operations.DeleteOrdersIdSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteOrdersIdResponse>;
    /**
     * List of Orders
     *
     * @remarks
     * Retrieve many orders at once
     */
    getOrders(req: operations.GetOrdersRequest, security: operations.GetOrdersSecurity, config?: AxiosRequestConfig): Promise<operations.GetOrdersResponse>;
    /**
     * Order Details
     *
     * @remarks
     * For the fastest results use the FDC provided `id` however you can use your `merchantOrderId` as the `id`.
     */
    getOrder(req: operations.GetOrderRequest, security: operations.GetOrderSecurity, config?: AxiosRequestConfig): Promise<operations.GetOrderResponse>;
    /**
     * New Order
     *
     * @remarks
     * Error Notes&#58;
     * * When `409 Conflict` is a 'Duplicate Order' the `context` will include the FDC `id`, see samples.
     *
     */
    postOrders(req: operations.PostOrdersOrderRequestV2, security: operations.PostOrdersSecurity, config?: AxiosRequestConfig): Promise<operations.PostOrdersResponse>;
}
