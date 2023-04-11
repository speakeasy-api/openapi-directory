import { SpeakeasyBase } from "../../../internal/utils";
import { CrawlerMetrics } from "./crawlermetrics";
/**
 * Success
 */
export declare class GetCrawlerMetricsResponse extends SpeakeasyBase {
    crawlerMetricsList?: CrawlerMetrics[];
    nextToken?: string;
}
