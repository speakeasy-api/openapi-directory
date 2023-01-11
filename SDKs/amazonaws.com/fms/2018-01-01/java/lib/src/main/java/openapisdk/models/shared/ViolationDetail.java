package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ViolationDetail
 * Violations for a resource based on the specified Firewall Manager policy and Amazon Web Services account.
**/
public class ViolationDetail {
    @JsonProperty("MemberAccount")
    public String memberAccount;
    public ViolationDetail withMemberAccount(String memberAccount) {
        this.memberAccount = memberAccount;
        return this;
    }
    @JsonProperty("PolicyId")
    public String policyId;
    public ViolationDetail withPolicyId(String policyId) {
        this.policyId = policyId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResourceDescription")
    public String resourceDescription;
    public ViolationDetail withResourceDescription(String resourceDescription) {
        this.resourceDescription = resourceDescription;
        return this;
    }
    @JsonProperty("ResourceId")
    public String resourceId;
    public ViolationDetail withResourceId(String resourceId) {
        this.resourceId = resourceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResourceTags")
    public Tag[] resourceTags;
    public ViolationDetail withResourceTags(Tag[] resourceTags) {
        this.resourceTags = resourceTags;
        return this;
    }
    @JsonProperty("ResourceType")
    public String resourceType;
    public ViolationDetail withResourceType(String resourceType) {
        this.resourceType = resourceType;
        return this;
    }
    @JsonProperty("ResourceViolations")
    public ResourceViolation[] resourceViolations;
    public ViolationDetail withResourceViolations(ResourceViolation[] resourceViolations) {
        this.resourceViolations = resourceViolations;
        return this;
    }
}