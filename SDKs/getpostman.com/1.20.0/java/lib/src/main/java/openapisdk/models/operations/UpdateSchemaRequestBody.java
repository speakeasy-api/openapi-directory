package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateSchemaRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("schema")
    public UpdateSchemaRequestBodySchema schema;
    public UpdateSchemaRequestBody withSchema(UpdateSchemaRequestBodySchema schema) {
        this.schema = schema;
        return this;
    }
}