package openapisdk.models.operations;



public class ListFirewallConfigsResponse {
    public Object accessDeniedException;
    public ListFirewallConfigsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ListFirewallConfigsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServiceErrorException;
    public ListFirewallConfigsResponse withInternalServiceErrorException(Object internalServiceErrorException) {
        this.internalServiceErrorException = internalServiceErrorException;
        return this;
    }
    public openapisdk.models.shared.ListFirewallConfigsResponse listFirewallConfigsResponse;
    public ListFirewallConfigsResponse withListFirewallConfigsResponse(openapisdk.models.shared.ListFirewallConfigsResponse listFirewallConfigsResponse) {
        this.listFirewallConfigsResponse = listFirewallConfigsResponse;
        return this;
    }
    public Long statusCode;
    public ListFirewallConfigsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListFirewallConfigsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public ListFirewallConfigsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}