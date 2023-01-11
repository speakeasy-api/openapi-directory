package openapisdk.models.operations;



public class UpdateDomainNameserversResponse {
    public String contentType;
    public UpdateDomainNameserversResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object duplicateRequest;
    public UpdateDomainNameserversResponse withDuplicateRequest(Object duplicateRequest) {
        this.duplicateRequest = duplicateRequest;
        return this;
    }
    public Object invalidInput;
    public UpdateDomainNameserversResponse withInvalidInput(Object invalidInput) {
        this.invalidInput = invalidInput;
        return this;
    }
    public Object operationLimitExceeded;
    public UpdateDomainNameserversResponse withOperationLimitExceeded(Object operationLimitExceeded) {
        this.operationLimitExceeded = operationLimitExceeded;
        return this;
    }
    public Long statusCode;
    public UpdateDomainNameserversResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tldRulesViolation;
    public UpdateDomainNameserversResponse withTldRulesViolation(Object tldRulesViolation) {
        this.tldRulesViolation = tldRulesViolation;
        return this;
    }
    public Object unsupportedTLD;
    public UpdateDomainNameserversResponse withUnsupportedTld(Object unsupportedTLD) {
        this.unsupportedTLD = unsupportedTLD;
        return this;
    }
    public openapisdk.models.shared.UpdateDomainNameserversResponse updateDomainNameserversResponse;
    public UpdateDomainNameserversResponse withUpdateDomainNameserversResponse(openapisdk.models.shared.UpdateDomainNameserversResponse updateDomainNameserversResponse) {
        this.updateDomainNameserversResponse = updateDomainNameserversResponse;
        return this;
    }
}