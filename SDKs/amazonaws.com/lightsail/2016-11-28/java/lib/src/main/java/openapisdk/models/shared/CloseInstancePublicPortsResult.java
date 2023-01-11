package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CloseInstancePublicPortsResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("operation")
    public Operation operation;
    public CloseInstancePublicPortsResult withOperation(Operation operation) {
        this.operation = operation;
        return this;
    }
}