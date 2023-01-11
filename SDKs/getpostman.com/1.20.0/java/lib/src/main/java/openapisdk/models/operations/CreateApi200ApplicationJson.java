package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateApi200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("api")
    public CreateApi200ApplicationJsonApi api;
    public CreateApi200ApplicationJson withApi(CreateApi200ApplicationJsonApi api) {
        this.api = api;
        return this;
    }
}