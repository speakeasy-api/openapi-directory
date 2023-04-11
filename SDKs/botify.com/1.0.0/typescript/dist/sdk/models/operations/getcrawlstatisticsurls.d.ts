import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * URLs list type (crawled URLs or error URLs)
 */
export declare enum GetCrawlStatisticsUrlsListTypeEnum {
    Crawled = "crawled",
    Errors = "errors"
}
export declare class GetCrawlStatisticsUrlsRequest extends SpeakeasyBase {
    /**
     * Analysis' identifier
     */
    analysisSlug: string;
    /**
     * URLs list type (crawled URLs or error URLs)
     */
    listType: GetCrawlStatisticsUrlsListTypeEnum;
    /**
     * Project's identifier
     */
    projectSlug: string;
    /**
     * User's identifier
     */
    username: string;
}
export declare class GetCrawlStatisticsUrlsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * error payload
     */
    defaultPayload?: shared.DefaultPayload;
    statusCode: number;
    rawResponse?: AxiosResponse;
    getCrawlStatisticsUrls200ApplicationJSONAnies?: any[];
}
