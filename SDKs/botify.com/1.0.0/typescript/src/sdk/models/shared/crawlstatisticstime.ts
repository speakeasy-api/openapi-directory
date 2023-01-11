import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CrawlStatisticsTimePoint } from "./crawlstatisticstimepoint";



export class CrawlStatisticsTime extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=avg_delay", elemType: CrawlStatisticsTimePoint })
  avgDelay: CrawlStatisticsTimePoint[];

  @SpeakeasyMetadata({ data: "json, name=avg_size", elemType: CrawlStatisticsTimePoint })
  avgSize: CrawlStatisticsTimePoint[];

  @SpeakeasyMetadata({ data: "json, name=frequency" })
  frequency: string;

  @SpeakeasyMetadata({ data: "json, name=http_code_2xx", elemType: CrawlStatisticsTimePoint })
  httpCode2xx: CrawlStatisticsTimePoint[];

  @SpeakeasyMetadata({ data: "json, name=http_code_3xx", elemType: CrawlStatisticsTimePoint })
  httpCode3xx: CrawlStatisticsTimePoint[];

  @SpeakeasyMetadata({ data: "json, name=http_code_4xx", elemType: CrawlStatisticsTimePoint })
  httpCode4xx: CrawlStatisticsTimePoint[];

  @SpeakeasyMetadata({ data: "json, name=http_code_5xx", elemType: CrawlStatisticsTimePoint })
  httpCode5xx: CrawlStatisticsTimePoint[];

  @SpeakeasyMetadata({ data: "json, name=http_code_xxx", elemType: CrawlStatisticsTimePoint })
  httpCodeXxx: CrawlStatisticsTimePoint[];

  @SpeakeasyMetadata({ data: "json, name=last_update_date" })
  lastUpdateDate: Date;

  @SpeakeasyMetadata({ data: "json, name=new_urls", elemType: CrawlStatisticsTimePoint })
  newUrls: CrawlStatisticsTimePoint[];
}
