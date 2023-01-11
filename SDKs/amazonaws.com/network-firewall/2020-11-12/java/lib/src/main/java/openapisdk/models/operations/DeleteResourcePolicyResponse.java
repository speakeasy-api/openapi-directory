package openapisdk.models.operations;



public class DeleteResourcePolicyResponse {
    public String contentType;
    public DeleteResourcePolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteResourcePolicyResponse;
    public DeleteResourcePolicyResponse withDeleteResourcePolicyResponse(java.util.Map<String, Object> deleteResourcePolicyResponse) {
        this.deleteResourcePolicyResponse = deleteResourcePolicyResponse;
        return this;
    }
    public Object internalServerError;
    public DeleteResourcePolicyResponse withInternalServerError(Object internalServerError) {
        this.internalServerError = internalServerError;
        return this;
    }
    public Object invalidRequestException;
    public DeleteResourcePolicyResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
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