import { SpeakeasyBase } from "../../../internal/utils";
import { LinksCreateRuleLink } from "./linkscreaterulelink";
import { LinksGetRulesExecutionsLink } from "./linksgetrulesexecutionslink";
import { LinksRunRulesLink } from "./linksrunruleslink";
import { LinksGetRulesLink } from "./linksgetruleslink";
/**
 * Links to know if the user can create a rule or run all rules
**/
export declare class RuleListLinks extends SpeakeasyBase {
    create: LinksCreateRuleLink;
    history: LinksGetRulesExecutionsLink;
    run: LinksRunRulesLink;
    self: LinksGetRulesLink;
}
