package openapisdk.models.operations;



public class ListFirewallRulesResponse {
    public Object accessDeniedException;
    public ListFirewallRulesResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ListFirewallRulesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServiceErrorException;
    public ListFirewallRulesResponse withInternalServiceErrorException(Object internalServiceErrorException) {
        this.internalServiceErrorException = internalServiceErrorException;
        return this;
    }
    public openapisdk.models.shared.ListFirewallRulesResponse listFirewallRulesResponse;
    public ListFirewallRulesResponse withListFirewallRulesResponse(openapisdk.models.shared.ListFirewallRulesResponse listFirewallRulesResponse) {
        this.listFirewallRulesResponse = listFirewallRulesResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ListFirewallRulesResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ListFirewallRulesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListFirewallRulesResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public ListFirewallRulesResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}