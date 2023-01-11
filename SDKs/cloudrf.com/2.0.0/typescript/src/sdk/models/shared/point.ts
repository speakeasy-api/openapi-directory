import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Point extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alt" })
  alt?: number;

  @SpeakeasyMetadata({ data: "json, name=lat" })
  lat?: number;

  @SpeakeasyMetadata({ data: "json, name=lon" })
  lon?: number;
}
