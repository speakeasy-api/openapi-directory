package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteSchemaVersionsInput {
    @JsonProperty("SchemaId")
    public SchemaId schemaId;
    public DeleteSchemaVersionsInput withSchemaId(SchemaId schemaId) {
        this.schemaId = schemaId;
        return this;
    }
    @JsonProperty("Versions")
    public String versions;
    public DeleteSchemaVersionsInput withVersions(String versions) {
        this.versions = versions;
        return this;
    }
}