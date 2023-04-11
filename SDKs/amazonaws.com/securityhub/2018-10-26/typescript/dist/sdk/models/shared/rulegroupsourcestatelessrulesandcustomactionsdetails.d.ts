import { SpeakeasyBase } from "../../../internal/utils";
import { RuleGroupSourceCustomActionsDetails } from "./rulegroupsourcecustomactionsdetails";
import { RuleGroupSourceStatelessRulesDetails } from "./rulegroupsourcestatelessrulesdetails";
/**
 * Stateless rules and custom actions for a stateless rule group.
 */
export declare class RuleGroupSourceStatelessRulesAndCustomActionsDetails extends SpeakeasyBase {
    customActions?: RuleGroupSourceCustomActionsDetails[];
    statelessRules?: RuleGroupSourceStatelessRulesDetails[];
}
