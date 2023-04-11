import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Articles {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Account Article Report
     *
     * @remarks
     * Return status on all reports generated for the account from the oauth credentials
     */
    accountArticleReport(req: operations.AccountArticleReportRequest, security: operations.AccountArticleReportSecurity, config?: AxiosRequestConfig): Promise<operations.AccountArticleReportResponse>;
    /**
     * Initiate a new Report
     *
     * @remarks
     * Initiate a new Article Report for this Account. There is a limit of 1 report per day.
     */
    accountArticleReportGenerate(config?: AxiosRequestConfig): Promise<operations.AccountArticleReportGenerateResponse>;
    /**
     * View article details
     *
     * @remarks
     * View an article
     */
    articleDetails(req: operations.ArticleDetailsRequest, config?: AxiosRequestConfig): Promise<operations.ArticleDetailsResponse>;
    /**
     * Article file details
     *
     * @remarks
     * File by id
     */
    articleFileDetails(req: operations.ArticleFileDetailsRequest, config?: AxiosRequestConfig): Promise<operations.ArticleFileDetailsResponse>;
    /**
     * List article files
     *
     * @remarks
     * Files list for article
     */
    articleFiles(req: operations.ArticleFilesRequest, config?: AxiosRequestConfig): Promise<operations.ArticleFilesResponse>;
    /**
     * Public Article Confidentiality for article version
     *
     * @remarks
     * Confidentiality for article version. The confidentiality feature is now deprecated. This has been replaced by the new extended embargo functionality and all items that used to be confidential have now been migrated to items with a permanent embargo on files. All API endpoints related to this functionality will remain for backwards compatibility, but will now be attached to the new extended embargo workflows.
     */
    articleVersionConfidentiality(req: operations.ArticleVersionConfidentialityRequest, config?: AxiosRequestConfig): Promise<operations.ArticleVersionConfidentialityResponse>;
    /**
     * Article details for version
     *
     * @remarks
     * Article with specified version
     */
    articleVersionDetails(req: operations.ArticleVersionDetailsRequest, config?: AxiosRequestConfig): Promise<operations.ArticleVersionDetailsResponse>;
    /**
     * Public Article Embargo for article version
     *
     * @remarks
     * Embargo for article version
     */
    articleVersionEmbargo(req: operations.ArticleVersionEmbargoRequest, config?: AxiosRequestConfig): Promise<operations.ArticleVersionEmbargoResponse>;
    /**
     * Update article version
     *
     * @remarks
     * Updating an article version by passing body parameters; request can also be made with the PATCH method.
     */
    articleVersionUpdate(req: operations.ArticleVersionUpdateRequest, security: operations.ArticleVersionUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.ArticleVersionUpdateResponse>;
    /**
     * Update article version thumbnail
     *
     * @remarks
     * For a given public article version update the article thumbnail by choosing one of the associated files
     */
    articleVersionUpdateThumb(req: operations.ArticleVersionUpdateThumbRequest, security: operations.ArticleVersionUpdateThumbSecurity, config?: AxiosRequestConfig): Promise<operations.ArticleVersionUpdateThumbResponse>;
    /**
     * List article versions
     *
     * @remarks
     * List public article versions
     */
    articleVersions(req: operations.ArticleVersionsRequest, config?: AxiosRequestConfig): Promise<operations.ArticleVersionsResponse>;
    /**
     * Public Articles
     *
     * @remarks
     * Returns a list of public articles
     */
    articlesList(req: operations.ArticlesListRequest, config?: AxiosRequestConfig): Promise<operations.ArticlesListResponse>;
    /**
     * Public Articles Search
     *
     * @remarks
     * Returns a list of public articles, filtered by the search parameters
     */
    articlesSearch(req: operations.ArticlesSearchRequest, config?: AxiosRequestConfig): Promise<operations.ArticlesSearchResponse>;
    /**
     * Delete article author
     *
     * @remarks
     * De-associate author from article
     */
    privateArticleAuthorDelete(req: operations.PrivateArticleAuthorDeleteRequest, security: operations.PrivateArticleAuthorDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.PrivateArticleAuthorDeleteResponse>;
    /**
     * Add article authors
     *
     * @remarks
     * Associate new authors with the article. This will add new authors to the list of already associated authors
     */
    privateArticleAuthorsAdd(req: operations.PrivateArticleAuthorsAddRequest, security: operations.PrivateArticleAuthorsAddSecurity, config?: AxiosRequestConfig): Promise<operations.PrivateArticleAuthorsAddResponse>;
    /**
     * List article authors
     *
     * @remarks
     * List article authors
     */
    privateArticleAuthorsList(req: operations.PrivateArticleAuthorsListRequest, security: operations.PrivateArticleAuthorsListSecurity, config?: AxiosRequestConfig): Promise<operations.PrivateArticleAuthorsListResponse>;
    /**
     * Replace article authors
     *
     * @remarks
     * Associate new authors with the article. This will remove all already associated authors and add these new ones
     */
    privateArticleAuthorsReplace(req: operations.PrivateArticleAuthorsReplaceRequest, security: operations.PrivateArticleAuthorsReplaceSecurity, config?: AxiosRequestConfig): Promise<operations.PrivateArticleAuthorsReplaceResponse>;
    /**
     * Add article categories
     *
     * @remarks
     * Associate new categories with the article. This will add new categories to the list of already associated categories
     */
    privateArticleCategoriesAdd(req: operations.PrivateArticleCategoriesAddRequest, security: operations.PrivateArticleCategoriesAddSecurity, config?: AxiosRequestConfig): Promise<operations.PrivateArticleCategoriesAddResponse>;
    /**
     * List article categories
     *
     * @remarks
     * List article categories
     */
    privateArticleCategoriesList(req: operations.PrivateArticleCategoriesListRequest, security: operations.PrivateArticleCategoriesListSecurity, config?: AxiosRequestConfig): Promise<operations.PrivateArticleCategoriesListResponse>;
    /**
     * Replace article categories
     *
     * @remarks
     * Associate new categories with the article. This will remove all already associated categories and add these new ones
     */
    privateArticleCategoriesReplace(req: operations.PrivateArticleCategoriesReplaceRequest, security: operations.PrivateArticleCategoriesReplaceSecurity, config?: AxiosRequestConfig): Promise<operations.PrivateArticleCategoriesReplaceResponse>;
    /**
     * Delete article category
     *
     * @remarks
     * De-associate category from article
     */
    privateArticleCategoryDelete(req: operations.PrivateArticleCategoryDeleteRequest, security: operations.PrivateArticleCategoryDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.PrivateArticleCategoryDeleteResponse>;
    /**
     * Delete article confidentiality
     *
     * @remarks
     * Delete confidentiality settings. The confidentiality feature is now deprecated. This has been replaced by the new extended embargo functionality and all items that used to be confidential have now been migrated to items with a permanent embargo on files. All API endpoints related to this functionality will remain for backwards compatibility, but will now be attached to the new extended embargo workflows.
     */
    privateArticleConfidentialityDelete(req: operations.PrivateArticleConfidentialityDeleteRequest, security: operations.PrivateArticleConfidentialityDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.PrivateArticleConfidentialityDeleteResponse>;
    /**
     * Article confidentiality details
     *
     * @remarks
     * View confidentiality settings. The confidentiality feature is now deprecated. This has been replaced by the new extended embargo functionality and all items that used to be confidential have now been migrated to items with a permanent embargo on files. All API endpoints related to this functionality will remain for backwards compatibility, but will now be attached to the new extended embargo workflows.
     */
    privateArticleConfidentialityDetails(req: operations.PrivateArticleConfidentialityDetailsRequest, security: operations.PrivateArticleConfidentialityDetailsSecurity, config?: AxiosRequestConfig): Promise<operations.PrivateArticleConfidentialityDetailsResponse>;
    /**
     * Update article confidentiality
     *
     * @remarks
     * Update confidentiality settings. The confidentiality feature is now deprecated. This has been replaced by the new extended embargo functionality and all items that used to be confidential have now been migrated to items with a permanent embargo on files. All API endpoints related to this functionality will remain for backwards compatibility, but will now be attached to the new extended embargo workflows.
     */
    privateArticleConfidentialityUpdate(req: operations.PrivateArticleConfidentialityUpdateRequest, security: operations.PrivateArticleConfidentialityUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.PrivateArticleConfidentialityUpdateResponse>;
    /**
     * Create new Article
     *
     * @remarks
     * Create a new Article by sending article information
     */
    privateArticleCreate(req: shared.ArticleCreate, security: operations.PrivateArticleCreateSecurity, config?: AxiosRequestConfig): Promise<operations.PrivateArticleCreateResponse>;
    /**
     * Delete article
     *
     * @remarks
     * Delete an article
     */
    privateArticleDelete(req: operations.PrivateArticleDeleteRequest, security: operations.PrivateArticleDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.PrivateArticleDeleteResponse>;
    /**
     * Article details
     *
     * @remarks
     * View a private article
     */
    privateArticleDetails(req: operations.PrivateArticleDetailsRequest, security: operations.PrivateArticleDetailsSecurity, config?: AxiosRequestConfig): Promise<operations.PrivateArticleDetailsResponse>;
    /**
     * Delete Article Embargo
     *
     * @remarks
     * Will lift the embargo for the specified article
     */
    privateArticleEmbargoDelete(req: operations.PrivateArticleEmbargoDeleteRequest, security: operations.PrivateArticleEmbargoDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.PrivateArticleEmbargoDeleteResponse>;
    /**
     * Article Embargo Details
     *
     * @remarks
     * View a private article embargo details
     */
    privateArticleEmbargoDetails(req: operations.PrivateArticleEmbargoDetailsRequest, security: operations.PrivateArticleEmbargoDetailsSecurity, config?: AxiosRequestConfig): Promise<operations.PrivateArticleEmbargoDetailsResponse>;
    /**
     * Update Article Embargo
     *
     * @remarks
     * Note: setting an article under whole embargo does not imply that the article will be published when the embargo will expire. You must explicitly call the publish endpoint to enable this functionality.
     */
    privateArticleEmbargoUpdate(req: operations.PrivateArticleEmbargoUpdateRequest, security: operations.PrivateArticleEmbargoUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.PrivateArticleEmbargoUpdateResponse>;
    /**
     * Single File
     *
     * @remarks
     * View details of file for specified article
     */
    privateArticleFile(req: operations.PrivateArticleFileRequest, security: operations.PrivateArticleFileSecurity, config?: AxiosRequestConfig): Promise<operations.PrivateArticleFileResponse>;
    /**
     * File Delete
     *
     * @remarks
     * Complete file upload
     */
    privateArticleFileDelete(req: operations.PrivateArticleFileDeleteRequest, security: operations.PrivateArticleFileDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.PrivateArticleFileDeleteResponse>;
    /**
     * List article files
     *
     * @remarks
     * List private files
     */
    privateArticleFilesList(req: operations.PrivateArticleFilesListRequest, security: operations.PrivateArticleFilesListSecurity, config?: AxiosRequestConfig): Promise<operations.PrivateArticleFilesListResponse>;
    /**
     * List private links
     *
     * @remarks
     * List private links
     */
    privateArticlePrivateLink(req: operations.PrivateArticlePrivateLinkRequest, security: operations.PrivateArticlePrivateLinkSecurity, config?: AxiosRequestConfig): Promise<operations.PrivateArticlePrivateLinkResponse>;
    /**
     * Create private link
     *
     * @remarks
     * Create new private link for this article
     */
    privateArticlePrivateLinkCreate(req: operations.PrivateArticlePrivateLinkCreateRequest, security: operations.PrivateArticlePrivateLinkCreateSecurity, config?: AxiosRequestConfig): Promise<operations.PrivateArticlePrivateLinkCreateResponse>;
    /**
     * Disable private link
     *
     * @remarks
     * Disable/delete private link for this article
     */
    privateArticlePrivateLinkDelete(req: operations.PrivateArticlePrivateLinkDeleteRequest, security: operations.PrivateArticlePrivateLinkDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.PrivateArticlePrivateLinkDeleteResponse>;
    /**
     * Update private link
     *
     * @remarks
     * Update existing private link for this article
     */
    privateArticlePrivateLinkUpdate(req: operations.PrivateArticlePrivateLinkUpdateRequest, security: operations.PrivateArticlePrivateLinkUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.PrivateArticlePrivateLinkUpdateResponse>;
    /**
     * Private Article Publish
     *
     * @remarks
     * - If the whole article is under embargo, it will not be published immediately, but when the embargo expires or is lifted.
     * - When an article is published, a new public version will be generated. Any further updates to the article will affect the private article data. In order to make these changes publicly visible, an explicit publish operation is needed.
     */
    privateArticlePublish(req: operations.PrivateArticlePublishRequest, security: operations.PrivateArticlePublishSecurity, config?: AxiosRequestConfig): Promise<operations.PrivateArticlePublishResponse>;
    /**
     * Private Article Reserve DOI
     *
     * @remarks
     * Reserve DOI for article
     */
    privateArticleReserveDoi(req: operations.PrivateArticleReserveDoiRequest, security: operations.PrivateArticleReserveDoiSecurity, config?: AxiosRequestConfig): Promise<operations.PrivateArticleReserveDoiResponse>;
    /**
     * Private Article Reserve Handle
     *
     * @remarks
     * Reserve Handle for article
     */
    privateArticleReserveHandle(req: operations.PrivateArticleReserveHandleRequest, security: operations.PrivateArticleReserveHandleSecurity, config?: AxiosRequestConfig): Promise<operations.PrivateArticleReserveHandleResponse>;
    /**
     * Private Article Resource
     *
     * @remarks
     * Edit article resource data.
     */
    privateArticleResource(req: operations.PrivateArticleResourceRequest, security: operations.PrivateArticleResourceSecurity, config?: AxiosRequestConfig): Promise<operations.PrivateArticleResourceResponse>;
    /**
     * Update article
     *
     * @remarks
     * Updating an article by passing body parameters; request can also be made with the PATCH method.
     */
    privateArticleUpdate(req: operations.PrivateArticleUpdateRequest, security: operations.PrivateArticleUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.PrivateArticleUpdateResponse>;
    /**
     * Complete Upload
     *
     * @remarks
     * Complete file upload
     */
    privateArticleUploadComplete(req: operations.PrivateArticleUploadCompleteRequest, security: operations.PrivateArticleUploadCompleteSecurity, config?: AxiosRequestConfig): Promise<operations.PrivateArticleUploadCompleteResponse>;
    /**
     * Initiate Upload
     *
     * @remarks
     * Initiate a new file upload within the article. Either use the link property to point to an existing file that resides elsewhere and will not be uploaded to Figshare or use the other 3 parameters (md5, name, size).
     */
    privateArticleUploadInitiate(req: operations.PrivateArticleUploadInitiateRequest, security: operations.PrivateArticleUploadInitiateSecurity, config?: AxiosRequestConfig): Promise<operations.PrivateArticleUploadInitiateResponse>;
    /**
     * Private Articles
     *
     * @remarks
     * Get Own Articles
     */
    privateArticlesList(req: operations.PrivateArticlesListRequest, security: operations.PrivateArticlesListSecurity, config?: AxiosRequestConfig): Promise<operations.PrivateArticlesListResponse>;
    /**
     * Private Articles search
     *
     * @remarks
     * Returns a list of private articles filtered by the search parameters
     */
    privateArticlesSearch(req: shared.PrivateArticleSearch, security: operations.PrivateArticlesSearchSecurity, config?: AxiosRequestConfig): Promise<operations.PrivateArticlesSearchResponse>;
}
