import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The violation details for a third-party firewall for an Availability Zone that's missing the Firewall Manager managed subnet.
 */
export declare class ThirdPartyFirewallMissingSubnetViolation extends SpeakeasyBase {
    availabilityZone?: string;
    targetViolationReason?: string;
    vpc?: string;
    violationTarget?: string;
}
