import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCrawlStatisticsByFrequencyPathParams extends SpeakeasyBase {
    analysisSlug: string;
    projectSlug: string;
    username: string;
}
export declare enum GetCrawlStatisticsByFrequencyFrequencyEnum {
    Onemn = "1mn",
    Fivemn = "5mn",
    Sixtymn = "60mn"
}
export declare class GetCrawlStatisticsByFrequencyQueryParams extends SpeakeasyBase {
    frequency: GetCrawlStatisticsByFrequencyFrequencyEnum;
    limit?: number;
}
export declare class GetCrawlStatisticsByFrequencyRequest extends SpeakeasyBase {
    pathParams: GetCrawlStatisticsByFrequencyPathParams;
    queryParams: GetCrawlStatisticsByFrequencyQueryParams;
}
export declare class GetCrawlStatisticsByFrequencyResponse extends SpeakeasyBase {
    contentType: string;
    crawlStatisticsTime?: shared.CrawlStatisticsTime;
    defaultPayload?: shared.DefaultPayload;
    statusCode: number;
}
