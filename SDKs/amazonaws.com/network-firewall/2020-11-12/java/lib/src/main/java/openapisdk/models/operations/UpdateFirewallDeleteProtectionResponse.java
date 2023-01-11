package openapisdk.models.operations;



public class UpdateFirewallDeleteProtectionResponse {
    public String contentType;
    public UpdateFirewallDeleteProtectionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerError;
    public UpdateFirewallDeleteProtectionResponse withInternalServerError(Object internalServerError) {
        this.internalServerError = internalServerError;
        return this;
    }
    public Object invalidRequestException;
    public UpdateFirewallDeleteProtectionResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object invalidTokenException;
    public UpdateFirewallDeleteProtectionResponse withInvalidTokenException(Object invalidTokenException) {
        this.invalidTokenException = invalidTokenException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateFirewallDeleteProtectionResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object resourceOwnerCheckException;
    public UpdateFirewallDeleteProtectionResponse withResourceOwnerCheckException(Object resourceOwnerCheckException) {
        this.resourceOwnerCheckException = resourceOwnerCheckException;
        return this;
    }
    public Long statusCode;
    public UpdateFirewallDeleteProtectionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public UpdateFirewallDeleteProtectionResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public openapisdk.models.shared.UpdateFirewallDeleteProtectionResponse updateFirewallDeleteProtectionResponse;
    public UpdateFirewallDeleteProtectionResponse withUpdateFirewallDeleteProtectionResponse(openapisdk.models.shared.UpdateFirewallDeleteProtectionResponse updateFirewallDeleteProtectionResponse) {
        this.updateFirewallDeleteProtectionResponse = updateFirewallDeleteProtectionResponse;
        return this;
    }
}