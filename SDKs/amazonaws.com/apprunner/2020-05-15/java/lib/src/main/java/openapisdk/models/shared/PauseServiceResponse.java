package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PauseServiceResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OperationId")
    public String operationId;
    public PauseServiceResponse withOperationId(String operationId) {
        this.operationId = operationId;
        return this;
    }
    @JsonProperty("Service")
    public Service service;
    public PauseServiceResponse withService(Service service) {
        this.service = service;
        return this;
    }
}