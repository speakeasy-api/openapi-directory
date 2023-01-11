package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class RenewDomainResponse {
    @JsonProperty("OperationId")
    public String operationId;
    public RenewDomainResponse withOperationId(String operationId) {
        this.operationId = operationId;
        return this;
    }
}