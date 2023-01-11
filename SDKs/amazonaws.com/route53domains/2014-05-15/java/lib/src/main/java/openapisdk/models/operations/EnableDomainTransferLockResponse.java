package openapisdk.models.operations;



public class EnableDomainTransferLockResponse {
    public String contentType;
    public EnableDomainTransferLockResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object duplicateRequest;
    public EnableDomainTransferLockResponse withDuplicateRequest(Object duplicateRequest) {
        this.duplicateRequest = duplicateRequest;
        return this;
    }
    public openapisdk.models.shared.EnableDomainTransferLockResponse enableDomainTransferLockResponse;
    public EnableDomainTransferLockResponse withEnableDomainTransferLockResponse(openapisdk.models.shared.EnableDomainTransferLockResponse enableDomainTransferLockResponse) {
        this.enableDomainTransferLockResponse = enableDomainTransferLockResponse;
        return this;
    }
    public Object invalidInput;
    public EnableDomainTransferLockResponse withInvalidInput(Object invalidInput) {
        this.invalidInput = invalidInput;
        return this;
    }
    public Object operationLimitExceeded;
    public EnableDomainTransferLockResponse withOperationLimitExceeded(Object operationLimitExceeded) {
        this.operationLimitExceeded = operationLimitExceeded;
        return this;
    }
    public Long statusCode;
    public EnableDomainTransferLockResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tldRulesViolation;
    public EnableDomainTransferLockResponse withTldRulesViolation(Object tldRulesViolation) {
        this.tldRulesViolation = tldRulesViolation;
        return this;
    }
    public Object unsupportedTLD;
    public EnableDomainTransferLockResponse withUnsupportedTld(Object unsupportedTLD) {
        this.unsupportedTLD = unsupportedTLD;
        return this;
    }
}