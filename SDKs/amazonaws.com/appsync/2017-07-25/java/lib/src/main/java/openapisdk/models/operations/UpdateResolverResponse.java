package openapisdk.models.operations;



public class UpdateResolverResponse {
    public Object concurrentModificationException;
    public UpdateResolverResponse withConcurrentModificationException(Object concurrentModificationException) {
        this.concurrentModificationException = concurrentModificationException;
        return this;
    }
    public String contentType;
    public UpdateResolverResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public UpdateResolverResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object notFoundException;
    public UpdateResolverResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateResolverResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthorizedException;
    public UpdateResolverResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
    public openapisdk.models.shared.UpdateResolverResponse updateResolverResponse;
    public UpdateResolverResponse withUpdateResolverResponse(openapisdk.models.shared.UpdateResolverResponse updateResolverResponse) {
        this.updateResolverResponse = updateResolverResponse;
        return this;
    }
}