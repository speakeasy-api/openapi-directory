package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * UpdateDomainContactResponse
 * The UpdateDomainContact response includes the following element.
**/
public class UpdateDomainContactResponse {
    @JsonProperty("OperationId")
    public String operationId;
    public UpdateDomainContactResponse withOperationId(String operationId) {
        this.operationId = operationId;
        return this;
    }
}