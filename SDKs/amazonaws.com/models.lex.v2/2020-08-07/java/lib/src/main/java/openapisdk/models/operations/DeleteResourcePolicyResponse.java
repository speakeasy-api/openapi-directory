package openapisdk.models.operations;



public class DeleteResourcePolicyResponse {
    public String contentType;
    public DeleteResourcePolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteResourcePolicyResponse deleteResourcePolicyResponse;
    public DeleteResourcePolicyResponse withDeleteResourcePolicyResponse(openapisdk.models.shared.DeleteResourcePolicyResponse deleteResourcePolicyResponse) {
        this.deleteResourcePolicyResponse = deleteResourcePolicyResponse;
        return this;
    }
    public Object internalServerException;
    public DeleteResourcePolicyResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object preconditionFailedException;
    public DeleteResourcePolicyResponse withPreconditionFailedException(Object preconditionFailedException) {
        this.preconditionFailedException = preconditionFailedException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteResourcePolicyResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteResourcePolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DeleteResourcePolicyResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}