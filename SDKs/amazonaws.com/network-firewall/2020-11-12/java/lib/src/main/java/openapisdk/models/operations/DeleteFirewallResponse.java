package openapisdk.models.operations;



public class DeleteFirewallResponse {
    public String contentType;
    public DeleteFirewallResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteFirewallResponse deleteFirewallResponse;
    public DeleteFirewallResponse withDeleteFirewallResponse(openapisdk.models.shared.DeleteFirewallResponse deleteFirewallResponse) {
        this.deleteFirewallResponse = deleteFirewallResponse;
        return this;
    }
    public Object internalServerError;
    public DeleteFirewallResponse withInternalServerError(Object internalServerError) {
        this.internalServerError = internalServerError;
        return this;
    }
    public Object invalidOperationException;
    public DeleteFirewallResponse withInvalidOperationException(Object invalidOperationException) {
        this.invalidOperationException = invalidOperationException;
        return this;
    }
    public Object invalidRequestException;
    public DeleteFirewallResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteFirewallResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteFirewallResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DeleteFirewallResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object unsupportedOperationException;
    public DeleteFirewallResponse withUnsupportedOperationException(Object unsupportedOperationException) {
        this.unsupportedOperationException = unsupportedOperationException;
        return this;
    }
}