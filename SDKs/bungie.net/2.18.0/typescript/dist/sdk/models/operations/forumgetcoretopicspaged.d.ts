import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ForumGetCoreTopicsPagedRequest extends SpeakeasyBase {
    /**
     * The category filter.
     */
    categoryFilter: number;
    /**
     * Comma seperated list of locales posts must match to return in the result list. Default 'en'
     */
    locales?: string;
    /**
     * Zero base page
     */
    page: number;
    /**
     * The date filter.
     */
    quickDate: number;
    /**
     * The sort mode.
     */
    sort: number;
}
/**
 * Look at the Response property for more information about the nature of this response
 */
export declare class ForumGetCoreTopicsPaged200Wildcard extends SpeakeasyBase {
    detailedErrorTrace?: string;
    errorCode?: number;
    errorStatus?: string;
    message?: string;
    messageData?: Record<string, string>;
    response?: shared.ForumPostSearchResponse;
    throttleSeconds?: number;
}
export declare class ForumGetCoreTopicsPagedResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
