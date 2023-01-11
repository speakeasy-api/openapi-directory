import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Articles {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * accountArticleReport - Account Article Report
     *
     * Return status on all reports generated for the account from the oauth credentials
    **/
    accountArticleReport(req: operations.AccountArticleReportRequest, config?: AxiosRequestConfig): Promise<operations.AccountArticleReportResponse>;
    /**
     * accountArticleReportGenerate - Initiate a new Report
     *
     * Initiate a new Article Report for this Account
    **/
    accountArticleReportGenerate(req: operations.AccountArticleReportGenerateRequest, config?: AxiosRequestConfig): Promise<operations.AccountArticleReportGenerateResponse>;
    /**
     * articleDetails - View article details
     *
     * View an article
    **/
    articleDetails(req: operations.ArticleDetailsRequest, config?: AxiosRequestConfig): Promise<operations.ArticleDetailsResponse>;
    /**
     * articleFileDetails - Article file details
     *
     * File by id
    **/
    articleFileDetails(req: operations.ArticleFileDetailsRequest, config?: AxiosRequestConfig): Promise<operations.ArticleFileDetailsResponse>;
    /**
     * articleFiles - List article files
     *
     * Files list for article
    **/
    articleFiles(req: operations.ArticleFilesRequest, config?: AxiosRequestConfig): Promise<operations.ArticleFilesResponse>;
    /**
     * articleVersionConfidentiality - Public Article Confidentiality for article version
     *
     * Confidentiality for article version. The confidentiality feature is now deprecated. This has been replaced by the new extended embargo functionality and all items that used to be confidential have now been migrated to items with a permanent embargo on files. All API endpoints related to this functionality will remain for backwards compatibility, but will now be attached to the new extended embargo workflows.
    **/
    articleVersionConfidentiality(req: operations.ArticleVersionConfidentialityRequest, config?: AxiosRequestConfig): Promise<operations.ArticleVersionConfidentialityResponse>;
    /**
     * articleVersionDetails - Article details for version
     *
     * Article with specified version
    **/
    articleVersionDetails(req: operations.ArticleVersionDetailsRequest, config?: AxiosRequestConfig): Promise<operations.ArticleVersionDetailsResponse>;
    /**
     * articleVersionEmbargo - Public Article Embargo for article version
     *
     * Embargo for article version
    **/
    articleVersionEmbargo(req: operations.ArticleVersionEmbargoRequest, config?: AxiosRequestConfig): Promise<operations.ArticleVersionEmbargoResponse>;
    /**
     * articleVersionUpdateThumb - Article Version Update Thumb
     *
     * For a given public article version update the article thumb by choosing one of the associated files
    **/
    articleVersionUpdateThumb(req: operations.ArticleVersionUpdateThumbRequest, config?: AxiosRequestConfig): Promise<operations.ArticleVersionUpdateThumbResponse>;
    /**
     * articleVersions - List article versions
     *
     * List public article versions
    **/
    articleVersions(req: operations.ArticleVersionsRequest, config?: AxiosRequestConfig): Promise<operations.ArticleVersionsResponse>;
    /**
     * articlesList - Public Articles
     *
     * Returns a list of public articles
    **/
    articlesList(req: operations.ArticlesListRequest, config?: AxiosRequestConfig): Promise<operations.ArticlesListResponse>;
    /**
     * articlesSearch - Public Articles Search
     *
     * Returns a list of public articles, filtered by the search parameters
    **/
    articlesSearch(req: operations.ArticlesSearchRequest, config?: AxiosRequestConfig): Promise<operations.ArticlesSearchResponse>;
    /**
     * privateArticleAuthorDelete - Delete article author
     *
     * De-associate author from article
    **/
    privateArticleAuthorDelete(req: operations.PrivateArticleAuthorDeleteRequest, config?: AxiosRequestConfig): Promise<operations.PrivateArticleAuthorDeleteResponse>;
    /**
     * privateArticleAuthorsAdd - Add article authors
     *
     * Associate new authors with the article. This will add new authors to the list of already associated authors
    **/
    privateArticleAuthorsAdd(req: operations.PrivateArticleAuthorsAddRequest, config?: AxiosRequestConfig): Promise<operations.PrivateArticleAuthorsAddResponse>;
    /**
     * privateArticleAuthorsList - List article authors
     *
     * List article authors
    **/
    privateArticleAuthorsList(req: operations.PrivateArticleAuthorsListRequest, config?: AxiosRequestConfig): Promise<operations.PrivateArticleAuthorsListResponse>;
    /**
     * privateArticleAuthorsReplace - Replace article authors
     *
     * Associate new authors with the article. This will remove all already associated authors and add these new ones
    **/
    privateArticleAuthorsReplace(req: operations.PrivateArticleAuthorsReplaceRequest, config?: AxiosRequestConfig): Promise<operations.PrivateArticleAuthorsReplaceResponse>;
    /**
     * privateArticleCategoriesAdd - Add article categories
     *
     * Associate new categories with the article. This will add new categories to the list of already associated categories
    **/
    privateArticleCategoriesAdd(req: operations.PrivateArticleCategoriesAddRequest, config?: AxiosRequestConfig): Promise<operations.PrivateArticleCategoriesAddResponse>;
    /**
     * privateArticleCategoriesList - List article categories
     *
     * List article categories
    **/
    privateArticleCategoriesList(req: operations.PrivateArticleCategoriesListRequest, config?: AxiosRequestConfig): Promise<operations.PrivateArticleCategoriesListResponse>;
    /**
     * privateArticleCategoriesReplace - Replace article categories
     *
     * Associate new categories with the article. This will remove all already associated categories and add these new ones
    **/
    privateArticleCategoriesReplace(req: operations.PrivateArticleCategoriesReplaceRequest, config?: AxiosRequestConfig): Promise<operations.PrivateArticleCategoriesReplaceResponse>;
    /**
     * privateArticleCategoryDelete - Delete article category
     *
     * De-associate category from article
    **/
    privateArticleCategoryDelete(req: operations.PrivateArticleCategoryDeleteRequest, config?: AxiosRequestConfig): Promise<operations.PrivateArticleCategoryDeleteResponse>;
    /**
     * privateArticleConfidentialityDelete - Delete article confidentiality
     *
     * Delete confidentiality settings. The confidentiality feature is now deprecated. This has been replaced by the new extended embargo functionality and all items that used to be confidential have now been migrated to items with a permanent embargo on files. All API endpoints related to this functionality will remain for backwards compatibility, but will now be attached to the new extended embargo workflows.
    **/
    privateArticleConfidentialityDelete(req: operations.PrivateArticleConfidentialityDeleteRequest, config?: AxiosRequestConfig): Promise<operations.PrivateArticleConfidentialityDeleteResponse>;
    /**
     * privateArticleConfidentialityDetails - Article confidentiality details
     *
     * View confidentiality settings. The confidentiality feature is now deprecated. This has been replaced by the new extended embargo functionality and all items that used to be confidential have now been migrated to items with a permanent embargo on files. All API endpoints related to this functionality will remain for backwards compatibility, but will now be attached to the new extended embargo workflows.
    **/
    privateArticleConfidentialityDetails(req: operations.PrivateArticleConfidentialityDetailsRequest, config?: AxiosRequestConfig): Promise<operations.PrivateArticleConfidentialityDetailsResponse>;
    /**
     * privateArticleConfidentialityUpdate - Update article confidentiality
     *
     * Update confidentiality settings. The confidentiality feature is now deprecated. This has been replaced by the new extended embargo functionality and all items that used to be confidential have now been migrated to items with a permanent embargo on files. All API endpoints related to this functionality will remain for backwards compatibility, but will now be attached to the new extended embargo workflows.
    **/
    privateArticleConfidentialityUpdate(req: operations.PrivateArticleConfidentialityUpdateRequest, config?: AxiosRequestConfig): Promise<operations.PrivateArticleConfidentialityUpdateResponse>;
    /**
     * privateArticleCreate - Create new Article
     *
     * Create a new Article by sending article information
    **/
    privateArticleCreate(req: operations.PrivateArticleCreateRequest, config?: AxiosRequestConfig): Promise<operations.PrivateArticleCreateResponse>;
    /**
     * privateArticleDelete - Delete article
     *
     * Delete an article
    **/
    privateArticleDelete(req: operations.PrivateArticleDeleteRequest, config?: AxiosRequestConfig): Promise<operations.PrivateArticleDeleteResponse>;
    /**
     * privateArticleDetails - Article details
     *
     * View a private article
    **/
    privateArticleDetails(req: operations.PrivateArticleDetailsRequest, config?: AxiosRequestConfig): Promise<operations.PrivateArticleDetailsResponse>;
    /**
     * privateArticleEmbargoDelete - Delete Article Embargo
     *
     * Will lift the embargo for the specified article
    **/
    privateArticleEmbargoDelete(req: operations.PrivateArticleEmbargoDeleteRequest, config?: AxiosRequestConfig): Promise<operations.PrivateArticleEmbargoDeleteResponse>;
    /**
     * privateArticleEmbargoDetails - Article Embargo Details
     *
     * View a private article embargo details
    **/
    privateArticleEmbargoDetails(req: operations.PrivateArticleEmbargoDetailsRequest, config?: AxiosRequestConfig): Promise<operations.PrivateArticleEmbargoDetailsResponse>;
    /**
     * privateArticleEmbargoUpdate - Update Article Embargo
     *
     * Note: setting an article under whole embargo does not imply that the article will be published when the embargo will expire. You must explicitly call the publish endpoint to enable this functionality.
    **/
    privateArticleEmbargoUpdate(req: operations.PrivateArticleEmbargoUpdateRequest, config?: AxiosRequestConfig): Promise<operations.PrivateArticleEmbargoUpdateResponse>;
    /**
     * privateArticleFile - Single File
     *
     * View details of file for specified article
    **/
    privateArticleFile(req: operations.PrivateArticleFileRequest, config?: AxiosRequestConfig): Promise<operations.PrivateArticleFileResponse>;
    /**
     * privateArticleFileDelete - File Delete
     *
     * Complete file upload
    **/
    privateArticleFileDelete(req: operations.PrivateArticleFileDeleteRequest, config?: AxiosRequestConfig): Promise<operations.PrivateArticleFileDeleteResponse>;
    /**
     * privateArticleFilesList - List article files
     *
     * List private files
    **/
    privateArticleFilesList(req: operations.PrivateArticleFilesListRequest, config?: AxiosRequestConfig): Promise<operations.PrivateArticleFilesListResponse>;
    /**
     * privateArticlePrivateLink - List private links
     *
     * List private links
    **/
    privateArticlePrivateLink(req: operations.PrivateArticlePrivateLinkRequest, config?: AxiosRequestConfig): Promise<operations.PrivateArticlePrivateLinkResponse>;
    /**
     * privateArticlePrivateLinkCreate - Create private link
     *
     * Create new private link for this article
    **/
    privateArticlePrivateLinkCreate(req: operations.PrivateArticlePrivateLinkCreateRequest, config?: AxiosRequestConfig): Promise<operations.PrivateArticlePrivateLinkCreateResponse>;
    /**
     * privateArticlePrivateLinkDelete - Disable private link
     *
     * Disable/delete private link for this article
    **/
    privateArticlePrivateLinkDelete(req: operations.PrivateArticlePrivateLinkDeleteRequest, config?: AxiosRequestConfig): Promise<operations.PrivateArticlePrivateLinkDeleteResponse>;
    /**
     * privateArticlePrivateLinkUpdate - Update private link
     *
     * Update existing private link for this article
    **/
    privateArticlePrivateLinkUpdate(req: operations.PrivateArticlePrivateLinkUpdateRequest, config?: AxiosRequestConfig): Promise<operations.PrivateArticlePrivateLinkUpdateResponse>;
    /**
     * privateArticlePublish - Private Article Publish
     *
     * - If the whole article is under embargo, it will not be published immediatly, but when the embargo expires or is lifted.
     * - When an article is published, a new public version will be generated. Any further updates to the article will affect the private article data. In order to make these changes publicly visible, an explicit publish operation is needed.
    **/
    privateArticlePublish(req: operations.PrivateArticlePublishRequest, config?: AxiosRequestConfig): Promise<operations.PrivateArticlePublishResponse>;
    /**
     * privateArticleReserveDoi - Private Article Reserve DOI
     *
     * Reserve DOI for article
    **/
    privateArticleReserveDoi(req: operations.PrivateArticleReserveDoiRequest, config?: AxiosRequestConfig): Promise<operations.PrivateArticleReserveDoiResponse>;
    /**
     * privateArticleReserveHandle - Private Article Reserve Handle
     *
     * Reserve Handle for article
    **/
    privateArticleReserveHandle(req: operations.PrivateArticleReserveHandleRequest, config?: AxiosRequestConfig): Promise<operations.PrivateArticleReserveHandleResponse>;
    /**
     * privateArticleUpdate - Update article
     *
     * Updating an article by passing body parameters
    **/
    privateArticleUpdate(req: operations.PrivateArticleUpdateRequest, config?: AxiosRequestConfig): Promise<operations.PrivateArticleUpdateResponse>;
    /**
     * privateArticleUploadComplete - Complete Upload
     *
     * Complete file upload
    **/
    privateArticleUploadComplete(req: operations.PrivateArticleUploadCompleteRequest, config?: AxiosRequestConfig): Promise<operations.PrivateArticleUploadCompleteResponse>;
    /**
     * privateArticleUploadInitiate - Initiate Upload
     *
     * Initiate a new file upload within the article. Either use the link property to point to an existing file that resides elsewhere and will not be uploaded to Figshare or use the other 3 parameters (md5, name, size).
    **/
    privateArticleUploadInitiate(req: operations.PrivateArticleUploadInitiateRequest, config?: AxiosRequestConfig): Promise<operations.PrivateArticleUploadInitiateResponse>;
    /**
     * privateArticlesList - Private Articles
     *
     * Get Own Articles
    **/
    privateArticlesList(req: operations.PrivateArticlesListRequest, config?: AxiosRequestConfig): Promise<operations.PrivateArticlesListResponse>;
    /**
     * privateArticlesSearch - Private Articles search
     *
     * Returns a list of private articles filtered by the search parameters
    **/
    privateArticlesSearch(req: operations.PrivateArticlesSearchRequest, config?: AxiosRequestConfig): Promise<operations.PrivateArticlesSearchResponse>;
}
