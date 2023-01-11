package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateSchemaResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SchemaArn")
    public String schemaArn;
    public CreateSchemaResponse withSchemaArn(String schemaArn) {
        this.schemaArn = schemaArn;
        return this;
    }
}