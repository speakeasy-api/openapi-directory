package openapisdk.models.operations;



public class GetTypeResponse {
    public Object badRequestException;
    public GetTypeResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public Object concurrentModificationException;
    public GetTypeResponse withConcurrentModificationException(Object concurrentModificationException) {
        this.concurrentModificationException = concurrentModificationException;
        return this;
    }
    public String contentType;
    public GetTypeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetTypeResponse getTypeResponse;
    public GetTypeResponse withGetTypeResponse(openapisdk.models.shared.GetTypeResponse getTypeResponse) {
        this.getTypeResponse = getTypeResponse;
        return this;
    }
    public Object internalFailureException;
    public GetTypeResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object notFoundException;
    public GetTypeResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public GetTypeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthorizedException;
    public GetTypeResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}