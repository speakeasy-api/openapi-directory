package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsVpcSecurityGroupViolation
 * Violation detail for the rule violation in a security group when compared to the primary security group of the Firewall Manager policy.
**/
public class AwsVpcSecurityGroupViolation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PartialMatches")
    public PartialMatch[] partialMatches;
    public AwsVpcSecurityGroupViolation withPartialMatches(PartialMatch[] partialMatches) {
        this.partialMatches = partialMatches;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PossibleSecurityGroupRemediationActions")
    public SecurityGroupRemediationAction[] possibleSecurityGroupRemediationActions;
    public AwsVpcSecurityGroupViolation withPossibleSecurityGroupRemediationActions(SecurityGroupRemediationAction[] possibleSecurityGroupRemediationActions) {
        this.possibleSecurityGroupRemediationActions = possibleSecurityGroupRemediationActions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ViolationTarget")
    public String violationTarget;
    public AwsVpcSecurityGroupViolation withViolationTarget(String violationTarget) {
        this.violationTarget = violationTarget;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ViolationTargetDescription")
    public String violationTargetDescription;
    public AwsVpcSecurityGroupViolation withViolationTargetDescription(String violationTargetDescription) {
        this.violationTargetDescription = violationTargetDescription;
        return this;
    }
}