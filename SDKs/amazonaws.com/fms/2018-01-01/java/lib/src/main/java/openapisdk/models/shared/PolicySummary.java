package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PolicySummary
 * Details of the Firewall Manager policy. 
**/
public class PolicySummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DeleteUnusedFMManagedResources")
    public Boolean deleteUnusedFMManagedResources;
    public PolicySummary withDeleteUnusedFmManagedResources(Boolean deleteUnusedFMManagedResources) {
        this.deleteUnusedFMManagedResources = deleteUnusedFMManagedResources;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PolicyArn")
    public String policyArn;
    public PolicySummary withPolicyArn(String policyArn) {
        this.policyArn = policyArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PolicyId")
    public String policyId;
    public PolicySummary withPolicyId(String policyId) {
        this.policyId = policyId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PolicyName")
    public String policyName;
    public PolicySummary withPolicyName(String policyName) {
        this.policyName = policyName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RemediationEnabled")
    public Boolean remediationEnabled;
    public PolicySummary withRemediationEnabled(Boolean remediationEnabled) {
        this.remediationEnabled = remediationEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResourceType")
    public String resourceType;
    public PolicySummary withResourceType(String resourceType) {
        this.resourceType = resourceType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SecurityServiceType")
    public SecurityServiceTypeEnum securityServiceType;
    public PolicySummary withSecurityServiceType(SecurityServiceTypeEnum securityServiceType) {
        this.securityServiceType = securityServiceType;
        return this;
    }
}