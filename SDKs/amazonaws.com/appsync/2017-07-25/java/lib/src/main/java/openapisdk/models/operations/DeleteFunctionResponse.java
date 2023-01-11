package openapisdk.models.operations;



public class DeleteFunctionResponse {
    public Object concurrentModificationException;
    public DeleteFunctionResponse withConcurrentModificationException(Object concurrentModificationException) {
        this.concurrentModificationException = concurrentModificationException;
        return this;
    }
    public String contentType;
    public DeleteFunctionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteFunctionResponse;
    public DeleteFunctionResponse withDeleteFunctionResponse(java.util.Map<String, Object> deleteFunctionResponse) {
        this.deleteFunctionResponse = deleteFunctionResponse;
        return this;
    }
    public Object internalFailureException;
    public DeleteFunctionResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object notFoundException;
    public DeleteFunctionResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteFunctionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthorizedException;
    public DeleteFunctionResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}