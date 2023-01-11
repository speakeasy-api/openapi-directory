package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeregisterInstanceResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OperationId")
    public String operationId;
    public DeregisterInstanceResponse withOperationId(String operationId) {
        this.operationId = operationId;
        return this;
    }
}