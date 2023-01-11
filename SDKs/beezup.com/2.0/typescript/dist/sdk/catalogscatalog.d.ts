import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class CatalogsCatalog {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * catalogStoreIndex - Get the index of the catalog API for this store
     *
     * The operation will give you all the operations you will be able to do on this store for this API.
    **/
    catalogStoreIndex(req: operations.CatalogStoreIndexRequest, config?: AxiosRequestConfig): Promise<operations.CatalogStoreIndexResponse>;
    /**
     * catalogChangeCatalogColumnUserName - Change Catalog Column User Name
    **/
    catalogChangeCatalogColumnUserName(req: operations.CatalogChangeCatalogColumnUserNameRequest, config?: AxiosRequestConfig): Promise<operations.CatalogChangeCatalogColumnUserNameResponse>;
    /**
     * catalogChangeCustomColumnExpression - Change custom column expression
    **/
    catalogChangeCustomColumnExpression(req: operations.CatalogChangeCustomColumnExpressionRequest, config?: AxiosRequestConfig): Promise<operations.CatalogChangeCustomColumnExpressionResponse>;
    /**
     * catalogChangeCustomColumnUserName - Change Custom Column User Name
    **/
    catalogChangeCustomColumnUserName(req: operations.CatalogChangeCustomColumnUserNameRequest, config?: AxiosRequestConfig): Promise<operations.CatalogChangeCustomColumnUserNameResponse>;
    /**
     * catalogComputeExpression - Compute the expression for this catalog.
    **/
    catalogComputeExpression(req: operations.CatalogComputeExpressionRequest, config?: AxiosRequestConfig): Promise<operations.CatalogComputeExpressionResponse>;
    /**
     * catalogDeleteCustomColumn - Delete custom column
    **/
    catalogDeleteCustomColumn(req: operations.CatalogDeleteCustomColumnRequest, config?: AxiosRequestConfig): Promise<operations.CatalogDeleteCustomColumnResponse>;
    /**
     * catalogGetCatalogColumns - Get catalog column list
    **/
    catalogGetCatalogColumns(req: operations.CatalogGetCatalogColumnsRequest, config?: AxiosRequestConfig): Promise<operations.CatalogGetCatalogColumnsResponse>;
    /**
     * catalogGetCategories - Get category list
    **/
    catalogGetCategories(req: operations.CatalogGetCategoriesRequest, config?: AxiosRequestConfig): Promise<operations.CatalogGetCategoriesResponse>;
    /**
     * catalogGetCustomColumnExpression - Get the encrypted custom column expression
    **/
    catalogGetCustomColumnExpression(req: operations.CatalogGetCustomColumnExpressionRequest, config?: AxiosRequestConfig): Promise<operations.CatalogGetCustomColumnExpressionResponse>;
    /**
     * catalogGetCustomColumns - Get custom column list
    **/
    catalogGetCustomColumns(req: operations.CatalogGetCustomColumnsRequest, config?: AxiosRequestConfig): Promise<operations.CatalogGetCustomColumnsResponse>;
    /**
     * catalogGetProductByProductId - Get product by ProductId
    **/
    catalogGetProductByProductId(req: operations.CatalogGetProductByProductIdRequest, config?: AxiosRequestConfig): Promise<operations.CatalogGetProductByProductIdResponse>;
    /**
     * catalogGetProductBySku - Get product by Sku
    **/
    catalogGetProductBySku(req: operations.CatalogGetProductBySkuRequest, config?: AxiosRequestConfig): Promise<operations.CatalogGetProductBySkuResponse>;
    /**
     * catalogGetProducts - Get product list
    **/
    catalogGetProducts(req: operations.CatalogGetProductsRequest, config?: AxiosRequestConfig): Promise<operations.CatalogGetProductsResponse>;
    /**
     * catalogGetRandomProducts - Get random product list
     *
     * We will return 10 products randomly selected with all product values
    **/
    catalogGetRandomProducts(req: operations.CatalogGetRandomProductsRequest, config?: AxiosRequestConfig): Promise<operations.CatalogGetRandomProductsResponse>;
    /**
     * catalogSaveCustomColumn - Create or replace a custom column
    **/
    catalogSaveCustomColumn(req: operations.CatalogSaveCustomColumnRequest, config?: AxiosRequestConfig): Promise<operations.CatalogSaveCustomColumnResponse>;
    /**
     * importationGetManualUpdateLastInputConfig - Get the last input configuration
    **/
    importationGetManualUpdateLastInputConfig(req: operations.ImportationGetManualUpdateLastInputConfigRequest, config?: AxiosRequestConfig): Promise<operations.ImportationGetManualUpdateLastInputConfigResponse>;
}
