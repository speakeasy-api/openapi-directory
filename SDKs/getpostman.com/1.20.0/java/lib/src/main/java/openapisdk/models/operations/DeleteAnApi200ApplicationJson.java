package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeleteAnApi200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("api")
    public DeleteAnApi200ApplicationJsonApi api;
    public DeleteAnApi200ApplicationJson withApi(DeleteAnApi200ApplicationJsonApi api) {
        this.api = api;
        return this;
    }
}