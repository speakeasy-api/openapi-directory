import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class TerminalOrdersCompanyLevel {
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
     * Returns the billing entities of the company identified in the path and all merchant accounts belonging to the company.
     * A billing entity is a legal entity where we charge orders to. An order for terminal products must contain the ID of a billing entity.
     *
     * To make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
     * * Management API—Terminal ordering read
     * * Management API—Terminal ordering read and write
     */
    getCompaniesCompanyIdBillingEntities(req: operations.GetCompaniesCompanyIdBillingEntitiesRequest, security: operations.GetCompaniesCompanyIdBillingEntitiesSecurity, config?: AxiosRequestConfig): Promise<operations.GetCompaniesCompanyIdBillingEntitiesResponse>;
    /**
     * Get a list of shipping locations
     *
     * @remarks
     * Returns the shipping locations for the company identified in the path and all merchant accounts belonging to the company.
     * A shipping location includes the address where orders can be delivered, and an ID which you need to specify when ordering terminal products.
     *
     * To make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
     * * Management API—Terminal ordering read
     * * Management API—Terminal ordering read and write
     */
    getCompaniesCompanyIdShippingLocations(req: operations.GetCompaniesCompanyIdShippingLocationsRequest, security: operations.GetCompaniesCompanyIdShippingLocationsSecurity, config?: AxiosRequestConfig): Promise<operations.GetCompaniesCompanyIdShippingLocationsResponse>;
    /**
     * Get a list of terminal models
     *
     * @remarks
     * Returns a list of payment terminal models that the company identified in the path has access to.
     * The response includes the terminal model ID, which can be used as a query parameter when getting a list of terminals or a list of products for ordering.
     *
     * To make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
     * * Management API—Terminal ordering read
     * * Management API—Terminal ordering read and write
     */
    getCompaniesCompanyIdTerminalModels(req: operations.GetCompaniesCompanyIdTerminalModelsRequest, security: operations.GetCompaniesCompanyIdTerminalModelsSecurity, config?: AxiosRequestConfig): Promise<operations.GetCompaniesCompanyIdTerminalModelsResponse>;
    /**
     * Get a list of orders
     *
     * @remarks
     * Returns a lists of terminal products orders for the company identified in the path.
     * To filter the list, use one or more of the query parameters.
     *
     * To make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
     * * Management API—Terminal ordering read
     * * Management API—Terminal ordering read and write
     */
    getCompaniesCompanyIdTerminalOrders(req: operations.GetCompaniesCompanyIdTerminalOrdersRequest, security: operations.GetCompaniesCompanyIdTerminalOrdersSecurity, config?: AxiosRequestConfig): Promise<operations.GetCompaniesCompanyIdTerminalOrdersResponse>;
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
    getCompaniesCompanyIdTerminalOrdersOrderId(req: operations.GetCompaniesCompanyIdTerminalOrdersOrderIdRequest, security: operations.GetCompaniesCompanyIdTerminalOrdersOrderIdSecurity, config?: AxiosRequestConfig): Promise<operations.GetCompaniesCompanyIdTerminalOrdersOrderIdResponse>;
    /**
     * Get a list of terminal products
     *
     * @remarks
     * Returns a country-specific list of payment terminal packages and parts that the company identified in the path has access to.
     *
     * To make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
     * * Management API—Terminal ordering read
     * * Management API—Terminal ordering read and write
     */
    getCompaniesCompanyIdTerminalProducts(req: operations.GetCompaniesCompanyIdTerminalProductsRequest, security: operations.GetCompaniesCompanyIdTerminalProductsSecurity, config?: AxiosRequestConfig): Promise<operations.GetCompaniesCompanyIdTerminalProductsResponse>;
    /**
     * Update an order
     *
     * @remarks
     * Updates the terminal products order identified in the path.
     * Updating is only possible while the order has the status **Placed**.
     *
     * The request body only needs to contain what you want to change.
     * However, to update the products in the `items` array, you must provide the entire array. For example, if the array has three items:
     *  To remove one item, the array must include the remaining two items. Or to add one item, the array must include all four items.
     *
     * To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
     * * Management API—Terminal ordering read and write
     */
    patchCompaniesCompanyIdTerminalOrdersOrderId(req: operations.PatchCompaniesCompanyIdTerminalOrdersOrderIdRequest, security: operations.PatchCompaniesCompanyIdTerminalOrdersOrderIdSecurity, config?: AxiosRequestConfig): Promise<operations.PatchCompaniesCompanyIdTerminalOrdersOrderIdResponse>;
    /**
     * Create a shipping location
     *
     * @remarks
     * Creates a shipping location for the company identified in the path. A shipping location defines an address where orders can be delivered.
     *
     * To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
     * * Management API—Terminal ordering read and write
     */
    postCompaniesCompanyIdShippingLocations(req: operations.PostCompaniesCompanyIdShippingLocationsRequest, security: operations.PostCompaniesCompanyIdShippingLocationsSecurity, config?: AxiosRequestConfig): Promise<operations.PostCompaniesCompanyIdShippingLocationsResponse>;
    /**
     * Create an order
     *
     * @remarks
     * Creates an order for payment terminal products for the company identified in the path.
     *
     * To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
     * * Management API—Terminal ordering read and write
     */
    postCompaniesCompanyIdTerminalOrders(req: operations.PostCompaniesCompanyIdTerminalOrdersRequest, security: operations.PostCompaniesCompanyIdTerminalOrdersSecurity, config?: AxiosRequestConfig): Promise<operations.PostCompaniesCompanyIdTerminalOrdersResponse>;
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
    postCompaniesCompanyIdTerminalOrdersOrderIdCancel(req: operations.PostCompaniesCompanyIdTerminalOrdersOrderIdCancelRequest, security: operations.PostCompaniesCompanyIdTerminalOrdersOrderIdCancelSecurity, config?: AxiosRequestConfig): Promise<operations.PostCompaniesCompanyIdTerminalOrdersOrderIdCancelResponse>;
}
