package openapisdk.models.operations;



public class UpdateApiCacheResponse {
    public Object badRequestException;
    public UpdateApiCacheResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public Object concurrentModificationException;
    public UpdateApiCacheResponse withConcurrentModificationException(Object concurrentModificationException) {
        this.concurrentModificationException = concurrentModificationException;
        return this;
    }
    public String contentType;
    public UpdateApiCacheResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public UpdateApiCacheResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object notFoundException;
    public UpdateApiCacheResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateApiCacheResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthorizedException;
    public UpdateApiCacheResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
    public openapisdk.models.shared.UpdateApiCacheResponse updateApiCacheResponse;
    public UpdateApiCacheResponse withUpdateApiCacheResponse(openapisdk.models.shared.UpdateApiCacheResponse updateApiCacheResponse) {
        this.updateApiCacheResponse = updateApiCacheResponse;
        return this;
    }
}