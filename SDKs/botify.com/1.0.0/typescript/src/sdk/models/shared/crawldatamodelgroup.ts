import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CrawlDatamodelGroup extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}
