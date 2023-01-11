package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetSchemaVersionInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SchemaId")
    public SchemaId schemaId;
    public GetSchemaVersionInput withSchemaId(SchemaId schemaId) {
        this.schemaId = schemaId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SchemaVersionId")
    public String schemaVersionId;
    public GetSchemaVersionInput withSchemaVersionId(String schemaVersionId) {
        this.schemaVersionId = schemaVersionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SchemaVersionNumber")
    public SchemaVersionNumber schemaVersionNumber;
    public GetSchemaVersionInput withSchemaVersionNumber(SchemaVersionNumber schemaVersionNumber) {
        this.schemaVersionNumber = schemaVersionNumber;
        return this;
    }
}