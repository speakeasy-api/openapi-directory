package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetRegistryOptions200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("options")
    public GetRegistryOptions200ApplicationJsonOptions options;
    public GetRegistryOptions200ApplicationJson withOptions(GetRegistryOptions200ApplicationJsonOptions options) {
        this.options = options;
        return this;
    }
}