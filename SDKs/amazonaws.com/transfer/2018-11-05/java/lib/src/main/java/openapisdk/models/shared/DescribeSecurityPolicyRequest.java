package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeSecurityPolicyRequest {
    @JsonProperty("SecurityPolicyName")
    public String securityPolicyName;
    public DescribeSecurityPolicyRequest withSecurityPolicyName(String securityPolicyName) {
        this.securityPolicyName = securityPolicyName;
        return this;
    }
}