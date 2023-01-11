import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResourceValue } from "./resourcevalue";
import { StaticValue } from "./staticvalue";



export class RemediationParameterValue extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ResourceValue" })
  resourceValue?: ResourceValue;

  @SpeakeasyMetadata({ data: "json, name=StaticValue" })
  staticValue?: StaticValue;
}
