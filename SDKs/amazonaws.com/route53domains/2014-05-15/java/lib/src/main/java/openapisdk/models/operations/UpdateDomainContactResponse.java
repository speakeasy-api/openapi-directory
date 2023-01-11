package openapisdk.models.operations;



public class UpdateDomainContactResponse {
    public String contentType;
    public UpdateDomainContactResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object duplicateRequest;
    public UpdateDomainContactResponse withDuplicateRequest(Object duplicateRequest) {
        this.duplicateRequest = duplicateRequest;
        return this;
    }
    public Object invalidInput;
    public UpdateDomainContactResponse withInvalidInput(Object invalidInput) {
        this.invalidInput = invalidInput;
        return this;
    }
    public Object operationLimitExceeded;
    public UpdateDomainContactResponse withOperationLimitExceeded(Object operationLimitExceeded) {
        this.operationLimitExceeded = operationLimitExceeded;
        return this;
    }
    public Long statusCode;
    public UpdateDomainContactResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tldRulesViolation;
    public UpdateDomainContactResponse withTldRulesViolation(Object tldRulesViolation) {
        this.tldRulesViolation = tldRulesViolation;
        return this;
    }
    public Object unsupportedTLD;
    public UpdateDomainContactResponse withUnsupportedTld(Object unsupportedTLD) {
        this.unsupportedTLD = unsupportedTLD;
        return this;
    }
    public openapisdk.models.shared.UpdateDomainContactResponse updateDomainContactResponse;
    public UpdateDomainContactResponse withUpdateDomainContactResponse(openapisdk.models.shared.UpdateDomainContactResponse updateDomainContactResponse) {
        this.updateDomainContactResponse = updateDomainContactResponse;
        return this;
    }
}