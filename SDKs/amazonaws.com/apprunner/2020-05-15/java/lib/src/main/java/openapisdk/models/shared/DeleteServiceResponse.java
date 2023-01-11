package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteServiceResponse {
    @JsonProperty("OperationId")
    public String operationId;
    public DeleteServiceResponse withOperationId(String operationId) {
        this.operationId = operationId;
        return this;
    }
    @JsonProperty("Service")
    public Service service;
    public DeleteServiceResponse withService(Service service) {
        this.service = service;
        return this;
    }
}