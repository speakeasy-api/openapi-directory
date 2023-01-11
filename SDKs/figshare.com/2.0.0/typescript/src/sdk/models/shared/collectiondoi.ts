import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CollectionDoi extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=doi" })
  doi?: string;
}
