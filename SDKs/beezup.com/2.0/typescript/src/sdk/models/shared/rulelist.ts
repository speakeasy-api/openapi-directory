import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RuleListLinks } from "./rulelistlinks";
import { Rule } from "./rule";



export class RuleList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=links" })
  links: RuleListLinks;

  @SpeakeasyMetadata({ data: "json, name=rules", elemType: Rule })
  rules: Rule[];
}
