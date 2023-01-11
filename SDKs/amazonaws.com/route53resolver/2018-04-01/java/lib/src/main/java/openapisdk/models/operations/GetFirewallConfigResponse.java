package openapisdk.models.operations;



public class GetFirewallConfigResponse {
    public Object accessDeniedException;
    public GetFirewallConfigResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public GetFirewallConfigResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetFirewallConfigResponse getFirewallConfigResponse;
    public GetFirewallConfigResponse withGetFirewallConfigResponse(openapisdk.models.shared.GetFirewallConfigResponse getFirewallConfigResponse) {
        this.getFirewallConfigResponse = getFirewallConfigResponse;
        return this;
    }
    public Object internalServiceErrorException;
    public GetFirewallConfigResponse withInternalServiceErrorException(Object internalServiceErrorException) {
        this.internalServiceErrorException = internalServiceErrorException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetFirewallConfigResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetFirewallConfigResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public GetFirewallConfigResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public GetFirewallConfigResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}