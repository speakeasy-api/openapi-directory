package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SchemaDefinition
 * Information needed to define a schema.
**/
public class SchemaDefinition {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("columns")
    public Column[] columns;
    public SchemaDefinition withColumns(Column[] columns) {
        this.columns = columns;
        return this;
    }
}