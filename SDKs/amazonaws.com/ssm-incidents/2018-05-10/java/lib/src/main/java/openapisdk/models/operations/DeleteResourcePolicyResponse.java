package openapisdk.models.operations;



public class DeleteResourcePolicyResponse {
    public Object accessDeniedException;
    public DeleteResourcePolicyResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public DeleteResourcePolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteResourcePolicyOutput;
    public DeleteResourcePolicyResponse withDeleteResourcePolicyOutput(java.util.Map<String, Object> deleteResourcePolicyOutput) {
        this.deleteResourcePolicyOutput = deleteResourcePolicyOutput;
        return this;
    }
    public Object internalServerException;
    public DeleteResourcePolicyResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
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
    public Object validationException;
    public DeleteResourcePolicyResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}