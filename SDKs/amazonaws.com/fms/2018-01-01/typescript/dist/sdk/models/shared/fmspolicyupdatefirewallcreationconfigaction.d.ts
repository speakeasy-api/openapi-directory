import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains information about the actions that you can take to remediate scope violations caused by your policy's <code>FirewallCreationConfig</code>. <code>FirewallCreationConfig</code> is an optional configuration that you can use to choose which Availability Zones Firewall Manager creates Network Firewall endpoints in.
 */
export declare class FMSPolicyUpdateFirewallCreationConfigAction extends SpeakeasyBase {
    description?: string;
    firewallCreationConfig?: string;
}
