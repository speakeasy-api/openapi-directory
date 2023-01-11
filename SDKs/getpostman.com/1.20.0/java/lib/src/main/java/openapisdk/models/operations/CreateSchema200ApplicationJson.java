package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateSchema200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("schema")
    public CreateSchema200ApplicationJsonSchema schema;
    public CreateSchema200ApplicationJson withSchema(CreateSchema200ApplicationJsonSchema schema) {
        this.schema = schema;
        return this;
    }
}