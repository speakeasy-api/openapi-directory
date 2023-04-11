import { SpeakeasyBase } from "../../../internal/utils";
import { ManagedRuleState } from "./managedrulestate";
/**
 *  Contains information about managed Contributor Insights rules, as returned by <code>ListManagedInsightRules</code>.
 */
export declare class ManagedRuleDescription extends SpeakeasyBase {
    resourceARN?: string;
    ruleState?: ManagedRuleState;
    templateName?: string;
}
