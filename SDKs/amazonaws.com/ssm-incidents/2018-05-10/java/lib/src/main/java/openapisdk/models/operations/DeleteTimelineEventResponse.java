package openapisdk.models.operations;



public class DeleteTimelineEventResponse {
    public Object accessDeniedException;
    public DeleteTimelineEventResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public DeleteTimelineEventResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteTimelineEventOutput;
    public DeleteTimelineEventResponse withDeleteTimelineEventOutput(java.util.Map<String, Object> deleteTimelineEventOutput) {
        this.deleteTimelineEventOutput = deleteTimelineEventOutput;
        return this;
    }
    public Object internalServerException;
    public DeleteTimelineEventResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Long statusCode;
    public DeleteTimelineEventResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DeleteTimelineEventResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public DeleteTimelineEventResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}