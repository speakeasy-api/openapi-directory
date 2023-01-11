package openapisdk.models.operations;



public class GetStreamResponse {
    public Object accessDeniedException;
    public GetStreamResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object channelNotBroadcasting;
    public GetStreamResponse withChannelNotBroadcasting(Object channelNotBroadcasting) {
        this.channelNotBroadcasting = channelNotBroadcasting;
        return this;
    }
    public String contentType;
    public GetStreamResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetStreamResponse getStreamResponse;
    public GetStreamResponse withGetStreamResponse(openapisdk.models.shared.GetStreamResponse getStreamResponse) {
        this.getStreamResponse = getStreamResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public GetStreamResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetStreamResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public GetStreamResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}