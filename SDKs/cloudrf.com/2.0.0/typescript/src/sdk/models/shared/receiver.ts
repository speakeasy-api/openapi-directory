import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Receiver extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alt" })
  alt?: number;

  @SpeakeasyMetadata({ data: "json, name=lat" })
  lat?: number;

  @SpeakeasyMetadata({ data: "json, name=lon" })
  lon?: number;

  @SpeakeasyMetadata({ data: "json, name=rxg" })
  rxg?: number;

  @SpeakeasyMetadata({ data: "json, name=rxs" })
  rxs?: number;
}
