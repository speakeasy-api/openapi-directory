package openapisdk.models.operations;



public class CreateTimelineEventResponse {
    public Object accessDeniedException;
    public CreateTimelineEventResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public CreateTimelineEventResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public CreateTimelineEventResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateTimelineEventOutput createTimelineEventOutput;
    public CreateTimelineEventResponse withCreateTimelineEventOutput(openapisdk.models.shared.CreateTimelineEventOutput createTimelineEventOutput) {
        this.createTimelineEventOutput = createTimelineEventOutput;
        return this;
    }
    public Object internalServerException;
    public CreateTimelineEventResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public CreateTimelineEventResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public CreateTimelineEventResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public CreateTimelineEventResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public CreateTimelineEventResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}