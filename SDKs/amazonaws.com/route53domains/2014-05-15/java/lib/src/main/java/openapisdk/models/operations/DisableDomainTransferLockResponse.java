package openapisdk.models.operations;



public class DisableDomainTransferLockResponse {
    public String contentType;
    public DisableDomainTransferLockResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DisableDomainTransferLockResponse disableDomainTransferLockResponse;
    public DisableDomainTransferLockResponse withDisableDomainTransferLockResponse(openapisdk.models.shared.DisableDomainTransferLockResponse disableDomainTransferLockResponse) {
        this.disableDomainTransferLockResponse = disableDomainTransferLockResponse;
        return this;
    }
    public Object duplicateRequest;
    public DisableDomainTransferLockResponse withDuplicateRequest(Object duplicateRequest) {
        this.duplicateRequest = duplicateRequest;
        return this;
    }
    public Object invalidInput;
    public DisableDomainTransferLockResponse withInvalidInput(Object invalidInput) {
        this.invalidInput = invalidInput;
        return this;
    }
    public Object operationLimitExceeded;
    public DisableDomainTransferLockResponse withOperationLimitExceeded(Object operationLimitExceeded) {
        this.operationLimitExceeded = operationLimitExceeded;
        return this;
    }
    public Long statusCode;
    public DisableDomainTransferLockResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tldRulesViolation;
    public DisableDomainTransferLockResponse withTldRulesViolation(Object tldRulesViolation) {
        this.tldRulesViolation = tldRulesViolation;
        return this;
    }
    public Object unsupportedTLD;
    public DisableDomainTransferLockResponse withUnsupportedTld(Object unsupportedTLD) {
        this.unsupportedTLD = unsupportedTLD;
        return this;
    }
}