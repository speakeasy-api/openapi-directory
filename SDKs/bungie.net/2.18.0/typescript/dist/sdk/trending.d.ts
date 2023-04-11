import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * trending
 */
export declare class Trending {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Returns trending items for Bungie.net, collapsed into the first page of items per category. For pagination within a category, call GetTrendingCategory.
     */
    trendingGetTrendingCategories(config?: AxiosRequestConfig): Promise<operations.TrendingGetTrendingCategoriesResponse>;
    /**
     * Returns paginated lists of trending items for a category.
     */
    trendingGetTrendingCategory(req: operations.TrendingGetTrendingCategoryRequest, config?: AxiosRequestConfig): Promise<operations.TrendingGetTrendingCategoryResponse>;
    /**
     * Returns the detailed results for a specific trending entry. Note that trending entries are uniquely identified by a combination of *both* the TrendingEntryType *and* the identifier: the identifier alone is not guaranteed to be globally unique.
     */
    trendingGetTrendingEntryDetail(req: operations.TrendingGetTrendingEntryDetailRequest, config?: AxiosRequestConfig): Promise<operations.TrendingGetTrendingEntryDetailResponse>;
}
