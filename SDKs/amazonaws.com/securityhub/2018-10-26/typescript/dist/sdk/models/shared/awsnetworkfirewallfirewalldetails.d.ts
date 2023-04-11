import { SpeakeasyBase } from "../../../internal/utils";
import { AwsNetworkFirewallFirewallSubnetMappingsDetails } from "./awsnetworkfirewallfirewallsubnetmappingsdetails";
/**
 * Details about an Network Firewall firewall.
 */
export declare class AwsNetworkFirewallFirewallDetails extends SpeakeasyBase {
    deleteProtection?: boolean;
    description?: string;
    firewallArn?: string;
    firewallId?: string;
    firewallName?: string;
    firewallPolicyArn?: string;
    firewallPolicyChangeProtection?: boolean;
    subnetChangeProtection?: boolean;
    subnetMappings?: AwsNetworkFirewallFirewallSubnetMappingsDetails[];
    vpcId?: string;
}
