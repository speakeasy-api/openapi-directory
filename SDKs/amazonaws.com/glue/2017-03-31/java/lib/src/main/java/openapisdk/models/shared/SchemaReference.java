package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SchemaReference
 * An object that references a schema stored in the Glue Schema Registry.
**/
public class SchemaReference {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SchemaId")
    public SchemaId schemaId;
    public SchemaReference withSchemaId(SchemaId schemaId) {
        this.schemaId = schemaId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SchemaVersionId")
    public String schemaVersionId;
    public SchemaReference withSchemaVersionId(String schemaVersionId) {
        this.schemaVersionId = schemaVersionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SchemaVersionNumber")
    public Long schemaVersionNumber;
    public SchemaReference withSchemaVersionNumber(Long schemaVersionNumber) {
        this.schemaVersionNumber = schemaVersionNumber;
        return this;
    }
}