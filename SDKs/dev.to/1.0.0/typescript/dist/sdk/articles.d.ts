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
     * Publish article
     *
     * @remarks
     * This endpoint allows the client to create a new article.
     *
     * "Articles" are all the posts that users create on DEV that typically show up in the feed. They can be a blog post, a discussion question, a help thread etc. but is referred to as article within the code.
     */
    createArticle(req: shared.Article, config?: AxiosRequestConfig): Promise<operations.CreateArticleResponse>;
    /**
     * Published article by id
     *
     * @remarks
     * This endpoint allows the client to retrieve a single published article given its `id`.
     */
    getArticleById(req: operations.GetArticleByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetArticleByIdResponse>;
    /**
     * Published article by path
     *
     * @remarks
     * This endpoint allows the client to retrieve a single published article given its `path`.
     */
    getArticleByPath(req: operations.GetArticleByPathRequest, config?: AxiosRequestConfig): Promise<operations.GetArticleByPathResponse>;
    /**
     * Published articles
     *
     * @remarks
     * This endpoint allows the client to retrieve a list of articles.
     *
     * "Articles" are all the posts that users create on DEV that typically
     * show up in the feed. They can be a blog post, a discussion question,
     * a help thread etc. but is referred to as article within the code.
     *
     * By default it will return featured, published articles ordered
     * by descending popularity.
     *
     * It supports pagination, each page will contain `30` articles by default.
     */
    getArticles(req: operations.GetArticlesRequest, config?: AxiosRequestConfig): Promise<operations.GetArticlesResponse>;
    /**
     * Published articles sorted by published date
     *
     * @remarks
     * This endpoint allows the client to retrieve a list of articles. ordered by descending publish date.
     *
     * It supports pagination, each page will contain 30 articles by default.
     */
    getLatestArticles(req: operations.GetLatestArticlesRequest, config?: AxiosRequestConfig): Promise<operations.GetLatestArticlesResponse>;
    /**
     * Organization's Articles
     *
     * @remarks
     * This endpoint allows the client to retrieve a list of Articles belonging to the organization
     *
     * It supports pagination, each page will contain `30` users by default.
     */
    getOrgArticles(req: operations.GetOrgArticlesRequest, config?: AxiosRequestConfig): Promise<operations.GetOrgArticlesResponse>;
    /**
     * User's all articles
     *
     * @remarks
     * This endpoint allows the client to retrieve a list of all articles on behalf of an authenticated user.
     *
     * "Articles" are all the posts that users create on DEV that typically show up in the feed. They can be a blog post, a discussion question, a help thread etc. but is referred to as article within the code.
     *
     * It will return both published and unpublished articles with pagination.
     *
     * Unpublished articles will be at the top of the list in reverse chronological creation order. Published articles will follow in reverse chronological publication order.
     *
     * By default a page will contain 30 articles.
     */
    getUserAllArticles(req: operations.GetUserAllArticlesRequest, config?: AxiosRequestConfig): Promise<operations.GetUserAllArticlesResponse>;
    /**
     * User's articles
     *
     * @remarks
     * This endpoint allows the client to retrieve a list of published articles on behalf of an authenticated user.
     *
     * "Articles" are all the posts that users create on DEV that typically show up in the feed. They can be a blog post, a discussion question, a help thread etc. but is referred to as article within the code.
     *
     * Published articles will be in reverse chronological publication order.
     *
     * It will return published articles with pagination. By default a page will contain 30 articles.
     */
    getUserArticles(req: operations.GetUserArticlesRequest, config?: AxiosRequestConfig): Promise<operations.GetUserArticlesResponse>;
    /**
     * User's published articles
     *
     * @remarks
     * This endpoint allows the client to retrieve a list of published articles on behalf of an authenticated user.
     *
     * "Articles" are all the posts that users create on DEV that typically show up in the feed. They can be a blog post, a discussion question, a help thread etc. but is referred to as article within the code.
     *
     * Published articles will be in reverse chronological publication order.
     *
     * It will return published articles with pagination. By default a page will contain 30 articles.
     */
    getUserPublishedArticles(req: operations.GetUserPublishedArticlesRequest, config?: AxiosRequestConfig): Promise<operations.GetUserPublishedArticlesResponse>;
    /**
     * User's unpublished articles
     *
     * @remarks
     * This endpoint allows the client to retrieve a list of unpublished articles on behalf of an authenticated user.
     *
     * "Articles" are all the posts that users create on DEV that typically show up in the feed. They can be a blog post, a discussion question, a help thread etc. but is referred to as article within the code.
     *
     * Unpublished articles will be in reverse chronological creation order.
     *
     * It will return unpublished articles with pagination. By default a page will contain 30 articles.
     */
    getUserUnpublishedArticles(req: operations.GetUserUnpublishedArticlesRequest, config?: AxiosRequestConfig): Promise<operations.GetUserUnpublishedArticlesResponse>;
    /**
     * Unpublish an article
     *
     * @remarks
     * This endpoint allows the client to unpublish an article.
     *
     * The user associated with the API key must have any 'admin' or 'moderator' role.
     *
     * The article will be unpublished and will no longer be visible to the public. It will remain
     * in the database and will set back to draft status on the author's posts dashboard. Any
     * notifications associated with the article will be deleted. Any comments on the article
     * will remain.
     */
    unpublishArticle(req: operations.UnpublishArticleRequest, config?: AxiosRequestConfig): Promise<operations.UnpublishArticleResponse>;
    /**
     * Update an article by id
     *
     * @remarks
     * This endpoint allows the client to update an existing article.
     *
     * "Articles" are all the posts that users create on DEV that typically show up in the feed. They can be a blog post, a discussion question, a help thread etc. but is referred to as article within the code.
     */
    updateArticle(req: operations.UpdateArticleRequest, config?: AxiosRequestConfig): Promise<operations.UpdateArticleResponse>;
    /**
     * Articles with a video
     *
     * @remarks
     * This endpoint allows the client to retrieve a list of articles that are uploaded with a video.
     *
     * It will only return published video articles ordered by descending popularity.
     *
     * It supports pagination, each page will contain 24 articles by default.
     */
    videos(req: operations.VideosRequest, config?: AxiosRequestConfig): Promise<operations.VideosResponse>;
}
