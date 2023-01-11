package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetEvictionPolicy200ApplicationJson {
    @JsonProperty("eviction_policy")
    public GetEvictionPolicy200ApplicationJsonEvictionPolicyEnum evictionPolicy;
    public GetEvictionPolicy200ApplicationJson withEvictionPolicy(GetEvictionPolicy200ApplicationJsonEvictionPolicyEnum evictionPolicy) {
        this.evictionPolicy = evictionPolicy;
        return this;
    }
}