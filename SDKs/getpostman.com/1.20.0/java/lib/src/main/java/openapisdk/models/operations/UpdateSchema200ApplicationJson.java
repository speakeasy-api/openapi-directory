package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateSchema200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("schema")
    public UpdateSchema200ApplicationJsonSchema schema;
    public UpdateSchema200ApplicationJson withSchema(UpdateSchema200ApplicationJsonSchema schema) {
        this.schema = schema;
        return this;
    }
}