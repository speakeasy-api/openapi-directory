package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * RegisterDomainResponse
 * The RegisterDomain response includes the following element.
**/
public class RegisterDomainResponse {
    @JsonProperty("OperationId")
    public String operationId;
    public RegisterDomainResponse withOperationId(String operationId) {
        this.operationId = operationId;
        return this;
    }
}