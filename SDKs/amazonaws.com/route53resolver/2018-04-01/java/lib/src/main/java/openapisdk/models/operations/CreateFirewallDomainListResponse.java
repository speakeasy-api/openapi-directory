package openapisdk.models.operations;



public class CreateFirewallDomainListResponse {
    public Object accessDeniedException;
    public CreateFirewallDomainListResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public CreateFirewallDomainListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateFirewallDomainListResponse createFirewallDomainListResponse;
    public CreateFirewallDomainListResponse withCreateFirewallDomainListResponse(openapisdk.models.shared.CreateFirewallDomainListResponse createFirewallDomainListResponse) {
        this.createFirewallDomainListResponse = createFirewallDomainListResponse;
        return this;
    }
    public Object internalServiceErrorException;
    public CreateFirewallDomainListResponse withInternalServiceErrorException(Object internalServiceErrorException) {
        this.internalServiceErrorException = internalServiceErrorException;
        return this;
    }
    public Object limitExceededException;
    public CreateFirewallDomainListResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Long statusCode;
    public CreateFirewallDomainListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public CreateFirewallDomainListResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public CreateFirewallDomainListResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}