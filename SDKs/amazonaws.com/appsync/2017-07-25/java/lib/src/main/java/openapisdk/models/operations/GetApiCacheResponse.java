package openapisdk.models.operations;



public class GetApiCacheResponse {
    public Object badRequestException;
    public GetApiCacheResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public Object concurrentModificationException;
    public GetApiCacheResponse withConcurrentModificationException(Object concurrentModificationException) {
        this.concurrentModificationException = concurrentModificationException;
        return this;
    }
    public String contentType;
    public GetApiCacheResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetApiCacheResponse getApiCacheResponse;
    public GetApiCacheResponse withGetApiCacheResponse(openapisdk.models.shared.GetApiCacheResponse getApiCacheResponse) {
        this.getApiCacheResponse = getApiCacheResponse;
        return this;
    }
    public Object internalFailureException;
    public GetApiCacheResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object notFoundException;
    public GetApiCacheResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public GetApiCacheResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthorizedException;
    public GetApiCacheResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}