import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Type of traffic, value: 'organic' (from search engine)or 'social' (from a social network)
 */
export declare enum GetGanalyticsOrphanURLsMediumEnum {
    Organic = "organic",
    Social = "social"
}
/**
 * Traffic source, value: name of the search engine or social network
 */
export declare enum GetGanalyticsOrphanURLsSourceEnum {
    All = "all",
    Aol = "aol",
    Ask = "ask",
    Baidu = "baidu",
    Bing = "bing",
    Facebook = "facebook",
    Google = "google",
    GooglePlus = "google+",
    Linkedin = "linkedin",
    Naver = "naver",
    Pinterest = "pinterest",
    Reddit = "reddit",
    Tumblr = "tumblr",
    Twitter = "twitter",
    Yahoo = "yahoo",
    Yandex = "yandex"
}
export declare class GetGanalyticsOrphanURLsRequest extends SpeakeasyBase {
    /**
     * Analysis' identifier
     */
    analysisSlug: string;
    /**
     * Type of traffic, value: 'organic' (from search engine)or 'social' (from a social network)
     */
    medium: GetGanalyticsOrphanURLsMediumEnum;
    /**
     * Page Number
     */
    page?: number;
    /**
     * Project's identifier
     */
    projectSlug: string;
    /**
     * Page Size
     */
    size?: number;
    /**
     * Traffic source, value: name of the search engine or social network
     */
    source: GetGanalyticsOrphanURLsSourceEnum;
    /**
     * User's identifier
     */
    username: string;
}
/**
 * Successful operation
 */
export declare class GetGanalyticsOrphanURLs200ApplicationJSON extends SpeakeasyBase {
    count?: number;
    next?: string;
    page?: number;
    previous?: string;
    results?: shared.CrawlOrphanURLs[];
    size?: number;
}
export declare class GetGanalyticsOrphanURLsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * error payload
     */
    defaultPayload?: shared.DefaultPayload;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getGanalyticsOrphanURLs200ApplicationJSONObject?: GetGanalyticsOrphanURLs200ApplicationJSON;
}
