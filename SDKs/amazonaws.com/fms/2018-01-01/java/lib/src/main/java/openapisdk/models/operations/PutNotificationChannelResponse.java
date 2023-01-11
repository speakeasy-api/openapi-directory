package openapisdk.models.operations;



public class PutNotificationChannelResponse {
    public String contentType;
    public PutNotificationChannelResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalErrorException;
    public PutNotificationChannelResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public Object invalidOperationException;
    public PutNotificationChannelResponse withInvalidOperationException(Object invalidOperationException) {
        this.invalidOperationException = invalidOperationException;
        return this;
    }
    public Object resourceNotFoundException;
    public PutNotificationChannelResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public PutNotificationChannelResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}