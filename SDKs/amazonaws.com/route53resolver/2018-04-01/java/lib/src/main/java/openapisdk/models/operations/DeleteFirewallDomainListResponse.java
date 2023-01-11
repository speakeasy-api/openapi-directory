package openapisdk.models.operations;



public class DeleteFirewallDomainListResponse {
    public Object accessDeniedException;
    public DeleteFirewallDomainListResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public DeleteFirewallDomainListResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public DeleteFirewallDomainListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteFirewallDomainListResponse deleteFirewallDomainListResponse;
    public DeleteFirewallDomainListResponse withDeleteFirewallDomainListResponse(openapisdk.models.shared.DeleteFirewallDomainListResponse deleteFirewallDomainListResponse) {
        this.deleteFirewallDomainListResponse = deleteFirewallDomainListResponse;
        return this;
    }
    public Object internalServiceErrorException;
    public DeleteFirewallDomainListResponse withInternalServiceErrorException(Object internalServiceErrorException) {
        this.internalServiceErrorException = internalServiceErrorException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteFirewallDomainListResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteFirewallDomainListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DeleteFirewallDomainListResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}