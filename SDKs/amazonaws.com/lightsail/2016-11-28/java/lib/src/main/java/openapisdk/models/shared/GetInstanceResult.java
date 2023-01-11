package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetInstanceResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instance")
    public Instance instance;
    public GetInstanceResult withInstance(Instance instance) {
        this.instance = instance;
        return this;
    }
}