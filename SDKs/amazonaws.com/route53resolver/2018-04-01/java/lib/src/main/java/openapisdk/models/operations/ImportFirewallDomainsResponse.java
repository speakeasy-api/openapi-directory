package openapisdk.models.operations;



public class ImportFirewallDomainsResponse {
    public Object accessDeniedException;
    public ImportFirewallDomainsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public ImportFirewallDomainsResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public ImportFirewallDomainsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ImportFirewallDomainsResponse importFirewallDomainsResponse;
    public ImportFirewallDomainsResponse withImportFirewallDomainsResponse(openapisdk.models.shared.ImportFirewallDomainsResponse importFirewallDomainsResponse) {
        this.importFirewallDomainsResponse = importFirewallDomainsResponse;
        return this;
    }
    public Object internalServiceErrorException;
    public ImportFirewallDomainsResponse withInternalServiceErrorException(Object internalServiceErrorException) {
        this.internalServiceErrorException = internalServiceErrorException;
        return this;
    }
    public Object limitExceededException;
    public ImportFirewallDomainsResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object resourceNotFoundException;
    public ImportFirewallDomainsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ImportFirewallDomainsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ImportFirewallDomainsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public ImportFirewallDomainsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}