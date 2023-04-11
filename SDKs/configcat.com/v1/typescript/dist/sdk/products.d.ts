import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * With these endpoints you can manage your Products.
 *
 * @remarks
 * This also can be used to manage [Environments](#tag/Environments), [Configs](#tag/Configs), [Tags](#tag/Tags) and [Permission Groups](#tag/Permission-Groups) through this API.
 *
 * <a href="https://configcat.com/docs/main-concepts/#product" target="_blank" rel="noopener noreferrer">Here</a> you can read more about the concept of Products.
 */
export declare class Products {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create Product
     *
     * @remarks
     * This endpoint creates a new Product in a specified Organization
     * identified by the `organizationId` parameter, which can be obtained from the [List Organizations](#operation/get-organizations) endpoint.
     */
    createProduct(req: operations.CreateProductRequest, config?: AxiosRequestConfig): Promise<operations.CreateProductResponse>;
    /**
     * Delete Product
     *
     * @remarks
     * This endpoint removes a Product identified by the `productId` parameter.
     */
    deleteProduct(req: operations.DeleteProductRequest, config?: AxiosRequestConfig): Promise<operations.DeleteProductResponse>;
    /**
     * Get Product
     *
     * @remarks
     * This endpoint returns the metadata of a Product
     * identified by the `productId`.
     */
    getProduct(req: operations.GetProductRequest, config?: AxiosRequestConfig): Promise<operations.GetProductResponse>;
    /**
     * List Products
     *
     * @remarks
     * This endpoint returns the list of the Products that belongs to the user.
     */
    getProducts(config?: AxiosRequestConfig): Promise<operations.GetProductsResponse>;
    /**
     * Update Product
     *
     * @remarks
     * This endpoint updates a Product identified by the `productId` parameter.
     */
    updateProduct(req: operations.UpdateProductRequest, config?: AxiosRequestConfig): Promise<operations.UpdateProductResponse>;
}
