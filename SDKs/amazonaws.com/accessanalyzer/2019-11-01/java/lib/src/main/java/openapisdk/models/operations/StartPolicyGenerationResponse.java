package openapisdk.models.operations;



public class StartPolicyGenerationResponse {
    public Object accessDeniedException;
    public StartPolicyGenerationResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public StartPolicyGenerationResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public StartPolicyGenerationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public StartPolicyGenerationResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public StartPolicyGenerationResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public openapisdk.models.shared.StartPolicyGenerationResponse startPolicyGenerationResponse;
    public StartPolicyGenerationResponse withStartPolicyGenerationResponse(openapisdk.models.shared.StartPolicyGenerationResponse startPolicyGenerationResponse) {
        this.startPolicyGenerationResponse = startPolicyGenerationResponse;
        return this;
    }
    public Long statusCode;
    public StartPolicyGenerationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public StartPolicyGenerationResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public StartPolicyGenerationResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}