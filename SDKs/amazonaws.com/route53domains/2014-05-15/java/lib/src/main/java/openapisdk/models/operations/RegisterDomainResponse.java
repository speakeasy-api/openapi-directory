package openapisdk.models.operations;



public class RegisterDomainResponse {
    public String contentType;
    public RegisterDomainResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object domainLimitExceeded;
    public RegisterDomainResponse withDomainLimitExceeded(Object domainLimitExceeded) {
        this.domainLimitExceeded = domainLimitExceeded;
        return this;
    }
    public Object duplicateRequest;
    public RegisterDomainResponse withDuplicateRequest(Object duplicateRequest) {
        this.duplicateRequest = duplicateRequest;
        return this;
    }
    public Object invalidInput;
    public RegisterDomainResponse withInvalidInput(Object invalidInput) {
        this.invalidInput = invalidInput;
        return this;
    }
    public Object operationLimitExceeded;
    public RegisterDomainResponse withOperationLimitExceeded(Object operationLimitExceeded) {
        this.operationLimitExceeded = operationLimitExceeded;
        return this;
    }
    public openapisdk.models.shared.RegisterDomainResponse registerDomainResponse;
    public RegisterDomainResponse withRegisterDomainResponse(openapisdk.models.shared.RegisterDomainResponse registerDomainResponse) {
        this.registerDomainResponse = registerDomainResponse;
        return this;
    }
    public Long statusCode;
    public RegisterDomainResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tldRulesViolation;
    public RegisterDomainResponse withTldRulesViolation(Object tldRulesViolation) {
        this.tldRulesViolation = tldRulesViolation;
        return this;
    }
    public Object unsupportedTLD;
    public RegisterDomainResponse withUnsupportedTld(Object unsupportedTLD) {
        this.unsupportedTLD = unsupportedTLD;
        return this;
    }
}