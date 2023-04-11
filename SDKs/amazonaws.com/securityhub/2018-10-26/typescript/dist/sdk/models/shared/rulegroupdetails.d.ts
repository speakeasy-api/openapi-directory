import { SpeakeasyBase } from "../../../internal/utils";
import { RuleGroupSource } from "./rulegroupsource";
import { RuleGroupVariables } from "./rulegroupvariables";
/**
 * Details about the rule group.
 */
export declare class RuleGroupDetails extends SpeakeasyBase {
    ruleVariables?: RuleGroupVariables;
    rulesSource?: RuleGroupSource;
}
