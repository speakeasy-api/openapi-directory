package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetLayerVersionPolicyResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Policy")
    public String policy;
    public GetLayerVersionPolicyResponse withPolicy(String policy) {
        this.policy = policy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RevisionId")
    public String revisionId;
    public GetLayerVersionPolicyResponse withRevisionId(String revisionId) {
        this.revisionId = revisionId;
        return this;
    }
}