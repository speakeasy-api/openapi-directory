package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateServiceResponse {
    @JsonProperty("OperationId")
    public String operationId;
    public UpdateServiceResponse withOperationId(String operationId) {
        this.operationId = operationId;
        return this;
    }
    @JsonProperty("Service")
    public Service service;
    public UpdateServiceResponse withService(Service service) {
        this.service = service;
        return this;
    }
}