import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Product object represents your document's product.
 */
export declare class Product {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create a product
     *
     * @remarks
     * Create a new product. Returns a product object if the create is succeded.
     */
    createProduct(req: shared.ProductInput, config?: AxiosRequestConfig): Promise<operations.CreateProductResponse>;
    /**
     * Delete a product
     *
     * @remarks
     * Delete an existing product.
     */
    deleteProduct(req: operations.DeleteProductRequest, config?: AxiosRequestConfig): Promise<operations.DeleteProductResponse>;
    /**
     * Retrieve a product
     *
     * @remarks
     * Retrieves the details of an existing product.
     */
    getProduct(req: operations.GetProductRequest, config?: AxiosRequestConfig): Promise<operations.GetProductResponse>;
    /**
     * List all product
     *
     * @remarks
     * Returns a list of your products. The partners are returned sorted by creation date, with the most recent partners appearing first.
     */
    listProduct(req: operations.ListProductRequest, config?: AxiosRequestConfig): Promise<operations.ListProductResponse>;
    /**
     * Update a product
     *
     * @remarks
     * Update an existing product. Returns a product object if the update is succeded.
     */
    updateProduct(req: operations.UpdateProductRequest, config?: AxiosRequestConfig): Promise<operations.UpdateProductResponse>;
}
