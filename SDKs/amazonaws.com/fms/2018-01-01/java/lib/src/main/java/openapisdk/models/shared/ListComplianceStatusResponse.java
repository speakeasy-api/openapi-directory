package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListComplianceStatusResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListComplianceStatusResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PolicyComplianceStatusList")
    public PolicyComplianceStatus[] policyComplianceStatusList;
    public ListComplianceStatusResponse withPolicyComplianceStatusList(PolicyComplianceStatus[] policyComplianceStatusList) {
        this.policyComplianceStatusList = policyComplianceStatusList;
        return this;
    }
}