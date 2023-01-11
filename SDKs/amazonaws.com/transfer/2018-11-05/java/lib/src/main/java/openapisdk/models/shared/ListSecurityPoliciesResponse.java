package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListSecurityPoliciesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListSecurityPoliciesResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonProperty("SecurityPolicyNames")
    public String[] securityPolicyNames;
    public ListSecurityPoliciesResponse withSecurityPolicyNames(String[] securityPolicyNames) {
        this.securityPolicyNames = securityPolicyNames;
        return this;
    }
}