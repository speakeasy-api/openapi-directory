package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * TransferDomainResponse
 * The TransferDomain response includes the following element.
**/
public class TransferDomainResponse {
    @JsonProperty("OperationId")
    public String operationId;
    public TransferDomainResponse withOperationId(String operationId) {
        this.operationId = operationId;
        return this;
    }
}