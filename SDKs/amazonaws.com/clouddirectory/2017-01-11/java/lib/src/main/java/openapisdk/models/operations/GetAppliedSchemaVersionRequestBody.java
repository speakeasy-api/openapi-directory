package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetAppliedSchemaVersionRequestBody {
    @JsonProperty("SchemaArn")
    public String schemaArn;
    public GetAppliedSchemaVersionRequestBody withSchemaArn(String schemaArn) {
        this.schemaArn = schemaArn;
        return this;
    }
}