package openapisdk.models.operations;



public class UpdateClassificationJobResponse {
    public Object accessDeniedException;
    public UpdateClassificationJobResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public UpdateClassificationJobResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public UpdateClassificationJobResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public UpdateClassificationJobResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateClassificationJobResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public UpdateClassificationJobResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public UpdateClassificationJobResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public UpdateClassificationJobResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public java.util.Map<String, Object> updateClassificationJobResponse;
    public UpdateClassificationJobResponse withUpdateClassificationJobResponse(java.util.Map<String, Object> updateClassificationJobResponse) {
        this.updateClassificationJobResponse = updateClassificationJobResponse;
        return this;
    }
    public Object validationException;
    public UpdateClassificationJobResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}