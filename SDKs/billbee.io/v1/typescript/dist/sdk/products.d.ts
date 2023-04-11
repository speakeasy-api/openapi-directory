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
     * Creates a new product
     */
    articleCreateArticle(req: shared.BillbeeInterfacesBillbeeAPIModelArticleAPIModelInput, config?: AxiosRequestConfig): Promise<operations.ArticleCreateArticleResponse>;
    /**
     * Deletes a product
     */
    articleDeleteArticle(req: operations.ArticleDeleteArticleRequest, config?: AxiosRequestConfig): Promise<operations.ArticleDeleteArticleResponse>;
    /**
     * Deletes a single image by id
     */
    articleDeleteImage(req: operations.ArticleDeleteImageRequest, config?: AxiosRequestConfig): Promise<operations.ArticleDeleteImageResponse>;
    /**
     * Deletes a single image from a product
     */
    articleDeleteImageFromProduct(req: operations.ArticleDeleteImageFromProductRequest, config?: AxiosRequestConfig): Promise<operations.ArticleDeleteImageFromProductResponse>;
    /**
     * Queries a single article by id or by sku
     */
    articleGetArticle(req: operations.ArticleGetArticleRequest, config?: AxiosRequestConfig): Promise<operations.ArticleGetArticleResponse>;
    /**
     * GEts a list of all defined categories
     */
    articleGetCategory(config?: AxiosRequestConfig): Promise<operations.ArticleGetCategoryResponse>;
    /**
     * Queries a single custom field
     */
    articleGetCustomField(req: operations.ArticleGetCustomFieldRequest, config?: AxiosRequestConfig): Promise<operations.ArticleGetCustomFieldResponse>;
    /**
     * Queries a list of all custom fields
     */
    articleGetCustomFields(req: operations.ArticleGetCustomFieldsRequest, config?: AxiosRequestConfig): Promise<operations.ArticleGetCustomFieldsResponse>;
    /**
     * Returns a single image by id
     */
    articleGetImage(req: operations.ArticleGetImageRequest, config?: AxiosRequestConfig): Promise<operations.ArticleGetImageResponse>;
    /**
     * Returns a single image by id
     */
    articleGetImageFromProduct(req: operations.ArticleGetImageFromProductRequest, config?: AxiosRequestConfig): Promise<operations.ArticleGetImageFromProductResponse>;
    /**
     * Returns a list of all images of the product
     */
    articleGetImages(req: operations.ArticleGetImagesRequest, config?: AxiosRequestConfig): Promise<operations.ArticleGetImagesResponse>;
    /**
     * Get a list of all products
     */
    articleGetList(req: operations.ArticleGetListRequest, config?: AxiosRequestConfig): Promise<operations.ArticleGetListResponse>;
    /**
     * Returns a list of fields which can be updated with the patch call
     */
    articleGetPatchableFields(config?: AxiosRequestConfig): Promise<operations.ArticleGetPatchableFieldsResponse>;
    /**
     * Queries the reserved amount for a single article by id or by sku
     */
    articleGetReservedAmount(req: operations.ArticleGetReservedAmountRequest, config?: AxiosRequestConfig): Promise<operations.ArticleGetReservedAmountResponse>;
    /**
     * Query all defined stock locations
     */
    articleGetStocks(config?: AxiosRequestConfig): Promise<operations.ArticleGetStocksResponse>;
    /**
     * Updates one or more fields of a product
     */
    articlePatchArticle(req: operations.ArticlePatchArticleRequest, config?: AxiosRequestConfig): Promise<operations.ArticlePatchArticleResponse>;
    /**
     * Add or update an existing image of a product
     */
    articlePutImageForm(req: operations.ArticlePutImageFormRequest, config?: AxiosRequestConfig): Promise<operations.ArticlePutImageFormResponse>;
    /**
     * Add or update an existing image of a product
     */
    articlePutImageJson(req: operations.ArticlePutImageJsonRequest, config?: AxiosRequestConfig): Promise<operations.ArticlePutImageJsonResponse>;
    /**
     * Add or update an existing image of a product
     */
    articlePutImageRaw(req: operations.ArticlePutImageRawRequest, config?: AxiosRequestConfig): Promise<operations.ArticlePutImageRawResponse>;
    /**
     * Update the stock code of an article
     */
    articleUpdateStockCodeForm(req: shared.BillbeeInterfacesBillbeeAPIModelUpdateStockCodeAPIModel, config?: AxiosRequestConfig): Promise<operations.ArticleUpdateStockCodeFormResponse>;
    /**
     * Update the stock code of an article
     */
    articleUpdateStockCodeJson(req: shared.BillbeeInterfacesBillbeeAPIModelUpdateStockCodeAPIModel, config?: AxiosRequestConfig): Promise<operations.ArticleUpdateStockCodeJsonResponse>;
    /**
     * Update the stock code of an article
     */
    articleUpdateStockCodeRaw(req: Uint8Array, config?: AxiosRequestConfig): Promise<operations.ArticleUpdateStockCodeRawResponse>;
    /**
     * Update the stock qty of an article
     *
     * @remarks
     * The article is specified by sku. You have to send the absolute value for the current stock
     */
    articleUpdateStockForm(req: shared.BillbeeInterfacesBillbeeAPIModelUpdateStockAPIModel, config?: AxiosRequestConfig): Promise<operations.ArticleUpdateStockFormResponse>;
    /**
     * Update the stock qty of an article
     *
     * @remarks
     * The article is specified by sku. You have to send the absolute value for the current stock
     */
    articleUpdateStockJson(req: shared.BillbeeInterfacesBillbeeAPIModelUpdateStockAPIModel, config?: AxiosRequestConfig): Promise<operations.ArticleUpdateStockJsonResponse>;
    /**
     * Update the stock qty of an article
     *
     * @remarks
     * The article is specified by sku. You have to send the absolute value for the current stock
     */
    articleUpdateStockRaw(req: Uint8Array, config?: AxiosRequestConfig): Promise<operations.ArticleUpdateStockRawResponse>;
    /**
     * Search for products, customers and orders.
     * Type can be "order", "product" and / or "customer"
     * Term can contains lucene query syntax
     */
    searchSearchForm(req: shared.RechnungsdruckWebAppControllersApiSearchControllerSearchModel, config?: AxiosRequestConfig): Promise<operations.SearchSearchFormResponse>;
    /**
     * Search for products, customers and orders.
     * Type can be "order", "product" and / or "customer"
     * Term can contains lucene query syntax
     */
    searchSearchJson(req: shared.RechnungsdruckWebAppControllersApiSearchControllerSearchModel, config?: AxiosRequestConfig): Promise<operations.SearchSearchJsonResponse>;
    /**
     * Search for products, customers and orders.
     * Type can be "order", "product" and / or "customer"
     * Term can contains lucene query syntax
     */
    searchSearchRaw(req: Uint8Array, config?: AxiosRequestConfig): Promise<operations.SearchSearchRawResponse>;
}
