package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TransferDomainToAnotherAwsAccountResponse
 * The <code>TransferDomainToAnotherAwsAccount</code> response includes the following elements.
**/
public class TransferDomainToAnotherAwsAccountResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OperationId")
    public String operationId;
    public TransferDomainToAnotherAwsAccountResponse withOperationId(String operationId) {
        this.operationId = operationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Password")
    public String password;
    public TransferDomainToAnotherAwsAccountResponse withPassword(String password) {
        this.password = password;
        return this;
    }
}