import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The violation details for a third-party firewall that's not associated with an Firewall Manager managed route table.
 */
export declare class ThirdPartyFirewallMissingExpectedRouteTableViolation extends SpeakeasyBase {
    availabilityZone?: string;
    currentRouteTable?: string;
    expectedRouteTable?: string;
    vpc?: string;
    violationTarget?: string;
}
