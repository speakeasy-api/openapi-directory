import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Products {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createProduct - Create Product
     *
     * This endpoint creates a new Product in a specified Organization
     * identified by the `organizationId` parameter, which can be obtained from the [List Organizations](#operation/get-organizations) endpoint.
    **/
    createProduct(req: operations.CreateProductRequest, config?: AxiosRequestConfig): Promise<operations.CreateProductResponse>;
    /**
     * deleteProduct - Delete Product
     *
     * This endpoint removes a Product identified by the `productId` parameter.
    **/
    deleteProduct(req: operations.DeleteProductRequest, config?: AxiosRequestConfig): Promise<operations.DeleteProductResponse>;
    /**
     * getProduct - Get Product
     *
     * This endpoint returns the metadata of a Product
     * identified by the `productId`.
    **/
    getProduct(req: operations.GetProductRequest, config?: AxiosRequestConfig): Promise<operations.GetProductResponse>;
    /**
     * getProducts - List Products
     *
     * This endpoint returns the list of the Products that belongs to the user.
    **/
    getProducts(config?: AxiosRequestConfig): Promise<operations.GetProductsResponse>;
    /**
     * updateProduct - Update Product
     *
     * This endpoint updates a Product identified by the `productId` parameter.
    **/
    updateProduct(req: operations.UpdateProductRequest, config?: AxiosRequestConfig): Promise<operations.UpdateProductResponse>;
}
