import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Product {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List product listings
     *
     * @remarks
     * List product listings
     */
    productListingsAll(req: operations.ProductListingsAllRequest, config?: AxiosRequestConfig): Promise<operations.ProductListingsAllResponse>;
    /**
     * List products
     *
     * @remarks
     * List products
     */
    productsAll(req: operations.ProductsAllRequest, config?: AxiosRequestConfig): Promise<operations.ProductsAllResponse>;
    /**
     * Get product
     *
     * @remarks
     * Get product
     */
    productsOne(req: operations.ProductsOneRequest, config?: AxiosRequestConfig): Promise<operations.ProductsOneResponse>;
}
