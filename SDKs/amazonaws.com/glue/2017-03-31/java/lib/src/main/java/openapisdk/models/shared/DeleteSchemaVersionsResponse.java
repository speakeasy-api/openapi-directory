package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeleteSchemaVersionsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SchemaVersionErrors")
    public SchemaVersionErrorItem[] schemaVersionErrors;
    public DeleteSchemaVersionsResponse withSchemaVersionErrors(SchemaVersionErrorItem[] schemaVersionErrors) {
        this.schemaVersionErrors = schemaVersionErrors;
        return this;
    }
}