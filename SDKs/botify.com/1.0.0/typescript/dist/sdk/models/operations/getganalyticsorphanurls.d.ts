import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetGanalyticsOrphanUrLsMediumEnum {
    Organic = "organic",
    Social = "social"
}
export declare enum GetGanalyticsOrphanUrLsSourceEnum {
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
export declare class GetGanalyticsOrphanUrLsPathParams extends SpeakeasyBase {
    analysisSlug: string;
    medium: GetGanalyticsOrphanUrLsMediumEnum;
    projectSlug: string;
    source: GetGanalyticsOrphanUrLsSourceEnum;
    username: string;
}
export declare class GetGanalyticsOrphanUrLsQueryParams extends SpeakeasyBase {
    page?: number;
    size?: number;
}
export declare class GetGanalyticsOrphanUrLs200ApplicationJson extends SpeakeasyBase {
    count?: number;
    next?: string;
    page?: number;
    previous?: string;
    results?: shared.CrawlOrphanUrLs[];
    size?: number;
}
export declare class GetGanalyticsOrphanUrLsRequest extends SpeakeasyBase {
    pathParams: GetGanalyticsOrphanUrLsPathParams;
    queryParams: GetGanalyticsOrphanUrLsQueryParams;
}
export declare class GetGanalyticsOrphanUrLsResponse extends SpeakeasyBase {
    contentType: string;
    defaultPayload?: shared.DefaultPayload;
    statusCode: number;
    getGanalyticsOrphanURLs200ApplicationJSONObject?: GetGanalyticsOrphanUrLs200ApplicationJson;
}
