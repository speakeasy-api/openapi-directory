package openapisdk.models.operations;



public class RenewDomainResponse {
    public String contentType;
    public RenewDomainResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object duplicateRequest;
    public RenewDomainResponse withDuplicateRequest(Object duplicateRequest) {
        this.duplicateRequest = duplicateRequest;
        return this;
    }
    public Object invalidInput;
    public RenewDomainResponse withInvalidInput(Object invalidInput) {
        this.invalidInput = invalidInput;
        return this;
    }
    public Object operationLimitExceeded;
    public RenewDomainResponse withOperationLimitExceeded(Object operationLimitExceeded) {
        this.operationLimitExceeded = operationLimitExceeded;
        return this;
    }
    public openapisdk.models.shared.RenewDomainResponse renewDomainResponse;
    public RenewDomainResponse withRenewDomainResponse(openapisdk.models.shared.RenewDomainResponse renewDomainResponse) {
        this.renewDomainResponse = renewDomainResponse;
        return this;
    }
    public Long statusCode;
    public RenewDomainResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tldRulesViolation;
    public RenewDomainResponse withTldRulesViolation(Object tldRulesViolation) {
        this.tldRulesViolation = tldRulesViolation;
        return this;
    }
    public Object unsupportedTLD;
    public RenewDomainResponse withUnsupportedTld(Object unsupportedTLD) {
        this.unsupportedTLD = unsupportedTLD;
        return this;
    }
}