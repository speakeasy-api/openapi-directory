package openapisdk.models.operations;



public class StopInferenceSchedulerResponse {
    public Object accessDeniedException;
    public StopInferenceSchedulerResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public StopInferenceSchedulerResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public StopInferenceSchedulerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public StopInferenceSchedulerResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public StopInferenceSchedulerResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public StopInferenceSchedulerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.StopInferenceSchedulerResponse stopInferenceSchedulerResponse;
    public StopInferenceSchedulerResponse withStopInferenceSchedulerResponse(openapisdk.models.shared.StopInferenceSchedulerResponse stopInferenceSchedulerResponse) {
        this.stopInferenceSchedulerResponse = stopInferenceSchedulerResponse;
        return this;
    }
    public Object throttlingException;
    public StopInferenceSchedulerResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public StopInferenceSchedulerResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}