package openapisdk.models.operations;



public class DeleteConnectionResponse {
    public String contentType;
    public DeleteConnectionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object forbiddenException;
    public DeleteConnectionResponse withForbiddenException(Object forbiddenException) {
        this.forbiddenException = forbiddenException;
        return this;
    }
    public Object goneException;
    public DeleteConnectionResponse withGoneException(Object goneException) {
        this.goneException = goneException;
        return this;
    }
    public Object limitExceededException;
    public DeleteConnectionResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Long statusCode;
    public DeleteConnectionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}