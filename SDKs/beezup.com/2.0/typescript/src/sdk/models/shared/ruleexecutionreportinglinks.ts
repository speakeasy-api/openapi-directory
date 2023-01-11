import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LinksGetRuleLink } from "./linksgetrulelink";



// RuleExecutionReportingLinks
/** 
 * Links to retrieve/action on this rule execution
**/
export class RuleExecutionReportingLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=rule" })
  rule?: LinksGetRuleLink;
}
