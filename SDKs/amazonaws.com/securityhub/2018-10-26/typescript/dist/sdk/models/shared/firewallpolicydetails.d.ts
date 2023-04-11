import { SpeakeasyBase } from "../../../internal/utils";
import { FirewallPolicyStatefulRuleGroupReferencesDetails } from "./firewallpolicystatefulrulegroupreferencesdetails";
import { FirewallPolicyStatelessCustomActionsDetails } from "./firewallpolicystatelesscustomactionsdetails";
import { FirewallPolicyStatelessRuleGroupReferencesDetails } from "./firewallpolicystatelessrulegroupreferencesdetails";
/**
 * Defines the behavior of the firewall.
 */
export declare class FirewallPolicyDetails extends SpeakeasyBase {
    statefulRuleGroupReferences?: FirewallPolicyStatefulRuleGroupReferencesDetails[];
    statelessCustomActions?: FirewallPolicyStatelessCustomActionsDetails[];
    statelessDefaultActions?: string[];
    statelessFragmentDefaultActions?: string[];
    statelessRuleGroupReferences?: FirewallPolicyStatelessRuleGroupReferencesDetails[];
}
