import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CollectionHandle extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=handle" })
  handle?: string;
}
