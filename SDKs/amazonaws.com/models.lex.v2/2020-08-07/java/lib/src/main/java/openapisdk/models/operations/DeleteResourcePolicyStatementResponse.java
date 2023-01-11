package openapisdk.models.operations;



public class DeleteResourcePolicyStatementResponse {
    public String contentType;
    public DeleteResourcePolicyStatementResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteResourcePolicyStatementResponse deleteResourcePolicyStatementResponse;
    public DeleteResourcePolicyStatementResponse withDeleteResourcePolicyStatementResponse(openapisdk.models.shared.DeleteResourcePolicyStatementResponse deleteResourcePolicyStatementResponse) {
        this.deleteResourcePolicyStatementResponse = deleteResourcePolicyStatementResponse;
        return this;
    }
    public Object internalServerException;
    public DeleteResourcePolicyStatementResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object preconditionFailedException;
    public DeleteResourcePolicyStatementResponse withPreconditionFailedException(Object preconditionFailedException) {
        this.preconditionFailedException = preconditionFailedException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteResourcePolicyStatementResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteResourcePolicyStatementResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DeleteResourcePolicyStatementResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}