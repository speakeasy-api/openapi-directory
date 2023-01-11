import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VerifyNameData } from "./verifynamedata";
import { VerifyNameMeta } from "./verifynamemeta";



export class VerifyName extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: VerifyNameData })
  data: VerifyNameData[];

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta: VerifyNameMeta;
}
