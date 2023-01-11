package openapisdk.models.operations;



public class TransferDomainToAnotherAwsAccountResponse {
    public String contentType;
    public TransferDomainToAnotherAwsAccountResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object duplicateRequest;
    public TransferDomainToAnotherAwsAccountResponse withDuplicateRequest(Object duplicateRequest) {
        this.duplicateRequest = duplicateRequest;
        return this;
    }
    public Object invalidInput;
    public TransferDomainToAnotherAwsAccountResponse withInvalidInput(Object invalidInput) {
        this.invalidInput = invalidInput;
        return this;
    }
    public Object operationLimitExceeded;
    public TransferDomainToAnotherAwsAccountResponse withOperationLimitExceeded(Object operationLimitExceeded) {
        this.operationLimitExceeded = operationLimitExceeded;
        return this;
    }
    public Long statusCode;
    public TransferDomainToAnotherAwsAccountResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TransferDomainToAnotherAwsAccountResponse transferDomainToAnotherAwsAccountResponse;
    public TransferDomainToAnotherAwsAccountResponse withTransferDomainToAnotherAwsAccountResponse(openapisdk.models.shared.TransferDomainToAnotherAwsAccountResponse transferDomainToAnotherAwsAccountResponse) {
        this.transferDomainToAnotherAwsAccountResponse = transferDomainToAnotherAwsAccountResponse;
        return this;
    }
}