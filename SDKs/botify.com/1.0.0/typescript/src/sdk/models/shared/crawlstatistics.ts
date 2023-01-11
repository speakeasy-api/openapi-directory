import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CrawlStatistics extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=depth_current" })
  depthCurrent: number;

  @SpeakeasyMetadata({ data: "json, name=last_upd_dt" })
  lastUpdDt: Date;

  @SpeakeasyMetadata({ data: "json, name=pages_dones" })
  pagesDones: number;

  @SpeakeasyMetadata({ data: "json, name=pages_dones_2xx" })
  pagesDones2xx: number;

  @SpeakeasyMetadata({ data: "json, name=pages_dones_3xx" })
  pagesDones3xx: number;

  @SpeakeasyMetadata({ data: "json, name=pages_dones_4xx" })
  pagesDones4xx: number;

  @SpeakeasyMetadata({ data: "json, name=pages_dones_5xx" })
  pagesDones5xx: number;

  @SpeakeasyMetadata({ data: "json, name=pages_dones_networkerror" })
  pagesDonesNetworkerror: number;

  @SpeakeasyMetadata({ data: "json, name=pages_dones_xxx" })
  pagesDonesXxx: number;

  @SpeakeasyMetadata({ data: "json, name=pages_known" })
  pagesKnown: number;
}
