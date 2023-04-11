import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains details about the firewall subnet that violates the policy scope.
 */
export declare class FirewallSubnetIsOutOfScopeViolation extends SpeakeasyBase {
    firewallSubnetId?: string;
    subnetAvailabilityZone?: string;
    subnetAvailabilityZoneId?: string;
    vpcEndpointId?: string;
    vpcId?: string;
}
