package openapisdk.models.operations;



public class CreateFunctionResponse {
    public Object concurrentModificationException;
    public CreateFunctionResponse withConcurrentModificationException(Object concurrentModificationException) {
        this.concurrentModificationException = concurrentModificationException;
        return this;
    }
    public String contentType;
    public CreateFunctionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateFunctionResponse createFunctionResponse;
    public CreateFunctionResponse withCreateFunctionResponse(openapisdk.models.shared.CreateFunctionResponse createFunctionResponse) {
        this.createFunctionResponse = createFunctionResponse;
        return this;
    }
    public Object internalFailureException;
    public CreateFunctionResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object notFoundException;
    public CreateFunctionResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public CreateFunctionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthorizedException;
    public CreateFunctionResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}