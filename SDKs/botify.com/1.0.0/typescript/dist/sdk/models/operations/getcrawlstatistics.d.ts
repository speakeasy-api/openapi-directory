import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCrawlStatisticsPathParams extends SpeakeasyBase {
    analysisSlug: string;
    projectSlug: string;
    username: string;
}
export declare class GetCrawlStatisticsRequest extends SpeakeasyBase {
    pathParams: GetCrawlStatisticsPathParams;
}
export declare class GetCrawlStatisticsResponse extends SpeakeasyBase {
    contentType: string;
    crawlStatistics?: shared.CrawlStatistics;
    defaultPayload?: shared.DefaultPayload;
    statusCode: number;
}
