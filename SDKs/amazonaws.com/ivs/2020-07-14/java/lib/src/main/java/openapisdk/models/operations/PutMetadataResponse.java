package openapisdk.models.operations;



public class PutMetadataResponse {
    public Object accessDeniedException;
    public PutMetadataResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object channelNotBroadcasting;
    public PutMetadataResponse withChannelNotBroadcasting(Object channelNotBroadcasting) {
        this.channelNotBroadcasting = channelNotBroadcasting;
        return this;
    }
    public String contentType;
    public PutMetadataResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object resourceNotFoundException;
    public PutMetadataResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public PutMetadataResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public PutMetadataResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public PutMetadataResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}