import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ClickIncludedAndVariablePrice extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clickIncluded" })
  clickIncluded?: number;

  @SpeakeasyMetadata({ data: "json, name=variablePrice" })
  variablePrice?: number;
}
