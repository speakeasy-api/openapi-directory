package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RejectDomainTransferFromAnotherAwsAccountResponse
 * The RejectDomainTransferFromAnotherAwsAccount response includes the following element.
**/
public class RejectDomainTransferFromAnotherAwsAccountResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OperationId")
    public String operationId;
    public RejectDomainTransferFromAnotherAwsAccountResponse withOperationId(String operationId) {
        this.operationId = operationId;
        return this;
    }
}