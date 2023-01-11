package openapisdk.models.operations;



public class UpdateFirewallConfigResponse {
    public Object accessDeniedException;
    public UpdateFirewallConfigResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public UpdateFirewallConfigResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServiceErrorException;
    public UpdateFirewallConfigResponse withInternalServiceErrorException(Object internalServiceErrorException) {
        this.internalServiceErrorException = internalServiceErrorException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateFirewallConfigResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateFirewallConfigResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public UpdateFirewallConfigResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public openapisdk.models.shared.UpdateFirewallConfigResponse updateFirewallConfigResponse;
    public UpdateFirewallConfigResponse withUpdateFirewallConfigResponse(openapisdk.models.shared.UpdateFirewallConfigResponse updateFirewallConfigResponse) {
        this.updateFirewallConfigResponse = updateFirewallConfigResponse;
        return this;
    }
    public Object validationException;
    public UpdateFirewallConfigResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}