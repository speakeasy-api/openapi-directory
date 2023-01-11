package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class OperationIdRequestBody {
    @JsonProperty("OperationId")
    public String operationId;
    public OperationIdRequestBody withOperationId(String operationId) {
        this.operationId = operationId;
        return this;
    }
}