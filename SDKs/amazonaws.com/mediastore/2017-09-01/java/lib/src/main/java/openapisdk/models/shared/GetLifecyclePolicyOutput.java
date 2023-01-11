package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetLifecyclePolicyOutput {
    @JsonProperty("LifecyclePolicy")
    public String lifecyclePolicy;
    public GetLifecyclePolicyOutput withLifecyclePolicy(String lifecyclePolicy) {
        this.lifecyclePolicy = lifecyclePolicy;
        return this;
    }
}