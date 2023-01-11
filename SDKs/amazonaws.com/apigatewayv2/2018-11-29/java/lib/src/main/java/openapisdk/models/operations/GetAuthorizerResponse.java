package openapisdk.models.operations;



public class GetAuthorizerResponse {
    public String contentType;
    public GetAuthorizerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetAuthorizerResponse getAuthorizerResponse;
    public GetAuthorizerResponse withGetAuthorizerResponse(openapisdk.models.shared.GetAuthorizerResponse getAuthorizerResponse) {
        this.getAuthorizerResponse = getAuthorizerResponse;
        return this;
    }
    public Object notFoundException;
    public GetAuthorizerResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public GetAuthorizerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public GetAuthorizerResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}