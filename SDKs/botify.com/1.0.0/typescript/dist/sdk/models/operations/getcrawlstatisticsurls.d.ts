import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetCrawlStatisticsUrlsListTypeEnum {
    Crawled = "crawled",
    Errors = "errors"
}
export declare class GetCrawlStatisticsUrlsPathParams extends SpeakeasyBase {
    analysisSlug: string;
    listType: GetCrawlStatisticsUrlsListTypeEnum;
    projectSlug: string;
    username: string;
}
export declare class GetCrawlStatisticsUrlsRequest extends SpeakeasyBase {
    pathParams: GetCrawlStatisticsUrlsPathParams;
}
export declare class GetCrawlStatisticsUrlsResponse extends SpeakeasyBase {
    contentType: string;
    defaultPayload?: shared.DefaultPayload;
    statusCode: number;
    getCrawlStatisticsUrls200ApplicationJSONAnies?: any[];
}
