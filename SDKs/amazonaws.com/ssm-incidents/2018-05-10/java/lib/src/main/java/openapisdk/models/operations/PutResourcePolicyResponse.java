package openapisdk.models.operations;



public class PutResourcePolicyResponse {
    public Object accessDeniedException;
    public PutResourcePolicyResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public PutResourcePolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public PutResourcePolicyResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public openapisdk.models.shared.PutResourcePolicyOutput putResourcePolicyOutput;
    public PutResourcePolicyResponse withPutResourcePolicyOutput(openapisdk.models.shared.PutResourcePolicyOutput putResourcePolicyOutput) {
        this.putResourcePolicyOutput = putResourcePolicyOutput;
        return this;
    }
    public Object resourceNotFoundException;
    public PutResourcePolicyResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public PutResourcePolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public PutResourcePolicyResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public PutResourcePolicyResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}