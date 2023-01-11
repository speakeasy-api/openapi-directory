package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DisableDomainTransferLockResponse
 * The DisableDomainTransferLock response includes the following element.
**/
public class DisableDomainTransferLockResponse {
    @JsonProperty("OperationId")
    public String operationId;
    public DisableDomainTransferLockResponse withOperationId(String operationId) {
        this.operationId = operationId;
        return this;
    }
}