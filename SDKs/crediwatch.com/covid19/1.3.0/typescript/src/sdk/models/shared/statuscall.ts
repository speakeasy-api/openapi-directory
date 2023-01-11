import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GetStatus } from "./getstatus";
import { VerifyNameMeta } from "./verifynamemeta";



export class StatusCall extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data: GetStatus;

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta: VerifyNameMeta;
}
