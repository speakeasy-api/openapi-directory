import { SpeakeasyBase } from "../../../internal/utils";
import { FirewallDeploymentModelEnum } from "./firewalldeploymentmodelenum";
/**
 * Configures the firewall policy deployment model of Network Firewall. For information about Network Firewall deployment models, see <a href="https://docs.aws.amazon.com/network-firewall/latest/developerguide/architectures.html">Network Firewall example architectures with routing</a> in the <i>Network Firewall Developer Guide</i>.
 */
export declare class NetworkFirewallPolicy extends SpeakeasyBase {
    firewallDeploymentModel?: FirewallDeploymentModelEnum;
}
