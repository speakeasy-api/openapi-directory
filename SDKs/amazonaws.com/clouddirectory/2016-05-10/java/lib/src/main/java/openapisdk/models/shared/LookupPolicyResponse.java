package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class LookupPolicyResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public LookupPolicyResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PolicyToPathList")
    public PolicyToPath[] policyToPathList;
    public LookupPolicyResponse withPolicyToPathList(PolicyToPath[] policyToPathList) {
        this.policyToPathList = policyToPathList;
        return this;
    }
}