package openapisdk.models.operations;



public class EnableMacieResponse {
    public Object accessDeniedException;
    public EnableMacieResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public EnableMacieResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public EnableMacieResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> enableMacieResponse;
    public EnableMacieResponse withEnableMacieResponse(java.util.Map<String, Object> enableMacieResponse) {
        this.enableMacieResponse = enableMacieResponse;
        return this;
    }
    public Object internalServerException;
    public EnableMacieResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public EnableMacieResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public EnableMacieResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public EnableMacieResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public EnableMacieResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public EnableMacieResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}