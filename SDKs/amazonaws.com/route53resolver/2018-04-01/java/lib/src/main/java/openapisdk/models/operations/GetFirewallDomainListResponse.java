package openapisdk.models.operations;



public class GetFirewallDomainListResponse {
    public Object accessDeniedException;
    public GetFirewallDomainListResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public GetFirewallDomainListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetFirewallDomainListResponse getFirewallDomainListResponse;
    public GetFirewallDomainListResponse withGetFirewallDomainListResponse(openapisdk.models.shared.GetFirewallDomainListResponse getFirewallDomainListResponse) {
        this.getFirewallDomainListResponse = getFirewallDomainListResponse;
        return this;
    }
    public Object internalServiceErrorException;
    public GetFirewallDomainListResponse withInternalServiceErrorException(Object internalServiceErrorException) {
        this.internalServiceErrorException = internalServiceErrorException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetFirewallDomainListResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetFirewallDomainListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public GetFirewallDomainListResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}