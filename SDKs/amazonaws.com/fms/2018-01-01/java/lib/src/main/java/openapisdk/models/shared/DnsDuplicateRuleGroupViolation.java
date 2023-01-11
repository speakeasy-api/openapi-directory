package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DnsDuplicateRuleGroupViolation
 * A DNS Firewall rule group that Firewall Manager tried to associate with a VPC is already associated with the VPC and can't be associated again. 
**/
public class DnsDuplicateRuleGroupViolation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ViolationTarget")
    public String violationTarget;
    public DnsDuplicateRuleGroupViolation withViolationTarget(String violationTarget) {
        this.violationTarget = violationTarget;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ViolationTargetDescription")
    public String violationTargetDescription;
    public DnsDuplicateRuleGroupViolation withViolationTargetDescription(String violationTargetDescription) {
        this.violationTargetDescription = violationTargetDescription;
        return this;
    }
}