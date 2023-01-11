package openapisdk.models.operations;



public class UpdateDomainContactPrivacyResponse {
    public String contentType;
    public UpdateDomainContactPrivacyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object duplicateRequest;
    public UpdateDomainContactPrivacyResponse withDuplicateRequest(Object duplicateRequest) {
        this.duplicateRequest = duplicateRequest;
        return this;
    }
    public Object invalidInput;
    public UpdateDomainContactPrivacyResponse withInvalidInput(Object invalidInput) {
        this.invalidInput = invalidInput;
        return this;
    }
    public Object operationLimitExceeded;
    public UpdateDomainContactPrivacyResponse withOperationLimitExceeded(Object operationLimitExceeded) {
        this.operationLimitExceeded = operationLimitExceeded;
        return this;
    }
    public Long statusCode;
    public UpdateDomainContactPrivacyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tldRulesViolation;
    public UpdateDomainContactPrivacyResponse withTldRulesViolation(Object tldRulesViolation) {
        this.tldRulesViolation = tldRulesViolation;
        return this;
    }
    public Object unsupportedTLD;
    public UpdateDomainContactPrivacyResponse withUnsupportedTld(Object unsupportedTLD) {
        this.unsupportedTLD = unsupportedTLD;
        return this;
    }
    public openapisdk.models.shared.UpdateDomainContactPrivacyResponse updateDomainContactPrivacyResponse;
    public UpdateDomainContactPrivacyResponse withUpdateDomainContactPrivacyResponse(openapisdk.models.shared.UpdateDomainContactPrivacyResponse updateDomainContactPrivacyResponse) {
        this.updateDomainContactPrivacyResponse = updateDomainContactPrivacyResponse;
        return this;
    }
}