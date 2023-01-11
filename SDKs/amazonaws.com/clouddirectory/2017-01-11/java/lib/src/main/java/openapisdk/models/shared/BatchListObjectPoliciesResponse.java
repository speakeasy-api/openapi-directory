package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BatchListObjectPoliciesResponse
 * Represents the output of a <a>ListObjectPolicies</a> response operation.
**/
public class BatchListObjectPoliciesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AttachedPolicyIds")
    public String[] attachedPolicyIds;
    public BatchListObjectPoliciesResponse withAttachedPolicyIds(String[] attachedPolicyIds) {
        this.attachedPolicyIds = attachedPolicyIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public BatchListObjectPoliciesResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}