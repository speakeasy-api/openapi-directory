package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateAnApi200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("api")
    public UpdateAnApi200ApplicationJsonApi api;
    public UpdateAnApi200ApplicationJson withApi(UpdateAnApi200ApplicationJsonApi api) {
        this.api = api;
        return this;
    }
}