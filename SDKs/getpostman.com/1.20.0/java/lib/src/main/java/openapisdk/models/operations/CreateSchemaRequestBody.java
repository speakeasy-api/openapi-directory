package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateSchemaRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("schema")
    public CreateSchemaRequestBodySchema schema;
    public CreateSchemaRequestBody withSchema(CreateSchemaRequestBodySchema schema) {
        this.schema = schema;
        return this;
    }
}