package openapisdk.models.operations;



public class CancelPolicyGenerationResponse {
    public Object accessDeniedException;
    public CancelPolicyGenerationResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public java.util.Map<String, Object> cancelPolicyGenerationResponse;
    public CancelPolicyGenerationResponse withCancelPolicyGenerationResponse(java.util.Map<String, Object> cancelPolicyGenerationResponse) {
        this.cancelPolicyGenerationResponse = cancelPolicyGenerationResponse;
        return this;
    }
    public String contentType;
    public CancelPolicyGenerationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public CancelPolicyGenerationResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Long statusCode;
    public CancelPolicyGenerationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public CancelPolicyGenerationResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public CancelPolicyGenerationResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}