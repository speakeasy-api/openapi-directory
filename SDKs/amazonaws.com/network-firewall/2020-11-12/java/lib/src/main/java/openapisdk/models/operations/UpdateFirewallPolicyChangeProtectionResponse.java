package openapisdk.models.operations;



public class UpdateFirewallPolicyChangeProtectionResponse {
    public String contentType;
    public UpdateFirewallPolicyChangeProtectionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerError;
    public UpdateFirewallPolicyChangeProtectionResponse withInternalServerError(Object internalServerError) {
        this.internalServerError = internalServerError;
        return this;
    }
    public Object invalidRequestException;
    public UpdateFirewallPolicyChangeProtectionResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object invalidTokenException;
    public UpdateFirewallPolicyChangeProtectionResponse withInvalidTokenException(Object invalidTokenException) {
        this.invalidTokenException = invalidTokenException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateFirewallPolicyChangeProtectionResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object resourceOwnerCheckException;
    public UpdateFirewallPolicyChangeProtectionResponse withResourceOwnerCheckException(Object resourceOwnerCheckException) {
        this.resourceOwnerCheckException = resourceOwnerCheckException;
        return this;
    }
    public Long statusCode;
    public UpdateFirewallPolicyChangeProtectionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public UpdateFirewallPolicyChangeProtectionResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public openapisdk.models.shared.UpdateFirewallPolicyChangeProtectionResponse updateFirewallPolicyChangeProtectionResponse;
    public UpdateFirewallPolicyChangeProtectionResponse withUpdateFirewallPolicyChangeProtectionResponse(openapisdk.models.shared.UpdateFirewallPolicyChangeProtectionResponse updateFirewallPolicyChangeProtectionResponse) {
        this.updateFirewallPolicyChangeProtectionResponse = updateFirewallPolicyChangeProtectionResponse;
        return this;
    }
}