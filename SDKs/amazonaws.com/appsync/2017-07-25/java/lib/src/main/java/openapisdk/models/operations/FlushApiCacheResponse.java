package openapisdk.models.operations;



public class FlushApiCacheResponse {
    public Object badRequestException;
    public FlushApiCacheResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public Object concurrentModificationException;
    public FlushApiCacheResponse withConcurrentModificationException(Object concurrentModificationException) {
        this.concurrentModificationException = concurrentModificationException;
        return this;
    }
    public String contentType;
    public FlushApiCacheResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> flushApiCacheResponse;
    public FlushApiCacheResponse withFlushApiCacheResponse(java.util.Map<String, Object> flushApiCacheResponse) {
        this.flushApiCacheResponse = flushApiCacheResponse;
        return this;
    }
    public Object internalFailureException;
    public FlushApiCacheResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object notFoundException;
    public FlushApiCacheResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public FlushApiCacheResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthorizedException;
    public FlushApiCacheResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}