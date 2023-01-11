package openapisdk.models.operations;



public class CreateSampleFindingsResponse {
    public Object accessDeniedException;
    public CreateSampleFindingsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public CreateSampleFindingsResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public CreateSampleFindingsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> createSampleFindingsResponse;
    public CreateSampleFindingsResponse withCreateSampleFindingsResponse(java.util.Map<String, Object> createSampleFindingsResponse) {
        this.createSampleFindingsResponse = createSampleFindingsResponse;
        return this;
    }
    public Object internalServerException;
    public CreateSampleFindingsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public CreateSampleFindingsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public CreateSampleFindingsResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public CreateSampleFindingsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public CreateSampleFindingsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public CreateSampleFindingsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}