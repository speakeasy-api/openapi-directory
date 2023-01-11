package openapisdk.models.operations;



public class DeleteFirewallPolicyResponse {
    public String contentType;
    public DeleteFirewallPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteFirewallPolicyResponse deleteFirewallPolicyResponse;
    public DeleteFirewallPolicyResponse withDeleteFirewallPolicyResponse(openapisdk.models.shared.DeleteFirewallPolicyResponse deleteFirewallPolicyResponse) {
        this.deleteFirewallPolicyResponse = deleteFirewallPolicyResponse;
        return this;
    }
    public Object internalServerError;
    public DeleteFirewallPolicyResponse withInternalServerError(Object internalServerError) {
        this.internalServerError = internalServerError;
        return this;
    }
    public Object invalidOperationException;
    public DeleteFirewallPolicyResponse withInvalidOperationException(Object invalidOperationException) {
        this.invalidOperationException = invalidOperationException;
        return this;
    }
    public Object invalidRequestException;
    public DeleteFirewallPolicyResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteFirewallPolicyResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteFirewallPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DeleteFirewallPolicyResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object unsupportedOperationException;
    public DeleteFirewallPolicyResponse withUnsupportedOperationException(Object unsupportedOperationException) {
        this.unsupportedOperationException = unsupportedOperationException;
        return this;
    }
}