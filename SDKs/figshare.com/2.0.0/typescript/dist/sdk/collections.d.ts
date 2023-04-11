import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Collections {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Public Collection Articles
     *
     * @remarks
     * Returns a list of public collection articles
     */
    collectionArticles(req: operations.CollectionArticlesRequest, config?: AxiosRequestConfig): Promise<operations.CollectionArticlesResponse>;
    /**
     * Collection details
     *
     * @remarks
     * View a collection
     */
    collectionDetails(req: operations.CollectionDetailsRequest, config?: AxiosRequestConfig): Promise<operations.CollectionDetailsResponse>;
    /**
     * Collection Version details
     *
     * @remarks
     * View details for a certain version of a collection
     */
    collectionVersionDetails(req: operations.CollectionVersionDetailsRequest, config?: AxiosRequestConfig): Promise<operations.CollectionVersionDetailsResponse>;
    /**
     * Collection Versions list
     *
     * @remarks
     * Returns a list of public collection Versions
     */
    collectionVersions(req: operations.CollectionVersionsRequest, config?: AxiosRequestConfig): Promise<operations.CollectionVersionsResponse>;
    /**
     * Public Collections
     *
     * @remarks
     * Returns a list of public collections
     */
    collectionsList(req: operations.CollectionsListRequest, config?: AxiosRequestConfig): Promise<operations.CollectionsListResponse>;
    /**
     * Public Collections Search
     *
     * @remarks
     * Returns a list of public collections
     */
    collectionsSearch(req: operations.CollectionsSearchRequest, config?: AxiosRequestConfig): Promise<operations.CollectionsSearchResponse>;
    /**
     * Delete collection article
     *
     * @remarks
     * De-associate article from collection
     */
    privateCollectionArticleDelete(req: operations.PrivateCollectionArticleDeleteRequest, security: operations.PrivateCollectionArticleDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.PrivateCollectionArticleDeleteResponse>;
    /**
     * Add collection articles
     *
     * @remarks
     * Associate new articles with the collection. This will add new articles to the list of already associated articles
     */
    privateCollectionArticlesAdd(req: operations.PrivateCollectionArticlesAddRequest, security: operations.PrivateCollectionArticlesAddSecurity, config?: AxiosRequestConfig): Promise<operations.PrivateCollectionArticlesAddResponse>;
    /**
     * List collection articles
     *
     * @remarks
     * List collection articles
     */
    privateCollectionArticlesList(req: operations.PrivateCollectionArticlesListRequest, security: operations.PrivateCollectionArticlesListSecurity, config?: AxiosRequestConfig): Promise<operations.PrivateCollectionArticlesListResponse>;
    /**
     * Replace collection articles
     *
     * @remarks
     * Associate new articles with the collection. This will remove all already associated articles and add these new ones
     */
    privateCollectionArticlesReplace(req: operations.PrivateCollectionArticlesReplaceRequest, security: operations.PrivateCollectionArticlesReplaceSecurity, config?: AxiosRequestConfig): Promise<operations.PrivateCollectionArticlesReplaceResponse>;
    /**
     * Delete collection author
     *
     * @remarks
     * Delete collection author
     */
    privateCollectionAuthorDelete(req: operations.PrivateCollectionAuthorDeleteRequest, security: operations.PrivateCollectionAuthorDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.PrivateCollectionAuthorDeleteResponse>;
    /**
     * Add collection authors
     *
     * @remarks
     * Associate new authors with the collection. This will add new authors to the list of already associated authors
     */
    privateCollectionAuthorsAdd(req: operations.PrivateCollectionAuthorsAddRequest, security: operations.PrivateCollectionAuthorsAddSecurity, config?: AxiosRequestConfig): Promise<operations.PrivateCollectionAuthorsAddResponse>;
    /**
     * List collection authors
     *
     * @remarks
     * List collection authors
     */
    privateCollectionAuthorsList(req: operations.PrivateCollectionAuthorsListRequest, security: operations.PrivateCollectionAuthorsListSecurity, config?: AxiosRequestConfig): Promise<operations.PrivateCollectionAuthorsListResponse>;
    /**
     * Replace collection authors
     *
     * @remarks
     * Associate new authors with the collection. This will remove all already associated authors and add these new ones
     */
    privateCollectionAuthorsReplace(req: operations.PrivateCollectionAuthorsReplaceRequest, security: operations.PrivateCollectionAuthorsReplaceSecurity, config?: AxiosRequestConfig): Promise<operations.PrivateCollectionAuthorsReplaceResponse>;
    /**
     * Add collection categories
     *
     * @remarks
     * Associate new categories with the collection. This will add new categories to the list of already associated categories
     */
    privateCollectionCategoriesAdd(req: operations.PrivateCollectionCategoriesAddRequest, security: operations.PrivateCollectionCategoriesAddSecurity, config?: AxiosRequestConfig): Promise<operations.PrivateCollectionCategoriesAddResponse>;
    /**
     * List collection categories
     *
     * @remarks
     * List collection categories
     */
    privateCollectionCategoriesList(req: operations.PrivateCollectionCategoriesListRequest, security: operations.PrivateCollectionCategoriesListSecurity, config?: AxiosRequestConfig): Promise<operations.PrivateCollectionCategoriesListResponse>;
    /**
     * Replace collection categories
     *
     * @remarks
     * Associate new categories with the collection. This will remove all already associated categories and add these new ones
     */
    privateCollectionCategoriesReplace(req: operations.PrivateCollectionCategoriesReplaceRequest, security: operations.PrivateCollectionCategoriesReplaceSecurity, config?: AxiosRequestConfig): Promise<operations.PrivateCollectionCategoriesReplaceResponse>;
    /**
     * Delete collection category
     *
     * @remarks
     * De-associate category from collection
     */
    privateCollectionCategoryDelete(req: operations.PrivateCollectionCategoryDeleteRequest, security: operations.PrivateCollectionCategoryDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.PrivateCollectionCategoryDeleteResponse>;
    /**
     * Create collection
     *
     * @remarks
     * Create a new Collection by sending collection information
     */
    privateCollectionCreate(req: shared.CollectionCreate, security: operations.PrivateCollectionCreateSecurity, config?: AxiosRequestConfig): Promise<operations.PrivateCollectionCreateResponse>;
    /**
     * Delete collection
     *
     * @remarks
     * Delete n collection
     */
    privateCollectionDelete(req: operations.PrivateCollectionDeleteRequest, security: operations.PrivateCollectionDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.PrivateCollectionDeleteResponse>;
    /**
     * Collection details
     *
     * @remarks
     * View a collection
     */
    privateCollectionDetails(req: operations.PrivateCollectionDetailsRequest, security: operations.PrivateCollectionDetailsSecurity, config?: AxiosRequestConfig): Promise<operations.PrivateCollectionDetailsResponse>;
    /**
     * Create collection private link
     *
     * @remarks
     * Create new private link
     */
    privateCollectionPrivateLinkCreate(req: operations.PrivateCollectionPrivateLinkCreateRequest, security: operations.PrivateCollectionPrivateLinkCreateSecurity, config?: AxiosRequestConfig): Promise<operations.PrivateCollectionPrivateLinkCreateResponse>;
    /**
     * Disable private link
     *
     * @remarks
     * Disable/delete private link for this collection
     */
    privateCollectionPrivateLinkDelete(req: operations.PrivateCollectionPrivateLinkDeleteRequest, security: operations.PrivateCollectionPrivateLinkDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.PrivateCollectionPrivateLinkDeleteResponse>;
    /**
     * Update collection private link
     *
     * @remarks
     * Update existing private link for this collection
     */
    privateCollectionPrivateLinkUpdate(req: operations.PrivateCollectionPrivateLinkUpdateRequest, security: operations.PrivateCollectionPrivateLinkUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.PrivateCollectionPrivateLinkUpdateResponse>;
    /**
     * List collection private links
     *
     * @remarks
     * List article private links
     */
    privateCollectionPrivateLinksList(req: operations.PrivateCollectionPrivateLinksListRequest, security: operations.PrivateCollectionPrivateLinksListSecurity, config?: AxiosRequestConfig): Promise<operations.PrivateCollectionPrivateLinksListResponse>;
    /**
     * Private Collection Publish
     *
     * @remarks
     * When a collection is published, a new public version will be generated. Any further updates to the collection will affect the private collection data. In order to make these changes publicly visible, an explicit publish operation is needed.
     */
    privateCollectionPublish(req: operations.PrivateCollectionPublishRequest, security: operations.PrivateCollectionPublishSecurity, config?: AxiosRequestConfig): Promise<operations.PrivateCollectionPublishResponse>;
    /**
     * Private Collection Reserve DOI
     *
     * @remarks
     * Reserve DOI for collection
     */
    privateCollectionReserveDoi(req: operations.PrivateCollectionReserveDoiRequest, security: operations.PrivateCollectionReserveDoiSecurity, config?: AxiosRequestConfig): Promise<operations.PrivateCollectionReserveDoiResponse>;
    /**
     * Private Collection Reserve Handle
     *
     * @remarks
     * Reserve Handle for collection
     */
    privateCollectionReserveHandle(req: operations.PrivateCollectionReserveHandleRequest, security: operations.PrivateCollectionReserveHandleSecurity, config?: AxiosRequestConfig): Promise<operations.PrivateCollectionReserveHandleResponse>;
    /**
     * Private Collection Resource
     *
     * @remarks
     * Edit collection resource data.
     */
    privateCollectionResource(req: operations.PrivateCollectionResourceRequest, security: operations.PrivateCollectionResourceSecurity, config?: AxiosRequestConfig): Promise<operations.PrivateCollectionResourceResponse>;
    /**
     * Update collection
     *
     * @remarks
     * Update collection details; request can also be made with the PATCH method.
     */
    privateCollectionUpdate(req: operations.PrivateCollectionUpdateRequest, security: operations.PrivateCollectionUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.PrivateCollectionUpdateResponse>;
    /**
     * Private Collections List
     *
     * @remarks
     * List private collections
     */
    privateCollectionsList(req: operations.PrivateCollectionsListRequest, security: operations.PrivateCollectionsListSecurity, config?: AxiosRequestConfig): Promise<operations.PrivateCollectionsListResponse>;
    /**
     * Private Collections Search
     *
     * @remarks
     * Returns a list of private Collections
     */
    privateCollectionsSearch(req: shared.PrivateCollectionSearch, security: operations.PrivateCollectionsSearchSecurity, config?: AxiosRequestConfig): Promise<operations.PrivateCollectionsSearchResponse>;
}
