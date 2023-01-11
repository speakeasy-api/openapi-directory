package openapisdk.models.operations;



public class CreateFirewallPolicyResponse {
    public String contentType;
    public CreateFirewallPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateFirewallPolicyResponse createFirewallPolicyResponse;
    public CreateFirewallPolicyResponse withCreateFirewallPolicyResponse(openapisdk.models.shared.CreateFirewallPolicyResponse createFirewallPolicyResponse) {
        this.createFirewallPolicyResponse = createFirewallPolicyResponse;
        return this;
    }
    public Object insufficientCapacityException;
    public CreateFirewallPolicyResponse withInsufficientCapacityException(Object insufficientCapacityException) {
        this.insufficientCapacityException = insufficientCapacityException;
        return this;
    }
    public Object internalServerError;
    public CreateFirewallPolicyResponse withInternalServerError(Object internalServerError) {
        this.internalServerError = internalServerError;
        return this;
    }
    public Object invalidRequestException;
    public CreateFirewallPolicyResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object limitExceededException;
    public CreateFirewallPolicyResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Long statusCode;
    public CreateFirewallPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public CreateFirewallPolicyResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}