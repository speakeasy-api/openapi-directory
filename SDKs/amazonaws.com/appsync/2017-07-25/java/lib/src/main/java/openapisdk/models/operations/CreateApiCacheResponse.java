package openapisdk.models.operations;



public class CreateApiCacheResponse {
    public Object badRequestException;
    public CreateApiCacheResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public Object concurrentModificationException;
    public CreateApiCacheResponse withConcurrentModificationException(Object concurrentModificationException) {
        this.concurrentModificationException = concurrentModificationException;
        return this;
    }
    public String contentType;
    public CreateApiCacheResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateApiCacheResponse createApiCacheResponse;
    public CreateApiCacheResponse withCreateApiCacheResponse(openapisdk.models.shared.CreateApiCacheResponse createApiCacheResponse) {
        this.createApiCacheResponse = createApiCacheResponse;
        return this;
    }
    public Object internalFailureException;
    public CreateApiCacheResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object notFoundException;
    public CreateApiCacheResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public CreateApiCacheResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthorizedException;
    public CreateApiCacheResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}