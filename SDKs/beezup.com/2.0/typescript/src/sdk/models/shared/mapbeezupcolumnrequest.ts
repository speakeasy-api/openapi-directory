import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class MapBeezUpColumnRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=beezUPColumnName" })
  beezUPColumnName: string;
}
