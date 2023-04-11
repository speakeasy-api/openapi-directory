import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Product Search, Order and Retrieve methods
 */
export declare class V1Product {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Retrieves a document availability result
     *
     * @remarks
     * Check availability and valid options for a particular product for a particular company identfied by its id
     */
    productAvailability(req: operations.ProductAvailabilityRequest, security: operations.ProductAvailabilitySecurity, config?: AxiosRequestConfig): Promise<operations.ProductAvailabilityResponse>;
    /**
     * Returns a catalog of products
     *
     * @remarks
     * Returns a catalog of purchasable products available with some metadata for a particular country
     */
    productCatalog(req: operations.ProductCatalogRequest, security: operations.ProductCatalogSecurity, config?: AxiosRequestConfig): Promise<operations.ProductCatalogResponse>;
    /**
     * Returns metadata for a notifier
     *
     * @remarks
     * Queries and returns all metadata associated with a notifier identified by its notifer id
     */
    productNotifier(req: operations.ProductNotifierRequest, security: operations.ProductNotifierSecurity, config?: AxiosRequestConfig): Promise<operations.ProductNotifierResponse>;
    /**
     * Creates a notifier for an order
     *
     * @remarks
     * Create a notifier for a particular order. Parameters can be supplied in the path
     */
    productNotifierCreate(req: operations.ProductNotifierCreateRequest, security: operations.ProductNotifierCreateSecurity, config?: AxiosRequestConfig): Promise<operations.ProductNotifierCreateResponse>;
    /**
     * Places a product order
     *
     * @remarks
     * Place an order for a particular product identified by its SKU for a particular company identified by its id
     */
    productOrder(req: operations.ProductOrderRequest, security: operations.ProductOrderSecurity, config?: AxiosRequestConfig): Promise<operations.ProductOrderResponse>;
    /**
     * Places a concierge order
     *
     * @remarks
     * Place an order for a concierge product
     */
    productOrderConcierge(req: operations.ProductOrderConciergeRequestBody, security: operations.ProductOrderConciergeSecurity, config?: AxiosRequestConfig): Promise<operations.ProductOrderConciergeResponse>;
    /**
     * Places a UBO order
     *
     * @remarks
     * Place an order for a UBO (ultimate beneficial owner) discovery report
     */
    productOrderUbo(req: operations.ProductOrderUboRequestBody, security: operations.ProductOrderUboSecurity, config?: AxiosRequestConfig): Promise<operations.ProductOrderUboResponse>;
    /**
     * Places a product order
     *
     * @remarks
     * Place an order for a particular product identified by its SKU with a particular option for a particular company identified by its id
     */
    productOrderWithOption(req: operations.ProductOrderWithOptionRequest, security: operations.ProductOrderWithOptionSecurity, config?: AxiosRequestConfig): Promise<operations.ProductOrderWithOptionResponse>;
    /**
     * Retrieves the result of an order
     *
     * @remarks
     * Retrieves the document or structured data associated with a completed order identified with its order id
     */
    productRetrieve(req: operations.ProductRetrieveRequest, security: operations.ProductRetrieveSecurity, config?: AxiosRequestConfig): Promise<operations.ProductRetrieveResponse>;
    /**
     * Returns a list of products
     *
     * @remarks
     * Search for possible products for a particular company identified by its id
     */
    productSearch(req: operations.ProductSearchRequest, security: operations.ProductSearchSecurity, config?: AxiosRequestConfig): Promise<operations.ProductSearchResponse>;
    /**
     * Returns metadata for a order
     *
     * @remarks
     * Retrieve the current status of an order identified by its order id
     */
    productStatus(req: operations.ProductStatusRequest, security: operations.ProductStatusSecurity, config?: AxiosRequestConfig): Promise<operations.ProductStatusResponse>;
    /**
     * Updates metadata of an order
     *
     * @remarks
     * Update an existing order identified by its order id
     */
    productUpdateAction(req: operations.ProductUpdateActionRequest, security: operations.ProductUpdateActionSecurity, config?: AxiosRequestConfig): Promise<operations.ProductUpdateActionResponse>;
}
