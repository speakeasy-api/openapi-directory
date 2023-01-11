import { SpeakeasyBase } from "../../../internal/utils";
import { CrawlStatisticsTimePoint } from "./crawlstatisticstimepoint";
export declare class CrawlStatisticsTime extends SpeakeasyBase {
    avgDelay: CrawlStatisticsTimePoint[];
    avgSize: CrawlStatisticsTimePoint[];
    frequency: string;
    httpCode2xx: CrawlStatisticsTimePoint[];
    httpCode3xx: CrawlStatisticsTimePoint[];
    httpCode4xx: CrawlStatisticsTimePoint[];
    httpCode5xx: CrawlStatisticsTimePoint[];
    httpCodeXxx: CrawlStatisticsTimePoint[];
    lastUpdateDate: Date;
    newUrls: CrawlStatisticsTimePoint[];
}
