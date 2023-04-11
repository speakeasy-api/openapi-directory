import { SpeakeasyBase } from "../../../internal/utils";
import { RuleGroupSourceStatefulRulesHeaderDetails } from "./rulegroupsourcestatefulrulesheaderdetails";
import { RuleGroupSourceStatefulRulesOptionsDetails } from "./rulegroupsourcestatefulrulesoptionsdetails";
/**
 * A Suricata rule specification.
 */
export declare class RuleGroupSourceStatefulRulesDetails extends SpeakeasyBase {
    action?: string;
    header?: RuleGroupSourceStatefulRulesHeaderDetails;
    ruleOptions?: RuleGroupSourceStatefulRulesOptionsDetails[];
}
