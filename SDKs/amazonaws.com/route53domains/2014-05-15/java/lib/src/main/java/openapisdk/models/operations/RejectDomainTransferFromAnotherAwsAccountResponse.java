package openapisdk.models.operations;



public class RejectDomainTransferFromAnotherAwsAccountResponse {
    public String contentType;
    public RejectDomainTransferFromAnotherAwsAccountResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidInput;
    public RejectDomainTransferFromAnotherAwsAccountResponse withInvalidInput(Object invalidInput) {
        this.invalidInput = invalidInput;
        return this;
    }
    public Object operationLimitExceeded;
    public RejectDomainTransferFromAnotherAwsAccountResponse withOperationLimitExceeded(Object operationLimitExceeded) {
        this.operationLimitExceeded = operationLimitExceeded;
        return this;
    }
    public openapisdk.models.shared.RejectDomainTransferFromAnotherAwsAccountResponse rejectDomainTransferFromAnotherAwsAccountResponse;
    public RejectDomainTransferFromAnotherAwsAccountResponse withRejectDomainTransferFromAnotherAwsAccountResponse(openapisdk.models.shared.RejectDomainTransferFromAnotherAwsAccountResponse rejectDomainTransferFromAnotherAwsAccountResponse) {
        this.rejectDomainTransferFromAnotherAwsAccountResponse = rejectDomainTransferFromAnotherAwsAccountResponse;
        return this;
    }
    public Long statusCode;
    public RejectDomainTransferFromAnotherAwsAccountResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}