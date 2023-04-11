import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ForumGetTopicsPagedRequest extends SpeakeasyBase {
    /**
     * A category filter
     */
    categoryFilter: number;
    /**
     * The group, if any.
     */
    group: number;
    /**
     * Comma seperated list of locales posts must match to return in the result list. Default 'en'
     */
    locales?: string;
    /**
     * Zero paged page number
     */
    page: number;
    /**
     * Unused
     */
    pageSize: number;
    /**
     * A date filter.
     */
    quickDate: number;
    /**
     * The sort mode.
     */
    sort: number;
    /**
     * The tags to search, if any.
     */
    tagstring?: string;
}
/**
 * Look at the Response property for more information about the nature of this response
 */
export declare class ForumGetTopicsPaged200Wildcard extends SpeakeasyBase {
    detailedErrorTrace?: string;
    errorCode?: number;
    errorStatus?: string;
    message?: string;
    messageData?: Record<string, string>;
    response?: shared.ForumPostSearchResponse;
    throttleSeconds?: number;
}
export declare class ForumGetTopicsPagedResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
