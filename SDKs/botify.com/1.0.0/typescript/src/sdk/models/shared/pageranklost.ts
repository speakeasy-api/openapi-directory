import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PageRankLost extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=external" })
  external: number;

  @SpeakeasyMetadata({ data: "json, name=non_crawled" })
  nonCrawled: number;

  @SpeakeasyMetadata({ data: "json, name=robots_txt" })
  robotsTxt: number;
}
