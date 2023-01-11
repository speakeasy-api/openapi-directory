import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Environment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cll" })
  cll?: number;

  @SpeakeasyMetadata({ data: "json, name=clm" })
  clm?: number;

  @SpeakeasyMetadata({ data: "json, name=mat" })
  mat?: number;
}
