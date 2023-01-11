package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DnsRuleGroupLimitExceededViolation
 * The VPC that Firewall Manager was applying a DNS Fireall policy to reached the limit for associated DNS Firewall rule groups. Firewall Manager tried to associate another rule group with the VPC and failed due to the limit. 
**/
public class DnsRuleGroupLimitExceededViolation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NumberOfRuleGroupsAlreadyAssociated")
    public Long numberOfRuleGroupsAlreadyAssociated;
    public DnsRuleGroupLimitExceededViolation withNumberOfRuleGroupsAlreadyAssociated(Long numberOfRuleGroupsAlreadyAssociated) {
        this.numberOfRuleGroupsAlreadyAssociated = numberOfRuleGroupsAlreadyAssociated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ViolationTarget")
    public String violationTarget;
    public DnsRuleGroupLimitExceededViolation withViolationTarget(String violationTarget) {
        this.violationTarget = violationTarget;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ViolationTargetDescription")
    public String violationTargetDescription;
    public DnsRuleGroupLimitExceededViolation withViolationTargetDescription(String violationTargetDescription) {
        this.violationTargetDescription = violationTargetDescription;
        return this;
    }
}