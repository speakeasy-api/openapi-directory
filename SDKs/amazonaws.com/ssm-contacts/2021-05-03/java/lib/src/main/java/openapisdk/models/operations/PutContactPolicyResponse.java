package openapisdk.models.operations;



public class PutContactPolicyResponse {
    public Object accessDeniedException;
    public PutContactPolicyResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public PutContactPolicyResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public PutContactPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public PutContactPolicyResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public java.util.Map<String, Object> putContactPolicyResult;
    public PutContactPolicyResponse withPutContactPolicyResult(java.util.Map<String, Object> putContactPolicyResult) {
        this.putContactPolicyResult = putContactPolicyResult;
        return this;
    }
    public Object resourceNotFoundException;
    public PutContactPolicyResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public PutContactPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public PutContactPolicyResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public PutContactPolicyResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}