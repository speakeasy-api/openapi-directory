import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ConfidentialityCreator extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=reason" })
  reason?: string;
}
