import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PlaceCall } from "./placecall";
import { VerifyNameMeta } from "./verifynamemeta";



export class VerifyPhone extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data: PlaceCall;

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta: VerifyNameMeta;
}
