package openapisdk.models.operations;



public class ListTimelineEventsResponse {
    public Object accessDeniedException;
    public ListTimelineEventsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ListTimelineEventsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListTimelineEventsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public openapisdk.models.shared.ListTimelineEventsOutput listTimelineEventsOutput;
    public ListTimelineEventsResponse withListTimelineEventsOutput(openapisdk.models.shared.ListTimelineEventsOutput listTimelineEventsOutput) {
        this.listTimelineEventsOutput = listTimelineEventsOutput;
        return this;
    }
    public Long statusCode;
    public ListTimelineEventsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListTimelineEventsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public ListTimelineEventsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}