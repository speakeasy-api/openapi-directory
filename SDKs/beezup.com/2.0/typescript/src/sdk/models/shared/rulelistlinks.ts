import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LinksCreateRuleLink } from "./linkscreaterulelink";
import { LinksGetRulesExecutionsLink } from "./linksgetrulesexecutionslink";
import { LinksRunRulesLink } from "./linksrunruleslink";
import { LinksGetRulesLink } from "./linksgetruleslink";



// RuleListLinks
/** 
 * Links to know if the user can create a rule or run all rules
**/
export class RuleListLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=create" })
  create: LinksCreateRuleLink;

  @SpeakeasyMetadata({ data: "json, name=history" })
  history: LinksGetRulesExecutionsLink;

  @SpeakeasyMetadata({ data: "json, name=run" })
  run: LinksRunRulesLink;

  @SpeakeasyMetadata({ data: "json, name=self" })
  self: LinksGetRulesLink;
}
