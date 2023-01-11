package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetComplianceDetailResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PolicyComplianceDetail")
    public PolicyComplianceDetail policyComplianceDetail;
    public GetComplianceDetailResponse withPolicyComplianceDetail(PolicyComplianceDetail policyComplianceDetail) {
        this.policyComplianceDetail = policyComplianceDetail;
        return this;
    }
}