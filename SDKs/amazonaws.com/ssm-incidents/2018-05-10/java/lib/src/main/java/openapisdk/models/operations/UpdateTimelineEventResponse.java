package openapisdk.models.operations;



public class UpdateTimelineEventResponse {
    public Object accessDeniedException;
    public UpdateTimelineEventResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public UpdateTimelineEventResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public UpdateTimelineEventResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public UpdateTimelineEventResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateTimelineEventResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateTimelineEventResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public UpdateTimelineEventResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public java.util.Map<String, Object> updateTimelineEventOutput;
    public UpdateTimelineEventResponse withUpdateTimelineEventOutput(java.util.Map<String, Object> updateTimelineEventOutput) {
        this.updateTimelineEventOutput = updateTimelineEventOutput;
        return this;
    }
    public Object validationException;
    public UpdateTimelineEventResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}