import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Product {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createProduct - Create a product
     *
     * Create a new product. Returns a product object if the create is succeded.
    **/
    createProduct(req: operations.CreateProductRequest, config?: AxiosRequestConfig): Promise<operations.CreateProductResponse>;
    /**
     * deleteProduct - Delete a product
     *
     * Delete an existing product.
    **/
    deleteProduct(req: operations.DeleteProductRequest, config?: AxiosRequestConfig): Promise<operations.DeleteProductResponse>;
    /**
     * getProduct - Retrieve a product
     *
     * Retrieves the details of an existing product.
    **/
    getProduct(req: operations.GetProductRequest, config?: AxiosRequestConfig): Promise<operations.GetProductResponse>;
    /**
     * listProduct - List all product
     *
     * Returns a list of your products. The partners are returned sorted by creation date, with the most recent partners appearing first.
    **/
    listProduct(req: operations.ListProductRequest, config?: AxiosRequestConfig): Promise<operations.ListProductResponse>;
    /**
     * updateProduct - Update a product
     *
     * Update an existing product. Returns a product object if the update is succeded.
    **/
    updateProduct(req: operations.UpdateProductRequest, config?: AxiosRequestConfig): Promise<operations.UpdateProductResponse>;
}
