package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetSchemaCreationStatusResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("details")
    public String details;
    public GetSchemaCreationStatusResponse withDetails(String details) {
        this.details = details;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public SchemaStatusEnum status;
    public GetSchemaCreationStatusResponse withStatus(SchemaStatusEnum status) {
        this.status = status;
        return this;
    }
}