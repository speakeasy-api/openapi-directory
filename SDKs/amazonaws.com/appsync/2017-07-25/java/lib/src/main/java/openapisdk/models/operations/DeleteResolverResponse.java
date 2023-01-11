package openapisdk.models.operations;



public class DeleteResolverResponse {
    public Object concurrentModificationException;
    public DeleteResolverResponse withConcurrentModificationException(Object concurrentModificationException) {
        this.concurrentModificationException = concurrentModificationException;
        return this;
    }
    public String contentType;
    public DeleteResolverResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteResolverResponse;
    public DeleteResolverResponse withDeleteResolverResponse(java.util.Map<String, Object> deleteResolverResponse) {
        this.deleteResolverResponse = deleteResolverResponse;
        return this;
    }
    public Object internalFailureException;
    public DeleteResolverResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object notFoundException;
    public DeleteResolverResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteResolverResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthorizedException;
    public DeleteResolverResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}