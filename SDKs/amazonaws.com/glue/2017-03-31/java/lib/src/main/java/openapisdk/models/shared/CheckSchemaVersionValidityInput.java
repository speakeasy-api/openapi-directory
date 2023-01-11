package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CheckSchemaVersionValidityInput {
    @JsonProperty("DataFormat")
    public DataFormatEnum dataFormat;
    public CheckSchemaVersionValidityInput withDataFormat(DataFormatEnum dataFormat) {
        this.dataFormat = dataFormat;
        return this;
    }
    @JsonProperty("SchemaDefinition")
    public String schemaDefinition;
    public CheckSchemaVersionValidityInput withSchemaDefinition(String schemaDefinition) {
        this.schemaDefinition = schemaDefinition;
        return this;
    }
}