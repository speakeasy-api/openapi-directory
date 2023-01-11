package openapisdk.models.operations;



public class StartHumanLoopResponse {
    public Object conflictException;
    public StartHumanLoopResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public StartHumanLoopResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public StartHumanLoopResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public StartHumanLoopResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public openapisdk.models.shared.StartHumanLoopResponse startHumanLoopResponse;
    public StartHumanLoopResponse withStartHumanLoopResponse(openapisdk.models.shared.StartHumanLoopResponse startHumanLoopResponse) {
        this.startHumanLoopResponse = startHumanLoopResponse;
        return this;
    }
    public Long statusCode;
    public StartHumanLoopResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public StartHumanLoopResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public StartHumanLoopResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}