package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class StartSchemaExtensionResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SchemaExtensionId")
    public String schemaExtensionId;
    public StartSchemaExtensionResult withSchemaExtensionId(String schemaExtensionId) {
        this.schemaExtensionId = schemaExtensionId;
        return this;
    }
}