package openapisdk.models.operations;



public class GetConnectionResponse {
    public String contentType;
    public GetConnectionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object forbiddenException;
    public GetConnectionResponse withForbiddenException(Object forbiddenException) {
        this.forbiddenException = forbiddenException;
        return this;
    }
    public openapisdk.models.shared.GetConnectionResponse getConnectionResponse;
    public GetConnectionResponse withGetConnectionResponse(openapisdk.models.shared.GetConnectionResponse getConnectionResponse) {
        this.getConnectionResponse = getConnectionResponse;
        return this;
    }
    public Object goneException;
    public GetConnectionResponse withGoneException(Object goneException) {
        this.goneException = goneException;
        return this;
    }
    public Object limitExceededException;
    public GetConnectionResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Long statusCode;
    public GetConnectionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}