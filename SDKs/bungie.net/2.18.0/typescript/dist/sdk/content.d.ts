import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * content
 */
export declare class Content {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Returns a content item referenced by id
     */
    contentGetContentById(req: operations.ContentGetContentByIdRequest, config?: AxiosRequestConfig): Promise<operations.ContentGetContentByIdResponse>;
    /**
     * Returns the newest item that matches a given tag and Content Type.
     */
    contentGetContentByTagAndType(req: operations.ContentGetContentByTagAndTypeRequest, config?: AxiosRequestConfig): Promise<operations.ContentGetContentByTagAndTypeResponse>;
    /**
     * Gets an object describing a particular variant of content.
     */
    contentGetContentType(req: operations.ContentGetContentTypeRequest, config?: AxiosRequestConfig): Promise<operations.ContentGetContentTypeResponse>;
    /**
     * Returns a JSON string response that is the RSS feed for news articles.
     */
    contentRssNewsArticles(req: operations.ContentRssNewsArticlesRequest, config?: AxiosRequestConfig): Promise<operations.ContentRssNewsArticlesResponse>;
    /**
     * Searches for Content Items that match the given Tag and Content Type.
     */
    contentSearchContentByTagAndType(req: operations.ContentSearchContentByTagAndTypeRequest, config?: AxiosRequestConfig): Promise<operations.ContentSearchContentByTagAndTypeResponse>;
    /**
     * Gets content based on querystring information passed in. Provides basic search and text search capabilities.
     */
    contentSearchContentWithText(req: operations.ContentSearchContentWithTextRequest, config?: AxiosRequestConfig): Promise<operations.ContentSearchContentWithTextResponse>;
    /**
     * Search for Help Articles.
     */
    contentSearchHelpArticles(req: operations.ContentSearchHelpArticlesRequest, config?: AxiosRequestConfig): Promise<operations.ContentSearchHelpArticlesResponse>;
}
