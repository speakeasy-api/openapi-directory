import { SpeakeasyBase } from "../../../internal/utils";
import { NetworkFirewallStatefulRuleGroupOverride } from "./networkfirewallstatefulrulegroupoverride";
/**
 * Network Firewall stateful rule group, used in a <a>NetworkFirewallPolicyDescription</a>.
 */
export declare class StatefulRuleGroup extends SpeakeasyBase {
    override?: NetworkFirewallStatefulRuleGroupOverride;
    priority?: number;
    resourceId?: string;
    ruleGroupName?: string;
}
