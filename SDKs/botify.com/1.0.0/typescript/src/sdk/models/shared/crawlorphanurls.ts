import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CrawlOrphanUrLs extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;

  @SpeakeasyMetadata({ data: "json, name=visits" })
  visits: number;
}
