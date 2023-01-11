package openapisdk.models.operations;



public class StopStreamResponse {
    public Object accessDeniedException;
    public StopStreamResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object channelNotBroadcasting;
    public StopStreamResponse withChannelNotBroadcasting(Object channelNotBroadcasting) {
        this.channelNotBroadcasting = channelNotBroadcasting;
        return this;
    }
    public String contentType;
    public StopStreamResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object resourceNotFoundException;
    public StopStreamResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public StopStreamResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> stopStreamResponse;
    public StopStreamResponse withStopStreamResponse(java.util.Map<String, Object> stopStreamResponse) {
        this.stopStreamResponse = stopStreamResponse;
        return this;
    }
    public Object streamUnavailable;
    public StopStreamResponse withStreamUnavailable(Object streamUnavailable) {
        this.streamUnavailable = streamUnavailable;
        return this;
    }
    public Object validationException;
    public StopStreamResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}