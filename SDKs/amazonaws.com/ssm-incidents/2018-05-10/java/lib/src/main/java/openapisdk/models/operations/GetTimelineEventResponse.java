package openapisdk.models.operations;



public class GetTimelineEventResponse {
    public Object accessDeniedException;
    public GetTimelineEventResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public GetTimelineEventResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetTimelineEventOutput getTimelineEventOutput;
    public GetTimelineEventResponse withGetTimelineEventOutput(openapisdk.models.shared.GetTimelineEventOutput getTimelineEventOutput) {
        this.getTimelineEventOutput = getTimelineEventOutput;
        return this;
    }
    public Object internalServerException;
    public GetTimelineEventResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetTimelineEventResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetTimelineEventResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public GetTimelineEventResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public GetTimelineEventResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}