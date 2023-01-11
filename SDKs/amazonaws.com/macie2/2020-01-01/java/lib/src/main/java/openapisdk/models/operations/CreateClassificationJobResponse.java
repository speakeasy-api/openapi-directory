package openapisdk.models.operations;



public class CreateClassificationJobResponse {
    public Object accessDeniedException;
    public CreateClassificationJobResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public CreateClassificationJobResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public CreateClassificationJobResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateClassificationJobResponse createClassificationJobResponse;
    public CreateClassificationJobResponse withCreateClassificationJobResponse(openapisdk.models.shared.CreateClassificationJobResponse createClassificationJobResponse) {
        this.createClassificationJobResponse = createClassificationJobResponse;
        return this;
    }
    public Object internalServerException;
    public CreateClassificationJobResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public CreateClassificationJobResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public CreateClassificationJobResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public CreateClassificationJobResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public CreateClassificationJobResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public CreateClassificationJobResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}