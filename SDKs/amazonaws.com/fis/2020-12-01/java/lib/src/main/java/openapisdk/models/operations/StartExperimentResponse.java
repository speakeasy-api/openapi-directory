package openapisdk.models.operations;



public class StartExperimentResponse {
    public Object conflictException;
    public StartExperimentResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public StartExperimentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object resourceNotFoundException;
    public StartExperimentResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public StartExperimentResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public openapisdk.models.shared.StartExperimentResponse startExperimentResponse;
    public StartExperimentResponse withStartExperimentResponse(openapisdk.models.shared.StartExperimentResponse startExperimentResponse) {
        this.startExperimentResponse = startExperimentResponse;
        return this;
    }
    public Long statusCode;
    public StartExperimentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public StartExperimentResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}