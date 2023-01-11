import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RuleTypeEnum } from "./ruletypeenum";



export class Rule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Parameters" })
  parameters?: Record<string, string>;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: RuleTypeEnum;
}
