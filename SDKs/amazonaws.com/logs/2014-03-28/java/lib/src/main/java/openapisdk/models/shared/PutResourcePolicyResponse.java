package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutResourcePolicyResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourcePolicy")
    public ResourcePolicy resourcePolicy;
    public PutResourcePolicyResponse withResourcePolicy(ResourcePolicy resourcePolicy) {
        this.resourcePolicy = resourcePolicy;
        return this;
    }
}