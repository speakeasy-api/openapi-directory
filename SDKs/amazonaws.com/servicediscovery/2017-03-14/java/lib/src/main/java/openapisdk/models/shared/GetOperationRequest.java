package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetOperationRequest {
    @JsonProperty("OperationId")
    public String operationId;
    public GetOperationRequest withOperationId(String operationId) {
        this.operationId = operationId;
        return this;
    }
}