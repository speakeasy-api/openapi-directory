package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CancelDomainTransferToAnotherAwsAccountResponse
 * The <code>CancelDomainTransferToAnotherAwsAccount</code> response includes the following element.
**/
public class CancelDomainTransferToAnotherAwsAccountResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OperationId")
    public String operationId;
    public CancelDomainTransferToAnotherAwsAccountResponse withOperationId(String operationId) {
        this.operationId = operationId;
        return this;
    }
}