package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutSchemaVersionMetadataInput {
    @JsonProperty("MetadataKeyValue")
    public MetadataKeyValuePair metadataKeyValue;
    public PutSchemaVersionMetadataInput withMetadataKeyValue(MetadataKeyValuePair metadataKeyValue) {
        this.metadataKeyValue = metadataKeyValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SchemaId")
    public SchemaId schemaId;
    public PutSchemaVersionMetadataInput withSchemaId(SchemaId schemaId) {
        this.schemaId = schemaId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SchemaVersionId")
    public String schemaVersionId;
    public PutSchemaVersionMetadataInput withSchemaVersionId(String schemaVersionId) {
        this.schemaVersionId = schemaVersionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SchemaVersionNumber")
    public SchemaVersionNumber schemaVersionNumber;
    public PutSchemaVersionMetadataInput withSchemaVersionNumber(SchemaVersionNumber schemaVersionNumber) {
        this.schemaVersionNumber = schemaVersionNumber;
        return this;
    }
}