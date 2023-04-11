import * as operations from "./models/operations";
import * as shared from "./models/shared";
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
     * Removes an existing Product.
     */
    productsDelete(req: operations.ProductsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.ProductsDeleteResponse>;
    /**
     * Returns a list of company's Products. Supports OData querying protocol.
     * Filtering is forbidden.
     * Ordering is allowed by "id" and "stockCode" fields.
     */
    productsGet(config?: AxiosRequestConfig): Promise<operations.ProductsGetResponse>;
    /**
     * Creates a new Product.
     */
    productsPost(req: shared.ProductDto, config?: AxiosRequestConfig): Promise<operations.ProductsPostResponse>;
    /**
     * Processes a batch of Products.
     */
    productsProcessBatch(req: shared.BatchItemProductDto[], config?: AxiosRequestConfig): Promise<operations.ProductsProcessBatchResponse>;
    /**
     * Updates an existing Product.
     */
    productsPut(req: operations.ProductsPutRequest, config?: AxiosRequestConfig): Promise<operations.ProductsPutResponse>;
    /**
     * Returns information about a single Product.
     */
    getV1ProductsId(req: operations.GetV1ProductsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetV1ProductsIdResponse>;
}
