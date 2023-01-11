package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ParquetConfiguration
 * Contains the configuration information of the Parquet format.
**/
public class ParquetConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("schemaDefinition")
    public SchemaDefinition schemaDefinition;
    public ParquetConfiguration withSchemaDefinition(SchemaDefinition schemaDefinition) {
        this.schemaDefinition = schemaDefinition;
        return this;
    }
}