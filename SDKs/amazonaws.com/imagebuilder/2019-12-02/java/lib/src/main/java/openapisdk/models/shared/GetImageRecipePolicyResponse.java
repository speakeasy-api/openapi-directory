package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetImageRecipePolicyResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("policy")
    public String policy;
    public GetImageRecipePolicyResponse withPolicy(String policy) {
        this.policy = policy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestId")
    public String requestId;
    public GetImageRecipePolicyResponse withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
}