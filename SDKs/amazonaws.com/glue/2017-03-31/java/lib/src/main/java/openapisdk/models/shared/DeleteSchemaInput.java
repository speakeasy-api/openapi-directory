package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteSchemaInput {
    @JsonProperty("SchemaId")
    public SchemaId schemaId;
    public DeleteSchemaInput withSchemaId(SchemaId schemaId) {
        this.schemaId = schemaId;
        return this;
    }
}