package openapisdk.models.operations;



public class UpdateFirewallDomainsResponse {
    public Object accessDeniedException;
    public UpdateFirewallDomainsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public UpdateFirewallDomainsResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public UpdateFirewallDomainsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServiceErrorException;
    public UpdateFirewallDomainsResponse withInternalServiceErrorException(Object internalServiceErrorException) {
        this.internalServiceErrorException = internalServiceErrorException;
        return this;
    }
    public Object limitExceededException;
    public UpdateFirewallDomainsResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateFirewallDomainsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateFirewallDomainsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public UpdateFirewallDomainsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public openapisdk.models.shared.UpdateFirewallDomainsResponse updateFirewallDomainsResponse;
    public UpdateFirewallDomainsResponse withUpdateFirewallDomainsResponse(openapisdk.models.shared.UpdateFirewallDomainsResponse updateFirewallDomainsResponse) {
        this.updateFirewallDomainsResponse = updateFirewallDomainsResponse;
        return this;
    }
    public Object validationException;
    public UpdateFirewallDomainsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}