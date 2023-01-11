package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetSchemaInput {
    @JsonProperty("SchemaId")
    public SchemaId schemaId;
    public GetSchemaInput withSchemaId(SchemaId schemaId) {
        this.schemaId = schemaId;
        return this;
    }
}