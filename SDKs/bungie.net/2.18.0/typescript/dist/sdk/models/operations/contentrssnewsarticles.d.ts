import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ContentRssNewsArticlesRequest extends SpeakeasyBase {
    /**
     * Optionally filter response to only include news items in a certain category.
     */
    categoryfilter?: string;
    /**
     * Optionally include full content body for each news item.
     */
    includebody?: boolean;
    /**
     * Zero-based pagination token for paging through result sets.
     */
    pageToken: string;
}
/**
 * Look at the Response property for more information about the nature of this response
 */
export declare class ContentRssNewsArticles200Wildcard extends SpeakeasyBase {
    detailedErrorTrace?: string;
    errorCode?: number;
    errorStatus?: string;
    message?: string;
    messageData?: Record<string, string>;
    response?: shared.ContentNewsArticleRssResponse;
    throttleSeconds?: number;
}
export declare class ContentRssNewsArticlesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
