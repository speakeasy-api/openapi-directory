package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class StartDeploymentResponse {
    @JsonProperty("OperationId")
    public String operationId;
    public StartDeploymentResponse withOperationId(String operationId) {
        this.operationId = operationId;
        return this;
    }
}