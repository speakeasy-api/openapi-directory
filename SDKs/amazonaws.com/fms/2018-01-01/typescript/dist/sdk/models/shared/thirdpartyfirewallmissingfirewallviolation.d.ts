import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The violation details about a third-party firewall's subnet that doesn't have a Firewall Manager managed firewall in its VPC.
 */
export declare class ThirdPartyFirewallMissingFirewallViolation extends SpeakeasyBase {
    availabilityZone?: string;
    targetViolationReason?: string;
    vpc?: string;
    violationTarget?: string;
}
