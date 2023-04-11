import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Products {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List Products
     *
     * @remarks
     * List Products
     */
    productsAll(req: operations.ProductsAllRequest, security: operations.ProductsAllSecurity, config?: AxiosRequestConfig): Promise<operations.ProductsAllResponse>;
    /**
     * Get Product
     *
     * @remarks
     * Get Product
     */
    productsOne(req: operations.ProductsOneRequest, security: operations.ProductsOneSecurity, config?: AxiosRequestConfig): Promise<operations.ProductsOneResponse>;
}
