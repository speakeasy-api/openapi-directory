package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListObjectPoliciesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AttachedPolicyIds")
    public String[] attachedPolicyIds;
    public ListObjectPoliciesResponse withAttachedPolicyIds(String[] attachedPolicyIds) {
        this.attachedPolicyIds = attachedPolicyIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListObjectPoliciesResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}