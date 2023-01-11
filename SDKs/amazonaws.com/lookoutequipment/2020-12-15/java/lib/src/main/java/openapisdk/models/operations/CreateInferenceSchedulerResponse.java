package openapisdk.models.operations;



public class CreateInferenceSchedulerResponse {
    public Object accessDeniedException;
    public CreateInferenceSchedulerResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public CreateInferenceSchedulerResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public CreateInferenceSchedulerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateInferenceSchedulerResponse createInferenceSchedulerResponse;
    public CreateInferenceSchedulerResponse withCreateInferenceSchedulerResponse(openapisdk.models.shared.CreateInferenceSchedulerResponse createInferenceSchedulerResponse) {
        this.createInferenceSchedulerResponse = createInferenceSchedulerResponse;
        return this;
    }
    public Object internalServerException;
    public CreateInferenceSchedulerResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public CreateInferenceSchedulerResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public CreateInferenceSchedulerResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public CreateInferenceSchedulerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public CreateInferenceSchedulerResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public CreateInferenceSchedulerResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}