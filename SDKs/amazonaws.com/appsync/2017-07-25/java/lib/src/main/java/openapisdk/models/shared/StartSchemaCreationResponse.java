package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class StartSchemaCreationResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public SchemaStatusEnum status;
    public StartSchemaCreationResponse withStatus(SchemaStatusEnum status) {
        this.status = status;
        return this;
    }
}