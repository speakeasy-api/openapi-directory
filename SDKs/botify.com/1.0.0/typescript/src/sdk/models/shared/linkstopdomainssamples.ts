import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class LinksTopDomainsSamples extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=sources" })
  sources: string[];

  @SpeakeasyMetadata({ data: "json, name=unique_links" })
  uniqueLinks: number;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;
}
