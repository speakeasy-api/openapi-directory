package openapisdk.models.operations;



public class UpdateFunctionResponse {
    public Object concurrentModificationException;
    public UpdateFunctionResponse withConcurrentModificationException(Object concurrentModificationException) {
        this.concurrentModificationException = concurrentModificationException;
        return this;
    }
    public String contentType;
    public UpdateFunctionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public UpdateFunctionResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object notFoundException;
    public UpdateFunctionResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateFunctionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthorizedException;
    public UpdateFunctionResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
    public openapisdk.models.shared.UpdateFunctionResponse updateFunctionResponse;
    public UpdateFunctionResponse withUpdateFunctionResponse(openapisdk.models.shared.UpdateFunctionResponse updateFunctionResponse) {
        this.updateFunctionResponse = updateFunctionResponse;
        return this;
    }
}