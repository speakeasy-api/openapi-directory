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
     * Return all products for the account
     */
    productApiAll(req: operations.ProductApiAllRequest, config?: AxiosRequestConfig): Promise<operations.ProductApiAllResponse>;
    /**
     * Delete an existing product
     */
    productApiDeleteForm(req: operations.ProductApiDeleteFormRequest, config?: AxiosRequestConfig): Promise<operations.ProductApiDeleteFormResponse>;
    /**
     * Delete an existing product
     */
    productApiDeleteJson(req: operations.ProductApiDeleteJsonRequest, config?: AxiosRequestConfig): Promise<operations.ProductApiDeleteJsonResponse>;
    /**
     * Delete an existing product
     */
    productApiDeleteRaw(req: operations.ProductApiDeleteRawRequest, config?: AxiosRequestConfig): Promise<operations.ProductApiDeleteRawResponse>;
    /**
     * Return product details
     */
    productApiDetails(req: operations.ProductApiDetailsRequest, config?: AxiosRequestConfig): Promise<operations.ProductApiDetailsResponse>;
    /**
     * Create a product
     */
    productApiNewForm(req: operations.ProductApiNewFormRequest, config?: AxiosRequestConfig): Promise<operations.ProductApiNewFormResponse>;
    /**
     * Create a product
     */
    productApiNewJson(req: operations.ProductApiNewJsonRequest, config?: AxiosRequestConfig): Promise<operations.ProductApiNewJsonResponse>;
    /**
     * Create a product
     */
    productApiNewRaw(req: operations.ProductApiNewRawRequest, config?: AxiosRequestConfig): Promise<operations.ProductApiNewRawResponse>;
    /**
     * Update an existing product
     */
    productApiUpdateForm(req: operations.ProductApiUpdateFormRequest, config?: AxiosRequestConfig): Promise<operations.ProductApiUpdateFormResponse>;
    /**
     * Update an existing product
     */
    productApiUpdateJson(req: operations.ProductApiUpdateJsonRequest, config?: AxiosRequestConfig): Promise<operations.ProductApiUpdateJsonResponse>;
    /**
     * Update an existing product
     */
    productApiUpdateRaw(req: operations.ProductApiUpdateRawRequest, config?: AxiosRequestConfig): Promise<operations.ProductApiUpdateRawResponse>;
}
