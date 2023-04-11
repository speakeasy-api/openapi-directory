import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Analysis context to execute the query
 */
export declare enum GetUrlsAreaEnum {
    Current = "current",
    Disappeared = "disappeared",
    New = "new",
    SearchEnginesOrphans = "search_engines_orphans"
}
export declare class GetUrlsRequest extends SpeakeasyBase {
    urlsQuery?: shared.UrlsQuery;
    /**
     * Analysis' identifier
     */
    analysisSlug: string;
    /**
     * Analysis context to execute the query
     */
    area?: GetUrlsAreaEnum;
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
     * User's identifier
     */
    username: string;
}
/**
 * Successful operation
 */
export declare class GetUrls200ApplicationJSON extends SpeakeasyBase {
    count?: number;
    next?: string;
    page?: number;
    previous?: string;
    results?: Record<string, any>[];
    size?: number;
}
export declare class GetUrlsResponse extends SpeakeasyBase {
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
    getUrls200ApplicationJSONObject?: GetUrls200ApplicationJSON;
}
