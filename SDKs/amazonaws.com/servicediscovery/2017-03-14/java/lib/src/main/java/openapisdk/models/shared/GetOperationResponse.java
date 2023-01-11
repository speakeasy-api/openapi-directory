package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetOperationResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Operation")
    public Operation operation;
    public GetOperationResponse withOperation(Operation operation) {
        this.operation = operation;
        return this;
    }
}