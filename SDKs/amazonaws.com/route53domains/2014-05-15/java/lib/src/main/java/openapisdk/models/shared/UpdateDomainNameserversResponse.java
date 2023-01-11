package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * UpdateDomainNameserversResponse
 * The UpdateDomainNameservers response includes the following element.
**/
public class UpdateDomainNameserversResponse {
    @JsonProperty("OperationId")
    public String operationId;
    public UpdateDomainNameserversResponse withOperationId(String operationId) {
        this.operationId = operationId;
        return this;
    }
}