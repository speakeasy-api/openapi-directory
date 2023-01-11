package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeSecurityPolicyResponse {
    @JsonProperty("SecurityPolicy")
    public DescribedSecurityPolicy securityPolicy;
    public DescribeSecurityPolicyResponse withSecurityPolicy(DescribedSecurityPolicy securityPolicy) {
        this.securityPolicy = securityPolicy;
        return this;
    }
}