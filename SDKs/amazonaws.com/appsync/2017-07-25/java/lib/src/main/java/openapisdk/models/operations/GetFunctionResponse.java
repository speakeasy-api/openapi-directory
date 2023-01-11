package openapisdk.models.operations;



public class GetFunctionResponse {
    public Object concurrentModificationException;
    public GetFunctionResponse withConcurrentModificationException(Object concurrentModificationException) {
        this.concurrentModificationException = concurrentModificationException;
        return this;
    }
    public String contentType;
    public GetFunctionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetFunctionResponse getFunctionResponse;
    public GetFunctionResponse withGetFunctionResponse(openapisdk.models.shared.GetFunctionResponse getFunctionResponse) {
        this.getFunctionResponse = getFunctionResponse;
        return this;
    }
    public Object notFoundException;
    public GetFunctionResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public GetFunctionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthorizedException;
    public GetFunctionResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}