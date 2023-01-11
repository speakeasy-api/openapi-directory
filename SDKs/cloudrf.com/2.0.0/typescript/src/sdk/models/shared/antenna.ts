import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum AntennaPolEnum {
    H = "h",
    V = "v"
}


export class Antenna extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ant" })
  ant?: number;

  @SpeakeasyMetadata({ data: "json, name=azi" })
  azi?: number;

  @SpeakeasyMetadata({ data: "json, name=hbw" })
  hbw?: number;

  @SpeakeasyMetadata({ data: "json, name=pol" })
  pol?: AntennaPolEnum;

  @SpeakeasyMetadata({ data: "json, name=tlt" })
  tlt?: number;

  @SpeakeasyMetadata({ data: "json, name=txg" })
  txg?: number;

  @SpeakeasyMetadata({ data: "json, name=txl" })
  txl?: number;

  @SpeakeasyMetadata({ data: "json, name=vbw" })
  vbw?: number;
}
