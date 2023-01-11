import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CrawlStatisticsTimePoint extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count: number;

  @SpeakeasyMetadata({ data: "json, name=datetime" })
  datetime: Date;
}
