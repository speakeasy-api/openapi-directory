package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class OpenInstancePublicPortsResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("operation")
    public Operation operation;
    public OpenInstancePublicPortsResult withOperation(Operation operation) {
        this.operation = operation;
        return this;
    }
}