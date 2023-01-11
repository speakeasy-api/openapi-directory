package openapisdk.models.operations;



public class ListFirewallDomainListsResponse {
    public Object accessDeniedException;
    public ListFirewallDomainListsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ListFirewallDomainListsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServiceErrorException;
    public ListFirewallDomainListsResponse withInternalServiceErrorException(Object internalServiceErrorException) {
        this.internalServiceErrorException = internalServiceErrorException;
        return this;
    }
    public openapisdk.models.shared.ListFirewallDomainListsResponse listFirewallDomainListsResponse;
    public ListFirewallDomainListsResponse withListFirewallDomainListsResponse(openapisdk.models.shared.ListFirewallDomainListsResponse listFirewallDomainListsResponse) {
        this.listFirewallDomainListsResponse = listFirewallDomainListsResponse;
        return this;
    }
    public Long statusCode;
    public ListFirewallDomainListsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListFirewallDomainListsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public ListFirewallDomainListsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}