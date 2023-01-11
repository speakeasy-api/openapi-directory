package openapisdk.models.operations;



public class UpdateFirewallDescriptionResponse {
    public String contentType;
    public UpdateFirewallDescriptionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerError;
    public UpdateFirewallDescriptionResponse withInternalServerError(Object internalServerError) {
        this.internalServerError = internalServerError;
        return this;
    }
    public Object invalidRequestException;
    public UpdateFirewallDescriptionResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object invalidTokenException;
    public UpdateFirewallDescriptionResponse withInvalidTokenException(Object invalidTokenException) {
        this.invalidTokenException = invalidTokenException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateFirewallDescriptionResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateFirewallDescriptionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public UpdateFirewallDescriptionResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public openapisdk.models.shared.UpdateFirewallDescriptionResponse updateFirewallDescriptionResponse;
    public UpdateFirewallDescriptionResponse withUpdateFirewallDescriptionResponse(openapisdk.models.shared.UpdateFirewallDescriptionResponse updateFirewallDescriptionResponse) {
        this.updateFirewallDescriptionResponse = updateFirewallDescriptionResponse;
        return this;
    }
}