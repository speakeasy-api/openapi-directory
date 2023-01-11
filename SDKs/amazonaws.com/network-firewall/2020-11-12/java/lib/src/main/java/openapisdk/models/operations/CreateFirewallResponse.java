package openapisdk.models.operations;



public class CreateFirewallResponse {
    public String contentType;
    public CreateFirewallResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateFirewallResponse createFirewallResponse;
    public CreateFirewallResponse withCreateFirewallResponse(openapisdk.models.shared.CreateFirewallResponse createFirewallResponse) {
        this.createFirewallResponse = createFirewallResponse;
        return this;
    }
    public Object insufficientCapacityException;
    public CreateFirewallResponse withInsufficientCapacityException(Object insufficientCapacityException) {
        this.insufficientCapacityException = insufficientCapacityException;
        return this;
    }
    public Object internalServerError;
    public CreateFirewallResponse withInternalServerError(Object internalServerError) {
        this.internalServerError = internalServerError;
        return this;
    }
    public Object invalidOperationException;
    public CreateFirewallResponse withInvalidOperationException(Object invalidOperationException) {
        this.invalidOperationException = invalidOperationException;
        return this;
    }
    public Object invalidRequestException;
    public CreateFirewallResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object limitExceededException;
    public CreateFirewallResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Long statusCode;
    public CreateFirewallResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public CreateFirewallResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}