package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BatchLookupPolicyResponse
 * Represents the output of a <a>LookupPolicy</a> response operation.
**/
public class BatchLookupPolicyResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public BatchLookupPolicyResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PolicyToPathList")
    public PolicyToPath[] policyToPathList;
    public BatchLookupPolicyResponse withPolicyToPathList(PolicyToPath[] policyToPathList) {
        this.policyToPathList = policyToPathList;
        return this;
    }
}