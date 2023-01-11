import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ClickIncludedAndAdditionalClickPrice extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=additionalClickPrice" })
  additionalClickPrice?: number;

  @SpeakeasyMetadata({ data: "json, name=clickIncluded" })
  clickIncluded?: number;
}
