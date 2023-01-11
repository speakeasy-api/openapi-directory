package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateServiceResponse {
    @JsonProperty("OperationId")
    public String operationId;
    public CreateServiceResponse withOperationId(String operationId) {
        this.operationId = operationId;
        return this;
    }
    @JsonProperty("Service")
    public Service service;
    public CreateServiceResponse withService(Service service) {
        this.service = service;
        return this;
    }
}