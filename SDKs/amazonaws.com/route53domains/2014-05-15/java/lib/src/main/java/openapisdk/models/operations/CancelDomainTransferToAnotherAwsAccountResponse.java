package openapisdk.models.operations;



public class CancelDomainTransferToAnotherAwsAccountResponse {
    public openapisdk.models.shared.CancelDomainTransferToAnotherAwsAccountResponse cancelDomainTransferToAnotherAwsAccountResponse;
    public CancelDomainTransferToAnotherAwsAccountResponse withCancelDomainTransferToAnotherAwsAccountResponse(openapisdk.models.shared.CancelDomainTransferToAnotherAwsAccountResponse cancelDomainTransferToAnotherAwsAccountResponse) {
        this.cancelDomainTransferToAnotherAwsAccountResponse = cancelDomainTransferToAnotherAwsAccountResponse;
        return this;
    }
    public String contentType;
    public CancelDomainTransferToAnotherAwsAccountResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidInput;
    public CancelDomainTransferToAnotherAwsAccountResponse withInvalidInput(Object invalidInput) {
        this.invalidInput = invalidInput;
        return this;
    }
    public Object operationLimitExceeded;
    public CancelDomainTransferToAnotherAwsAccountResponse withOperationLimitExceeded(Object operationLimitExceeded) {
        this.operationLimitExceeded = operationLimitExceeded;
        return this;
    }
    public Long statusCode;
    public CancelDomainTransferToAnotherAwsAccountResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}