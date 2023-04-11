import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class CatalogsCatalog {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get the index of the catalog API for this store
     *
     * @remarks
     * The operation will give you all the operations you will be able to do on this store for this API.
     */
    catalogStoreIndex(req: operations.CatalogStoreIndexRequest, config?: AxiosRequestConfig): Promise<operations.CatalogStoreIndexResponse>;
    /**
     * Change Catalog Column User Name
     */
    catalogChangeCatalogColumnUserName(req: operations.CatalogChangeCatalogColumnUserNameRequest, config?: AxiosRequestConfig): Promise<operations.CatalogChangeCatalogColumnUserNameResponse>;
    /**
     * Change custom column expression
     */
    catalogChangeCustomColumnExpression(req: operations.CatalogChangeCustomColumnExpressionRequest, config?: AxiosRequestConfig): Promise<operations.CatalogChangeCustomColumnExpressionResponse>;
    /**
     * Change Custom Column User Name
     */
    catalogChangeCustomColumnUserName(req: operations.CatalogChangeCustomColumnUserNameRequest, config?: AxiosRequestConfig): Promise<operations.CatalogChangeCustomColumnUserNameResponse>;
    /**
     * Compute the expression for this catalog.
     */
    catalogComputeExpression(req: operations.CatalogComputeExpressionRequest, config?: AxiosRequestConfig): Promise<operations.CatalogComputeExpressionResponse>;
    /**
     * Delete custom column
     */
    catalogDeleteCustomColumn(req: operations.CatalogDeleteCustomColumnRequest, config?: AxiosRequestConfig): Promise<operations.CatalogDeleteCustomColumnResponse>;
    /**
     * Get catalog column list
     */
    catalogGetCatalogColumns(req: operations.CatalogGetCatalogColumnsRequest, config?: AxiosRequestConfig): Promise<operations.CatalogGetCatalogColumnsResponse>;
    /**
     * Get category list
     */
    catalogGetCategories(req: operations.CatalogGetCategoriesRequest, config?: AxiosRequestConfig): Promise<operations.CatalogGetCategoriesResponse>;
    /**
     * Get the encrypted custom column expression
     */
    catalogGetCustomColumnExpression(req: operations.CatalogGetCustomColumnExpressionRequest, config?: AxiosRequestConfig): Promise<operations.CatalogGetCustomColumnExpressionResponse>;
    /**
     * Get custom column list
     */
    catalogGetCustomColumns(req: operations.CatalogGetCustomColumnsRequest, config?: AxiosRequestConfig): Promise<operations.CatalogGetCustomColumnsResponse>;
    /**
     * Get product by ProductId
     */
    catalogGetProductByProductId(req: operations.CatalogGetProductByProductIdRequest, config?: AxiosRequestConfig): Promise<operations.CatalogGetProductByProductIdResponse>;
    /**
     * Get product by Sku
     */
    catalogGetProductBySku(req: operations.CatalogGetProductBySkuRequest, config?: AxiosRequestConfig): Promise<operations.CatalogGetProductBySkuResponse>;
    /**
     * Get product list
     */
    catalogGetProducts(req: operations.CatalogGetProductsRequest, config?: AxiosRequestConfig): Promise<operations.CatalogGetProductsResponse>;
    /**
     * Get random product list
     *
     * @remarks
     * We will return 10 products randomly selected with all product values
     */
    catalogGetRandomProducts(req: operations.CatalogGetRandomProductsRequest, config?: AxiosRequestConfig): Promise<operations.CatalogGetRandomProductsResponse>;
    /**
     * Create or replace a custom column
     */
    catalogSaveCustomColumn(req: operations.CatalogSaveCustomColumnRequest, config?: AxiosRequestConfig): Promise<operations.CatalogSaveCustomColumnResponse>;
    /**
     * Get the last input configuration
     */
    importationGetManualUpdateLastInputConfig(req: operations.ImportationGetManualUpdateLastInputConfigRequest, config?: AxiosRequestConfig): Promise<operations.ImportationGetManualUpdateLastInputConfigResponse>;
}
