import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Transmitter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alt" })
  alt?: number;

  @SpeakeasyMetadata({ data: "json, name=bwi" })
  bwi?: number;

  @SpeakeasyMetadata({ data: "json, name=frq" })
  frq?: number;

  @SpeakeasyMetadata({ data: "json, name=lat" })
  lat?: number;

  @SpeakeasyMetadata({ data: "json, name=lon" })
  lon?: number;

  @SpeakeasyMetadata({ data: "json, name=txw" })
  txw?: number;
}
