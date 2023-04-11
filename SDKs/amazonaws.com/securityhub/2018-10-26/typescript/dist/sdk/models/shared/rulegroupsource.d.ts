import { SpeakeasyBase } from "../../../internal/utils";
import { RuleGroupSourceListDetails } from "./rulegroupsourcelistdetails";
import { RuleGroupSourceStatefulRulesDetails } from "./rulegroupsourcestatefulrulesdetails";
import { RuleGroupSourceStatelessRulesAndCustomActionsDetails } from "./rulegroupsourcestatelessrulesandcustomactionsdetails";
/**
 * The rules and actions for the rule group.
 */
export declare class RuleGroupSource extends SpeakeasyBase {
    rulesSourceList?: RuleGroupSourceListDetails;
    rulesString?: string;
    statefulRules?: RuleGroupSourceStatefulRulesDetails[];
    statelessRulesAndCustomActions?: RuleGroupSourceStatelessRulesAndCustomActionsDetails;
}
