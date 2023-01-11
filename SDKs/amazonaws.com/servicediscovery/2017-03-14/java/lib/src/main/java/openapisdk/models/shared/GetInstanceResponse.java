package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetInstanceResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Instance")
    public Instance instance;
    public GetInstanceResponse withInstance(Instance instance) {
        this.instance = instance;
        return this;
    }
}