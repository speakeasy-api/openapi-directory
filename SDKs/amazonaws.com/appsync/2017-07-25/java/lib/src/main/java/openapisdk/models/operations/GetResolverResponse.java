package openapisdk.models.operations;



public class GetResolverResponse {
    public Object concurrentModificationException;
    public GetResolverResponse withConcurrentModificationException(Object concurrentModificationException) {
        this.concurrentModificationException = concurrentModificationException;
        return this;
    }
    public String contentType;
    public GetResolverResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetResolverResponse getResolverResponse;
    public GetResolverResponse withGetResolverResponse(openapisdk.models.shared.GetResolverResponse getResolverResponse) {
        this.getResolverResponse = getResolverResponse;
        return this;
    }
    public Object notFoundException;
    public GetResolverResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public GetResolverResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthorizedException;
    public GetResolverResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}