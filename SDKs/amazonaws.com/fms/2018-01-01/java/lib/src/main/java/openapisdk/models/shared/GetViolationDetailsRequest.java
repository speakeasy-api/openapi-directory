package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetViolationDetailsRequest {
    @JsonProperty("MemberAccount")
    public String memberAccount;
    public GetViolationDetailsRequest withMemberAccount(String memberAccount) {
        this.memberAccount = memberAccount;
        return this;
    }
    @JsonProperty("PolicyId")
    public String policyId;
    public GetViolationDetailsRequest withPolicyId(String policyId) {
        this.policyId = policyId;
        return this;
    }
    @JsonProperty("ResourceId")
    public String resourceId;
    public GetViolationDetailsRequest withResourceId(String resourceId) {
        this.resourceId = resourceId;
        return this;
    }
    @JsonProperty("ResourceType")
    public String resourceType;
    public GetViolationDetailsRequest withResourceType(String resourceType) {
        this.resourceType = resourceType;
        return this;
    }
}