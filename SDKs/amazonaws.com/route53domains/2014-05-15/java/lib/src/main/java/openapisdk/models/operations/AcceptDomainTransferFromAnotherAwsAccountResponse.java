package openapisdk.models.operations;



public class AcceptDomainTransferFromAnotherAwsAccountResponse {
    public openapisdk.models.shared.AcceptDomainTransferFromAnotherAwsAccountResponse acceptDomainTransferFromAnotherAwsAccountResponse;
    public AcceptDomainTransferFromAnotherAwsAccountResponse withAcceptDomainTransferFromAnotherAwsAccountResponse(openapisdk.models.shared.AcceptDomainTransferFromAnotherAwsAccountResponse acceptDomainTransferFromAnotherAwsAccountResponse) {
        this.acceptDomainTransferFromAnotherAwsAccountResponse = acceptDomainTransferFromAnotherAwsAccountResponse;
        return this;
    }
    public String contentType;
    public AcceptDomainTransferFromAnotherAwsAccountResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object domainLimitExceeded;
    public AcceptDomainTransferFromAnotherAwsAccountResponse withDomainLimitExceeded(Object domainLimitExceeded) {
        this.domainLimitExceeded = domainLimitExceeded;
        return this;
    }
    public Object invalidInput;
    public AcceptDomainTransferFromAnotherAwsAccountResponse withInvalidInput(Object invalidInput) {
        this.invalidInput = invalidInput;
        return this;
    }
    public Object operationLimitExceeded;
    public AcceptDomainTransferFromAnotherAwsAccountResponse withOperationLimitExceeded(Object operationLimitExceeded) {
        this.operationLimitExceeded = operationLimitExceeded;
        return this;
    }
    public Long statusCode;
    public AcceptDomainTransferFromAnotherAwsAccountResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}