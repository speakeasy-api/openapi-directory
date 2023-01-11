package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateSchemaInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Compatibility")
    public CompatibilityEnum compatibility;
    public CreateSchemaInput withCompatibility(CompatibilityEnum compatibility) {
        this.compatibility = compatibility;
        return this;
    }
    @JsonProperty("DataFormat")
    public DataFormatEnum dataFormat;
    public CreateSchemaInput withDataFormat(DataFormatEnum dataFormat) {
        this.dataFormat = dataFormat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public CreateSchemaInput withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RegistryId")
    public RegistryId registryId;
    public CreateSchemaInput withRegistryId(RegistryId registryId) {
        this.registryId = registryId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SchemaDefinition")
    public String schemaDefinition;
    public CreateSchemaInput withSchemaDefinition(String schemaDefinition) {
        this.schemaDefinition = schemaDefinition;
        return this;
    }
    @JsonProperty("SchemaName")
    public String schemaName;
    public CreateSchemaInput withSchemaName(String schemaName) {
        this.schemaName = schemaName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public java.util.Map<String, String> tags;
    public CreateSchemaInput withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
}