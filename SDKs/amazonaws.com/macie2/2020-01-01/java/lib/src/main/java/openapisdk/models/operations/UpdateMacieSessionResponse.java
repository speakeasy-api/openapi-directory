package openapisdk.models.operations;



public class UpdateMacieSessionResponse {
    public Object accessDeniedException;
    public UpdateMacieSessionResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public UpdateMacieSessionResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public UpdateMacieSessionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public UpdateMacieSessionResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateMacieSessionResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public UpdateMacieSessionResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public UpdateMacieSessionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public UpdateMacieSessionResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public java.util.Map<String, Object> updateMacieSessionResponse;
    public UpdateMacieSessionResponse withUpdateMacieSessionResponse(java.util.Map<String, Object> updateMacieSessionResponse) {
        this.updateMacieSessionResponse = updateMacieSessionResponse;
        return this;
    }
    public Object validationException;
    public UpdateMacieSessionResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}