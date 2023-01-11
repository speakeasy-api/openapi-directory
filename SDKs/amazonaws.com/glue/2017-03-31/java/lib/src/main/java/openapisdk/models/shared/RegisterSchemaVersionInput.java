package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class RegisterSchemaVersionInput {
    @JsonProperty("SchemaDefinition")
    public String schemaDefinition;
    public RegisterSchemaVersionInput withSchemaDefinition(String schemaDefinition) {
        this.schemaDefinition = schemaDefinition;
        return this;
    }
    @JsonProperty("SchemaId")
    public SchemaId schemaId;
    public RegisterSchemaVersionInput withSchemaId(SchemaId schemaId) {
        this.schemaId = schemaId;
        return this;
    }
}