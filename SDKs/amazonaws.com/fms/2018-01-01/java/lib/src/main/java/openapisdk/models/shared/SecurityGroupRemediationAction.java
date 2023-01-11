package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SecurityGroupRemediationAction
 * Remediation option for the rule specified in the <code>ViolationTarget</code>.
**/
public class SecurityGroupRemediationAction {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public SecurityGroupRemediationAction withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IsDefaultAction")
    public Boolean isDefaultAction;
    public SecurityGroupRemediationAction withIsDefaultAction(Boolean isDefaultAction) {
        this.isDefaultAction = isDefaultAction;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RemediationActionType")
    public RemediationActionTypeEnum remediationActionType;
    public SecurityGroupRemediationAction withRemediationActionType(RemediationActionTypeEnum remediationActionType) {
        this.remediationActionType = remediationActionType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RemediationResult")
    public SecurityGroupRuleDescription remediationResult;
    public SecurityGroupRemediationAction withRemediationResult(SecurityGroupRuleDescription remediationResult) {
        this.remediationResult = remediationResult;
        return this;
    }
}