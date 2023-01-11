package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetComplianceDetailRequest {
    @JsonProperty("MemberAccount")
    public String memberAccount;
    public GetComplianceDetailRequest withMemberAccount(String memberAccount) {
        this.memberAccount = memberAccount;
        return this;
    }
    @JsonProperty("PolicyId")
    public String policyId;
    public GetComplianceDetailRequest withPolicyId(String policyId) {
        this.policyId = policyId;
        return this;
    }
}