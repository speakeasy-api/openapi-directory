import { SpeakeasyBase } from "../../../internal/utils";
import { PartialMatch } from "./partialmatch";
import { SecurityGroupRemediationAction } from "./securitygroupremediationaction";
/**
 * Violation detail for the rule violation in a security group when compared to the primary security group of the Firewall Manager policy.
 */
export declare class AwsVPCSecurityGroupViolation extends SpeakeasyBase {
    partialMatches?: PartialMatch[];
    possibleSecurityGroupRemediationActions?: SecurityGroupRemediationAction[];
    violationTarget?: string;
    violationTargetDescription?: string;
}
