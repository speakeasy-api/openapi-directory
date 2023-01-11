import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Collections {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * collectionArticles - Public Collection Articles
     *
     * Returns a list of public collection articles
    **/
    collectionArticles(req: operations.CollectionArticlesRequest, config?: AxiosRequestConfig): Promise<operations.CollectionArticlesResponse>;
    /**
     * collectionDetails - Collection details
     *
     * View a collection
    **/
    collectionDetails(req: operations.CollectionDetailsRequest, config?: AxiosRequestConfig): Promise<operations.CollectionDetailsResponse>;
    /**
     * collectionVersionDetails - Collection Version details
     *
     * View details for a certain version of a collection
    **/
    collectionVersionDetails(req: operations.CollectionVersionDetailsRequest, config?: AxiosRequestConfig): Promise<operations.CollectionVersionDetailsResponse>;
    /**
     * collectionVersions - Collection Versions list
     *
     * Returns a list of public collection Versions
    **/
    collectionVersions(req: operations.CollectionVersionsRequest, config?: AxiosRequestConfig): Promise<operations.CollectionVersionsResponse>;
    /**
     * collectionsList - Public Collections
     *
     * Returns a list of public collections
    **/
    collectionsList(req: operations.CollectionsListRequest, config?: AxiosRequestConfig): Promise<operations.CollectionsListResponse>;
    /**
     * collectionsSearch - Public Collections Search
     *
     * Returns a list of public collections
    **/
    collectionsSearch(req: operations.CollectionsSearchRequest, config?: AxiosRequestConfig): Promise<operations.CollectionsSearchResponse>;
    /**
     * privateCollectionArticleDelete - Delete collection article
     *
     * De-associate article from collection
    **/
    privateCollectionArticleDelete(req: operations.PrivateCollectionArticleDeleteRequest, config?: AxiosRequestConfig): Promise<operations.PrivateCollectionArticleDeleteResponse>;
    /**
     * privateCollectionArticlesAdd - Add collection articles
     *
     * Associate new articles with the collection. This will add new articles to the list of already associated articles
    **/
    privateCollectionArticlesAdd(req: operations.PrivateCollectionArticlesAddRequest, config?: AxiosRequestConfig): Promise<operations.PrivateCollectionArticlesAddResponse>;
    /**
     * privateCollectionArticlesList - List collection articles
     *
     * List collection articles
    **/
    privateCollectionArticlesList(req: operations.PrivateCollectionArticlesListRequest, config?: AxiosRequestConfig): Promise<operations.PrivateCollectionArticlesListResponse>;
    /**
     * privateCollectionArticlesReplace - Replace collection articles
     *
     * Associate new articles with the collection. This will remove all already associated articles and add these new ones
    **/
    privateCollectionArticlesReplace(req: operations.PrivateCollectionArticlesReplaceRequest, config?: AxiosRequestConfig): Promise<operations.PrivateCollectionArticlesReplaceResponse>;
    /**
     * privateCollectionAuthorDelete - Delete collection author
     *
     * Delete collection author
    **/
    privateCollectionAuthorDelete(req: operations.PrivateCollectionAuthorDeleteRequest, config?: AxiosRequestConfig): Promise<operations.PrivateCollectionAuthorDeleteResponse>;
    /**
     * privateCollectionAuthorsAdd - Add collection authors
     *
     * Associate new authors with the collection. This will add new authors to the list of already associated authors
    **/
    privateCollectionAuthorsAdd(req: operations.PrivateCollectionAuthorsAddRequest, config?: AxiosRequestConfig): Promise<operations.PrivateCollectionAuthorsAddResponse>;
    /**
     * privateCollectionAuthorsList - List collection authors
     *
     * List collection authors
    **/
    privateCollectionAuthorsList(req: operations.PrivateCollectionAuthorsListRequest, config?: AxiosRequestConfig): Promise<operations.PrivateCollectionAuthorsListResponse>;
    /**
     * privateCollectionAuthorsReplace - Replace collection authors
     *
     * Associate new authors with the collection. This will remove all already associated authors and add these new ones
    **/
    privateCollectionAuthorsReplace(req: operations.PrivateCollectionAuthorsReplaceRequest, config?: AxiosRequestConfig): Promise<operations.PrivateCollectionAuthorsReplaceResponse>;
    /**
     * privateCollectionCategoriesAdd - Add collection categories
     *
     * Associate new categories with the collection. This will add new categories to the list of already associated categories
    **/
    privateCollectionCategoriesAdd(req: operations.PrivateCollectionCategoriesAddRequest, config?: AxiosRequestConfig): Promise<operations.PrivateCollectionCategoriesAddResponse>;
    /**
     * privateCollectionCategoriesList - List collection categories
     *
     * List collection categories
    **/
    privateCollectionCategoriesList(req: operations.PrivateCollectionCategoriesListRequest, config?: AxiosRequestConfig): Promise<operations.PrivateCollectionCategoriesListResponse>;
    /**
     * privateCollectionCategoriesReplace - Replace collection categories
     *
     * Associate new categories with the collection. This will remove all already associated categories and add these new ones
    **/
    privateCollectionCategoriesReplace(req: operations.PrivateCollectionCategoriesReplaceRequest, config?: AxiosRequestConfig): Promise<operations.PrivateCollectionCategoriesReplaceResponse>;
    /**
     * privateCollectionCategoryDelete - Delete collection category
     *
     * De-associate category from collection
    **/
    privateCollectionCategoryDelete(req: operations.PrivateCollectionCategoryDeleteRequest, config?: AxiosRequestConfig): Promise<operations.PrivateCollectionCategoryDeleteResponse>;
    /**
     * privateCollectionCreate - Create collection
     *
     * Create a new Collection by sending collection information
    **/
    privateCollectionCreate(req: operations.PrivateCollectionCreateRequest, config?: AxiosRequestConfig): Promise<operations.PrivateCollectionCreateResponse>;
    /**
     * privateCollectionDelete - Delete collection
     *
     * Delete n collection
    **/
    privateCollectionDelete(req: operations.PrivateCollectionDeleteRequest, config?: AxiosRequestConfig): Promise<operations.PrivateCollectionDeleteResponse>;
    /**
     * privateCollectionDetails - Collection details
     *
     * View a collection
    **/
    privateCollectionDetails(req: operations.PrivateCollectionDetailsRequest, config?: AxiosRequestConfig): Promise<operations.PrivateCollectionDetailsResponse>;
    /**
     * privateCollectionPrivateLinkCreate - Create collection private link
     *
     * Create new private link
    **/
    privateCollectionPrivateLinkCreate(req: operations.PrivateCollectionPrivateLinkCreateRequest, config?: AxiosRequestConfig): Promise<operations.PrivateCollectionPrivateLinkCreateResponse>;
    /**
     * privateCollectionPrivateLinkDelete - Disable private link
     *
     * Disable/delete private link for this collection
    **/
    privateCollectionPrivateLinkDelete(req: operations.PrivateCollectionPrivateLinkDeleteRequest, config?: AxiosRequestConfig): Promise<operations.PrivateCollectionPrivateLinkDeleteResponse>;
    /**
     * privateCollectionPrivateLinkUpdate - Update collection private link
     *
     * Update existing private link for this collection
    **/
    privateCollectionPrivateLinkUpdate(req: operations.PrivateCollectionPrivateLinkUpdateRequest, config?: AxiosRequestConfig): Promise<operations.PrivateCollectionPrivateLinkUpdateResponse>;
    /**
     * privateCollectionPrivateLinksList - List collection private links
     *
     * List article private links
    **/
    privateCollectionPrivateLinksList(req: operations.PrivateCollectionPrivateLinksListRequest, config?: AxiosRequestConfig): Promise<operations.PrivateCollectionPrivateLinksListResponse>;
    /**
     * privateCollectionPublish - Private Collection Publish
     *
     * When a collection is published, a new public version will be generated. Any further updates to the collection will affect the private collection data. In order to make these changes publicly visible, an explicit publish operation is needed.
    **/
    privateCollectionPublish(req: operations.PrivateCollectionPublishRequest, config?: AxiosRequestConfig): Promise<operations.PrivateCollectionPublishResponse>;
    /**
     * privateCollectionReserveDoi - Private Collection Reserve DOI
     *
     * Reserve DOI for collection
    **/
    privateCollectionReserveDoi(req: operations.PrivateCollectionReserveDoiRequest, config?: AxiosRequestConfig): Promise<operations.PrivateCollectionReserveDoiResponse>;
    /**
     * privateCollectionReserveHandle - Private Collection Reserve Handle
     *
     * Reserve Handle for collection
    **/
    privateCollectionReserveHandle(req: operations.PrivateCollectionReserveHandleRequest, config?: AxiosRequestConfig): Promise<operations.PrivateCollectionReserveHandleResponse>;
    /**
     * privateCollectionUpdate - Update collection
     *
     * Update collection details
    **/
    privateCollectionUpdate(req: operations.PrivateCollectionUpdateRequest, config?: AxiosRequestConfig): Promise<operations.PrivateCollectionUpdateResponse>;
    /**
     * privateCollectionsList - Private Collections List
     *
     * List private collections
    **/
    privateCollectionsList(req: operations.PrivateCollectionsListRequest, config?: AxiosRequestConfig): Promise<operations.PrivateCollectionsListResponse>;
    /**
     * privateCollectionsSearch - Private Collections Search
     *
     * Returns a list of private Collections
    **/
    privateCollectionsSearch(req: operations.PrivateCollectionsSearchRequest, config?: AxiosRequestConfig): Promise<operations.PrivateCollectionsSearchResponse>;
}
