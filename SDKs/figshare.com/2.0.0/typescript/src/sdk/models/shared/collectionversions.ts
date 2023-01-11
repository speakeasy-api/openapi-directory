import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CollectionVersions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
