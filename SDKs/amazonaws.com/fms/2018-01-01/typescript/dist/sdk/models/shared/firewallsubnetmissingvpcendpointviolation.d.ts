import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The violation details for a firewall subnet's VPC endpoint that's deleted or missing.
 */
export declare class FirewallSubnetMissingVPCEndpointViolation extends SpeakeasyBase {
    firewallSubnetId?: string;
    subnetAvailabilityZone?: string;
    subnetAvailabilityZoneId?: string;
    vpcId?: string;
}
