import { SpeakeasyBase } from "../../../internal/utils";
import { NetworkFirewallPolicy } from "./networkfirewallpolicy";
import { ThirdPartyFirewallPolicy } from "./thirdpartyfirewallpolicy";
/**
 * Contains the Network Firewall firewall policy options to configure the policy's deployment model and third-party firewall policy settings.
 */
export declare class PolicyOption extends SpeakeasyBase {
    networkFirewallPolicy?: NetworkFirewallPolicy;
    thirdPartyFirewallPolicy?: ThirdPartyFirewallPolicy;
}
