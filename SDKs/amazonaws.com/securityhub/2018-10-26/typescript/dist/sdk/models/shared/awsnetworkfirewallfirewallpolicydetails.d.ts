import { SpeakeasyBase } from "../../../internal/utils";
import { FirewallPolicyDetails } from "./firewallpolicydetails";
/**
 * Details about a firewall policy. A firewall policy defines the behavior of a network firewall.
 */
export declare class AwsNetworkFirewallFirewallPolicyDetails extends SpeakeasyBase {
    description?: string;
    firewallPolicy?: FirewallPolicyDetails;
    firewallPolicyArn?: string;
    firewallPolicyId?: string;
    firewallPolicyName?: string;
}
