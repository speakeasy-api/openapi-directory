package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetPolicyResponse
 * The structure representing the <code>getPolicyResponse</code>.
**/
public class GetPolicyResponse {
    @JsonProperty("policy")
    public String policy;
    public GetPolicyResponse withPolicy(String policy) {
        this.policy = policy;
        return this;
    }
    @JsonProperty("revisionId")
    public String revisionId;
    public GetPolicyResponse withRevisionId(String revisionId) {
        this.revisionId = revisionId;
        return this;
    }
}