import { SpeakeasyBase } from "../../../internal/utils";
import { StatefulEngineOptions } from "./statefulengineoptions";
import { StatefulRuleGroup } from "./statefulrulegroup";
import { StatelessRuleGroup } from "./statelessrulegroup";
/**
 * The definition of the Network Firewall firewall policy.
 */
export declare class NetworkFirewallPolicyDescription extends SpeakeasyBase {
    statefulDefaultActions?: string[];
    statefulEngineOptions?: StatefulEngineOptions;
    statefulRuleGroups?: StatefulRuleGroup[];
    statelessCustomActions?: string[];
    statelessDefaultActions?: string[];
    statelessFragmentDefaultActions?: string[];
    statelessRuleGroups?: StatelessRuleGroup[];
}
