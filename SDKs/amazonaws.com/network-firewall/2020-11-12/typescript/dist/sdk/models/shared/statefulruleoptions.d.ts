import { SpeakeasyBase } from "../../../internal/utils";
import { RuleOrderEnum } from "./ruleorderenum";
/**
 * Additional options governing how Network Firewall handles the rule group. You can only use these for stateful rule groups.
 */
export declare class StatefulRuleOptions extends SpeakeasyBase {
    ruleOrder?: RuleOrderEnum;
}
