package openapisdk.models.operations;



public class DeleteApiCacheResponse {
    public Object badRequestException;
    public DeleteApiCacheResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public Object concurrentModificationException;
    public DeleteApiCacheResponse withConcurrentModificationException(Object concurrentModificationException) {
        this.concurrentModificationException = concurrentModificationException;
        return this;
    }
    public String contentType;
    public DeleteApiCacheResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteApiCacheResponse;
    public DeleteApiCacheResponse withDeleteApiCacheResponse(java.util.Map<String, Object> deleteApiCacheResponse) {
        this.deleteApiCacheResponse = deleteApiCacheResponse;
        return this;
    }
    public Object internalFailureException;
    public DeleteApiCacheResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object notFoundException;
    public DeleteApiCacheResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteApiCacheResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthorizedException;
    public DeleteApiCacheResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}