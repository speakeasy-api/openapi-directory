import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUrlsPathParams extends SpeakeasyBase {
    analysisSlug: string;
    projectSlug: string;
    username: string;
}
export declare enum GetUrlsAreaEnum {
    Current = "current",
    Disappeared = "disappeared",
    New = "new",
    SearchEnginesOrphans = "search_engines_orphans"
}
export declare class GetUrlsQueryParams extends SpeakeasyBase {
    area?: GetUrlsAreaEnum;
    page?: number;
    size?: number;
}
export declare class GetUrls200ApplicationJson extends SpeakeasyBase {
    count?: number;
    next?: string;
    page?: number;
    previous?: string;
    results?: Record<string, any>[];
    size?: number;
}
export declare class GetUrlsRequest extends SpeakeasyBase {
    pathParams: GetUrlsPathParams;
    queryParams: GetUrlsQueryParams;
    request?: shared.UrlsQuery;
}
export declare class GetUrlsResponse extends SpeakeasyBase {
    contentType: string;
    defaultPayload?: shared.DefaultPayload;
    statusCode: number;
    getUrls200ApplicationJSONObject?: GetUrls200ApplicationJson;
}
