import { SpeakeasyBase } from "../../../internal/utils";
import { Firewall } from "./firewall";
import { FirewallStatus } from "./firewallstatus";
/**
 * Success
 */
export declare class DeleteFirewallResponse extends SpeakeasyBase {
    /**
     * <p>The firewall defines the configuration settings for an Network Firewall firewall. These settings include the firewall policy, the subnets in your VPC to use for the firewall endpoints, and any tags that are attached to the firewall Amazon Web Services resource. </p> <p>The status of the firewall, for example whether it's ready to filter network traffic, is provided in the corresponding <a>FirewallStatus</a>. You can retrieve both objects by calling <a>DescribeFirewall</a>.</p>
     */
    firewall?: Firewall;
    /**
     * Detailed information about the current status of a <a>Firewall</a>. You can retrieve this for a firewall by calling <a>DescribeFirewall</a> and providing the firewall name and ARN.
     */
    firewallStatus?: FirewallStatus;
}
