import { SpeakeasyBase } from "../../../internal/utils";
import { Rule } from "./rule";
import { RuleListLinks } from "./rulelistlinks";
/**
 * Rule list
 */
export declare class RuleList extends SpeakeasyBase {
    /**
     * Links to know if the user can create a rule or run all rules
     */
    links: RuleListLinks;
    /**
     * Rule list
     */
    rules: Rule[];
}
