package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * EnableDomainTransferLockResponse
 * The EnableDomainTransferLock response includes the following elements.
**/
public class EnableDomainTransferLockResponse {
    @JsonProperty("OperationId")
    public String operationId;
    public EnableDomainTransferLockResponse withOperationId(String operationId) {
        this.operationId = operationId;
        return this;
    }
}