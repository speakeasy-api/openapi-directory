import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class TerminalOrdersMerchantLevel {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get a list of billing entities
     *
     * @remarks
     * Returns the billing entities of the merchant account identified in the path.
     * A billing entity is a legal entity where we charge orders to. An order for terminal products must contain the ID of a billing entity.
     *
     * To make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
     * * Management API—Terminal ordering read
     * * Management API—Terminal ordering read and write
     */
    getMerchantsMerchantIdBillingEntities(req: operations.GetMerchantsMerchantIdBillingEntitiesRequest, security: operations.GetMerchantsMerchantIdBillingEntitiesSecurity, config?: AxiosRequestConfig): Promise<operations.GetMerchantsMerchantIdBillingEntitiesResponse>;
    /**
     * Get a list of shipping locations
     *
     * @remarks
     * Returns the shipping locations for the merchant account identified in the path.
     * A shipping location includes the address where orders can be delivered, and an ID which you need to specify when ordering terminal products.
     *
     * To make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
     * * Management API—Terminal ordering read
     * * Management API—Terminal ordering read and write
     */
    getMerchantsMerchantIdShippingLocations(req: operations.GetMerchantsMerchantIdShippingLocationsRequest, security: operations.GetMerchantsMerchantIdShippingLocationsSecurity, config?: AxiosRequestConfig): Promise<operations.GetMerchantsMerchantIdShippingLocationsResponse>;
    /**
     * Get a list of terminal models
     *
     * @remarks
     * Returns the payment terminal models that merchant account identified in the path has access to. The response includes the terminal model ID, which can be used as a query parameter when getting a list of terminals or a list of products for ordering.
     *
     * To make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
     * * Management API—Terminal ordering read
     * * Management API—Terminal ordering read and write
     */
    getMerchantsMerchantIdTerminalModels(req: operations.GetMerchantsMerchantIdTerminalModelsRequest, security: operations.GetMerchantsMerchantIdTerminalModelsSecurity, config?: AxiosRequestConfig): Promise<operations.GetMerchantsMerchantIdTerminalModelsResponse>;
    /**
     * Get a list of orders
     *
     * @remarks
     * Returns a list of terminal products orders for the merchant account identified in the path.
     *
     * To make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
     * * Management API—Terminal ordering read
     * * Management API—Terminal ordering read and write
     */
    getMerchantsMerchantIdTerminalOrders(req: operations.GetMerchantsMerchantIdTerminalOrdersRequest, security: operations.GetMerchantsMerchantIdTerminalOrdersSecurity, config?: AxiosRequestConfig): Promise<operations.GetMerchantsMerchantIdTerminalOrdersResponse>;
    /**
     * Get an order
     *
     * @remarks
     * Returns the details of the terminal products order identified in the path.
     *
     * To make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
     * * Management API—Terminal ordering read
     * * Management API—Terminal ordering read and write
     */
    getMerchantsMerchantIdTerminalOrdersOrderId(req: operations.GetMerchantsMerchantIdTerminalOrdersOrderIdRequest, security: operations.GetMerchantsMerchantIdTerminalOrdersOrderIdSecurity, config?: AxiosRequestConfig): Promise<operations.GetMerchantsMerchantIdTerminalOrdersOrderIdResponse>;
    /**
     * Get a list of terminal products
     *
     * @remarks
     * Returns a country-specific list of payment terminal packages and parts that the merchant account identified in the path has access to.
     *
     * To make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
     * * Management API—Terminal ordering read
     * * Management API—Terminal ordering read and write
     */
    getMerchantsMerchantIdTerminalProducts(req: operations.GetMerchantsMerchantIdTerminalProductsRequest, security: operations.GetMerchantsMerchantIdTerminalProductsSecurity, config?: AxiosRequestConfig): Promise<operations.GetMerchantsMerchantIdTerminalProductsResponse>;
    /**
     * Update an order
     *
     * @remarks
     * Updates the terminal products order identified in the path.
     * Updating is only possible while the order has the status **Placed**.
     *
     * The request body only needs to contain what you want to change.
     * However, to update the products in the `items` array, you must provice the entire array. For example, if the array has three items:
     *  To remove one item, the array must include the remaining two items. Or to add one item, the array must include all four items.
     *
     * To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
     * * Management API—Terminal ordering read and write
     */
    patchMerchantsMerchantIdTerminalOrdersOrderId(req: operations.PatchMerchantsMerchantIdTerminalOrdersOrderIdRequest, security: operations.PatchMerchantsMerchantIdTerminalOrdersOrderIdSecurity, config?: AxiosRequestConfig): Promise<operations.PatchMerchantsMerchantIdTerminalOrdersOrderIdResponse>;
    /**
     * Create a shipping location
     *
     * @remarks
     * Creates a shipping location for the merchant account identified in the path. A shipping location defines an address where orders can be shipped to.
     *
     * To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
     * * Management API—Terminal ordering read and write
     */
    postMerchantsMerchantIdShippingLocations(req: operations.PostMerchantsMerchantIdShippingLocationsRequest, security: operations.PostMerchantsMerchantIdShippingLocationsSecurity, config?: AxiosRequestConfig): Promise<operations.PostMerchantsMerchantIdShippingLocationsResponse>;
    /**
     * Create an order
     *
     * @remarks
     * Creates an order for payment terminal products for the merchant account identified in the path.
     *
     * To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
     * * Management API—Terminal ordering read and write
     */
    postMerchantsMerchantIdTerminalOrders(req: operations.PostMerchantsMerchantIdTerminalOrdersRequest, security: operations.PostMerchantsMerchantIdTerminalOrdersSecurity, config?: AxiosRequestConfig): Promise<operations.PostMerchantsMerchantIdTerminalOrdersResponse>;
    /**
     * Cancel an order
     *
     * @remarks
     * Cancels the terminal products order identified in the path.
     * Cancelling is only possible while the order has the status **Placed**.
     * To cancel an order, make a POST call without a request body. The response returns the full order details, but with the status changed to **Cancelled**.
     *
     * To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
     * * Management API—Terminal ordering read and write
     */
    postMerchantsMerchantIdTerminalOrdersOrderIdCancel(req: operations.PostMerchantsMerchantIdTerminalOrdersOrderIdCancelRequest, security: operations.PostMerchantsMerchantIdTerminalOrdersOrderIdCancelSecurity, config?: AxiosRequestConfig): Promise<operations.PostMerchantsMerchantIdTerminalOrdersOrderIdCancelResponse>;
}
