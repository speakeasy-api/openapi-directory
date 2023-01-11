package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetSchema200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("schema")
    public GetSchema200ApplicationJsonSchema schema;
    public GetSchema200ApplicationJson withSchema(GetSchema200ApplicationJsonSchema schema) {
        this.schema = schema;
        return this;
    }
}