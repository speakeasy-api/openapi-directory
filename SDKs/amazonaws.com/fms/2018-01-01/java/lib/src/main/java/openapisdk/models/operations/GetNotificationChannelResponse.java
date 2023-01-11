package openapisdk.models.operations;



public class GetNotificationChannelResponse {
    public String contentType;
    public GetNotificationChannelResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetNotificationChannelResponse getNotificationChannelResponse;
    public GetNotificationChannelResponse withGetNotificationChannelResponse(openapisdk.models.shared.GetNotificationChannelResponse getNotificationChannelResponse) {
        this.getNotificationChannelResponse = getNotificationChannelResponse;
        return this;
    }
    public Object internalErrorException;
    public GetNotificationChannelResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public Object invalidOperationException;
    public GetNotificationChannelResponse withInvalidOperationException(Object invalidOperationException) {
        this.invalidOperationException = invalidOperationException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetNotificationChannelResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetNotificationChannelResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}