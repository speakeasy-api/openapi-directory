package openapisdk.models.operations;



public class EnableDomainAutoRenewResponse {
    public String contentType;
    public EnableDomainAutoRenewResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> enableDomainAutoRenewResponse;
    public EnableDomainAutoRenewResponse withEnableDomainAutoRenewResponse(java.util.Map<String, Object> enableDomainAutoRenewResponse) {
        this.enableDomainAutoRenewResponse = enableDomainAutoRenewResponse;
        return this;
    }
    public Object invalidInput;
    public EnableDomainAutoRenewResponse withInvalidInput(Object invalidInput) {
        this.invalidInput = invalidInput;
        return this;
    }
    public Long statusCode;
    public EnableDomainAutoRenewResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tldRulesViolation;
    public EnableDomainAutoRenewResponse withTldRulesViolation(Object tldRulesViolation) {
        this.tldRulesViolation = tldRulesViolation;
        return this;
    }
    public Object unsupportedTLD;
    public EnableDomainAutoRenewResponse withUnsupportedTld(Object unsupportedTLD) {
        this.unsupportedTLD = unsupportedTLD;
        return this;
    }
}