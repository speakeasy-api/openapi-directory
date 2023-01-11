package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AcceptDomainTransferFromAnotherAwsAccountResponse
 * The AcceptDomainTransferFromAnotherAwsAccount response includes the following element.
**/
public class AcceptDomainTransferFromAnotherAwsAccountResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OperationId")
    public String operationId;
    public AcceptDomainTransferFromAnotherAwsAccountResponse withOperationId(String operationId) {
        this.operationId = operationId;
        return this;
    }
}