package openapisdk.models.operations;



public class ListFirewallDomainsResponse {
    public Object accessDeniedException;
    public ListFirewallDomainsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ListFirewallDomainsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServiceErrorException;
    public ListFirewallDomainsResponse withInternalServiceErrorException(Object internalServiceErrorException) {
        this.internalServiceErrorException = internalServiceErrorException;
        return this;
    }
    public openapisdk.models.shared.ListFirewallDomainsResponse listFirewallDomainsResponse;
    public ListFirewallDomainsResponse withListFirewallDomainsResponse(openapisdk.models.shared.ListFirewallDomainsResponse listFirewallDomainsResponse) {
        this.listFirewallDomainsResponse = listFirewallDomainsResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ListFirewallDomainsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ListFirewallDomainsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListFirewallDomainsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public ListFirewallDomainsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}