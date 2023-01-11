import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RewritingRuleSerializer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ignore_case" })
  ignoreCase: boolean;

  @SpeakeasyMetadata({ data: "json, name=regex" })
  regex: string;

  @SpeakeasyMetadata({ data: "json, name=replace" })
  replace: string;
}
