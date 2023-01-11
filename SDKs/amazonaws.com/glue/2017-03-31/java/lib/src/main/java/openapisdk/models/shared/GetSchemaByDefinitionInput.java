package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetSchemaByDefinitionInput {
    @JsonProperty("SchemaDefinition")
    public String schemaDefinition;
    public GetSchemaByDefinitionInput withSchemaDefinition(String schemaDefinition) {
        this.schemaDefinition = schemaDefinition;
        return this;
    }
    @JsonProperty("SchemaId")
    public SchemaId schemaId;
    public GetSchemaByDefinitionInput withSchemaId(SchemaId schemaId) {
        this.schemaId = schemaId;
        return this;
    }
}