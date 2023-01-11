package openapisdk.models.operations;



public class PostToConnectionResponse {
    public String contentType;
    public PostToConnectionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object forbiddenException;
    public PostToConnectionResponse withForbiddenException(Object forbiddenException) {
        this.forbiddenException = forbiddenException;
        return this;
    }
    public Object goneException;
    public PostToConnectionResponse withGoneException(Object goneException) {
        this.goneException = goneException;
        return this;
    }
    public Object limitExceededException;
    public PostToConnectionResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object payloadTooLargeException;
    public PostToConnectionResponse withPayloadTooLargeException(Object payloadTooLargeException) {
        this.payloadTooLargeException = payloadTooLargeException;
        return this;
    }
    public Long statusCode;
    public PostToConnectionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}