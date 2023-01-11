package openapisdk.models.operations;



public class CreateResolverResponse {
    public Object concurrentModificationException;
    public CreateResolverResponse withConcurrentModificationException(Object concurrentModificationException) {
        this.concurrentModificationException = concurrentModificationException;
        return this;
    }
    public String contentType;
    public CreateResolverResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateResolverResponse createResolverResponse;
    public CreateResolverResponse withCreateResolverResponse(openapisdk.models.shared.CreateResolverResponse createResolverResponse) {
        this.createResolverResponse = createResolverResponse;
        return this;
    }
    public Object internalFailureException;
    public CreateResolverResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object notFoundException;
    public CreateResolverResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public CreateResolverResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthorizedException;
    public CreateResolverResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}