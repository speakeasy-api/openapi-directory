package openapisdk.models.operations;



public class UpdateFirewallPolicyResponse {
    public String contentType;
    public UpdateFirewallPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerError;
    public UpdateFirewallPolicyResponse withInternalServerError(Object internalServerError) {
        this.internalServerError = internalServerError;
        return this;
    }
    public Object invalidRequestException;
    public UpdateFirewallPolicyResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object invalidTokenException;
    public UpdateFirewallPolicyResponse withInvalidTokenException(Object invalidTokenException) {
        this.invalidTokenException = invalidTokenException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateFirewallPolicyResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateFirewallPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public UpdateFirewallPolicyResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public openapisdk.models.shared.UpdateFirewallPolicyResponse updateFirewallPolicyResponse;
    public UpdateFirewallPolicyResponse withUpdateFirewallPolicyResponse(openapisdk.models.shared.UpdateFirewallPolicyResponse updateFirewallPolicyResponse) {
        this.updateFirewallPolicyResponse = updateFirewallPolicyResponse;
        return this;
    }
}